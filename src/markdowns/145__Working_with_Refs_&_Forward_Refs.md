# Working with Refs & Forward Refs

```react
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
```

```react
import Input from "../../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredValue = inputRef.current.value; // inputRef.current will point at the input elemenet (DOM node)
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)