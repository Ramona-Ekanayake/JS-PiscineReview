## 🏋️ JavaScript Array Practice Exercises

Try out these exercises to master JavaScript arrays! 🚀

### 🔹 1. Basic Array Manipulation
#### **Exercise: Fruit Basket 🍎**
1. Create an array called `fruits` with `"Apple"`, `"Banana"`, and `"Cherry"`.
2. Change `"Banana"` to `"Blueberry"`.
3. Add `"Mango"` to the end of the array.
4. Remove the first element.
5. Print the modified `fruits` array.

---

### 🔹 2. Finding Elements
#### **Exercise: Search for Fruits 🔍**
1. Create an array with `"Apple"`, `"Grapes"`, `"Mango"`, `"Peach"`, `"Strawberry"`.
2. Find and print the index of `"Mango"`.
3. Check if `"Banana"` exists in the array and print the result (`true` or `false`).

---

### 🔹 3. Looping Through an Array
#### **Exercise: List Your Favorite Movies 🎬**
1. Create an array called `movies` with 5 movie names.
2. Use a `for...of` loop to print each movie.
3. Use `.forEach()` to do the same.

---

### 🔹 4. Slicing & Splicing
#### **Exercise: The Guest List 🎉**
1. Create an array `guests` with `"Alice"`, `"Bob"`, `"Charlie"`, `"David"`, `"Eve"`.
2. Use `.slice()` to create a new array with only `"Charlie"`, `"David"`.
3. Use `.splice()` to replace `"Bob"` with `"Brian"`.
4. Print both the new and modified arrays.

---

### 🔹 5. Combining Arrays
#### **Exercise: Grocery Shopping 🛒**
1. Create two arrays:
   ```js
   let fruits = ["Apple", "Banana", "Cherry"];
   let vegetables = ["Carrot", "Spinach", "Broccoli"];
   ```
2. Merge them into one array called `groceries` using `.concat()`.
3. Merge them again using the spread operator (`...`).

---

### 🔹 6. Mapping & Filtering
#### **Exercise: Transforming Names 📜**
1. Create an array of names:
   ```js
   let names = ["Alice", "Bob", "Charlie", "David"];
   ```
2. Use `.map()` to convert all names to uppercase.
3. Use `.filter()` to keep only names longer than 4 characters.

---

### 🔹 7. Advanced Challenge
#### **Exercise: Student Grades 📊**
1. Create an array:
   ```js
   let grades = [85, 92, 78, 90, 88, 76, 95, 89];
   ```
2. Use `.filter()` to get only the grades above 80.
3. Use `.map()` to add 5 bonus points to each grade.
4. Print the new grades array.

---

### 🚀 Bonus Challenge: Custom Sorting
#### **Exercise: Sorting Scores 📈**
1. Create an array of numbers:
   ```js
   let scores = [45, 78, 23, 89, 56, 12];
   ```
2. Use `.sort()` to arrange them in ascending order.
3. Use `.reverse()` to get them in descending order.

---
## 🤣 Can You Decode It?  

```js
let joke = ["Why", "was", "the", "JavaScript", "array", "so", "happy?"];
joke.shift();
joke.splice(3, 1);
joke.push("undefined!");
console.log(joke.join(" "));


Happy coding! 😊🎉
