// 👉Props :

{/* <template>
    <BlogPost title="My journey with Vue" />
    <!-- Dynamically assign the value of a variable -->
    <BlogPost: title="post.title" />
    <!– Static String, static Number, static Boolean -->
    <BlogPost title="User" :num="42" :isFull="true" />
</template> */}


// ✅ Explanation :


//  Let's go through the code step by step and explain what each line does.


//     < template >
//     In Vue.js, the < template > tag is used to define the markup structure of your component.It acts as a container for the HTML code that makes up your component's template.


//     < BlogPost title = "My journey with Vue" />
//         Here, we have a < BlogPost > component being used with a static string prop called title.The title prop is set to the value "My journey with Vue".This means that the < BlogPost > component will receive the value of title as a prop.

//     < BlogPost : title = "post.title" />
//         In this line, the title prop of the < BlogPost > component is being dynamically assigned.The :title syntax is known as a "v-bind" directive in Vue.js and allows us to bind the value of a data property or expression to a prop.Here, post.title is being used as the value for the title prop, meaning that the value of post.title will be passed to the < BlogPost > component.


//     < BlogPost title = "User" : num = "42" : isFull = "true" />
//         In this line, we have a combination of static and dynamic props being passed to the < BlogPost > component.The title prop is set to the static string "User", meaning it will always have that value.On the other hand, num is a dynamic prop, and it is being assigned the value 42. The isFull prop is also dynamic and has a value of true.This means that both num and isFull will receive these values from the parent component.

// To summarize, the code snippet you provided demonstrates how to use props in Vue.js 3. The < BlogPost > component is being used multiple times with different prop values, including static and dynamic ones.The static values are directly assigned, while the dynamic values are bound to data properties or expressions using the "v-bind" directive.







