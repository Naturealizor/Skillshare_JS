// Sample function
// function Addition() {
// 	var num1 = 15
// 	var num2 = 89
	
// 	var total = num1 + num2
// 	return total
// }

// function Addition(num1, num2) {
// 	var total = num1 + num2
// 	return total
// }
// var newTotal = Addition(15, 89)
// alert(newTotal)

function getName() {
	var nameElement = document.querySelector('.name')
	var name = nameElement.value

	var newName = name.replace('Smith', 'Jordan')

	return newName
}
// var name = getName();
// console.log(name);
function getFirstName() {
	var name = getName()

	var firstname = name.split(" ")

	return firstname[0]
}
 var firstname = getFirstName()
 console.log(firstname)