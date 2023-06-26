//👉 Slots in Vue.js 3.
//  Slots are a powerful feature in Vue.js that allow you to create reusable components with flexible content.They enable you to define placeholders in your component's template and allow the parent component to provide the content for those placeholders. This makes it easier to create dynamic and customizable components.

//✅ Let's start with an example. Suppose you have a Card component that you want to use to display different types of content. Here's how you can define a Card component with a slot:


{/* <template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style scoped>
.card {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
}
</style> */}

// In this example, we have a simple Card component that wraps its content in a <div> element with a class of "card". The <slot></slot> is where the content provided by the parent component will be rendered.

//✅ Now, let's use the Card component and provide some content:


{/* <template>
  <div>
    <Card>
      <h2>Card Title</h2>
      <p>This is the card content.</p>
    </Card>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'App',
  components: {
    Card,
  },
}
</script> */}

// In this example, we import the Card component and use it within the parent component (App). Inside the Card component, we provide the content between the opening and closing <Card> tags. The content, including the <h2> and <p> elements, will be rendered inside the <slot></slot> in the Card component's template.

//✅ When the parent component is rendered, the Card component will take the provided content and render it within its template, resulting in something like this:


// <div class="card">
//   <h2>Card Title</h2>
//   <p>This is the card content.</p>
// </div>

// This way, you can reuse the Card component with different content throughout your application.

// ✅Slots can also have named slots, allowing you to have multiple slots in a component with different names. Here's an example:


{/* <template>
  <div class="card">
    <slot name="header"></slot>
    <div class="card-body">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style scoped>
.card {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
}

.card-body {
  margin-top: 10px;
}
</style> */}

// In this modified Card component, we have three slots: header, the default slot, and footer. The content provided between <template v-slot:header> and </template> will be rendered in the header slot, the content between <template v-slot:footer> and </template> will be rendered in the footer slot, and any content provided between the opening and closing <Card> tags without a specific slot name will be rendered in the default slot.

// ✅To use the named slots, you can modify the parent component like this:


{/* <template>
  <div>
    <Card>
      <template v-slot:header>
        <h2>Card Header</h2>
      </template>
      <p>This is the card content.</p>
      <template v-slot:footer>
        <button>Submit</button>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'App',
  components: {
    Card,
  },
}
</script> */}

// In this updated example, we utilize the named slots header and footer in the Card component. The content specified within the <template v-slot:header> and </template> tags is placed within the header slot of the Card component, and the content within the <template v-slot:footer> and </template> tags is placed within the footer slot.

// ✅When the parent component is rendered, the Card component will render the content as follows:


// <div class="card">
//   <h2>Card Header</h2>
//   <div class="card-body">
//     <p>This is the card content.</p>
//   </div>
//   <button>Submit</button>
// </div>
// By utilizing named slots, you can provide specific content to different sections of the Card component and customize its appearance and functionality based on your requirements.








