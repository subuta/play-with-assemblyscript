import { JSONEncoder } from "./lib/assemblyscript-json";

// @ts-ignore
@external("src/orm", "apply")
declare function apply(method: string, value: string): void;

export function add(a: i32, b: i32): i32 {
    const result = a + b

    // Create encoder
    let encoder = new JSONEncoder();

    // Construct necessary object
    encoder.pushObject("obj");
    encoder.setInteger("int", 10);
    encoder.setString("str", "");
    encoder.popObject();

    apply('where', encoder.toString())

    return result;
}
