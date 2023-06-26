// 👉 Pinia : option api

{/* <script>
//to access pretty much everything from the store use
    mapStores() with computed option
    import {mapStores} from 'pinia‘
    import {useStore, anotherStore} from ‘../store‘
    export default {
        computed: {
        //not passing an array, just one store after the other
        ...mapStores(useStore, anotherStore)
    },
    //each store will be accessible as its id + 'Store’
    //use this.mainStore anywhere!
    //you can directly read and write state
    //can directly call any action as a method of the store
    //directly access any getter as a property of the store
    methods: {
        myMethod() {
        this.mainStore.increment()
    },
},
}
</script> */}


// ✅ Explanation :

// Let's go through the code step by step and explain what each part does:


// import { mapStores } from 'pinia'
// import { useStore, anotherStore } from '../store'

// export default {
//     computed: {
//         ...mapStores(useStore, anotherStore)
//     },
//     methods: {
//         myMethod() {
//             this.mainStore.increment()
//         },
//     },
// }


// The code starts by importing the mapStores function from the pinia library.This function allows us to access multiple stores in a Vue.js component.

// It then imports two store objects: useStore and anotherStore.These store objects are typically created using the createStore function provided by pinia or another state management library for Vue.js.

// The computed property is an object that contains computed properties for the component.In this case, the ...mapStores(useStore, anotherStore) syntax is used to spread the result of the mapStores function into the computed object.This syntax essentially adds all the properties and methods of the store objects to the component.

// The methods property is an object that contains methods for the component.Here, we have a single method called myMethod.Inside this method, this.mainStore.increment() is called.It assumes that there is a method called increment() defined in the mainStore object, which is one of the stores accessed through mapStores.

// To summarize, this code sets up the component to access multiple stores using the mapStores function. The computed properties and methods of the stores are then made available in the component, allowing you to directly read and write state, call actions, and access getters from the stores.In this specific example, the myMethod method calls the increment() method of the mainStore.

