// Single - file components in Vue.js 3.
// Single - file components(SFCs) are a way to organize your Vue.js code into self - contained reusable components.They combine the template, JavaScript, and CSS code for a component into a single file with a.vue extension.

//     Here's a step-by-step guide to creating and using single-file components in Vue.js 3:

// Step 1: Set up your Vue.js 3 project
// Before you can create single - file components, you'll need to set up a Vue.js 3 project. You can do this using Vue CLI or by manually setting up a project. I'll assume you have a project ready to work with.

//     Step 2: Create a new single - file component
// To create a new single - file component, you need to create a new.vue file.Let's say we want to create a component called MyComponent. In your project's directory, create a file called MyComponent.vue.

//     Step 3: Define the template
// Inside MyComponent.vue, the first part you'll define is the template. The template will contain the HTML structure of your component. Here's an example:


//     < template >
//     <div>
//         <h1>{{ message }}</h1>
//         <button @click="increment">Increment</button>
//   </div >
// </ >

//     In this example, we have a simple component with a heading and a button.The message variable is referenced using Vue's double curly braces syntax ({{ message }}).

// Step 4: Define the JavaScript code
// After the template, you'll define the JavaScript code for your component. This includes the component's data, methods, computed properties, and more.Here's an example:


//     < script >
// export default {
//     data() {
//         return {
//             message: 'Hello, Vue!',
//             counter: 0
//         };
//     },
//     methods: {
//         increment() {
//             this.counter++;
//         }
//     }
// };
// </ >

//     In this example, we define the component's data as an object with a message property and a counter property. We also define a methods object with a single method called increment, which increments the counter when the button is clicked.

// Step 5: Define the CSS styles(optional)
// If your component requires specific styles, you can define them within the single - file component.Here's an example:


//     < style scoped >
//         h1 {
//     color: blue;
// }

// button {
//     background - color: green;
//     color: white;
// }
// </ >

    // In this example, the styles defined within the style block will only apply to the component's template, thanks to the scoped attribute.

// Step 6: Use the component
// Now that you have created your single - file component, you can use it in other parts of your application.For example, in your main App.vue file, you can import and use the MyComponent component like this:


//     < template >
//     <div>
//         <h1>Welcome to my app!</h1>
//         <my-component></my-component>
//     </div>
// </ >

//     <script>
//         import MyComponent from './MyComponent.vue';

//         export default {
//             components: {
//             MyComponent
//         }
// };
//     </script>





