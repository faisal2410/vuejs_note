// 👉 DOM, Composition api

// <template>
// <input :ref="inputEl"/>
// </template>
// <script>
// import { ref } from 'vue';
// export default {
// setup() {
// const inputEl =ref(null)
// console.log(inputEl.value) //input value
// return {inputEl}
// }
// }
// </script>


// ✅ Explanation

// First, let's go through the code line by line:


//     < template >
//     <input: ref="inputEl" />
// </ >
//     In the template section, we have a single < input > element.The :ref attribute is a Vue directive that allows us to assign a reference to an element, in this case, the input element.We are binding the inputEl variable as a reference to the input element.

// Moving on to the script section:


//     < script >
// import { ref } from 'vue';

// export default {
//     setup() {
//         const inputEl = ref(null);
//         console.log(inputEl.value); // input value
//         return { inputEl };
//     },
// };
// </ >
//     Here, we import the ref function from the Vue library.The ref function is a Vue composition API function that allows us to create a reactive reference.

// Inside the setup function, we create a variable called inputEl using the ref function. The initial value of the inputEl reference is set to null.

//     Next, we have the line console.log(inputEl.value);.Here, we log the current value of the inputEl reference.Since we're using the .value property, we're accessing the value of the referenced input element.

//         Finally, we have the return { inputEl }; statement.This line makes the inputEl reference available for use in the template section of the component.By returning it, we expose it as a property that can be accessed by other parts of the component or its parent components.

// In summary, this code defines a Vue.js component with an input element and a ref to that input element.It logs the current value of the input element to the console and makes the inputEl reference available for use in the template.





