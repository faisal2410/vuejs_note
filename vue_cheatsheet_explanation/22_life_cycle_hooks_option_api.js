// 👉 Lifecycle Hooks: option api

<script>
//called when the instance is initialized
    beforeCreate() {/*...*/},
    //called after the instance has finished processing all staterelated options
    created() {/*...*/},
    //called right before the component is to be mounted
    beforeMount() {/*...*/},
    //called after the component has been mounted
    mounted() {/*...*/},
    //called right before the component is about to update its DOM
    tree due to a reactive state change
    beforeUpdate() {/*...*/},
    //called after the component has updated its DOM tree due to a 
    reactive state change
    updated() {/*...*/},
    //called right before a component instance is to be unmounted
    beforeUnmount() {/*...*/},
    //called after the component has been unmounted
    unmounted() {/*...*/},
//others: errorCaptured, activated ...
</script>


// ✅ Explanation :


// In Vue.js 3, the code you provided represents the lifecycle hooks that can be used in a Vue component.These hooks are special methods that are called at specific stages of a component's lifecycle. They allow you to perform certain actions or operations at different points during the component's existence.

//     Here's a breakdown of each hook and when it is called:

// beforeCreate(): This hook is called when the instance is being initialized but before data observation and event / watcher setup.It's useful for performing any setup tasks that need to be done before the component is fully created.

// created(): This hook is called after the instance has finished processing all state - related options.At this point, the component has been initialized, data observation has been set up, computed properties have been defined, and methods have been bound.You can perform additional setup tasks here, such as making API calls or initializing third - party libraries.

//     beforeMount(): This hook is called right before the component is about to be mounted into the DOM.It is commonly used to perform any necessary setup or calculations before the component is rendered.

//         mounted(): This hook is called after the component has been mounted into the DOM.It indicates that the component is now accessible in the DOM, and you can interact with the component's rendered template or manipulate the DOM if needed. It's often used to fetch initial data from APIs or set up event listeners.

//             beforeUpdate(): This hook is called right before the component is about to update its DOM tree due to a reactive state change.It allows you to perform any necessary actions or calculations before the component re - renders.

//                 updated(): This hook is called after the component has updated its DOM tree due to a reactive state change.It's useful for performing tasks that need to be done after the component has re-rendered, such as updating third-party libraries or manipulating the DOM.

// beforeUnmount(): This hook is called right before a component instance is about to be unmounted(removed) from the DOM.It's a good place to perform any cleanup tasks, such as removing event listeners or canceling pending requests.

// unmounted(): This hook is called after the component has been unmounted from the DOM.It indicates that the component is no longer in the DOM and can be used to perform any final cleanup tasks.

// These lifecycle hooks allow you to control the behavior of your Vue components at different stages of their existence.By implementing these hooks, you can perform actions at the appropriate times, making your component's behavior more predictable and manageable.






