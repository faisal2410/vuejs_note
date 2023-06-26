// 👉 Script setup api example 2

{/* <MyComponent v-model:title="bookTitle" />
<!-- MyComponent.vue -->
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>
<template>
<input type="text“ :value="title"
@input="$emit('update:title', $event.target.value)"
/>
</template> */}


// ✅ Explanation :

// This code is written in Vue.js 3 and involves a parent component (<MyComponent>) and a child component (<input>). Let's break it down step by step:


// <MyComponent v-model:title="bookTitle" />
// In this line, we have an instance of the <MyComponent> component. The v-model:title directive is used to create a two-way binding between the bookTitle property in the parent component and the title property in the child component. This means that any changes made to bookTitle will automatically update title, and vice versa.

// Now, let's take a look at the <MyComponent.vue> file:


// <script setup>
// defineProps(['title'])
// defineEmits(['update:title'])
// </script>
// This code block is written using the <script setup> syntax, which is a shorthand syntax introduced in Vue.js 3. It allows you to define component options within a <script> tag directly in the SFC (Single-File Component).

// The defineProps function is used to declare the props that the component expects to receive from its parent. In this case, it expects a prop called title.

// The defineEmits function is used to declare the events that the component can emit to its parent. In this case, it emits an event called 'update:title'. This event will be used to notify the parent component whenever the title property in the child component changes.

// Moving on to the <template> section:


// <template>
//   <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
// </template>
// Inside the template, we have an <input> element of type "text". The :value="title" binding ensures that the value of the input is bound to the title property, which is received as a prop from the parent component.

// The @input event listener is triggered whenever the user types into the input field. It calls the $emit function to emit the 'update:title' event to the parent component. The new value of the input field, $event.target.value, is passed along with the event.

// So, in summary, this code sets up a two-way binding between the parent component's bookTitle property and the child component's title prop. Any changes made to the input field in the child component will trigger an 'update:title' event that is emitted to the parent component, keeping the two properties in sync.






