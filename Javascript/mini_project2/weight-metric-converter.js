// alert("Welcome to Weight Metric Converter!")
// var weight_in_lbs = prompt("Enter the weight in pounds(lbs): ")
// var result = weight_in_lbs * 0.454 ;
// alert("Your weight in Kg: "+ result)
// console.log("Thank you using our Converter!!")


function setConvert() {
  var num1 = parseFloat(document.getElementById('num1').value);
  let weight_in_kg = num1 * 0.457 
  var resultElement = document.getElementById('Result');
  resultElement.innerHTML = 'Weight in Kg:' + weight_in_kg+ "Kg";
  resultElement.style.color = 'green'; // Set the color to green
}