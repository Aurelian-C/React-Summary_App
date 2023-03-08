# Outputting Conditional Content

Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like `if` statements, `&&`, and `? :` operators.

==**Conditional content** is about rendering **different output** under **different conditions**==. So I'm not talking about lists, but about rendering either A or B or C, whatever you need.

In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement to conditionally include JSX:

```react
function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
    
  let content;    
  if (isLoggedIn) {
     content = <AdminPanel/>;
  } else {
     content = <LoginForm/>;
  }
    
  return (
     <div>
        {content}
     </div>
  );
}
```

> **Note**: You can store JSX content in variables. You are not limited to using JSX only if you return it, you can also use it to create a value, which is stored in a variable.

If you prefer more compact code, you can use the [conditional `?` operator.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) Unlike `if`, it works inside JSX:

```react
<div>
  {isLoggedIn ? (<AdminPanel/>) : (<LoginForm/>)}
</div>
```

When you don’t need the `else` branch, you can also use a shorter [logical `&&` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation):

```react
<div>
  {isLoggedIn && <AdminPanel/>}
</div>
```

==All of these approaches also work for conditionally specifying attributes==.

==When it comes to output content conditionally, long statements like [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) or [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loops are not allowed between curly braces, in JSX expressions==. So, for achive our results, you need to use Ternary Operator or Short Circuiting with [`&&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) or [`||`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR):

```react
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
      {isEditing && (<ExpenseForm onCancel={stopEditingHandler}/>)}
    </div>
  );
};
```

> **Note**: Don’t put numbers on the left side of `&&`. To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is `0`, then the whole expression gets that value (`0`), and React will happily render `0` rather than nothing. 
>
> For example, a common mistake is to write code like `messageCount && <p>New messages</p>`. It’s easy to assume that it renders nothing when `messageCount` is `0`, but it really renders the `0` itself! 
>
> To fix it, make the left side a boolean: `messageCount > 0 && <p>New messages</p>`.

### Conditional (ternary) operator (`? :`)

JavaScript has a compact syntax for writing a conditional expression — the [conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) or “ternary operator”.

Instead of this:

```react
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

You can write this:

```react
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```

> Are these two examples fully equivalent? If you’re coming from an object-oriented programming background, you might assume that the two examples above are subtly different because one of them may create two different “instances” of `<li>`. But JSX elements aren’t “instances” because they don’t hold any internal state and aren’t real DOM nodes. They’re lightweight descriptions, like blueprints. So these two examples, in fact, *are* completely equivalent.

## Conditionally returning nothing with `null` 

In some situations, you won’t want to render anything at all. For example, say you don’t want to show nothing if a user in not logged in. A component must return something. In this case, you can return `null`:

```react
if (!isLoggedIn) {
  return null;
}
return <div className="logged">{name}</div>;
```

If `isLoggedIn` is true, the component will return nothing, `null`. Otherwise, it will return JSX to render. In practice, returning `null` from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Conditional rendering - beta.reactjs.org](https://beta.reactjs.org/learn#conditional-rendering)