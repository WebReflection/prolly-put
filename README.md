# prolly-put

[![Build Status](https://travis-ci.com/WebReflection/prolly-put.svg?branch=master)](https://travis-ci.com/WebReflection/prolly-put) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/prolly-put/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/prolly-put?branch=master)

A put method for Array, Map, Set, WeakMap, and WeakSet.

### What

Once upon a time, there was a simple way to retrieve or create some value once.

```js
const value = obj[key] || (obj[key] = create());
```

During those times, [TC39 members didn't believe that was a nice to have pattern](https://esdiscuss.org/topic/map-set-weakmap-set-returns-this), representable via new `.set` or `.add` methods for both Maps and Sets.

```js
// how me and few others were hoping to have
const value = map.get(key) || map.set(key, create());

// what ES5 offered instead
const value = map.get(key) ||
              map.set(key, create()).get(key);
```

Accordingly, what I've always missed with both arrays, maps, or sets, is a way to retrieve a value once or create and set it once if absent.

```js
const value = array.put(create());
// same for WeakMaps
const value = map.get(key) || map.put(key, create());
// same for WeakSets
const value = set.has(value) || set.put(value);
```

There is also a never ambiguous and natural pattern for those cases where a map value could be falsy.
```js
const value = map.has(key) ?
                map.get(key) :
                map.put(key, create());
```

Covering all my needs since ES5.

This prollyfill would like to bring in the `put` method for Array, Maps, Sets, WeakMaps and WeakSets too.
