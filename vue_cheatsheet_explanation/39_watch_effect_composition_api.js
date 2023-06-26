// 👉 WatchEffect, Composition api

{/* <script>
    import {ref, watch} from 'vue'
    export default {
        setup(props, context) { 
const url = ref('https://...')
    const data = ref(null)
    async function fetchData() {
const response = await fetch(url.value)
    data.value = await response.json()
}
    // fetch immediately
    // fetchData()
    // ...then watch for url change
    // watch(url, fetchData)

    watchEffect(async () => {
const response = await fetch(url.value)
    data.value = await response.json()
})
}
}
</script> */}


// ✅ Explanation :


//watchEffect
//runs a function immediately while reactively tracking its 
// dependencies
//it is like a Computed but without return
// watch vs. watchEffect
// watch and watchEffect both allow us to reactively perform side 
// effects. Their main difference: - watch only tracks the explicitly watched source. 
// It won't track anything accessed inside the callback. - watchEffect combines dependency tracking and side effect 
// into one phase. It automatically tracks every reactive property 
// accessed during its synchronous execution. This is more 
// convenient and typically results in terser code, but makes its 
// reactive dependencies less explicit.


// The code you shared is a Vue.js 3 component.In Vue.js 3, components are created using the Composition API, which allows for more flexibility and reusability.Let's break down the code step by step:

// Import Statements:

// import { ref, watch } from 'vue'
// In this line, we import two functions from the Vue.js package.ref is used to create a reactive reference to a value, and watch is used to watch for changes in a reactive dependency.

// Export Statement:

// export default {
//     setup(props, context) {
         // Component code goes here
//     }
// }
// This code exports a default object representing the Vue component.The setup function is a special function used in the Composition API to define component logic.

// Reactive Variables:

// const url = ref('https://...')
// const data = ref(null)

// These lines declare two reactive variables using the ref function. The url variable is initialized with the value 'https://...', and the data variable is initially set to null.Reactive variables allow the component to automatically react to changes in their values.

// Fetching Data:

// async function fetchData() {
//     const response = await fetch(url.value)
//     data.value = await response.json()
// }

// This function, fetchData, is an asynchronous function that performs a network request using the fetch API.It fetches the data from the URL specified in the url variable, and then sets the data variable to the JSON response.Note that url.value is used to access the value of the reactive url variable.

//     Watchers:

// watch(url, fetchData)
// This line sets up a watcher that triggers the fetchData function whenever the value of the url variable changes.It ensures that the data is automatically updated whenever the URL changes.

// Watch Effect:

// watchEffect(async () => {
//     const response = await fetch(url.value)
//     data.value = await response.json()
// })
// This code uses the watchEffect function, which is a shorthand for setting up an immediate watcher.It immediately fetches data using the url value and updates the data variable.It's similar to calling fetchData() immediately. Whenever the url value changes, the code inside the watchEffect function will be executed again, ensuring that the data stays up to date.

// That's the breakdown of the code you provided. It fetches data from a URL specified in the url variable, stores the fetched data in the data variable, and automatically updates the data whenever the URL changes.



// The watchEffect function is a powerful feature in Vue.js 3's Composition API. It allows you to reactively observe changes to reactive dependencies and execute a callback function whenever any of those dependencies change.

// Here's the syntax of the watchEffect function:


// watchEffect(callback: () => void): StopHandle
// The watchEffect function takes a callback function as its parameter, which will be executed immediately and then re - executed whenever any reactive dependency inside the callback changes.The callback function does not receive any explicit arguments.Instead, it relies on the reactive dependencies used inside the function body.

// Let's dive into some code examples to understand watchEffect better.

// Example 1: Basic Usage


// import { reactive, watchEffect } from 'vue';

// const state = reactive({
//     count: 0,
// });

// watchEffect(() => {
//     console.log(`Count: ${state.count}`);
// });

 // Output:
 // Count: 0

// state.count++;
 // Output:
 // Count: 1

