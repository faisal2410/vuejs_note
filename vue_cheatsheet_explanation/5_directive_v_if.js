// 👉 Directive v-if

{/* <template>
    <!-- v-if conditionally renders an element -->
    <div v-if="false">Does not render this element</div>
    <!-- v-else denotes the "else block" for v-if or 
a v-if / v-else-if chain -->
    <div v-if="Math.random() > 0.5">
        Now you see me
    </div>
    <div v-else>
        Now you don't
    </div>
    <!-- v-else-if denotes the "else if block" for v-if. Can be
chained -->
    <div v-if="type === 'A'">
        A
    </div>
    <div v-else-if="type === 'B'">
        B
    </div>
    <div v-else-if="type === 'C'">
        C
    </div>
    <div v-else>
        Not A/B/C
    </div>
</template> */}


// ✅ Explanation :



//  Let's go through the code step by step.

// The provided code is written in Vue.js 3, a popular JavaScript framework for building user interfaces.It demonstrates the usage of conditional rendering using the directives v -if, v -else, and v -else -if.

//     < template >
//   < !--v -if conditionally renders an element-- >
//   <div v-if="false">Does not render this element</div>

//   <!--v -else denotes the "else block" for v -if or a v -if / v-else-if chain -->
//     < div v -if= "Math.random() > 0.5" >
//         Now you see me
//   </ >
//   <div v-else>
//     Now you don't
//   </div>

//   <!--v -else -if denotes the "else if block" for v -if.Can be chained-- >
//   <div v-if="type === 'A'">
//     A
//   </div>
//   <div v-else-if="type === 'B'">
//     B
//   </div>
//   <div v-else-if="type === 'C'">
//     C
//   </div>
//   <div v-else>
//     Not A/B/C
//   </div>
// </template >
//     Let's break down the code and understand what each part does:

//         < div v -if= "false" > Does not render this element</ >

//             This element will not be rendered because the condition false is always evaluated to false.Therefore, the content "Does not render this element" will not be displayed.
// < div v -if= "Math.random() > 0.5" > Now you see me</ >

//     This element has a dynamic condition based on Math.random() > 0.5.It means that there is a 50 % chance of rendering this element.If the condition evaluates to true, the text "Now you see me" will be displayed.Otherwise, if the condition evaluates to false, the element will not be rendered.
// < div v -else> Now you don't</>

// This element is the "else block" for the previous v -if statement.If the condition in the v -if statement is false, this element will be rendered, displaying the text "Now you don't".
// < div v -if= "type === 'A'" > A</ >

//     This element is conditionally rendered based on the value of the variable type.It will be displayed if type is equal to 'A'.
// < div v -else -if= "type === 'B'" > B</ >

//     This element is an "else if block" for the previous v -if statement.If the condition in the v -if statement is false and this condition type === 'B' is true, this element will be rendered, displaying the text "B".
// < div v -else -if= "type === 'C'" > C</ >

//     This element is another "else if block" for the previous v -if statement.If the condition in the v -if and v -else -if= "type === 'B'" statements is false, and this condition type === 'C' is true, this element will be rendered, displaying the text "C".
// < div v -else> Not A / B / C</ >

//     This element is the "else block" for the previous v -if and v -else -if statements.If none of the conditions in the preceding v -if and v -else -if






