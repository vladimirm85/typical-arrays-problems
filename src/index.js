exports.min = (array) => {
  if (!array || !array.length) return 0;
  array.sort((a, b) => a - b);
  return array[0];
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