// state.count += 2;
 // Output:
 // Count: 3
// In this example, we have a reactive object state with a count property.Inside the watchEffect callback function, we simply log the value of state.count.Initially, it logs 0 because that's the initial value of state.count. As we update the count property, the callback is automatically executed again, logging the updated value of state.count.

// Example 2: Computed Dependencies


// import { reactive, watchEffect } from 'vue';

// const state = reactive({
//     x: 2,
//     y: 3,
// });

// watchEffect(() => {
//     state.sum = state.x + state.y;
//     console.log(`Sum: ${state.sum}`);
// });

 // Output:
 // Sum: 5

// state.x = 5;
 // Output:
 // Sum: 8

// state.y = 10;
 // Output:
 // Sum: 15
// In this example, we have a reactive object state with x and y properties.Inside the watchEffect callback, we compute the sum of x and y and assign it to a new property sum in state.Whenever x or y changes, the callback function is triggered again, recomputing the sum and logging the updated value.

//     Example 3: Cleanup Function


// import { ref, watchEffect } from 'vue';

// const isVisible = ref(true);

// const cleanup = watchEffect(() => {
//     console.log('Callback executed');

//     if (!isVisible.value) {
//         console.log('Hide element');
//     }

//     return () => {
//         console.log('Cleanup function');
//     };
// });

// isVisible.value = false;

 // Output:
 // Callback executed
 // Hide element
 // Cleanup function
// In this example, we use a ref called isVisible to represent the visibility of an element.Inside the watchEffect callback, we log a message and conditionally log another message based on the value of isVisible.Additionally, we return a cleanup function from the watchEffect callback.When isVisible becomes false, the cleanup function is automatically executed before the callback is called again.

// The cleanup function is useful for performing any necessary cleanup operations when the watched effect is no longer needed, such as unsubscribing from event listeners or canceling pending requests.

// These examples demonstrate the basic usage and capabilities of watchEffect in the Vue.js Composition API.

// watchEffect allows you to observe reactive dependencies inside the callback function and automatically react to changes.It provides a reactive and declarative way to perform side effects and update the state of your application.

//     Example 4: Dependencies on Nested Reactive Objects


// import { reactive, watchEffect } from 'vue';

// const user = reactive({
//     name: 'John',
//     age: 25,
//     address: {
//         city: 'New York',
//         country: 'USA',
//     },
// });

// watchEffect(() => {
//     console.log(`User: ${user.name}, Age: ${user.age}`);
//     console.log(`Address: ${user.address.city}, ${user.address.country}`);
// });

 // Output:
 // User: John, Age: 25
 // Address: New York, USA

// user.age = 30;
 // Output:
 // User: John, Age: 30
 // Address: New York, USA

// user.address.city = 'San Francisco';
 // Output:
 // User: John, Age: 30
 // Address: San Francisco, USA
// In this example, we have a nested reactive object user with properties like name, age, and address.Inside the watchEffect callback, we log the values of user.name, user.age, user.address.city, and user.address.country.Any changes to these properties will trigger the callback function and update the logged values accordingly.

//     Example 5: Asynchronous Operations


// import { ref, watchEffect } from 'vue';

// const count = ref(0);

// watchEffect(async () => {
//     console.log('Before delay:', count.value);
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log('After delay:', count.value);
// });

// count.value++;
 // Output:
 // Before delay: 0
 // After delay: 1
// In this example, we have a ref called count initialized with 0. Inside the watchEffect callback, we simulate an asynchronous operation using setTimeout and await.We log the value of count before and after the delay.Even though the delay is introduced, watchEffect still reacts to changes and executes the callback function accordingly.

// Remember, watchEffect is designed for executing side effects and should not be used to return a value or update reactive state.If you need to compute a derived value from reactive state, you should use computed instead.

// That concludes our detailed explanation of the watchEffect function in the Vue.js Composition API.It provides a powerful way to reactively observe changes and perform side effects in your Vue.js components.





