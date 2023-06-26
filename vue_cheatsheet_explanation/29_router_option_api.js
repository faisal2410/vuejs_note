// 👉Router: option api

//inside Components:
{/* <script>
//import
    export default {
…..
    this.$route.params //get parameter
    this.$router.push('/login') //got to /login page
    …..
}
</script> */}


// ✅ Explanation :


// Let me explain the code snippet you provided in Vue.js 3.

// The code snippet you provided is written inside a Vue component file.Here's a breakdown of the code:


//     < script >
 // import

// export default {
     // ...
     // Component code
     // ...

//     created() {
//         this.$route.params // get parameter
//         this.$router.push('/login') // go to /login page
         // ...
//     }
// }
// </ >
//     In this code snippet, we are working with the created lifecycle hook of a Vue component.The created hook is called when the component is created and initialized.It is commonly used for initialization tasks and fetching data.

//         this.$route.params:

// This code is accessing the params property of the $route object.In Vue Router, $route provides information about the current route, including any route parameters.
// By using this.$route.params, you can access the parameters passed in the URL of the current route.For example, if the URL is / users / 123, then this.$route.params would contain { id: '123' } if there is a route parameter named id.
//     this.$router.push('/login'):

// This code is using the $router object to navigate to the / login page.
// The $router object is provided by Vue Router and allows you to programmatically navigate to different routes in your application.
// By calling this.$router.push('/login'), the current route will be replaced with the / login route, effectively navigating the user to the login page.
// Please note that the code you provided is incomplete, and there may be other code and configuration required to make it work properly.However, based on the information you provided, this is the explanation of the specific code you shared.












