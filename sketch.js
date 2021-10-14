function findC() {
  let input = {
    a: prompt('In a² + b² = c², enter in "a."'),
    b: prompt('In a² + b² = c², enter in "b."')
  };

  let aPrime = (input.a * 1) * (input.a * 1);
  console.log(aPrime);

  let bPrime = (input.b * 1) * (input.b * 1);
  console.log(bPrime);

  let tempC = aPrime + bPrime;
  console.log(tempC);
  let c = Math.sqrt(tempC);

  console.log(c);
  alert('c = ' + c);
}
