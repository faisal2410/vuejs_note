// 👉 Watch : option api

{/* <script>
//declare watch callbacks to be invoked on data change
    watch: {
        a(val, oldVal) {
        console.log(`new: ${val}, old: ${oldVal}`)
    },
    b: 'plus', //string method name, reference to the method
    d: {
        handler(val, oldVal) {
        console.log('d changed')
    },
    //use this parameter if it is an object or an array, so 
    that the callback fires on deep mutations
    deep: true
},
    //watching a single nested property
    'd.e': function (val, oldVal) { //do something},
    c: {
        handler(val, oldVal) { //do something},
    //the callback will be called immediately after the start 
    of the observation
    immediate: true,
    // default: 'pre', specify callback timing relative to Vue
    component update
flush: 'pre' | 'post' | 'sync' }
},
</script> */}


// ✅ Explanation :

// Let's go through the code and understand what it does in Vue.js 3.


//     < script >
     // Declare watch callbacks to be invoked on data change
//     watch: {
//     a(val, oldVal) {
//         console.log(`new: ${val}, old: ${oldVal}`)
//     },
//     b: 'plus', // String method name, reference to the method
//         d: {
//         handler(val, oldVal) {
//             console.log('d changed')
//         },
         // Use this parameter if it is an object or an array, so that the callback fires on deep mutations
//         deep: true
//     },
     // Watching a single nested property
//     'd.e': function(val, oldVal) { /*do something*/ },
//     c: {
//         handler(val, oldVal) { /*do something*/ },
         // The callback will be called immediately after the start of the observation
//         immediate: true,
             // Default: 'pre', specify callback timing relative to Vue component update
//             flush: 'pre' | 'post' | 'sync'
//     }
// },
// </ >

//     This code is using the watch option in Vue.js to monitor changes in the specified data properties and execute corresponding callbacks when the values change.Let's break down each part:

// watch is an object where you define the properties you want to watch and the corresponding callbacks.
// The a property is being watched, and when its value changes, the callback function will be called with the new value val and the old value oldVal.In this case, it logs the new and old values to the console.
// The b property is also being watched, but instead of providing a callback function directly, a string 'plus' is used.This means that there is a method named plus defined in the Vue component, and whenever b changes, that method will be invoked.
// The d property is being watched with an object as the value.The handler property of this object is the callback function that will be called when d changes.It logs the message 'd changed' to the console.Additionally, by setting deep: true, it ensures that the callback is triggered for deep mutations, meaning changes that occur within the nested properties of d.
//     The 'd.e' property is a nested property of d, and it is being watched independently.Whenever d.e changes, the specified callback function will be executed.
// The c property is being watched with an object value.The handler property defines the callback function to be called when c changes.Additionally, by setting immediate: true, the callback is immediately invoked when the observation starts.The flush property specifies when the callback should be executed relative to the Vue component update.It can have one of three values: 'pre', 'post', or 'sync'.
// 'pre' means the callback will be executed before the component updates.
// 'post' means the callback will be executed after the component updates.
// 'sync' means the callback will be executed synchronously during the component update.
//     That's a brief explanation of the code. It demonstrates how to use the watch option in Vue.js 3 to monitor data changes and execute corresponding callbacks.






