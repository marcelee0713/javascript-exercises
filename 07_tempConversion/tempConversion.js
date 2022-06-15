const ftoc = function(num1) {
  let firstComputation = num1 - 32; 
  let secondComputation = firstComputation / 1.8;
  let finalComputation = Number(secondComputation.toFixed(1));
  return finalComputation;
};

const ctof = function(num1) {
  let firstComputation = num1 * 1.8;
  let secondComputation = firstComputation + 32;
  let finalComputation = Number(secondComputation.toFixed(1));
  return finalComputation;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
