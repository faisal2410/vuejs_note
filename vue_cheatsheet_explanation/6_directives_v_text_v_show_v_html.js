//👉 Directives : v-text, v-show, v-html

{/* <template>
    <!-- v-text updates the element's text content -->
    <span v-text="msg"></span>
    <!-- same as -->
    <span>{{ msg }}</span>
    <!-- v-text updates the element's innerHTML -->
    <div v-html="html"></div>
    <!-- v-show toggles the element's visibility, does not delete 
element from DOM -->
    <div v-show="false">Hidden text</div>
</template> */}


// ✅ Explanation :




//     < template >
//   < !--v - text updates the element's text content -->
//     < span v - text="msg" ></ >
//   < !--same as -->
//   <span>{{msg}}</span>
//   <!--v - html updates the element's innerHTML -->
//     < div v - html="html" ></ >
//   < !--v - show toggles the element's visibility, does not delete
//   element from DOM-- >
//     <div v-show="false">Hidden text</div>
// </template >


//     This code snippet is written in Vue.js 3, which is a JavaScript framework used for building user interfaces.In Vue.js, you define the structure and behavior of your application using templates.Let's go through each part of the code and understand its purpose:

//         < span v - text="msg" ></ > and < span > {{ msg }}</ >:

// These two lines are equivalent and serve the same purpose.They bind the text content of the < span > element to a data property called msg.Whenever the value of msg changes, the text content of the < span > element will be updated to reflect the new value.

// < div v - html="html" ></ >:

// This line binds the innerHTML of the < div > element to a data property called html.It allows you to dynamically render HTML content inside the < div >.If the value of html contains HTML tags, they will be interpreted and rendered as HTML elements.

// < div v - show="false" > Hidden text</ >:

// The v - show directive toggles the visibility of the < div > element based on the expression provided.In this case, the expression is false, so the < div > will be hidden.However, unlike v -if, v - show does not remove the element from the DOM.It simply toggles its CSS display property.

// These directives(v - text, v - html, and v - show) are part of Vue.js's template syntax and are used to bind data and control the rendering and behavior of elements in the template.








