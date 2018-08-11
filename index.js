/*! (c) Andrea Giammarchi (ISC) */
(function (set) {
  set(Array, function put(value) {
    this.push(value);
    return value;
  });
  set(Map, function put(key, value) {
    this.set(key, value);
    return value;
  });
  set(Set, function put(value) {
    this.add(value);
    return value;
  });
  set(WeakMap, function put(key, value) {
    this.set(key, value);
    return value;
  });
  set(WeakSet, function put(value) {
    this.add(value);
    return value;
  });
}(function (Class, callback) {
  Object.defineProperty(Class.prototype, 'put', {
    configurable: true,
    writable: true,
    value: callback
  });
}));
