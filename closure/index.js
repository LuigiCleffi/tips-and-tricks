function outerFunction(x) {
  return function innerFunction(y) {
      return x + y;
  };
}

const closure = outerFunction(10);
const result = closure(5);
console.log(result);
