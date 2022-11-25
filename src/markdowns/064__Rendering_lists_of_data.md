# Rendering list of data

If you do ==output an **array of JSX elements**==, like `[<Card/>, <Card/>]`, then React is capable of rendering on the UI that JSX elements. So if you had something like `[<Card/>, <Card/>]`, ==an array of JSX elements as part of your JSX code==, React would simply render that elements side by side:

```react
<Card className="expenses">
  <ExpensesFilter
    selected={filteredYear}
    onChangeFilter={filterChangeHandler}
  />
  {filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
</Card>;
```

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)