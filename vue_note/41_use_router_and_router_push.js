// useRouter and router.push in Vue Router v4 in Vue.js 3.

// useRouter is a function provided by Vue Router that allows you to access the router instance in your components.It returns an object that provides access to various properties and methods related to the router.

//     router.push is a method provided by the router instance.It is used to programmatically navigate to a different route in your application.It accepts the route path or an object representing the route as its parameter.

//         Here's an example to illustrate their usage:

// First, make sure you have Vue Router v4 installed in your project.If not, you can install it by running the following command:

// npm install vue - router@4
// In your Vue.js component file, import useRouter from Vue Router:

// import { useRouter } from 'vue-router';
// Inside your component's setup method, call useRouter to get the router instance:
// javascript
// Copy code
// export default {
//     setup() {
//         const router = useRouter();
//         // Rest of your component's logic
//     }
// }

// To navigate to a different route using router.push, you can use it as follows:

// export default {
//     setup() {
//         const router = useRouter();

//         const goToAboutPage = () => {
//             router.push('/about');
//         }

//         const goToProductPage = (productId) => {
//             router.push({ name: 'product', params: { id: productId } });
//         }

//         return {
//             goToAboutPage,
//             goToProductPage
//         };
//     }
// }

// In the example above, goToAboutPage uses router.push to navigate to the / about route directly, while goToProductPage demonstrates navigating to a route with a dynamic parameter(productId) using the route's name and passing the parameter as part of the params object.

// Make sure your routes are properly defined in your router configuration.For example:


// import { createRouter, createWebHistory } from 'vue-router';

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: Home
//         },
//         {
//             path: '/about',
//             name: 'about',
//             component: About
//         },
//         {
//             path: '/product/:id',
//             name: 'product',
//             component: Product
//         }
//     ]
// });

// export default router;
// In the above code snippet, Home, About, and Product are components corresponding to the defined routes.

// By using useRouter and router.push together, you can easily navigate to different routes programmatically within your Vue.js 3 application.

// Some additional details and examples about useRouter and router.push in Vue Router v4.

// Accessing Router Properties with useRouter:
// Apart from the router.push method, useRouter provides access to other properties and methods of the router instance.Here are a few commonly used ones:

// router.currentRoute: It gives you access to the current route object, including its path, params, query, and other route - related information.
//     router.resolve: This method allows you to resolve a route path or a route object to its corresponding location.It returns a Location object with properties like name, path, params, query, and hash.
//         router.options: It provides access to the router's configuration options, such as history and routes.
// Here's an example illustrating the usage of router.currentRoute:


// import { useRouter } from 'vue-router';

// export default {
//     setup() {
//         const router = useRouter();

//         const getCurrentRoutePath = () => {
//             const path = router.currentRoute.value.path;
//             console.log(`Current route path: ${path}`);
//         }

//         return {
//             getCurrentRoutePath
//         };
//     }
// }
// In the example above, getCurrentRoutePath accesses the path property of the current route using router.currentRoute.value.path.

// Using Named Routes with router.push:
// Instead of providing a route path as a string, you can use the name of a route to navigate using router.push.This approach is helpful when your routes have dynamic parameters or query parameters.Here's an example:

// export default {
//     setup() {
//         const router = useRouter();

//         const goToProductDetails = (productId) => {
//             router.push({ name: 'product', params: { id: productId }, query: { showDetails: true } });
//         }

//         return {
//             goToProductDetails
//         };
//     }
// }

// In this example, goToProductDetails navigates to a named route called 'product' and provides a dynamic parameter id and a query parameter showDetails.

// Programmatic Navigation with router.push:
// router.push can be used to navigate to a different route based on certain conditions or user interactions.Here's an example demonstrating programmatic navigation:


// export default {
//     setup() {
//         const router = useRouter();

//         const goToPage = (page) => {
//             if (page === 'about') {
//                 router.push('/about');
//             } else if (page === 'dashboard') {
//                 router.push('/dashboard');
//             } else {
//                 router.push('/');
//             }
//         }

//         return {
//             goToPage
//         };
//     }
// }

// In this example, goToPage takes a parameter page and navigates to different routes('/about', '/dashboard', or '/') based on the provided value.

// These additional examples and details should enhance your understanding of useRouter and router.push in Vue Router v4.









