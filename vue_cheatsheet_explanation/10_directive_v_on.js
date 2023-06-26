// 👉 Directive v-on:

{/* <template>
<!-- v-on attaches an event listener to the element -->
<!-- method handler -->
<button v-on:click="doThis"></button>
<!-- dynamic event -->
<button v-on:[event]="doThis"></button>
<!-- inline statement -->
<button v-on:click="doThat('hello', $event)"></button>
<!-- shorthand -->
<button @click="doThis"></button>
<!-- shorthand dynamic event -->
<button @[event]="doThis"></button>
<!-- stop propagation -->
<button @click.stop="doThis"></button>
<!-- prevent default -->
<button @click.prevent="doThis"></button>
<!-- prevent default without expression -->
<form @submit.prevent></form>
<!-- key modifier using keyAlias -->
<input @keyup.enter="onEnter" />
<!-- the click event will be triggered at most once -->
<button v-on:click.once="doThis"></button>
</template> */}


// ✅ Explanation :

// The code you provided is written in Vue.js 3 and it demonstrates various event handling techniques using the v - on directive(also known as @shorthand) in the template section of a Vue component.

//     Let's go through each line and explain what it does:

//         < button v - on: click = "doThis" ></ >
//             This line attaches a click event listener to the button element and associates it with the doThis method.When the button is clicked, the doThis method will be executed.

// < button v - on: [event] = "doThis" ></ >
//     This line demonstrates dynamic event handling.The[event] syntax allows you to dynamically bind an event based on a data property or expression.The event to bind is determined by the value of the event property, and the associated method is doThis.

// < button v - on: click = "doThat('hello', $event)" ></ >
//     This line shows an example of an inline statement.When the button is clicked, the doThat method will be called with two arguments: the string 'hello' and the special $event object, which represents the event itself.

// < button @click="doThis" ></ >
//     This line is a shorthand syntax for attaching a click event listener.It is equivalent to v - on: click.

// < button @[event]="doThis" ></ >
//     This line is a shorthand for dynamic event handling.It is equivalent to v - on: [event] = "doThis".The event to bind is determined by the value of the event property.

// < button @click.stop="doThis" ></ >
//     This line demonstrates event modifier usage.The.stop modifier prevents the event from propagating further, meaning it stops the event from triggering any additional event listeners on ancestor elements.The doThis method will be executed when the button is clicked, but the event won't propagate beyond that.

//         < button @click.prevent="doThis" ></ >
//             This line shows another event modifier, .prevent.It prevents the default behavior associated with the click event.In this case, the doThis method will be executed, but the default action of the button(e.g., submitting a form) will be prevented.

// < form @submit.prevent></ >
//     This line demonstrates the use of.prevent modifier without an expression.It prevents the default form submission behavior when the form is submitted.

// < input @keyup.enter="onEnter" />
//     This line showcases a key modifier.The.enter modifier listens for the Enter key press event(keyup.enter) and triggers the onEnter method when the Enter key is pressed while the input element is focused.

// < button v - on: click.once = "doThis" ></ >
//     This line demonstrates the.once modifier.It ensures that the associated method(doThis) is only executed once for this specific event listener.Subsequent clicks on the button won't trigger the method again.

// I hope this explanation helps you understand the event handling techniques in Vue.js 3 using the v - on directive or its shorthand notation.





