// 👉 Emits Registration : Option api

{/* <script>
//declare the custom events emitted by the component
    //simple form using an array of strings
    emits: ['check'],
    //or object with validation
    emits: {
        // no validation
        click: null,
// with validation
submit: (payload) => {
if (payload.email && payload.password) {
return true
} else {
        console.warn(`Invalid submit event payload!`)
return false
}
}
},
</script> */}


// ✅ Explanation :

// Let's break down the code and understand what it does.


//     < script >
//     // Declare the custom events emitted by the component

//     // Simple form using an array of strings
//     emits: ['check'],

//         // Or object with validation
//         emits: {
//     // No validation
//     click: null,

//         // With validation
//         submit: (payload) => {
//             if (payload.email && payload.password) {
//                 return true;
//             } else {
//                 console.warn(`Invalid submit event payload!`);
//                 return false;
//             }
//         }
// },
// </ >
//     In Vue.js 3, components can emit custom events to communicate with their parent components or other components listening for those events.The emits option allows you to declare the events that the component can emit.

// In the provided code, we have two examples of how the emits option can be used:

// Simple Form Using an Array of Strings:


// emits: ['check'],
//     In this case, the component can emit a custom event called 'check'.When the event is emitted, parent components or listeners can listen for it and respond accordingly.

// Object with Validation:


// emits: {
//     click: null,
//         submit: (payload) => {
//             if (payload.email && payload.password) {
//                 return true;
//             } else {
//                 console.warn(`Invalid submit event payload!`);
//                 return false;
//             }
//         }
// },
// In this example, the component can emit two events: 'click' and 'submit'.The 'click' event doesn't have any validation, so it can be emitted without any conditions.

// The 'submit' event, however, has validation logic defined.When the 'submit' event is emitted, the provided validation function will be executed.The validation function receives a payload object as an argument, which typically contains data related to the event.

// In this case, the validation function checks if both payload.email and payload.password exist.If they do, the function returns true, indicating that the event is valid and can be emitted.If either of the properties is missing, the function returns false, and a warning message is logged to the console.

//     That's a basic explanation of how the emits option is used to declare custom events with or without validation in Vue.js 3.





