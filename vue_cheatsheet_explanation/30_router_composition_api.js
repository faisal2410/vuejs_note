// 👉 Router : Composition api

//inside Components:
{/* <script>
    import {useRouter, useRoute} from 'vue-router'
    setup() {
const router = useRouter()
    const route = useRoute()
    //go to About page
    router.push('/About')
    //get route params
    console.log(route.params)
}
</script> */}


// ✅ Explanation :

// In this Vue.js 3 code snippet, we have a component that imports the useRouter and useRoute functions from the vue - router library.These functions allow us to access the router and route information within our component.

// The setup() function is a special function in Vue.js 3 that is used in the composition API.It is where you define the behavior and data for your component.

// Inside the setup() function, we first initialize the router variable using the useRouter() function. This gives us access to the router instance, which we can use to navigate to different routes programmatically.

//     Next, we use the useRoute() function to initialize the route variable.This gives us access to the current route information, such as the route path, query parameters, and route parameters.

// After that, the code calls router.push('/About') to navigate to the '/About' route.This line of code is equivalent to programmatically clicking a link to the '/About' page.It triggers a navigation to that route, and the corresponding component will be rendered.

//     Lastly, the code logs the route.params object to the console.This object contains any route parameters that may be present in the current route.Route parameters are dynamic segments in the route path that are denoted by a colon(e.g., '/users/:id').They allow you to pass and access data within the route.

//         So, in summary, this code snippet sets up a Vue.js 3 component that uses the vue - router library to navigate to the '/About' route and logs the route parameters to the console.





