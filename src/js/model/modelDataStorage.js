const section1 = {
  title:
    '<p class="card__title--1">Section 1</p> <p class="card__title--2">React basics & working with components</p>',
  sections: [
    {
      sectionTitle: 'What are components and why is React all about them?',
      sectionSource:
        '/src/markdowns/01_React_basics_&_working_with_Components/What_are_components_and_why_is_React_all_about_them.html',
      highlights: {
        highlight1: ['components'],
      },
      tooltips: [
        'A component is <i>a piece of the UI (user interface) that has its own logic and appearance</i>. A component can be as small as a button, or as large as an entire page.',
        'Conceptually, components are like JavaScript functions. <i>A component in React is just <b>a JavaScript function that returns JSX markup</b>. Components are in the end just a combination of HTML, CSS and JavaScript</i>.',
        "Components are <i><b>reusable</b> building blocks</i> in your UI. You don't have to reuse a component to make it a component, it's just one of its traits that a component is reusable.",
        'Components are a handy way to organize UI code and markup, even if some of them are only used once.',
        'React is all about splitting your app into small building blocks (components), where every building block (component) has a clear task, and therefore your code stays maintainable and manageable, and React, the library, will do the heavy lifting of rendering something onto the screen and of combining all your code.',
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.',
        `React components are regular JavaScript functions except:
        <br>- their names always begin with a capital letter;
        <br>- they return JSX markup.`,
      ],
    },
    {
      sectionTitle: 'How to create a new React project',
      sectionSource: '',
    },
    {
      sectionTitle: 'React code is written in a "declarative way"!',
      sectionSource:
        '/src/markdowns/01_React_basics_&_working_with_Components/React_code_is_written_in_a_declarative_way.html',
      highlights: {
        highlight1: ['"declarative way"'],
      },
      tooltips: [
        'With just Vanilla JavaScript, we have to write every single line of code that should be taken to build an app (<b>Imperative Way</b>). <i>React uses something which is called a <b>Declarative Way</b> for building components and to manipulate the UI. Instead of manipulating individual pieces of the UI directly, <b>you describe the different states that your component can be in</b>, and switch between them in response to user actions (user events) or computer actions (http events)</i>.',
        "Declarative Way basically means that with React you will not tell React that a certain HTML element should be created and inserted in a specific place on the UI, as you would be doing it with Vanilla JavaScript. Instead, <i>with React you will always <b>define different states that your component can be in</b>, and then it's React job to figure out which elements on the UI might need to be added or removed or updated</i>, and you don't write these concrete DOM updating instructions on your own, as you would be doing it with just Vanilla JavaScript.",
        `With just Vanilla JavaScript, you have to write the exact instructions (every line of code) to manipulate the UI. It's called imperative because you have to "command" each element, from the spinner to the button, telling the computer how to update the UI. <i>In React, you don't directly manipulate the UI</i> — meaning you don't enable, disable, show, or hide components directly. Instead, you declare what you want to show, and React figures out how to update the UI.`,
        'In React, you need to think about UI declaratively: <i>UI changes as state changes</i>.',
        '<i>Declarative programming means <u>describing the UI for each visual state</u>, rather than micromanaging the UI (imperative)</i>.',
        `When developing a component:
        <br>1. Identify all its <i>visual states</i>.
        <br>2. Determine the human/computer triggers for <i>state changes</i>.
        <br>3. <i>Model the state</i> with <code>useState</code>.
        <br>4. <i>Remove non-essential state</i> to avoid bugs and paradoxes.
        <br>5. Connect the <i>event handlers to set state</i>.`,
      ],
    },
    {
      sectionTitle: 'Introducing JSX markup',
      sectionSource:
        '/src/markdowns/01_React_basics_&_working_with_Components/Introducing_JSX_markup.html',
      highlights: {
        highlight2: ['JSX'],
      },
      tooltips: [
        'JSX = JavaScript XML.',
        'JSX is a <i>syntax extension</i> for JavaScript that lets you write <i>HTML-like markup inside a JavaScript file</i>, keeping rendering logic and content in the same place.',
        'JSX just provides <i>syntactic sugar</i> for the <code>React.createElement()</code> function.',
        `<i>JSX is stricter than HTML</i>: 
        <br>1. <i>Close all the tags</i>: JSX requires tags to be explicitly closed; self-closing tags like <<span>img></span>, <<span>input></span> must become <<span>img /></span>, <<span>input /></span>. 
        <br>2. <i>Return a single root element</i>: Your component also can't return multiple JSX tags. You have to wrap them into a shared parent, like a <<span>div></span>...<<span>/div></span> or an empty <>...<</span>/></span> wrapper.
        <br>3. <i>camelCase all most of the things</i>: JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names; for example, their names can't contain dashes or be reserved words like <code>class</code>. This is why, in React, many HTML and SVG attributes are written in camelCase.
        `,
        '<i>You can store JSX markup in variables</i>: you are not limited to using JSX only if you return it from your custom component, you can also use it to create a value, which is stored in a variable.',
      ],
    },
    {
      sectionTitle: 'Building a first custom component',
      sectionSource:
        '/src/markdowns/01_React_basics_&_working_with_Components/Building_a_first_custom_component.html',
      highlights: {
        highlight2: ['custom component'],
      },
      tooltips: [
        '<i>A React custom component is basically just a <b>custom HTML element</b></i>. The key difference between custom components and built-in HTML elements (tags) is that <i>custom components always start with a capital letter, so that React is able to detect that is a custom component</i>. React custom components names must always start with a capital letter, while HTML tags must be lowercase.',
        `There are 3 steps to build a custom component:
        <br>1. <i>Create & export</i> the component;
        <br>2. <i>Import</i> the component;
        <br>3. <i>Use</i> the component.`,
        'You can have <i>multiple components in the same file</i>, but is considered a good practice to put new components into new files, so that you have <i>one file per component</i>.',
        'Components (parent) can render other components (child), but you must never nest their definitions (<i>never define a component inside another component!</i>).',
      ],
    },
    {
      sectionTitle:
        'Outputting dynamic data & working with expressions in JSX markup',
      sectionSource:
        '/src/markdowns/01_React_basics_&_working_with_Components/Outputting_dynamic_data_&_working_with_expressions.html',
      highlights: {
        highlight1: ['Outputting dynamic data'],
        highlight2: ['expressions in JSX'],
      },
      tooltips: [
        'JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside the JSX markup. In this situation, you can use  <code>{}</code> in your JSX markup to open a window to JavaScript.',
        '<i>You write expressions in JSX markup with the help of curly brackets <code>{}</code></i>. Curly braces let you "escape back" into JavaScript so that you can embed some variable from your code and display it to the user. <i>Any JavaScript expression will work between curly braces, including function calls</i>.',
        `You can only use curly braces in two ways inside JSX:
        <br>- <i>as <u>text</u> directly inside a JSX tag<i>: <code><<span>h1>{name}'s To Do List<</span>/h1></code> works, but <code><{tag}>Gregorio Y. Zara's To Do List<span><</span>/{tag}></code> will not.
        <br>- <i>as <u>attributes</u> immediately following the <code>=</code> sign<i>: <code>src={avatar}</code> will read the avatar variable, but <code>src="{avatar}"</code> will pass the string "{avatar}".`,
      ],
    },
    {
      sectionTitle: 'Passing data via <code>props</code>',
      sectionSource:
        '/src/markdowns/01_React_basics_&_working_with_Components/Passing_data_via_props.html',
      highlights: {
        highlight2: ['<code>props</code>'],
      },
      tooltips: [
        '<i>React components use props to communicate with each other</i>. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, functions, and even JSX markup! <i>To pass props, add them to the JSX markup, just like you would with HTML attributes</i>.',
        'Props let you think about parent and child components independently.',
        'The convention for props which hold functions is to start their name with "on".',
        '<i>To read props, you can use the function destructuring syntax</i>: <code>Avatar({ person, size })</code>.',
        'You can specify a default value like <code>size = 100</code>, which is used for missing and <code>undefined</code> props.',
        "<i>You can forward all props with JSX spread syntax</i>, but don't overuse it! When you receive an object through props, you can use the spread operator: <<span>input {...props.object}</span> />",
        'Props are <i>read-only snapshots in time</i>: every render receives a new version of props.',
        "<i>You can't change props</i>. When you need interactivity, you'll need to set state.",
        "<i>props allows you to make your components reusable</i>, and it allows you to pass data from a component to another component. props are our way of passing data from component A to B, and it's also totally fine to have a component which just passes data on.",
        "When we pass props from parent to child we can't skip intermediate child components in between.",
      ],
    },
    {
      sectionTitle: 'Adding "normal" JavaScript logic to components',
      sectionSource: '',
    },
    {
      sectionTitle: 'Splitting components into multiple components',
      sectionSource:
        '/src/markdowns/01_React_basics_&_working_with_Components/Splitting_components_into_multiple_components.html',

      tooltips: [
        'You can declare many components in one file, but large files can get difficult to navigate. To solve this, you can export a component into its own file, and then import that component from another file.',
        'This concept of components that React have allows you to split your application into smaller building blocks, where every building block/component is <i>focused on <b>one core task</b></i>, and then you build your overall UI by combining these building blocks/components.',
        '<i>Separation of concerns</i>: React is all about splitting your app into small building blocks (components), where every building block (component) has a <b>clear task</b>, and therefore your <i>code stays <b>maintainable</b> and <b>manageable</b></i>. Having a separation of concerns helps us with keeping our code base small and manageable, instead of having one large file which holds all the HTML markup and all the JavaScript logic.',
        "If we split our code across multiple files, then we'll have small pieces of code which are easy to manage and maintain.",
        'Components are regular JavaScript functions, so you can keep multiple components in the same file. This is convenient when components are relatively small or tightly related to each other. If the file gets crowded, you can always split your components to a separate file. Thus far, we always had one component per file, and that generally is a good rule to keep, but if you have a component that is really only getting used by the other component in that file, having both components in the same file can make sense too.',
      ],
    },
    {
      sectionTitle: 'The concept of "composition": <code>props.children</code>',
      sectionSource:
        '/src/markdowns/01_React_basics_&_working_with_Components/The_concept_of_composition_props_children.html',
      highlights: {
        highlight1: ['"composition"'],
        highlight2: ['<code>props.children</code>'],
      },
      tooltips: [
        "Sometimes you wanna have a component where you don't configure everything through props, but where instead you're able to pass content between the opening and closing tags of that component. <i>Out of the box, you can't use your custom components as wrappers around JSX markup</i>. Out of the box you can only use built-in HTML elements (<<span>div</span>>, <<span>h2</span>>, <<span>p</span>> tags) as wrappers.",
        "If you want to use custom components as wrappers, you need to use one special prop that is build into React, which every component receives, even if you're never setting it explicitly, and that is <code>props.children</code>.",
        '<code>props.children</code> is a reserved name, and the value of this special children prop will always be the content between the opening and closing tags of your custom component. This is a concept called composition.',
        'You can think of a component with a <code>children</code> prop as having a "hole" that can be "filled in" by its parent components with arbitrary JSX markup.',
      ],
    },
  ],
};

