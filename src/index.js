////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2014 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import typeInfo from './type-info';
import isTypedArray from './is-typed-array';
import isString from './is-string';
import isNumeric from './is-numeric';
import isBoolean from './is-boolean';
import isError from './is-error';
import isArguments from './is-arguments';
import isWeak from './is-weak';
import isCollection from './is-collection';
import isBuffer from './is-buffer';
import isBuiltInClass from './is-built-in-class';
import isIntl from './is-intl';
import isIterator from './is-iterator';
import {
  AGGREGATEERROR_EXISTS,
  ARRAYBUFFER_EXISTS,
  ARRAY_ISARRAY_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  ATOMICS_EXISTS,
  BIGINT64ARRAY_EXISTS,
  BIGINT_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  DATAVIEW_EXISTS,
  FINALIZATIONREGISTRY_EXISTS,
  FLOAT32ARRAY_EXISTS,
  FLOAT64ARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  INT8ARRAY_EXISTS,
  INTERNALERROR_EXISTS,
  INTL_COLLATOR_EXISTS,
  INTL_DATETIMEFORMAT_EXISTS,
  INTL_DISPLAYNAMES_EXISTS,
  INTL_DURATIONFORMAT_EXISTS,
  INTL_EXISTS,
  INTL_LISTFORMAT_EXISTS,
  INTL_LOCALE_EXISTS,
  INTL_NUMBERFORMAT_EXISTS,
  INTL_PLURALRULES_EXISTS,
  INTL_RELATIVETIMEFORMAT_EXISTS,
  INTL_SEGMENTER_EXISTS,
  INTL_SEGMENTER_ITERATOR_EXISTS,
  MAP_ENTRIES_EXISTS,
  MAP_EXISTS,
  MAP_ITERATOR_EXISTS,
  PROMISE_EXISTS,
  PROXY_EXISTS,
  REFLECT_EXISTS,
  REGEXP_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  SET_ENTRIES_EXISTS,
  SET_EXISTS,
  SET_ITERATOR_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
  STRING_ITERATOR_EXISTS,
  SYMBOL_EXISTS,
  SYMBOL_ITERATOR_EXISTS,
  SYMBOL_MATCH_ALL_EXISTS,
  SYMBOL_TO_STRING_TAG_EXISTS,
  UINT16ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  WEAKMAP_EXISTS,
  WEAKREF_EXISTS,
  WEAKSET_EXISTS,
} from './feature-detect';
import {
  AggregateErrorPrototype,
  ArrayBufferPrototype,
  ArrayIteratorPrototype,
  BigInt64ArrayPrototype,
  BigIntPrototype,
  BigUint64ArrayPrototype,
  DataViewPrototype,
  FinalizationRegistryPrototype,
  Float32ArrayPrototype,
  Float64ArrayPrototype,
  Int16ArrayPrototype,
  Int32ArrayPrototype,
  Int8ArrayPrototype,
  IntelSegmentIteratorPrototype,
  InternalErrorPrototype,
  IntlCollatorPrototype,
  IntlDateTimeFormatPrototype,
  IntlDisplayNamesPrototype,
  IntlDurationFormatPrototype,
  IntlListFormatPrototype,
  IntlLocalePrototype,
  IntlNumberFormatPrototype,
  IntlPluralRulesPrototype,
  IntlRelativeTimeFormatPrototype,
  IntlSegmenterPrototype,
  MapIteratorPrototype,
  MapPrototype,
  PromisePrototype,
  RegExpIteratorPrototype,
  RegExpPrototype,
  SetIteratorPrototype,
  SetPrototype,
  SharedArrayBufferPrototype,
  StringIteratorPrototype,
  SymbolPrototype,
  Uint16ArrayPrototype,
  Uint32ArrayPrototype,
  Uint8ArrayPrototype,
  Uint8ClampedArrayPrototype,
  WeakMapPrototype,
  WeakRefPrototype,
  WeakSetPrototype,
} from './impl/builtin-prototype';

