// 👉 Provide/Inject, Composition api

{/* <script>
    import {ref, provide, inject} from 'vue';
    export default {
        setup() {
// provide reactive value
const count = ref(0)
    provide('count', count)
    // inject reactive value
    const count = inject('count')
}
}
</script> */}


// ✅ Explanation :

// In the provided code snippet, we have a Vue.js 3 component that demonstrates the usage of provide and inject to share and access reactive values between parent and child components.

//     Let's break down the code step by step:

// The import statement is used to import specific functions from the 'vue' package.In this case, we import ref, provide, and inject.These functions are part of the Vue Composition API and are used for managing reactive state.

// The component is defined using the export default statement.This allows the component to be imported and used in other parts of the application.

// Inside the component, the setup() function is used.In Vue 3, the setup() function is where you define component logic and access Vue Composition API features.

// The count variable is declared using the ref() function. The ref() function is used to create a reactive reference to a value.In this case, count is initialized with a value of 0. The ref() function returns a reactive object that tracks changes to the value.

// The provide() function is used to provide the count value to the component's descendants. It takes two arguments: a key (in this case, the string 'count') and the value to be provided (count). The key is used to identify the provided value, and it should be unique within the component hierarchy.

// The inject() function is used to access the provided value from a component's ancestor. It takes the key as an argument (in this case, the string 'count'). By calling inject('count'), the component can access the reactive count value provided by its ancestor component.

// It's worth noting that the provide and inject functions should be used with caution, as they introduce a level of coupling between components. It's generally recommended to use them sparingly and consider alternative solutions like props or custom events for passing data between components whenever possible.







