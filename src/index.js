const isValidParams = (params) => !(!params || !params.length);
const arraySort = (array) => array.sort((a, b) => a - b);


exports.min = (array) => isValidParams(array) ? arraySort(array)[0] : 0;

exports.max = (array) => isValidParams(array) ? arraySort(array)[array.length - 1] : 0;

exports.avg = (array) => isValidParams(array) ? array.reduce((acc, el)=>acc+el,0)/array.length : 0;
