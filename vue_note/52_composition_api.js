// 👉Composition API in Vue.js 3 .
// The Composition API is a new way of organizing and reusing logic in Vue.js 3, making it easier to build complex and scalable applications.It encourages a more functional programming style and offers better code organization compared to the Options API in previous versions of Vue.js.

//     Let's start with the basics and then dive into code examples. To use the Composition API, you need to have Vue.js 3 installed in your project. If you haven't installed it yet, you can do so by running the following command:


// npm install vue @next
// Now, let's look at how to create a basic Vue component using the Composition API.


//     < template >
//     <div>
//         <p>{{ message }}</p>
//         <button @click="increaseCount">Increase Count</button>
//   </div >
// </ >

//     <script>
//         import {ref} from 'vue';

//         export default {
//             setup() {
     // Define reactive data using ref
//     const message = ref('Hello, Composition API!');
//         const count = ref(0);

         // Define a method
//         function increaseCount() {
//             count.value++;
//     }

         // Return reactive data and methods
//         return {
//             message,
//             count,
//             increaseCount,
//     };
//   },
// };
//     </script>
// In the code above, we import the ref function from the vue package, which allows us to create reactive data.The setup function is where we define our reactive data(message and count in this example) and methods(increaseCount).

// Inside the setup function, we create a reactive reference to the message and count variables using ref.This allows Vue to track changes to these variables and automatically update the DOM when they change.

// The increaseCount function is a regular JavaScript function that increments the count variable.

//     Finally, we return an object from the setup function containing the reactive data(message and count) and the method(increaseCount).This makes them accessible in the template.

// Note that in the Composition API, you don't use the data property like in the Options API. Instead, you define your reactive data using ref and return them from the setup function.

// This is just a simple example to give you a taste of how the Composition API works.It's also important to note that the Composition API allows you to organize your code into reusable functions called "composition functions." These functions can be imported and used in multiple components, promoting code reuse.

// Here's an example of a composition function:


 // utils.js
// import { ref } from 'vue';

// export function useCounter(initialCount) {
//     const count = ref(initialCount);

//     function increment() {
//         count.value++;
//     }

//     function decrement() {
//         count.value--;
//     }

//     return {
//         count,
//         increment,
//         decrement,
//     };
// }
// In this example, we define a useCounter function that returns an object containing the count, increment, and decrement variables and functions.This function can be imported and used in multiple components, allowing you to reuse the counter logic easily.

//     Here's an example of using the useCounter composition function in a component:


//     < template >
//   <div>
//     <p>Count: {{ counter.count }}</p>
//     <button @click="counter.increment">Increment</button>
//     <button @click="counter.decrement" > Decrement</button >
//   </div >
// </ >

//     <script>
//         import {useCounter} from './



//         Reactive properties:
//         The Composition API provides the ref function to create reactive properties. However, there are other functions available for different types of reactive properties, such as reactive for reactive objects and computed for computed properties. Here's an example:


//         import {ref, reactive, computed} from 'vue';

//         export default {
//             setup() {
//     const name = ref('John');
//         const person = reactive({name: 'Jane', age: 25 });

//     const fullName = computed(() => {
//       return `${name.value} ${person.name}`;
//     });

//         return {
//             name,
//             person,
//             fullName,
//     };
//   },
// };
//         In this example, we have a reactive property name created with ref and a reactive object person created with reactive. We also create a computed property fullName using computed that concatenates name and person.name.

//         Lifecycle hooks:
//         In Vue.js 3, the Composition API provides the onMounted, onUpdated, and onUnmounted lifecycle hooks, which you can use inside the setup function. Here's an example:

//         javascript
//         Copy code
//         import {ref, onMounted, onUnmounted} from 'vue';

//         export default {
//             setup() {
//     const intervalId = ref(null);

//     onMounted(() => {
//             intervalId.value = setInterval(() => {
//                 console.log('Interval tick');
//             }, 1000);
//     });

//     onUnmounted(() => {
//             clearInterval(intervalId.value);
//     });
//   },
// };
//         In this example, we use the onMounted hook to start an interval when the component is mounted and the onUnmounted hook to clear the interval when the component is unmounted. The ref is used to store the interval ID.

