// 👉Vue Router v4 in Vue.js 3.
//  Vue Router is a powerful routing library that allows you to build single - page applications with multiple views and handle navigation between them.Let's dive into the details and explore some code examples!

//✅ Step 1: Installation and Setup
// To start, make sure you have Vue.js 3 installed in your project.You can create a new Vue.js project or use an existing one.Once you have Vue.js set up, you can install Vue Router v4 using npm or yarn:


// # Using npm
// npm install vue - router@next

// # Using yarn
// yarn add vue - router@next

//✅ Step 2: Configuration
// Once you've installed Vue Router, you need to configure it in your Vue.js application. Create a new file called router.js (or any other name you prefer) in your project's root directory.In this file, we'll define our routes and configure the router.


// Import Vue and Vue Router
// import { createRouter, createWebHistory } from 'vue-router';

// Import your components for routing
// import Home from './components/Home.vue';
// import About from './components/About.vue';
// import Contact from './components/Contact.vue';

// Create the router
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
//             path: '/contact',
//             name: 'contact',
//             component: Contact
//         }
//     ]
// });

// Export the router
// export default router;



// In the code snippet above, we import the necessary modules from vue - router.Then we import the components that we want to use as routes, such as Home, About, and Contact.We create a new router instance using createRouter() and provide the routes array.Each route is defined with a path, a unique name, and the corresponding component to render when the route is visited.

//    ✅ Step 3: Integrate the Router in your main Vue instance
// To integrate the router into your main Vue instance, open your main.js(or equivalent) file and import the router we just created.Then use the router instance in the Vue app.


// Import Vue and the router
// import { createApp } from 'vue';
// import router from './router';

// Import the root component
// import App from './App.vue';

// Create the Vue app
// const app = createApp(App);

// Use the router
// app.use(router);

// Mount the app to the DOM
// app.mount('#app');

//✅ Step 4: Creating Route Components

// Now let's create the components for the routes we defined earlier. For example, create a file called Home.vue and add the following code:


//     < template >
//     <div>
//         <h1>Home</h1>
//         <!-- Your home page content here -->
//     </div>
// </ >

//     <script>
//         export default {
//             // Component options here
//         }
//     </script>


// Similarly, create About.vue and Contact.vue files with their respective content.

//    ✅ Step 5: Navigating between Routes
// To navigate between routes, you can use the < router - link > component provided by Vue Router.This component renders an anchor tag that automatically updates the URL and triggers the corresponding route.

 
//     < template >
//     <div>
//         <h1>My Website</h1>
//         <nav>
           
//             <router-link to="/">Home</router-link>
//             <router-link to="/about">About</router-link>
//             <router-link to="/contact">Contact</router-link>
//         </nav>

//         <router-view></router-view>
//     </div>
// </template >

//     <script>
//         export default {
            // Component options here
//         }
//     </script>

// In the code snippet above, we've added the <router-link> components to create navigation links for the Home, About, and Contact routes. The to attribute specifies the path to navigate to when the link is clicked.

// Additionally, we've added the <router-view> component, which acts as a placeholder for the content of the currently active route. When a user navigates to a specific route, the component associated with that route will be rendered inside the <router-view>.

//✅ Step 6: Route Parameters and Dynamic Routes
// Vue Router allows you to define dynamic routes that can accept parameters.For example, let's say we want to create a route for displaying a user's profile.Modify the router.js file to include a dynamic route:


// ...

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         // ...
//         {
//             path: '/user/:id',
//             name: 'user',
//             component: User
//         }
//     ]
// });

// ...
// In the code snippet above, we added a dynamic route / user /: id.The :id part indicates a parameter that can be passed in the URL.

//     Now, let's create the User.vue component to display the user's profile:


//     < template >
//     <div>
//         <h2>User Profile</h2>
//         <p>User ID: {{ $route.params.id }}</p>
//         <!-- Additional user profile content here -->
//     </div>
// </ >

//     <script>
//         export default {
//             // Component options here
//         }
//     </script>

// In the User.vue component, we access the parameter value using $route.params.id.This allows us to display the user's ID dynamically based on the URL.

// ✅Step 7: Programmatic Navigation
// Besides using < router - link > for navigation, Vue Router also provides a programmatic way to navigate between routes using the $router object.

// For example, to navigate to the / about route programmatically, you can use the $router.push() method:


// methods: {
//     navigateToAbout() {
//         this.$router.push('/about');
//     }
// }

// In this code snippet, the navigateToAbout method is called when a button or a specific event is triggered, and it uses $router.push() to navigate to the / about route.

// These are the basic steps to get started with Vue Router v4 in Vue.js 3. You can explore more advanced features and concepts in the official Vue Router documentation(https://next.router.vuejs.org/). Remember to customize and extend the code examples based on your specific application requirements.



