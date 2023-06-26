//👉 v - on directive in Vue.js 3.

//  The v - on directive is used for event handling in Vue.js, allowing you to listen for and respond to events triggered by the user or by the system.Here's a step-by-step explanation along with code examples to illustrate its usage.

// Step 1: Setting Up Vue.js
// Before we dive into v-on, make sure you have Vue.js 3 installed and set up in your project. You can include Vue.js via a CDN or use a package manager like npm or yarn to install it.

// ✅Step 2: Basic v-on Syntax
// The basic syntax for using v-on is as follows:


{/* <button v-on:eventName="handler">Click me</button> */}

// Here, eventName represents the event you want to listen for (e.g., click, input, keydown, etc.), and handler is the method or expression you want to execute when the event occurs.

// ✅Step 3: Using Methods as Event Handlers
// In Vue.js, you typically define methods in the methods option of your Vue component. Let's see an example:


{/* <template>
  <button v-on:click="sayHello">Click me</button>
</template>

<script>
export default {
  methods: {
    sayHello() {
      console.log('Hello!');
    }
  }
}
</script> */}

// In this example, when the button is clicked, the sayHello method is called, which logs 'Hello!' to the console. You can bind multiple event handlers by separating them with commas.

//✅ Step 4: Accessing Event Information
// You can also access event information within your event handlers. Vue.js automatically passes the event object as the first argument to the handler method. Let's modify the previous example to include event information:


{/* <template>
  <button v-on:click="handleClick">Click me</button>
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      console.log('Button clicked!', event);
    }
  }
}
</script> */}

// Now, when the button is clicked, the handleClick method is called, and it logs both the custom message and the event object to the console.

// ✅Step 5: Inline Event Handlers
// Instead of referencing a method in your component, you can use an inline expression as the event handler. Let's see an example:


{/* <template>
  <button v-on:click="counter++">Increment</button>
  <p>Counter: {{ counter }}</p>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  }
}
</script> */}

// In this example, when the button is clicked, the counter variable increments directly within the inline expression. The updated value is then displayed in the paragraph below the button.

// ✅Step 6: Shorthand Syntax
// Vue.js provides a shorthand syntax for the v-on directive using the @ symbol. It has the same effect as using v-on:eventName. Let's modify the first example using the shorthand syntax:


{/* <template>
  <button @click="sayHello">Click me</button>
</template>

<script>
export default {
  methods: {
    sayHello() {
      console.log('Hello!');
    }
  }
}
</script> */}

// Both the long and shorthand syntaxes are valid and functionally equivalent.




// ✅ Event handling in Vue.js 3. Event handling is an essential part of building interactive applications, and Vue.js provides a straightforward and powerful way to handle events.Let's go through the basics with some code examples.

// In Vue.js, you can handle events using the v - on directive or the @shorthand.These allow you to listen for specific events and trigger corresponding methods in your component.

  // ✅Here's an example of event handling in Vue.js 3:


//   < template >
//   <button @click="handleClick" > Click me!</button >
// </ >

//   <script>
//     export default {
//       methods: {
//       handleClick() {
//       console.log('Button clicked!');
//     }
//   }
// }
//   </script>

// In the above code, we have a simple button element.We use the @click directive to listen for the click event and associate it with the handleClick method.When the button is clicked, the handleClick method will be called, and it will log "Button clicked!" to the console.

//✅ You can also pass additional data to the event handler method.Let's see an example:


//   < template >
//   <button @click="handleClick('Hello, World!')" > Click me!</button >
// </ >

//   <script>
//     export default {
//       methods: {
//       handleClick(message) {
//       console.log(message);
//     }
//   }
// }
//   </script>


// In the updated code, we pass the message 'Hello, World!' as an argument to the handleClick method.When the button is clicked, it will log "Hello, World!" to the console.

// Apart from the click event, Vue.js provides many other built -in events such as input, submit, focus, blur, etc.You can use the same v - on directive or @shorthand to listen to these events.

//  ✅ Additionally, you can create custom events in Vue.js using the $emit method.This allows you to communicate between parent and child components or between sibling components.Here's an example:


//   < !--ChildComponent.vue -->
//     <template>
//       <button @click="notifyParent">Notify Parent</button>
// </template >

//   <script>
//     export default {
//       methods: {
//       notifyParent() {
//       this.$emit('custom-event', 'Custom event payload');
//     }
//   }
// }
//   </script>

//   < !--ParentComponent.vue -->
// <template>
//   <div>
//     <p>{{ message }}</p>
//     <ChildComponent @custom-event="handleCustomEvent" />
//   </div>
// </template>

// <script>
// import ChildComponent from './ChildComponent.vue';

// export default {
//   components: {
//     ChildComponent
//   },
//   data() {
//     return {
//       message: ''
//     };
//   },
//   methods: {
//     handleCustomEvent(payload) {
//       this.message = payload;
//     }
//   }
// }
// </script>

// In this example, the child component(ChildComponent) emits a custom event named 'custom-event' with a payload of 'Custom event payload'.The parent component(ParentComponent) listens to this event using the @custom-event directive and triggers the handleCustomEvent method.The payload is then assigned to the message data property, which gets displayed in the template.

// These are the basics of event handling in Vue.js 3. I hope this explanation helps you understand how to handle events effectively in your Vue.js applications.










