// 👉 Directive v-for


// <template>
// <!-- v-for renders the element or template block multiple
// times based on the source data -->
// <div v-for="item in items">
// {{ item.text }}
// </div>
// <div v-for="(item, index) in items" :key="item.id"></div>
// <div v-for="(value, key) in object"></div>
// <div v-for="(value, name, index) in object"></div>
// <li v-for="item in items">
// <span v-for="childItem in item.children">
// {{ item.message }} {{ childItem }}
// </span>
// </li>
// <!--v -if has a higher priority than v -for, move v -for to a
// wrapping < template > -->
//     <template v-for="todo in todos">
//         <li v-if="!todo.isComplete">
//             {{ todo.name }}
//         </li>
//     </template>
// </template >

// ✅Explanation :


// Let's go through the code and explain each part in Vue.js 3.


//     < template >
//     The < template > tag is used in Vue.js to define the template for a component.It contains the HTML structure of the component.


//     < div v -for= "item in items" >
//         {{ item.text }}
// </ >
//     This code uses the v -for directive to render the < div > element multiple times based on the items array.It iterates over each item in the items array and displays the item.text inside the < div > element.

//     < div v -for= "(item, index) in items" : key = "item.id" ></ >
//         This v -for directive is similar to the previous one, but it also provides the index of the current item in the items array.The :key attribute is used to give each rendered element a unique identifier, in this case using the item.id value.

//     < div v -for= "(value, key) in object" ></ >
//         In this code, v -for iterates over the properties of the object and assigns the property value to value and the property key to key.However, since the < div > element has no content, it doesn't render anything.


//     < div v -for= "(value, name, index) in object" ></ >
//         Similar to the previous example, this code iterates over the properties of object, assigning the property value to value, property key to name, and the index to index.Again, the < div > element has no content to render.


//     < li v -for= "item in items" >
//         <span v-for="childItem in item.children">
//             {{ item.message }} {{ childItem }}
//         </span>
// </ >
//     This code uses nested v -for directives.It iterates over each item in the items array and renders a < li > element.Inside the < li >, there is another v -for that iterates over each childItem in the item.children array.It displays the item.message followed by the childItem value inside a < span > element.


//     < template v -for= "todo in todos" >
//         <li v-if="!todo.isComplete">
//             {{ todo.name }}
//         </li>
// </ >
//     In this code, v -for is used on the < template > tag itself.It iterates over each todo in the todos array.Inside the < template >, there is an v -if directive on the < li > element.It checks if the todo.isComplete property is false, and if so, it renders the todo.name inside the < li > element.

//         It's worth noting that using v-for on a <template> tag allows us to loop over multiple elements without introducing an additional wrapping element in the final rendered output.

// That's a brief explanation of the provided code in Vue.js 3. Let me know if you have any more questions!








