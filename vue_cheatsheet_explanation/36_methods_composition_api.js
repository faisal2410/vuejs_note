// 👉 Methods, Composition api

{/* <script>
//importing necessary functions from Vue
    import {ref, reactive, toRefs, computed} from 'vue'
    export default {
        setup(props, context) {
const ob = reactive({key1: value1, key2: value2})
    const count = ref(0)
    //methods declared as functions
    function increaseCount() {
        count.value + ob.key1 //use .value with "refs" 
context.emit('changed-value') //emit event
}
    //export to template
    return {
        increaseCount, //export functions/methods/computed
}
}
</script> */}

// ✅ Explanation :

// I'll be happy to explain the code for you.

// The code you provided is a Vue.js 3 component written in the Options API.Let's go through it step by step:


// Importing necessary functions from Vue
// import { ref, reactive, toRefs, computed } from 'vue'

// export default {
//     setup(props, context) {
//         const ob = reactive({ key1: value1, key2: value2 })
//         const count = ref(0)

         // Methods declared as functions
//         function increaseCount() {
//             count.value + ob.key1 // Use .value with "refs"
//             context.emit('changed-value') // Emit event
//         }

         // Export to template
//         return {
//             increaseCount, // Export functions/methods/computed
//         }
//     }
// }
// Let's break down each part of the code:

// The code begins by importing necessary functions from the Vue library: ref, reactive, toRefs, and computed.These functions are used to define reactive data and computed properties in Vue components.

// The component is defined using the export default syntax.

// Inside the setup function, which is the entry point for the Composition API in Vue 3, two variables are declared: ob and count.

// ob is declared using the reactive function, which creates a reactive object.It takes an initial object as an argument, in this case: { key1: value1, key2: value2 }. The values value1 and value2 are placeholders for actual values you would provide in your code.

// count is declared using the ref function. It creates a reactive reference to a value.In this case, the initial value of count is 0.

// The increaseCount function is declared.It is a method that increments the count value and emits an event called 'changed-value'.

// Inside the function, you can see count.value.When accessing the value of a ref, you need to use the.value property.

//     context.emit('changed-value') emits an event named 'changed-value' using the context object.This allows the component to communicate with its parent or other components listening for this event.

//         Finally, the setup function returns an object with the increaseCount function. This makes the increaseCount function available for use in the component's template or other parts of the code.

// That's a brief explanation of the provided code. 




