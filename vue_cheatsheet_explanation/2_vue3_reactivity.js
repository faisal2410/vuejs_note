// 👉 Vue3 Reactivity :
// const target = {
//     message1: "hello",
//     message2: "everyone"
// };
// const handler = {
//     get(target, prop, receiver) {
//         return "reading";
//     }
// set(target, prop, receiver) {
//         Render();
//     }
// };
// const proxy = new Proxy(target,
//     handler);
// console.log(proxy.message1); // expects
// "hello", but it is "reading“
// proxy.message1 = 2; // call render



// ✅ Explanation :

// Let's break down the code step by step and explain what each part does.


// const target = {
//     message1: "hello",
//     message2: "everyone"
// };

// In this code, we define an object called target with two properties: message1 and message2.The initial values of these properties are "hello" and "everyone", respectively.


// const handler = {
//     get(target, prop, receiver) {
//         return "reading";
//     },
//     set(target, prop, receiver) {
//         Render();
//     }
// };


// Here, we define another object called handler, which serves as a handler for the Proxy object.The handler object contains two methods: get and set.

// The get method is invoked when a property is accessed(read) on the proxy object.In this code, the get method simply returns the string "reading".So, whenever you try to access a property of the proxy object, it will always return "reading" instead of the actual value.

// The set method is invoked when a property is assigned a new value on the proxy object.In this code, the set method calls a function named Render().It assumes that there is a function called Render() defined elsewhere in the code.This function is expected to handle rendering or updating the UI based on the changes made to the proxy object.

//     javascript
// Copy code
// const proxy = new Proxy(target, handler);
// Here, we create a Proxy object named proxy that wraps the target object and uses the handler object as its handler.The Proxy object allows us to intercept and customize the behavior of the target object.

//     javascript
// Copy code
// console.log(proxy.message1); // expects "hello", but it is "reading"
// This line of code tries to access the message1 property on the proxy object.Since we have defined a get method in the handler, it intercepts the property access and returns "reading" instead of the actual value of "hello".Therefore, the output of this console.log statement will be "reading".

//     javascript
// Copy code
// proxy.message1 = 2; // call Render
// This line of code attempts to assign a new value of 2 to the message1 property on the proxy object.The set method in the handler is invoked, which calls the Render() function (assuming it exists). This is where you would typically update the UI to reflect the changes made to the proxy object.

//     Overall, this code demonstrates the use of a Proxy object in Vue.js 3. The Proxy object allows you to intercept and customize the behavior of object properties, such as reading or setting values, and perform additional actions, like rendering or updating the UI, based on those intercepted operations.