// Let's continue exploring more features of Vue Router v4 in Vue.js 3.

// ✅Step 8: Nested Routes
// Vue Router allows you to create nested routes, which are useful for building complex application layouts.You can nest routes inside other routes by using the children property.

// Modify the router.js file to include a nested route for a user's settings:


// ...

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         // ...
//         {
//             path: '/user/:id',
//             name: 'user',
//             component: User,
//             children: [
//                 {
//                     path: 'settings',
//                     name: 'settings',
//                     component: UserSettings
//                 }
//             ]
//         }
//     ]
// });

// ...
// In the code snippet above, we added a nested route for the user's settings under the /user/:id route. The UserSettings component will be rendered when the /user/:id/settings path is accessed.

// ✅Step 9: Route Guards
// Route guards are functions that can be used to control navigation behavior.They allow you to implement authentication, authorization, and other custom logic before navigating to a route.

// Vue Router provides three types of route guards: beforeEach, beforeResolve, and afterEach.You can define these guards in the router.js file.

//     Here's an example of using the beforeEach guard to check if a user is authenticated before allowing access to certain routes:


// ...

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = // Check if user is authenticated
  
//   if (to.name === 'admin' && !isAuthenticated) {
//         // Redirect to login page if user is not authenticated
//         next({ name: 'login' });
//     } else {
//         // Allow access to the requested route
//         next();
//     }
// });

// ...
// In the code snippet above, we use the beforeEach guard to check if the user is authenticated before accessing a route.If the user is not authenticated and the requested route is 'admin', we redirect them to the 'login' route.Otherwise, we allow access to the requested route.

//  ✅   Step 10: Dynamic Route Matching
// Vue Router v4 introduced a new feature called dynamic route matching, which allows you to match routes based on dynamic conditions.This feature is useful when you want to conditionally load different components or layouts based on specific criteria.

    // Here's an example of using dynamic route matching:


// ...

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         // ...
//         {
//             path: '/post/:id(\\d+)',
//             name: 'post',
//             component: Post,
//             meta: {
//                 requiresAuth: true
//             }
//         }
//     ]
// });

// ...
// In the code snippet above, we define a dynamic route / post /: id(\\d +) that matches only if :id is a numeric value.We also added a meta property to the route object, which can be used to add custom metadata to the route.

//  ✅   Step 11: Route Transitions
// Vue Router v4 integrates seamlessly with Vue.js 3's transition system, allowing you to add transition effects when navigating between routes. You can use CSS transitions or third-party animation libraries to create visually appealing route transitions.

// Here's an example of adding a fade transition when navigating between routes:


//     < template >
//     <transition name="fade">
//         <router-view></router-view>
//     </transition>
// </ >

//     <style>
//         .fade-enter-active, .fade-leave-active {
//             transition: opacity 0.5s;
// }

       
//         .fade-enter, .fade-leave-to {
//             opacity: 0;
// }
//     </style>


// In the code snippet above, we wrap the < router - view > component with a < transition > component.The name attribute specifies the name of the transition, which in this case is "fade".We also define the CSS classes for the fade transition effect.During the enter and leave phases, the opacity is gradually adjusted to create a smooth fade effect.

//  ✅   Step 12: Navigation Guards in Component Options
// Apart from using global route guards, you can also define navigation guards at the component level.This allows you to apply specific guards only to certain components.

// In a Vue component, you can define the beforeRouteEnter, beforeRouteUpdate, and beforeRouteLeave methods to handle navigation guards.

//     Here's an example of using the beforeRouteEnter guard to fetch data before entering a component:

// export default {
//     // Component options here

//     beforeRouteEnter(to, from, next) {
//         // Fetch data before entering the component
//         fetchData().then((data) => {
//             next((vm) => {
//                 vm.data = data;
//             });
//         });
//     }
// }

// In the code snippet above, the beforeRouteEnter guard is used to fetch data from an API before entering the component.Once the data is fetched, it is passed to the next() function using a callback.The callback receives the component instance(vm) and allows you to access and set component data.

// These are some additional concepts and features of Vue Router v4 in Vue.js 3. As you continue working with Vue Router, I recommend referring to the official documentation(https://next.router.vuejs.org/) for more details and advanced usage.




// Let's continue exploring more features of Vue Router v4 in Vue.js 3.

// ✅Step 13: Named Views
// Vue Router allows you to define multiple named views within a single route, allowing you to render different components in different named view outlets.

// In your router configuration(router.js), you can define multiple components within a route using the components property.Each component is associated with a unique named view.


// ...

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         // ...
//         {
//             path: '/dashboard',
//             name: 'dashboard',
//             components: {
//                 default: Dashboard,
//                 sidebar: Sidebar,
//                 header: Header
//             }
//         }
//     ]
// });

