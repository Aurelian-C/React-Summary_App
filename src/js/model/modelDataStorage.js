const section1 = {
  title:
    '<p class="card__title--1">Section 1</p> <p class="card__title--2">Getting Started</p>',
  sections: [
    {
      sectionTitle: '1. Welcome To The Course!',
      sectionSource: '',
    },
    {
      sectionTitle: '2. What is React.js?',
      sectionSource: '',
    },
    {
      sectionTitle: '3. Why React Instead Of "Just JavaScript"?',
      sectionSource: '',
    },
    {
      sectionTitle: '4. Building Single-Page Applications (SPAs) with React',
      sectionSource: '',
    },
    {
      sectionTitle: '5. Exploring React.js Alternatives (Angular / Vue)',
      sectionSource: '',
    },
    {
      sectionTitle: '6. Join our Online Learning Community',
      sectionSource: '',
    },
    {
      sectionTitle: '7. About This Course & Course Outline',
      sectionSource: '',
    },
    {
      sectionTitle: '8. The Two Ways (Paths) Of Taking This Course',
      sectionSource: '',
    },
    {
      sectionTitle: '9. Getting The Most Out Of This Course',
      sectionSource: '',
    },
    {
      sectionTitle: '10. Setting Up The Course Dev Environment (Code Editor)',
      sectionSource: '',
    },
  ],
};

const section2 = {
  title:
    '<p class="card__title--1">Section 2</p> <p class="card__title--2">JavaScript Refresher</p>',
  sections: [
    {
      sectionTitle: '11. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '12. Understanding "let" and "const"',
      sectionSource: '',
    },
    {
      sectionTitle: '13. Arrow Functions',
      sectionSource: '',
    },
    {
      sectionTitle: '14. Exports and Imports',
      sectionSource: '',
    },
    {
      sectionTitle: '15. Understanding Classes',
      sectionSource: '',
    },
    {
      sectionTitle: '16. Classes, Properties and Methods',
      sectionSource: '',
    },
    {
      sectionTitle: '17. The Spread & Rest Operator',
      sectionSource: '',
    },
    {
      sectionTitle: '18. Destructuring',
      sectionSource: '',
    },
    {
      sectionTitle: '19. Reference and Primitive Types Refresher',
      sectionSource: '',
    },
    {
      sectionTitle: '20. Refreshing Array Functions',
      sectionSource: '',
    },
    {
      sectionTitle: '21. Wrap Up',
      sectionSource: '',
    },
    {
      sectionTitle: '22. Next-Gen JavaScript - Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '23. JS Array Functions',
      sectionSource: '',
    },
  ],
};

