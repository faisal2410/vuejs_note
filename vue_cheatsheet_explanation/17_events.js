// 👉 Events :

// <template>
// <!--Inside MyComponent -->
// <button @click="$emit('someEvent',param)">click</button>
// <MyComponent @some-event="callback" />
// </template >



// ✅Explanation :


// Let's break down the code and explain what each part does:


//     < template >
//   < !--Inside MyComponent-- >
//     <button @click="$emit('someEvent', param)" > click</button >
//         <MyComponent @some-event="callback" />
// </template >
//     This code is written in Vue.js 3 and consists of a Vue component.Let's go through it step by step:

//         < template >: This is the root element of the Vue component and it contains the template for the component's HTML markup.

//             < !--Inside MyComponent-- >: This is a comment indicating that the following code is inside the MyComponent component.

// < button @click="$emit('someEvent', param)" > click</ >: This is a button element that emits an event when clicked.The @click directive is a shorthand for v - on: click, which attaches a click event listener to the button.When the button is clicked, it calls the $emit method to emit an event named 'someEvent' with a parameter param.

// < MyComponent @some-event="callback" />: This line is another instance of the MyComponent component, and it listens for the 'some-event' event using the @some-event directive.When the event is emitted by the previous button click, it will trigger the callback method defined in the component's JavaScript code.

// It's important to note that in Vue.js, events can be emitted by child components and listened to by parent components. The MyComponent component is emitting the 'someEvent' event, and another instance of MyComponent is listening to it and executing a callback function named callback when the event is triggered.

// Make sure to have the appropriate JavaScript code in the component's script section to define the callback method and handle the emitted event.

// That's a brief explanation of the code you provided. Let me know if you have any further questions or need clarification on any specific part!