// ...
// In the code snippet above, we define a route named 'dashboard' with multiple components assigned to different named views(default, sidebar, and header).

// To render these named views in your template, use the < router - view > component with the name attribute to specify the named view outlet.


//     < template >
//     <div>
//         <router-view></router-view> <!-- Renders the default view -->
//         <router-view name="sidebar"></router-view> <!-- Renders the sidebar view -->
//         <router-view name="header"></router-view> <!-- Renders the header view -->
//     </div>
// </ >

// ✅    Step 14: Navigation Events
// Vue Router emits various navigation events that allow you to perform actions before, during, or after navigation.You can listen to these events and execute custom logic accordingly.

// To listen to navigation events, you can use the $router object in your components.


// export default {
//     mounted() {
//         this.$router.beforeEach((to, from, next) => {
//             // Perform actions before each route navigation
//         });

//         this.$router.afterEach((to, from) => {
//             // Perform actions after each route navigation
//         });
//     }
// }


// In the code snippet above, we use the $router.beforeEach() and $router.afterEach() methods to register navigation event listeners.These methods allow you to execute custom logic before and after each route navigation.

//     Step 15: Lazy Loading Routes
// Lazy loading routes is a technique used to optimize the initial loading time of your application by splitting your code into smaller chunks and loading routes on - demand.

// Vue Router v4 supports lazy loading routes using dynamic imports.


// const About = () => import('./components/About.vue');
// const Contact = () => import('./components/Contact.vue');

// In the code snippet above, we use the dynamic import syntax to lazily load the About and Contact components when they are needed.

// Lazy loading routes can significantly improve the performance of your application by reducing the initial bundle size and loading only the necessary components when required.

// These are some additional concepts and features of Vue Router v4 in Vue.js 3. I encourage you to explore the official documentation(https://next.router.vuejs.org/) for further details and advanced topics.

// Let's continue exploring more features of Vue Router v4 in Vue.js 3.

// ✅Step 16: Navigation Duplicates
// By default, Vue Router allows navigating to the same route multiple times consecutively.However, you can configure it to prevent navigating to the same route twice in a row by using the replace option in the router.push() method.


// this.$router.push({ path: '/dashboard', replace: true });
// In the code snippet above, the replace option is set to true when using router.push().This ensures that navigating to the same route consecutively will replace the current entry in the browser's history stack instead of creating a new entry.

// ✅Step 17: Scroll Behavior
// When navigating between routes, Vue Router automatically scrolls to the top of the new page.However, you can customize the scroll behavior by defining a scrollBehavior function in your router configuration.


// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         // ...
//     ],
//     scrollBehavior(to, from, savedPosition) {
//         if (savedPosition) {
//             // Scroll to saved position (e.g., when using the browser's back/forward buttons)
//             return savedPosition;
//         } else {
//             // Scroll to top
//             return { top: 0 };
//         }
//     }
// });

// In the code snippet above, the scrollBehavior function is defined to customize the scroll behavior.If there is a saved position(e.g., when using the browser's back/forward buttons), it scrolls to the saved position. Otherwise, it scrolls to the top of the page.

//✅ Step 18: Error Handling
// Vue Router provides error handling capabilities, allowing you to handle specific routing errors or global errors that occur during navigation.

// To handle specific errors, you can use the beforeEach guard and call the next function with an error parameter.


// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth && !isAuthenticated()) {
//         next({ name: 'login', params: { redirect: to.fullPath }, replace: true });
//     } else {
//         next();
//     }
// });

// In the code snippet above, if a user tries to access a route that requires authentication but is not authenticated, we redirect them to the login page with the original route as a parameter(redirect) and replace the current history entry.

// To handle global errors during navigation, you can listen to the router.onError event.


// router.onError((error) => {
//     // Handle the error
// });
// In the code snippet above, the router.onError event listener allows you to handle global errors that occur during navigation.

// ✅    Step 19: Hash Mode
// By default, Vue Router uses the HTML5 History API for clean URLs.However, if you need to support older browsers or server configurations that don't support HTML5 History API, you can switch to hash mode.

// To enable hash mode, update your router configuration:


// const router = createRouter({
//     history: createWebHashHistory(),
//     routes: [
//         // ...
//     ]
// });
// In the code snippet above, we use createWebHashHistory() instead of createWebHistory() to enable hash mode.

// Hash mode adds a hash symbol(#) to the URLs and relies on the hashchange event to handle route changes.This allows older browsers and server configurations to handle client - side routing.

// These are some additional concepts and features of Vue Router v4 in Vue.js 3. I encourage you to refer to the official documentation(https://next.router.vuejs.org/) for more details and advanced usage.























