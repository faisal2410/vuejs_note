//✅ how to create and use components in Vue.js 3.

// Components are reusable and self - contained pieces of code that encapsulate the HTML, CSS, and JavaScript logic needed to render a specific part of a user interface.They are one of the key building blocks in Vue.js development.Let's dive into the details.

// First, make sure you have Vue.js 3 installed in your project.You can do this by including the Vue.js library in your HTML file or using a module bundler like webpack.Once you have Vue.js set up, follow the steps below:

// ✅Step 1: Create a new Vue component
// To create a component, you need to define a new Vue instance with its own template, data, and methods.Here's an example of a simple component:


//     < template >
//     <div>
//         <h1>{{ message }}</h1>
//         <button @click="increment">Increment</button>
//   </div >
// </ >

// <script>
// export default {
//   data() {
//     return {
//       message: 'Component Example',
//       counter: 0,
//     };
//   },
//   methods: {
//     increment() {
//       this.counter++;
//     },
//   },
// };
// </script>

// <style scoped>
// h1 {
//   color: blue;
// }
// </style>

// In this example, we have a component with a template section containing HTML markup and Vue directives(e.g., {{ message }}).The script section exports an object that represents the component and defines its data and methods.The style section is optional but allows you to apply scoped styles specifically to this component.

//  ✅   Step 2: Register the component
// To use a component, you need to register it in another Vue instance or component.Let's assume you have an existing Vue app. In your main JavaScript file, you can register the component using the createApp function:


// import { createApp } from 'vue';
// import MyComponent from './MyComponent.vue';

// const app = createApp({});
// app.component('my-component', MyComponent);
// app.mount('#app');

// In this example, we import the MyComponent from its file(assuming it's in the same directory) and register it with app.component('my - component', MyComponent). The first argument is the name you want to use for the component, and the second argument is the component itself.

// Step 3: Use the component
// Now that the component is registered, you can use it in your HTML markup.In your template, you can simply add the component tag like this:


{/* < div id = "app" >
<my-component></my-component>
</ > */}

//     When the Vue app mounts, it will replace the < my - component > tag with the rendered content of the component.