const section2 = {
  title:
    '<p class="card__title--1">Section 2</p> <p class="card__title--2">React state & working with events</p>',
  sections: [
    {
      sectionTitle: 'Listening to events & working with event handlers',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Listening_to_events_&_working_with_event_handlers.html',

      tooltips: [
        "On all built-in HTML elements, like <<span>div</span>>, <<span>h2</span>>, <<span>buttons</span>> and so on, we have full access to all the native DOM events, which we can listen to. <i>React exposes all native DOM events as props which start with 'on'</i>.",
        "When you're building your own components, you can name their event handler props any way that you like. By convention, event handler props should start with 'on', followed by a capital letter.",
        '<i>React lets you add event handlers to your JSX markup</i>. You can respond to events in React by declaring event handler functions inside your custom components.',
        `Event handler functions:
        <br> - are usually <i>defined inside your components</i>;
        <br> - <i>have names that start with 'handle'</i>, followed by the name of the event.`,
        "Because event handlers are declared inside of a component, they have access to the component's props",
        'You can pass event handling logic from a parent component to a child component by <i>passing event handlers as props</i>.',
      ],
    },
    {
      sectionTitle: 'How component functions are executed: render & commit',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/How_component_functions_are_executed_render_&_commit.html',
      highlights: {
        highlight1: ['render', 'commit'],
      },
      tooltips: [
        'Since a component is a function, someone has to call it, and you might notice that we never called our component function, instead we just used that function like HTML element in the JSX markup.',
        `Before your components are displayed on screen, they must be rendered by React. The process of rendering a component to UI has three steps:
        <br>1. <i>Triggering</i> a render;
        <br>2. <i>Rendering</i> the component;
        <br>3. <i>Committing</i> to the DOM.
        `,
        `There are two reasons when a component trigger a render:
        <br>1. It's the component's <i>initial render</i>.
        <br>2. The component's (or one of its ancestors) <i>state has been updated</i>.
        `,
        `<i>After you trigger a render, React calls your components to figure out what to display on screen</i> (<b>"rendering" is React calling your components</b>):
        <br>- on <i>initial render</i>, React will call the root component.
        <br>- for <i>subsequent renders</i>, React will call the function component whose state update triggered the render.`,
        "After rendering (calling) your components, React will modify the DOM. <i>React only changes the DOM nodes if there's a difference between renders</i>.",
      ],
    },
    {
      sectionTitle: 'Working with state',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Working_with_state.html',
      highlights: {
        highlight1: ['state'],
      },
      tooltips: [
        "If you have a regular variable in your component function and that variable changes, that code executes, but the overall component function doesn't re-execute just because a regular variable changed. By default, React doesn't care about chainges of regular variables inside of components. It doesn't re-evaluate the component's JSX markup.",
        `<i>Changes to regular variable isn't enough to trigger re-renders</i> because:
        <br>- <i>Local variables don't persist between renders</i>;
        <br>- <i>Changes to local variables won't trigger renders</i>; React doesn't realize it needs to render the component again with the new data.
        `,
        `To update a component with data that was changed (new data), two things need to happen:
        <br>1. <i>Retain the data between renders</i>;
        <br>2. <i>Trigger React to render the component with the new data (re-rendering)</i>.
        `,
        `We need a way of telling React that something changed and that a certain component should be re-executed, and that's where React introduces a special concept called "state". To tell React that it should run a component function again, we need to store a variable by adding it like a state variable.`,
        'To make the UI interactive, you need to let users change your underlying data model. You will use state for this.',
        `The <code>useState</code> always return an array that has exactly two items:
        <br>1. A <i>state variable</i> to retain the data between renders;
        <br>2. A <i>state setter function</i> to update the variable and trigger React to render the component again.
        `,
        'The <code>useState</code> hook allows us to <i>define values as state</i>, where changes to these values should reflect in the component function being called again, which is a key difference to a value stored in a regular variable.',
        '<i>The state variable is changed when you use the state setter function</i> provided by <code>useState</code> hook.',
        'Only the component where the <code>useState()</code> was registered will be updated, not any other components.',
        '<i><code>useState()</code> adds reactivity to our application. Without <code>useState()</code>, our UI would never change</i>, but with <code>useState()</code> and with listening to events, we can make sure that we can react to user actions/events and that user actions/events can result in a visible change on our screen.',
        'You can have as many state variables of as many types as you like in one component, so you can call <code>useState()</code> more than once in a component function. All of the states inside of the same component will be totally separated from each other.',
        '<i>State is local to a component instance</i> on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.',
        `<i>There are two types of "model" data in React: props and state</i>. The two are very different:
        <br>- props are like arguments you pass to a function. They let a parent component pass data to a child component and customize its appearance.
        <br>- state is like a component's memory. It lets a component keep track of some information and change it in response to interactions`,
      ],
    },
    {
      sectionTitle: 'State as a snapshot',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/State_as_a_snapshot.html',

      tooltips: [
        '<i>State behaves more like a snapshot</i>. Setting it does not change the state variable you already have, but instead trigger React to rendering the component again.',
        '"Rendering" means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers and local variables were all calculated <i>using its state at the time of the render</i>.',
        `State behaves like a <i>component's memory</i>, so is not like a regular variable that disappears after your function returns. <i>State actually "lives" in React itself — as if on a shelf! — outside of your function</i>.`,
        `<i>When React calls your component, it gives you a snapshot of the state for that particular render</i>. Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, <i>all calculated using the state values from that render</i>!`,
        `<i>Setting state only changes it for the next render! A state variable's value never changes within a render</i>, even if its event handler's code is asynchronous. <i>React keeps the state values "fixed" within one render's event handlers</i>. You don't need to worry whether the state has changed while the code is running.`,
        `Summary:
        <br>- Setting state requests a <i>new render</i>.
        <br>- React stores state <i>outside of your component</i>, as if on a shelf.
        <br>- When you call <code>useState</code>, React gives you <i>a snapshot of the state for that render</i>.
        <br>- Variables and event handlers don't "survive" re-renders. <i>Every render has its own event handlers</i>.
        <br>- Every render (and functions inside it) will always "see" the snapshot of the state that React gave to that render.
        <br>- Event handlers created in the past have the state values from the render in which they were created.`,
      ],
    },
    {
      sectionTitle:
        'Queueing a series of state updates: state scheduling & batching',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Queueing_a_series_of_state_updates_state_scheduling_&_batching.html',
      highlights: {
        highlight1: ['state scheduling', 'batching'],
      },
      tooltips: [
        'State updates are <i>scheduled</i> by React, they are <i>not processed immediately</i>.',
        "<i>Setting state does not change the variable in the existing render, but it requests a new render. Setting state only changes it for the next render! A state variable's value never changes within a render</i>.",
        "<i>Each render's state values are fixed</i>. React waits until all code in the event handlers has run before processing your state updates. So setting a state variable will queue another render.",
        "React lets you update multiple state variables — even from multiple components — without triggering too many re-renders. But this also means that the UI won't be updated until after your event handler, and any code in it, completes. This behavior is also known as batching.",
        'With batching React processes multiple state updates after event handlers have finished running.',
        `Summary:
        <br>- Setting state does not change the variable in the existing render, but it requests a new render.
        <br>- React processes state updates after event handlers have finished running. This is called batching.
        <br>- To update some state multiple times in one event, you can use an updater function: <code>setNumber(n => n + 1)</code>.`,
      ],
    },
    {
      sectionTitle: 'Updating objects in state',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Updating_objects_in_state.html',
      tooltips: [
        "State can hold any kind of JavaScript value, including objects. But <i>you shouldn't change objects that you hold in the React state directly</i>. Instead, when you want to update an object, you need to <i>create a new one (or make a copy of an existing one), and then set the state to use that copy</i>.",
        'You should <i>treat object in React as if they were immutable</i> (unchangeable or "read-only"), so treat any JavaScript object that you put into state as read-only.',
        "Mutation is only a problem when you change existing objects that are already in state, so mutating an object you've just created is okay because no other code references it yet. Changing it isn't going to accidentally impact something that depends on it. This is called a <i>local mutation</i>.",
        `Summary:
        <br>- Treat all state in React as immutable.
        <br>- When you store objects in state, mutating them will not trigger renders and will change the state in previous render "snapshots".
        <br>- Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
        <br>- You can use the <code>{...obj, something: 'newValue'}</code> object spread syntax to create copies of objects.
        `,
      ],
    },
    {
      sectionTitle: 'Updating arrays in state',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Updating_arrays_in_state.html',
      tooltips: [
        'Arrays are mutable in JavaScript, but <i>you should treat them as immutable when you store them in state</i>. Just like with objects, when you want to update an array stored in state, you need to <i>create a new one (or make a copy of an existing one), and then set state to use the new array</i>.',
        "In JavaScript, arrays are just another kind of object. Like with objects, <i>you should treat arrays in React state as read-only</i>. This means that you shouldn't reassign items inside an array like <code>arr[0] = 'bird'</code>, and you also shouldn't use methods that mutate the array, such as <code>push()</code> and <code>pop()</code>. Instead, every time you want to update an array, you'll want to <i>pass a new array to your state setting function</i>.",
        `Summary:
        <br>- You can put arrays into state, but you can't change them.
        <br>- Instead of mutating an array, create a new version of it, and update the state to it.
        <br>- You can use the <code>[...arr, newItem]</code> array spread syntax to create arrays with new items.
        <br>- You can use <code>filter()</code> and <code>map()</code> to create new arrays with filtered or transformed items.`,
      ],
    },
    {
      sectionTitle: 'Choosing the state structure',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Choosing_the_state_structure.html',
      highlights: {
        highlight1: ['state structure'],
      },
      tooltips: [
        '<i>Group related state</i>: if you always update two or more state variables at the same time, consider merging them into a single state variable.',
        '<i>Avoid contradictions in state</i>: when the state is structured in a way that several pieces of state may contradict and "disagree" with each other, you leave room for mistakes. Try to avoid this.',
        "<i>Avoid redundant state</i>: if you can calculate some information from the component's props or its existing state variables during rendering, you should not put that information into that component's state.",
        '<i>Avoid duplication in state</i>: when the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.',
        '<i>Avoid deeply nested state</i>: deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.',
      ],
    },
    {
      sectionTitle: 'Updating state that depends on the previous state',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Updating_state_that_depends_on_the_previous_state.html',
      tooltips: [
        'State updates are <i>scheduled</i> by React, they are <i>not processed immediately</i>.',
        `The best pratice to update state that depends on the previous state is to pass a function as argument to the state updating function provided by the <code>useState</code> hook. The function which you pass as argument to the state updating function will automatically be executed by React and it will receive the previous state snapshot for that state for which you're calling the state updating function.`,
      ],
    },
    {
      sectionTitle: 'Preserving and resetting state',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Preserving_and_resetting_state.html',
      tooltips: [
        '<i>State is isolated between components</i>. In React, each component on the screen has fully isolated state. React keeps track of which state belongs to which component <i>based on their place in the UI tree</i>. You can control when to preserve state and when to reset it between re-renders.',
        'React uses tree structures to manage and model the UI you make. React makes UI trees from your JSX.',
        "<i>State is tied to a position in the tree</i>: React associates each piece of state it's holding with the correct component by where that component sits in the UI tree.",
        '<i>React will keep the state around for as long as you render the same component at the same position in the UI tree. When React removes a component or a different component gets rendered at the same position in the UI tree, it destroys its state. When you add that component again to the DOM, its state is initialized from scratch.</i>',
        'Same component at the same position preserves state. Different components at the same position reset state.',
        'When you render a different component in the same position, it resets the state of its entire subtree.',
        'If you want to preserve the state between re-renders, the structure of your tree needs to "match up" from one render to another. If the structure is different, the state gets destroyed because React destroys state when it removes a component from the tree.',
        `<i>Resetting state at the same position</i>:
        <br>1. Render components in different positions;
        <br>2. Give each component an explicit identity with <code>key</code>.
        `,
      ],
    },
    {
      sectionTitle:
        '"Lifting the data/state up" to share data/state between components',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Lifting_the_data_or_state_up_to_share_it_between_components.html',
      highlights: {
        highlight1: ['"Lifting the data/state up"'],
      },
      tooltips: [
        'In React is a concept called "Lifting The Data/State Up". "Lifting The Data Up" means <i>moving data from a child to a parent component</i> by utilizing props to receive a function from the parent component, which we call in the child component.',
        'You will hear the term Lifting The Data/State Up quite a bit when you were working with React and whenever you hear that, it is about moving data/state from a child component to some parent component, to either use it there or to then pass it down to some other child component.',
        `<i>A single source of truth for each state</i>: in a React application, many components will have their own state. For each unique piece of state, you will choose the component that "owns" it. For each piece of state, there is a specific component that holds that piece of information. Instead of duplicating shared state between components, you will lift it up to their common shared parent, and pass it down to the children that need it.
        `,
      ],
    },
    {
      sectionTitle:
        'Controlled (stateless) vs Uncontrolled (stateful) components',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Controlled_vs_uncontrolled_components.html',
      tooltips: [
        '<i>It is common to call a component with some local state "uncontrolled"</i>. For example, a child component that have a state variable that can be changed by its parent component is called an uncontrolled component.',
        '<i>A component is "controlled" when the important data in it is driven by props rather than its own local state. This lets the parent component fully specify its behavior</i>.',
        "Uncontrolled components are easier to use within their parents because they require less configuration. But they're less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props.",
        'When writing a component, consider which information in it should be <i>controlled (via props)</i>, and which information should be <i>uncontrolled (via state)</i>',
      ],
    },
    {
      sectionTitle: 'Adding two-way binding',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Adding_two_way_binding.html',
      highlights: {
        highlight2: ['two-way binding'],
      },
      tooltips: [
        `Two-way binding is very useful when you're working with html <<span>form</span>> or <<span>input</span>> tags, because it allows you to gather user input, but then also change it.`,
      ],
    },
    {
      sectionTitle:
        'Introducing <code>useReducer()</code> for state management',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Introducing_useReducer_for_state_management.html',
      highlights: {
        highlight2: ['<code>useReducer()</code>'],
      },
      tooltips: [
        '<code>useReducer()</code> is another built-in hook and it will help us with <i>state management</i>.',
        "If you update a state which depends on another state, and/or if you set a state that's depends of the another previous state, then merging that two states into one state could be a good idea, and you can do this with the help of <code>useReducer()</code>.",
        "<code>useReducer()</code> is an alternative to <code>useState()</code>, it's a replacement if you need a more powerful state management.",
      ],
    },
    {
      sectionTitle: 'Using the <code>useReducer</code> hook',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Using_the_useReducer_hook.html',
      tooltips: [
        'Reducers are a <i>different way to handle state</i>.',
        `You can migrate from <code>useState</code> to <code>useReducer</code> in three steps:
        <br>1. Move from <b>setting state</b> to <b>dispatching actions</b>;
        <br>2. Write a <b>reducer function</b>;
        <br>3. Use the reducer from your component.`,
        '<i>Managing state with reducers is slightly different from directly setting state</i>. Instead of telling React "what to do" by setting state, you specify "what the user just did" by <i>dispatching "actions"</i> from your event handlers.',
        'With <code>useState</code> updating function you set a new state when an event happens. With <code>useReducer</code> the component logic is easier to read because you separate the event handler from how state update is managed: <i>the event handlers only specify <b>what happened</b> by dispatching actions, and the reducer function determines <b>how the state updates</b> in response to them</i>.',
        `Keep these two tips in mind when writing reducers:
        <br>- <i>Reducers must be pure</i>, so they shouldn't mutate state (same inputs always result in the same output). They should not send requests, schedule timeouts, or perform any side effects (operations that impact things outside the component). They should update objects and arrays without mutations;
        <br>- <i>Each action describes a single user interaction, even if that leads to multiple changes in the data</i>.`,
      ],
    },
    {
      sectionTitle:
        '<code>useReducer</code> vs <code>useState</code> for state management',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/useReducer_vs_useState_for_state_management.html',
    },
    {
      sectionTitle: 'Introducing React Context (Context API)',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Introducing_React_Context.html',
      highlights: {
        highlight2: ['React Context (Context API)'],
      },
      tooltips: [
        `I'm talking about a problem, where you are passing a lot of data through a lot of components via props. Now it is quite common that you pass data to components through props, but it's always a problem if you forward state through multiple components. In bigger apps, you could easily build such "props chains", which are used to forward data through components to other components.`,
        'React Context provides a way to pass data through the component tree without having to pass props down manually at every level.',
        'With React Context your are able to directly change state from any component in our app, and directly pass state to any component in our app, without building such a "props chain".',
        'React Context allows us to manage wide state and provides a way to pass data through the component tree without having to pass props down manually at every level ("props chain").',
        'Context is designed to share data that can be considered "global" for a tree of React components. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Using Context, we can avoid passing props through intermediate elements.',
        'Apply Context sparingly because it MAKES COMPONENT REUSE MORE DIFFICULT !!! If you would use Context instead of props, every Component would do the same thing, it would be bound to the same Context, so it might be less reusable.',
        "You can have multiple Contexts for multiple global states and of course, you can also use just one Context for a bigger state, that's all up to you.",
      ],
    },
    {
      sectionTitle: 'Using the React Context API',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Using_the_React_Context.html',

      tooltips: [
        '<code>React.createContext()</code> return an Context object that contains components.',
        'When React renders a component that subscribes to the Context object, it will read the current Context value from the closest matching Provider above it in the tree.',
        "Every Context object comes with a Provider React component, that allows consuming components to subscribe to Context changes. Any component that's not wrapped by the Provider will not be able to listen/subscribe to the Context.",
        'The Provider component accepts a <code>value</code> prop to be passed to consuming components that are descendants of that Provider. One Provider can be connected to many consumers.',
        "All consumers that are descendants of a Provider will re-render whenever the Provider's <code>value</code> prop changes.",
        'Now, providing is always the first step. Besides providing, you then need to consume it. <code>useContext()</code> hook allows us to use a Context, it allows us to tap into a Context and listen to it. <code>useContext()</code> return the wide-state of that Context that you point in the `useContext()` function.',
        'The component that use the Context will be re-evaluated by React whenever the Context changes!',
      ],
    },
    {
      sectionTitle: 'Making Context dynamic',
      sectionSource: '',
      highlights: {
        highlight1: ['Context dynamic'],
      },
      tooltips: [
        "The good thing is we can set up a dynamic context, where we don't just pass data to other components, but also functions. Therefore, we're can using this app-wide or component-wide Context object, to manage our state and to manage the function/functions that changes the state.",
        'Context is not limited to static values. If you pass a different value on the next render, React will update all the components reading it below! This is why context is often used in combination with state.',
      ],
    },
    {
      sectionTitle: 'Building & using a custom Context Provider component',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Building_&_using_a_Custom_Context_Provider_Component.html',
    },
    {
      sectionTitle: 'React Context limitations',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/React_Context_limitations.html',
    },
    {
      sectionTitle: 'Scaling state with <code>useReducer</code> and context',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Scaling_state_with_useReducer_and_context.html',
      tooltips: [
        'You can combine reducer with context to let any component read and update state above it.',
      ],
    },
    {
      sectionTitle: 'Learning the "rules of Hooks"',
      sectionSource:
        '/src/markdowns/02_React_state_&_working_with_Events/Learning_the_rules_of_Hooks.html',
      highlights: {
        highlight1: ['rules of Hooks'],
      },
      tooltips: [
        "Hooks — functions starting with 'use' — can only be <i>called at the top level of your components or your own Hooks</i>. You can't call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it's helpful to think of them as unconditional declarations about your component's needs. You 'use' React features at the top of your component similar to how you 'import' modules at the top of your file.",
      ],
    },
  ],
};