//         Watchers:
//         The Composition API provides the watch function to watch for changes in reactive properties and perform actions accordingly. Here's an example:

//         import {ref, watch} from 'vue';

//         export default {
//             setup() {
//     const count = ref(0);

//     watch(count, (newCount, oldCount) => {
//             console.log(`Count changed from ${oldCount} to ${newCount}`);
//     });

//         return {
//             count,
//     };
//   },
// };
//         In this example, we use the watch function to watch for changes in the count property. Whenever count changes, the callback function is executed, logging the old and new values of count.

//         Custom Hooks:
//         You can create custom hooks to encapsulate reusable logic in your components. A custom hook is simply a function that uses the Composition API and returns reactive properties, methods, or computed properties. Here's an example:


//         import {ref} from 'vue';

//         export function useValidation(initialValue, validator) {
//   const value = ref(initialValue);
//         const isValid = ref(validator(initialValue));

//         function validate() {
//             isValid.value = validator(value.value);
//   }

//         return {
//             value,
//             isValid,
//             validate,
//   };
// }
//         In this example, we define a custom hook useValidation that takes an initial value and a validator function. It returns a reactive value, isValid, and a validate method. This hook can be imported and used in different components to handle validation logic.



//         Providing and injecting dependencies:
//         The Composition API provides the provide and inject functions to share data and functions between components in a hierarchical manner. Here's an example:

//         import {provide, inject} from 'vue';

         // Parent component
//         export default {
//             setup() {
//     const message = 'Hello from parent';

//         provide('message', message);

     // ...
//   },
// };

         // Child component
//         export default {
//             setup() {
//     const message = inject('message');

         // Access the provided message
//         console.log(message);

     // ...
//   },
// };
//         In this example, the parent component uses the provide function to make the message available to its child components. The child component uses the inject function to access the provided message value.

//         Reusing logic with custom composable functions:
//         Custom composable functions allow you to encapsulate and reuse logic across different components. Composable functions are regular JavaScript functions that use the Composition API. Here's an example:


//         import {ref, computed} from 'vue';

         // Custom composable function
//         export function useCounter(initialValue) {
//   const count = ref(initialValue);

//         function increment() {
//             count.value++;
//   }

//         function decrement() {
//             count.value--;
//   }

//   const doubleCount = computed(() => count.value * 2);

//         return {
//             count,
//             increment,
//             decrement,
//             doubleCount,
//   };
// }

         // Using the custom composable function in a component
//         export default {
//             setup() {
//     const {count, increment, decrement, doubleCount} = useCounter(0);

//         return {
//             count,
//             increment,
//             decrement,
//             doubleCount,
//     };
//   },
// };
//         In this example, we create a custom composable function called useCounter, which returns reactive properties (count and doubleCount) as well as methods (increment and decrement). The custom composable function can be imported and used in different components, promoting code reuse and modularity.

//         These are some additional concepts and code examples related to the Composition API in Vue.js 3. Remember, the Composition API allows you to write more modular, reusable, and testable code by using functions instead of options objects. It provides a more flexible and powerful way to build Vue.js applications. Feel free to explore further documentation and resources to dive deeper into the Composition API and its capabilities.



//         Reactive References (ref) and Unwrapping:
//         The ref function is used to create reactive references in the Composition API. However, when accessing the value of a reactive reference, you need to explicitly unwrap it using the .value property. Here's an example:

//         javascript
//         Copy code
//         import {ref} from 'vue';

//         export default {
//             setup() {
//     const count = ref(0);

//         function increment() {
//             count.value++;
//     }

//         console.log(count.value); // Accessing the value of the reactive reference

//         return {
//             count,
//             increment,
//     };
//   },
// };
//         In this example, we create a reactive reference count using ref. Inside the increment function, we access and modify the value of count using count.value. When accessing the value in the template or outside the setup function, we also need to use count.value to unwrap the reactive reference.

//         Reactive Objects (reactive) and Property Access:
//         The reactive function allows you to create reactive objects in the Composition API. You can access properties of reactive objects directly, without unwrapping them. Here's an example:

