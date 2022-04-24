(function () {
  function Calculator() {
    this.sum = 0;
  }

  Calculator.prototype.add = function (array) {
    // use function not arrow, cause we need 'this'
    array.forEach((current, index) => {
      this.sum += current;
    }, this); // to use scope of Calculator
  };

  console.log("wtf");

  var instance = new Calculator();
  instance.add([1, 2, 3]);
  console.log("sum is", instance.sum);
})();
