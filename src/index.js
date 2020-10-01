exports.min = (array) => {
  if (!array || !array.length) return 0;
  array.sort((a, b) => a - b);
  return array[0];
}

exports.max = function max (array) {
    if (!array || !array.length) return 0;
    array.sort((a, b) => a - b);
    return array[array.length - 1];
}

exports.avg = function avg (array) {
    if (!array || !array.length) return 0;
    return array.reduce((acc, el)=>acc+el,0)/array.length;
}
