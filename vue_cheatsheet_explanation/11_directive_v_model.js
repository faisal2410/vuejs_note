// 👉 Directive v-model:

{/* <template>
<!-- v-model creates a two-way binding on a form input element or a component -->
<input :value="text" @input="event => text = event.target.value" />
<!-- equivalent to -->
<input v-model="text">
</template>
<!--v - model for a custom component-- >
<template>
<CustomInput :modelValue="searchText“ @update:modelValue="newValue => searchText = newValue" />
</template>
<!--CustomInput.vue -->
<script>
export default {
props: ['modelValue'],
emits: ['update:modelValue']
}
</script>
<template>
<input :value="modelValue“ @input="$emit('update:modelValue', $event.target.value)" />
</template>
<!--CustomInput.vue -->
< !--equivalent to-- >
    <CustomInput v-model="searchText" /> */}


// ✅ Explanation :


// Let's break down the code and understand what each part does.


//     < template >
//   < !--v - model creates a two - way binding on a form input element or a component-- >
//     <input: value="text" @input="event => text = event.target.value" />
//   < !--equivalent to-- >
//     <input v-model="text">
//     </template>
// In this part, we have a < template > block in a Vue.js 3 component.It contains an < input > element that uses the v - model directive.The v - model directive creates a two - way binding between the input element and the text data property in the component.

// The first example shows the manual way of achieving the two - way binding.The : value = "text" binds the input's value to the text property, and @input="event => text = event.target.value" listens to the input event and updates the text property with the new value from the input.

// The second example, which is equivalent, uses the v - model shorthand.It combines the binding and event handling in a more concise way.


//     < template >
//   < !--v - model for a custom component-- >
//     <CustomInput: modelValue="searchText" @update: modelValue = "newValue => searchText = newValue" />
// </template >
    // In this part, we have another < input > element, but this time it's a custom component called CustomInput. The custom component receives the modelValue prop, which is equivalent to the value prop in a regular HTML input element. The value of searchText is passed as the modelValue prop.

// Additionally, the custom component emits an event called update:modelValue when the input value changes.The event is handled in the parent component, and the new value is assigned to the searchText data property.


//     < !--CustomInput.vue-->
{/* <script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template> */}
// In the custom component file, we define the CustomInput component using the Vue.js export default syntax.The component has a props property that declares the modelValue prop, which will be passed from the parent component.

// The emits property specifies that the component emits an event called update: modelValue.This allows the component to trigger the event when needed.

// In the component's <template> section, we have an <input> element that binds its value to the modelValue prop using :value="modelValue". The @input event listener triggers the update:modelValue event using $emit. It passes the new value from the input as the payload for the event.

// The final line in the code is:


//     < !--equivalent to-- >
//         <CustomInput v-model="searchText" />
// This line demonstrates that the custom component can be used with the v - model directive, similar to the native HTML input element.The v - model directive automatically handles the binding and event emitting, simplifying the code even further.

// I hope this explanation helps you understand the code better!




