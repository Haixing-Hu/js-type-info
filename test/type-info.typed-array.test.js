////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  BIGINT64ARRAY_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  FLOAT32ARRAY_EXISTS,
  FLOAT64ARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  INT8ARRAY_EXISTS,
  UINT16ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  typeInfo,
} from '../src';

/* eslint-disable no-undef */

/**
 * Unit test of the `typeInfo()` function.
 *
 * @author Haixing Hu
 */
describe('Test the `typeInfo()` function for typed array objects', () => {
  if (INT8ARRAY_EXISTS) {
    test('Int8Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Int8Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Int8Array,
      };
      expect(typeInfo(new Int8Array(2))).toEqual(expected);
    });
  }
  if (UINT8ARRAY_EXISTS) {
    test('Uint8Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Uint8Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Uint8Array,
      };
      expect(typeInfo(new Uint8Array(2))).toEqual(expected);
    });
  }
  if (UINT8CLAMPEDARRAY_EXISTS) {
    test('Uint8ClampedArray', () => {
      const expected = {
        type: 'object',
        subtype: 'Uint8ClampedArray',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Uint8ClampedArray,
      };
      expect(typeInfo(new Uint8ClampedArray(2))).toEqual(expected);
    });
  }
  if (INT16ARRAY_EXISTS) {
    test('Int16Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Int16Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Int16Array,
      };
      expect(typeInfo(new Int16Array(2))).toEqual(expected);
    });
  }
  if (UINT16ARRAY_EXISTS) {
    test('Uint16Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Uint16Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Uint16Array,
      };
      expect(typeInfo(new Uint16Array(2))).toEqual(expected);
    });
  }
  if (INT32ARRAY_EXISTS) {
    test('Int32Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Int32Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Int32Array,
      };
      expect(typeInfo(new Int32Array(2))).toEqual(expected);
    });
  }
  if (UINT32ARRAY_EXISTS) {
    test('Uint32Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Uint32Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Uint32Array,
      };
      expect(typeInfo(new Uint32Array(2))).toEqual(expected);
    });
  }
  if (BIGINT64ARRAY_EXISTS) {
    test('BigInt64Array', () => {
      const expected = {
        type: 'object',
        subtype: 'BigInt64Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: BigInt64Array,
      };
      expect(typeInfo(new BigInt64Array(2))).toEqual(expected);
    });
  }
  if (BIGUINT64ARRAY_EXISTS) {
    test('BigUint64Array', () => {
      const expected = {
        type: 'object',
        subtype: 'BigUint64Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: BigUint64Array,
      };
      expect(typeInfo(new BigUint64Array(2))).toEqual(expected);
    });
  }
  if (FLOAT32ARRAY_EXISTS) {
    test('Float32Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Float32Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Float32Array,
      };
      expect(typeInfo(new Float32Array(2))).toEqual(expected);
    });
  }
  if (FLOAT64ARRAY_EXISTS) {
    test('Float64Array', () => {
      const expected = {
        type: 'object',
        subtype: 'Float64Array',
        category: 'typed-array',
        isPrimitive: false,
        isBuiltIn: true,
        isWebApi: false,
        constructor: Float64Array,
      };
      expect(typeInfo(new Float64Array(2))).toEqual(expected);
    });
  }
});
