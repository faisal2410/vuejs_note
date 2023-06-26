//👉 Child components in Vue.js 3 .
// Child components are an essential concept in Vue.js that allows you to create reusable and modular code.

// In Vue.js, components are the building blocks of the user interface.They encapsulate a section of the UI and can have their own logic, templates, and styles.Child components are components that are nested within another parent component.They allow you to break down your application into smaller, more manageable pieces, promoting reusability and maintainability.

// To create a child component in Vue.js 3, you need to follow these steps:

//✅ Define the Child Component:
// Create a new file called ChildComponent.vue and define the child component using the < script >, <template>, and <style> blocks. Here's an example:

//     <template>
//         <div>
//             <h2>{{ title }}</h2>
//             <p>{{ content }}</p>
//         </div>
//     </template>

//     <script>
//         export default {
//             props: {
//             title: String,
//         content: String
//   }
// }
//     </>

//     <style scoped>
// /* Component styles go here */
//     </style>


//     In this example, the child component has two props: title and content. These props will be passed from the parent component to the child component.

//    ✅ Use the Child Component in the Parent Component:
//     In your parent component, you can now use the child component. Import the child component using import and register it as a component. Here's an example:

 
//     <template>
//         <div>
//             <child-component title="Child Title" content="Child Content"></child-component>
//         </div>
//     </template>

//     <script>
//         import ChildComponent from './ChildComponent.vue';

//         export default {
//             components: {
//             ChildComponent
//         }
// }
//     </script>

//     In this example, we import the ChildComponent and register it as a component within the parent component. Then, we use the <child-component> tag in the parent template and pass the title and content props.

//      ✅   Render the Parent Component:
//         Finally, render the parent component wherever you want it to appear in your application. For example:

    
//         <template>
//             <div>
//                 <h1>Parent Component</h1>
//                 <child-component title="Child Title" content="Child Content"></child-component>
//             </div>
//         </template>

//         <script>
//             import ChildComponent from './ChildComponent.vue';

//             export default {
//                 components: {
//                 ChildComponent
//             }
// }
//         </script>

        // In this example, the parent component renders the child component within its own template.

        // That's it! You've successfully created a child component in Vue.js 3 and used it within a parent component. The child component can now receive props from the parent and display them in its template.

        // Remember to make sure that your components are properly imported, registered, and rendered in your Vue.js application for them to work correctly.

        // I hope this explanation and code examples help you understand child components in Vue.js 3. Let me know if you have any further questions!





