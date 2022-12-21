import { describe, expect, it } from '@jest/globals';

import { add } from '../build/release.js'

// Test WASM code through JS Binding.
describe('binding', () => {
    it('add "1 + 2" should return "3"', async () => {
        expect(add(1, 2)).toEqual(3)
    })
})
