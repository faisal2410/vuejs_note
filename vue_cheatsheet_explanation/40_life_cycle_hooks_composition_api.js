// 👉 Lifecycle Hooks, Composition api:

{/* <script>
    import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
        onBeforeUnmount, onUnmounted} from 'vue'
//called right before the component is to be mounted
onBeforeMount(() => {...})
//called after the component has been mounted
onMounted(() => {...})
    //called right before the component is about to update its 
    DOM tree due to a reactive state change.
onBeforeUpdate(() => {...})
    //called after the component has updated its DOM tree due to 
    a reactive state change
onUpdated(() => {...})
    //called right before a component instance is to be 
    unmounted
onBeforeUnmount(() => {...})
//called after the component has been unmounted
onUnmounted(() => {...})
//additional hooks

    import {onErrorCaptured, onActivated, onDeactivated,
        onServerPrefetch, ...} from 'vue‘
</script> */}


// ✅ Explanation :

// The code you provided demonstrates the usage of various lifecycle hooks in Vue.js 3. Lifecycle hooks are functions that allow you to execute code at specific stages of a component's lifecycle. Let's go through each of the hooks mentioned in the code:

// onBeforeMount: This hook is called right before the component is to be mounted, which means it runs before the component's template is rendered. It is often used to perform setup tasks or fetch initial data.

// onMounted: This hook is called after the component has been mounted, which means it runs when the component's template has been rendered and inserted into the DOM. It is commonly used for tasks that require access to the DOM, such as initializing third-party libraries or setting up event listeners.

// onBeforeUpdate: This hook is called right before the component is about to update its DOM tree due to a reactive state change.It allows you to perform operations or clean up before the component re - renders.This hook is useful for handling state changes and performing calculations or validations.

//     onUpdated: This hook is called after the component has updated its DOM tree due to a reactive state change.It runs after the re - rendering of the component is complete and can be used for tasks that require interaction with the updated DOM.

//         onBeforeUnmount: This hook is called right before a component instance is to be unmounted, meaning it will be removed from the DOM.It is commonly used for cleaning up event listeners or subscriptions before the component is destroyed.

//             onUnmounted: This hook is called after the component has been unmounted.It is useful for performing final cleanup tasks, such as clearing timers or releasing resources.

// These hooks provide lifecycle event handling capabilities in Vue.js 3, allowing you to execute specific code at different stages of a component's lifecycle. By using these hooks appropriately, you can enhance the functionality and reactivity of your Vue components.

// Note: The code also imports other hooks like onErrorCaptured, onActivated, onDeactivated, and onServerPrefetch, which are not explicitly mentioned in the provided code snippet.These hooks serve specific purposes in Vue.js applications, but without further context, it is difficult to explain their exact functionality.







