# Outputting Conditional Content

==**Conditional content** is about rendering **different output** under **different conditions**==. So I'm not talking about lists, but about rendering either A or B or C, whatever you need.

In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement to conditionally include JSX:

```react
function Component() {
  let content;
  if (isLoggedIn) {
     content = <AdminPanel />;
  } else {
     content = <LoginForm />;
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
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

When you don’t need the `else` branch, you can also use a shorter [logical `&&` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation):

```react
<div>
  {isLoggedIn && <AdminPanel />}
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

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Conditional rendering - beta.reactjs.org](https://beta.reactjs.org/learn#conditional-rendering)