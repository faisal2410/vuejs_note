// 👉 Reactivity api : utilities

{/* <script>
//isRef() - Checks if a value is a ref object.
    //unref() - Returns the inner value if the argument is a ref, 
    otherwise return the argument itself.
     toRef() - Can be used to create a ref for a property on a 
    source reactive object. The created ref is synced with its 
    source property: mutating the source property will update the 
    ref, and vice-versa.
    const state = reactive({
        foo: 1,
    bar: 2
})
    const fooRef = toRef(state, 'foo')
    // mutating the ref updates the original
    fooRef.value++
    console.log(state.foo) // 2
    // mutating the original also updates the ref
    state.foo++
    console.log(fooRef.value) // 3
    //toRef() is useful when you want to pass the ref of a prop:
    useSomeFeature(toRef(props, 'foo'))
 toRefs() converts a reactive object to a plain object.Each
individual ref is created using toRef() 
</script> */}


// ✅ Explanation :

// Let's go through the code step by step and explain each part:


//     < script >
//     import { reactive, toRef, toRefs } from 'vue';

 // The reactive() function creates a reactive object.
// const state = reactive({
//     foo: 1,
//     bar: 2
// });

 // The toRef() function creates a ref for a property on a reactive object.
 // In this case, we create a ref for the 'foo' property of the 'state' object.
// const fooRef = toRef(state, 'foo');

 // We can mutate the ref, and it will update the original property.
// fooRef.value++;
// console.log(state.foo); // Output: 2

 // Similarly, if we mutate the original property, it will update the ref.
// state.foo++;
// console.log(fooRef.value); // Output: 3

 // The toRef() function is useful when you want to pass the ref of a prop.
// useSomeFeature(toRef(props, 'foo'));

 // The toRefs() function converts a reactive object to a plain object where
 // each individual property is wrapped as a ref using toRef().
// const plainState = toRefs(state);
// </ >
//     Here's an explanation of the code:

// The code starts by importing the necessary functions from the vue package: reactive, toRef, and toRefs.These functions are part of Vue's reactivity system.

// The reactive() function is used to create a reactive object.In this case, the state object is created with two properties: foo with an initial value of 1 and bar with an initial value of 2. Reactive objects allow you to track changes to their properties.

// The toRef() function is used to create a ref for a property on a reactive object.In this case, fooRef is a ref created for the foo property of the state object.

// The code demonstrates how mutating the ref(fooRef.value++) updates the original property(state.foo).The console output after this mutation will be 2 because fooRef.value and state.foo are synchronized.

//     Similarly, the code shows that mutating the original property(state.foo++) also updates the ref(fooRef.value).The console output after this mutation will be 3.

// The code also demonstrates how to use toRef() when you want to pass the ref of a prop to a function or component.In this case, the toRef() function is used to pass the ref of the prop named foo to the useSomeFeature function.

// Finally, the toRefs() function is used to convert the reactive state object to a plain object where each individual property is wrapped as a ref using toRef().This can be useful when you need to pass the properties of a reactive object to a component that expects plain props.

//     That's a brief explanation of the provided Vue.js 3 code snippet. Let me know if you have any further questions!






