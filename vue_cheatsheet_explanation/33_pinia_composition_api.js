// 👉 Pinia :Composition api

{/* <script>
    import {useCounterStore} from '../stores/counterStore'
    export default {
        setup() {
const counterStore = useCounterStore()
    counterStore.counter++ //directly read and write state
    counterStore.$reset() //reset to its initial value
    //call the $patch method to mutate state or part of state
    counterStore.$patch({
        counter: counterStore.counter + 1,
    name: 'Abalam',
})
//use $patch with a function
counterStore.$patch((state) => {
        state.items.push({ name: 'shoes', quantity: 1 })
state.hasChanged = true
})
    //call any action as a method of the store
    counterStore.randomizeCounter()
    //directly access any getter as a property of the store
    counterStore.doubleCount
    return {counterStore}
},
}
</script> */}


// ✅ Explanation :



//  Let's go through the code step by step and explain what each part does.


// import { useCounterStore } from '../stores/counterStore'
// In this line, we are importing the useCounterStore function from the counterStore module.It suggests that the code is using a store to manage state in a Vue.js application.The useCounterStore function is likely a custom hook or helper function that provides access to the counter store.


// export default {
//     setup() {
//         const counterStore = useCounterStore()
// In the setup function, we initialize a local variable counterStore and assign it the result of calling useCounterStore().This creates an instance of the counter store, which we can use to interact with the state and perform actions.


//         counterStore.counter++
//         Here, we are directly accessing the counter property of the counterStore and incrementing it by 1. It demonstrates how we can read and write to the state directly.


//         counterStore.$reset()
// This line calls the $reset method of the counterStore, which resets the state to its initial values.It can be useful when you want to restore the state to a predefined state.


//         counterStore.$patch({
//             counter: counterStore.counter + 1,
//             name: 'Abalam',
//         })
// The $patch method is called on the counterStore with an object as an argument.It mutates the state or a part of the state by merging the provided object with the current state.In this case, we are incrementing the counter property by 1 and setting the name property to 'Abalam'.


// counterStore.$patch((state) => {
//             state.items.push({ name: 'shoes', quantity: 1 })
//             state.hasChanged = true
//         })
// Here, $patch is used again, but this time with a function as an argument.The function receives the state object as a parameter, and we can perform more complex state mutations inside the function.In this example, we are pushing a new item { name: 'shoes', quantity: 1 } to the items array and setting the hasChanged property to true.


// counterStore.randomizeCounter()
// This line calls the randomizeCounter method of the counterStore.It suggests that the store might have defined an action that randomizes the value of the counter property or performs some other logic.


// counterStore.doubleCount
// Here, we are directly accessing the doubleCount getter as a property of the counterStore.Getters are computed properties that derive values from the state.By accessing doubleCount, we get the computed value without explicitly calling a method.


// return { counterStore }
// Finally, the setup function returns an object with counterStore as a property.This makes the counterStore accessible in the template or other parts of the component.

//     Overall, this code showcases how to use a counter store in a Vue.js 3 application.The store provides methods and properties to interact with the state, perform state mutations, and access computed values.





