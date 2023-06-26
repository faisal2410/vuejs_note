// Components and props in Vue.js 3. 

// Components and props are fundamental concepts in Vue.js that allow you to create reusable and modular pieces of code.Let's dive into it!

// Components in Vue.js are self - contained and reusable pieces of code that encapsulate the HTML, CSS, and JavaScript logic needed to render a specific part of the user interface.They promote code reusability, organization, and maintainability.Each component can have its own data, methods, computed properties, and lifecycle hooks.

// To create a component in Vue.js 3, you can use the defineComponent function from the vue package.Here's an example of a basic component:


// Import the necessary functions from the 'vue' package
// import { defineComponent } from 'vue';

// Define the component using the defineComponent function
// const MyComponent = defineComponent({
//     // Template for the component
//     template: `
//     <div>
//       <h1>{{ title }}</h1>
//       <button @click="increment">{{ count }}</button>
//     </div>
//   `,

//     // Data for the component
//     data() {
//         return {
//             title: 'My Component',
//             count: 0,
//         };
//     },

//     // Methods for the component
//     methods: {
//         increment() {
//             this.count++;
//         },
//     },
// });

// In this example, we've defined a component called MyComponent that displays a title and a button. Clicking the button will increment the count value.

// ✅Now, let's move on to props. Props are a way to pass data from a parent component to a child component. They allow you to customize the behavior and appearance of a component dynamically. Props are defined as attributes on a component's tag when it's used in the parent component.

// Here's an example of how to define and use props in Vue.js 3:


// import { defineComponent } from 'vue';

// const ChildComponent = defineComponent({
//     // Define the props
//     props: {
//         message: {
//             type: String,
//             required: true,
//         },
//         count: {
//             type: Number,
//             default: 0,
//         },
//     },

//     template: `
//     <div>
//       <h2>{{ message }}</h2>
//       <p>Count: {{ count }}</p>
//     </div>
//   `,
// });

// const ParentComponent = defineComponent({
//     template: `
//     <div>
//       <child-component message="Hello from parent!" :count="3" />
//     </div>
//   `,

//     components: {
//         ChildComponent,
//     },
// });

// In this example, we have a parent component called ParentComponent that uses a child component called ChildComponent.The child component has two props: message and count.The message prop is of type String and is required, while the count prop is of type Number and has a default value of 0.

// In the parent component's template, we use the child component by placing the <child-component> tag and passing the message and count props as attributes. In this case, the message prop is set to "Hello from parent!" and the count prop is set to 3.

// That's a basic overview of components and props in Vue.js 3. You can now create reusable components and pass data between them using props. Feel free to ask if you have any further questions!





