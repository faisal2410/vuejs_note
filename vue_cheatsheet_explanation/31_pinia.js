// 👉 Pinia :

{/* <script>
    import {defineStore} from 'pinia'
    // useStore could be anything like useUser, useCart. The first argument is a unique id of the store across your application
    export const useStore = defineStore('main', {
        state: () => { // arrow function recommended for full type inference
return {
        counter: 0, name: 'Eduardo', isAdmin: true, userData: null,
}
},
    //Actions are the equivalent of methods in components, can be asynchronous - you can await inside of them any API call or even 
    other actions
    actions: {
        increment() {
        this.counter++
    },
    async registerUser(login, password) {
try {
        this.userData = await api.post({ login, password })
    } catch (error) {
return error
}
},
},
    //Getters are exactly the equivalent of computed values for the state of a Store
    getters: {
        doubleCount: (state) => state.counter * 2,
},
})
</script> */}


// ✅ Explanation :


// Let's go through the code step by step:


// import { defineStore } from 'pinia'
// This line imports the defineStore function from the pinia library.pinia is a state management system for Vue.js 3 applications.


// export const useStore = defineStore('main', {
//     Here, we define a new store called main using the defineStore function.The useStore constant is exported so that it can be imported and used in other parts of the application.


// state: () => {
//         return {
//             counter: 0,
//             name: 'Eduardo',
//             isAdmin: true,
//             userData: null
//         }
//     },
//     The state property defines the initial state of the store.It's a function that returns an object with the initial values for various properties. In this case, the counter is set to 0, name is set to 'Eduardo', isAdmin is set to true, and userData is set to null.


// actions: {
//         increment() {
//             this.counter++
//         },
//         async registerUser(login, password) {
//             try {
//                 this.userData = await api.post({ login, password })
//             } catch (error) {
//                 return error
//             }
//         },
//     },
//     The actions property defines methods that can be called to perform certain actions or modify the state.In this case, there are two actions defined.The increment action simply increments the counter property by one when called.

// The registerUser action is an asynchronous action that takes login and password as parameters.It attempts to make a POST request to an API(presumably defined elsewhere) with the provided login and password.If the request is successful, the response data is assigned to the userData property.If there's an error, the error is returned.


// getters: {
//         doubleCount: (state) => state.counter * 2,
//     },
//     The getters property defines computed values based on the state of the store.They allow you to derive values from the state in a reactive manner.In this case, there is one getter called doubleCount that returns the value of state.counter multiplied by 2.

// Overall, this code defines a store using pinia in Vue.js 3. The store contains a state with properties like counter, name, isAdmin, and userData.It also defines actions like increment and registerUser for modifying the state, and a getter doubleCount for computing a derived value based on the state.







