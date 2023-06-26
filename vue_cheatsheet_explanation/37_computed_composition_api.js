// 👉 Computed, Composition api

{/* <script>
    import {ref, computed} from 'vue'
    export default {
        setup(props, context) { 
const firstName = ref('John')
    const lastName = ref('Doe')
//computed
const compValue = computed(() => {
return firstName.value + props.num
})
    //computed with getter and setter
    const fullName = computed({
        // getter
        get() {
return firstName.value + ' ' + lastName.value
},
    // setter
    set(newValue) {
        firstName.value = newValue.split(' ')[0]
lastName.value = newValue.split(' ')[1]
}
})
    return {compValue, fullName}
}
}
</script> */}

// ✅ Explanation :

// Let's go through the code step by step and explain what each part does.


// import { ref, computed } from 'vue'
// This line imports the ref and computed functions from the Vue.js library.These functions will be used to create reactive data properties and computed properties.


// export default {
//     setup(props, context) {
//         const firstName = ref('John')
//         const lastName = ref('Doe')
//     ...
//     This code defines a Vue.js component using the setup function.Within the setup function, it declares two reactive variables, firstName and lastName, using the ref function.The initial values of these variables are set to 'John' and 'Doe', respectively.The ref function is used to create reactive references to the variables, enabling reactivity within the Vue component.


// const compValue = computed(() => {
//             return firstName.value + props.num
//         })
// Here, a computed property named compValue is created.It uses the computed function to define a dependency on firstName.value and props.num.The function provided to computed is the getter function, which calculates the value of compValue based on the current values of firstName and props.num.


// const fullName = computed({
//             get() {
//                 return firstName.value + ' ' + lastName.value
//             },
//             set(newValue) {
//                 firstName.value = newValue.split(' ')[0]
//                 lastName.value = newValue.split(' ')[1]
//             }
//         })
// This code defines another computed property named fullName.It has both a getter and a setter function.The getter function returns the concatenation of firstName.value and lastName.value with a space in between.The setter function is responsible for updating the values of firstName and lastName when fullName is assigned a new value.It splits the newValue string into two parts based on the space character and assigns the first part to firstName.value and the second part to lastName.value.


// return { compValue, fullName }
// Finally, the setup function returns an object with the compValue and fullName properties.These properties will be accessible in the Vue component's template or other components that use this component.

// That's a brief explanation of the provided code in Vue.js 3. It demonstrates the usage of reactive variables (ref) and computed properties (computed) within a Vue component.





