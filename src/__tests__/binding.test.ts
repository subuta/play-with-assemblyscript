import { describe, expect, it } from '@jest/globals';

import { processJson } from 'public/build/debug'

// Test WASM code through JS Binding.
describe('binding', () => {
    it('add "1 + 2" should return "3"', async () => {
        expect(processJson(JSON.stringify([1,2,3]))).toEqual(JSON.stringify([1,2,3,'added']))
    })
})
