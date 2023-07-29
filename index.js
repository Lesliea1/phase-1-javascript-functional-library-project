function isObject(item) {
  return typeof item === "object" && !Array.isArray(item);
}

function myEach(collection, callback) {
  if (isObject(collection)) {
    for (const key in collection) {
      if (callback(collection[key], key) === false) {
        break;
      }
    }
  } else {
    for (const item of collection) {
      if (callback(item) === false) {
        break;
      }
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  myEach(collection, (item, key) => {
    const transformedValue = callback(item, key);
    result.push(transformedValue);
  });
  return result;
}

function myReduce(collection, callback, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  const values = isObject(collection)
    ? Object.values(collection)
    : [...collection];

  if (initialValue === undefined) {
    accumulator = values.shift();
  }

  for (const value of values) {
    accumulator = callback(accumulator, value, index++, collection);
  }

  return accumulator;
}

function myFind(collection, predicate) {
  let result;
  myEach(collection, (item) => {
    if (predicate(item) && result === undefined) {
      result = item;
      return false;
    }
  });
  return result;
}

function myFilter(collection, callback) {
  const result = [];
  myEach(collection, (item, key) => {
    if (callback(item, key)) {
      result.push(item);
    }
  });
  return result;
}

function mySize(collection) {
  if (isObject(collection)) {
    return Object.keys(collection).length;
  }
  return collection.length;
}

function myFirst(array, n = 1) {
  if (n === 1) {
    return array[0];
  }
  return array.slice(0, n);
}

function myLast(array, n = 1) {
  if (n === 1) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

function myKeys(obj) {
  return Object.keys(obj);
}

function myValues(obj) {
  return Object.values(obj);
}
