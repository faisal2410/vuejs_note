// ✅ Directives v-pre, v-once, v-cloak :

{/* <template>
    <!-- v-pre skips compilation for this element and all its
    children, the most common use case of this is displaying raw 
mustache tags -->
    <span v-pre>{{ this will not be compiled }}</span>
    <!-- v-once renders the element and component once only, and 
skip future updates -->
    <span v-once>This will never change: {{ msg }}</span>
    <!--v-cloak uses to hide un-compiled template until it is
    ready Combined with CSS rules such as [v-cloak] {display: none 
}, it can be used to hide the raw templates until the component 
is ready -->
    [v-cloak] {
        display: none;
}
    <div v-cloak>
        {{ message }}
    </div>
</template> */}


// ✅ Explanation :

// Let's break down the code you provided, which is written in Vue.js 3.


//     < template >
//     < !--v - pre skips compilation for this element and all its children,
//     the most common use case of this is displaying raw mustache tags-- >
//     <span v-pre>{{ this will not be compiled }}</span>
//     <!--v - once renders the element and component once only, and skip future updates-- >
//     <span v-once>This will never change: {{ msg }}</span>
//     <!--v - cloak is used to hide uncompiled template until it is ready.
//     Combined with CSS rules such as [v- cloak] { display: none; },
//     it can be used to hide the raw templates until the component is ready-- >
//     <div v-cloak>
//         {{ message }}
//     </div>
// </template >
//     Let's go through each directive one by one:

// v - pre: The v - pre directive skips the compilation for the element and all its children.It is commonly used when you want to display raw mustache tags(e.g., {{ someVariable }}) without them being interpreted as Vue.js template syntax.

// In your code, <span v-pre>{{ this will not be compiled }}</span> tells Vue.js not to interpret { { this will not be compiled } } as a template expression and treat it as plain text instead.

//     v - once: The v - once directive renders the element or component once only and skips any future updates.It is useful when you have content that should remain static and not be affected by any changes in the data.

// In your code, <span v-once>This will never change: {{ msg }}</span> ensures that the text "This will never change:" along with the value of the msg variable is rendered once and never updated, even if msg changes later.

//     v - cloak: The v - cloak directive is used to hide uncompiled template content until it is ready.It is often combined with CSS rules, such as [v- cloak] { display: none; }, to hide the raw templates until the component is fully compiled.

// In your code, [v - cloak] { display: none; } is a CSS rule that hides any element with the v - cloak attribute.Additionally, <div v-cloak>{{ message }}</div> ensures that the message is not displayed until the template is fully compiled and ready to be rendered.This helps prevent the user from seeing unfinished or partially rendered content.

// These directives are powerful tools in Vue.js for controlling the rendering behavior of your templates.Each one serves a specific purpose in terms of optimizing performance, displaying raw template syntax, or ensuring static content remains unchanged.