const section3 = {
  title:
    '<p class="card__title--1">Section 3</p> <p class="card__title--2">React Basics & Working With Components</p>',
  sections: [
    {
      sectionTitle: '24. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '25. What Are Components And Why Is React All About Them?',
      sectionSource: '/src/markdowns/025__What_are_components.html',
      highlights: {
        highlight1: ['Components'],
      },
      tooltips: [
        'A Component in React is just a JavaScript function that returns JSX code.',
        'Components are in the end just a combination of HTML, CSS and JavaScript.',
        "Components are reusable building blocks in your UI. You don't have to reuse a component to make it a component, it's just one of its traits that a component is reusable.",
        'React is all about splitting your app into small building blocks (components), where every building block (component) has a clear task, and therefore your code stays maintainable and manageable, and React, the library, will do the heavy lifting of rendering something onto the screen and of combining all your code.',
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.',
      ],
    },
    {
      sectionTitle: '26. React Code Is Written In A "Declarative Way"!',
      sectionSource: '',
      highlights: {
        highlight1: ['"Declarative Way"'],
      },
      tooltips: [
        'With just Vanilla JavaScript, we have to write every single step that should be taken to build an app (Imperative Approach). React uses something which is called a Declarative Approach for building components. This basically means that with React you will not tell React that a certain HTML element should be created and inserted in a specific place on the user interface, as you would be doing it with Vanilla JavaScript.',
        "Instead, with React you will always define the desired end state, the target state or possibly also different target states depending on different conditions, and it's then React's job to figure out which elements on the actual webpage might need to be added or removed or updated, and you don't write these concrete DOM updating instructions on your own, as you would be doing it with just Vanilla JavaScript.",
      ],
    },
    {
      sectionTitle: '27. A Note About New React Projects & NodeJS',
      sectionSource: '',
    },
    {
      sectionTitle: '28. Creating a new React Project',
      sectionSource: '',
    },
    {
      sectionTitle: '29. The Starting Project',
      sectionSource: '',
    },
    {
      sectionTitle: '30. Analyzing a Standard React Project',
      sectionSource: '',
    },
    {
      sectionTitle: '31. Introducing JSX',
      sectionSource: '',
      highlights: {
        highlight2: ['JSX'],
      },
      tooltips: ['JSX = HTML code inside of JavaScript'],
    },
    {
      sectionTitle: '32. How React Works',
      sectionSource: '',
    },
    {
      sectionTitle: '33. Building a First Custom Component',
      sectionSource:
        '/src/markdowns/033__Building_a_first_custom_component.html',
      highlights: {
        highlight2: ['Custom Component'],
      },
      tooltips: [
        'A React component is basically just a custom HTML element. The key difference between custom and built-in HTML elements is that custom elements (components) NOT start with a lowercase character, but with an uppercase character. And indeed your own custom components must start with an uppercase character, so that React is able to detect that is a custom component.',
        'There are 3 steps to build a custom component: create & export the component, import the component, use the component.',
        'Is considered a good practice to put new components into new files, so that you have one file per component.',
      ],
    },
    {
      sectionTitle: '34. Writing More Complex JSX Code',
      sectionSource: '',
    },
    {
      sectionTitle: '35. Adding Basic CSS Styling',
      sectionSource: '',
    },
    {
      sectionTitle:
        '36. Outputting Dynamic Data & Working with Expressions in JSX',
      sectionSource: '',
      highlights: {
        highlight1: ['Outputting Dynamic Data'],
        highlight2: ['Expressions in JSX'],
      },
      tooltips: [
        'You write expressions in JSX code with the help of curly brackets <code>{}</code>',
      ],
    },
    {
      sectionTitle: '37. Passing Data via "props"',
      sectionSource: '/src/markdowns/037__Passing_data_via_props.html',
      highlights: {
        highlight2: ['"props"'],
      },
      tooltips: [
        'Props are the "attributes" of your custom HTML elements (components).',
        'React will ensure that we get one parameter in every component which we use as a component, and that one parameter will be an object which holds all the received attributes as properties.',
        "You can name that parameter whatever you want. Typically, it's named <code>props</code> to make it clear that is the object which holds all the values we get for the attributes on our custom element.",
        'The convention for props which hold functions is to start with "on".',
        "<code>props</code> allows you to make your components reusable, and it allows you to pass data from a component to another component. <code>props</code> are our way of passing data from component A to B, and it's also totally fine to have a component which just passes data on.",
      ],
    },
    {
      sectionTitle: '38. Adding "normal" JavaScript Logic to Components',
      sectionSource: '',
    },
    {
      sectionTitle: '39. Splitting Components Into Multiple Components',
      sectionSource:
        '/src/markdowns/039__Splitting_components_into_multiple_components.html',
      highlights: {
        highlight1: ['Splitting Components'],
      },
      tooltips: [
        'As you work on your React app and on your React components, you will notice in any project that your components eventually become bigger and bigger, as you have more and more logic and JSX code in them. This is something which will naturally happen, that is why React has the component concept.',
        'This concept of components that React have allows you to split your application into smaller building blocks, where every building block/component is focused on one core task, and then you build your overall UI by combining these building blocks/components.',
        'Separation of concerns: React is all about splitting your app into small building blocks (components), where every building block (component) has a clear task, and therefore your code stays maintainable and manageable. Having a separation of concerns helps us with keeping our code base small and manageable, instead of having one large file which holds all the HTML code and all the JavaScript logic',
        "If we split our code across multiple files, then we'll have small pieces of code which are easy to manage and maintain.",
        'You can have also multiple components per one file, and that this might make sense if a component is really only getting used in that file and not in other files. Thus far, we always had one component per file, and that generally is a good rule to keep, but if you have a component that is really only getting used by the other component in that file, having both components in the same file can make sense too.',
      ],
    },
    {
      sectionTitle: '40. The Concept of "Composition" ("children props")',
      sectionSource: '/src/markdowns/040__The_concept_of_composition.html',
      highlights: {
        highlight1: ['"Composition"'],
        highlight2: ['("children props")'],
      },
      tooltips: [
        "Sometimes you wanna have a component where you don't configure everything through <code>props</code>, but where instead you're able to pass content between the opening and closing tags of that component. Out of the box, you can't use your custom components as wrappers around other kind of content. Out of the box you can only use built-in HTML elements (<<span>div</span>>, <<span>h2</span>>, <<span>p</span>> tags) as wrappers.",
        "If you want to use custom components as wrappers, you need to use one special prop that is build into React, which every component receives, even if you're never setting it explicitly, and that is <code>props.children</code>.",
        '<code>props.children</code> is a reserved name, and the value of this special children prop will always be the content between the opening and closing tags of your custom component. This is a concept called composition.',
      ],
    },
    {
      sectionTitle: '41. A First Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '42. A Closer Look At JSX',
      sectionSource: '',
    },
    {
      sectionTitle: '43. Organizing Component Files',
      sectionSource: '',
    },
    {
      sectionTitle: '44. An Alternative Function Syntax',
      sectionSource: '',
    },
    {
      sectionTitle: '45. Module Resources',
      sectionSource: '',
    },
  ],
};

