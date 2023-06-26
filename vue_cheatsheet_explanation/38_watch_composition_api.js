// 👉 Watch, Composition api

{/* <script>
    import {ref, watch} from 'vue'
    export default {
        setup(props, context) { 
const x = ref(0); const y = ref(0)
    const obj = reactive({count: 0 })
// single ref
watch(x, (newX) => {console.log(`x is ${newX}`)})
    // getter function
    watch(
() => x.value + y.value,
(sum) => {console.log(`sum of x + y is: ${sum}`)}
    )
// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
        console.log(`x is ${newX} and y is ${newY}`)
    })
    // watcher for reactive value
    watch(
() => obj.count,
(count) => {console.log(`count is: ${count}`)},
    //additional options - see Option API:
    {deep:.., immediate:..., flush:.... } )
}
}
</script> */}

// ✅ Explanation :

// I'll be happy to explain the code for you.

// The code you provided is written in Vue.js 3, which is a popular JavaScript framework for building user interfaces.It demonstrates the usage of the watch function, which allows you to perform side effects when the watched data changes.

//     Let's break down the code step by step:

// The import { ref, watch } from 'vue' line imports the necessary functions ref and watch from the Vue library.

// The setup function is the entry point for the Vue 3 composition API.It takes two parameters: props and context.

// Inside the setup function, we have three variables defined using the ref function: x, y, and obj.The ref function is used to create reactive references to data.It allows the variables to be reactive, meaning that when their values change, any dependent code will automatically be updated.

// The watch function is used to define watchers for different data sources.

// The first watcher watches the x ref variable.Whenever x changes, the provided callback function will be executed, and the new value of x will be passed as the newX parameter.In this case, it simply logs the value of x to the console.

// The second watcher watches the sum of x and y.It uses a getter function as the first argument, which computes the sum of x.value and y.value.Whenever the sum changes, the provided callback function will be executed, and the new sum will be passed as the sum parameter.It logs the sum of x and y to the console.

// The third watcher watches an array of data sources: x and an anonymous getter function that returns the value of y.When either x or y changes, the callback function will be executed, and the new values of x and y will be passed as [newX, newY] to the callback.It logs the values of x and y to the console.

// The fourth watcher watches the count property of the obj object.Whenever the count property changes, the provided callback function will be executed, and the new value of count will be passed as the count parameter.It logs the value of count to the console.

//     Additionally, there are optional additional options that can be provided as the third argument to the watch function. These options include deep, immediate, and flush, which control the behavior of the watcher.However, the code snippet you provided doesn't specify any values for these options.

// The export default statement exports the component as the default export.

// That's a brief explanation of the code you provided. The watch function is a powerful tool in Vue.js 3 that allows you to reactively respond to changes in data and perform side effects.





