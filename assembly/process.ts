import { JSON } from "./lib/assemblyscript-json";

// @ts-ignore
@external("src/debug", "debugLog")
declare function debugLog(method: string, value: string): void;

export function processJson(json: string): string {
    // parse input as JSON object.
    let jsonArr: JSON.Arr = <JSON.Arr>(JSON.parse(json));

    // modify input
    jsonArr.push(JSON.from("added"));

    const result = jsonArr.toString()

    // Call host method.
    debugLog('processJson', result)

    return result
}
