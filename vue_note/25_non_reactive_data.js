// 👉non - reactive data in Vue.js 3. 
// In Vue.js, the reactivity system allows you to create data properties that automatically update when their dependencies change.However, there may be cases where you want to define data that should not be reactive.Let's dive into the concept with some code examples.

// ✅In Vue.js 3, non - reactive data can be achieved using the markRaw function. This function marks an object as non - reactive, meaning it won't trigger updates or re-renders when its properties change. Here's an example:


// import { reactive, markRaw } from 'vue';

// const reactiveData = reactive({
//     name: 'John',
//     age: 25,
// });

// const nonReactiveData = markRaw({
//     hobby: 'Gardening',
// });

// console.log(reactiveData.name); // Output: 'John'
// console.log(nonReactiveData.hobby); // Output: 'Gardening'

// Attempting to make changes
// reactiveData.name = 'Jane'; // This triggers reactivity
// nonReactiveData.hobby = 'Cooking'; // This does not trigger reactivity

// console.log(reactiveData.name); // Output: 'Jane'
// console.log(nonReactiveData.hobby); // Output: 'Cooking'

// In the example above, we import reactive and markRaw from the Vue package.We create two objects, reactiveData and nonReactiveData.The reactiveData object is defined as reactive using the reactive function, while the nonReactiveData object is marked as non - reactive using markRaw.

// When we log the values of reactiveData.name and nonReactiveData.hobby, we can see their initial values.However, when we attempt to make changes, only the reactive data triggers reactivity.The assignment of reactiveData.name to 'Jane' triggers reactivity and updates the value.On the other hand, the assignment of nonReactiveData.hobby to 'Cooking' does not trigger reactivity or update the value.

//     It's important to note that markRaw only marks the object as non-reactive at the top level. If the object contains nested reactive properties, those nested properties will still be reactive. If you want to mark an entire object and its nested properties as non-reactive, you can use the shallowReactive function instead of reactive.

// That's how you can create non-reactive data in Vue.js 3 using markRaw. It can be useful in scenarios where you have data that doesn't need to trigger reactivity.






