# Outputting Conditional Content

==**Conditional content** is about rendering **different output** under **different conditions**==. So I'm not talking about lists, but about rendering either A or B or C, whatever you need.

==You can **store JSX content in variables**==. You are not limited to using JSX only if you return it, you can also use it to create a value, which is stored in a variable:

```react
const content = <p>Text to render</p>;
// or
const expensesContent = filteredExpenses.map((item) => (
    <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
     />
));
```

When it comes to output content conditionally, long statements like [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) or [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loops are not allowed between curly braces, in JSX expressions. So, for achive our results, you need to use Ternary Operator or Short Circuiting with [`&&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) or [`||`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR):

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