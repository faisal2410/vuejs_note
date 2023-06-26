// 👉 Router, nested routes :

{/* <script>
//nested routes
    const routes = [
    {
        path: '/user/:id',
    component: User,
    children: [
    {
        //UserProfile will be rendered inside User's <router-view>
        //when /user/:id/profile is matched
        path: 'profile',
    component: UserProfile,
},
    {
        //UserPosts will be rendered inside User's <router-view>
        //when /user/:id/posts is matched
        path: 'posts',
    component: UserPosts,
},
    ],
},
    ]
</script> */}

// ✅ Explanation :

// Let's break down the provided code snippet, which involves nested routes in Vue.js 3.


//nested routes
// const routes = [
//     {
//         path: '/user/:id',
//         component: User,
//         children: [
//             {
//                 // UserProfile will be rendered inside User's <router-view>
//                 // when /user/:id/profile is matched
//                 path: 'profile',
//                 component: UserProfile,
//             },
//             {
//                 // UserPosts will be rendered inside User's <router-view>
//                 // when /user/:id/posts is matched
//                 path: 'posts',
//                 component: UserPosts,
//             },
//         ],
//     },
// ]
// In this code snippet, we are defining routes for a Vue.js application.The routes constant represents an array of route configurations.Each route configuration object consists of several properties that define the behavior and components associated with a specific route.

//     Let's go through the code step by step:

// We define a constant called routes, which holds an array of route configurations.
// Each route configuration is an object containing various properties.
// The path property represents the URL path for the route.In this case, the path is / user /: id, where :id is a dynamic parameter that can be replaced with a specific user's ID. For example, /user/123 would match this route, where 123 is the user ID.
// The component property specifies the main component that will be rendered when the route is accessed.In this case, the User component is associated with the / user /:id route.
// The children property is an array of nested routes that are associated with the parent route.
// Inside the children array, we define two nested route configurations.
// The first nested route has a path of profile.This means that when the URL matches / user /: id / profile, the UserProfile component will be rendered inside the < router - view > of the User component.
// The second nested route has a path of posts.This means that when the URL matches / user /: id / posts, the UserPosts component will be rendered inside the < router - view > of the User component.
// By utilizing nested routes in Vue.js, we can create a hierarchical structure for our application's routes. In this specific example, the User component serves as a parent route, and the UserProfile and UserPosts components act as child routes. When navigating to /user/:id/profile, the UserProfile component will be rendered, and when navigating to /user/:id/posts, the UserPosts component will be rendered within the User component's < router - view >.

// This approach allows for more modular and organized routing within a Vue.js application, enabling the creation of complex page layouts and component structures.





