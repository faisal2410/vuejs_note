// 👉 Script setup api

{/* <script setup> //syntactic sugar for using Composition API
    //import section, can be used in Template, no return!!!
    import {ref, computed, watch, onMounted, provide, inject} from 'vue'
    import MyComponent from './MyComponent.vue'
    provide('message', 'hello!')
    const message = inject('message')
    //declare props
    const props = defineProps({foo: String})
    //declare emits
    const emit = defineEmits(['change', 'delete'])
    //methods-functions
    function submitForm(email, password) {emit('submit', { email, password })}
//variable
    const msg = 'Hello!'
    //reactivity
    const count = ref(0); const x = ref(0); const y = ref(0)
//computed
const b = computed(() => count.value + 2)
//watch
watch(x, (newX) => {console.log(`x is ${newX}`)})
//lifecycle hooks
onMounted(() => {input.value.focus()} )
//await functions
const post = await fetch(`/api/post/1`).then((r) => r.json())
</script> */}

// ✅ Explanation

// Let's go through the code step by step:


//     < script setup >
//         The < script setup > tag is a new feature in Vue 3 that provides syntactic sugar for using the Composition API.It allows you to write the code in a more concise and intuitive way.


// import { ref, computed, watch, onMounted, provide, inject } from 'vue'
// import MyComponent from './MyComponent.vue'
// In this section, we have some imports.We import various functions and components from the Vue library.

//     ref: It is used to create a reactive variable.
//         computed: It is used to create a computed property that depends on reactive variables.
//             watch: It is used to watch changes in a reactive variable and execute a callback function when the variable changes.
//                 onMounted: It is a lifecycle hook that runs the provided callback function when the component is mounted.
//                     provide: It is used to provide a value to be accessed by child components using the inject function.
// inject: It is used to access the provided value from the parent component.
//     MyComponent: It is a custom component imported from the file './MyComponent.vue'.

// provide('message', 'hello!')
// const message = inject('message')
// Here, we use the provide function to provide a value 'hello!' with the key 'message' to be accessed by child components.Then, we use the inject function to retrieve the provided value with the key 'message' and assign it to the message variable.


// const props = defineProps({ foo: String })
// The defineProps function is used to declare the props for the component.In this case, we declare a prop called 'foo' with a type of String.This prop can be passed to the component from its parent.


// const emit = defineEmits(['change', 'delete'])
// The defineEmits function is used to declare the events that the component can emit.In this case, we declare two events: 'change' and 'delete'.These events can be emitted by the component using the emit function.


// function submitForm(email, password) {
//     emit('submit', { email, password })
// }
// This is a function declaration for submitForm.It takes two parameters, email and password.When called, it emits a 'submit' event with an object containing the email and password values.


// const msg = 'Hello!'
// This declares a variable msg and assigns it the value 'Hello!'.This variable is not reactive.


// const count = ref(0)
// const x = ref(0)
// const y = ref(0)
// These lines declare three reactive variables: count, x, and y.The ref function is used to create reactive references to values.In this case, they are initialized with the values 0.


// const b = computed(() => count.value + 2)
// This line declares a computed property b.The computed function takes a callback function that defines the computation logic based on reactive variables.In this case, it computes the value of count.value + 2. The.value syntax is used to access the current value of a reactive variable.



// watch(x, (newX) => {
//     console.log(`x is ${newX}`)
// })
// This sets up a watcher on the x variable.Whenever x changes, the provided callback function is executed.In this case, the callback logs a message to the console, displaying the new value of x.


// onMounted(() => {
//     input.value.focus()
// })
// The onMounted function is a lifecycle hook that runs the provided callback function when the component is mounted.In this case, the callback function is an arrow function that accesses the focus method of the input.value reference.It focuses the input element when the component is mounted.


// const post = await fetch(`/api/post/1`).then((r) => r.json())
// This line makes an asynchronous request to the endpoint / api / post / 1 using the fetch API.It uses the await keyword to wait for the response to resolve.The response is then converted to JSON using the json() method.The resulting data is assigned to the post variable.

//     That's a breakdown of the provided code in Vue.js 3, explaining the various concepts and functionalities used. Let me know if you have any further questions!