const section4 = {
  title:
    '<p class="card__title--1">Section 4</p> <p class="card__title--2">React State & Working with Events</p>',
  sections: [
    {
      sectionTitle: '46. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '47. Listening to Events & Working with Event Handlers',
      sectionSource: '/src/markdowns/047__Listening_&_working_with_events.html',
      highlights: {
        highlight1: ['Listening to Events', 'Event Handlers'],
      },
      tooltips: [
        'On all built-in HTML elements, like <<span>div</span>>, <<span>h2</span>>, <<span>buttons</span>> and so on, we have full access to all the native DOM events, which we can listen to.',
        `In React we add an event listener by going to the JSX element and there we add a special prop. But now it's not a prop which sets some value, but instead it's a prop which starts with "on", because React exposes all the default events as <code>props</code> which start with "on" (example: onClick, onScroll).`,
        'All these "on" props, all these event handler props (onClick, onSubmit, etc), want a function passed as a value, which then is executed when that event occurs.',
      ],
    },
    {
      sectionTitle: '48. How Component Functions Are Executed',
      sectionSource:
        '/src/markdowns/048__How_component_functions_are_executed.html',
      highlights: {
        highlight1: ['Component Functions'],
      },
      tooltips: [
        'Since a component is a function, someone has to call it, and you might notice that we never called our component function, instead we just used that function like HTML element in the JSX code.',
        "If you have a variable in your component function and that variable changes, React ignores it. It doesn't care about that, that code executes, sure, but the overall component function doesn't execute again just because some variable changed.",
        `We need a way of telling React that something changed and that a certain component should be re-evaluated, and that's where React introduces a special concept called "state". To tell React that it should run a component function again, we need to import something from the React library.`,
      ],
    },
    {
      sectionTitle: '49. Working with "State"',
      sectionSource: '',
    },
    {
      sectionTitle: '50. A Closer Look at the "useState" Hook',
      sectionSource: '',
      highlights: {
        highlight2: ['"useState"'],
      },
      tooltips: [
        `The <code>useState()</code> is a function provided by the React library and this function allows us to define values as state, where changes to these values should reflect in the component function being called again, which is a key difference to a value stored in a regular variable.`,
        'We use <code>useState()</code> only inside of a component function!',
        `<code>useState()</code> returns an array where the first element is the variable itself, you could say, the value itself, and the second element in the array is an state updating function, which we can then call to assign a new value to that variable. So we'll not be assigning values with the equal sign, instead, we will be assigning new values by calling a function.`,
        'The initial value of a state is only considered when a component function is being executed for the first time.',
        '<code>useState()</code> registers some state for the component function in which <code>useState()</code> is being called, and I wanna be even more precise, it registers state for a specific component instance. For example, if you have a component function and you used four times, every component receives its own separate state, which is detached from the others components state.',
      ],
    },
    {
      sectionTitle: '51. State can be updated in many ways!',
      sectionSource: '',
      highlights: {
        highlight1: ['State can be updated'],
      },
      tooltips: [
        'The state is changed when you use the state updating function provided by <code>useState</code> hook.',
        'Only the component where the <code>useState()</code> was registered will be updated, not any other components.',
        '<code>useState()</code> adds reactivity to our application. Without <code>useState()</code>, our UI would never change, but with <code>useState()</code> and with listening to events, we can make sure that we can react to user input and that such input can result in a visible change on our screen.',
        'When the state is changed, NOT only the JSX markup is re-evaluated, the entire component function is re-evaluated (re-rendered or re-executed).',
      ],
    },
    {
      sectionTitle: '52. Adding Form Inputs',
      sectionSource: '',
    },
    {
      sectionTitle: '53. Listening to User Input',
      sectionSource: '',
    },
    {
      sectionTitle: '54. Working with Multiple States',
      sectionSource: '',
      highlights: {
        highlight1: ['Multiple States'],
      },
      tooltips: [
        'You can call <code>useState()</code> more than once in a component function. You can have multiple states, multiple states slices or state pieces per component and all of the states inside of one at the same component will then all to be totally separated from each other.',
      ],
    },
    {
      sectionTitle: `55. Using One State Instead (And What's Better)`,
      sectionSource: '',
      highlights: {
        highlight1: ['Using One State'],
      },
    },
    {
      sectionTitle: '56. Updating State That Depends On The Previous State',
      sectionSource: '',
      highlights: {
        highlight1: ['Updating State That Depends On The Previous State'],
      },
      tooltips: [
        "Reacts schedules state updates, it doesn't perform them instantly.",
        `The best pratice to update state that depends on the previous state is to pass a function as argument to the state updating function provided by the <code>useState</code> hook. The function which you pass as argument to the state updating function will automatically be executed by React and it will receive the previous state snapshot for that state for which you're calling the state updating function.`,
      ],
    },
    {
      sectionTitle: '57. Handling Form Submission',
      sectionSource: '',
    },
    {
      sectionTitle: '58. Adding Two-Way Binding',
      sectionSource: '',
      highlights: {
        highlight1: ['Two-Way Binding'],
      },
      tooltips: [
        `Two-way binding is very useful when you're working with html <<span>form</span>> or <<span>input</span>> tags, because it allows you to gather user input, but then also change it.`,
      ],
    },
    {
      sectionTitle: '59. Child-to-Parent Component Communication (Bottom-up)',
      sectionSource: '',
      highlights: {
        highlight1: ['Child-to-Parent Component Communication'],
      },
      tooltips: [
        "We can't skip components in between. <code>props</code> can only be passed from parent to child, we can't skip intermediate components.",
      ],
    },
    {
      sectionTitle: '60. Lifting The State Up',
      sectionSource: '',
      highlights: {
        highlight1: ['Lifting The State Up'],
      },
    },
    {
      sectionTitle:
        '61. Controlled vs Uncontrolled Components & Stateless vs Stateful Components',
      sectionSource: '',
      highlights: {
        highlight1: ['Controlled', 'Stateless', 'Stateful'],
      },
    },
    {
      sectionTitle: '62. Module Resources',
      sectionSource: '',
    },
  ],
};

