// ✅ custom events and event listeners in Vue.js 3.

// Custom events allow you to define and emit your own events within a Vue component, while event listeners enable you to listen for and respond to those custom events.Let's dive into the details with some code examples.

//✅ To create a custom event in Vue.js 3, you can use the $emit method within a component.Here's an example:


//     < template >
//     <button @click="handleButtonClick" > Click me</button >
// </ >

//     <script>
//         export default {
//             methods: {
//             handleButtonClick() {
//             this.$emit('custom-event', 'Hello from the custom event!')
//         }
//   }
// }
//     </script>

// In the example above, when the button is clicked, the handleButtonClick method is called.Within that method, this.$emit('custom-event', 'Hello from the custom event!') emits a custom event named 'custom-event' and passes a payload 'Hello from the custom event!'.

//  ✅   Now, to listen for and respond to this custom event in a parent component, you can use the v - on directive or the shorthand @symbol.Here's an example:


//     < template >
//   <div>
//     <ChildComponent @custom-event="handleCustomEvent"></ChildComponent>
//     <p>Received message: {{ message }}</p>
//   </div >
// </ >

//     <script>
//         import ChildComponent from './ChildComponent.vue'

//         export default {
//             components: {
//             ChildComponent
//         },
//         data() {
//     return {
//             message: ''
//     }
//   },
//         methods: {
//             handleCustomEvent(payload) {
//             this.message = payload
//         }
//   }
// }
//     </script>

// In the parent component, we import the ChildComponent and use it within our template.The @custom-event="handleCustomEvent" listens for the custom event 'custom-event' emitted by ChildComponent, and when triggered, it calls the handleCustomEvent method.The payload sent by the child component can be accessed as an argument in the method.In this example, the handleCustomEvent method updates the message data property with the received payload.

// By using this approach, you can establish communication between components using custom events and event listeners in Vue.js 3. Remember to define the custom event in the child component using $emit and listen for the event in the parent component using @custom-event or v - on: custom - event.







