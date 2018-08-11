require('./index.js');

var arr = [];
var map = new Map;
var set = new Set;
var wmap = new WeakMap;
var wset = new WeakSet;

var key = 'name';
var value = Math.random();

console.assert(arr.put(value) === value && arr.indexOf(value) === 0, 'Array is patched');
console.assert(map.put(key, value) === value && map.get(key) === value, 'Map is patched');
console.assert(set.put(value) === value && set.has(value), 'Set is patched');
console.assert(wmap.put(map, value) === value && wmap.get(map) === value, 'WeakMap is patched');
console.assert(wset.put(set) === set && wset.has(set), 'WeakSet is patched');
