# Submitting data programmatically with `useSubmit` hook

==I wanna show you a **different way of triggering an "action" function**. The typical and default way is to use the `<Form>` component provided by React Router. The `<Form>` component will **automatically trigger the "action" function** of the currently active route, so the route for which the `<Form>` component was loaded==.

## Triggering an "action" function with `useSubmit` hook

==Just as you can navigate programmatically, you can also **submit data and trigger an "action" function programmatically** with the `useSubmit` hook imported from `react-router-dom`.==

==The `useSubmit()` function is the imperative version of `<Form>` that let's you, the programmer, submit a form instead of the user==.

To the `useSubmit` function you can pass two arguments:

- submit target
- submit options

### The submit target

==The first argument to submit accepts many different values==. You can submit any form or form input element, or you can submit `FormData`.

The first argument may be the data that you wanna submit, and that data will automatically be wrapped in a `<Form>` data object, which you then could extract with the `.formData()` method:

```react
// input element events
<input onChange={(event) => submit(event.currentTarget)} />;

// React refs
let ref = useRef();
<button ref={ref} />;
submit(ref.current);

// You can submit FormData
let formData = new FormData();
formData.append("cheese", "gouda");
submit(formData);
```

### The submit options

The second argument is a set of options that map directly to ==**form submission attributes**. This argument allows you to basically set the same values you could set on a `<Form>` component==, for example the `method` or the `action` if your "action" function would be defined on a different route path.

```react
submit(null, {
  action: "/logout",
  method: "post",
});

// same as
<Form action="/logout" method="post" />;
```

## Examples

The `<EventItem>` component has a button for deleting an event item. Since `<EventItem>` will be rendered as part of the `<EventDetailPage>` component, which is loaded for `<EventDetailPage>` route, we should add the "action" function to the `<EventDetailPage>` route.

![Submitting_data_programmatically_with_useSubmit](../../img/Submitting_data_programmatically_with_useSubmit.jpg)

> **Note**: You could use instead of a button that trigger an event the `<Form>` component provided by `react-router-dom`. But if you use the `<Form>` component you can NOT add events that do something like window alerts or other things.

### Submitting the form every time a value changes inside the form

```react
import { useSubmit, Form } from "react-router-dom";

function SearchField() {
  let submit = useSubmit();
  return (
    <Form
      onChange={(event) => {
        submit(event.currentTarget);
      }}
    >
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </Form>
  );
}
```

That's how you can _submit data_ and _trigger an "action" function_ **programmatically**.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [`useSubmit` - reactrouter.com](https://reactrouter.com/en/main/hooks/use-submit)
