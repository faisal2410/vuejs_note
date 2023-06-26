//  Vue.js directives. Directives are special attributes that you can use in your Vue templates to apply behavior to the DOM elements. Vue.js provides several built-in directives that you can use out of the box, and you can also create custom directives.

// Here are some of the most commonly used Vue.js directives:

// v-if / v-else: These directives are used for conditional rendering. You can use them to conditionally render elements based on a certain condition.

{/* <div v-if="isVisible">This is visible</div>
<div v-else>This is hidden</div> */}

// v-for: The v-for directive is used to render a list of items based on an array. It iterates over the array and generates the necessary DOM elements.

{/* <ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul > */}
    
// v-bind: The v-bind directive is used for binding values to an element's attributes or props. It allows you to dynamically set values based on data in your Vue instance.

{/* <img v-bind:src="imageSrc">
<a v-bind:href="linkUrl">{{ linkText }}</a> */}

// v-on: The v-on directive is used to attach event listeners to elements. It allows you to listen to DOM events and trigger methods in response.

{/* <button v-on:click="handleClick">Click me</button> */ }

// v-model: The v-model directive is used for two-way data binding. It creates a relationship between form input elements and the data in your Vue instance.

{/* <input v-model="message" type="text"> */}

// These are just a few examples of Vue.js directives. There are more directives available in Vue.js, and you can even create your own custom directives if needed.

// Remember that directives are applied to DOM elements as attributes. The v- prefix is used to indicate that an attribute is a Vue directive.







