//  Dynamic routes and the useRoute function in Vue Router v4 with Vue.js 3.
//  Let's break it down step by step and provide some code examples along the way.

// Dynamic routes allow us to create routes with dynamic segments, which can change based on the user's input or other factors. The useRoute function is a Vue Router composition function that gives us access to the current route object. We can use it to extract information from the route, such as parameters or query parameters.

// To get started, make sure you have Vue.js 3 and Vue Router v4 installed in your project.You can install them using the following commands:


// npm install vue @next
// npm install vue - router@next

// Once you have them installed, let's assume you have a Vue component called UserDetails that will display information about a specific user. We'll use a dynamic route to pass the user ID as a parameter in the URL.

//     First, set up your router configuration in a separate file, let's call it router.js:


// import { createRouter, createWebHistory } from 'vue-router';
// import UserDetails from './components/UserDetails.vue';

// const routes = [
//     {
//         path: '/user/:id', // Dynamic segment ":id"
//         name: 'userDetails',
//         component: UserDetails,
//     },
// ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });

// export default router;

// In this example, we have a route with the path / user /: id, where :id is a dynamic segment representing the user's ID. We've also assigned the name 'userDetails' to this route for easy reference later.

//     Next, let's create the UserDetails component (UserDetails.vue) and use the useRoute function to access the dynamic id parameter:


//     < template >
//     <div>
//         <h2>User Details</h2>
//         <p>User ID: {{ userId }}</p>
//     </div>
// </ >

//     <script>
//         import {useRoute} from 'vue-router';

//         export default {
//             name: 'UserDetails',
//         setup() {
//     const route = useRoute();
//         const userId = route.params.id;

//         return {
//             userId,
//     };
//   },
// };
//     </script>

// In this example, we import the useRoute function from vue - router and call it in the setup method of the component.We then extract the id parameter from route.params and assign it to the userId variable.Finally, we return userId as a reactive property so that it can be used in the template.

//     Now, when you navigate to a URL like / user / 123, the UserDetails component will be rendered, and the userId property will be set to '123', which you can use to fetch and display the corresponding user's details.

// Remember to import and use the router in your main Vue app file(main.js or similar):


// import { createApp } from 'vue';
// import router from './router';
// import App from './App.vue';

// const app = createApp(App);
// app.use(router);
// app.mount('#app');
// By calling app.use(router), we're instructing Vue to use the router configuration we defined earlier.

// That's it! You now have a dynamic route set up with Vue Router v4 in Vue.js 3. The useRoute function allows you to access the current route object and extract parameters like the id in this example. Feel free to customize and expand on this code to suit your specific needs.



// In the UserDetails component(UserDetails.vue), let's use the userId to fetch and display the user's details:


//     < template >
//     <div>
//         <h2>User Details</h2>
//         <p>User ID: {{ userId }}</p>
//         <p>User Name: {{ user.name }}</p>
//         <p>User Email: {{ user.email }}</p>
//     </div>
// </ >

//     <script>
//         import {useRoute} from 'vue-router';

//         export default {
//             name: 'UserDetails',
//         setup() {
//     const route = useRoute();
//         const userId = route.params.id;
//         const user = getUser(userId);

//         return {
//             userId,
//             user,
//     };
//   },
// };

        // Mock function to fetch user details based on ID
//         function getUser(userId) {
   // Replace this with your actual data fetching logic
//   const users = [
//         {id: 1, name: 'John Doe', email: 'john@example.com' },
//         {id: 2, name: 'Jane Smith', email: 'jane@example.com' },
//         ];

//   return users.find(user => user.id === parseInt(userId));
// }
//     </script>

// In this updated code, we added two more lines to fetch the user's details based on the userId. We create a new function called getUser that takes the userId as a parameter and returns the corresponding user object.

// Within the setup method, we call getUser with the userId extracted from the route.The returned user object is then assigned to the user variable, which we include in the reactive return object.

//     Now, when you navigate to a URL like / user / 1, the UserDetails component will fetch the details for the user with ID 1 and display their name and email.

// Remember to replace the getUser function with your actual data fetching logic.In a real application, you might fetch user data from an API or database instead of using a mock function.

// That's it! You've learned how to create dynamic routes using Vue Router v4 in Vue.js 3 and how to use the useRoute function to access route parameters.This allows you to build dynamic components that display different content based on the current route.







