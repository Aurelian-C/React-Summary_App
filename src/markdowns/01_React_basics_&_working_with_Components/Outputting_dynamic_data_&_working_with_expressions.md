# Outputting dynamic data & working with expressions in JSX markup

==JSX lets you write HTML-like markup inside a JavaScript file==, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside the JSX markup. In this situation, you can use  <code>{}</code> in your JSX markup to open a window to JavaScript.
        ==You write expressions in JSX markup with the help of **curly brackets `{}`**==. Curly braces let you "escape back" into JavaScript so that you can embed some variable from your code and display it to the user. Any JavaScript expression will work between curly braces, including function calls.
        You can only use curly braces in two ways inside JSX:

- ==as text directly inside a JSX tag==: `<<span>h1>{name}'s To Do List<</span>/h1>` works, but `<{tag}>Gregorio Y. Zara's To Do List<span><</span>/{tag}>` will not.
- ==as attributes immediately following the `=` sign==: `src={avatar}` will read the `avatar` variable, but `src="{avatar}"` will pass the string "{avatar}".

```react
function App() {
  return (
  	<h1>
      {user.name}
  	</h1>
  );
}

// More complex
function App(props) {
  return (
    <div>
      {props.items
        .filter((item) => String(item.date.getFullYear()) === filteredYear)
        .map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </div>
  );
}
```

==You can also “escape into JavaScript” from JSX attributes==, but you have to use curly braces _instead of_ quotes. For example, `className="avatar"` passes the `"avatar"` string as the CSS class, but `src={user.imageUrl}` reads the JavaScript `user.imageUrl` variable value, and then passes that value as the `src` attribute:

```react
function Image = {
  return (
  	<img
       className="avatar"
       src={user.imageUrl}
    />
  );
}
```

==You can put more complex expressions inside the JSX curly braces too==, for example, [string concatenation](https://javascript.info/operators#string-concatenation-with-binary):

```react
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

In the above example, `style={{}}` is not a special syntax, but a regular `{}` object inside the `style={ }` JSX curly braces. You can use the `style` attribute when your styles depend on JavaScript variables.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)