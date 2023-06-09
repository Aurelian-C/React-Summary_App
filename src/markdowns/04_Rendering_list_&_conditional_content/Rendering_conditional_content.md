# Rendering (outputting) conditional content

==Your components will often need to **display different things** depending on **different conditions**. In React, you can conditionally render JSX using JavaScript syntax like `if` statements, `&&`, and `? :` operators==.

==**Conditional content** is about rendering **different output** under **different conditions**==.

In this lecture you will learn:

- How to return different JSX depending on a condition
- How to conditionally include or exclude a piece of JSX
- Common conditional syntax shortcuts you’ll encounter in React codebases

## Conditionally _returning_ JSX

==In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code==.  For example, you can use an [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement to conditionally _return_ JSX markup.

```react
if (isPacked) {
  return <li className="item">{name} ✔</li>;
} 
return <li className="item">{name}</li>; 
```

## Conditionally _returning nothing_ with `null` 

In some situations, you won’t want to render anything at all. A component must return something. In this case, you can return `null`:

```react
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```

If `isLoggedIn` is true, the component will return nothing, `null`. Otherwise, it will return JSX to render.

In practice, returning `null` from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX.

## Conditionally _including_ JSX

==When it comes to output content conditionally, long statements like [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) or [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loops are not allowed between curly braces, in JSX markup==. So, for achive your results, you need to use Ternary Operator `? :` or Logical AND operator `&&`.

### Conditional (ternary) operator `? :`

If you prefer more compact code, you can use the [conditional `?` operator.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) Unlike `if`, it works inside JSX:

```react
<div>
  {isLoggedIn ? (<AdminPanel/>) : (<LoginForm/>)}
</div>
```

> **Note**: In React, markup is a part of your code, so you can use tools like variables and functions to tidy up complex expressions.

### Logical AND operator `&&`

When you don’t need the `else` branch or conditional (ternary) operator, you can also use a shorter [logical `&&` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation):

```react
<div>
  {isLoggedIn && <AdminPanel/>}
</div>

// You can read this as: "if isLoggedIn, then (&&) render the <AdminPanel/>, otherwise, render nothing".
```

==Inside React components, it often comes up when you want to render some JSX when the condition is true, **or render nothing otherwise**==.

> **Note**: A [JavaScript && expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) returns the value of its right side (in our case, the `<AdminPanel/>`) if the left side (our condition) is `true`. But if the condition is `false`, the whole expression becomes `false`. React considers `false` as a “hole” in the JSX tree, just like `null` or `undefined`, and doesn’t render anything in its place.

>**Pitfall**: ==**Don’t put numbers on the left side of `&&`.**==
>
>To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is `0`, then the whole expression gets that value (`0`), and React will happily render `0` rather than nothing.
>
>For example, a common mistake is to write code like `messageCount && <p>New messages</p>`. It’s easy to assume that it renders nothing when `messageCount` is `0`, but it really renders the `0` itself!
>
>==To fix it, make the left side a boolean: `messageCount > 0 && <p>New messages</p>`.==

## Conditionally assigning JSX to a variable

You can use an `if..else` statement to conditionally assign JSX to a variable and then _include_ it in your returned JSX tree:

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

> **Note**: You can store ==JSX markup in variables==. You are not limited to using JSX only if you return it, you can also use it to create a value, which is stored in a variable.

==All of these approaches also work for conditionally specifying attributes==.

## Summary

- In React, you control branching logic with JavaScript.
- You can return a JSX expression conditionally with an `if` statement.
- You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
- In JSX, `{cond ? <A /> : <B />}` means *“if `cond`, render `<A />`, otherwise `<B />`”*.
- In JSX, `{cond && <A />}` means *“if `cond`, render `<A />`, otherwise nothing”*.
- The shortcuts are common, but you don’t have to use them if you prefer plain `if`.



## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
1. [Conditional rendering - beta.reactjs.org](https://beta.reactjs.org/learn#conditional-rendering)