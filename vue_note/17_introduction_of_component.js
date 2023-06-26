// ✅Components in Vue.js 3.
// Components are one of the core building blocks of Vue.js applications, allowing you to create reusable and modular pieces of UI.Let's dive into the introduction to components and explore how they work in Vue.js 3 with code examples.

// First, let's start with the basic structure of a Vue component. In Vue.js, components are defined using the Vue.component method or by creating a new Vue instance. For this example, we'll use the single - file component approach, which is the recommended way of defining components in Vue.js 3.

//✅ Create a new file called MyComponent.vue and add the following code:


//     < template >
//     <div>
//         <h1>{{ message }}</h1>
//         <button @click="incrementCounter">Increment</button>
//   </div >
// </ >

// <script>
// export default {
//   data() {
//     return {
//       message: "Hello, Vue.js 3!",
//       counter: 0
//     };
//   },
//   methods: {
//     incrementCounter() {
//       this.counter++;
//     }
//   }
// };
// </script>

// <style scoped>
// h1 {
//   color: blue;
// }
// </style>

// Let's break down this component:

// The < template > section contains the HTML markup for the component.In this case, we have a < div > element containing an < h1 > tag and a button.
//     The < script > section is where you define the JavaScript logic for the component.Inside the data function, we have a message variable initialized with the value "Hello, Vue.js 3!" and a counter variable set to 0.
// The methods object defines the methods associated with the component.Here, we have a single method called incrementCounter that increments the counter variable when the button is clicked.
//     The < style > section is used to define component - specific styles.The scoped attribute ensures that the styles only apply to this component and do not leak to other components.

// To use this component in another file, such as your main Vue application, you need to import it.✅For example, in your App.vue file, you can use the MyComponent like this:


//     < template >
//     <div>
//         <h1>Welcome to my Vue.js App!</h1>
//         <MyComponent />
//     </div>
// </ >

//     <script>
//         import MyComponent from './MyComponent.vue';

//         export default {
//             components: {
//             MyComponent
//         }
// };
//     </>

// In the above code, we import the MyComponent from the file path './MyComponent.vue'.Then, in the components property, we register the MyComponent so that it can be used in the template section of App.vue.

//     That's a basic introduction to components in Vue.js 3! You can create more complex components by adding computed properties, watchers, lifecycle hooks, and other features. Components are highly reusable, making it easy to build modular and maintainable Vue.js applications.







