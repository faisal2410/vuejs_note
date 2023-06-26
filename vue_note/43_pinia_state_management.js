// 👉 Pinia for state management in Vue.js 3.
//  Pinia is a state management pattern and library specifically designed for Vue.js 3.

// To get started, you'll need to have Vue.js 3 installed in your project. You can install Pinia using npm or yarn by running the following command in your project directory:

// npm install pinia
// Once you have Pinia installed, you can create a Pinia store by following these steps:

// ✅Step 1: Import the necessary dependencies.


// import { createPinia, defineStore } from 'pinia';
// import { createApp } from 'vue';

// ✅Step 2: Create a Pinia store.


// const pinia = createPinia();

// Define your store using `defineStore` function
// const useMyStore = defineStore('myStore', {
     // state and getters go here
//     state: () => ({
//         count: 0,
//     }),
//     getters: {
//         doubleCount: (state) => state.count * 2,
//     },
    // mutations and actions go here
//     actions: {
//         increment() {
//             this.count++;
//         },
//         decrement() {
//             this.count--;
//         },
//     },
// });


// ✅Step 3: Create a Vue app and use the Pinia store.


// const app = createApp(/* your Vue app */);

 // Use the Pinia plugin
// app.use(pinia);

 // Mount the app to an element
// app.mount('#app');


// Now, you have a basic Pinia store set up.You can use this store in your Vue components.Here's an example of how you can use the store in a component:


//     < template >
//   <div>
//     <p>Count: {{ count }}</p>
//     <p>Double Count: {{ doubleCount }}</p>
//     <button @click="increment">Increment</button>
//     <button @click="decrement" > Decrement</button >
//   </div >
// </ >

//     <script>
//         import {useMyStore} from './store';

//         export default {
//             setup() {
//     const store = useMyStore();

//         return {
//             count: store.count,
//         doubleCount: store.doubleCount,
//         increment: store.increment,
//         decrement: store.decrement,
//     };
//   },
// };
//     </script>


// In this example, we import the useMyStore function from the store file and call it to access the store instance within the setup function. We then map the store's state, getters, and actions to the component's template.

//     That's it! You now have a working Pinia store for state management in Vue.js 3. You can add more state properties, getters, mutations, and actions to suit your application's needs.

// Remember to import the store in any component where you need to access its state or actions.Also, don't forget to install and use the Pinia plugin in your main Vue app file.


// ✅Composing Stores
// One of the great features of Pinia is the ability to compose multiple stores together.This allows you to split your application's state into modular and reusable stores. Here's an example of how you can compose stores:


// storeA.js
// import { defineStore } from 'pinia';

// export const useStoreA = defineStore('storeA', {
//     state: () => ({
//         message: 'Hello from Store A',
//     }),
// });

// storeB.js
// import { defineStore } from 'pinia';

// export const useStoreB = defineStore('storeB', {
//     state: () => ({
//         count: 0,
//     }),
//     actions: {
//         increment() {
//             this.count++;
//         },
//     },
// });

// main.js
// import { createPinia } from 'pinia';
// import { createApp } from 'vue';
// import { useStoreA } from './storeA';
// import { useStoreB } from './storeB';

// const pinia = createPinia();

// const app = createApp(/* your Vue app */);

// app.use(pinia);

// Use the stores in your app
// const storeA = useStoreA();
// const storeB = useStoreB();

// app.provide('storeA', storeA);
// app.provide('storeB', storeB);

// app.mount('#app');

// In the above example, we have two separate stores, storeA and storeB.We use the useStoreA and useStoreB functions to create instances of these stores.Then, we provide these store instances to the Vue app using the app.provide method.This makes the stores accessible in all components of the app.

//     Now, you can use these stores in your components by injecting them using the inject function. Here's an example:


//     < template >
//     <div>
//         <p>{{ storeA.message }}</p>
//         <p>Count: {{ storeB.count }}</p>
//         <button @click="storeB.increment">Increment</button>
//   </div >
// </ >

//     <script>
//         import {inject} from 'vue';

//         export default {
//             setup() {
//     const storeA = inject('storeA');
//         const storeB = inject('storeB');

//         return {storeA, storeB};
//   },
// };
//     </script>

// By injecting the stores in this way, you can access their state and actions within the component's template and logic.

// ✅Actions and Mutations
// Actions and mutations are the primary means of modifying the state in a Pinia store.

// Actions are asynchronous operations that can perform computations, make API calls, or execute other actions.Here's an example of an action in a Pinia store:


// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     actions: {
//         async incrementAsync() {
//             await new Promise((resolve) => setTimeout(resolve, 1000));
//             this.count++;
//         },
//     },
// });

// In this example, the incrementAsync action increases the count after a delay of 1 second using a Promise.Actions can be asynchronous and perform side effects before modifying the state.

//     Mutations, on the other hand, are synchronous operations that directly modify the state.Here's an example of a mutation in a Pinia store:


// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     actions: {
//         increment() {
//             this.$patch((state) => {
//                 state.count++;
//             });
//         },
//     },
// });



// In the example above, the increment action uses the $patch method to modify the state.The $patch method takes a function as an argument, which receives the current state as a parameter.Inside the function, you can modify the state as needed.

//     Here's an example of how you can use actions and mutations in a component:


//     < template >
//   <div>
//     <p>Count: {{ store.count }}</p>
//     <button @click="store.increment">Increment</button>
//     <button @click="incrementAsync" > Increment Async</button >
//   </div >
// </ >

//     <script>
//         import {useCounterStore} from './store';

//         export default {
//             setup() {
//     const store = useCounterStore();

//     const incrementAsync = async () => {
//             await store.incrementAsync();
//     };

//         return {
//             store,
//             incrementAsync,
//     };
//   },
// };
//     </script>

// In this example, we import the useCounterStore function to create an instance of the counter store.We then map the store's count state and increment action to the component's template.Additionally, we define an incrementAsync function that calls the incrementAsync action in the store.

// When the "Increment" button is clicked, the increment action is triggered, which updates the count.When the "Increment Async" button is clicked, the incrementAsync function is called, which triggers the incrementAsync action with a delay.

//     ✅Modules
// Pinia allows you to organize your stores into modules, providing a more structured approach to state management.Modules are essentially namespaces for stores, and they can contain their own state, actions, mutations, and getters.

//     Here's an example of how you can define a module:


// module.js
// import { defineStore } from 'pinia';

// export const counterModule = {
//     id: 'counter',
//     store: defineStore('counter', {
//         state: () => ({
//             count: 0,
//         }),
//         actions: {
//             increment() {
//                 this.count++;
//             },
//         },
//     }),
// };

// In this example, we define a module named "counter" that contains a single store.The store has its own state and an increment action.

// To use the module in your app, you can register it with the Pinia instance:


// import { createPinia } from 'pinia';
// import { createApp } from 'vue';
// import { counterModule } from './module';

// const pinia = createPinia();

// pinia.use(counterModule);

// const app = createApp(/* your Vue app */);

// app.use(pinia);

// app.mount('#app');

// By calling pinia.use(counterModule), we register the module with the Pinia instance.Now, you can access the store within your components using the useStore function, like this:


//     < template >
//     <div>
//         <p>Count: {{ store.count }}</p>
//         <button @click="store.increment">Increment</button>
//   </div >
// </ >

//     <script>
//         import {useStore} from 'pinia';

//         export default {
//             setup() {
//     const store = useStore('counter');

//         return {store};
//   },
// };
//     </script>

// In this example, we import the useStore function from pinia and use it to create an instance of the store within the "counter" module.Now, the store is accessible in the component, and you can use its state and actions.

// That covers the basics of Pinia for state management in Vue.js 3, including composing stores, actions, mutations



// ✅State Persistence
// Pinia provides a convenient way to persist the state of your stores across page reloads or browser sessions using plugins.One popular plugin is pinia - plugin - persist, which integrates Pinia with local storage.Here's an example of how to use it:

// Step 1: Install the pinia - plugin - persist package.

// npm install pinia - plugin - persist
// Step 2: Import and use the plugin in your main file.


// import { createPinia } from 'pinia';
// import { createApp } from 'vue';
// import { createPersist } from 'pinia-plugin-persist';

// const pinia = createPinia();
// const persistPlugin = createPersist();

// pinia.use(persistPlugin);

// const app = createApp(/* your Vue app */);

// app.use(pinia);

// app.mount('#app');

// By calling createPersist(), we create an instance of the persist plugin.Then, we use pinia.use(persistPlugin) to register the plugin with the Pinia instance.This enables state persistence for all stores.

// Store Actions and Properties Composition
// Pinia allows you to compose actions and properties from multiple stores, enabling you to reuse logic across different store instances.Here's an example of how to compose actions and properties:


// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     actions: {
//         increment() {
//             this.count++;
//         },
//     },
// });