export {
  typeInfo,
  isArguments,
  isBoolean,
  isBuffer,
  isBuiltInClass,
  isCollection,
  isError,
  isIntl,
  isIterator,
  isNumeric,
  isString,
  isTypedArray,
  isWeak,
  AGGREGATEERROR_EXISTS,
  ARRAYBUFFER_EXISTS,
  ARRAY_ISARRAY_EXISTS,
  ARRAY_ITERATOR_EXISTS,
  ATOMICS_EXISTS,
  BIGINT64ARRAY_EXISTS,
  BIGINT_EXISTS,
  BIGUINT64ARRAY_EXISTS,
  DATAVIEW_EXISTS,
  FINALIZATIONREGISTRY_EXISTS,
  FLOAT32ARRAY_EXISTS,
  FLOAT64ARRAY_EXISTS,
  INT16ARRAY_EXISTS,
  INT32ARRAY_EXISTS,
  INT8ARRAY_EXISTS,
  INTERNALERROR_EXISTS,
  INTL_COLLATOR_EXISTS,
  INTL_DATETIMEFORMAT_EXISTS,
  INTL_DISPLAYNAMES_EXISTS,
  INTL_DURATIONFORMAT_EXISTS,
  INTL_EXISTS,
  INTL_LISTFORMAT_EXISTS,
  INTL_LOCALE_EXISTS,
  INTL_NUMBERFORMAT_EXISTS,
  INTL_PLURALRULES_EXISTS,
  INTL_RELATIVETIMEFORMAT_EXISTS,
  INTL_SEGMENTER_EXISTS,
  INTL_SEGMENTER_ITERATOR_EXISTS,
  MAP_ENTRIES_EXISTS,
  MAP_EXISTS,
  MAP_ITERATOR_EXISTS,
  PROMISE_EXISTS,
  PROXY_EXISTS,
  REFLECT_EXISTS,
  REGEXP_EXISTS,
  REGEXP_ITERATOR_EXISTS,
  SET_ENTRIES_EXISTS,
  SET_EXISTS,
  SET_ITERATOR_EXISTS,
  SHAREDARRAYBUFFER_EXISTS,
  STRING_ITERATOR_EXISTS,
  SYMBOL_EXISTS,
  SYMBOL_ITERATOR_EXISTS,
  SYMBOL_MATCH_ALL_EXISTS,
  SYMBOL_TO_STRING_TAG_EXISTS,
  UINT16ARRAY_EXISTS,
  UINT32ARRAY_EXISTS,
  UINT8ARRAY_EXISTS,
  UINT8CLAMPEDARRAY_EXISTS,
  WEAKMAP_EXISTS,
  WEAKREF_EXISTS,
  WEAKSET_EXISTS,
  AggregateErrorPrototype,
  ArrayBufferPrototype,
  ArrayIteratorPrototype,
  BigInt64ArrayPrototype,
  BigIntPrototype,
  BigUint64ArrayPrototype,
  DataViewPrototype,
  FinalizationRegistryPrototype,
  Float32ArrayPrototype,
  Float64ArrayPrototype,
  Int16ArrayPrototype,
  Int32ArrayPrototype,
  Int8ArrayPrototype,
  IntelSegmentIteratorPrototype,
  InternalErrorPrototype,
  IntlCollatorPrototype,
  IntlDateTimeFormatPrototype,
  IntlDisplayNamesPrototype,
  IntlDurationFormatPrototype,
  IntlListFormatPrototype,
  IntlLocalePrototype,
  IntlNumberFormatPrototype,
  IntlPluralRulesPrototype,
  IntlRelativeTimeFormatPrototype,
  IntlSegmenterPrototype,
  MapIteratorPrototype,
  MapPrototype,
  PromisePrototype,
  RegExpIteratorPrototype,
  RegExpPrototype,
  SetIteratorPrototype,
  SetPrototype,
  SharedArrayBufferPrototype,
  StringIteratorPrototype,
  SymbolPrototype,
  Uint16ArrayPrototype,
  Uint32ArrayPrototype,
  Uint8ArrayPrototype,
  Uint8ClampedArrayPrototype,
  WeakMapPrototype,
  WeakRefPrototype,
  WeakSetPrototype,
};

export default typeInfo;
