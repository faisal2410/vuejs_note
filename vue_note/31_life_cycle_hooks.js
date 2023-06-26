// 👉lifecycle hooks in Vue.js 3.
// Lifecycle hooks are functions that allow you to perform actions at specific stages of a component's lifecycle in Vue.js. They provide you with the ability to run code before, after, or during certain events in a component's life.In Vue.js 3, the lifecycle hooks have been simplified and consolidated into a single, more intuitive composition API.

//     Let's dive into the different lifecycle hooks in Vue.js 3:

// setup: The setup function is where you initialize the component's state and perform any necessary setup logic. It is the entry point to the composition API and runs before the component is created.

// import { ref, onMounted } from 'vue';

// export default {
//     setup() {
//         const message = ref('Hello, Vue!');

//         onMounted(() => {
//             console.log('Component mounted');
//         });

//         return {
//             message
//         };
//     }
// };

//✅ onBeforeMount: This hook is called right before the component is about to be mounted into the DOM.It's useful for performing setup tasks that need to happen just before rendering.

// import { onBeforeMount } from 'vue';

// export default {
//     setup() {
//         onBeforeMount(() => {
//             console.log('Component about to be mounted');
//         });
//     }
// };


//✅ onMounted: This hook is called once the component has been mounted into the DOM.It's commonly used for fetching data or initializing third-party libraries.

// import { onMounted } from 'vue';

// export default {
//     setup() {
//         onMounted(() => {
//             console.log('Component mounted');
//         });
//     }
// };

// ✅onBeforeUpdate: This hook is called before the component is updated, but after a data change is detected.It's useful for performing cleanup tasks or accessing the previous state or props.

// import { onBeforeUpdate } from 'vue';

// export default {
//     setup() {
//         onBeforeUpdate(() => {
//             console.log('Component about to be updated');
//         });
//     }
// };

// ✅onUpdated: This hook is called after the component has been updated and the virtual DOM has been re - rendered.It's commonly used for handling side effects after a data change.

// import { onUpdated } from 'vue';

// export default {
//     setup() {
//         onUpdated(() => {
//             console.log('Component updated');
//         });
//     }
// };


// ✅onBeforeUnmount: This hook is called right before the component is about to be unmounted and destroyed.It's useful for performing cleanup tasks or removing event listeners.

// import { onBeforeUnmount } from 'vue';

// export default {
//     setup() {
//         onBeforeUnmount(() => {
//             console.log('Component about to be unmounted');
//         });
//     }
// };

//✅ onUnmounted: This hook is called after the component has been unmounted and destroyed.It's commonly used for performing final cleanup tasks.

// import { onUnmounted } from 'vue';

// export default {
//     setup() {
//         onUnmounted(() => {
//             console.log('Component unmounted');
//         });
//     }
// };


// These are the primary lifecycle hooks in Vue.js 3. Each hook accepts a callback function that will be executed at the corresponding lifecycle stage.You can use them to perform various actions, such as manipulating data, making API requests, setting up event listeners, or cleaning up resources.



// Here are some additional lifecycle hooks in Vue.js 3:

// onErrorCaptured: This hook is used to capture and handle any errors that occur within the component or its children.It's helpful for error logging and error recovery.

// import { onErrorCaptured } from 'vue';

// export default {
//     setup() {
//         onErrorCaptured((error, vm, info) => {
//             console.error('An error occurred:', error);
//             console.error('Error info:', info);
//         });
//     }
// };

// onRenderTracked and onRenderTriggered: These hooks allow you to track when a component's reactive dependencies are accessed during rendering. They are useful for debugging and performance optimization.

// import { onRenderTracked, onRenderTriggered } from 'vue';

// export default {
//     setup() {
//         onRenderTracked((event) => {
//             console.log('Dependency tracked:', event);
//         });

//         onRenderTriggered((event) => {
//             console.log('Dependency triggered:', event);
//         });
//     }
// };


// onActivated and onDeactivated: These hooks are specifically designed for components used in Vue Router's <router-view> component. They are called when a component is activated or deactivated due to a route navigation.

// import { onActivated, onDeactivated } from 'vue';

// export default {
//     setup() {
//         onActivated(() => {
//             console.log('Component activated');
//         });

//         onDeactivated(() => {
//             console.log('Component deactivated');
//         });
//     }
// };


// onError: This hook is used to handle errors that are thrown inside the component itself.It's similar to the try-catch mechanism for capturing local errors.

// import { onError } from 'vue';

// export default {
//     setup() {
//         onError((error) => {
//             console.error('An error occurred:', error);
//         });
//     }
// };

// These additional lifecycle hooks provide more flexibility and control over the component's behavior at different stages. Depending on your use case, you can choose the appropriate hook(s) to handle specific scenarios.

// Remember that with the composition API in Vue.js 3, you can use multiple hooks within the setup function to organize and manage your component's lifecycle and logic more efficiently.













