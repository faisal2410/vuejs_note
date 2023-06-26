//👉 v - model in Vue.js 3.
// The v - model directive is a convenient way to create two - way data binding in Vue.js.It is used to bind form inputs or custom components to a data property, allowing you to easily synchronize the user input with the underlying data.

// To demonstrate its usage, let's create a simple example where we have an input field that binds to a data property using v-model.

// First, make sure you have Vue.js 3 installed and set up in your project.You can include Vue.js via a CDN or use a package manager like npm or yarn.

//   ✅  Here's an HTML template where we'll use v - model:


    // < div id = "app" >
    //     <input type="text" v-model="message">
    //         <p>The value you entered is: {{ message }}</p>
    //     </>
    
// In this example, we have an input field and a paragraph.The v - model directive is applied to the input field, binding it to the message data property.The value entered by the user will be stored in message and displayed in the paragraph below.

// ✅To use v - model, we need to define the Vue app and its associated data in JavaScript:


// const app = Vue.createApp({
//     data() {
//         return {
//             message: ''
//         }
//     }
// })

// app.mount('#app')

// In this code, we're creating a Vue app using Vue.createApp and defining a data function that returns an object with the initial state of our app. Here, message is our data property, which is initially set to an empty string.

// Finally, we mount the Vue app to the element with the ID "app" using app.mount('#app').

// When you run this code, you'll see an input field on the page. As you type in the input field, the value will be synchronized with the message property, and the value will be displayed below the input field.

// That's the basic usage of v-model in Vue.js 3. It's a simple yet powerful directive that simplifies data binding in your application.








