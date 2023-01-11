# Choosing the state structure

## Find the minimal but complete representation of UI state

To make the UI interactive, you need to let users change your underlying data model. You will use *state* for this.

==Think of state as the minimal set of changing data that your app needs to remember==. The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself). ==Figure out the absolute minimal representation of the state your application needs and compute everything else on-demand==. For example, if you’re building a shopping list, you can store the items as an array in state. If you want to also display the number of items in the list, don’t store the number of items as another state value — instead, read the length of your array.

Which pieces of data are state? Identify the ones that are not:

- Does data **remain unchanged** over time? If so, it isn’t state.
- Is data **passed in from a parent** via props? If so, it isn’t state.
- **Can you compute data** based on existing state or props in your component? If so, it *definitely* isn’t state!

What’s left is probably state.