const section5 = {
  title:
    '<p class="card__title--1">Section 5</p> <p class="card__title--2">Rendering Lists & Conditional Content</p>',
  sections: [
    {
      sectionTitle: '63. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '64. Rendering Lists of Data',
      sectionSource: '',
      highlights: {
        highlight1: ['Lists of Data'],
      },
      tooltips: [
        'With React you can output arrays of JSX elements on your page.',
        'If you do output an array of JSX elements, then React is capable of rendering on the UI that array of JSX elements. So if you had an array of JSX elements as part of your JSX code, React would simply render that elements side by side.',
      ],
    },
    {
      sectionTitle: '65. Using Stateful Lists',
      sectionSource: '',
      highlights: {
        highlight1: ['Stateful Lists'],
      },
      tooltips: [
        `React won't update a component if you only change some variable inside of that component. Instead, to update a component, you need to use "useState" hook.`,
      ],
    },
    {
      sectionTitle: '66. Understanding "Keys"',
      sectionSource: '',
      highlights: {
        highlight2: ['"Keys"'],
      },
      tooltips: [
        'React has a special concept when it comes to rendering lists of data, a concept which exists to ensure that React is able to update and render such lists efficiently, without performance losses or bugs which may occur.',
        `The "key" prop is a prop you can add to any component, no matter if it's a custom component or if it's a built-in HTML element.`,
        'The "key" prop helps React to correctly identify and update (if needed) the list of JSX elements.',
        'Keys should be unique so that components maintain their identity across updates.',
        `Whenever you're working with an array of JSX elements React wants a "key" on every element.`,
      ],
    },
    {
      sectionTitle: '67. Outputting Conditional Content',
      sectionSource: '',
      highlights: {
        highlight1: ['Conditional Content'],
      },
      tooltips: [
        'With React you can render (output) on you page different content based on different conditions.',
        'You can store JSX content in variables. You are not limited to using JSX only if you return it, you can also use it to create a value, which is stored in a variable.',
        'When it comes to output content conditionally, long statements like "if" or "for" loops are not allowed between curly braces, in JSX expressions. So, for achive our results, we need to use Ternary Operator or Short Circuiting with && or ||',
      ],
    },
    {
      sectionTitle: '68. Adding Conditional Return Statements',
      sectionSource: '',
    },
    {
      sectionTitle: '69. Demo App: Adding a Chart',
      sectionSource: '',
    },
    {
      sectionTitle: '70. Adding Dynamic Styles',
      sectionSource: '',
      highlights: {
        highlight1: ['Dynamic Styles'],
      },
      tooltips: [
        'You can set the style of an element dynamically by adding the "style" prop.',
        `In React "style" prop doesn't want a string as a value, instead "style" want as a value an object.`,
        'This object you should use have the CSS property names as key names, and the values as key values.',
      ],
    },
    {
      sectionTitle: '71. Wrap Up & Next Steps',
      sectionSource: '',
    },
    {
      sectionTitle: '72. Fixing a Small Bug',
      sectionSource: '',
    },
    {
      sectionTitle: '73. Module Resources',
      sectionSource: '',
    },
  ],
};

const section6 = {
  title:
    '<p class="card__title--1">Section 6</p> <p class="card__title--2">Styling React Components</p>',
  sections: [
    {
      sectionTitle: '74. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '75. Setting Dynamic Inline Styles',
      sectionSource: '',
      highlights: {
        highlight1: ['Dynamic Inline Styles'],
      },
    },
    {
      sectionTitle: '76. Setting CSS Classes Dynamically',
      sectionSource: '',
      highlights: {
        highlight1: ['CSS Classes Dynamically'],
      },
    },
    {
      sectionTitle: '77. Introducing Styled Components',
      sectionSource: '',
      highlights: {
        highlight2: ['Styled Components'],
      },
      tooltips: [
        'Styled components is a package that helps you build components which have certain styles attached to them, where the styles really only affect the components to which they were attached and not any other components.',
      ],
    },
    {
      sectionTitle: '78. Styled Components & Dynamic Props',
      sectionSource: '',
    },
    {
      sectionTitle: '79. Styled Components & Media Queries',
      sectionSource: '',
    },
    {
      sectionTitle: '80. Using CSS Modules',
      sectionSource: '',
      highlights: {
        highlight2: ['CSS Modules'],
      },
      tooltips: [
        'CSS Modules is a feature which is only available in projects that are configured to support it.',
        "What CSS Modules does under the hood is it takes CSS classes that are in the CSS file that you are importing, and changes the name of that classes to be unique. That's the core thing it does, for every component it changes the classes names off the classes that are in the CSS file that you're importing, it generates new classes names to be unique.",
        'CSS Modules concept ensures that the CSS styles we set up in a CSS file are scoped to the component we import that file into.',
      ],
    },
    {
      sectionTitle: '81. Dynamic Styles with CSS Modules',
      sectionSource: '',
    },
    {
      sectionTitle: '82. Module Resources',
      sectionSource: '',
    },
  ],
};

const section7 = {
  title:
    '<p class="card__title--1">Section 7</p> <p class="card__title--2">Debugging React Apps</p>',
  sections: [
    {
      sectionTitle: '83. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '84. Understanding React Error Messages',
      sectionSource: '',
      highlights: {
        highlight1: ['Error Messages'],
      },
      tooltips: [
        'As a side note, you can have errors  that your IDE (VSCode) able to detect, but sometimes you get a React error which is not showing up in your IDE.',
      ],
    },
    {
      sectionTitle: '85. Analyzing Code Flow & Warnings',
      sectionSource: '',
      highlights: {
        highlight1: ['Code Flow', 'Warnings'],
      },
    },
    {
      sectionTitle: '86. Working with Breakpoints',
      sectionSource: '',
      highlights: {
        highlight1: ['Breakpoints'],
      },
    },
    {
      sectionTitle: '87. Using the React DevTools',
      sectionSource: '',
      highlights: {
        highlight1: ['React DevTools'],
      },
      tooltips: [
        "Let's have a look at a dedicated tool, which is available for React Development, which can help us with React specific problems and which can help us with understanding our React Application better and that would be the React Dev Tools.",
        'In the Components tab (Google Chrome) we see the actual React Components and the Components structure that is responsible for the UI output.',
      ],
    },
    {
      sectionTitle: '88. Module Resources',
      sectionSource: '',
    },
  ],
};