// const useAppStore = defineStore('app', {
//     state: () => ({
//         theme: 'light',
//     }),
//     actions: {
//         toggleTheme() {
//             this.theme = this.theme === 'light' ? 'dark' : 'light';
//         },
//     },
// });

// const useCombinedStore = defineStore('combined', {
    // Compose actions and properties from other stores
//     actions: {
//         ...useCounterStore.actions,
//         ...useAppStore.actions,
//     },
//     state: () => ({
//         ...useCounterStore.state(),
//         ...useAppStore.state(),
//     }),
// });

// In this example, we have two separate stores, useCounterStore and useAppStore.We can compose the actions and properties from these stores into a new store called useCombinedStore.By using the spread operator(...), we combine the actions and properties of the existing stores into the new store.

//     Now, useCombinedStore will have all the actions and properties from both useCounterStore and useAppStore.This allows you to reuse and combine logic from different stores.

// Plugins and Middleware
// Pinia supports plugins and middleware, which provide additional capabilities and extend the functionality of your stores.

// Plugins are functions that receive the Pinia instance as a parameter and can be used to add global behavior to all stores.Here's an example of a simple plugin:


// const myPlugin = (pinia) => {
     // Do something with the pinia instance
    // For example, add a global method to all stores
//     pinia.myGlobalMethod = () => {
//         console.log('Hello from myGlobalMethod');
//     };
// };
// To use the plugin, simply register it with the Pinia instance:


// pinia.use(myPlugin);
// Now, all stores created with Pinia will have access to the myGlobalMethod method.

//     Middleware, on the other hand, allows you to intercept actions and mutations before they are executed, enabling you to add additional logic or modify the behavior of the stores.Here's an example of middleware:



// const myMiddleware = {
         // Middleware function called before each action
//         onAction(action, payload) {
//             console.log(`Executing action: ${action}`);
//             console.log(`Payload: ${payload}`);
//         },

         // Middleware function called before each mutation
//         onMutation(mutation, payload) {
//             console.log(`Executing mutation: ${mutation}`);
//             console.log(`Payload: ${payload}`);
//         },
//     };

//     In this example, the myMiddleware object contains two methods: onAction and onMutation.These methods are called before each action and mutation, respectively.You can add custom logic inside these methods, such as logging or modifying the payload.

// To use the middleware, you can register it with the Pinia instance:

 
// pinia.use(({ store }) => {
//             store.$use(myMiddleware);
// });
        

//     By calling store.$use(myMiddleware) within the plugin registration function, the middleware will be applied to all stores.Now, every action and mutation will go through the middleware before execution.

// Plugins and middleware are powerful tools in Pinia that allow you to extend and customize the behavior of your stores, add global methods or functionality, and intercept actions and mutations.

//   ✅      Devtools
// Pinia integrates seamlessly with the Vue Devtools, providing a great debugging experience for your state management.To enable the Pinia Devtools, follow these steps:

//         Step 1: Install the Vue Devtools browser extension if you haven't already.

// Step 2: Enable the Pinia Devtools in your application:

  
// import { createPinia } from 'pinia';
//     import { createApp } from 'vue';

//     const pinia = createPinia();

     // Enable devtools
//     pinia.useDevtools();

//     const app = createApp(/* your Vue app */);

//     app.use(pinia);

//     app.mount('#app');

//     By calling pinia.useDevtools(), you enable the Pinia Devtools integration.Now, you can open the Vue Devtools in your browser and switch to the "Pinia" tab to inspect and debug your Pinia stores.

// The Devtools allow you to view the state, track mutations and actions, and perform time- travel debugging, making it easier to understand and debug your state management.

//     That covers some advanced concepts in Pinia for state management in Vue.js 3, including state persistence, store actions and properties composition, plugins and middleware, and the Pinia Devtools.These features provide additional flexibility and power to your state management solution.



//✅ Store Getters
// In addition to state, actions, and mutations, Pinia allows you to define getters in your stores.Getters are computed properties that derive values from the state of the store.Here's an example of how to define getters in a Pinia store:


// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     getters: {
//         doubleCount() {
//             return this.count * 2;
//         },
//     },
// });

// In this example, we define a getter named doubleCount that calculates and returns twice the value of the count state.Getters can access the store's state and other getters using the this keyword.

// To use the getter in a component, you can access it as a property of the store instance:


//     < template >
//     <div>
//         <p>Count: {{ store.count }}</p>
//         <p>Double Count: {{ store.doubleCount }}</p>
//     </div>
// </ >

//     <script>
//         import {useCounterStore} from './store';