const section3 = {
  title:
    '<p class="card__title--1">Section 3</p> <p class="card__title--2">Rendering lists & conditional content</p>',
  sections: [
    {
      sectionTitle: 'Rendering lists of data',
      sectionSource:
        '/src/markdowns/03_Rendering_list_&_conditional_content/Rendering_lists_of_data.html',
      highlights: {
        highlight1: ['lists of data'],
      },
      tooltips: [
        "You will often want to display multiple similar components from a collection of data. You can use JavaScript's <code>filter()</code> and <code>map()</code> with React to filter and <i>transform your array of data into an array of components</i>. For each array item, you will need to specify a <code>key</code>. Usually, you will want to use an ID from the database as a <code>key</code>. Keys let React keep track of each item's place in the list even if the list changes.",
        'With React you can output arrays of JSX elements on your page.',
        'If you do output an array of JSX elements, then React is capable of rendering on the UI that array of JSX elements. So if you had an array of JSX elements as part of your JSX markup, React would simply render that elements side by side.',
      ],
    },
    {
      sectionTitle: 'Understanding <code>key</code>',
      sectionSource:
        '/src/markdowns/03_Rendering_list_&_conditional_content/Understanding_Keys.html',
      highlights: {
        highlight2: ['<code>key</code>'],
      },
      tooltips: [
        'React has a special concept when it comes to rendering lists of data, a concept which exists to ensure that React is able to update and render such lists efficiently, without performance losses or bugs which may occur.',
        `The <code>key</code> prop is a prop you can add to any component, no matter if it's a custom component or if it's a built-in HTML element.`,
        'The <code>key</code> prop helps React to correctly identify and update (if needed) the list of JSX elements.',
        '<code>key</code> should be unique so that components maintain their identity across updates.',
        `Whenever you're working with an array of JSX elements React wants a <code>key</code> on every element.`,
      ],
    },
    {
      sectionTitle: 'Outputting conditional content',
      sectionSource:
        '/src/markdowns/03_Rendering_list_&_conditional_content/Outputting_conditional_content.html',
      highlights: {
        highlight1: ['conditional content'],
      },
      tooltips: [
        'With React you can render (output) on you page different content based on different conditions.',
        'When it comes to output content conditionally, long statements like <code>if</code> or <code>for</code> loops are not allowed between curly braces, in JSX expressions. So, for achive our results, we need to use Ternary Operator or Short Circuiting with <code>&&</code> or <code>||</code>.',
      ],
    },
  ],
};

const section4 = {
  title:
    '<p class="card__title--1">Section 4</p> <p class="card__title--2">Styling React components</p>',
  sections: [
    {
      sectionTitle: 'Introduction to styling React components',
      sectionSource:
        '/src/markdowns/04_Styling_React_Components/Introduction_to_styling_React_components.html',
    },
    {
      sectionTitle: 'Adding basic CSS styling',
      sectionSource:
        '/src/markdowns/04_Styling_React_Components/Adding_basic_CSS_styling.html',

      tooltips: [
        'In React, you specify a CSS class with <code>className</code>. It works the same way as the HTML <code>class</code> attribute.',
      ],
    },
    {
      sectionTitle: 'Adding dynamic inline styles',
      sectionSource:
        '/src/markdowns/04_Styling_React_Components/Adding_dynamic_inline_styles.html',
      highlights: {
        highlight1: ['dynamic inline styles'],
      },
      tooltips: [
        'You can set the style of an element dynamically by adding the <code>style</code> prop.',
        `In React <code>style</code> prop doesn't want a string as a value, instead <code>style</code> want as a value an object.`,
        'This object you should use have the CSS property names as key names, and the values as key values.',
      ],
    },
    {
      sectionTitle: 'Setting CSS classes dynamically',
      sectionSource: '',
      highlights: {
        highlight1: ['CSS classes dynamically'],
      },
    },
    {
      sectionTitle: 'Introducing styled components',
      sectionSource:
        '/src/markdowns/04_Styling_React_Components/Introducing_styled_components.html',
      highlights: {
        highlight1: ['styled components'],
      },
      tooltips: [
        'Styled components is a package that helps you build components which have certain styles attached to them, where the styles really only affect the components to which they were attached and not any other components.',
        'Styled components & dynamic props',
        'Styled components & media queries',
      ],
    },
    {
      sectionTitle: 'Using CSS modules',
      sectionSource:
        '/src/markdowns/04_Styling_React_Components/Using_CSS_modules.html',
      highlights: {
        highlight2: ['CSS modules'],
      },
      tooltips: [
        'CSS Modules is a feature which is only available in projects that are configured to support it.',
        "What CSS Modules does under the hood is it takes CSS classes that are in the CSS file that you are importing, and changes the name of that classes to be unique. That's the core thing it does, for every component it changes the classes names off the classes that are in the CSS file that you're importing, it generates new classes names to be unique.",
        'CSS Modules concept ensures that the CSS styles we set up in a CSS file are scoped to the component we import that file into.',
      ],
    },
    {
      sectionTitle: 'Dynamic styles with CSS modules',
      sectionSource: '',
    },
  ],
};

const section5 = {
  title:
    '<p class="card__title--1">Section 5</p> <p class="card__title--2">Debugging React apps</p>',
  sections: [
    {
      sectionTitle: 'Understanding React error messages',
      sectionSource: '',
      highlights: {
        highlight1: ['error messages'],
      },
      tooltips: [
        'As a side note, you can have errors  that your IDE (VSCode) able to detect, but sometimes you get a React error which is not showing up in your IDE.',
      ],
    },
    {
      sectionTitle: 'Analyzing code flow & warnings',
      sectionSource: '',
      highlights: {
        highlight1: ['code flow', 'warnings'],
      },
    },
    {
      sectionTitle: 'Working with breakpoints',
      sectionSource: '',
      highlights: {
        highlight1: ['breakpoints'],
      },
    },
    {
      sectionTitle: 'Using the React DevTools',
      sectionSource: '',
      highlights: {
        highlight1: ['React DevTools'],
      },
      tooltips: [
        "Let's have a look at a dedicated tool, which is available for React Development, which can help us with React specific problems and which can help us with understanding our React Application better and that would be the React Dev Tools.",
        'In the Components tab (Google Chrome) we see the actual React Components and the Components structure that is responsible for the UI output.',
      ],
    },
  ],
};

const section6 = {
  title:
    '<p class="card__title--1">Section 6</p> <p class="card__title--2">Fragments, Portals & "Refs"</p>',
  sections: [
    {
      sectionTitle: 'JSX limitations & workarounds',
      sectionSource:
        '/src/markdowns/05_Working_with_Fragments_Portals_&_Refs/JSX_limitations_&_workarounds.html',
      highlights: {
        highlight1: ['JSX limitations'],
      },
      tooltips: [
        `You can't return more than one "root" JSX element (you also can't store more than one "root" JSX element in a variable).`,
        'The solution: always wrap adjacent elements!',
        `<<span>div</span>> soup problem: in bigger apps, you can easily end up with tons of unnecessary <<span>div</span>>s (or other elements) which add no semantic meaning or structure to the page, but are only there because of React's/JSX requirement.`,
      ],
    },
    {
      sectionTitle: 'Creating a wrapper component',
      sectionSource: '',
      highlights: {
        highlight1: ['wrapper component'],
      },
      tooltips: [
        "A wrapping element it's an element which won't render anything to the DOM, but the requirement is not that there must be one root component being rendered to the DOM, the requirement just is that there must be one root element that you return or that you store in a variable.",
      ],
    },
    {
      sectionTitle:
        '<code>React.Fragment</code> or shorthand <code><><span><</span>/></code>',
      sectionSource:
        '/src/markdowns/05_Working_with_Fragments_Portals_&_Refs/React_Fragments.html',
      highlights: {
        highlight2: ['<code>React.Fragment</code>'],
      },
      tooltips: [
        'Fragments let you group a list of children without adding extra nodes to the DOM.',
        'Fragments allow us to write cleaner code, to end up with less unnecessary HTML elements on the final page.',
        "You can access the Fragment component with <code>React.Fragment</code>, or in some projects you can also use the shortcut syntax. These two syntaxes render empty wrappers, which don't render any actual HTML element to the DOM.",
      ],
    },
    {
      sectionTitle: 'Introducing React Portals',
      sectionSource:
        '/src/markdowns/05_Working_with_Fragments_Portals_&_Refs/React_Portals.html',
      highlights: {
        highlight2: ['Portals'],
      },
      tooltips: [
        'You can use a Portal to keep the structure that you have in your JSX markup, but to render the JSX markup differently (in other place) in the real DOM.',
        'Portals let your components render some of their children into a different place in the DOM.',
        'A Portal only changes the physical placement of the DOM node. In every other way, the JSX you render into a portal acts as a child node of the React component that renders it.',
      ],
    },
    {
      sectionTitle: 'Referencing values with refs',
      sectionSource:
        '/src/markdowns/05_Working_with_Fragments_Portals_&_Refs/Referencing_values_with_ref.html',
      highlights: {
        highlight2: ['refs'],
      },
      tooltips: [
        `When you want a component to <i>"remember" some information, but you don't want that information to trigger new renders</i>, you can use a ref.`,
        "<code>useRef</code> always returns an object like <code>{current: 'value'}</code>.",
        'You can access the <code>current</code> value of that ref through the <code>ref.current</code> property. <i>This value is intentionally mutable, meaning you can both read and write to it</i>.',
        "Unlike state, ref is a plain JavaScript object with the <code>current</code> property that you can read and modify. Note that <i>the component doesn't re-render when you modify the <code>ref.current</code> value</i>.",
        'Like state, <i>refs are retained by React between re-renders</i>. However, <i>setting state re-renders a component but changing a ref does not!</i>',
        "When a piece of information is used for rendering, keep it in state. When a piece of information is only needed by event handlers and changing it doesn't require a re-render, using a ref may be more efficient.",
        `Typically, you will use a ref when your component needs to "step outside" React and communicate with external APIs — often a browser API that won't impact the appearance of the component.`,
        "<i>If your component needs to store some value, but it doesn't impact the rendering logic, choose refs.</i>",
        '<i>You can point a ref to any value</i>. However, the most common use case for a ref is to access a DOM element.',
      ],
    },
    {
      sectionTitle: 'Manipulating the DOM with <code>ref</code> prop',
      sectionSource:
        '/src/markdowns/05_Working_with_Fragments_Portals_&_Refs/Manipulating_the_DOM_with_ref.html',
      tooltips: [
        'In their most basic form, <code>ref</code> allow you to get access to a DOM nodes and work with it.',
        'With <code>ref</code> you can set up a connection between a DOM node and your JavaScript code.',
        'You can have more than a single ref in a component.',
        'The <code>useRef</code> hook returns an object with a single property called <code>current</code>. The <code>current</code> property stores the actual DOM node.',
        `<i>Rarely use <code>ref</code> to manipulate the DOM. Use <code>ref</code> only to read the DOM node</i>: refs are an escape hatch. You should only use them when you have to "step outside React". Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose. If you stick to <i>non-destructive actions</i> like focusing and scrolling, you shouldn't encounter any problems. However, <i>if you try to modify the DOM manually, you can risk conflicting with the changes React is making</i>.`,
        "<i>Avoid changing DOM nodes managed by React</i>: modifying, adding children to, or removing children from elements that are managed by React can lead to inconsistent visual results or crashes. However, this doesn't mean that you can't do it at all. It requires caution. <i>You can safely modify parts of the DOM that React has no reason to update</i>. For example, if some <<span>div</span>> is always empty in the JSX, React won't have a reason to touch its children list. Therefore, it is safe to manually add or remove elements there.",
        'Usually, you will use refs for <i>non-destructive actions</i> like focusing, scrolling, or measuring DOM elements.',
      ],
    },
    {
      sectionTitle: '<code>useRef</code> & uncontrolled components',
      sectionSource:
        '/src/markdowns/05_Working_with_Fragments_Portals_&_Refs/useRef_and_uncontrolled_components.html',
      tooltips: [
        "When we use ref's for inputs, we have uncontrolled input components.",
      ],
    },
    {
      sectionTitle: 'Diving into "forward refs"',
      sectionSource:
        '/src/markdowns/05_Working_with_Fragments_Portals_&_Refs/Diving_into_Forward_Refs.html',
      highlights: {
        highlight2: ['"forward refs"'],
      },
      tooltips: [
        "The <code>ref</code> prop is supported on all built-in HTML elements, but by default you can't use <code>ref</code> prop on your custom components!",
        "<i>A custom component doesn't expose its DOM nodes by default</i>. You can opt into exposing a DOM node by using <code>forwardRef</code> and passing the second <code>ref</code> argument down to a specific node.",
        '<i>React does not let a component access the DOM nodes of other components</i>. Not even for its own children!',
        'In uncommon cases, you may want to <i>restrict the exposed functionality</i> of a DOM node. You can do that with <code>useImperativeHandle()</code> hook. <code>useImperativeHandle</code> instructs React to provide <i>your own special object</i> as the value of a ref to the parent component. In this case, <i>the ref "handle" is not the DOM node</i>, but the custom object you create inside <code>useImperativeHandle</code> call.',
      ],
    },
  ],
};