const section8 = {
  title:
    '<p class="card__title--1">Section 8</p> <p class="card__title--2">Time to Practice: A Complete Practice Project</p>',
  sections: [
    {
      sectionTitle: '89. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '90. Adding a "User" Component',
      sectionSource: '',
    },
    {
      sectionTitle: '91. Adding a re-usable "Card" Component',
      sectionSource: '',
    },
    {
      sectionTitle: '92. Adding a re-usable "Button" Component',
      sectionSource: '',
    },
    {
      sectionTitle: '93. Managing the User Input State',
      sectionSource: '',
    },
    {
      sectionTitle: '94. Adding Validation & Resetting Logic',
      sectionSource: '',
    },
    {
      sectionTitle: '95. Adding a Users List Component',
      sectionSource: '',
    },
    {
      sectionTitle: '96. Managing a List Of Users via State',
      sectionSource: '',
    },
    {
      sectionTitle: '97. Adding The "ErrorModal" Component',
      sectionSource: '',
    },
    {
      sectionTitle: '98. Managing the Error State',
      sectionSource: '',
    },
    {
      sectionTitle: '99. Module Resources',
      sectionSource: '',
    },
  ],
};

const section9 = {
  title:
    '<p class="card__title--1">Section 9</p> <p class="card__title--2">Diving Deeper: Working with Fragments, Portals & "Refs"</p>',
  sections: [
    {
      sectionTitle: '100. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '101. JSX Limitations & Workarounds',
      sectionSource: '',
      highlights: {
        highlight1: ['JSX Limitations'],
      },
      tooltips: [
        `You can't return more than one "root" JSX element (you also can't store more than one "root" JSX element in a variable).`,
        'The solution: always wrap adjacent elements!',
        `"div" soup problem: in bigger apps, you can easily end up with tons of unnecessary "div"s (or other elements) which add no semantic meaning or structure to the page, but are only there because of React's/JSX requirement.`,
      ],
    },
    {
      sectionTitle: '102. Creating a Wrapper Component',
      sectionSource: '',
      highlights: {
        highlight1: ['Wrapper Component'],
      },
      tooltips: [
        "A wrapping element it's an element which won't render anything to the DOM, but the requirement is not that there must be one root component being rendered to the DOM, the requirement just is that there must be one root element that you return or that you store in a variable.",
      ],
    },
    {
      sectionTitle: '103. React Fragments',
      sectionSource: '',
      highlights: {
        highlight2: ['Fragments'],
      },
      tooltips: [
        'Fragments let you group a list of children without adding extra nodes to the DOM.',
        'Fragments allow us to write cleaner code, to end up with less unnecessary HTML elements on the final page.',
        "You can access the Fragment component with React.Fragment, or in some projects you can also use the shortcut syntax. These two syntaxes render empty wrappers, which don't render any actual HTML element to the DOM.",
      ],
    },
    {
      sectionTitle: '104. Introducing React Portals',
      sectionSource: '/src/markdowns/104__React_Portals.html',
      highlights: {
        highlight2: ['Portals'],
      },
      tooltips: [
        'You can use a Portal to keep the structure that you have in your JSX code, but to render the JSX code differently (in other place) in the real DOM.',
        'Portals let your components render some of their children into a different place in the DOM.',
        'A Portal only changes the physical placement of the DOM node. In every other way, the JSX you render into a portal acts as a child node of the React component that renders it.',
      ],
    },
    {
      sectionTitle: '105. Working with Portals',
      sectionSource: '',
    },
    {
      sectionTitle: '106. Working with "ref"s',
      sectionSource: '',
      highlights: {
        highlight2: ['"ref"s'],
      },
      tooltips: [
        'In their most basic form, "ref"s allow us to get access to other DOM elements and work with them.',
        'With "ref"s we can set up a connection between a HTML element, which is being rendered in the end, and our JavaScript code.',
        'The "ref" prop is supported on all built-in HTML elemets, but you cannot use "ref" prop on you Custom Components.',
        '"ref" value which is being generated always is an object, which always has a "current" property key that stores the actual DOM node.',
        'Rarely use "ref"s to manipulate the DOM. Use "ref"s only to read the DOM node.',
      ],
    },
    {
      sectionTitle: '107. Controlled vs Uncontrolled Components',
      sectionSource: '',
    },
    {
      sectionTitle: '108. Module Resources',
      sectionSource: '',
    },
  ],
};

