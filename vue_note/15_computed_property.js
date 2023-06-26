// 👉computed properties in Vue.js 3.

//  Computed properties are a powerful feature in Vue.js that allow you to define properties that are derived from other data properties in your component.They are computed based on the reactive dependencies, and their values are cached until their dependencies change.

//   ✅  Let's start with a simple example. Imagine you have a Vue component that has two data properties: firstName and lastName. You want to display the full name by combining these two properties. Instead of manually concatenating the strings every time, you can use a computed property to handle this for you. Here's how you can do it:


//     < template >
//     <div>
//         <p>First Name: {{ firstName }}</p>
//         <p>Last Name: {{ lastName }}</p>
//         <p>Full Name: {{ fullName }}</p>
//     </div>
// </ >

//     <script>
//         export default {
//             data() {
//     return {
//             firstName: 'John',
//         lastName: 'Doe'
//     };
//   },
//         computed: {
//             fullName() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   }
// };
//     </script>

// In the above code, we have a computed property called fullName that returns the concatenation of firstName and lastName.You can access computed properties in your template just like regular data properties by using double curly braces({{}}).

// The beauty of computed properties is that they are reactive.If you change either firstName or lastName, the fullName will automatically update with the new combined value.Vue.js takes care of tracking the dependencies and updating the computed property whenever necessary.

// ✅Computed properties can also have a setter function, allowing you to create two - way data bindings.Here's an example:


//     < template >
//     <div>
//         <p>First Name: <input v-model="firstName" /></p>
//         <p>Last Name: <input v-model="lastName" /></p>
//         <p>Full Name: {{ fullName }}</p>
//     </div>
// </ >

//     <script>
//         export default {
//             data() {
//     return {
//             firstName: 'John',
//         lastName: 'Doe'
//     };
//   },
//         computed: {
//             fullName: {
//             get() {
//         return this.firstName + ' ' + this.lastName;
//       },
//         set(value) {
//         const [firstName, lastName] = value.split(' ');
//         this.firstName = firstName;
//         this.lastName = lastName;
//       }
//     }
//   }
// };
//     </script>


// In this example, we have defined a setter for the fullName computed property.Whenever you modify the fullName in the template, the setter function will be called.It splits the value into firstName and lastName and updates the corresponding data properties accordingly.

// Computed properties are a convenient way to derive values from existing data properties and keep your template code clean and readable.They also provide better performance by caching the result until the dependencies change.

// I hope this explanation and examples help you understand computed properties in Vue.js 3. If you have any further questions, feel free to ask!




// ✅Vue.js computed properties and watchers in Vue.js 3 with detailed code examples.Let's start with computed properties.

// Computed Properties in Vue.js are properties that are derived from the data of your Vue instance.They are calculated based on the values of other data properties and are cached, which means they only update when their dependencies change.Computed properties are defined as functions and accessed as if they were regular data properties.

    //✅ Here's an example to illustrate how to use computed properties in Vue.js 3:


//     < template >
//     <div>
//         <p>Original Value: {{ originalValue }}</p>
//         <p>Doubled Value: {{ doubledValue }}</p>
//     </div>
// </ >

//     <script>
//         export default {
//             data() {
//     return {
//             originalValue: 5
//     };
//   },
//         computed: {
//             doubledValue() {
//       return this.originalValue * 2;
//     }
//   }
// };
//     </script>

// In this example, we have a Vue component with a data property originalValue set to 5. We define a computed property doubledValue which calculates the double of originalValue.In the template, we can access the computed property as if it were a regular data property using { { doubledValue } }.

// ✅Now let's move on to watchers in Vue.js.

// Watchers allow you to perform asynchronous or expensive operations in response to changes in your data properties.They observe changes on one or more data properties and execute a function whenever the observed properties change.

    // Here's an example of using watchers in Vue.js 3:


//     < template >
//     <div>
//         <p>Username: {{ username }}</p>
//     </div>
// </ >

//     <script>
//         export default {
//             data() {
//     return {
//             username: ''
//     };
//   },
//         watch: {
//             username(newValue, oldValue) {
//             console.log(`Username changed from ${oldValue} to ${newValue}`);
//     }
//   }
// };
//     </script>

// In this example, we have a data property username that initially has an empty string value.We define a watcher on the username property, and whenever its value changes, the watcher function is executed.In this case, we simply log the old and new values of username to the console, but you can perform any action within the watcher function.

// That's it! You've learned about computed properties and watchers in Vue.js 3. Computed properties are great for performing calculations based on other data properties, while watchers are useful for reacting to changes in data and performing custom logic.










