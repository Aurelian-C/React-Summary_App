# Navigating programmatically with `useNavigate` hook

Up until now we only use **imperative routing**. We allow users to navigate between our pages by providing links which can be clicked, and I will say right away that this is the default way of providing navigation to users, but it's not the only way.

In some situations, for example maybe because some form was submitted or because some timer expired, ==you might want to trigger a navigation action from inside your React code==, and you can do this by using another special feature provided by `react-router-dom`.

To trigger a navigation action from inside your React code, you can import the `useNavigate` hook and use it in your functional components to get access to a navigate function. ==This navigate function can be called to trigger a navigation action, so to **switch to a different route from inside your code**==, so **programmatically**.

```react
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
```

> **Note**: You should not create buttons and then navigate programmatically, simply use a link instead. I only use a button to show you how `useNavigate` function generally works.
>
> The button click triggered a function, and inside that function we then had the actual code, the programmatic imperative navigation code for moving to a different page.
>
> Again, you should use a link instead of a button but this is how you would navigate programmatically, if you would need to do so, for example, because some timer expired or anything like that.

## References

1. [React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
2. [`useNavigate` - reactrouter.com](https://reactrouter.com/en/main/hooks/use-navigate)