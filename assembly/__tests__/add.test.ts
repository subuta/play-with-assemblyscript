import { describe, expect, it } from '@jest/globals';

import { add } from '../'

// Test AssemblyScript code as TS.
describe('add', () => {
    it('1 + 2', () => {
        expect(add(1, 2)).toEqual(3)
    })
})