const section10 = {
  title:
    '<p class="card__title--1">Section 10</p> <p class="card__title--2">Advanced: Handling Side Effects, Using Reducers & Using the Context API</p>',
  sections: [
    {
      sectionTitle: '109. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '110. What are "Side Effects" & Introducing useEffect',
      sectionSource: '',
      highlights: {
        highlight1: ['"Side Effects"'],
      },
      tooltips: [
        "The main job of React is to bring something onto the screen and to make sure that the user may interact with that something, and that what's shown on the screen may change based on certain events.",
        'Side effects are everything else that might be happening in your app and that thing is not related to bring something onto the screen.',
        "A good example is sending a Http request: you might be sending a Http request, to then draw something onto the screen once you got the response, but sending the request itself and handling potential errors and so on, that's not something you need React for, that's not something React cares about, that's not what React is.",
      ],
    },
    {
      sectionTitle: '111. Using the useEffect() Hook',
      sectionSource: '',
      highlights: {
        highlight2: ['useEffect()'],
      },
      tooltips: [
        'Sometimes, we want to run some additional code after React has updated the DOM. What does useEffect() do? By using this hook, you tell React that your component needs to do something after render.',
        'The useEffect() hook is called with two arguments. The first argument is a function that should be executed after every component evaluation, if the specified dependencies changed. The specified dependencies are the second argument that you pass in useEffect().',
        'Therefore, in that first function you can put any side effect code, and that code will then only execute when the dependencies specified by you changed, and not when the component re-renders.',
        'useEffect() will run no matter what only when your app is run for the first time. After your app run for the first time, useEffect() will only executed if the dependencies changes.',
        'useEffect() function runs after every component render cycle, not before it, not during it, but after it.',
      ],
    },
    {
      sectionTitle: '112. useEffect & dependencies',
      sectionSource: '',
      highlights: {
        highlight1: ['useEffect & dependencies'],
      },
      tooltips: [
        "You add as dependencies what you're using in your side effect function.",
        "Does useEffect() run after every render? Yes! By default, if you don't pass an array of dependencies, useEffect() runs both after the first render and after every component render cycle.",
      ],
    },
    {
      sectionTitle: '113. What to add & not to add as dependencies',
      sectionSource: '',
    },
    {
      sectionTitle: '114. Using the useEffect Cleanup Function',
      sectionSource: '',
      highlights: {
        highlight1: ['useEffect Cleanup Function'],
      },
      tooltips: [
        'In the useEffect() function you can return only one specific thing, and that thing is a function. The function that you return from the useEffect() is called Cleanup function.',
        'This function that you return from useEffect() will run as a cleanup process before useEffect() will be re-executed. The Cleanup function will not run when the useEffect() is executed for the first time.',
      ],
    },
    {
      sectionTitle: '115. useEffect Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '116. Introducing useReducer() for State Management',
      sectionSource:
        '/src/markdowns/116__Introducing_useReducer_for_state_management.html',
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
      sectionTitle: '117. Using the useReducer() Hook',
      sectionSource: '/src/markdowns/117__Using_the_useReducer_hook.html',
    },
    {
      sectionTitle: '118. useReducer & useEffect',
      sectionSource: '',
    },
    {
      sectionTitle:
        '119. Adding Nested Properties As Dependencies To useEffect',
      sectionSource: '',
      highlights: {
        highlight1: ['Nested Properties As Dependencies To useEffect'],
      },
      tooltips: [
        'We used object destructuring to add object properties as dependencies to useEffect()',
        'The key thing is NOT that we use destructuring, but that we pass specific properties instead of the entire object as a dependency.',
      ],
    },
    {
      sectionTitle: '120. useReducer vs useState for State Management',
      sectionSource: '',
    },
    {
      sectionTitle: '121. Introducing React Context (Context API)',
      sectionSource: '/src/markdowns/121__Introducing_React_Context.html',
      highlights: {
        highlight2: ['React Context (Context API)'],
      },
      tooltips: [
        `I'm talking about a problem, where you are passing a lot of data through a lot of components via <code>props</code>. Now it is quite common that you pass data to components through <code>props</code>, but it's always a problem if you forward state through multiple components. In bigger apps, you could easily build such "props chains", which are used to forward data through components to other components.`,
        'React Context provides a way to pass data through the component tree without having to pass <code>props</code> down manually at every level.',
        'With React Context your are able to directly change state from any component in our app, and directly pass state to any component in our app, without building such a "props chain".',
        'React Context allows us to manage wide state and provides a way to pass data through the component tree without having to pass <code>props</code> down manually at every level ("props chain").',
        'Context is designed to share data that can be considered "global" for a tree of React components. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Using Context, we can avoid passing <code>props</code> through intermediate elements.',
        'Apply Context sparingly because it MAKES COMPONENT REUSE MORE DIFFICULT !!! If you would use Context instead of <code>props</code>, every Component would do the same thing, it would be bound to the same Context, so it might be less reusable.',
        "You can have multiple Contexts for multiple global states and of course, you can also use just one Context for a bigger state, that's all up to you.",
      ],
    },
    {
      sectionTitle: '122. Using the React Context API',
      sectionSource: '/src/markdowns/122__Using_the_React_Context_API.html',
      highlights: {
        highlight1: ['Using the React Context API'],
      },
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
      sectionTitle: '123. Tapping Into Context with the useContext Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '124. Making Context Dynamic',
      sectionSource: '',
      highlights: {
        highlight1: ['Making Context Dynamic'],
      },
      tooltips: [
        "The good thing is we can set up a dynamic context, where we don't just pass data to other components, but also functions. Therefore, we're can using this app-wide or component-wide Context object, to manage our state and to manage the function/functions that changes the state.",
      ],
    },
    {
      sectionTitle: '125. Building & Using a Custom Context Provider Component',
      sectionSource:
        '/src/markdowns/125__Building_&_using_a_Custom_Context_Provider_Component.html',
    },
    {
      sectionTitle: '126. React Context Limitations',
      sectionSource: '',
    },
    {
      sectionTitle: '127. Learning the "Rules of Hooks"',
      sectionSource: '',
      highlights: {
        highlight1: ['Rules of Hooks'],
      },
      tooltips: [
        'Only call React Hooks in React Functions! That means in a React Component Function, or also allowed in a Custom Hook Function.',
        'Only call React Hooks at the Top Level of your React Component Function or Custom Hook Function.',
      ],
    },
    {
      sectionTitle: '128. Refactoring an Input Component',
      sectionSource: '',
    },
    {
      sectionTitle: '129. Diving into "Forward Refs"',
      sectionSource: '',
      highlights: {
        highlight2: ['"Forward Refs"'],
      },
      tooltips: [
        'The "ref" prop is supported on all built-in HTML Components, but you cannot use "ref" prop on your Custom Components!',
        'If you want to use "ref" on your Custom Component, you need to use React.forwardRef() & useImperativeHandle() hook.',
      ],
    },
    {
      sectionTitle: '130. Module Resources',
      sectionSource: '',
    },
  ],
};

