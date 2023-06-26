// Vue.js filters in Vue.js 3. Filters in Vue.js allow you to format and manipulate data before it is rendered in the template.They are particularly useful for applying common text formatting or data transformations.

// ✅In Vue.js 3, filters have been deprecated in favor of using computed properties or methods for data manipulation.However, I can still show you how filters worked in earlier versions of Vue.js(2.x) for the purpose of learning.

// To define a filter in Vue.js 2.x, you can use the Vue.filter() method.Here's an example of how to create a filter that converts a string to uppercase:


//     < div id = "app" >
//         <p>{{ message | uppercase}}</p>
// </ >

// Vue.filter('uppercase', function (value) {
//     if (!value) return '';
//     return value.toUpperCase();
// });

// new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello, World!'
//     }
// });

// In the above example, we define a filter named uppercase using Vue.filter().It takes a value as input and converts it to uppercase using the toUpperCase() method.Then, in the template, we apply the filter to the message property by using the | symbol followed by the filter name({{ message | uppercase }}).

//    ✅ However, in Vue.js 3, filters have been replaced by computed properties and methods.Let me show you how you can achieve the same functionality using computed properties:


//     < div id = "app" >
//         <p>{{ uppercaseMessage }}</p>
// </ >

// const app = Vue.createApp({
//     data() {
//         return {
//             message: 'Hello, World!'
//         };
//     },
//     computed: {
//         uppercaseMessage() {
//             if (!this.message) return '';
//             return this.message.toUpperCase();
//         }
//     }
// });

// app.mount('#app');

// In the Vue.js 3 example above, we define a computed property named uppercaseMessage that performs the same uppercase conversion as the filter in the previous example.We access the computed property directly in the template using { { uppercaseMessage } }.

// Computed properties provide more flexibility and reactivity compared to filters.They are evaluated whenever their dependencies change, allowing for more dynamic and efficient data manipulation.

// I hope this helps you understand the concept of Vue.js filters and how they have evolved in Vue.js 3.





