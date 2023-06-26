// 👉how to use the emits and listen options in Vue.js 3.
// These options allow you to establish communication between components by emitting and listening to custom events.

//     Let's start by understanding how to use emits in Vue.js 3. The emits option is used to specify the events that a component can emit. By declaring the emitted events, you make it clear which events the component can trigger, and it helps improve code readability and maintainability.

// ✅Here's an example of how to use emits in a Vue.js 3 component:


//     < template >
//     <button @click="handleButtonClick" > Click me</button >
// </ >

//     <script>
//         export default {
//             emits: ['button-click'],
//         methods: {
//             handleButtonClick() {
//             this.$emit('button-click', 'Hello from the button!');
//     }
//   }
// }
//     </script>

// In this example, we have a button component that emits a custom event called 'button-click' when it is clicked.The emits option specifies that this component emits the 'button-click' event.Inside the handleButtonClick method, we use this.$emit to emit the event along with any data we want to pass(in this case, the string 'Hello from the button!').

// Now let's move on to the listen option, which allows a component to listen to events emitted by other components. This option is useful when you want a component to react to events emitted by its parent or other components in the application.

// ✅Here's an example of how to use listen in a Vue.js 3 component:


//     < template >
//     <div>
//         <p>{{ message }}</p>
//         <button @click="emitCustomEvent">Emit Custom Event</button>
//   </div >
// </ >

//     <script>
//         export default {
//             listen: {
//             'button-click': 'handleButtonEvent'
//   },
//         data() {
//     return {
//             message: ''
//     }
//   },
//         methods: {
//             handleButtonEvent(data) {
//             this.message = data;
//     },
//         emitCustomEvent() {
//             this.$emit('button-click', 'Custom event emitted!');
//     }
//   }
// }
//     </script>

// In this example, we have a child component that listens to the 'button-click' event emitted by a parent or other component.The listen option specifies that this component should listen to the 'button-click' event and call the handleButtonEvent method when the event is emitted.Inside the handleButtonEvent method, we update the message data property with the data received from the event.

//     ✅Additionally, the emitCustomEvent method in the child component demonstrates how you can emit a custom event('button-click' in this case) using this.$emit.In this example, the custom event is triggered when the "Emit Custom Event" button is clicked.

// Remember to include both the emits and listen options inside the component's options object. Also, don't forget to register and use the component in the parent component or wherever you need it.

// I hope this explanation helps you understand how to use emits and listen in Vue.js 3! Let me know if you have any further questions.





