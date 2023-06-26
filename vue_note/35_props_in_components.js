// 👉How to use props in components in Vue.js 3.
// Props are a way to pass data from a parent component to a child component.This allows you to make your components more reusable and dynamic.Let's dive into the details and explore some code examples.

// ✅First, let's start with the parent component. In the parent component, you define the props that you want to pass to the child component. Here's an example:


//     < template >
//     <div>
//         <h1>Parent Component</h1>
//         <ChildComponent message="Hello from parent!" />
//     </div>
// </ >

//     <script>
//         import ChildComponent from './ChildComponent.vue';

//         export default {
//             components: {
//             ChildComponent
//         }
// };
//     </script>

// In the example above, we have a parent component that renders a child component called ChildComponent.We pass a prop called message to the child component with the value "Hello from parent!".

//  ✅   Now, let's move on to the child component. In the child component, we can access the passed props and use them as needed. Here's an example:


//     < template >
//     <div>
//         <h2>Child Component</h2>
//         <p>{{ message }}</p>
//     </div>
// </ >

//     <script>
//         export default {
//             props: {
//             message: String
//   }
// };
//     </script>

//✅ In the child component, we define the props option to specify the props we expect to receive.In this case, we have a prop called message of type String.Inside the template, we can use { { message } } to display the value of the prop.

//     That's the basic usage of props in Vue.js 3. Now, let's take a look at how we can pass dynamic data and even use computed props.


//     < template >
//     <div>
//         <h1>Parent Component</h1>
//         <ChildComponent: count="count" :uppercase-message="uppercaseMessage" />
//         <button @click="incrementCount">Increment Count</button>
//   </div >
// </ >

//     <script>
//         import ChildComponent from './ChildComponent.vue';

//         export default {
//             components: {
//             ChildComponent
//         },
//         data() {
//     return {
//             count: 0
//     };
//   },
//         computed: {
//             uppercaseMessage() {
//       return this.message.toUpperCase();
//     }
//   },
//         methods: {
//             incrementCount() {
//             this.count++;
//     }
//   }
// };
//     </script>

// In this updated parent component, we have a dynamic prop called count that is bound to the count data property.We also have a computed prop called uppercaseMessage that transforms the message prop to uppercase.

//     Now, let's modify the child component to use these props:


//     < template >
//     <div>
//         <h2>Child Component</h2>
//         <p>Count: {{ count }}</p>
//         <p>Uppercase Message: {{ uppercaseMessage }}</p>
//     </div>
// </ >

//     <script>
//         export default {
//             props: {
//             count: Number,
//         uppercaseMessage: String
//   }
// };
//     </script>

// In the child component, we have two props: count of type Number and uppercaseMessage of type String.We can access and display these props as needed.

//     That's the basic idea of using props in Vue.js 3. By passing data through props, you can create more flexible and reusable components. Remember that props are one-way data flow, so changes to props in the child component won't affect the parent component unless you emit events





