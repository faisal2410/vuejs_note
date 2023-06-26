// 👉Script setup api example one

{/* <script setup>
import { ref } from 'vue'
const c = ref(0); const f = ref(32)
function setC(e, v = +e.target.value) {
c.value = v
f.value = v * (9 / 5) + 32
}
function setF(e, v = +e.target.value) {
f.value = v
c.value = (v - 32) * (5 / 9)
}
</script>
<template>
<input type="number" :value="c" @change="setC"/> Celsius
<input type="number" :value="f" @change="setF" /> Fahrenheit
</template> */}


// ✅ Explanation :

// Let's break down the code step by step.

// The code you provided is written in Vue.js 3, which is a popular JavaScript framework for building user interfaces.This code defines a simple temperature converter that allows users to enter a value in either Celsius or Fahrenheit, and it automatically updates the other input field with the corresponding converted value.

//     Let's start with the <script setup> block:


//     < script setup >
// import { ref } from 'vue'
// const c = ref(0); const f = ref(32)
// function setC(e, v = +e.target.value) {
//     c.value = v
//     f.value = v * (9 / 5) + 32
// }
// function setF(e, v = +e.target.value) {
//     f.value = v
//     c.value = (v - 32) * (5 / 9)
// }
// </ >
//     In this block, we import the ref function from the Vue library.The ref function is used to create reactive variables in Vue.These variables can be bound to the template and will automatically update when their values change.

// The code defines two reactive variables, c and f, using the ref function. The initial value of c is set to 0, representing Celsius, and the initial value of f is set to 32, representing Fahrenheit.

//     Next, there are two functions: setC and setF.These functions handle the change events for the Celsius and Fahrenheit input fields, respectively.They take two parameters: e(the event object) and v(the value from the input field).

// The setC function is called when the Celsius input field changes.It updates the c variable with the new value and calculates the corresponding Fahrenheit value by multiplying the Celsius value by 9 / 5 and adding 32. The result is assigned to the f variable.

// The setF function is called when the Fahrenheit input field changes.It updates the f variable with the new value and calculates the corresponding Celsius value by subtracting 32 from the Fahrenheit value and multiplying by 5 / 9. The result is assigned to the c variable.

// Moving on to the < template > block:


//     < template >
//     <input type="number" : value="c" @change="setC" /> Celsius
//         < input type = "number" : value = "f" @change="setF" /> Fahrenheit
// </ >
//     This block defines the template for the UI.It consists of two input fields, one for Celsius and one for Fahrenheit.The :value directive binds the value of each input field to the corresponding reactive variable(c for Celsius and f for Fahrenheit).This means that the input field will display the current value of the variable, and any changes to the variable will update the input field automatically.

//         The @change event listener is attached to each input field.When the user changes the value in the input field, the corresponding function (setC or setF) is called, passing the event object as an argument.

//             So, in summary, this code sets up a temperature converter in Vue.js 3, where users can enter a value in either Celsius or Fahrenheit, and the other input field will automatically display the converted value.The conversion logic is handled by the setC and setF functions, which update the reactive variables c and f and perform the necessary calculations.

// I hope this explanation helps you understand the code! Let me know if you have any further questions.





