// 👉 Computed : option api

{/* <script>
//for complex logic that includes reactive data (in this
    example "a" and "b"). An object where the key is the name of
    the computed property, and the value is either a computed
    getter, or an object with get and set methods (for writable
    computed properties) 
    computed: {
        //readonly
        summ() {
return this.a + this.b
},
    //writable
    square: {
        get() {
return this.a * this.a
},
    set(newValue) {
        this.a = Math.sqrt(newValue)
    }
}
},
</script> */}


// ✅ Explanation :

// Let's go through the provided code step by step and explain each part:


// computed: {
//     summ() {
//         return this.a + this.b;
//     },
//     square: {
//         get() {
//             return this.a * this.a;
//         },
//         set(newValue) {
//             this.a = Math.sqrt(newValue);
//         }
//     }
// },

// In Vue.js, the computed property allows us to define properties that are calculated based on other reactive data properties.Computed properties are functions that return a value based on the state of other data properties.They are updated automatically whenever any of the dependent properties change.

// In this code snippet, we define two computed properties: summ and square.

// The summ computed property:

// It calculates the sum of two reactive data properties: this.a and this.b.
// Whenever either this.a or this.b changes, the summ property will be automatically updated.
// The square computed property:

// It is defined as an object with get and set methods.

// The get method calculates the square of the reactive data property this.a by multiplying it by itself.

// Whenever this.a changes, the square property will be automatically updated.

// The set method allows us to update the value of this.a based on a new value passed to the computed property.

// When you assign a new value to this.square, like this.square = 25, the set method will be triggered.

// The set method receives the new value(newValue) as a parameter and sets this.a to the square root of newValue using Math.sqrt().

// In summary, the code defines two computed properties: summ, which calculates the sum of this.a and this.b, and square, which calculates the square of this.a and allows updating this.a by setting its value to the square root of a new value assigned to this.square.





