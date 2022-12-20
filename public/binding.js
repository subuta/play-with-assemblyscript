const isBrowser = typeof window !== 'undefined'

const instantiate = async (module, imports = {}) => {
    const instance = await globalThis.WebAssembly.instantiate(module, imports);
    return instance.exports;
}

const getUrl = async (debug = false) => {
    let file = 'release.wasm'
    if (debug) {
        file = 'debug.wasm'
    }
    if (isBrowser) {
        // Use absolute path for Browser.
        return `/build/${file}`
    } else {
        // Use relative path for Node.
        const path = require('path')
        const dirname = path.dirname(new URL(import.meta.url).pathname)
        const BUILD_DIR = path.resolve(dirname, './build')
        return path.resolve(BUILD_DIR, './' + file)
    }
}

export const load = async (debug = false) => {
    const url = await getUrl(debug)
    const imports = {}
    if (isBrowser) {
        return instantiate(await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)), imports)
    } else {
        const fs = require('fs/promises')
        return instantiate(await globalThis.WebAssembly.compile(await fs.readFile(url)), imports)
    }
}

export default load
