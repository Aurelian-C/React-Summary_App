# Updating arrays in state

==Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array==.

## Updating arrays without mutation

==In JavaScript, arrays are just another kind of object. [Like with objects](https://beta.reactjs.org/learn/updating-objects-in-state), **you should treat arrays in React state as read-only**==. This means that you shouldn’t reassign items inside an array like `arr[0] = 'bird'`, and you also shouldn’t use methods that mutate the array, such as `push()` and `pop()`.

==Instead, every time you want to update an array, you’ll want to pass a *new* array to your state setting function==. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like `filter()` and `map()`. Then you can set your state to the resulting new array.

Here is a reference table of common array operations. When dealing with arrays inside React state, you will need to avoid the methods in the left column, and instead prefer the methods in the right column:

| Operation | AVOID (mutates the array)           | PREFER (returns a new array)                                 |
| --------- | ----------------------------------- | ------------------------------------------------------------ |
| adding    | `push`, `unshift`                   | `concat`, `[...arr]` spread syntax ([example](https://beta.reactjs.org/learn/updating-arrays-in-state#adding-to-an-array)) |
| removing  | `pop`, `shift`, `splice`            | `filter`, `slice` ([example](https://beta.reactjs.org/learn/updating-arrays-in-state#removing-from-an-array)) |
| replacing | `splice`, `arr[i] = ...` assignment | `map` ([example](https://beta.reactjs.org/learn/updating-arrays-in-state#replacing-items-in-an-array)) |
| sorting   | `reverse`, `sort`                   | copy the array first ([example](https://beta.reactjs.org/learn/updating-arrays-in-state#making-other-changes-to-an-array)) |

## Summary

- You can put arrays into state, but you can’t change them.
- Instead of mutating an array, create a *new* version of it, and update the state to it.
- You can use the `[...arr, newItem]` array spread syntax to create arrays with new items.
- You can use `filter()` and `map()` to create new arrays with filtered or transformed items.

## References

1. [Updating Arrays in State - beta.reactjs.org](https://beta.reactjs.org/learn/updating-arrays-in-state)