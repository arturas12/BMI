function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){	
var finalBmi = Math.round(weight/(height/100*height/100))
document.bmiForm.bmi.value = finalBmi


if(finalBmi < 18.5){
document.bmiForm.meaning.value = "UnderWeight."
}
if(finalBmi > 18.5 && finalBmi < 24.9){
document.bmiForm.meaning.value = "Normal."
}
if(finalBmi > 25 && finalBmi < 29.9){
document.bmiForm.meaning.value = "Overweight."
}
if(finalBmi > 30){
document.bmiForm.meaning.value = "Obese."
}
}
else{
alert("Please Fill in everything")
}
}