const section7 = {
  title:
    '<p class="card__title--1">Section 7</p> <p class="card__title--2">Handling side effects</p>',
  sections: [
    {
      sectionTitle: 'Synchronizing with Effects',
      sectionSource:
        '/src/markdowns/06_Handling_side_effects/Synchronizing_with_effects.html',
      highlights: {
        highlight1: ['"side effects"'],
      },
      tooltips: [
        'Some components need to synchronize with external systems. <i>Effects let you run some code after rendering</i> so that you can synchronize your component with some system outside of React.',
        "Effects let you synchronize a component with some external system. If there's no external system and you only want to adjust some state based on other state, you might not need an Effect.",
        `Event handlers contain "side effects" (they change the program's state) and are caused by a specific user action. On the other side, <i>Effects let you specify side effects that are caused by <u>rendering itself</u>, rather than by a particular event</i>. Unlike events, Effects are caused by rendering itself rather than a particular interaction.`,
        '<i>Effects run at the end of the rendering process</i> <b>after</b> the screen updates. Every time your component renders, React will update the screen and then run the code inside <code>useEffect</code>. In other words, <i><code>useEffect</code> "delays" a piece of code from running until that render is reflected on the screen</i>.',
        '<i>In React, rendering should be a pure calculation of JSX and should not contain side effects</i> like modifying the DOM. By wrapping the DOM update in an Effect, you let React update the screen first. Then your Effect runs.',
        '<i>By default, Effects run <b>after</b> every render (including the initial one)</i>. Often, this is not what you want. <i>You can tell React to skip unnecessarily re-running the Effect by specifying an <u>array of dependencies</u></i> as the second argument to the <code>useEffect</code>.',
        'An empty dependency array <code>[]</code> corresponds to the component "mounting" (i.e. being added to the screen).',
        '<i>The dependency array can contain multiple dependencies</i>. React will only skip re-running the Effect if all of the dependencies you specify have exactly the same values as they had during the previous render.',
        `<i>You can't "choose" your dependencies, they are determined by the code inside the Effect</i>. You will get a lint error if the dependencies you specified don't match what React expects based on the code inside your Effect. This helps catch many bugs in your code. If your Effect uses some value but you don't want to re-run the Effect when it changes, you'll need to edit the Effect code itself to not "need" that dependency. If the linter lets you omit a dependency without errors, that means it is safe to do. Omitting always-stable dependencies only works when the linter can "see" that the object is stable.`,
        'In the <code>useEffect()</code> function you can return only one specific thing, and that thing is a function. <i>The function that you return from the <code>useEffect()</code> is called <u>cleanup function</u>. This function that you return from <code>useEffect()</code> will run as a cleanup process <b>before</b> <code>useEffect()</code> will be re-executed. The cleanup function will not run when the <code>useEffect()</code> is executed for the first time</i>.',
        'React will call your cleanup function each time <b>before</b> the Effect runs again, and one final time when the component unmounts from DOM (gets removed from DOM).',
        'When you implement the cleanup well, there should be no user-visible difference between running the Effect once vs running it, cleaning it up, and running it again.',
        "<i>In development React <b>remounts</b> every component once immediately after its initial mount. In production, you don't have this behavior</i>. Remounting components only happens in development to help you find Effects that need cleanup.",
        'When Strict Mode is on, React mounts components twice (in development only!) to stress-test your Effects. <i>If your Effect breaks because of remounting, you need to implement a cleanup function</i>. React will call your cleanup function before the Effect runs next time, and during the unmount.',
      ],
    },
    {
      sectionTitle: 'You might not need an Effect',
      sectionSource:
        '/src/markdowns/06_Handling_side_effects/You_might_not_need_an_effect.html',
      tooltips: [
        `Effects are an escape hatch from the React paradigm. They let you "step outside" of React and synchronize your components with some external system. <i>If there is no external system involved (for example, if you want to update a component's state when some props or state change), you shouldn't need an Effect</i>. Removing unnecessary Effects will make your code easier to follow, faster to run, and less error-prone.`,
        `There are two common cases in which you don't need Effects:
        <br>- You don't need Effects to <i>transform data for rendering</i>;
        <br>- You don't need Effects to <i>handle user events</i>.
        `,
        'You do need Effects to <i>synchronize with external systems</i>.',
      ],
    },
    {
      sectionTitle: 'Lifecycle of reactive Effects',
      sectionSource:
        '/src/markdowns/06_Handling_side_effects/Lifecycle_of_reactive_effects.html',
      tooltips: [
        '<i>Effects have a different lifecycle from components</i>. Components may mount, update, or unmount. An Effect can only do two things: to <i>start synchronizing</i> something, and later to <i>stop synchronizing</i> it. This cycle can happen multiple times if your Effect depends on <i>props and state that change over time</i>.',
        "Try to think about each Effect <u>independently</u> from your component's lifecycle. An Effect describes <i>how to synchronize an external system to the current props and state</i>. As your code changes, this synchronization will need to happen more or less often.",
        'Intuitively, you might think that React would <u>start synchronizing when your component mounts</u> and <u>stop synchronizing when your component unmounts</u>. Sometimes, it may also be necessary to <i>start and stop synchronizing multiple times while the component remains mounted</i>.',
        "<i>Your Effect's <b>body</b> specifies how to <b>start</b> synchronizing, and your <b>cleanup function</b> specifies how to <b>stop</b> synchronizing</i>.",
        "When you write an Effect, it shouldn't matter whether a component is mounting, updating, or unmounting. All you need to do is to <i>describe how to start synchronization and how to stop it</i>.",
        'The main reason your Effect will re-synchronize in practice is <i>if some data it uses has changed</i>. Every time <b>after</b> your component re-renders, React will look at the array of dependencies that you have passed. If any of the values in the array is different from the value at the same spot that you passed during the previous render, React will re-synchronize your Effect.',
        "<i>In development, React always <b>remounts</b> each component once</i>. In other words, React verifies that your Effect can re-synchronize by forcing it to do that immediately in development. React starts and stops your Effect one extra time in development to check you've implemented its cleanup well.",
        'Each Effect in your code should represent a <i>separate and independent synchronization process</i>.',
        '<i>Effects are <b>reactive blocks of code</b></i>.',
        `<i>Effects "react" to reactive values</i>: props, state, and other values declared inside the component are reactive because they're calculated during rendering and participate in the React data flow. <i>Reactive values must be included in dependencies</i>.`,
        "<i>All variables declared in the component body are reactive</i>: props and state aren't the only reactive values. Values that you calculate from them are also reactive. If the props or state change, your component will re-render, and the values calculated from them will also change.",
        "<i>What an Effect with empty dependencies means</i>: if you think from the component's perspective, the empty <code>[]</code> dependency array means that Effect <b>run only when the component mounts</b>, and <b>run only when the component unmounts</b> (keep in mind that React would still run it an extra time in development to stress-test your Effect's logic).",
      ],
    },
    {
      sectionTitle: 'Separating Events from Effects',
      sectionSource:
        '/src/markdowns/06_Handling_side_effects/Separating_Events_from_Effects.html',
      tooltips: [
        'Event handlers only re-run when you perform the same interaction again. Unlike event handlers, Effects re-synchronize if some value they read, like a prop or a state variable, is different from what it was during the last render.',
        'Where you write code and you are not sure where to put it (in an event handlers or Effects), every time you need to answer this question <b>"Why the code needs to run?"</b>.',
        'Event handlers run in response to <b>specific interactions</b> vs Effects run <b>whenever synchronization is needed</b>.',
        `<i>Reactive <b>values</b> and reactive <b>logic</b></i>: intuitively, you could say that event handlers are always triggered "manually", for example by clicking a button. Effects, on the other hand, are "automatic": they run and re-run as often as it's needed to stay synchronized. <i>Props, state, and variables declared inside your component's body are called <b>reactive values</b> because these  values can <b>change due to a re-render</b></i>.`,
        `<i>Event handlers and Effects are different in <u>how they respond to changes</u></i>:
        <br>- <i>logic inside event handlers is <b>not reactive</b></i>. It will not run again unless the user performs the same interaction (for example, a click) again. Event handlers can read reactive values, but they don't "react" to their changes;
        <br>- <i>logic inside Effects is <b>reactive</b></i>. If your Effect reads a reactive value, you have to specify it as a dependency. Then, if a re-render causes that value to change, React will re-run your Effect's logic again with the new value.
        `,
        'You can move non-reactive logic from Effects into <i>Effect Events</i>.',
      ],
    },
    {
      sectionTitle: 'Removing Effect dependencies',
      sectionSource:
        '/src/markdowns/06_Handling_side_effects/Removing_Effect_dependencies.html',
      tooltips: [
        "When you write an Effect, the linter will verify that you've included every reactive value (like props and state) that the Effect reads in the list of your Effect's dependencies. This ensures that your Effect remains synchronized with the latest props and state of your component. <i>Unnecessary dependencies may cause your Effect to run too often</i>, or even create an infinite loop.",
        "<i>Dependencies should match the code: if you want to change the dependencies, change the surrounding code first</i>. You can think of the dependency list as a list of all the reactive values used by your Effect's code. You don't intentionally choose what to put on that list. The list describes your code. To change the dependency list, change the code.",
        `<i>You can't "choose" the dependencies of your Effect. Every <b>reactive value</b> used by your Effect's code must be declared in your dependency list</i>. Reactive values include props and all variables and functions declared directly inside of your component. To remove a dependency, you need to "prove" to the linter that it doesn't need to be a dependency.`,
        "<i>Avoid objects and functions as Effect dependencies</i>: in JavaScript, each newly created object and function is considered distinct from all the others. It doesn't matter that the contents inside of them may be the same! <i>Object and function dependencies create a risk that your Effect will re-synchronize more often than you need</i>. This is why, whenever possible, you should try to avoid objects and functions as your Effect's dependencies.",
      ],
    },
    {
      sectionTitle: 'Using the <code>useEffect</code> hook',
      sectionSource:
        '/src/markdowns/06_Handling_side_effects/Using_the_useEffect_hook.html',
      highlights: {
        highlight2: ['<code>useEffect</code>'],
      },
      tooltips: [
        'Sometimes, we want to run some additional code after React has updated the DOM. What does <code>useEffect()</code> do? By using this hook, you tell React that your component needs to do something after render.',
        'The <code>useEffect()</code> function is called with two arguments. The first argument is a function that should be executed after every component evaluation, if the specified dependencies changed. The specified dependencies are the second argument that you pass in <code>useEffect()</code>.',
        'Therefore, in that first function you can put any side effect code, and that code will then only execute when the dependencies specified by you changed, and not when the component re-renders.',
        '<code>useEffect()</code> will run no matter what only when your app is run for the first time. After your app run for the first time, <code>useEffect()</code> will only executed if the dependencies changes.',
        '<code>useEffect()</code> function runs after every component render cycle, not before it, not during it, but after it.',
      ],
    },
    {
      sectionTitle:
        'What to add & not to add as dependencies to <code>useEffect()</code>',
      sectionSource:
        '/src/markdowns/06_Handling_side_effects/What_to_add_&_not_to_add_as_dependencies_to_useEffect.html',
      tooltips: [
        "You add as dependencies what you're using in your <code>useEffect</code> function.",
        "Does <code>useEffect()</code> run after every render? Yes! By default, if you don't pass an array of dependencies, <code>useEffect()</code> runs both after the first render and after every component render cycle.",
      ],
    },
    {
      sectionTitle:
        'Adding nested properties as dependencies to <code>useEffect()</code>',
      sectionSource:
        '/src/markdowns/06_Handling_side_effects/Adding_nested_properties_as_dependencies_to_useEffect.html',
      highlights: {
        highlight1: ['nested properties as dependencies'],
      },
      tooltips: [
        'We used object destructuring to add object properties as dependencies to <code>useEffect()</code>.',
        'The key thing is NOT that we use destructuring, but that we pass specific properties instead of the entire object as a dependency.',
      ],
    },
  ],
};

const section8 = {
  title:
    '<p class="card__title--1">Section 8</p> <p class="card__title--2">Behind the scenes of React & <br>optimization techniques</p>',
  sections: [
    {
      sectionTitle: 'How React really works',
      sectionSource:
        '/src/markdowns/07_React_&_optimization_techniques/How_React_really_works.html',
      tooltips: [
        'React.js only cares about components, props, state and context. On the other hand, ReactDOM is your interface to the web, ReactDOM is responsible for bringing something onto the screen, which the user is then able to see.',
        'Whenever props, state or context changes, components that use these concepts are updated by React, and React checks whether that component now wants to draw something new onto the screen, and if that should be the case, React will let ReactDOM know about that, so that ReactDOM is able to bring that new screen, that new component, that new output to the screen.',
        'React is concerned about components and what React in the end does is, it uses a concept called the virtual DOM. With the help of virtual DOM, React determines how the component tree currently looks like and what it should look like, for example, after a state update. And that information is then handed off to ReactDOM which now knows about the differences and which then knows how it should manipulate the real DOM to match that virtual DOM, that virtual snapshot React derived for your component trees.',
        'Whenever state, props or a context of a component changes, that component function is re-executed, that component is re-evaluated by React. But it is worth noting that re-evaluating a component is not the same as re-rendering the DOM.',
        'Just because a component function is re-executed by React does not mean that the respective part of the actual real DOM is re-rendered or re-evaluated. Instead we have to differentiate between our component part (our React part) and the real DOM.',
      ],
    },
    {
      sectionTitle:
        'Preventing unnecessary re-evaluations with <code>React.memo()</code>',
      sectionSource:
        '/src/markdowns/07_React_&_optimization_techniques/Preventing_unnecessary_reevaluations_with_React_memo.html',
      highlights: {
        highlight2: ['<code>React.memo()</code>'],
      },
      tooltips: [
        '<code>React.memo()</code> lets you skip re-rendering a component when its props are unchanged. It help you optimize functional components to avoids unnecessary components re-rendering.',
        '<code>React.memo()</code> only work for functional components.',
        'React normally re-renders a component whenever its parent re-renders. With <code>React.memo()</code> you can create a component that React will not re-render when its parent re-renders so long as its new props are the same as the old props.',
        'If you wrap a component with <code>React.memo()</code>, if that wrapped component is not re-evaluated, its children components are also not re-evaluated.',
        '<code>React.memo()</code> can be a great tool if you have a huge component tree with a lot of child components, and on a high level in the component tree you can avoid unnecessary re-render cycles for the entire branch of the component tree, because even children components of the parent component that is wrapped by <code>React.memo()</code> will not be re-executed. With the help of <code>React.memo()</code> you can cut off entire branches of unnecessary re-evaluations.',
        "You just don't wanna wrap every component with <code>React.memo()</code>, instead you wanna pick some key parts in your component tree which allows you to cut off an entire branch of child components, that's way more effective than doing this on every child component.",
        'A component that receives through props reference values (arrays, objects or functions) will be re-evaluated although you wrap that component with <code>React.memo()</code>.',
      ],
    },
    {
      sectionTitle:
        'Preventing function re-creation with <code>useCallback()</code>',
      sectionSource:
        '/src/markdowns/07_React_&_optimization_techniques/Preventing_function_recreation_with_useCallback.html',
      highlights: {
        highlight2: ['<code>useCallback()</code>'],
      },
      tooltips: [
        'When you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components. To cache a function between re-renders of your component, wrap its definition into the <code>useCallback</code> hook.',
        '<code>useCallback</code> is a hook that allows us to basically store a function across component executions.',
        "By wrapping a function in <code>useCallback</code>, you ensure that it's the same function between the re-renders (until dependencies change). You don't have to wrap a function in <code>useCallback</code> unless you do it for some specific reason.",
      ],
    },
    {
      sectionTitle: '<code>useCallback()</code> and its dependencies',
      sectionSource: '',
    },
    {
      sectionTitle: 'A first summary',
      sectionSource:
        '/src/markdowns/07_React_&_optimization_techniques/A_first_summary.html',
    },
    {
      sectionTitle: 'Optimizing with <code>useMemo()</code>',
      sectionSource:
        '/src/markdowns/07_React_&_optimization_techniques/Optimizing_with_useMemo.html',
      highlights: {
        highlight2: ['<code>useMemo()</code>'],
      },
      tooltips: [
        '<code>useMemo</code> is a React hook that lets you cache the result of a calculation between re-renders until its dependencies change.',
        'You will use <code>useMemo</code> far less often than you use <code>useCallback</code> because memoizing functions is much more useful and you need that more often than memoizing data. You essentially wanna memoize data if it would be performance-intensive to recalculate something based on it.',
      ],
    },
  ],
};