//         export default {
//             setup() {
//     const store = useCounterStore();

//         return {store};
//   },
// };
//     </script>

// In this example, we import the useCounterStore function to create an instance of the store.Then, we can access the count state and doubleCount getter as properties of the store instance within the template.

//✅ Store Lifecycle Hooks
// Pinia provides lifecycle hooks that allow you to execute code at specific stages of a store's lifecycle. The available hooks are onBeforeMount, onMounted, onBeforeUnmount, and onUnmounted. Here's an example of using these hooks in a Pinia store:


// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     actions: {
//         increment() {
//             this.count++;
//         },
//     },
//     onBeforeMount() {
//         console.log('Before store is mounted');
//     },
//     onMounted() {
//         console.log('After store is mounted');
//     },
//     onBeforeUnmount() {
//         console.log('Before store is unmounted');
//     },
//     onUnmounted() {
//         console.log('After store is unmounted');
//     },
// });

// In this example, we define the lifecycle hooks onBeforeMount, onMounted, onBeforeUnmount, and onUnmounted in the store.These hooks are called at their respective stages of the store's lifecycle.

// You can use these hooks to perform additional initialization or cleanup tasks, subscribe to external events, or perform other operations that are specific to the lifecycle of the store.

// ✅Store Watchers
// Pinia provides the ability to watch changes to specific properties or getters in a store using watchers.Watchers allow you to react to changes in the store and perform actions accordingly.Here's an example of how to define watchers in a Pinia store:


// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     getters: {
//         doubleCount() {
//             return this.count * 2;
//         },
//     },
//     watchers: {
//         count(newValue, oldValue) {
//             console.log(`count changed: ${oldValue} => ${newValue}`);
//         },
//         doubleCount(newValue, oldValue) {
//             console.log(`doubleCount changed: ${oldValue} => ${newValue}`);
//         },
//     },
// });

// In this example, we define two watchers: one for the count state and another for the doubleCount getter

// The watchers are defined as properties in the store with the name of the property or getter to watch as the key, and a callback function as the value.The callback function is called whenever the watched property or getter changes, and it receives the new value and the old value as parameters.

// To use the watchers, you can create an instance of the store and access the watched properties or getters:


//     < template >
//     <div>
//         <p>Count: {{ store.count }}</p>
//         <p>Double Count: {{ store.doubleCount }}</p>
//     </div>
// </ >

//     <script>
//         import {useCounterStore} from './store';

//         export default {
//             setup() {
//     const store = useCounterStore();

//         return {store};
//   },
// };
//     </script>

// In this example, we import the useCounterStore function to create an instance of the store.The watchers defined in the store will automatically start watching the corresponding properties or getters.

// Whenever the watched properties or getters change, the callback functions defined in the watchers will be triggered.You can use these callbacks to perform any necessary actions or updates based on the changes.

// ✅Store Plugins
// Store plugins in Pinia allow you to extend or enhance the functionality of individual stores.A store plugin is an object that contains hooks or methods that can be mixed into a store.Here's an example of how to define and use a store plugin:


// const myPlugin = {
    // Called when the store is created
//     onCreate(store) {
//         console.log(`Store ${store.$id} created`);
//     },
     // Called when the store is destroyed
//     onDestroy(store) {
//         console.log(`Store ${store.$id} destroyed`);
//     },
     // Custom method added to the store
//     customMethod() {
//         console.log('This is a custom method');
//     },
// };

// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     plugins: [myPlugin],
//     actions: {
//         increment() {
//             this.count++;
//         },
//     },
// });


// In this example, we define a myPlugin object that contains the onCreate, onDestroy, and customMethod methods.We then pass the myPlugin object as an element in the plugins array when defining the store.

// When the store is created, the onCreate method of the plugin will be called, and when the store is destroyed, the onDestroy method will be called.The customMethod is added as a custom method to the store and can be called from any component that uses the store.

// Store plugins provide a way to encapsulate and share functionality across multiple stores, and they can be used to inject additional behavior or methods into the stores.

// That covers some additional advanced concepts and features in Pinia for state management in Vue.js 3, including store getters, lifecycle hooks, watchers, and store plugins.These features enhance the flexibility and extensibility of your state management solution.



//✅ Store Actions Context
// Pinia provides an optional context object that is passed to action functions as the first argument.This context object contains useful properties and methods that can be used within the action.Here's an example:


// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     actions: {
//         increment() {
             // Access the store instance using `this`
//             console.log(`Current count: ${this.count}`);

             // Access the context object
