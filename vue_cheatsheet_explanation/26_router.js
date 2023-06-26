// 👉 Router

{/* <script>
// import components Home, About, User
    // Define some routes
    // Each route should map to a component.
    // We'll talk about nested routes later.
    const routes = [
    {path: '/', component: Home },
    {path: '/about', component: About },
    ]
    //dynamic routes
    const routes = [
    // dynamic segments start with a colon
    {path: '/users/:id', component: User },
    ]
    //global before guards, uses for the authentication
    const router = createRouter({... })
router.beforeEach((to, from) => {
// ...
// explicitly return false to cancel the navigation
return false
})
</script> */}


// ✅ Explanation :

// In the provided code, you're working with Vue.js 3 and defining routes for your application using the Vue Router. Let's break down the code and understand each part:


//     < script >
   // Import components Home, About, User
   // These components need to be imported from their respective files
//   import Home from './components/Home.vue';
// import About from './components/About.vue';
// import User from './components/User.vue';

 // Define some routes
 // Each route should map to a component.
 // We'll talk about nested routes later.
// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
// ];

 // Dynamic routes
 // Here, a dynamic route is defined with a parameter called "id"
// const dynamicRoutes = [
     // Dynamic segments start with a colon
//     { path: '/users/:id', component: User },
// ];

 // Global before guards used for authentication
// const router = createRouter({
     // ...
     // Configuration options for the router go here
     // ...
// });

// router.beforeEach((to, from) => {
     // ...
     // This is a navigation guard that is executed before each route change
     // It allows you to perform certain checks or actions before allowing the navigation
     // In this example, it is not implemented and always returns false to cancel the navigation
     // ...
     // Explicitly return false to cancel the navigation
//     return false;
// });
// </ >
//     Explanation:

// The code starts with importing three components: Home, About, and User.These components are assumed to be defined in separate files(Home.vue, About.vue, and User.vue).

// The routes variable is an array that defines the routes for your application.In this example, there are two routes: '/'(root path) and '/about'.Each route is associated with a component imported earlier.

// The dynamicRoutes variable defines a dynamic route for /users/: id, where :id is a parameter that can be accessed within the User component.This allows for dynamic rendering of user - specific pages based on the id parameter.

// The router variable is created using the createRouter function, which is part of the Vue Router library.This function accepts configuration options, which are not shown in the provided code.

// The router.beforeEach method sets up a global navigation guard.It is executed before each route change and can be used for authentication or performing checks before allowing the navigation.In this example, the guard is not implemented and always returns false, which cancels the navigation.

//     Overall, this code sets up routes for your Vue.js 3 application using Vue Router.It defines static routes('/' and '/about'), a dynamic route('/users/:id'), and a global navigation guard(beforeEach) that currently cancels all route changes.