const section9 = {
  title:
    '<p class="card__title--1">Section 9</p> <p class="card__title--2">An alternative way Of building components: <br>Class-based components</p>',
  sections: [
    {
      sectionTitle: 'Introducing error boundaries',
      sectionSource:
        '/src/markdowns/08_Class-based_Components/Introducing_error_boundaries.html',
      highlights: {
        highlight2: ['error boundaries'],
      },
      tooltips: [
        'Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.',
        "Error boundaries work like a JavaScript <code>catch {}</code> block, but for components. Only class components can be error boundaries. In practice, most of the time you'll want to declare an error boundary component once and use it throughout your application.",
        "Note that error boundaries only catch errors in the components below them in the tree. An error boundary can't catch an error within itself.",
      ],
    },
  ],
};

const section10 = {
  title:
    '<p class="card__title--1">Section 10</p> <p class="card__title--2">Building custom React Hooks</p>',
  sections: [
    {
      sectionTitle: 'What are "custom Hooks"?',
      sectionSource:
        '/src/markdowns/09_React_custom_Hooks/What_are_Custom_Hooks.html',
      highlights: {
        highlight2: ['"custom Hooks"'],
      },
      tooltips: [
        'Custom hooks are just regular functions, just as the built-in hooks like <code>useState</code>, but they are functions which can contain stateful logic. You can build custom hooks to <i>outsource stateful logic into reusable functions</i>.',
        'Unlike regular functions, custom hooks can use other React hooks, including other custom hooks, and they can, therefore, also leverage React state managed with <code>useState</code> or <code>useReducer</code>; they can access <code>useEffect</code> and so on.',
        'Custom Hooks are mechanism for <i>reusing logic</i>, just as regular functions are, with the special thing that in these custom hook functions you can use React hooks and other hooks.',
        'Custom Hooks let you <i>share logic between components</i>.',
        "Custom Hooks must be named starting with 'use' followed by a capital letter.",
        'Custom Hooks only <i>share stateful logic, not state itself</i>.',
        'All Hooks re-run every time your component re-renders.',
      ],
    },
  ],
};

const section11 = {
  title:
    '<p class="card__title--1">Section 11</p> <p class="card__title--2">Working with forms & user inputs</p>',
  sections: [
    {
      sectionTitle: "What's so complex about Forms?",
      sectionSource:
        '/src/markdowns/10_Working_with_forms_&_user_inputs/What_is_so_complex_about_forms.html',
    },
    {
      sectionTitle:
        '200. Dealing with form submission & getting user input values',
      sectionSource: '',
    },
    {
      sectionTitle: '201. Adding basic validation',
      sectionSource: '',
    },
    {
      sectionTitle: '202. Providing validation feedback',
      sectionSource: '',
    },
    {
      sectionTitle: '204. React to lost focus',
      sectionSource: '',
    },
    {
      sectionTitle: '206. Managing The overall form validity',
      sectionSource: '',
    },
    {
      sectionTitle: '207. Adding a custom input Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '208. Re-using the custom Hook',
      sectionSource: '',
    },
  ],
};

