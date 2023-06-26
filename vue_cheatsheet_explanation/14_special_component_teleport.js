// 👉 Special Component : Teleport, Component

{/* <template>
    <!-- Teleport, renders its slot content to another part of the 
DOM -->
    <Teleport to="body">
        <div v-if="open" class="modal">
            <p>Hello from the modal!</p>
            <button @click="open = false">Close</button>
    </div>
</Teleport>
</template >
< !--Component, a "meta component" for rendering dynamic 
components or elements-- >
<script>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
export default {
components: { Foo, Bar },
data() {
return {
view: 'Foo'
}
}
}
</script>
<template>
<component :is="view" />
</template> */}



// ✅ Explanation :

// Let's go through the code step by step and explain what each part does.


//     < template >
//     < !--Teleport, renders its slot content to another part of the DOM-- >
//     <Teleport to="body">
//         <div v-if="open" class="modal">
//             <p>Hello from the modal!</p>
//             <button @click="open = false">Close</button>
//     </div>
//     </Teleport >
// </template >


//     This part of the code defines a component that uses the < Teleport > component from Vue.js 3. The < Teleport > component allows you to render its slot content to another part of the DOM.In this case, it is rendering a modal dialog.The modal dialog is wrapped inside a < div > element with the class "modal".The visibility of the modal is controlled by the v -if= "open" directive, which means the modal will only be displayed if the open property is truthy.

// Inside the modal, there is a < p > element that displays the text "Hello from the modal!" and a < button > element that triggers the @click event to set the open property to false, thus closing the modal.

// Moving on to the next part of the code:


//     < script >
// import Foo from './Foo.vue'
// import Bar from './Bar.vue'
// export default {
//     components: { Foo, Bar },
//     data() {
//         return {
//             view: 'Foo'
//         }
//     }
// }
// </ >

//     This script section sets up the Vue.js component logic.It imports two components, Foo and Bar, from separate files(Foo.vue and Bar.vue).These components will be used later in the code.

// The export default statement exports the component object.Inside the component object, it defines a components property that registers the imported Foo and Bar components.This allows them to be used within the template section.

// The data function returns an object with a single property named view, which is initially set to the string value "Foo".This property will be used to dynamically determine which component to render based on its value.

//     Finally, let's look at the last part of the code:


//     < template >
//     <component: is="view" />
// </ >
//     This template section uses the < component > element to dynamically render a component based on the value of the view property.The :is attribute is bound to the view property, which means that when the value of view changes, the corresponding component(Foo or Bar) will be rendered.

// To summarize, this code defines a Vue.js 3 component that includes a modal dialog, imports two other components(Foo and Bar), and dynamically renders one of them based on the value of the view property.The < Teleport > component is used to render the modal in a specific part of the DOM(in this case, the < body > element).