//         javascript
//         Copy code
//         import {reactive} from 'vue';

//         export default {
//             setup() {
//     const person = reactive({name: 'John', age: 25 });

//         function updateAge() {
//             person.age++;
//     }

//         console.log(person.name); // Accessing the property directly

//         return {
//             person,
//             updateAge,
//     };
//   },
// };
//         In this example, we create a reactive object person using reactive. Inside the updateAge function, we directly access and modify the age property of person. When accessing properties of reactive objects in the template or outside the setup function, we can access them directly without using .value.

//         Computed Properties (computed) and Dependencies:
//         Computed properties allow you to create derived reactive properties based on one or more reactive dependencies. The computed function is used to define computed properties in the Composition API. Here's an example:

//         import {ref, computed} from 'vue';

//         export default {
//             setup() {
//     const firstName = ref('John');
//         const lastName = ref('Doe');

//     const fullName = computed(() => {
//       return `${firstName.value} ${lastName.value}`;
//     });

//         return {
//             firstName,
//             lastName,
//             fullName,
//     };
//   },
// };
//         In this example, we have reactive references firstName and lastName. We create a computed property fullName using computed, which depends on firstName and lastName. Whenever either firstName or lastName changes, the fullName property is automatically recalculated.

//         Async Operations and reactive:
//         The Composition API provides the reactive function, which allows you to create reactive objects that can be used with async operations. Here's an example:


//         import {reactive} from 'vue';

//         export default {
//             setup() {
//     const data = reactive({loading: true, error: null, items: [] });

//         async function fetchData() {
//       try {
//             data.loading = true;
//         const response = await fetch('https://api.example.com/items');
//         data.items = await response.json();
//       } catch (error) {
//             data.error = error.message;
//       } finally {
//             data.loading = false;
//       }
//     }

//         fetchData();



//         import {reactive} from 'vue';

//         export default {
//             setup() {
//     const data = reactive({loading: true, error: null, items: [] });

//         async function fetchData() {
//       try {
//             data.loading = true;
//         const response = await fetch('https://api.example.com/items');
//         data.items = await response.json();
//       } catch (error) {
//             data.error = error.message;
//       } finally {
//             data.loading = false;
//       }
//     }

//         fetchData();

//         return {
//             data,
//     };
//   },
// };
//         In this example, we create a reactive object data using reactive. It has properties for loading, error, and items.

//         Inside the fetchData function, we perform an asynchronous operation to fetch data from an API. We update the loading property to true before making the request. Upon a successful response, we update the items property with the data received. If an error occurs, we set the error property to the error message. Finally, we set loading back to false regardless of the outcome.

//         By using reactive, any changes to the data object's properties will trigger reactivity in the template or any other component that uses it. For example, you can conditionally render a loading spinner or display an error message based on the loading and error properties.

//         Lifecycle Hooks with Composition API:
//         The Composition API introduces lifecycle hooks as functions that can be used inside the setup function. Here are some commonly used lifecycle hooks:

//         onMounted: Called when the component is mounted.
//         onUpdated: Called when the component is updated.
//         onUnmounted: Called when the component is about to be unmounted.
//         Here's an example:


//         import {ref, onMounted, onUpdated, onUnmounted} from 'vue';

//         export default {
//             setup() {
//     const count = ref(0);

//     onMounted(() => {
//             console.log('Component mounted');
//     });

//     onUpdated(() => {
//             console.log('Component updated');
//     });

//     onUnmounted(() => {
//             console.log('Component unmounted');
//     });

//         return {
//             count,
//     };
//   },
// };
//         In this example, we use the onMounted hook to log a message when the component is mounted. The onUpdated hook logs a message when the component is updated, and the onUnmounted hook logs a message when the component is about to be unmounted.

//         You can use these hooks to perform initialization tasks, fetch data, set up event listeners, or clean up resources when the component is unmounted.

//         These are some additional concepts and code examples related to the Composition API in Vue.js 3. The Composition API offers a more flexible and powerful way to organize and reuse logic in Vue.js components. Remember to consult the official Vue.js documentation and other resources for a more comprehensive understanding of the Composition API and its capabilities.





