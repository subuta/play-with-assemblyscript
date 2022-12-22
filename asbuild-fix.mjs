import shell from 'shelljs'
import _ from 'lodash'

// Fix asbuild binding.
shell.ls('./public/build/*.js').forEach(function (file) {
  if (_.endsWith(file, 'release.js')) {
    shell.sed('-i', 'new URL\\("release.wasm", import.meta.url\\)', '"/build/release.wasm"', file);
  }
})