const section11 = {
  title:
    '<p class="card__title--1">Section 11</p> <p class="card__title--2">Practice Project: Building a Food Order App</p>',
  sections: [
    {
      sectionTitle: '131. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '132. Starting Setup',
      sectionSource: '',
    },
    {
      sectionTitle: '133. Adding a "Header" Component',
      sectionSource: '',
    },
    {
      sectionTitle: '134. Adding the "Cart" Button Component',
      sectionSource: '',
    },
    {
      sectionTitle: '135. Adding a "Meals" Component',
      sectionSource: '',
    },
    {
      sectionTitle: '136. Adding Individual Meal Items & Displaying Them',
      sectionSource: '',
    },
    {
      sectionTitle: '137. Adding a Form',
      sectionSource: '/src/markdowns/137__Adding_a_form.html',
      highlights: {
        highlight1: ['Adding a Form'],
      },
      tooltips: [
        'When you receive an object through "props", you can use a little trick to pass all the configuration data that you have in that object for a component by using spread operator: <<span>input {...props.object}</span> />',
      ],
    },
    {
      sectionTitle: '138. Fixing Form Input IDs',
      sectionSource: '',
    },
    {
      sectionTitle: '139. Working on the "Shopping Cart" Component',
      sectionSource: '',
    },
    {
      sectionTitle: '140. Adding a Modal via a React Portal',
      sectionSource: '',
    },
    {
      sectionTitle: '141. Managing Cart & Modal State',
      sectionSource: '',
    },
    {
      sectionTitle: '142. Adding a Cart Context',
      sectionSource: '',
    },
    {
      sectionTitle: '143. Using the Context',
      sectionSource: '',
    },
    {
      sectionTitle: '144. Adding a Cart Reducer',
      sectionSource: '',
    },
    {
      sectionTitle: '145. Working with Refs & Forward Refs',
      sectionSource:
        '/src/markdowns/145__Working_with_Refs_&_Forward_Refs.html',
    },
    {
      sectionTitle: '146. Outputting Cart Items',
      sectionSource: '',
    },
    {
      sectionTitle: '147. Working on a More Complex Reducer Logic',
      sectionSource: '',
    },
    {
      sectionTitle: '148. Making Items Removable',
      sectionSource: '',
    },
    {
      sectionTitle: '149. Using the useEffect Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '150. Module Resources',
      sectionSource: '',
    },
  ],
};

const section12 = {
  title:
    '<p class="card__title--1">Section 12</p> <p class="card__title--2">A Look Behind The Scenes Of React & Optimization Techniques</p>',
  sections: [
    {
      sectionTitle: '151. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '152. How React Really Works',
      sectionSource: '',
    },
    {
      sectionTitle: '153. Component Updates In Action',
      sectionSource: '',
    },
    {
      sectionTitle: '154. A Closer Look At Child Component Re-Evaluation',
      sectionSource: '',
    },
    {
      sectionTitle:
        '155. Preventing Unnecessary Re-Evaluations with React.memo()',
      sectionSource: '',
    },
    {
      sectionTitle: '156. Preventing Function Re-Creation with useCallback()',
      sectionSource: '',
    },
    {
      sectionTitle: '157. useCallback() and its Dependencies',
      sectionSource: '',
    },
    {
      sectionTitle: '158. A First Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '159. A Closer Look At State & Components',
      sectionSource: '',
    },
    {
      sectionTitle: '160. Understanding State Scheduling & Batching',
      sectionSource: '',
    },
    {
      sectionTitle: '161. Optimizing with useMemo()',
      sectionSource: '',
    },
    {
      sectionTitle: '162. Module Resources',
      sectionSource: '',
    },
  ],
};

const section13 = {
  title:
    '<p class="card__title--1">Section 13</p> <p class="card__title--2">An Alternative Way Of Building Components: Class-based Components</p>',
  sections: [
    {
      sectionTitle: '163. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '164. What & Why',
      sectionSource: '',
    },
    {
      sectionTitle: '165. Adding a First Class-based Component',
      sectionSource: '',
    },
    {
      sectionTitle: '166. Working with State & Events',
      sectionSource: '',
    },
    {
      sectionTitle:
        '167. The Component Lifecycle (Class-based Components Only!)',
      sectionSource: '',
    },
    {
      sectionTitle: '168. Lifecycle Methods In Action',
      sectionSource: '',
    },
    {
      sectionTitle: '169. Class-based Components & Context',
      sectionSource: '',
    },
    {
      sectionTitle: '170. Class-based vs Functional Components: A Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '171. Introducing Error Boundaries',
      sectionSource: '',
    },
    {
      sectionTitle: '172. Module Resources',
      sectionSource: '',
    },
  ],
};

