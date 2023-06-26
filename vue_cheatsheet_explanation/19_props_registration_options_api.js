// 👉 Props Registration : options api

{/* <script>
//all component props need to be explicitly declared
    //props can be declared in two forms: Simple form using an 
    array of strings
    props: ['size', 'myMessage'],
    //or full form using an object
    props: {
        height: Number, // type check
    age: { // type check plus other validations
        type: Number,
    default:
    0,
    required: true,
validator: (value) => { 
return value >=
    0
}
}
},
</script> */}


// ✅ Explanation :

// The code you provided is a Vue.js 3 component script.It defines the props(properties) that can be passed to the component.Props allow you to pass data from a parent component to a child component.

// In Vue.js 3, component props need to be explicitly declared.There are two forms of declaring props: the simple form and the full form.

// Simple Form:
// In the simple form, props are declared as an array of strings.Each string represents the name of a prop that the component can receive.In your code, the props "size" and "myMessage" are declared using the simple form.

// props: ['size', 'myMessage'],
//     Full Form:
// In the full form, props are declared as an object.Each property of the object represents a prop name, and the value associated with the property defines the configuration for that prop.In your code, there are two props declared using the full form: "height" and "age".
//     The "height" prop is defined as a Number type without any additional validations.

//         The "age" prop is defined with an object value, which allows for more advanced configuration.The configuration includes:

// type: Specifies the type of the prop.In this case, the "age" prop must be a Number.
//     default: Sets a default value for the prop if it is not provided when the component is used.In this example, the default value is set to 0.
// required: Indicates whether the prop is required or not.If set to true, the prop must be provided when using the component.
//     validator: Allows you to define a custom validation function for the prop.The function receives the prop value as an argument and should return either true or false.In this code, the validator checks if the "age" prop is greater than or equal to 0.

// props: {
//     height: Number,
//         age: {
//         type: Number,
//     default: 0,
//             required: true,
//                 validator: (value) => {
//                     return value >= 0;
//                 }
//     }
// },
// By declaring props in this way, you can ensure that the component receives the expected data and perform validations or apply default values as necessary.