//             console.log(`Action name: ${this.$name}`);

             // Access the root store
//             console.log(`Root store count: ${this.$root.count}`);

            // Access other stores
//             console.log(`Other store value: ${this.$stores.otherStore.value}`);
//         },
//     },
// });


// In this example, within the increment action, you can access the store instance using this as usual.Additionally, the context object provides some useful properties:

// this.$name refers to the name of the current action.
//     this.$root refers to the root store instance, allowing you to access other stores within the application.
//         this.$stores provides access to all other registered stores.You can access them by their store name.
// This context object allows you to access and interact with other parts of your store or other stores within your actions, providing a convenient way to share and access data.

//✅ Store Modules
// In larger applications, you may have multiple modules or domains that require their own dedicated state management.Pinia allows you to create separate store modules and organize them within your application.Here's an example:


// const counterModule = defineStoreModule({
//     id: 'counter',
//     state: () => ({
//         count: 0,
//     }),
//     actions: {
//         increment() {
//             this.count++;
//         },
//     },
// });

// const todoModule = defineStoreModule({
//     id: 'todo',
//     state: () => ({
//         todos: [],
//     }),
//     actions: {
//         addTodo(todo) {
//             this.todos.push(todo);
//         },
//     },
// });

// const pinia = createPinia();

// pinia.use(counterModule);
// pinia.use(todoModule);

// const app = createApp(/* your Vue app */);

// app.use(pinia);

// app.mount('#app');


// In this example, we define two separate store modules: counterModule and todoModule.Each module has its own state, actions, and other properties.

// To use these modules, we register them with the Pinia instance using the pinia.use() method.This makes the store modules available throughout your application.

// Store modules allow you to organize your state management code into logical units and keep your stores modular and decoupled.

// ✅Store Mixins
// Pinia supports mixins, which allow you to reuse and share common functionality across multiple stores.A mixin is an object that contains properties and methods that can be merged into a store.Here's an example:


// const loggerMixin = {
//     beforeCreate() {
//         console.log(`Store ${this.$id} is being created`);
//     },
//     methods: {
//         log(message) {
//             console.log(`[${this.$id}] ${message}`);
//         },
//     },
// };

// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     mixins: [loggerMixin],
//     actions: {
//         increment() {
//             this.count++;
//             this.log('Count incremented');
//         },
//     },
// });

// In this example, we define a loggerMixin object that contains the beforeCreate hook and a log.


// The beforeCreate hook in the mixin is called when the store is being created, providing an opportunity to perform any setup or initialization logic.

// The log method in the mixin can be called from any action or method within the store, allowing you to add logging or other common functionality to multiple stores.


//     < template >
//     <div>
//         <p>Count: {{ store.count }}</p>
//         <button @click="store.increment()">Increment</button>
//   </div >
// </ >

//     <script>
//         import {useCounterStore} from './store';

//         export default {
//             setup() {
//     const store = useCounterStore();

//         return {store};
//   },
// };
//     </script>


// In this example, we import the useCounterStore function to create an instance of the store.The mixin's beforeCreate hook will be called when the store is being created, and the log method from the mixin can be called within the increment action.

// Mixins provide a way to reuse and share common functionality across multiple stores, allowing you to keep your code modular and maintainable.

// ✅Store Subscription
// Pinia allows you to subscribe to changes in a store's state using the subscribe method. Subscriptions are useful when you need to react to state changes outside of the components. Here's an example:


// const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),
//     actions: {
//         increment() {
//             this.count++;
//         },
//     },
// });

// const store = useCounterStore();

// const unsubscribe = store.$subscribe((mutation) => {
//     console.log(`Mutation: ${mutation}`);
// });

// store.increment(); // Trigger the mutation

// unsubscribe(); // Unsubscribe from further mutations

// In this example, we create an instance of the store using useCounterStore and assign it to the store variable.We then use the subscribe method on the store to listen for state changes.

// The subscribe method takes a callback function as its argument.This callback function is called whenever a mutation is performed on the store.It receives the mutation object as its parameter, which contains information about the mutation.

// You can perform any necessary actions or updates within the callback function to react to state changes.

// To unsubscribe from further mutations, you can call the returned unsubscribe function.

// Store subscriptions provide a way to react to state changes globally, outside of the components, and can be useful for performing side effects or triggering other actions based on state changes.

// That covers some additional advanced concepts and features in Pinia for state management in Vue.js 3, including store actions context, store modules, store mixins, and store subscriptions.These features further enhance the flexibility and extensibility of your state management solution.







