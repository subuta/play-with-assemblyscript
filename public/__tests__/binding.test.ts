import { describe, expect, it } from '@jest/globals';

import load from '../binding'

// Test WASM code through JS Binding.
describe('binding', () => {
    it('add "1 + 2" should return "3"', async () => {
        const { add } = await load()
        expect(add(1, 2)).toEqual(3)
    })
})
