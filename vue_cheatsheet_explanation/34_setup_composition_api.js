// 👉 Setup(), Composition api

//  <script>
 //importing nessesary fucntions from Vue
//     import {ref, reactive, toRefs, toRef} from 'vue'
//     export default {
         // The setup() function is a key entry point for Composition API
//         setup() replaces data() function from Option API, all other options - methods,
//         computed, watch, lifecycle hooks declare inside setup() function.
//         Setup() has no "this", setup() called after beforeCreate hook and before Created
//         hook.
//         Setup() has two arguments: props and context = {attrs, slots, emit, expose} objects
        
//         setup(props, context) {
 //reactive() takes an object and return a reactive object
// const ob = reactive({key1: value1, key2: value2})
 //  ref() returns a reactive object, which has a single property .value that
// points to the inner value. ref() uses for a primitive data and for objects also. If the
// object contains nested refs, they will be deeply reactive
 //count = reactive object of {value:0}
//     const count = ref(0)
 //namesArr = reacative object of {value: ['Joe', 'Bob', [1, 2]]}
//     const namesArr = ref(['Joe', 'Bob', [1, 2]])
     //export to template, ref Unwrapping in Templates
//     return {
//         count, //it is 'ref' format
// ...toRefs(ob), //used toRefs() to transform to "ref" format
//     toRef(props, 'title'), //transform to "ref" format props.title
// }
// },
// }
// </script>




// ✅Explanation

// Let's break down the given code in Vue.js 3 step by step:


// import { ref, reactive, toRefs, toRef } from 'vue'

// export default {
//     setup(props, context) {
//         const ob = reactive({ key1: value1, key2: value2 })
//         const count = ref(0)
//         const namesArr = ref(['Joe', 'Bob', [1, 2]])

//         return {
//             count,
//             ...toRefs(ob),
//             toRef(props, 'title')
//         }
//     },
// }
// The code begins by importing necessary functions from the 'vue' package.These functions are ref, reactive, toRefs, and toRef.

// The export default statement exports an object that represents a Vue component.The component is defined using the Composition API, which is the recommended approach in Vue.js 3.

// The setup function is the entry point for the Composition API.It replaces the data() function used in the Options API.Inside setup, you can declare reactive data, methods, computed properties, watch functions, and lifecycle hooks.

// The setup function takes two arguments: props and context.props contains the component's props, while context provides access to the component's attributes, slots, event emitter, and exposed properties.

// Inside the setup function, the code declares a reactive object ob using the reactive function. It initializes ob with two properties: key1 and key2, which have the values value1 and value2, respectively.The reactive function makes the object ob reactive, meaning changes to its properties will trigger reactivity.

// The code creates a reactive reference count using the ref function. It initializes count with the value 0. Reactive references have a.value property that points to the underlying value.This allows reactivity to be preserved even for primitive values like numbers.

// Another reactive reference namesArr is created using ref.It is initialized with an array containing three elements: 'Joe', 'Bob', and[1, 2].

// The code returns an object that will be accessible in the template.The properties being returned are:

// count: This is a reactive reference to the count object.
// ...toRefs(ob): This uses the toRefs function to transform the properties of the ob object into reactive references.It spreads the properties of ob into the returned object.This ensures that each property of ob is reactive and can be accessed as a reference in the template.
//     toRef(props, 'title'): This uses the toRef function to transform the title prop into a reactive reference.It allows accessing the title prop as a reactive reference in the template.
// The closing braces(}) indicate the end of the setup function, and the component definition ends with the closing braces(}) for the export default statement.

//     That's a breakdown of the provided code in Vue.js 3 using the Composition API. Let me know if you have any further questions!