const section12 = {
  title:
    '<p class="card__title--1">Section 20</p> <p class="card__title--2">Building a Multi-Page SPA with React Router</p>',
  sections: [
    {
      sectionTitle: 'Routing: Multiple Pages in Single-Page Applications',
      sectionSource:
        '/src/markdowns/12_React_Router/Routing_multiple_pages_in_single-page_applications.html',
      tooltips: [
        'In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.',
        `React Router enables <b>"client side routing"</b>. Client side routing allows your app to <i>update the URL</i> from a link click <i>without making another request for another document from the server</i>. Instead, your app can immediately render some new UI and make data requests with <code>fetch</code> to update the page with new information.
        <br>This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.`,
        'What Routing is all about: <i>different <u>URL paths</u> load different content on the screen</i>. Instead of loading new HTML files from the backend, with React Router we add some client-side code that simply <i>watches the URL</i> and then <i>loads a different React component when that URL changes</i>.',
        'Client side routing is enabled by creating a Router and linking/submitting to pages with <code><<span>Link</span>></code> and <code><<span>Form</span>></code>.',
      ],
    },
    {
      sectionTitle: 'Installing React Router',
      sectionSource: '',
      tooltips: ['<code>npm install react-router-dom</code>'],
    },
    {
      sectionTitle:
        'Defining & using routes: <code>createBrowserRouter()</code>, <code><<span>RouterProvider</span>></code> component, <code>path</code> & <code>element</code> property',
      sectionSource:
        '/src/markdowns/12_React_Router/Defining_&_using_routes.html',
      highlights: {
        highlight2: [
          '<code>createBrowserRouter()</code>',
          '<code><<span>RouterProvider</span>></code>',
          '<code>path</code>',
          '<code>element</code>',
        ],
      },
      tooltips: [
        `There are <b>two ways of defining routes</b>:
        <br>1. Using <i><code>createBrowserRouter()</code></i> and pass as an argument an array with single/multiple JavaScript objects, and that objects will describing the route/s characteristics;
        <br>2. In older versions of <code>react-router-dom</code> you are defining routes with <i><code>createRoutesFromElements()</code></i> function and <i><code><<span>Route</span>></code></i> component.`,
        'You can use a router in your JSX markup by importing the <i><code>RouterProvider</code> component</i> from the <code>react-router-dom</code> package.',
      ],
    },
    {
      sectionTitle:
        'Navigating between pages with <code><<span>Link</span>></code> component',
      sectionSource:
        '/src/markdowns/12_React_Router/Navigating_between_pages_with_link_component.html',
      highlights: {
        highlight1: ['Navigating between pages'],
        highlight2: ['<code><<span>Link</span>></code>'],
      },
      tooltips: [
        `When the URL changes we call that a "navigation". There are <i>two ways to navigate in React Router</i>:
        <br>- <b><code><<span>Link</span>></code></b> component
        <br>- <b><code>useNavigate</code></b> hook`,
        'A <code><<span>Link</span>></code> is an element that lets the user navigate to another page by clicking or tapping on it, without sending a new HTTP request.',
        `In <code>react-router-dom</code>, a <code><<span>Link</span>></code> renders an accessible <<span>a</span>> element with a real <code>href</code> that points to the resource it's linking to. Instead of setting a path with the <code>href</code> attribute (like you do for <<span>a</span>> tag), <i><code><<span>Link</span>></code> component uses a <code>to</code> prop to setting a path: <code><<span>Link to="/path"</span> /></code></i>.`,
        `<b>Absolute & relative links path</b>
        <br>If a <code><<span>Link</span>></code> path starts with <code>/</code>, it is an absolute path. Paths that don't start with <code>/</code> are relative paths. <i>A link that have an absolute path it's added directly after the domain name</i>, not after the currently active path (the route path they are rendered in). <i>Relative links are always relative to the route path they are <u>rendered in</u></i>, not to the full URL.`,
        `<b>The <code>relative</code> prop</b>
        <br>When using the <code><<span>Link</span>></code> component, you also have a special <code>relative</code> prop which you can add to it. The <code>relative</code> prop can be set to one of two values: <code>path</code> or <code>route</code>. <i>With these values you control whether the segment defined on <code><<span>Link</span>></code> is added relative to the <u>the route path they are rendered in</u> or to the <u>currently active path in the browser URL</u></i>.`,
        `<b>The <code>..</code> relative path</b>
        <br>If you have a relative path, like <code><<span>Link to=".."</span>></code> which simply goes back, then <i>the <code>relative</code> prop can be used to control the behavior of React Router. By default, the <code>..</code> in relative links <u>traverse the route hierarchy</u>, not the URL segments. Adding <code>relative="path"</code> allows you to <u>traverse the path segments</u> instead</i>.`,
      ],
    },
    {
      sectionTitle:
        'Working with <code><<span>NavLink</span>></code> component',
      sectionSource:
        '/src/markdowns/12_React_Router/Working_with_NavLink_component.html',
      highlights: {
        highlight2: ['<code><<span>NavLink</span>></code>'],
      },
      tooltips: [
        "Sometimes you might want to see which link is currently active when you're on a page. To support links that should show you whether they active or not, <code>react-router-dom</code> has an alternative to the <code><<span>Link</span>></code> component, and that is the <code><<span>NavLink</span>></code> component.",
        'A <code><<span>NavLink</span>></code> is a special kind of <code><<span>Link</span>></code> that knows whether or not it is "active".',
        'With <code><<span>NavLink</span>></code> you can <i>add classes or inline-styles <u>conditionally</u>, based on whether a link is active or not</i>.',
        'The <code>className</code> prop in <code><<span>NavLink</span>></code> is different from the regular <code>className</code> prop. The <code>className</code> in <code><<span>NavLink</span>></code> receives a function, and with that function you can set conditionally a class or inline-style on the <code><<span>NavLink</span>></code> element.',
        '<i>By default, an "active" class is added to a <code><<span>NavLink</span>></code> component when it is active.</i>',
      ],
    },
    {
      sectionTitle:
        'Navigating programmatically with <code>useNavigate</code> hook',
      sectionSource:
        '/src/markdowns/12_React_Router/Navigating_programmatically_with_useNavigate_hook.html',
      highlights: {
        highlight1: ['Navigating programmatically'],
        highlight2: ['<code>useNavigate</code>'],
      },
      tooltips: [
        "Up until now you only use <b>imperative routing</b>. You allow users to navigate between your app pages by providing links which can be clicked. This is the default way of providing navigation to users, but it's not the only way.",
        `When the URL changes we call that a "navigation". There are <i>two ways to navigate in React Router</i>:
        <br>- <b><code><<span>Link</span>></code></b> component
        <br>- <b><code>useNavigate</code></b> hook`,
        'In some situations, for example maybe because some form was submitted or because some timer expired, <i>you as a programmer (not the user) might want to trigger a navigation action from inside your React code</i>, and you can do this by using the <code>useNavigate</code> hook provided by <code>react-router-dom</code>.',
        'The <code>useNavigate</code> hook <i>returns a function that allows you, the programmer, to change the URL whenever you want, so <u>programmatically</u></i>.',
        'You should have a good reason to use <code>useNavigate</code> instead of <code><<span>Link</span>></code>.',
      ],
    },
    {
      sectionTitle:
        'Layouts & nested routes: <code>children</code> property & <code><<span>Outlet</span>></code> component',
      sectionSource:
        '/src/markdowns/12_React_Router/Layouts_&_nested_routes.html',
      highlights: {
        highlight1: ['Layouts & nested routes'],
        highlight2: [
          '<code>children</code>',
          '<code><<span>Outlet</span>></code>',
        ],
      },
      tooltips: [
        'You can nest routes in other route with the help of <code>children</code> property.',
        'The <code><<span>Outlet/</span>></code> component specifies <i>where the content of the child routes should be rendered</i>.',
        '<i>An <code><<span>Outlet/</span>></code> should be used in parent route elements to render their child route elements</i>. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.',
      ],
    },
    {
      sectionTitle:
        'Showing error pages with <code>errorElement</code> property & <code>useRouteError</code> hook',
      sectionSource:
        '/src/markdowns/12_React_Router/Showing_error_pages_with_errorElement_and_useRouteError.html',
      highlights: {
        highlight1: ['error pages'],
        highlight2: ['<code>errorElement</code>', '<code>useRouteError</code>'],
      },
      tooltips: [
        `When you enter a URL that doesn't exist or when exceptions/errors are thrown in "loader"/"action" functions or component rendering, the <code>react-router-dom</code> package will automatically generate an error.`,
        'With the <code>errorElement</code> property in your route definitions, you can specify a <i><b>fallback page component</b> that will be rendered if an error is created</i>.',
        '<i>When a route does not have an <code>errorElement</code>, errors will <b>bubble up</b> through parent routes</i>.',
        "<i>Put an <code>errorElement</code> at the top of your route tree and handle nearly every error in your app in <b>one place</b></i>. Or, put them on all of your routes and allow the parts of the app that don't have errors to continue to render normally. This gives the user more options to recover from errors instead of a hard refresh.",
        `<b>Throwing errors manually</b>
        <br>While <code>errorElement</code> handles unexpected errors, it can also be used to handle exceptions you expect. Particularly in "loader"/"action" function, where you work with external data not in your control, you can't always plan on the data existing, the service being available, or the user having access to it. <i>You can throw anything from a "loader"/"action" function just like you can return anything: responses, errors, or plain objects</i>.
        `,
        `<b>Throwing Responses</b>
        <br>While you can throw anything and it will be provided back to you through <code>useRouteError</code>, if you throw a <code>Response</code>, <i>React Router will automatically parse the response data before returning it to your components</i>. Coupled with <code>json</code>, you can easily throw responses with some data and render different cases in your boundary. This makes it possible to create a general error boundary, usually on your root route, that handles many cases.
        `,
        '<i>Inside of an <code>errorElement</code>, the <code>useRouteError</code> hook returns anything thrown during a "loader"/"action" function or rendering</i>.',
      ],
    },
    {
      sectionTitle:
        'Defining dynamic path segments (path parameter) & using them with <code>useParams</code> hook',
      sectionSource:
        '/src/markdowns/12_React_Router/Defining_&_using_dynamic_path_segments.html',
      highlights: {
        highlight1: ['dynamic path segments'],
        highlight2: ['<code>useParams</code>'],
      },
      tooltips: [
        'Dynamic path segments <code>:</code> (path parameters) helps us to always <i>render the same component for different paths (dynamic paths)</i>.',
        'You add a path parameter by adding a <code>:</code> and then any identifier of you choice.',
        "The <code>:</code> signals to 'react-router-dom' that the part after the <code>:</code> is dynamic. You could thereafter have more hard coded segments if you needed to, or you can have multiple dynamic segments in one route path.",
        "With <code>useParams</code> hook we can <i>get the dynamic path data that's encoded in the URL</i>.",
        'The <code>useParams</code> hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <code><<span>Route path</span>></code>. Child routes inherit all params from their parent routes',
      ],
    },
    {
      sectionTitle: 'Defining & using optional path segments',
      sectionSource:
        '/src/markdowns/12_React_Router/Defining_&_using_optional_path_segments.html',
      highlights: {
        highlight1: ['optional path segments'],
      },
    },
    {
      sectionTitle: 'Understanding absolute & relative paths',
      sectionSource:
        '/src/markdowns/12_React_Router/Understanding_absolute_&_relative_paths.html',
      highlights: {
        highlight1: ['absolute & relative paths'],
        highlight2: ['"relative"'],
      },
      tooltips: [
        "When we defining <u>routes</u>, we define the <u>paths</u> for which that routes should be active. <i>If a path starts with <code>/</code>, it is an absolute path. Paths that don't start with <code>/</code> are relative paths</i>.",
        'All <b>absolute child route paths</b> must start with the combined path of all its parent routes.',
        'When defining <b>child routes as relative paths</b>, this means that the <i>child routes paths defined as relative paths are <u>appended after the path of the wrapper parent route path</u></i>. So if we have a child route with a relative path, then React Router will take a look at the path of the parent route and append the child route path after the parent route path. <i>Children relative route paths are relative to the path defined in theirs parent route definition</i>.',
      ],
    },
    {
      sectionTitle: 'Working with index routes',
      sectionSource:
        '/src/markdowns/12_React_Router/Working_with_index_routes.html',
      highlights: {
        highlight1: ['index Routes'],
      },
      tooltips: [
        'Index routes can be used for children routes that have the same path as the parent route.',
        "It is quite common that you might have a wrapping layout route and then <i>you have one child route that should be loaded for the parent's route path. Index routes render in their parent route's <code><<span>Outlet/</span>></code> at the parent route's path</i>.",
        'Index routes allows you to define the <i><u>default route</u> that should be loaded for a child route if the parent route path is active</i>.',
      ],
    },
    {
      sectionTitle:
        'Data fetching with a "loader" function & <code>useLoaderData()</code>',
      sectionSource:
        '/src/markdowns/12_React_Router/Data_fetching_with_a_loader.html',
      highlights: {
        highlight1: ['Data fetching'],
        highlight2: ['"loader" function', '<code>useLoaderData()</code>'],
      },
      tooltips: [
        'On each route you can define a "loader" function to <i><u>provide data</u> to the route element <u>before it renders</u></i>.',
        'With the help of a "loader" function you move all the fetch logic that you have in a component in that "loader" function, and this process make the component way leaner and easier to reason about.',
        'To get access to the data returned by a "loader" function for a specific page, you can import <code>useLoaderData</code> from <code>react-router-dom</code>. <i><code>useLoaderData</code> always get the final data returned by the "loader" function</i>, even if that "loader" function is an async function.',
        `You can access "loader" function data with the help of <code>useLoaderData</code> in <i>any component on the <u>same level or lower level</u> than the component where you added the "loader" function</i>, so the route on which you added the "loader" function. <i>You can use <code>useLoaderData</code> in the element that's assigned to a route and in all components that might be used inside that element</i>.`,
        `<b>Where should "loader" function code be stored?</b>
        <br><i>Is common pattern that you actually put the "loader" function code into your component file where you need it</i>, to be more precise in the page component file where you want to add the "loader" function.`,
        `<b>When are "loader" functions executed?</b>
        <br>Data fetching is initiated as soon as you initiate the route transition (URL changes). By default, React Router will wait for the data to be fetched, so for the "loader" function to be finished, and <i>only when the "loader" function is finished the page component will be rendered.</i>.`,
        `<b>Returning Responses in a "loader" function</b>
        <br>You don't need to manually extract the data from a Response, instead <i>you can just return your Response and <code>useLoaderData</code> will automatically give you the data that's part of the Response</i>.`,
        `<b>Which kind of code goes into a "loader" function?</b>
        <br><i>You can use any browser APIs or vanilla JavaScript code in your "loader" function</i>. What you can't use in your "loader" function is, for example, React Hooks like <code>useState</code>. That doesn't work because those Hooks are only available in React components and the "loader" function is not a React component, but that's the only limitation.`,
      ],
    },
    {
      sectionTitle:
        'Dynamic routes & "loader" function object parameter with <code>request</code> & <code>params</code> properties',
      sectionSource:
        '/src/markdowns/12_React_Router/Dynamic_Routes_&_loader_function.html',
      highlights: {
        highlight1: ['"loader" function object parameter'],
        highlight2: ['<code>request</code> & <code>params</code>'],
      },
      tooltips: [
        'Within a "loader" function you can <i>get access to the route parameters</i> because when the React Router will call the "loader" function passes to it an <u>object parameter</u> that contains two important pieces of data which contains a <code>request</code> object and a <code>params</code> object: <code>function loader({request, params}) { ... }</code>.',
        '<b>The <code>request</code> object</b> parameter in a "loader" function could be used to <i>access the URL</i> to, for example, extract query parameters or anything like that.',
        '<b>The <code>params</code> object</b> <i>contains all your route parameters</i>. With it, you can get access to all the route parameter values as you could do it with help of <code>useParams</code> hook, but <code>useParams</code> hook could only be used inside a component function, not inside a "loader" function.',
      ],
    },
    {
      sectionTitle:
        'The <code>useRouteLoaderData()</code> hook & accessing data from other routes',
      sectionSource:
        '/src/markdowns/12_React_Router/useRouteLoaderData_&_accessing_data_from_other_Routes.html',
      highlights: {
        highlight2: ['<code>useRouteLoaderData()</code>'],
      },
      tooltips: [
        `You can use the <i><u>nested routes</u></i> feature not just as a wrapper layout component, but also to <i><u>share a "loader" function</u></i> to parent/child routes. Because as you learned, you can access "loader" function data in any component that's on the same level or a lower level than the route where the "loader" function is added.`,
        'To access the data returned by the "loader" function, instead of using <code>useLoaderData</code> you need to use a different hook which is called <code>useRouteLoaderData</code>. This hook works almost like <code>useLoaderData</code> but it takes a <i>route ID as an argument</i> (the ID you assign to the parent route).',
        `<i>With the <code>useRouteLoaderData</code> you can get access to the data of a higher level "loader" function from a route that doesn't have a "loader" function. Now you can reuse the same "loader" function across <u>multiple routes which all need the same data</u></i>.`,
        'The <code>useRouteLoaderData</code> hook makes the data at any currently rendered route available <i>anywhere in the tree</i>. This is useful for components deep in the tree needing data from routes much farther up, as well as parent routes needing the data of child routes deeper in the tree.',
        '<i>The only data available is the routes that are <u>currently rendered</u></i>. If you ask for data from a route that is not currently rendered, the hook will return <code>undefined</code>.',
      ],
    },
    {
      sectionTitle:
        'Error handling within a "loader" function: <code>json()</code> & <code>useRouteError</code>',
      sectionSource:
        '/src/markdowns/12_React_Router/Error_handling_within_a_loader_function.html',
      highlights: {
        highlight2: ['<code>json()</code>'],
      },
      tooltips: [
        'You can <code>throw</code> in your "loader" function to break out of the current call stack (stop running the current code) and React Router will start over down the "error path". <i>When you <code>throw</code> in a "loader" function something special happens: React Router will simply render the closest <code>errorElement</code></i>.',
        `<b>Throwing <code>Response</code> and extracting error data with <code>useRouteError</code> hook</b>
        <br>- To differentiate between different errors like <code>404</code> or <code>500</code>, you can throw in your "loader" function a <code>Response</code> object and you can include some data into that <code>Response</code>. You thrown an <code>Response</code> object with some data attached to it because <i>you can actually get hold of the data that's being thrown as an error inside of the component that's being rendered as an <code>errorElement</code></i> and for that <code>react-router-dom</code> gives you a hook called <code>useRouteError</code>. <i>Inside of an <code>errorElement</code>, this hook returns anything thrown during an "loader"/"action" function or rendering</i>.
        <br>- The <code>useRouteError</code> return a object, and the returned object depends on whether you threw a <code>Response</code> or any other kind of object or data.
        `,
        `<b>The <code>json()</code> utility function</b>
        <br>- Instead of creating your <code>Response</code> manually and return it, you can return the result of calling <code>json</code>. <i><code>json</code> is a function that creates a <code>Response</code> object that includes data in the json format</i>.
        <br>- With the <code>json</code> function you don't just have to type less code, but in the place where you use that <code>Response</code> data you also <i>don't have to parse the <code>json</code> format manually</i>. Instead, you can simplify the code because the parsing will now be done by React Router for you.
        `,
      ],
    },
    {
      sectionTitle:
        'Reflecting the current navigation state in the UI with <code>useNavigation</code> hook',
      sectionSource:
        '/src/markdowns/12_React_Router/Reflecting_the_current_navigation_state_in_the_UI_with_useNavigation_hook.html',
      highlights: {
        highlight2: ['<code>useNavigation</code>'],
      },
      tooltips: [
        "React Router gives us a <code>useNavigation</code> hook which we can use to <i>check the current route transitions state</i>, so to find out if a transition has been initiated and we're currently still waiting for data to arrive, or if we're done.",
        "It's important to undestand that <i><code>useNavigation</code> won't be called on the page which you're transitioning to</i>, but instead on some page or a component which is already visible on the screen when the transition is started.",
      ],
    },
    {
      sectionTitle:
        'Submitting forms & send data with "action" function and <code><<span>Form</span>></code> component',
      sectionSource:
        '/src/markdowns/12_React_Router/Submitting_forms_and_send_data_with_action_function_and_Form_component.html',
      highlights: {
        highlight1: ['Submitting forms & send data'],
        highlight2: ['"action" function', '<code><<span>Form</span>></code>'],
      },
      tooltips: [
        'Just as you can add <i>"loader" functions to <u>load</u> data</i>, you can also add <i>"action" functions to <u>send</u> data</i>. Like the "loader" property, "action" property wants a function as a value.',
        `Just like "loader" function, "action" functions:
        <br>- receives an object as parameter with <code>params</code> & <code>request</code> properties;
        <br>- you can return anything from your "action" functions, even Responses;
        <br>- you can <code>throw</code> in your "action" function to break out of the current call stack
        `,
        `The great thing about React Router is that it makes <i>handling form submissions</i> a brace and it helps with <i>extracting data from that form</i>. For that, you should go to the component that holds the form and make some changes to it:
        <br>- all your form inputs must have the <code>name</code> attribute;
        <br>- replace the <<span>form</span>> element with the special <<span>Form</span>> component which is provided by <code>react-router-dom</code>;
        <br>- add to the <<span>Form</span>> component the <code>method</code> attribute and optionally the <code>action</code> attribute.
        `,
        'When the form is submitted, the <b><<span>Form</span>> component will <u>trigger the "action" function</u></b>.',
        `To extract and use the data from your <<span>Form</span>> component in you "action" function you need to use the <code>request</code> object with it <code>.formData()</code> method and then the <code>.get()</code> method.
        <br>- <i>The <code>.formData()</code> method return a Promise, so you need to use the <code>await</code> keyword</i>;
        <br>- The <code>.get()</code> method is called to get access to the different input field values that were submitted.`,
        'Typically, when submitting a form what you want to happen is that you navigate the user away to a different page after successfully submitting the form. To do that, you can return in your "action" function the result of calling <code>redirect()</code>.',
      ],
    },
    {
      sectionTitle:
        'Submitting data programmatically with <code>useSubmit</code> hook',
      sectionSource:
        '/src/markdowns/12_React_Router/Submitting_data_programmatically_with_useSubmit.html',
      highlights: {
        highlight1: ['Submitting data programmatically'],
        highlight2: ['<code>useSubmit</code>'],
      },
      tooltips: [
        'The typical and <i>default way</i> of triggering an "action" function is by using the <<span>Form</span>> component, but you can trigger an "action" function <i>programatically</i> with <code>useSubmit</code> hook.',
        'Just as we can navigate programmatically, we can also <i><u>submit data</u> and <u>trigger an "action" function</u> programmatically</i> with the <code>useSubmit</code> hook imported from <code>react-router-dom</code>.',
        "The <code>useSubmit()</code> function is the <i>imperative version of <<span>Form</span>> component</i> that let's you, the programmer, submit a form instead of the user.",
        `To the <code>useSubmit</code> function you can pass two arguments:
        <br>- submit <i>target</i>;
        <br>- submit <i>options</i>;`,
        `<b>The submit target</b>
        <br>The first argument to submit accepts many different values. You can submit any form or form input element, or you can submit <code>FormData</code>. The first argument may be the <i>data that you wanna submit</i>, and that data will automatically be wrapped in a <<span>Form</span>> data object, which you then could extract with the <code>.formData()</code> method.`,
        `<b>The submit options</b>
        <br>The second argument is a set of options that map directly to <i>form submission attributes</i>. This argument allows you to basically set <i>the same values you could set on a <<span>Form</span>> component</i>, for example the <code>method</code> or the <code>action</code> if your "action" function would be defined on a different route path.`,
      ],
    },
    {
      sectionTitle:
        'Updating the UI state based on the submission status with <code>useNavigation</code> hook',
      sectionSource:
        '/src/markdowns/12_React_Router/Updating_the_UI_state_based_on_the_submission_status.html',
      tooltips: [
        'You can use the <code>useNavigation</code> hook to <i>update the UI based on different navigation state</i>.',
        "It's important to undestand that <i><code>useNavigation</code> won't be called on the page which you're transitioning to</i>, but instead on some page or a component which is already visible on the screen when the transition is started.",
      ],
    },
    {
      sectionTitle:
        'Validating user input & outputting validation errors with <code>useActionData</code> hook',
      sectionSource:
        '/src/markdowns/12_React_Router/Validating_user_input_&_outputting_validation_errors_with_useActionData.html',
      highlights: {
        highlight2: ['<code>useActionData</code>'],
      },
      tooltips: [
        "<code>useActionData</code> hook does the same thing that <code>useLoaderData</code> hook. The most common use-case for this hook is <i>form validation errors</i>. If the form isn't right, you can return the errors and let the user try again.",
        'Like in a "loader" function, the Response that you return from your "action" function will be automatically parsed by the <code>useActionData</code> for you.',
      ],
    },
    {
      sectionTitle:
        'Reusing "action" functions via <code>request.method</code>',
      sectionSource:
        '/src/markdowns/12_React_Router/Reusing_action_functions_via_request_method.html',
      highlights: {
        highlight1: ['Reusing "action" functions'],
      },
    },
    {
      sectionTitle: 'Working with <code>useFetcher()</code>',
      sectionSource:
        '/src/markdowns/12_React_Router/Working_with_useFetcher.html',
      highlights: {
        highlight2: ['<code>useFetcher()</code>'],
      },
      tooltips: [
        'In HTML/HTTP, <i>data mutations and loads are <u>modeled with navigation</u></i>. Sometimes you want to <i>call a "action"/"loader" function <u>outside of navigation</u> (without changing the URL)</i>.',
        `Many interactions with the server aren't navigation events. The <code>useFetcher</code> hook lets you <i>plug your UI into your "action"/"loader" functions without navigating</i>.`,
        `<code>useFetcher</code> interacts with route "action"/"loader" function without causing a navigation. It is great for any interaction that stays on the same page.
        <br>The <code>useFetcher</code> hook is the tool you should use if you wanna <i>interact with some "action"/"loader" function <u>without transitioning</u></i>, so if you wanna send your requests behind the scenes without triggering any route changes. Use it if you wanna <i>trigger a "loader"/"action" function without actually loading the route's <code>element</code> to which that "loader"/"action" function belongs</i>.`,
        'The <code>useFetcher</code> hook, when executed, <i>returns an object</i> that includes a bunch of useful properties and methods.',
        `<b><code><<span>fetcher.Form</span>></code></b> component: <<span>fetcher.Form</span>> is just like <<span>Form</span>> component, except it <i>doesn't cause a navigation</i>. <<span>fetcher.Form</span>> will actually <i>still trigger an "action" function but it will <u>not initialize a route transition</u></i>. So <<span>fetcher.Form</span>> should basically be used whenever you wanna trigger an "action" function, or also a "loader" function with help of the <code>fetcher.load()</code> method, <i>without actually navigating to the page to which the "loader"/"action" function belongs</i>.
        <br>With the default <<span>Form</span>> component you will trigger the route "action" function BUT you also load the route element component. With <<span>fetcher.Form</span>> you ONLY trigger the "action" function WITHOUT loading the route element component, because with <<span>fetcher.Form</span>> you don't transition, you don't move to a different route.`,
        `<b><code>fetcher.data</code></b>: the returned data from the "action"/"loader" function is stored in <code>fetcher.data</code>. Once the data is set, it persists on the fetcher even through reloads and resubmissions`,
        `<b><code>fetcher.state</code></b>: You can know the state of the fetcher with <code>fetcher.state</code>. It will be one of:
        <br>- idle;
        <br>- submitting;
        <br>- loading.
        `,
        `<b><code>fetcher.load()</code></b>: loads data from a route "loader" function.`,
        `<b><code>fetcher.submit()</code></b>: the imperative version of <<span>fetcher.Form</span>>. If a user interaction should initiate the fetch, you should use <<span>fetcher.Form</span>>. But if you, the programmer are initiating the fetch (not in response to a user clicking a button, etc.), then use this function.`,
      ],
    },
    {
      sectionTitle:
        'Deferring data fetching with <code>defer()</code> function, <code><<span>React.Suspense</span>></code> & <code><<span>Await</span>></code> components',
      sectionSource:
        '/src/markdowns/12_React_Router/Deferring_data_fetching_with_defer.html',
      highlights: {
        highlight1: ['Deferring data fetching'],
        highlight2: [
          '<code>defer()</code>',
          '<code><<span>React.Suspense</span>></code>',
          '<code><<span>Await</span>></code>',
        ],
      },
      tooltips: [
        'React Router provides a feature that allows you to <i>defer when data is loaded</i>.',
        'Sometimes you wanna <i>load a page component with some data <u>before fetching the data</u></i>, and show some parts of the that page component already until all the data is fetched. We can defer data loading and tell React Router that we actually wanna render a page component already, even though the data is not fully there yet.',
        `<b>The <code>defer()</code> function</b>
        <br>- allows you to <i>defer values returned from "loader" functions by passing promises instead of resolved values</i>
        <br>- to <code>defer()</code> function you <i>pass an <u>object</u></i>. In that object you bundle all the different HTTP requests you might have going on a page component
        `,
        `<b>The <code><<span>Await</span>></code> component</b>
        <br>- used to <i>render <u>deferred values</u> with <u>automatic error handling</u></i>
        <br>- <code><<span>Await</span>></code> children can either be React elements or a function
        <br>- <code><<span>Await</span>></code> expects to be rendered inside of a <code><<span>React.Suspense</span>></code> or <code><<span>React.SuspenseList</span>></code> parent to enable the fallback UI
        `,
        `<b>The <code><<span>Suspense</span>></code> component</b>
        <br>- lets you <i>display a fallback until its children have finished loading</i>
        `,
      ],
    },
    {
      sectionTitle:
        'Controlling which data should be deferred and which data should be loaded before navigation',
      sectionSource:
        '/src/markdowns/12_React_Router/Controlling_which_data_should_be_deferred.html',
    },
    {
      sectionTitle:
        'More about the <code><<span>Await</span>></code> component',
      sectionSource:
        '/src/markdowns/12_React_Router/More_about_the_Await_component.html',
    },
    {
      sectionTitle:
        'More about the <code><<span>Suspense</span>></code> component',
      sectionSource:
        '/src/markdowns/12_React_Router/More_about_the_Suspense_component.html',
    },
  ],
};

