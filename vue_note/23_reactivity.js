//  👉Reactivity concept in Vue.js 3 and provide you with some code examples.

// Reactivity in Vue.js allows you to create dynamic and interactive applications by establishing a connection between the data in your application and the user interface.It ensures that any changes made to the data are automatically reflected in the UI, and vice versa.Vue.js achieves reactivity through a feature called the "Reactivity System."

// Let's dive into the details and explore reactivity with code examples.

// First, you need to create a new Vue instance by installing Vue.js and importing it into your project.Here's an example of how you can do this:


//     < !DOCTYPE html >
//         <html>
//             <head>
//                 <title>Reactivity Example</title>
//                 <script src="https://unpkg.com/vue@3.0.0/dist/vue.global.js"></script>
//             </head>
//             <body>
//                 <div id="app">
//                     <h1>{{ message }}</h1>
//                     <button @click="changeMessage">Change Message</button>
//             </div>

//             <script>
//                 const app = Vue.createApp({
//                     data() {
//         return {
//                     message: 'Hello, Vue!'
//         };
//       },
//                 methods: {
//                     changeMessage() {
//                     this.message = 'Updated message!';
//         }
//       }
//     });

//                 app.mount('#app');
//             </script>
//         </body>
// </html >

//     In this example, we create a Vue instance using the createApp method.Inside the instance, we define a data function that returns an object containing the message property with an initial value of 'Hello, Vue!'.The message property is then bound to the h1 element in the template using the double curly braces syntax({{ message }}).

// We also define a changeMessage method, which is triggered when the button is clicked.Inside this method, we update the message property with a new value of 'Updated message!'.

//     Now, when you run this code, you'll see the initial message displayed on the page. Clicking the "Change Message" button will update the message in the UI due to Vue.js reactivity.

// This reactivity is achieved by Vue.js under the hood.Whenever a property that is used in the template(like message in our example) is updated, Vue.js detects the change and automatically updates the corresponding parts of the UI.This makes it easy to keep your UI in sync with the data.

// ✅    Additionally, you can also use the reactive function to create reactive objects.Here's an example:


// const { reactive, watch } = Vue;

// const state = reactive({
//     count: 0
// });

// watch(() => {
//     console.log(`Count changed: ${state.count}`);
// });

// setInterval(() => {
//     state.count++;
// }, 1000);


// In this example, we use the reactive function to create a reactive object called state, which contains a count property.We then use the watch function to watch for changes in the count property and log a message whenever it changes.

// With the setInterval function, we increment the count property every second.As the property changes, the watch function detects the change and logs the updated value to the console.

// This is a basic example of reactivity in Vue.js.The reactivity system in Vue.js offers much more flexibility and power, allowing you to build complex applications with ease.

// I hope this explanation and the code examples help you understand the reactivity concept in Vue.js 3. 





