# Adding a form

When you receive an object through props, you can use a little trick to pass all the configuration data that you have in that object for a component by using spread `...` operator:

```react
const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};
// props.input will be an object

export default Input;
```

This trick ensures that all the key-value pairs in the `props.input` object which we receive on `<input {...props.input} />` are added as props to `<input/>`. This is how that works when you use the spread operator on an element like `<input/>`.

It's simply a convenient way of making the `<input {...props.input} />` highly configurable from outside `Input` component, through the `props.input` object.

```react
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  return (
    <form>
      <Input
        label='Amount'
        input={{ //this object will be spread to the <input {...props.input} />
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
