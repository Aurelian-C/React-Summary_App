const section1 = {
  title:
    '<p class="card__title--1">Section 1</p> <p class="card__title--2">React Basics & Working With Components</p>',
  sections: [
    {
      sectionTitle: 'What are components and why is React all about them?',
      sectionSource:
        '/src/markdowns/What_are_components_and_why_is_React_all_about_them.html',
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
        '/src/markdowns/React_code_is_written_in_a_declarative_way',
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
      sectionSource: '/src/markdowns/Introducing_JSX_markup.html',
      highlights: {
        highlight2: ['JSX'],
      },
      tooltips: [
        'JSX = JavaScript XML.',
        'JSX is a <i>syntax extension</i> for JavaScript that lets you write <i>HTML-like markup inside a JavaScript file</i>.',
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
      sectionSource: '/src/markdowns/Building_a_first_custom_component.html',
      highlights: {
        highlight2: ['custom component'],
      },
      tooltips: [
        'A React custom component is basically just a custom HTML element. The key difference between custom components and built-in HTML elements (tags) is that custom components always start with a capital letter. And indeed your own custom components must start with a capital letter, so that React is able to detect that is a custom component. React custom components names must always start with a capital letter, while HTML tags must be lowercase.',
        'There are 3 steps to build a custom component: create & export the component, import the component, use the component.',
        'Is considered a good practice to put new components into new files, so that you have one file per component.',
        'Components (parent) can render other components (child), but you must never nest their definitions (never define a component inside another component!).',
      ],
    },
    {
      sectionTitle:
        'Outputting dynamic data & working with expressions in JSX markup',
      sectionSource: '',
      highlights: {
        highlight1: ['Outputting dynamic data'],
        highlight2: ['expressions in JSX'],
      },
      tooltips: [
        'JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.',
        "JSX is a special way of writing JavaScript. That means it's possible to use JavaScript inside it with curly braces <code>{ }</code>.",
        'You write expressions in JSX markup with the help of curly brackets <code>{}</code>. Curly braces let you "escape back" into JavaScript so that you can embed some variable from your code and display it to the user. Any JavaScript expression will work between curly braces, including function calls.',
        `You can only use curly braces in two ways inside JSX:
        <br>- as text directly inside a JSX tag: <<span>h1>{name}'s To Do List<</span>/h1> works, but <{tag}>Gregorio Y. Zara's To Do List<span><</span>/{tag}> will not.
        <br>- as attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".`,
      ],
    },
    {
      sectionTitle: 'Passing data via props',
      sectionSource: '/src/markdowns/Passing_data_via_props.html',
      highlights: {
        highlight2: ['props'],
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
        '/src/markdowns/Splitting_components_into_multiple_components.html',

      tooltips: [
        'You can declare many components in one file, but large files can get difficult to navigate. To solve this, you can export a component into its own file, and then import that component from another file.',
        'This concept of components that React have allows you to split your application into smaller building blocks, where every building block/component is focused on one core task, and then you build your overall UI by combining these building blocks/components.',
        'Separation of concerns: React is all about splitting your app into small building blocks (components), where every building block (component) has a clear task, and therefore your code stays maintainable and manageable. Having a separation of concerns helps us with keeping our code base small and manageable, instead of having one large file which holds all the HTML code and all the JavaScript logic',
        "If we split our code across multiple files, then we'll have small pieces of code which are easy to manage and maintain.",
        'Components are regular JavaScript functions, so you can keep multiple components in the same file. This is convenient when components are relatively small or tightly related to each other. If the file gets crowded, you can always split your components to a separate file. Thus far, we always had one component per file, and that generally is a good rule to keep, but if you have a component that is really only getting used by the other component in that file, having both components in the same file can make sense too.',
      ],
    },
    {
      sectionTitle: 'The concept of "composition": <code>props.children</code>',
      sectionSource:
        '/src/markdowns/The_concept_of_composition_props_children.html',
      highlights: {
        highlight1: ['"composition"'],
        highlight2: ['props.children'],
      },
      tooltips: [
        "Sometimes you wanna have a component where you don't configure everything through props, but where instead you're able to pass content between the opening and closing tags of that component. <i>Out of the box, you can't use your custom components as wrappers around JSX markup</i>. Out of the box you can only use built-in HTML elements (<<span>div</span>>, <<span>h2</span>>, <<span>p</span>> tags) as wrappers.",
        "If you want to use custom components as wrappers, you need to use one special prop that is build into React, which every component receives, even if you're never setting it explicitly, and that is <code>props.children</code>.",
        '<code>props.children</code> is a reserved name, and the value of this special children prop will always be the content between the opening and closing tags of your custom component. This is a concept called composition.',
        'You can think of a component with a <code>children</code> prop as having a "hole" that can be "filled in" by its parent components with arbitrary JSX markup.',
      ],
    },
    {
      sectionTitle: 'Organizing component files',
      sectionSource: '',
    },
  ],
};

const section2 = {
  title:
    '<p class="card__title--1">Section 2</p> <p class="card__title--2">React State & Working with Events</p>',
  sections: [
    {
      sectionTitle: 'Listening to events & working with event handlers',
      sectionSource:
        '/src/markdowns/Listening_to_events_&_working_with_event_handlers.html',

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
        '/src/markdowns/How_component_functions_are_executed_render_&_commit.html',
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
      sectionSource: '/src/markdowns/Working_with_state.html',
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
      sectionSource: '/src/markdowns/State_as_a_snapshot.html',

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
        '/src/markdowns/Queueing_a_series_of_state_updates_state_scheduling_&_batching.html',
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
      sectionSource: '/src/markdowns/Updating_objects_in_state.html',
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
      sectionSource: '/src/markdowns/Updating_arrays_in_state.html',
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
      sectionSource: '/src/markdowns/Choosing_the_state_structure.html',
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
        '/src/markdowns/Updating_state_that_depends_on_the_previous_state.html',
      tooltips: [
        'State updates are <i>scheduled</i> by React, they are <i>not processed immediately</i>.',
        `The best pratice to update state that depends on the previous state is to pass a function as argument to the state updating function provided by the <code>useState</code> hook. The function which you pass as argument to the state updating function will automatically be executed by React and it will receive the previous state snapshot for that state for which you're calling the state updating function.`,
      ],
    },
    {
      sectionTitle: 'Preserving and resetting state',
      sectionSource: '/src/markdowns/Preserving_and_resetting_state.html',
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
        '/src/markdowns/Lifting_the_data_or_state_up_to_share_it_between_components.html',
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
        '/src/markdowns/Controlled_vs_uncontrolled_components.html',
      tooltips: [
        '<i>It is common to call a component with some local state "uncontrolled"</i>. For example, a child component that have a state variable that can be changed by its parent component is called an uncontrolled component.',
        '<i>A component is "controlled" when the important data in it is driven by props rather than its own local state. This lets the parent component fully specify its behavior</i>.',
        "Uncontrolled components are easier to use within their parents because they require less configuration. But they're less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props.",
        'When writing a component, consider which information in it should be <i>controlled (via props)</i>, and which information should be <i>uncontrolled (via state)</i>',
      ],
    },
    {
      sectionTitle: 'Adding two-way binding',
      sectionSource: '/src/markdowns/Adding_two_way_binding.html',
      highlights: {
        highlight2: ['two-way binding'],
      },
      tooltips: [
        `Two-way binding is very useful when you're working with html <<span>form</span>> or <<span>input</span>> tags, because it allows you to gather user input, but then also change it.`,
      ],
    },
    {
      sectionTitle: 'Introducing useReducer() for state management',
      sectionSource:
        '/src/markdowns/Introducing_useReducer_for_state_management.html',
      highlights: {
        highlight2: ['useReducer()'],
      },
      tooltips: [
        '<code>useReducer()</code> is another built-in hook and it will help us with state management.',
        "If you update a state which depends on another state, and/or if you set a state that's depends of the another previous state, then merging that two states into one state could be a good idea, and you can do this with the help of <code>useReducer()</code>.",
        "<code>useReducer()</code> is an alternative to <code>useState()</code>, it's a replacement if you need a more powerful state management.",
      ],
    },
    {
      sectionTitle: 'Using the useReducer() Hook',
      sectionSource: '/src/markdowns/Using_the_useReducer_hook.html',
    },
    {
      sectionTitle: 'useReducer vs useState for state management',
      sectionSource:
        '/src/markdowns/useReducer_vs_useState_for_state_management.html',
    },
    {
      sectionTitle: 'Introducing React Context (Context API)',
      sectionSource: '/src/markdowns/Introducing_React_Context.html',
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
      sectionSource: '/src/markdowns/Using_the_React_Context.html',

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
        '/src/markdowns/Building_&_using_a_Custom_Context_Provider_Component.html',
    },
    {
      sectionTitle: 'React Context limitations',
      sectionSource: '/src/markdowns/React_Context_limitations.html',
    },
    {
      sectionTitle: 'Scaling state with <code>useReducer</code> and context',
      sectionSource:
        '/src/markdowns/Scaling_state_with_useReducer_and_context.html',
      tooltips: [
        'You can combine reducer with context to let any component read and update state above it.',
      ],
    },
    {
      sectionTitle: 'Learning the "rules of Hooks"',
      sectionSource: '/src/markdowns/Learning_the_rules_of_Hooks.html',
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
    '<p class="card__title--1">Section 3</p> <p class="card__title--2">Rendering Lists & Conditional Content</p>',
  sections: [
    {
      sectionTitle: 'Rendering lists of data',
      sectionSource: '/src/markdowns/Rendering_lists_of_data.html',
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
      sectionTitle: 'Understanding "keys"',
      sectionSource: '/src/markdowns/Understanding_Keys.html',
      highlights: {
        highlight2: ['"keys"'],
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
      sectionSource: '/src/markdowns/Outputting_conditional_content.html',
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
    '<p class="card__title--1">Section 4</p> <p class="card__title--2">Styling React Components</p>',
  sections: [
    {
      sectionTitle: 'Introduction to styling React components',
      sectionSource:
        '/src/markdowns/Introduction_to_styling_React_components.html',
    },
    {
      sectionTitle: 'Adding basic CSS styling',
      sectionSource: '/src/markdowns/Adding_basic_CSS_styling.html',

      tooltips: [
        'In React, you specify a CSS class with <code>className</code>. It works the same way as the HTML <code>class</code> attribute.',
      ],
    },
    {
      sectionTitle: 'Adding dynamic inline styles',
      sectionSource: '/src/markdowns/Adding_dynamic_inline_styles.html',
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
      sectionSource: '/src/markdowns/Introducing_styled_components.html',
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
      sectionSource: '/src/markdowns/Using_CSS_modules.html',
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
    '<p class="card__title--1">Section 5</p> <p class="card__title--2">Debugging React Apps</p>',
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
    '<p class="card__title--1">Section 6</p> <p class="card__title--2">Working with Fragments, Portals & "Refs"</p>',
  sections: [
    {
      sectionTitle: 'JSX limitations & workarounds',
      sectionSource: '/src/markdowns/JSX_limitations_&_workarounds.html',
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
      sectionTitle: 'React Fragments',
      sectionSource: '/src/markdowns/React_Fragments.html',
      highlights: {
        highlight2: ['Fragments'],
      },
      tooltips: [
        'Fragments let you group a list of children without adding extra nodes to the DOM.',
        'Fragments allow us to write cleaner code, to end up with less unnecessary HTML elements on the final page.',
        "You can access the Fragment component with <code>React.Fragment</code>, or in some projects you can also use the shortcut syntax. These two syntaxes render empty wrappers, which don't render any actual HTML element to the DOM.",
      ],
    },
    {
      sectionTitle: 'Introducing React Portals',
      sectionSource: '/src/markdowns/React_Portals.html',
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
      sectionSource: '/src/markdowns/Referencing_values_with_ref.html',
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
      sectionTitle: 'Manipulating the DOM with ref',
      sectionSource: '/src/markdowns/Manipulating_the_DOM_with_ref.html',
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
      sectionSource: '/src/markdowns/useRef_and_uncontrolled_components.html',
      tooltips: [
        "When we use ref's for inputs, we have uncontrolled input components.",
      ],
    },
    {
      sectionTitle: 'Diving into "forward Refs"',
      sectionSource: '/src/markdowns/Diving_into_Forward_Refs.html',
      highlights: {
        highlight2: ['"forward Refs"'],
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
    '<p class="card__title--1">Section 7</p> <p class="card__title--2">Handling Side Effects</p>',
  sections: [
    {
      sectionTitle: 'Synchronizing with Effects',
      sectionSource: '/src/markdowns/Synchronizing_with_effects.html',
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
      sectionSource: '/src/markdowns/You_might_not_need_an_effect.html',
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
      sectionSource: '/src/markdowns/Lifecycle_of_reactive_effects.html',
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
      sectionSource: '/src/markdowns/Separating_Events_from_Effects.html',
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
      sectionSource: '/src/markdowns/Removing_Effect_dependencies.html',
      tooltips: [
        "When you write an Effect, the linter will verify that you've included every reactive value (like props and state) that the Effect reads in the list of your Effect's dependencies. This ensures that your Effect remains synchronized with the latest props and state of your component. <i>Unnecessary dependencies may cause your Effect to run too often</i>, or even create an infinite loop.",
        "<i>Dependencies should match the code: if you want to change the dependencies, change the surrounding code first</i>. You can think of the dependency list as a list of all the reactive values used by your Effect's code. You don't intentionally choose what to put on that list. The list describes your code. To change the dependency list, change the code.",
        `<i>You can't "choose" the dependencies of your Effect. Every <b>reactive value</b> used by your Effect's code must be declared in your dependency list</i>. Reactive values include props and all variables and functions declared directly inside of your component. To remove a dependency, you need to "prove" to the linter that it doesn't need to be a dependency.`,
        "<i>Avoid objects and functions as Effect dependencies</i>: in JavaScript, each newly created object and function is considered distinct from all the others. It doesn't matter that the contents inside of them may be the same! <i>Object and function dependencies create a risk that your Effect will re-synchronize more often than you need</i>. This is why, whenever possible, you should try to avoid objects and functions as your Effect's dependencies.",
      ],
    },
    {
      sectionTitle: 'Using the useEffect() Hook',
      sectionSource: '/src/markdowns/Using_the_useEffect_hook.html',
      highlights: {
        highlight2: ['useEffect()'],
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
      sectionTitle: 'What to add & not to add as dependencies to useEffect()',
      sectionSource:
        '/src/markdowns/What_to_add_&_not_to_add_as_dependencies_to_useEffect.html',
      tooltips: [
        "You add as dependencies what you're using in your <code>useEffect</code> function.",
        "Does <code>useEffect()</code> run after every render? Yes! By default, if you don't pass an array of dependencies, <code>useEffect()</code> runs both after the first render and after every component render cycle.",
      ],
    },
    {
      sectionTitle: 'Adding nested properties as dependencies to useEffect',
      sectionSource:
        '/src/markdowns/Adding_nested_properties_as_dependencies_to_useEffect.html',
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
    '<p class="card__title--1">Section 8</p> <p class="card__title--2">A Look Behind The Scenes Of React & Optimization Techniques</p>',
  sections: [
    {
      sectionTitle: 'How React really works',
      sectionSource: '/src/markdowns/How_React_really_works.html',
      tooltips: [
        'React.js only cares about components, props, state and context. On the other hand, ReactDOM is your interface to the web, ReactDOM is responsible for bringing something onto the screen, which the user is then able to see.',
        'Whenever props, state or context changes, components that use these concepts are updated by React, and React checks whether that component now wants to draw something new onto the screen, and if that should be the case, React will let ReactDOM know about that, so that ReactDOM is able to bring that new screen, that new component, that new output to the screen.',
        'React is concerned about components and what React in the end does is, it uses a concept called the virtual DOM. With the help of virtual DOM, React determines how the component tree currently looks like and what it should look like, for example, after a state update. And that information is then handed off to ReactDOM which now knows about the differences and which then knows how it should manipulate the real DOM to match that virtual DOM, that virtual snapshot React derived for your component trees.',
        'Whenever state, props or a context of a component changes, that component function is re-executed, that component is re-evaluated by React. But it is worth noting that re-evaluating a component is not the same as re-rendering the DOM.',
        'Just because a component function is re-executed by React does not mean that the respective part of the actual real DOM is re-rendered or re-evaluated. Instead we have to differentiate between our component part (our React part) and the real DOM.',
      ],
    },
    {
      sectionTitle: 'Preventing unnecessary re-evaluations with React.memo()',
      sectionSource:
        '/src/markdowns/Preventing_unnecessary_reevaluations_with_React_memo.html',
      highlights: {
        highlight2: ['React.memo()'],
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
      sectionTitle: 'Preventing function re-creation with useCallback()',
      sectionSource:
        '/src/markdowns/Preventing_function_recreation_with_useCallback.html',
      highlights: {
        highlight2: ['useCallback()'],
      },
      tooltips: [
        'When you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components. To cache a function between re-renders of your component, wrap its definition into the <code>useCallback</code> hook.',
        '<code>useCallback</code> is a hook that allows us to basically store a function across component executions.',
        "By wrapping a function in <code>useCallback</code>, you ensure that it's the same function between the re-renders (until dependencies change). You don't have to wrap a function in <code>useCallback</code> unless you do it for some specific reason.",
      ],
    },
    {
      sectionTitle: 'useCallback() and its dependencies',
      sectionSource: '',
    },
    {
      sectionTitle: 'A first summary',
      sectionSource: '/src/markdowns/A_first_summary.html',
    },
    {
      sectionTitle: 'Optimizing with useMemo()',
      sectionSource: '/src/markdowns/Optimizing_with_useMemo.html',
      highlights: {
        highlight2: ['useMemo()'],
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
    '<p class="card__title--1">Section 9</p> <p class="card__title--2">An Alternative Way Of Building Components: Class-based Components</p>',
  sections: [
    {
      sectionTitle: 'Introducing error boundaries',
      sectionSource: '/src/markdowns/Introducing_error_boundaries.html',
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
    '<p class="card__title--1">Section 10</p> <p class="card__title--2">Building Custom React Hooks</p>',
  sections: [
    {
      sectionTitle: 'What are "custom Hooks"?',
      sectionSource: '/src/markdowns/What_are_Custom_Hooks.html',
      highlights: {
        highlight2: ['"custom Hooks"'],
      },
      tooltips: [
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
    '<p class="card__title--1">Section 11</p> <p class="card__title--2">Working with Forms & User Input</p>',
  sections: [
    {
      sectionTitle: "What's so complex about Forms?",
      sectionSource: '/src/markdowns/199__What_is_so_complex_about_forms.html',
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

const section18 = {
  title:
    '<p class="card__title--1">Section 18</p> <p class="card__title--2">Diving into Redux (An Alternative To The Context API)</p>',
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
    '<p class="card__title--1">Section 20</p> <p class="card__title--2">Building a Multi-Page SPA with React Router</p>',
  sections: [
    {
      sectionTitle: '266. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '267. What is Routing & Why?',
      sectionSource: '',
    },
    {
      sectionTitle: '268. Installing React Router',
      sectionSource: '',
    },
    {
      sectionTitle: '269. Defining & Using Routes',
      sectionSource: '',
    },
    {
      sectionTitle: '270. Working with Links',
      sectionSource: '',
    },
    {
      sectionTitle: '271. Using NavLinks',
      sectionSource: '',
    },
    {
      sectionTitle: '272. Adding Dynamic Routes with Params',
      sectionSource: '',
    },
    {
      sectionTitle: '273. Extracting Route Params',
      sectionSource: '',
    },
    {
      sectionTitle: '274. Using "Switch" and "exact" For Configuring Routes',
      sectionSource: '',
    },
    {
      sectionTitle: '275. Working with Nested Routes',
      sectionSource: '',
    },
    {
      sectionTitle: '276. Redirecting The User',
      sectionSource: '',
    },
    {
      sectionTitle: '277. Time to Practice: Onwards to a New Project',
      sectionSource: '',
    },
    {
      sectionTitle: '278. Practice Redirecting & Extracting Params',
      sectionSource: '',
    },
    {
      sectionTitle: '279. Practicing Nested Routes',
      sectionSource: '',
    },
    {
      sectionTitle: '280. Adding a Layout Wrapper Component',
      sectionSource: '',
    },
    {
      sectionTitle: '281. Adding Dummy Data & More Content',
      sectionSource: '',
    },
    {
      sectionTitle: '282. Outputting Data on the "Details" Page',
      sectionSource: '',
    },
    {
      sectionTitle: '283. Adding a "Not Found" Page',
      sectionSource: '',
    },
    {
      sectionTitle: '284. Implementing Programmatic (Imperative) Navigation',
      sectionSource: '',
    },
    {
      sectionTitle:
        '285. Preventing Possibly Unwanted Route Transitions with the "Prompt" Component',
      sectionSource: '',
    },
    {
      sectionTitle: '286. Working with Query Parameters',
      sectionSource: '',
    },
    {
      sectionTitle: '287. Getting Creative With Nested Routes',
      sectionSource: '',
    },
    {
      sectionTitle: '288. Writing More Flexible Routing Code',
      sectionSource: '',
    },
    {
      sectionTitle: '289. Sending & Getting Quote Data via Http',
      sectionSource: '',
    },
    {
      sectionTitle: '290. Adding the "Comments" Features',
      sectionSource: '',
    },
    {
      sectionTitle: '291. Upgrading To React Router v6',
      sectionSource: '',
    },
    {
      sectionTitle: '292. Module Resources',
      sectionSource: '',
    },
  ],
};

const section21 = {
  title:
    '<p class="card__title--1">Section 21</p> <p class="card__title--2">Deploying React Apps</p>',
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
    '<p class="card__title--1">Section 22</p> <p class="card__title--2">Adding Authentication To React Apps</p>',
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

const section25 = {
  title:
    '<p class="card__title--1">Section 25</p> <p class="card__title--2">Replacing Redux with React Hooks</p>',
  sections: [
    {
      sectionTitle: '367. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '368. React 18 & This Section',
      sectionSource: '',
    },
    {
      sectionTitle: '369. Starting Project & Why You Would Replace Redux',
      sectionSource: '',
    },
    {
      sectionTitle: '370. Alternative: Using the Context API',
      sectionSource: '',
    },
    {
      sectionTitle: '371. Toggling Favorites with the Context API',
      sectionSource: '',
    },
    {
      sectionTitle:
        '372. Context API Summary (and why NOT to use it instead of Redux)',
      sectionSource: '',
    },
    {
      sectionTitle: '373. Getting Started with a Custom Hook as a Store',
      sectionSource: '',
    },
    {
      sectionTitle: '374. Finishing the Store Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '375. Creating a Concrete Store',
      sectionSource: '',
    },
    {
      sectionTitle: '376. Using the Custom Store',
      sectionSource: '',
    },
    {
      sectionTitle: '377. Custom Hook Store Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '378. Optimizing the Custom Hook Store',
      sectionSource: '',
    },
    {
      sectionTitle:
        '379. Bonus: Managing Multiple State Slices with the Custom Store Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '380. Wrap Up',
      sectionSource: '',
    },
    {
      sectionTitle: '381. Module Resources',
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
  section18,
  section19,
  section20,
  section21,
  section22,
  section23,
  section24,
  section25,
  section26,
  section27,
  section28,
  section29,
  section30,
];