const section14 = {
  title:
    '<p class="card__title--1">Section 14</p> <p class="card__title--2">Sending Http Requests (e.g. Connecting to a Database)</p>',
  sections: [
    {
      sectionTitle: '173. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '174. How To (Not) Connect To A Database',
      sectionSource: '',
    },
    {
      sectionTitle: '175. Using the Star Wars API',
      sectionSource: '',
    },
    {
      sectionTitle: '176. Our Starting App & Backend',
      sectionSource: '',
    },
    {
      sectionTitle: '177. Sending a GET Request',
      sectionSource: '',
    },
    {
      sectionTitle: '178. Using async / await',
      sectionSource: '',
    },
    {
      sectionTitle: '179. Handling Loading & Data States',
      sectionSource: '',
    },
    {
      sectionTitle: '180. Handling Http Errors',
      sectionSource: '',
    },
    {
      sectionTitle: '181. Using useEffect() For Requests',
      sectionSource: '',
    },
    {
      sectionTitle: '182. Preparing The Project For The Next Steps',
      sectionSource: '',
    },
    {
      sectionTitle: '183. Sending a POST Request',
      sectionSource: '',
    },
    {
      sectionTitle: '184. Wrap Up',
      sectionSource: '',
    },
    {
      sectionTitle: '185. Module Resources',
      sectionSource: '',
    },
  ],
};

const section15 = {
  title:
    '<p class="card__title--1">Section 15</p> <p class="card__title--2">Building Custom React Hooks</p>',
  sections: [
    {
      sectionTitle: '186. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '187. What are "Custom Hooks"?',
      sectionSource: '',
    },
    {
      sectionTitle: '188. Creating a Custom React Hook Function',
      sectionSource: '',
    },
    {
      sectionTitle: '189. Using Custom Hooks',
      sectionSource: '',
    },
    {
      sectionTitle: '190. Configuring Custom Hooks',
      sectionSource: '',
    },
    {
      sectionTitle: '191. Onwards To A More Realistic Example',
      sectionSource: '',
    },
    {
      sectionTitle: '192. Building a Custom Http Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '193. Using the Custom Http Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '194. Adjusting the Custom Hook Logic',
      sectionSource: '',
    },
    {
      sectionTitle: '195. Using The Custom Hook In More Components',
      sectionSource: '',
    },
    {
      sectionTitle: '196. Module Resources',
      sectionSource: '',
    },
  ],
};

const section16 = {
  title:
    '<p class="card__title--1">Section 16</p> <p class="card__title--2">Working with Forms & User Input</p>',
  sections: [
    {
      sectionTitle: '197. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '198. Our Starting Setup',
      sectionSource: '',
    },
    {
      sectionTitle: "199. What's So Complex About Forms?",
      sectionSource: '',
    },
    {
      sectionTitle:
        '200. Dealing With Form Submission & Getting User Input Values',
      sectionSource: '',
    },
    {
      sectionTitle: '201. Adding Basic Validation',
      sectionSource: '',
    },
    {
      sectionTitle: '202. Providing Validation Feedback',
      sectionSource: '',
    },
    {
      sectionTitle: '203. Handling the "was touched" State',
      sectionSource: '',
    },
    {
      sectionTitle: '204. React To Lost Focus',
      sectionSource: '',
    },
    {
      sectionTitle: '205. Refactoring & Deriving States',
      sectionSource: '',
    },
    {
      sectionTitle: '206. Managing The Overall Form Validity',
      sectionSource: '',
    },
    {
      sectionTitle: '207. Adding A Custom Input Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '208. Re-Using The Custom Hook',
      sectionSource: '',
    },
    {
      sectionTitle: '209. A Challenge For You!',
      sectionSource: '',
    },
    {
      sectionTitle: '210. Applying Our Hook & Knowledge To A New Form',
      sectionSource: '',
    },
    {
      sectionTitle: '211. Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '212. Bonus: Using useReducer()',
      sectionSource: '',
    },
    {
      sectionTitle: '213. Module Resources',
      sectionSource: '',
    },
  ],
};

const section17 = {
  title:
    '<p class="card__title--1">Section 17</p> <p class="card__title--2">Practice Project: Adding Http & Forms To The Food Order App</p>',
  sections: [
    {
      sectionTitle: '214. Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: '215. Moving "Meals" Data To The Backend',
      sectionSource: '',
    },
    {
      sectionTitle: '216. Fetching Meals via Http',
      sectionSource: '',
    },
    {
      sectionTitle: '217. Handling the Loading State',
      sectionSource: '',
    },
    {
      sectionTitle: '218. Handling Errors',
      sectionSource: '',
    },
    {
      sectionTitle: '219. Adding A Checkout Form',
      sectionSource: '',
    },
    {
      sectionTitle: '220. Reading Form Values',
      sectionSource: '',
    },
    {
      sectionTitle: '221. Adding Form Validation',
      sectionSource: '',
    },
    {
      sectionTitle: '222. Submitting & Sending Cart Data',
      sectionSource: '',
    },
    {
      sectionTitle: '223. Adding Better User Feedback',
      sectionSource: '',
    },
    {
      sectionTitle: '224. Summary',
      sectionSource: '',
    },
    {
      sectionTitle: '225. Module Resources',
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

export const data = [
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
  section13,
  section14,
  section15,
  section16,
  section17,
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
