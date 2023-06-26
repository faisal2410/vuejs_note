// 👉watch feature in Vue.js 3.

// The watch feature allows you to watch for changes to specific data properties or computed properties in your Vue components and perform actions when those changes occur.Let's go through the process step by step with code examples.

// First, you'll need to have Vue.js 3 installed in your project. You can include it via a CDN or use a package manager like npm or yarn. Once you have Vue.js 3 set up, you can start using the watch feature.

// Here's an example of using watch in a Vue component:


//     < template >
//     <div>
//         <input v-model="message" type="text" />
//         <p>Current Message: {{ message }}</p>
//     </div>
// </ >

//     <script>
//         import {ref, watch} from 'vue';

//         export default {
//             setup() {
//     const message = ref('');

//     watch(message, (newValue, oldValue) => {
//             console.log(`Message changed from "${oldValue}" to "${newValue}"`);
//     });

//         return {
//             message
//         };
//   }
// };
//     </script>

// In the example above, we have a simple Vue component with an input field bound to the message data property using v - model.We then use the watch function from the Vue composition API to watch for changes to the message property.

// Inside the watch function, we provide the message property as the first argument, and a callback function as the second argument.The callback function will be called whenever the value of message changes.It receives two parameters: the new value of message and the old value of message.

// In this example, whenever the message value changes, the callback function logs a message to the console with the old and new values of message.You can replace the console.log statement with any code you want to execute when the message value changes.

//     That's a basic example of how to use watch in Vue.js 3. You can watch for changes to computed properties or other reactive properties in a similar way. Just make sure to import the necessary functions from the Vue package and use them within the setup function of your component.

// I hope this explanation and code example are helpful in understanding how to use watch in Vue.js 3.