const section18 = {
  title:
    '<p class="card__title--1">Section 18</p> <p class="card__title--2">Diving into Redux <br>(an alternative to the Context API)</p>',
  sections: [
    {
      sectionTitle: '226. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '227. Another Look At State In React Apps',
      sectionSource: '',
    },
    {
      sectionTitle: '228. Redux vs React Context',
      sectionSource: '',
    },
    {
      sectionTitle: '229. How Redux Works',
      sectionSource: '',
    },
    {
      sectionTitle: '230. Exploring The Core Redux Concepts',
      sectionSource: '',
    },
    {
      sectionTitle: '231. More Redux Basics',
      sectionSource: '',
    },
    {
      sectionTitle: '232. Preparing a new Project',
      sectionSource: '',
    },
    {
      sectionTitle: '233. Creating a Redux Store for React',
      sectionSource: '',
    },
    {
      sectionTitle: '234. Providing the Store',
      sectionSource: '',
    },
    {
      sectionTitle: '235. Using Redux Data in React Components',
      sectionSource: '',
    },
    {
      sectionTitle: '236. Dispatching Actions From Inside Components',
      sectionSource: '',
    },
    {
      sectionTitle: '237. Redux with Class-based Components',
      sectionSource: '',
    },
    {
      sectionTitle: '238. Attaching Payloads to Actions',
      sectionSource: '',
    },
    {
      sectionTitle: '239. Working with Multiple State Properties',
      sectionSource: '',
    },
    {
      sectionTitle: '240. How To Work With Redux State Correctly',
      sectionSource: '',
    },
    {
      sectionTitle: '241. Redux Challenges & Introducing Redux Toolkit',
      sectionSource: '',
    },
    {
      sectionTitle: '242. Adding State Slices',
      sectionSource: '',
    },
    {
      sectionTitle: '243. Connecting Redux Toolkit State',
      sectionSource: '',
    },
    {
      sectionTitle: '244. Migrating Everything To Redux Toolkit',
      sectionSource: '',
    },
    {
      sectionTitle: '245. Working with Multiple Slices',
      sectionSource: '',
    },
    {
      sectionTitle: '246. Reading & Dispatching From A New Slice',
      sectionSource: '',
    },
    {
      sectionTitle: '247. Splitting Our Code',
      sectionSource: '',
    },
    {
      sectionTitle: '248. Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '249. Module Resources',
      sectionSource: '',
    },
  ],
};

const section19 = {
  title:
    '<p class="card__title--1">Section 19</p> <p class="card__title--2">Advanced Redux</p>',
  sections: [
    {
      sectionTitle: '250. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '251. Redux & Side Effects (and Asynchronous Code)',
      sectionSource: '',
    },
    {
      sectionTitle: '252. Refresher / Practice: Part 1/2',
      sectionSource: '',
    },
    {
      sectionTitle: '253. Refresher / Practice: Part 2/2',
      sectionSource: '',
    },
    {
      sectionTitle: '254. Redux & Async Code',
      sectionSource: '',
    },
    {
      sectionTitle: '255. Frontend Code vs Backend Code',
      sectionSource: '',
    },
    {
      sectionTitle: '256. Where To Put Our Logic',
      sectionSource: '',
    },
    {
      sectionTitle: '257. Using useEffect with Redux',
      sectionSource: '',
    },
    {
      sectionTitle: '258. A Problem with useEffect()',
      sectionSource: '',
    },
    {
      sectionTitle: '259. Handling Http States & Feedback with Redux',
      sectionSource: '',
    },
    {
      sectionTitle: '260. Using an Action Creator Thunk',
      sectionSource: '',
    },
    {
      sectionTitle: '261. Getting Started with Fetching Data',
      sectionSource: '',
    },
    {
      sectionTitle: '262. Finalizing the Fetching Logic',
      sectionSource: '',
    },
    {
      sectionTitle: '263. Exploring the Redux DevTools',
      sectionSource: '',
    },
    {
      sectionTitle: '264. Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '265. Module Resources',
      sectionSource: '',
    },
  ],
};

const section20 = {
  title:
    '<p class="card__title--1">Section 25</p> <p class="card__title--2">Replacing Redux with React Hooks</p>',
  sections: [
    {
      sectionTitle: 'Alternative 1: Using the Context API',
      sectionSource: '',
    },
    {
      sectionTitle:
        'Context API Summary (and why NOT to use it instead of Redux)',
      sectionSource: '',
    },
    {
      sectionTitle: 'Alternative 2: Using a Custom Hook',
      sectionSource: '',
    },
    {
      sectionTitle: 'Managing Multiple State Slices with the Custom Store Hook',
      sectionSource: '',
    },
  ],
};

const section21 = {
  title:
    '<p class="card__title--1">Section 21</p> <p class="card__title--2">Deploying React apps</p>',
  sections: [
    {
      sectionTitle: '293. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '294. Deployment Steps',
      sectionSource: '',
    },
    {
      sectionTitle: '295. Adding Lazy Loading',
      sectionSource: '',
    },
    {
      sectionTitle: '296. Building The Code For Production',
      sectionSource: '',
    },
    {
      sectionTitle: '297. Getting Started With Deployment (Uploading Files)',
      sectionSource: '',
    },
    {
      sectionTitle: '298. Exploring Routing Issues & Finishing Deployment',
      sectionSource: '',
    },
    {
      sectionTitle: '299. Module Resources',
      sectionSource: '',
    },
  ],
};

const section22 = {
  title:
    '<p class="card__title--1">Section 22</p> <p class="card__title--2">Adding authentication to React apps</p>',
  sections: [
    {
      sectionTitle: '300. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '301. What, How & Why?',
      sectionSource: '',
    },
    {
      sectionTitle: '302. More on "Authentication Tokens"',
      sectionSource: '',
    },
    {
      sectionTitle: '303. Starting Setup & First Steps',
      sectionSource: '',
    },
    {
      sectionTitle: '304. Adding User Signup',
      sectionSource: '',
    },
    {
      sectionTitle: '305. Showing Feedback To The User',
      sectionSource: '',
    },
    {
      sectionTitle: '306. Adding User Login',
      sectionSource: '',
    },
    {
      sectionTitle: '307. Managing The Auth State With Context',
      sectionSource: '',
    },
    {
      sectionTitle: '308. Using The Token For Requests To Protected Resources',
      sectionSource: '',
    },
    {
      sectionTitle: '309. Redirecting The User',
      sectionSource: '',
    },
    {
      sectionTitle: '310. Adding Logout',
      sectionSource: '',
    },
    {
      sectionTitle: '311. Protecting Frontend Pages',
      sectionSource: '',
    },
    {
      sectionTitle: '312. Persisting The User Authentication Status',
      sectionSource: '',
    },
    {
      sectionTitle: '313. Adding Auto-Logout',
      sectionSource: '',
    },
    {
      sectionTitle: '314. Finishing Steps',
      sectionSource: '',
    },
    {
      sectionTitle: '315. Module Resources',
      sectionSource: '',
    },
  ],
};

