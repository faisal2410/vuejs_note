// 👉 Script setup api example 3

{/* <script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
const groceryList = ref([
{ id: 0, text: 'Vegetables' },
{ id: 1, text: 'Cheese' },
{ id: 2, text: 'Whatever else humans are supposed to eat' }
])
</script>
<template>
<ol>
<TodoItem
v-for="item in groceryList"
:todo="item"
:key="item.id"
></TodoItem>
</ol>
</template >
< !--TodoItem.vue -->
<script setup>
const props = defineProps({
todo: Object
})
</script>
<template>
<li>{{ todo.text }}</li>
</template>  */}


// ✅ Explanation :

// Let's go through the code step by step and explain each part.


//     < script setup >
// import { ref } from 'vue'
// import TodoItem from './TodoItem.vue'
// const groceryList = ref([
//     { id: 0, text: 'Vegetables' },
//     { id: 1, text: 'Cheese' },
//     { id: 2, text: 'Whatever else humans are supposed to eat' }
// ])
// </ >
//     <template>
//         <ol>
//             <TodoItem
//                 v-for="item in groceryList"
//       :todo="item"
//             :key="item.id"
//     ></TodoItem>
//     </ol>
// </template >
//     In this code snippet, we are using the new < script setup > syntax introduced in Vue 3. This syntax allows us to write the script code and template code together, providing a more concise and compact syntax.

// In the script section, we import the ref function from the vue package.The ref function is used to create a reactive reference to a value.It allows us to track changes to the value and automatically update any components that use it.We also import the TodoItem component from the './TodoItem.vue' file.

//     Next, we declare a variable named groceryList and assign it the result of calling the ref function with an array of todo items.Each todo item is an object with an id and text property.

// Moving on to the template section, we have an ordered list(<ol>) element. Inside the list, we use the v-for directive to iterate over each item in the groceryList array. For each item, we create a TodoItem component and pass the item as a prop named todo. We also bind the key attribute to item.id to help Vue efficiently update the list when items change.

//         Now let's take a look at the TodoItem.vue file.

      
//         <!-- TodoItem.vue -->
//         <script setup>
//             const props = defineProps({
//                 todo: Object
// })
//         </>
//         <template>
//             <li>{{ todo.text }}</li>
//         </template>
//         Inside the script setup section, we define a props object using the defineProps function. This allows us to declare the props that the TodoItem component expects. In this case, we have a single prop named todo, which is of type Object.

//         In the template section, we have a list item (<li>) element. Inside the list item, we use the mustache syntax {{ todo.text }} to display the value of the todo.text property. This will display the text of each todo item in the list.

//             That's the explanation of the given Vue.js 3 code. If you have any further questions, feel free to ask!