const section23 = {
  title:
    '<p class="card__title--1">Section 23</p> <p class="card__title--2">A (Pretty Deep Dive) Introduction to Next.js</p>',
  sections: [
    {
      sectionTitle: '316. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '317. What is NextJS?',
      sectionSource: '',
    },
    {
      sectionTitle:
        '318. Key Feature 1: Built-in Server-side Rendering (Improved SEO!)',
      sectionSource: '',
    },
    {
      sectionTitle:
        '319. Key Feature 2: Simplified Routing with File-based Routing',
      sectionSource: '',
    },
    {
      sectionTitle: '320. Key Feature 3: Build Fullstack Apps',
      sectionSource: '',
    },
    {
      sectionTitle: '321. Creating a New Next.js Project & App',
      sectionSource: '',
    },
    {
      sectionTitle: '322. Analyzing the Created Project',
      sectionSource: '',
    },
    {
      sectionTitle: '323. Adding First Pages',
      sectionSource: '',
    },
    {
      sectionTitle: '324. Adding Nested Paths & Pages (Nested Routes)',
      sectionSource: '',
    },
    {
      sectionTitle: '325. Creating Dynamic Pages (with Parameters)',
      sectionSource: '',
    },
    {
      sectionTitle: '326. Extracting Dynamic Parameter Values',
      sectionSource: '',
    },
    {
      sectionTitle: '327. Linking Between Pages',
      sectionSource: '',
    },
    {
      sectionTitle: '328. Onwards to a bigger Project!',
      sectionSource: '',
    },
    {
      sectionTitle: '329. Preparing the Project Pages',
      sectionSource: '',
    },
    {
      sectionTitle: '330. Outputting a List of Meetups',
      sectionSource: '',
    },
    {
      sectionTitle: '331. Adding the New Meetup Form',
      sectionSource: '',
    },
    {
      sectionTitle: '332. The "_app.js" File & Layout Wrapper',
      sectionSource: '',
    },
    {
      sectionTitle: '333. Using Programmatic (Imperative) Navigation',
      sectionSource: '',
    },
    {
      sectionTitle: '334. Adding Custom Components & CSS Modules',
      sectionSource: '',
    },
    {
      sectionTitle: '335. How Pre-rendering Works & Which Problem We Face',
      sectionSource: '',
    },
    {
      sectionTitle: '336. Data Fetching for Static Pages',
      sectionSource: '',
    },
    {
      sectionTitle: '337. More on Static Site Generation (SSG)',
      sectionSource: '',
    },
    {
      sectionTitle:
        '338. Exploring Server-side Rendering (SSR) with "getServerSideProps"',
      sectionSource: '',
    },
    {
      sectionTitle: '339. Working with Params for SSG Data Fetching',
      sectionSource: '',
    },
    {
      sectionTitle:
        '340. Preparing Paths with "getStaticPaths" & Working With Fallback Pages',
      sectionSource: '',
    },
    {
      sectionTitle: '341. Introducing API Routes',
      sectionSource: '',
    },
    {
      sectionTitle: '342. Working with MongoDB',
      sectionSource: '',
    },
    {
      sectionTitle: '343. Sending Http Requests To Our API Routes',
      sectionSource: '',
    },
    {
      sectionTitle: '344. Getting Data From The Database',
      sectionSource: '',
    },
    {
      sectionTitle: '345. Getting Meetup Details Data & Preparing Pages',
      sectionSource: '',
    },
    {
      sectionTitle: '346. Adding "head" Metadata',
      sectionSource: '',
    },
    {
      sectionTitle: '347. Deploying Next.js Projects',
      sectionSource: '',
    },
    {
      sectionTitle: '348. Using Fallback Pages & Re-deploying',
      sectionSource: '',
    },
    {
      sectionTitle: '349. Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '350. Module Resources',
      sectionSource: '',
    },
  ],
};

const section24 = {
  title:
    '<p class="card__title--1">Section 24</p> <p class="card__title--2">Animating React Apps</p>',
  sections: [
    {
      sectionTitle: '351. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '352. Preparing the Demo Project',
      sectionSource: '',
    },
    {
      sectionTitle: '353. Using CSS Transitions',
      sectionSource: '',
    },
    {
      sectionTitle: '354. Using CSS Animations',
      sectionSource: '',
    },
    {
      sectionTitle: '355. CSS  Transition & Animations Limitations',
      sectionSource: '',
    },
    {
      sectionTitle: '356. Using ReactTransitionGroup',
      sectionSource: '',
    },
    {
      sectionTitle: '357. Using the Transition Component',
      sectionSource: '',
    },
    {
      sectionTitle: '358. Wrapping the Transition Component',
      sectionSource: '',
    },
    {
      sectionTitle: '359. Animation Timings',
      sectionSource: '',
    },
    {
      sectionTitle: '360. Transition Events',
      sectionSource: '',
    },
    {
      sectionTitle: '361. The CSSTransition Component',
      sectionSource: '',
    },
    {
      sectionTitle: '362. Customizing CSS Classnames',
      sectionSource: '',
    },
    {
      sectionTitle: '363. Animating Lists',
      sectionSource: '',
    },
    {
      sectionTitle: '364. Alternative Animation Packages',
      sectionSource: '',
    },
    {
      sectionTitle: '365. Wrap Up',
      sectionSource: '',
    },
    {
      sectionTitle: '366. Module Resources',
      sectionSource: '',
    },
  ],
};

const section26 = {
  title:
    '<p class="card__title--1">Section 26</p> <p class="card__title--2">Testing React Apps (Unit Tests)</p>',
  sections: [
    {
      sectionTitle: '382. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '383. What & Why?',
      sectionSource: '',
    },
    {
      sectionTitle: '384. Understanding Different Kinds Of Tests',
      sectionSource: '',
    },
    {
      sectionTitle: '385. What To Test & How To Test',
      sectionSource: '',
    },
    {
      sectionTitle: '386. Understanding the Technical Setup & Involved Tools',
      sectionSource: '',
    },
    {
      sectionTitle: '387. Running a First Test',
      sectionSource: '',
    },
    {
      sectionTitle: '388. Writing Our First Test',
      sectionSource: '',
    },
    {
      sectionTitle: '389. Grouping Tests Together With Test Suites',
      sectionSource: '',
    },
    {
      sectionTitle: '390. Testing User Interaction & State',
      sectionSource: '',
    },
    {
      sectionTitle: '391. Testing Connected Components',
      sectionSource: '',
    },
    {
      sectionTitle: '392. Testing Asynchronous Code',
      sectionSource: '',
    },
    {
      sectionTitle: '393. Working With Mocks',
      sectionSource: '',
    },
    {
      sectionTitle: '394. Summary & Further Resources',
      sectionSource: '',
    },
    {
      sectionTitle: '395. Module Resources',
      sectionSource: '',
    },
  ],
};

const section27 = {
  title:
    '<p class="card__title--1">Section 27</p> <p class="card__title--2">React + TypeScript</p>',
  sections: [
    {
      sectionTitle: '396. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '397. What & Why?',
      sectionSource: '',
    },
    {
      sectionTitle: '398. Installing & Using TypeScript',
      sectionSource: '',
    },
    {
      sectionTitle: '399. Exploring the Base Types',
      sectionSource: '',
    },
    {
      sectionTitle: '400. Working with Array & Object Types',
      sectionSource: '',
    },
    {
      sectionTitle: '401. Understanding Type Inference',
      sectionSource: '',
    },
    {
      sectionTitle: '402. Using Union Types',
      sectionSource: '',
    },
    {
      sectionTitle: '403. Understanding Type Aliases',
      sectionSource: '',
    },
    {
      sectionTitle: '404. Functions & Function Types',
      sectionSource: '',
    },
    {
      sectionTitle: '405. Diving Into Generics',
      sectionSource: '',
    },
    {
      sectionTitle: '406. A Closer Look At Generics',
      sectionSource: '',
    },
    {
      sectionTitle: '407. Creating a React + TypeScript Project',
      sectionSource: '',
    },
    {
      sectionTitle: '408. Working with Components & TypeScript',
      sectionSource: '',
    },
    {
      sectionTitle: '409. Working with Props & TypeScript',
      sectionSource: '',
    },
    {
      sectionTitle: '410. Adding a Data Model',
      sectionSource: '',
    },
    {
      sectionTitle: '411. Time to Practice: Exercise Time!',
      sectionSource: '',
    },
    {
      sectionTitle: '412. Form Submissions In TypeScript Projects',
      sectionSource: '',
    },
    {
      sectionTitle: '413. Working with refs & useRef',
      sectionSource: '',
    },
    {
      sectionTitle: '414. Working with "Function Props"',
      sectionSource: '',
    },
    {
      sectionTitle: '415. Managing State & TypeScript',
      sectionSource: '',
    },
    {
      sectionTitle: '416. Adding Styling',
      sectionSource: '',
    },
    {
      sectionTitle: '417. Time to Practice: Removing a Todo',
      sectionSource: '',
    },
    {
      sectionTitle: '418. The Context API & TypeScript',
      sectionSource: '',
    },
    {
      sectionTitle: '419. Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '420. Bonus: Exploring tsconfig.json',
      sectionSource: '',
    },
    {
      sectionTitle: '421. Module Resources',
      sectionSource: '',
    },
  ],
};

const section28 = {
  title:
    '<p class="card__title--1">Section 28</p> <p class="card__title--2">Optional: React Hooks Introduction & Summary</p>',
  sections: [
    {
      sectionTitle: '422. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '423. What Are React Hooks?',
      sectionSource: '',
    },
    {
      sectionTitle: '424. The Starting Project',
      sectionSource: '',
    },
    {
      sectionTitle: '425. React 18 & This Section',
      sectionSource: '',
    },
    {
      sectionTitle: '426. Getting Started with useState()',
      sectionSource: '',
    },
    {
      sectionTitle: '427. More on useState() & State Updating',
      sectionSource: '',
    },
    {
      sectionTitle: '428. Array Destructuring',
      sectionSource: '',
    },
    {
      sectionTitle: '429. Multiple States',
      sectionSource: '',
    },
    {
      sectionTitle: '430. Rules of Hooks',
      sectionSource: '',
    },
    {
      sectionTitle: '431. Passing State Data Across Components',
      sectionSource: '',
    },
    {
      sectionTitle: '432. Sending Http Requests',
      sectionSource: '',
    },
    {
      sectionTitle: '433. useEffect() & Loading Data',
      sectionSource: '',
    },
    {
      sectionTitle: '434. Understanding useEffect() Dependencies',
      sectionSource: '',
    },
    {
      sectionTitle: '435. More on useEffect()',
      sectionSource: '',
    },
    {
      sectionTitle: "436. What's useCallback()?",
      sectionSource: '',
    },
    {
      sectionTitle: '437. Working with Refs & useRef()',
      sectionSource: '',
    },
    {
      sectionTitle: '438. Cleaning Up with useEffect()',
      sectionSource: '',
    },
    {
      sectionTitle: '439. Deleting Ingredients',
      sectionSource: '',
    },
    {
      sectionTitle: '440. Loading Errors & State Batching',
      sectionSource: '',
    },
    {
      sectionTitle: '441. More on State Batching & State Updates',
      sectionSource: '',
    },
    {
      sectionTitle: '442. Understanding useReducer()',
      sectionSource: '',
    },
    {
      sectionTitle: '443. Using useReducer() for the Http State',
      sectionSource: '',
    },
    {
      sectionTitle: '444. Working with useContext()',
      sectionSource: '',
    },
    {
      sectionTitle: '445. Performance Optimizations with useMemo()',
      sectionSource: '',
    },
    {
      sectionTitle: '446. Getting Started with Custom Hooks',
      sectionSource: '',
    },
    {
      sectionTitle: '447. Sharing Data Between Custom Hooks & Components',
      sectionSource: '',
    },
    {
      sectionTitle: '448. Using the Custom Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '449. Wrap Up',
      sectionSource: '',
    },
    {
      sectionTitle: '450. Module Resources',
      sectionSource: '',
    },
  ],
};

const section29 = {
  title:
    '<p class="card__title--1">Section 29</p> <p class="card__title--2">Optional: React Summary & Core Feature Walkthrough</p>',
  sections: [
    {
      sectionTitle: '451. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '452. What Is React?',
      sectionSource: '',
    },
    {
      sectionTitle: '453. Why React?',
      sectionSource: '',
    },
    {
      sectionTitle: '454. Building SPAs (Single Page Applications)',
      sectionSource: '',
    },
    {
      sectionTitle: '455. React Alternatives',
      sectionSource: '',
    },
    {
      sectionTitle: '456. Creating a React Project',
      sectionSource: '',
    },
    {
      sectionTitle: '457. Setting Up A Code Editor',
      sectionSource: '',
    },
    {
      sectionTitle: '458. React 18',
      sectionSource: '',
    },
    {
      sectionTitle: '459. Diving Into The Created Project',
      sectionSource: '',
    },
    {
      sectionTitle: '460. How React Works & Understanding Components',
      sectionSource: '',
    },
    {
      sectionTitle: '461. More Component Work & Styling with CSS Classes',
      sectionSource: '',
    },
    {
      sectionTitle: '462. Building & Re-Using Another Component',
      sectionSource: '',
    },
    {
      sectionTitle: '463. Working with "props" & Dynamic Content',
      sectionSource: '',
    },
    {
      sectionTitle: '464. Handling Events',
      sectionSource: '',
    },
    {
      sectionTitle: '465. Adding More Components',
      sectionSource: '',
    },
    {
      sectionTitle: '466. Introducing State',
      sectionSource: '',
    },
    {
      sectionTitle:
        '467. Working with "Event Props" (Passing Function As Props)',
      sectionSource: '',
    },
    {
      sectionTitle: '468. Use The Right React Router Version',
      sectionSource: '',
    },
    {
      sectionTitle: '469. Adding Routing',
      sectionSource: '',
    },
    {
      sectionTitle: '470. Adding Links & Navigation',
      sectionSource: '',
    },
    {
      sectionTitle: '471. Styling with CSS Modules',
      sectionSource: '',
    },
    {
      sectionTitle: '472. Outputting Lists of Data',
      sectionSource: '',
    },
    {
      sectionTitle: '473. Adding More React Components',
      sectionSource: '',
    },
    {
      sectionTitle: '474. Building Wrapper Components with props.children',
      sectionSource: '',
    },
    {
      sectionTitle: '475. Adding a Form',
      sectionSource: '',
    },
    {
      sectionTitle: '476. Getting User Input & Handling Form Submission',
      sectionSource: '',
    },
    {
      sectionTitle: '477. Preparing the App for Http',
      sectionSource: '',
    },
    {
      sectionTitle: '478. Sending a POST Request',
      sectionSource: '',
    },
    {
      sectionTitle: '479. Navigating Programmatically',
      sectionSource: '',
    },
    {
      sectionTitle: '480. Getting Started with Fetching Data',
      sectionSource: '',
    },
    {
      sectionTitle: '481. Using the useEffect() Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '482. Introducing React Context',
      sectionSource: '',
    },
    {
      sectionTitle: '483. Context Logic & Different Ways Of Updating State',
      sectionSource: '',
    },
    {
      sectionTitle: '484. Using Context In Components',
      sectionSource: '',
    },
    {
      sectionTitle: '485. More Context Usage',
      sectionSource: '',
    },
    {
      sectionTitle: '486. Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '487. Module Resources',
      sectionSource: '',
    },
  ],
};

const section30 = {
  title:
    '<p class="card__title--1">Section 30</p> <p class="card__title--2">Course Roundup</p>',
  sections: [
    {
      sectionTitle: '488. What Now? Next Steps You Could Take!',
      sectionSource: '',
    },
    {
      sectionTitle: '489. Explore The React Ecosystem!',
      sectionSource: '',
    },
    {
      sectionTitle: '490. Finishing Thoughts',
      sectionSource: '',
    },
    {
      sectionTitle: '491. Bonus!',
      sectionSource: '',
    },
  ],
};

export const dataStorage = [
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
  section12,
  section18,
  section19,
  section20,
  section21,
  section22,
  section23,
  section24,
  section26,
  section27,
  section28,
  section29,
  section30,
];
