const React_basics = {
  title: '<p class="card__title--2">React basics & working with components</p>',
  tooltips: [
    `<p>React is a <i>JavaScript library for <u>rendering user interfaces</u> (UI)</i>. UI is built from small units like buttons, text, and images. <i>React lets you combine them into <u>reusable, nestable components</u></i>.</p>
    <p>From web sites to phone apps, <i>everything on the screen can be broken down into components</i>.</p>
    <p>In this section, you'll learn to create and customize React components.</p>`,
  ],
  sections: [
    {
      sectionTitle: 'What are components and why is React all about them?',
      sectionSource:
        '/src/markdowns/01_React_basics/What_are_components_and_why_is_React_all_about_them.html',
      highlights: {
        highlight1: ['components'],
      },
      tooltips: [
        `<h3>Components: UI building blocks</h3>
        <p>React is a JavaScript library for <i>building user interfaces (UI)</i>.</p>
        <p>React applications are built from <i>isolated pieces of UI</i> called components. A component is <i>a piece of the UI that has its <u>own logic</u> and <u>appearance</u></i>. A component can be as small as a button, or as large as an entire page.</p>
        <p>React lets you combine your <i>HTML markup</i>, <i>CSS</i>, and <i>JavaScript</i> into custom components, <i>reusable UI elements</i> for your app. Just like with HTML tags, you can compose, order and nest components to design whole pages.</p>
        `,
        `<h3>What is a component?</h3>
        <p>Conceptually, components are just <u>JavaScript functions</u> that accept arbitrary inputs (called <i>props</i>) and return <i>JSX markup</i> describing what should appear on the screen. So a React component is <i>a JavaScript function that you can sprinkle with markup</i>.</p>
        <p>Components are in the end just a combination of HTML, CSS and JavaScript.</p>
        <p>Components are <i><u>reusable</u> building blocks</i> in your UI. You don't have to reuse a component to make it a component, it's just one of its traits that a component is reusable. Components are a handy way to organize UI code and markup, even if some of them are only used once.</p>
        <ul>React components are regular JavaScript functions except:
        <li>- their names always begin with a <i>capital letter</i>;</li>
        <li>- they <i>return JSX markup</i>.</li>
        </ul>`,
        `<h3>Why components?</h3>
        <p>React is all about components because <i>the UI in the end is made up of components</i>.</p>
        <p>React is all about <i>splitting your UI into small building blocks (components), where every building block (component) has a <u>clear task</u></i>, and therefore your code stays maintainable and manageable, and React will do the heavy lifting of rendering something onto the screen and of combining all your components.</p>
        <p>Components let you <i>split the UI into <u>independent</u>, <u>reusable</u> pieces, and <u>think about each piece in isolation</u></i>.</p>
        `,
        `<h3>Components & separation of concerns</h3>
        <p>Separation of concerns = don't do too many things in one and the same place (function). Split big chunks of code into multiple smaller functions.</p>
        <p>Having a separation of concerns helps you with <i>keeping your code base <u>small</u> and <u>manageable</u></i>, instead of having one large file which holds all the HTML markup and all the JavaScript logic.</p>
        <p>For the entire UI you have <i>small separated units (components)</i>, where every component has <i>one specific task it focuses on</i>. If you <i>split your code across multiple files</i>, then you will have small pieces of code which are easy to manage and maintain.</p>
        <p>These of course are not concepts or ideas React invented. If you take a step back from React and you think about programming in general, then of course in any programming language and no matter what you are building, you tend to work with functions and you <i>split your code into multiple small functions</i>, which then may call each other to outsource logic into a function, to separate concerns and to be <i>able to execute the same code multiple times</i> if you need to. React just picks up that concept of functions and of <i>separating code across functions</i>, and translates it to the front-end web application world where you built an entire UI by splitting your code into multiple components, which you then can mix and match as you need to.</p>
        `,
      ],
    },
    {
      sectionTitle: 'How to add markup to JavaScript with JSX',
      sectionSource:
        '/src/markdowns/01_React_basics/How_to_add_markup_to_JavaScript_with_JSX.html',
      highlights: {
        highlight2: ['JSX'],
      },
      tooltips: [
        `<h3>Why React mixes markup with rendering logic?</h3>
        <p>The web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript — often in separate files! Content was marked up inside HTML while the page's logic lived separately in JavaScript.</p>
        <p>But as the Web became more interactive, <i>logic increasingly determined content. JavaScript was in charge of the HTML!</i> This is why <i>in React, rendering logic and markup live together in the same place — components</i>.</p>
        <p>Keeping a button's <i>rendering logic and markup together</i> ensures that they <i>stay in sync with each other</i> on every edit. Conversely, details that are unrelated, such as the button's markup and a sidebar's markup, are <i>isolated</i> from each other, making it safer to change either of them on their own.</p>
        `,
        `<h3>JSX: Putting markup into JavaScript</h3>
        <p>Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a <i>syntax extension called JSX</i> to represent that markup. JSX looks a lot like HTML, but it is a bit stricter, has a few more rules than HTML and can display dynamic information.</p>
        <p>If you have some (perfectly valid) HTML markup and you want to put it into your component by copy and paste it as is, it won't always work. This is because JSX is stricter and has a few more rules than HTML! <i>JSX markup is written like HTML, but it is actually JavaScript under the hood!</i> JSX just provides <i>syntactic sugar</i> for the <code>React.createElement()</code> function.</p>
        <p>JSX lets you <i>write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place</i>.</p>
        `,
        `<h3>You can store JSX markup in variables</h3>
        <p>You are not limited to using JSX only if you return it, you can also use it to create a value, which is stored in a variable.</p>
        `,
        `<h3>How JSX is different from HTML (rules of JSX)</h3>
        <ul>JSX is stricter than HTML:
        <li>1. <i>Return a single root element</i>: Your component can't return multiple JSX tags. You have to wrap them into a shared parent, like a <<span>div></span>...<<span>/div></span> or if you don't want to add an extra parent tag to your markup you can write an empty <>...<</span>/></span> wrapper.</li>
        <li>2. <i>Close all the tags</i>: JSX requires tags to be explicitly closed; self-closing tags like <<span>img></span> or <<span>input></span> must become <<span>img /></span> and <<span>input /></span>.</li> 
        <li>3. <i>camelCase all most of the things</i>: JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names; for example, their names can't contain dashes or be reserved words like <code>class</code>. This is why, in React, many HTML and SVG attributes are written in camelCase.</li>
        </ul>
        `,
        `<h3>Why do multiple JSX tags need to be wrapped?</h3>
        <p>JSX markup looks like HTML markup, but under the hood it is transformed into plain JavaScript objects. You can't return two objects from a function without wrapping them into an array. This explains why you also can't return two JSX tags without wrapping them into another tag or a <code>React.Fragment</code>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'JavaScript in JSX with curly braces: outputting dynamic data & working with expressions in JSX',
      sectionSource:
        '/src/markdowns/01_React_basics/JavaScript_in_JSX_with_Curly_Braces.html',
      highlights: {
        highlight1: ['Outputting dynamic data', 'expressions in JSX'],
        highlight2: ['JavaScript in JSX'],
      },
      tooltips: [
        `<h3>JavaScript in JSX with curly braces</h3>
        <p>JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to “open a window” to JavaScript.</p>
        <p>JSX is a special way of writing JavaScript. That means it's possible to use JavaScript inside it — with curly braces <code>{}</code>.</p>
        <p><i>Curly braces <code>{}</code> let you <u>bring JavaScript logic and variables into your markup</u>!</i></p>
        <p>Curly braces let you "escape back" into JavaScript so that you can embed some variable from your code and display it to the user or to write some expressions. <i>Any JavaScript expression will work between curly braces, including function calls</i>.</p>
        <p><i>JSX is very minimal as a templating language</i> because it lets you organize data and logic using JavaScript.</p>
        `,
        `<h3>JSX curly braces & JSX attributes</h3>
        <p>JSX attributes inside quotes are passed as strings, but with curly braces you can also "escape into JavaScript" from JSX attributes.</p>
        `,
        `<h3>Using "double curlies": CSS and other objects in JSX</h3>
        <p>In addition to strings, numbers, and other JavaScript expressions, <i>you can even pass objects in JSX</i>. To pass a JavaScript object in JSX, <i>you must wrap the object in another pair of curly braces</i>.</p>
        <p>You may see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases). But when you need an inline style, you pass an object to the <code>style</code> attribute.</p>
        <p><i>The next time you see <code>{{ ... }}</code> in JSX, know that it's nothing more than an object inside the JSX curlies!</i></p>
        `,
        `<h3>Write any expression inside JSX curly braces</h3>
        <ul>You can put more complex expressions inside the JSX curly braces, for example:
        <li>- string concatenation</li>
        <li>- function calls</li>
        <li>- JavaScript objects</li>
        </ul>
        `,
        `<h3>You can only use curly braces in two ways inside JSX:</h3>
        <p>- as <i>text</i> directly inside a JSX tag<p>
        <p>- as <i>attributes</i> immediately following the <code>=</code> sign<p>`,
      ],
    },
    {
      sectionTitle: 'Building a first custom component',
      sectionSource:
        '/src/markdowns/01_React_basics/Building_a_first_custom_component.html',
      highlights: {
        highlight2: ['custom component'],
      },
      tooltips: [
        `<h3>There are always 3 steps to build a custom component:</h3>
        <p>1. <i>Create & export</i> the component;</p>
        <p>2. <i>Import</i> the component;</p>
        <p>3. <i>Use</i> the component.</p>`,
        `<h3>Components: UI building blocks</h3>
        <p>React applications are built from <i>isolated pieces of UI</i> called components. A React component is <i>a JavaScript function that you can sprinkle with markup</i>.</p>
        <p>React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app. Just like with HTML tags, you can compose, order and nest components to design whole pages. As your project grows, you will notice that many of your designs can be composed by reusing components you already wrote, speeding up your development.</p>
        <p>The key difference between React components and built-in HTML tags is that <i>React components names must always start with a capital letter, while HTML tags must be lowercase</i>. React components are regular JavaScript functions, but their names must start with a capital letter or they won't work!</p>
        <p>These custom components are not really HTML elements which end up on the screen, you just use them in your JSX markup. In the end, what ends up on the screen are just default HTML elements.</p>
        `,
        `<h3>React component & return statements</h3>
        <p>In a React component return statements can be written all on <i>one line</i> but if your markup isn't all on the same line as the <code>return</code> keyword, you must wrap it in <i>a pair of parentheses</i>.</p>
        <p>Without parentheses, any code on the lines after <code>return</code> will be ignored!</p>`,
        `<h3>Nesting components</h3>
        <p><i>Components (parent) can render other components (child)</i>, but you must never nest their definitions (<i>never define a component inside another component!</i>). Instead, <i>define every component at the top level</i>.</p>
        <p>When a child component needs some data from a parent, pass it by props instead of nesting definitions.</p>
        `,
        `<h3>Splitting components in separate files</h3>
        <p>You can have <i>multiple components in the same file</i>, but is considered a good practice to put new components into new files, so that you have <i>one file per component</i>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'How to configure components with props: passing data to a component via props',
      sectionSource:
        '/src/markdowns/01_React_basics/Passing_data_to_a_component_via_props.html',
      highlights: {
        highlight2: ['props'],
      },
      tooltips: [
        `<h3>Components comunicate with each other via props</h3>
        <p>React components use props to communicate with each other. <i>Every <u>parent component</u> can pass some information to its <u>child components</u> by giving them props</i>. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, functions, and even JSX markup!</p>
        <p>Props is a super important concept because it allows you to <i>make your components <u>reusable</u></i> and it <i>allows you to <u>pass data</u> or/and <u>functions</u></i> from a parent component to a child component.</p>
        `,
        `<h3>Passing props to a child component</h3>
        <p><i>To pass props, add them to the JSX markup, just like you would with HTML attributes.</i> Props let you think about parent and child components independently.</p>
        <p>Props serve the same role as arguments serve for functions — in fact, <i>props are the only argument to your component! React component functions accept a single argument, a <code>props</code> object</i>.</p>
        <p>When you pass props from parent to child you can't skip intermediate child components in between, so it's also totally fine to have a <i>component which just passes data on</i>.</p>
        `,
        `<h3>Reading props by destructuring them</h3>
        <p>Usually you don't need the whole <code>props</code> object itself, so you can destructure it into individual props. <i>To read props, you can use the function destructuring syntax</i>: <code>Avatar({ person, size })</code>.</p>
        `,
        `<h3>Specifying a default value for a prop</h3>
        <p>If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting <code>=</code> and the default value right after the parameter <code>function Avatar({ person, size = 100 })</code>.</p>
        <p><i>The default value is only used if the <code>size</code> prop is missing or if you pass <code>size={undefined}</code>. But if you pass <code>size={null}</code> or <code>size={0}</code>, the default value will not be used.</i></p>
        `,
        `<h3>Naming conventions</h3>
        <p>The convention for props which hold functions is to start their name with "on".</p>
        `,
        `<h3>Forwarding props with the spread syntax</h3>
        <p>Sometimes, passing props gets very repetitive. Some components forward all of their props to their children, so <i>you can forward all props with the spread syntax</i>: <code><<span>input {...props}</span> /></code> or <code><<span>input {...props.object}</span> /></code></p>
        <p>Use spread syntax with restraint. If you're using it in every other component, something is wrong. Often, it indicates that <i>you should split your components and pass children as JSX</i>.</p>
        `,
        `<h3>Passing JSX as children: <code>props.children</code></h3>
        <p>It is common to nest built-in browser tags; sometimes you'll want to nest your own components the same way.</p>
        <p><i>When you nest content inside a JSX tag, the parent component will receive that content in a prop called <code>children</code></i>.</p>
        <p>With the help of <code>children</code> prop you can build <i>wrapper components</i>. Wrapper components can wrap any nested content. It doesn't need to “know” what's being rendered inside of it.</p>
        <p>You can think of a component with a <code>children</code> prop as having a “hole” that can be “filled in” by its parent components with arbitrary JSX markup.</p>
        `,
        `<h3>How props change over time</h3>
        <p><i>A component may receive different props over time. Props are not always static!</i> Props reflect a component's data at any point in time, rather than only in the beginning.</p>
        <p>However, props are immutable — a term from computer science meaning “unchangeable”. When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props — a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.</p>
        <p>Props are <i><u>read-only</u> snapshots in time: every render receives a new version of props</i>.</p>
        <p><i>Don't try to “change props”</i>. When you need to respond to the user interaction, you will need to “set state”.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'The concept of "composition": pass components as data to other components via <code>props.children</code>',
      sectionSource:
        '/src/markdowns/01_React_basics/The_concept_of_composition_props_children.html',
      highlights: {
        highlight1: ['"composition"'],
        highlight2: ['<code>props.children</code>'],
      },
      tooltips: [
        `<h3>Pass components as data to other components: <code>props.children</code></h3>
        <p>Sometimes you wanna have a component where you don't configure everything through props, but where instead you're able to <i><u>pass content (JSX markup)</u> between the opening and closing tags of that component</i>.</p>
        <p><i>Out of the box, you can't use your custom components as wrappers around JSX markup</i>. Out of the box you can only use built-in HTML elements (<<span>div</span>>, <<span>h2</span>>, <<span>p</span>> tags) as wrappers.</p>
        <p>If you want to use <i>custom components as wrappers</i>, you need to use one special prop that is build into React, which every component receives, even if you're never setting it explicitly, and that is <i><code>props.children</code></i>.</p>
        <p>With the help of <code>props.children</code> prop you can build <i>wrapper components</i>. Wrapper components can wrap any nested content. It doesn't need to “know” what's being rendered inside of it. <i>You can think of a component with a <code>props.children</code> prop as having a "hole" that can be "filled in" by its parent components with arbitrary JSX markup.</i></p>
        <p><code>props.children</code> is a reserved name, and the value of this special <code>children</code> prop will always be the content between the opening and closing tags of your custom component. This is a concept called composition.</p>
        
        `,
      ],
    },
    {
      sectionTitle:
        'When and how to create multi-component files: splitting a component into multiple components',
      sectionSource:
        '/src/markdowns/01_React_basics/Splitting_a_component_into_multiple_components.html',

      tooltips: [
        `<h3>One component per one file</h3>
        <p>You can declare many components in one file, but large files can get difficult to navigate. To solve this, you can export a component into its own file, and then import that component from another file.</p>
        <p><i>The magic of components lies in their <u>reusability</u>: you can create components that are composed of other components</i>. But as you nest more and more components, it often makes sense to start splitting them into different files. This lets you <i>keep your files easy to scan and <u>reuse</u> components in more places</i>.</p>
        `,
        `<h3>Separation of concerns</h3>
        <p>React is all about splitting your app into small building blocks (components), where every building block (component) is <i>focused on <u>one core task</u></i>, and therefore your <i>code stays <u>maintainable</u> and <u>manageable</u></i>. You build your overall UI by combining these building blocks (components).</p>
        <p>If you split your code across multiple files, then you'll have small pieces of code which are easy to manage and maintain.</p>
        `,
        `<h3>Multiple components per one file</h3>
        <p>Components are regular JavaScript functions, so you can keep multiple components in the same file. This is <i>convenient when components are relatively <u>small</u> or tightly <u>related to each other</u></i>. If the file gets crowded, you can always split your components to a separate file.</p>
        <p>Thus far, we always had one component per file, and that generally is a good rule to keep, but if you have a component that is really only getting used by the other component in that file, having both components in the same file can make sense too.</p>`,
        `<h3>Importing and exporting components</h3>
        <ul>You can move a component into another file in three steps:
        <li>1. <i>Make a new JS file</i> to put the component in;</li>
        <li>2. <i>Export your function component</i> from that file using either <u>default</u> or <u>named</u> exports;</li>
        <li>3. <i>Import it</i> in the file where you'll use the component using the corresponding technique for importing default or named exports.</li>
        </ul>
        <p><i>How you export your component dictates how you must import it</i>. A file can have no more than one default export, but it can have as many named exports as you like.</p>
        `,
        `<h3>When to use default and named imports and exports</h3>
        <p>People often use <i>default exports if the file exports only one component</i>, and use <i>named exports if it exports multiple components and values</i>.</p>
        <p>Regardless of which coding style you prefer, <i>always give meaningful names to your component functions and the files that contain them</i>. Components without names, like <code>export default () => {}</code>, are discouraged because they make debugging harder.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Thinking in React',
      sectionSource: '/src/markdowns/01_React_basics/Thinking_in_React.html',
      tooltips: [
        `<h3>React & user interfaces (UI)</h3>
        <p>React can change how you think about the designs you look at and the apps you build. When you build a UI with React:</p>
        <p>- <i>you will first break it apart into pieces called components</i></p>
        <p>- then you will <i>describe the different visual states for each of your components</i></p>
        <p>- finally you will <i>connect your components together so that the data flows through them</i>.</p>`,
        `<h3>Start with the mockup</h3>
        <p>Imagine that you already have a JSON API and a mockup from a designer. To implement a UI in React, you will usually follow the same five steps:</p>
        <p>1. <i>Break the UI</i> into a <i><u>component hierarchy</u></i></p>
        <p>2. <i>Build a static version</i> in React</p>
        <p>3. Find the <i>minimal but complete representation of UI state</i></p>
        <p>4. Identify <i>where your state should live</i></p>
        <p>5. Add <i>inverse data flow</i></p>
        `,
        `<h3>Step 1: Break the UI into a component hierarchy</h3>
        <p>Start by drawing boxes around every component and subcomponent in the mockup and naming them. If you work with a designer, they may have already named these components in their design tool. Check in with them!</p>
        <ul>Depending on your background, you can think about splitting up a design into components in different ways:
        <li>- <i>programming</i>: use the same techniques for deciding if you should create a new function or object. One such technique is the <i>single responsibility principle</i>, that is, <i>a component should ideally only do one thing</i>. If it ends up growing, it should be decomposed into smaller subcomponents.</li>
        <li>- CSS</li>
        <li>- design</li>
        </ul>
        <p><i>If your JSON is well-structured, you'll often find that it naturally maps to the component structure of your UI. That's because UI and data models often have the same information architecture — that is, the same shape.</i> Separate your UI into components, where <i>each component matches one piece of your data model</i>.</p>
        <p>When you finish to idenitfy the components in the mockup, arrange them into a hierarchy. <i>Components that appear within another component in the mockup should appear as a child in the hierarchy.</i></p>
        `,
        `<h3>Step 2: Build a static version in React</h3>
        <p>Now that you have your component hierarchy, it's time to implement your app. The most straightforward approach is to <i>build a version that renders the UI from your data model without adding any interactivity… yet!</i></p>
        <p>It's often easier to <i>build the static version first and add interactivity later</i>. Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.</p>
        <p>To build a static version of your app that renders your data model, you'll want to build components that reuse other components and pass data using props. Props are a way of passing data from parent to child. If you're familiar with the concept of state, <i>don't use state at all to build this static version. State is reserved only for interactivity</i>, that is, data that changes over time. Since this is a static version of the app, you don't need it.</p>
        <p>You can either build “top down” by starting with building the components higher up in the hierarchy or “bottom up” by working from components lower down. In simpler examples, it's usually easier to go top-down, and on larger projects, it's easier to go bottom-up.</p>
        `,
        `<h3>Step 3: Find the minimal but complete representation of UI state</h3>
        <p>To make the UI interactive, you need to let users change your underlying data model. You will use state for this.</p>
        <p><i>Think of state as the minimal set of changing data that your app needs to remember.</i> The most important principle for structuring state is to keep it DRY (Don't Repeat Yourself). <i>Figure out the absolute minimal representation of the state your application needs and <u>compute everything else on-demand</u>.</i></p>
        <ul>Which of the data that your application has are state? Identify the ones that are not:
        <li>- Does it <u>remain unchanged</u> over time? If so, it isn't state.</li>
        <li>- Is it <u>passed in from a parent</u> via props? If so, it isn't state.</li>
        <li>- <u>Can you compute it</u> based on existing state or props in your component? If so, it definitely isn't state!</li>
        <li>What's left is probably state.</li>
        </ul>
        `,
        `<h3>Step 4: Identify where your state should live</h3>
        <p>After identifying your app's minimal state data, you need to <i>identify which component is responsible for <u>changing</u> this state, or <u>owns</u> the state</i>.</p>
        <ul>For each piece of state in your application:
        <li>1. Identify every component that renders something based on that state.</li>
        <li>2. Find their closest common parent component — a component above them all in the hierarchy.</li>
        <li>3. Decide where the state should live.</li>
        </ul>
        `,
        `<h3>Step 5: Add inverse data flow</h3>
        <p>Currently your app renders correctly with props and state flowing down the hierarchy. But to change the state according to user interaction, you will need to support data flowing the other way: <i>the components deep in the hierarchy need to update the state in their parent components</i>.</p>
        <p>For that, you need to <i>pass the state updating functions from parent components down to the child components, so child components can change the parent's state</i>.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Keeping components pure',
      sectionSource:
        '/src/markdowns/01_React_basics/Keeping_components_pure.html',
      tooltips: [
        `<h3>Purity: Components as formulas</h3>
        <p>Some JavaScript functions are pure. <i>Pure functions only perform a calculation and nothing more</i>.</p>
        <ul>In computer science (and especially the world of functional programming), a pure function is a function with the following characteristics:
        <li>- <i><u>It minds its own business</u></i>. It does <i>not change any objects or variables that existed before it was called</i>;</li>
        <li>- <i><u>Same inputs, same output</u></i>. Given the <u>same inputs</u>, a pure function should always return the <u>same result</u>.</li>
        </ul>
        <p>React assumes that every component you write is a pure function. This means that <i>React components you write <u>must always return the same JSX given the same inputs</u></i>.</p>
        `,
        `<h3>Side Effects: (un)intended consequences</h3>
        <p>React's <i><u>rendering</u> process must always be pure</i>. Components should <i>only return their JSX</i>, and <i>not change any objects or variables that existed <u>before rendering</u></i> — that would make them impure!</p>
        <p>In general, you should not expect your components to be rendered in any particular order. <i>Each component should only "think for itself", and not attempt to coordinate with or depend upon others during rendering</i>. Rendering is like a school exam: <i>each component should calculate JSX on their own!</i></p>
        <p>Rendering can happen at any time, so <i>components should not depend on each others rendering sequence</i>.</p>
        `,
        `<h3>Detecting impure calculations with StrictMode</h3>
        <p>In React there are three kinds of inputs that you can read while rendering: <i>props</i>, <i>state</i>, and <i>context</i>. You should always treat these inputs as <u>read-only</u>.</p>
        <p>When you want to change something in response to user input, you should <i>set state instead of writing to a variable</i>. You should <i>never change preexisting variables or objects while your component is rendering</i>.</p>
        <p>React offers a "Strict Mode" in which it calls each component's function twice during development. By calling the component functions twice, Strict Mode helps find components that break these rules. <i>Pure functions only calculate, so calling them twice won't change anything</i>.</p>
        <p>You should <i>not mutate any of the inputs that your components use for rendering</i>. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.</p>
        `,
        `<h3>Local mutation: Your component's little secret </h3>
        <p>Pure functions <i>don't mutate variables outside of the function's scope or objects that were created <u>before the call</u></i> — that makes them impure!</p>
        <p>However, <i>it's completely fine to change variables and objects that you've just <u>created while rendering</u></i>.</p>
        `,
        `<h3>Where you can cause side effects</h3>
        <p>While functional programming relies heavily on purity, at some point, somewhere, something has to change. That's kind of the point of programming! <i>These changes — updating the screen, starting an animation, changing the data — are called side effects. They're things that happen “on the side”, <u>not during rendering</u></i>.</p>
        <p>In React, <i>side effects usually belong inside <u>event handlers</u></i>. Even though event handlers are defined inside your component, <u>they don't run during rendering</u>! So <i>event handlers don't need to be pure</i>.</p>
        <p>If you've exhausted all other options and can't find the right event handler for your side effect, you can still attach it to your returned JSX with a <code>useEffect</code> call in your component. This tells React to execute it later, <u>after rendering</u>, when side effects are allowed. However, this approach should be your last resort.</p>
        <p>Strive to express your component's logic in the JSX you return. <i>When you need to "change things", you'll usually want to do it in an event handler. As a last resort, you can <code>useEffect</code>.</i></p>
        `,
        `<h3>Why does React care about purity?</h3>
        <p>- your components could run in a <i>different environment</i> — for example, on the server! Since they return the same result for the same inputs, one component can serve many user requests.</p>
        <p>- you can improve performance by <i>skipping rendering components whose inputs have not changed</i>. This is safe because pure functions always return the same results, so they are safe to cache.</p>
        <p>- if some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'JSX limitations & workarounds: <code>React.Fragment</code> or shorthand <code><><span><</span>/></code>',
      sectionSource:
        '/src/markdowns/01_React_basics/JSX_limitations_&_workarounds.html',
      highlights: {
        highlight1: ['JSX limitations'],
        highlight2: ['<code>React.Fragment</code>'],
      },
      tooltips: [
        `<h3>JSX limitations</h3>
        <p><i>You can't return more than one "root" JSX element (you also can't store more than one "root" JSX element in a variable)</i>.</p>
        <p>The solution: <i>always wrap adjacent elements!</i> You can use as a wrapper any element (<<span>div</span>>, <<span>p</span>>, <<span>header</span>>), or you can also use a custom component. The main thing that matters is that <i>you only have one value which you return or which you store it in a variable</i>.</p>
        `,
        `<h3>Creating a wrapper component</h3>
        <p>A wrapping element it's an element which <i>won't render anything to the DOM</i>, but the requirement is not that there must be one root component being rendered to the DOM, the requirement just is that there must be <i>one root element that you return or that you store in a variable</i>.</p>
        `,
        `<h3>The problem with wrapper components: the <<span>div</span>> soup</h3>
        <p>In bigger apps, you can easily end up with tons of unnecessary <<span>div</span>>s (or other elements) which add <i>no semantic meaning or structure to the page</i>, but <i>are only there because of React's/JSX requirement</i>.</p>
        `,
        `<h3>React.Fragment</h3>
        <p>Fragments let you <i>group a list of children without adding extra nodes to the DOM</i>. Fragments allow you to write cleaner code, to end up with less unnecessary HTML elements on the browser.</p>
        <p>You can access the Fragment component with <code>React.Fragment</code>, or in some projects you can also use the shortcut syntax. These two syntaxes <i>render empty wrappers</i>, which don't render any actual HTML tag to the DOM.</p>
        `,
      ],
    },
    {
      sectionTitle: 'React Portals',
      sectionSource: '/src/markdowns/01_React_basics/React_Portals.html',
      highlights: {
        highlight2: ['Portals'],
      },
      tooltips: [
        `<h3>Rendering to a different part of the DOM</h3>
        <p>You can use a Portal to <i>keep the structure that you have in your JSX markup, but to render the JSX markup differently (in other place) in the real DOM</i>.</p>
        <p>With Portals you end up with semantically more correct HTML markup.</p>
        <ul>Portals need two things:
        <li>- you need a <i>place</i> you wanna port the component to;</li>
        <li>- you need to let the component know that it should have <i>a portal to that place</i>.</li>
        </ul>
        <ul><code>ReactDOM.createPortal()</code> method takes two arguments:
        <li>1. The first argument need to be <i>a component that return JSX markup or only some JSX markup</i></li>
        <li>2. The second argument is <i>a pointer to the container in the real DOM</i> where the JSX markup in your component should be rendered in</li>
        </ul>
        <p><i>A Portal only changes the physical placement of the DOM node.</i> In every other way, <i>the JSX you render into a portal acts as a child node of the React component that renders it</i>. For example, the child can access the context provided by the parent tree, and events still bubble up from children to parents according to the React tree.</p>
        `,
        `<h3>React vs ReactDOM libraries</h3>
        <p>The <code>ReactDOM.createPortal()</code> method is actually not defined on React, but on another library that comes together with React, the ReactDOM library. You can <i>imagine React being the library that has all the React features, state management etc</i>, and <i>ReactDOM uses React to bring that logic and these features into the web browser</i>.</p>
        <p>Put in other words, the React library itself doesn't care whether you run it in an environment that has a DOM, or if you would use it to build a native app. For example, you can use React Native in conjunction with React, to build native mobile apps. So <i>ReactDOM is kind of the adapter for React to the browser</i>.</p>
        `,
        `<h3>Event bubbling through Portals</h3>
        <p><i>Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way.</i> Features like context work exactly the same regardless of whether the child is a portal, as the portal still exists in the <u>React tree</u> regardless of position in the <u>DOM tree</u>.</p>
        <p>This includes event bubbling. <i>An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree</i>.</p>`,
      ],
    },
  ],
};

const Styling_React_components = {
  title: '<p class="card__title--2">Styling React components</p>',
  sections: [
    {
      sectionTitle: 'Introduction to styling React components',
      sectionSource:
        '/src/markdowns/05_Styling_React_Components/Introduction_to_styling_React_components.html',
      tooltips: [
        `<p>You wanna make sure that your apps look good, and styling is also an important part of building components. And there are <i>different techniques for setting styles</i> dynamically and for styling components, such that other components are not affected by a specific component's styles.</p>
        <ul>Along this section you will learn:
        <li>- how to <i>set up styles in a conditional or dynamic way</i>;</li>
        <li>- two popular approaches for <i>scoping styles</i> to components;</li>
        <li>- styled components;</li>
        <li>- CSS modules.</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle: 'Adding basic CSS styling',
      sectionSource:
        '/src/markdowns/05_Styling_React_Components/Adding_basic_CSS_styling.html',

      tooltips: [
        `<h3>CSS <code>class</code> vs React <code>className</code> attribute</h3>
        <p>In React, you specify a CSS class with <code>className</code>. It works the same way as the HTML <code>class</code> attribute.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Adding dynamic inline styles',
      sectionSource:
        '/src/markdowns/05_Styling_React_Components/Adding_dynamic_inline_styles.html',
      highlights: {
        highlight1: ['dynamic inline styles'],
      },
      tooltips: [
        `<h3>The <code>style</code> attribute</h3>
        <p>You can set the style of an element dynamically by adding the <code>style</code> attribute.</p>
        <p><i>In React <code>style</code> attribute doesn't want a string as a value, instead <code>style</code> want as a value an <u>object</u>.</i> This object you should use have the CSS property names as key names, and the values as key values.</p>
        <p><i>Inline style properties are written in camelCase.</i> For example <code>background-color</code> would be written as <code>backgroundColor</code>.</p>
        <p>React does not require you to use inline styles (CSS classes work great for most cases). But when you need an inline style, you pass an object to the <code>style</code> attribute.</p>
        <p>The next time you see <code>{{ ... }}</code> in JSX, know that it's nothing more than an object inside the JSX curlies!</p>
        `,
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
        '/src/markdowns/05_Styling_React_Components/Introducing_styled_components.html',
      highlights: {
        highlight1: ['styled components'],
      },
      tooltips: [
        `<h3>Styled components package</h3>
        <p>Styled components is <i>a package</i> that helps you <i>build components which have certain styles attached to them</i>, where <i>the styles really only affect the components to which they were attached and not any other components</i>.</p>`,
        `<h3>Styled components & dynamic props</h3>`,
        `<h3>Styled components & media queries</h3>`,
      ],
    },
    {
      sectionTitle: 'Using CSS modules',
      sectionSource:
        '/src/markdowns/05_Styling_React_Components/Using_CSS_modules.html',
      highlights: {
        highlight2: ['CSS modules'],
      },
      tooltips: [
        `<p>Wherever you like styled components or not, as an absolutely personal thing, there is no wrong or right here. Now, when it comes to me personally, <i>I prefer CSS in the CSS files. I like the separation of CSS and JavaScript</i>. I like having clean JavaScript files and I simply like default CSS. Now, of course you can absolutely stick to the CSS approach we used at the beginning, where you had <u>global non-scoped styles</u>, and you as a developer had to make sure you're not accidentally reusing classes names, you're not accidentally affecting the styles of other components. That is definitely one route you can take. You can also however take CSS to the next level with a feature called CSS Modules.</p>`,
        `<h3>CSS modules</h3>
        <p>CSS Modules is a feature which is only available in projects that are configured to support it.</p>
        <p>What CSS Modules does under the hood is it takes CSS classes that are in the CSS file that you are importing, and changes the name of that classes to be unique. That's the core thing it does, for every component it changes the classes names off the classes that are in the CSS file that you're importing, it <i>generates new classes names to be unique</i>.</p>
        <p>CSS Modules concept ensures that the <i>CSS styles you set up in a CSS file are scoped to the component you import that file into</i>. For that you need to work with CSS classes because you access that classes as properties on the imported <code>classes</code> object.</p>`,
        `<h3>Using CSS modules</h3>
        <ul>There are 3 steps that you need to follow when you use CSS Modules:
        <li>1. Name your CSS file component: <code>ComponentName<i>.module.css</i></code></li>
        <li>2. Import you CSS file component in your JavaScript file component: <code>import classes from './ComponentName<i>.module.css</i>'</code></li>
        <li>3. Instead of applying a string class name, you refer to that <code>classes</code> thing which you're importing from the CSS module file. <i>That <code>classes</code> thing turns out to be an <u>object</u></i>, and in that <code>classes</code> object you'll have every class name selector you defined in your CSS component file, as a property of that object<li>
        </ul>
        <p>If you have a class name with a name like <code>.form-control</code>, you need to access that object property with bracket <code>[]</code> notation, example <code>classes['form-control']</code>, because <code>.form-control</code> isn't a valid name for accessing object property with dot <code>.</code> notation.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Dynamic styles with CSS modules',
      sectionSource: '',
    },
  ],
};

const Rendering_lists_and_conditional_content = {
  title: '<p class="card__title--2">Rendering lists & conditional content</p>',
  sections: [
    {
      sectionTitle: 'Rendering lists of data: the key prop',
      sectionSource:
        '/src/markdowns/04_Rendering_list_&_conditional_content/Rendering_lists_of_data.html',
      highlights: {
        highlight1: ['lists of data'],
        highlight2: ['key'],
      },
      tooltips: [
        `<p>You will often want to <i>display multiple <u>similar components</u> from a <u>collection of data</u></i>. You can use the JavaScript array methods to <i>manipulate an array of data</i>. You can use JavaScript's <code>filter()</code> and <code>map()</code> with React to <i><u>filter</u> and <u>transform</u> your <u>array of data</u> into an <u>array of components</u></i>.</p>
        <p>For each array item, you will need to specify a <code>key</code>. Usually, you will want to use an ID from the database as a <code>key</code>. <i>Keys let React keep track of each item's place in the list even if the list changes</i>.</p>
        `,
        `<h3>Render components from an array & render only specific components from an array</h3>
        <p>You will often need to <i>show several <u>instances of the same component</u> using <u>different data</u></i> when building interfaces. You will rely on JavaScript features like <code>for</code> loop, the array <code>map()</code> and <code>filter()</code> functions to <i>render lists of components</i>.</p>
        <p>If you do <i>output an <u>array of JSX elements</u>, then React is capable of rendering on the UI that array of JSX elements</i>. So if you had <i>an array of JSX elements as part of your JSX markup</i>, React would simply render that array of JSX elements side by side.</p>
        `,
        `<h3>Keeping list items in order with <code>key</code></h3>
        <p>You need to give each array item a <code>key</code> — a string or a number that <i><u>uniquely</u> identifies that item among other items in that array, in other words among its siblings</i>.</p>
        <p>JSX elements directly inside a <code>map()</code> call always need keys! Whenever you're working with an array of JSX elements React wants a <code>key</code> on every element.</p>
        <p><i>Keys tell React which array item each component corresponds to</i>, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen <code>key</code> helps React infer what exactly has happened, and make the correct updates to the DOM tree.</p>
        <p>The <code>key</code> atrribute <i>can be added to any component, no matter if it's a custom component or if it's a built-in HTML tag</i>.</p>
        `,
        `<h3>Displaying several DOM nodes for each list item</h3>
        <p>What do you do when each item needs to render not one, but several DOM nodes? The short <code><><span><</span>/></code> Fragment syntax won't let you pass a key, so you need to either group them into a single <<span>div</span>>, or use the slightly longer and more explicit <code><<span>Fragment key={id}</span>></code> syntax.</p>
        `,
        `<h3>Where to get your <code>key</code></h3>
        <p>Rather than generating keys on the fly, you should include them in your data.</p>
        <p>You might be tempted to use an item's index in the array as its key. In fact, that's what React will use if you don't specify a <code>key</code> at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.</p>
        <p>Similarly, do not generate keys on the fly, e.g. with <code>key={Math.random()}</code>. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time.</p>
        `,
        `<h3>Rules of keys</h3> 
        <p>- <i>Keys must be <u>unique</u> among siblings</i>. However, it's okay to use the same keys for JSX nodes in different arrays.<p>
        <p>- <i>Keys must <u>not change</u></i> or that defeats their purpose! Don't generate them while rendering.</p>
        `,
        `<h3>Why does React need keys?</h3>
        <p>Why should you add the special <code>key</code> prop to list JSX elements? It's required for React to <i>correctly <u>identify</u> and update (if needed) the list of JSX elements</i>.</p>
        <p>Imagine that files on your desktop didn't have names. Instead, you'd refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.</p>
        <p>File names in a folder and JSX keys in an array serve a similar purpose. <i>Keys let us <u>uniquely</u> identify an item between its siblings</i>. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the <code>key</code> lets React identify the item throughout its lifetime.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Rendering conditional content',
      sectionSource:
        '/src/markdowns/04_Rendering_list_&_conditional_content/Rendering_conditional_content.html',
      highlights: {
        highlight1: ['conditional content'],
      },
      tooltips: [
        `<h3>Outputting conditional content (conditionally returning JSX)</h3>
        <p>Your components will often need to <i>display different things</i> depending on <i>different conditions</i>. In React, you can conditionally render JSX using JavaScript syntax like <code>if</code> statements, Conditional (ternary) operator <code>? :</code>, and Logical AND operator <code>&&</code>.</p>
        <p><i>Conditional content</i> is about rendering <i>different output</i> under <i>different conditions</i>.</p>
        `,
        `<h3>How to return different JSX depending on a condition</h3>
        <p>In React, there is no special syntax for writing conditions. Instead, you'll use the same techniques as you use when writing regular JavaScript code.  For example, <i>you can use an <code>if</code> statement to <u>conditionally return</u> JSX markup</i>.</p>
        `,
        `<h3>Conditionally returning nothing with <code>null</code></h3>
        <p>In some situations, you won't want to render anything at all. A component must return something. In this case, you can return <code>null</code>.</p>
        <p>In practice, <i>returning <code>null</code> from a component isn't common</i> because it might surprise a developer trying to render it. More often, you would <i>conditionally include or exclude the component in the parent component's JSX</i>.</p>
        `,
        `<h3>How to conditionally include or exclude a piece of JSX</h3>
        <p>When it comes to output content conditionally, <i>long statements like <code>if..else</code> or <code>for</code> loops are not allowed between curly braces, in JSX markup</i>. So, for achive your results, you need to use Ternary Operator <code>? :</code> or Logical AND operator <code>&&</code>.</p>
        <ul>You can conditionally include or exclude a piece of JSX with the help of:
        <li>- Conditional (ternary) operator <code>? :</code></li>
        <li>- Logical AND operator <code>&&</code>: inside React components, it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise</li>
        </ul>
        <p>A JavaScript <code>&&</code> expression returns the value of its right side if the left side is <code>true</code>. But if the condition is <code>false</code>, the whole expression becomes <code>false</code>. <i>React considers <code>false</code> as a “hole” in the JSX tree, just like <code>null</code> or <code>undefined</code>, and doesn't render anything in its place.</i></p>
        <p><i>Don't put numbers on the left side of <code>&&</code>.</i> To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is <code>0</code>, then the whole expression gets that value (<code>0</code>), and React will happily render <code>0</code> rather than nothing. To fix it, <i>make the left side a boolean</i>: <code>{messageCount > 0 && <<span>Component /</span>>}</code></p>
        `,
        `<h3>Conditionally assigning JSX to a variable</h3>
        <p>You can use an <code>if</code> or <code>if..else</code> statement to conditionally assign JSX to a variable and then <i>include</i> it in your returned JSX tree.</p>
        <p>You can <i>store JSX markup in variables</i>. You are not limited to using JSX only if you return it, you can also use it to create a value, which is stored in a variable.</p>
        <p>In React, markup is a part of your code, so you can use tools like variables and functions to tidy up complex expressions.</p>
        `,
        `<h3>Common conditional syntax shortcuts you'll encounter in React codebases</h3>
        <p>If you prefer more compact code, you can use the <i>conditional <code>? :</code> operator</i>. Unlike <code>if</code>, it <i>works inside JSX markup</i>.</p>
        <p>When you don't need the <code>else</code> branch or conditional (ternary) operator, you can also use the <i>Logical AND <code>&&</code> operator</i>. Inside React components, it often comes up when you want to render some JSX when the condition is true, <u>or render nothing otherwise</u>.</p>
        <p>In JSX, <code>{cond && <<span>A /</span>>}</code> means: if <code>cond</code>, render <code><<span>A /</span>></code>, otherwise nothing.</p>
        `,
        `<p><b>All above approaches also work for <u>conditionally specifying attributes</u>.</b></p>`,
      ],
    },
  ],
};

const Adding_interactivity_to_a_component = {
  title: '<p class="card__title--2">Adding interactivity to a component</p>',
  tooltips: [
    `<p>Some things on the screen update in response to user input. <i>In React, data that changes over time is called state</i>. You can add state to any component, and update it as needed.</p>
    <p>In this section, you'll learn <i>how to write components that handle <u>interactions</u></i>, <i>update their <u>state</u></i>, and <i>display <u>different output</u> over time</i>.</p>`,
  ],
  sections: [
    {
      sectionTitle: 'Responding to events & working with event handlers',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/Responding_to_events_&_working_with_event_handlers.html',
      tooltips: [
        `<h3>How to write components that handle interactions</h3>
        <p>React lets you <i>add event handlers to your JSX</i>. Event handlers are your own <i>functions that will be triggered in response to interactions</i>.</p>
        <p>Built-in components like <<span>button</span>> only support built-in browser events like <code>onClick</code>. However, you can also create your own components, and give their event handler props any application-specific names that you like.</p>
        `,
        `<h3>Different ways to write an event handler</h3>
        <p>You can define an event handler function <u>separately</u> or <u>inline</u>.</p>
        <ul>To add an event handler, you need to follow these three steps:
        <li>1. <i>Define a function</i> inside your component</li>
        <li>2. Implement the logic inside that function</li>
        <li>3. <i>Pass that function as a prop</i> to the appropriate JSX tag. Functions passed to event handlers must be passed, not called.</li>
        </ul>
        <p>Alternatively, you can <i>define an event handler inline in the JSX</i>. Inline event handlers are convenient for short functions.</p>
        <p>On all built-in HTML elements, like <<span>div</span>>, <<span>h2</span>>, <<span>buttons</span>> and so on, you have full access to all the native DOM events, which you can listen to. <i>React exposes all native DOM events as props which start with "on"</i>.</p>
        `,
        `<h3>Event handlers naming convention</h3>
        <p>By convention, it is common to name event handlers as <i>"handle"</i> followed by the event name: <code>onClick={handleClick}</code>.</p>
        `,
        `<h3>Reading props in event handlers</h3>
        <p>Because event handlers are declared inside of a component, they have access to the component's props.</p>
        `,
        `<h3>How to pass event handling logic from a parent component: passing event handlers as props</h3>
        <p>Often you'll want <i>the parent component to specify a child's event handler</i>. Consider buttons: depending on where you're using a Button component, you might want to execute a different function — perhaps one plays a movie and another uploads an image.</p>
        <p>You can pass event handling logic from a parent component to a child component by <i>passing event handlers as props to the child component</i>.</p>
        `,
        `<h3>Naming event handler props</h3>
        <p>Built-in components like <<span>button</span>> and <<span>div</span>> only support browser event names like <code>onClick</code>. However, when you're building your own components, you can name their event handler props any way that you like.</p>
        <p>By convention, event handler props should also start with <i>"on"</i>, followed by a capital letter: <code>onRun={}</code>.</p>
        <p>On built-in components React exposes all <i>native DOM events</i> as props which start with <i>"on"</i>: <code>onClick={}</code>.</p>
        <p>When your component supports multiple interactions, you might name event handler props for app-specific concepts.</p>
        `,
        `<h3>Event propagation: how events propagate and how to stop them</h3>
        <p>Event handlers will also catch events from any children your component might have. We say that an event <i>"bubbles" or "propagates" up the tree: it starts with where the event happened, and then goes up the tree</i> (events propagate upwards).</p>
        <p>All events propagate in React except <code>onScroll</code>, which only works on the JSX tag you attach it to.</p>
        <p>Event handlers receive an <i>event object</i> as their only argument. By convention, it's usually called <code>e</code>, which stands for "event". <i>You can use this object to read information about the event</i>. That event object also lets you stop the propagation. If you want to prevent an event from reaching parent components, you need to call <code>e.stopPropagation()</code>.</p>
        <p>For example, if you have register two click events, one on a child DOM element and another one on it's parent, <code>e.stopPropagation()</code> stop the propagation so that <u>clicking the child DOM element doesn't register as a click on the parent</u>.</p>
        <p>Events may have <i>unwanted default browser behavior</i>. Call <code>e.preventDefault()</code> to prevent that.</p>
        `,
        `<h3>Passing handlers as alternative to propagation</h3>
        <p>If you rely on propagation and it's difficult to trace which handlers execute and why, there is a pattern that provides an alternative to propagation. The pattern lets the <i>child component handle the event, while also letting the parent component specify some additional behavior</i>. Unlike propagation, it's not automatic. But the benefit of this pattern is that you can clearly follow the whole chain code that executes as a result of some event.</p>
        <p>To see examples of this pattern, read the entire article.</p>
        `,
        `<h3>Can event handlers have side effects?</h3>
        <p>Absolutely! <i>Event handlers are the best place for side effects</i>.</p>
        <p>Unlike rendering functions, event handlers don't need to be pure, so it's a great place to change something. <i>However, in order to change some information, you first need some way to store it. In React, this is done by using state</i>.</p>
        `,
      ],
    },
    {
      sectionTitle: 'State: a component’s memory',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/State_is_a_component_memory.html',
      highlights: {
        highlight2: ['State'],
      },
      tooltips: [
        `<p>Components often need to change what's on the screen as a result of an interaction. Components need to "remember" things.</p>
        <p>Often, you'll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.</p>
        `,
        `<h3>When a <u>regular variable</u> isn't enough</h3>
        <p>- <i>Local variables don't persist between renders</i>. When React renders a component a second time, it renders it from scratch — it doesn't consider any changes to the local variables.</p>
        <p>- <i>Changes to local variables won't trigger renders</i>. React doesn't realize it needs to render the component again with the new data.</p>
        `,
        `<h3>Adding a <u>state variable</u> with <code>useState</code> Hook</h3>
        <ul>To update a component with new data, two things need to happen:</p>
        <li>1. <i><u>Retain</u> the data between renders.</i></li>
        <li>2. <i><u>Trigger</u> React to render the component with new data (re-rendering).</i></li></ul>
        <ul>The <code>useState</code> Hook provides those two things:
        <li>1. A <i>state variable</i> to <u>retain the data between renders</u>.</li>
        <li>2. A <i>state setter function</i> to <u>update the variable</u> and <u>trigger React to render the component again</u>.</li></ul>
        <p>Use a state variable when a component needs to "remember" some information between renders.</p>
        <p>The <code>useState</code> Hook allows you to <i>define values as state</i>, where changes to these values should reflect in a component function being called again, which is a key difference to a value stored in a regular variable.</p>
        `,
        `<h3>Your first Hook</h3>
        <p>In React, <code>useState</code>, as well as any other <i>function starting with 'use'</i>, is called a Hook.</p>
        <p>Hooks are special functions that are <i>only available while React is rendering</i>. They let you <i>“hook into” different React features</i>.</p>
        <p>State is just one of those features, but you will meet the other Hooks later.</p>
        `,
        `<h3>Anatomy of <code>useState</code></h3>
        <p>When you call <code>useState</code>, you are telling React that you want this component to remember something.</p>
        <p>The only argument to <code>useState</code> is the <i>initial value</i> of your state variable.</p>
        <ul>Every time your component renders, <i><code>useState</code> gives you an array containing two values</i>:</p>
        <li>1. The <i>state <u>variable</u></i> with the value you stored.</li>
        <li>2. The <i>state setter <u>function</u></i> which can update the state variable and trigger React to render the component again.</li></ul>
        <p>You can use array destructuring to read values from the array that <code>useState</code> gives you.</p>
        `,
        `<h3>Naming convention</h3>
        <p>The convention is to name this pair like <code>const [something, setSomething]</code>. You could name it anything you like, but conventions make things easier to understand across projects.</p>
        `,
        `<h3>Giving a component multiple state variables</h3>
        <p><i>You can have as many state variables of as many types as you like in one component</i>.</p>
        <p>It is a good idea to <i>have multiple state variables if their <u>state is unrelated</u></i>, but if you find that you often change two state variables together, it might be better to combine them into a single one.</p>
        `,
        `<h3>State is isolated and private</h3>
        <p><i>State is <u>local to a component instance</u> on the screen. In other words, if you render the same component multiple times, each copy will have completely isolated state! Changing one of them will not affect the other</i>.</p>
        <p>This is what makes state different from regular variables that you might declare at the top of your module. State is not tied to a particular function call or a place in the code, but it's "local" to the specific place on the screen. You can rendered a component multiple times and <i>each component's state is stored separately</i>.</p>
        <p>Also <i>parent components doesn't "know" anything about their child component's state or even whether it has any. Unlike props, <u>state is fully private to the component declaring it</u></i>. The parent component can't change it. This lets you add state to any component or remove it without impacting the rest of the components.</p>`,
        `<h3>Keep child component's state in sync</h3>
        <p>What if you wanted some child components to keep their states in sync? The right way to do it in React is to remove state from child components and add it to their closest shared parent.</p>
        `,
        `<h3>Regular variable vs state variable</h3>
        <p><i>A state variable is only necessary to keep information between re-renders of a component</i>. Within a single event handler, a regular variable will do fine. <i>Don't introduce state variables when a regular variable works well.</i></p>
        `,
        `<h3>There are two types of "model" data in React</h3>
        <ul>There are two types of "model" data in React: <i>props</i> and <i>state</i>. The two are very different:
        <li>- props are like arguments you pass to a function. They let a parent component pass data to a child component and customize its appearance. For example, a <code>Form</code> can pass a <code>color</code> prop to a <code>Button</code>.</li>
        <li>- state is like a component's memory. It lets a component keep track of some information and change it in response to interactions. For example, a <code>Button</code> might keep track of <code>isHovered</code> state.</li>
        </ul>
        <p>Props and state are different, but they work together. A parent component will often keep some information in state (so that it can change it), and pass it down to child components as their props.</p>
        `,
      ],
    },
    {
      sectionTitle: 'How component functions are executed: render & commit',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/How_component_functions_are_executed_render_&_commit.html',
      highlights: {
        highlight1: ['render', 'commit'],
      },
      tooltips: [
        `<p>Since a component is a function, someone has to call it, and you might notice that you never called your component functions, instead you just used them like HTML element in your JSX markup.</p>
        <p>Before your components are displayed on screen, they must be rendered by React.</p>
        `,
        `<h3>The steps involved in displaying a component on screen</h3>
        <ul> The process of rendering a component to UI has three steps:
        <li>Step 1. <i>Triggering</i> a render</li>
        <li>Step 2. <i>Rendering</i> the component</li>
        <li>Step 3. <i>Committing</i> to the DOM</li>
        </ul>
        `,
        `<h3>Step 1. <u>Trigger</u> a render. When and why React renders a component?</h3>
        <ul> There are two reasons when a component trigger a render:
        <li>1. It's the component's <i>initial render</i>.</li>
        <li>2. The component's (or one of its ancestors) <i>state has been updated</i>.</li>
        </ul>
        <p><u>Initial render:</u> when your app starts, you need to trigger the initial render. Frameworks and sandboxes sometimes hide this code, but it's done by calling <code>createRoot</code> with the target DOM node, and then calling its <code>render</code> method with your component.</p>
        <p><u>Re-renders when state updates:</u> once the component has been initially rendered, you can trigger further renders by updating its state with the state setter function provided by <code>useState</code> Hook. <i>Updating your component's state automatically trigger a render</i>.</p>
        <p>Only the component where the <code>useState()</code> was registered and its child components will be updated, not any other components.</p>
        `,
        `<h3>Step 2. React <u>renders</u> your components. What rendering means in React?</h3>
        <p>After you trigger a render, <u>React calls your components</u> to figure out what to display on screen. <i>"Rendering" is React <u>calling</u> your components.</i></p>
        <p>- <i>On initial render</i>, React will call the root component.</p>
        <p>- <i>For subsequent renders</i>, React will call the component whose state update triggered the render. During a re-render, React will calculate which of component's properties, if any, have changed since the previous render. It won't do anything with that information until the next step, the commit phase.</p>
        <p><i>This process is <u>recursive</u></i>: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.</p>
        <ul><i>Rendering must always be a pure calculation</i>:
        <li>- <i>Same inputs, same output.</i> Given the same inputs, a component should always return the same JSX.</li>
        <li>- <i>It minds its own business.</i> It should not change any objects or variables that existed before rendering.</li>
        </ul>
        <p>When developing in “Strict Mode”, React calls each component's function twice, which can help surface mistakes caused by impure functions.</p>
        `,
        `<h3>Step 3. React <u>commits</u> changes to the DOM</h3>
        <p>After rendering (calling) your components, React will modify the DOM.</p>
        <p>- For the <i>initial render</i>, React will use the <code>appendChild()</code> DOM API to put all the DOM nodes it has created on screen.</p>
        <p>- For <i>re-renders</i>, React will apply the <u>minimal necessary operations</u> (calculated while rendering!) to make the DOM match the latest rendering output. <i>React only changes the DOM nodes if there's a difference between renders</i>.</p>
        `,
        `<h3>Why rendering does not always produce a DOM update</h3>
        <p>React does not touch the DOM <i>if the rendering result is the same as last time</i>. React only changes the DOM nodes if there's a difference between renders.</p>
        `,
        `<h3>Optimizing performance</h3>
        <p>The default behavior of rendering all components nested within the updated component is not optimal for performance if the updated component is very high in the tree. If you run into a performance issue, there are several opt-in ways to solve it. <i>Don't optimize prematurely!</i></p>
        `,
      ],
    },
    {
      sectionTitle: 'State as a snapshot in time',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/State_as_a_snapshot.html',
      highlights: {
        highlight1: ['snapshot in time'],
      },
      tooltips: [
        `<h3>Relationship between state and rendering: setting state triggers renders</h3>
        <p><u>State variables</u> might look like <u>regular JavaScript variables</u> that you can read and write to. However, <i>state behaves more like a snapshot. Setting it does not change the state variable you already have</i>, but instead triggers a re-render.</p>
        <p>You might think of your UI as changing directly in response to the user event like a click. In React, it works a little differently from this mental model. You know that <i>setting state requests a re-render from React</i>. This means that <i>for an interface to react to the event, you need to <u>update the state</u></i>.</p>
        `,
        `<h3>When and how state updates? Rendering takes <u>a snapshot in time</u></h3>
        <p>"Rendering" means that React is calling your component, which is a function. The JSX you return from that function is like <i>a snapshot of the UI <u>in time</u></i>. Its props, event handlers and local variables were all <i>calculated using its state <u>at the time of the render</u></i>.</p>
        <p>State behaves like a <i>component's memory</i>, so is not like a regular variable that disappears after your function returns. <i>State actually "lives" in React itself — as if on a shelf! — outside of your function. When React calls your component, it gives you <u>a snapshot of the state for that particular render</u></i>. Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, <i>all calculated using the state values from that render</i>!</p>
        <p>When you call <code>useState</code>, React gives you <i>a snapshot of the state for that render</i>. Every render (and functions inside it) will always "see" the snapshot of the state that React gave to that render.</p>
        <p>Variables and event handlers don't "survive" re-renders. <i>Every render has its own event handlers</i>. Event handlers created in the past have the state values from the render in which they were created.</p>
        `,
        `<h3>Why state does not update immediately after you set it</h3>
        <p><i>Setting state only changes it for the <u>next render</u>! A state variable's value <u>never changes within a render</u>, even if its event handler's code is asynchronous. React keeps the state values "fixed" within one render's event handlers</i>. You don't need to worry whether the state has changed while the code is running.</p>
        <p>If you want to <i>read the latest state <u>before a re-render</u></i>, you'll need to use a <i>state updater function</i>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Queueing a series of state updates: state scheduling & batching',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/Queueing_a_series_of_state_updates_state_scheduling_&_batching.html',
      highlights: {
        highlight1: ['state scheduling', 'batching'],
      },
      tooltips: [
        `<p><i>Setting a state variable does not change the variable in the existing render, but it requests a new render</i>. But sometimes you might want to <i>perform multiple operations on the value <u>before queueing (request) the next render</u></i>. To do this, it helps to understand how React batches state updates. State updates are scheduled by React, they are not processed immediately.</p>`,
        `<h3>What “batching” is and how React uses it to process multiple state updates</h3>
        <p><i>Each render's state values are fixed</i>. React waits until all code in the event handlers has run before processing your state updates. This is why the re-render only happens after all state updating function calls finished.</p>
        <p><i>React processes state updates after event handlers have finished running</i>: this is called <i><u>batching</u></i>.</p>
        <p><i>React lets you update multiple state variables — even from multiple components — without triggering too many re-renders</i>. But this also means that <i>the UI won't be updated until after your event handler, and any code in it, completes</i>. This behavior, also known as batching, makes your React app run much faster. It also avoids dealing with confusing "half-finished" renders where only some of the variables have been updated.</p>
        <p><i>React does not batch across multiple intentional events like clicks — each click is handled separately</i>. Rest assured that <i>React only does batching when it's generally safe to do</i>. This ensures that, for example, if the first button click disables a form, the second click would not submit it again.</p>
        `,
        `<h3>Updating the same state variable multiple times <u>before the next render</u></h3>
        <p>It is an uncommon use case, but if you would like to <i>update the <u>same state variable</u> multiple times <u>before the next render</u></i>, instead of passing the next state value like <code>setNumber(number + 1)</code>, you can <i>pass as argument an <u>updater function</u> that <u>calculates the next state based on the previous one in the queue</u></i>, like <code>setNumber(n => n + 1)</code>. It is a way to tell React to "do something with the state value" instead of just replacing it.</p>
        <ul><i><code>n => n + 1</code> is called an updater function.</i> When you pass it to a state setter:
        <li>1. <i>React queues this function</i> to be processed after all the other code in the event handler has run.</li>
        <li>2. <i>During the next render, React goes through the queue</i> and gives you the final updated state.</li>
        </ul>
        <p>You may have noticed that <code>setState(x)</code> actually works like <code>setState(n => x)</code>, but <code>n</code> is unused! <i>To <u>update some state multiple times in one event</u>, you can use <code>setState(n => x)</code> updater function</i>.</p>
        <p>After the event handler completes, React will trigger a re-render. During the re-render, React will process the queue. <i><u>Updater functions run during rendering</u>, so updater functions must be pure</i> and only return the result. Don't try to set state from inside of them or run other side effects.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Updating objects in state',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/Updating_objects_in_state.html',
      tooltips: [
        `<h3>Treat state as read-only</h3>
        <p>State can hold any kind of JavaScript value, including objects. But <i>you shouldn't change objects that you hold in the React state directly</i>. Instead, when you want to update an object, you need to <i>create a new one (or make a copy of an existing one), and then set the state to use that copy</i>. Usually, you will use the <code>...</code> spread syntax to copy objects and arrays that you want to change.</p>
        <p>You should <i>treat object in React as if they were immutable (unchangeable or "read-only")</i>, so <i>treat any JavaScript object that you put into state as read-only</i>.</p>
        <p><i>When you <u>store objects in state</u>, <u>mutating them will not trigger renders</u> and <u>will change the state in previous render "snapshots"</u></i>. Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.</p>
        <p><i>In React, you treat all state as immutable!</i></p>
        `,
        `<h3>Local mutation is fine</h3>
        <p><i>Mutation is only a problem when you change <u>existing objects that are already in state</u></i>. Mutating an object you've just created is okay because <i>no other code references it yet</i>. Changing it isn't going to accidentally impact something that depends on it. This is called a local mutation.</p>
        <p><i>You can even do local mutation <u>while rendering</u></i>.</p>
        `,
        `<h3>Copying objects with the spread syntax</h3>
        <p>Often you will want to <i>include existing data as a part of the new object you're creating</i>. For example, you may want to update only one field in a form, but keep the previous values for all other fields.</p>
        <p>With the spread syntax you <i>don't need to copy every property separately</i>.</p>
        <p>You can use the <code>{...obj, something: 'newValue'}</code> object spread syntax to create copies of objects.</p>
        `,
        `<h3>Copying nested objects: shallow vs deep</h3>
        <p><i>The <code>...</code> spread syntax is "shallow" — it only copies things one level deep</i>. This makes it fast, but it also means that if you want to update a nested property, you'll have to use it more than once.</p>
        `,
        `<h3>How to update a nested object without mutating it</h3>
        <p>To update a nested object, you need to <i>create copies all the way up from the place you're updating</i>.</p>
        `,
        `<h3>Objects are not really nested</h3>
        <p>"Nesting" is an inaccurate way to think about how objects behave. When the code executes, <i>there is no such thing as a "nested" object</i>. Every object is a separate object "pointing" at a different address in memory.</p>
        `,
        `<h3>Write concise update nested objects logic with Immer</h3>
        <p><i>If your state is deeply nested, you might want to consider flattening it</i>. But, if you don't want to change your state structure, you might prefer a shortcut to nested spreads. <i>Immer</i> is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Updating arrays in state',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/Updating_arrays_in_state.html',
      tooltips: [
        `<h3>Treat state as read-only</h3>
        <p>Arrays are mutable in JavaScript, but <i>you should treat arrays as immutable when you store them in state</i>. Just like with objects, when you want to update an array stored in state, you need to <i>create a new one (or make a copy of an existing one), and then set state to use the new array</i>.</p>
        <p>You can put arrays into state, but you can't change them.</p>
        `,
        `<h3>Updating arrays without mutation</h3>
        <p>In JavaScript, arrays are just another kind of object. Like with objects, <i>you should treat arrays in React state as read-only</i>. This means that you <i>shouldn't reassign items inside an array</i> like <code>arr[0] = 'bird'</code>, and you also <i>shouldn't use methods that mutate the array</i>, such as <code>push()</code> and <code>pop()</code>.</p>
        <p>Instead, every time you want to update an array, you'll want to <i>pass a new array to your state setting function</i>. To do that, you can <i>create a new array from the original array</i> in your state by calling its non-mutating methods like <code>filter()</code> and <code>map()</code>. Then you can set your state to the resulting new array.</p>
        <p>You can use the <code>[...arr, newItem]</code> array spread syntax to create arrays with new items.</p>
        `,
        `<h3>Adding to an array with <code>concat()</code> or <code>[...arr]</code></h3>
        <p><code>push()</code> will mutate an array, which you don't want. Instead, create a new array which contains the existing items and a new item at the end. There are multiple ways to do this, but the easiest one is to use the <i><code>...</code> array spread syntax</i>.</p>
        <p>The array spread syntax also lets you prepend an item by placing it before the original array. In this way, spread can do the job of both <code>push()</code> by adding to the end of an array and <code>unshift()</code> by adding to the beginning of an array.</p>
        `,
        `<h3>Removing from an array with <code>filter()</code> or <code>slice()</code></h3>
        <p>The easiest way to remove an item from an array is to <u>filter it out</u>. In other words, you will <i>produce a new array that will not contain that item</i>. To do this, use the <i><code>filter()</code> method</i>.</p>
        `,
        `<h3>Transforming an array with <code>map()</code></h3>
        <p>If you want to change some or all items of the array, you can use <i><code>map()</code></i> to create a new array. The function you will pass to <code>map()</code> can decide what to do with each item, based on its data or its index (or both).</p>
        `,
        `<h3>Replacing items in an array with <code>map()</code></h3>
        <p>It is particularly common to want to replace one or more items in an array. Assignments like <code>arr[0] = 'bird'</code> are mutating the original array, so instead you'll want to use <code>map()</code> for this as well.</p>
        <p>To replace an item, create a new array with <code>map()</code>. Inside your <code>map()</code> call, you will receive the item index as the second argument. Use it to decide whether to return the original item (the first argument) or something else.</p>
        `,
        `<h3>Inserting into an array</h3>
        <p>Sometimes, you may want to insert an item at a particular position that's neither at the beginning nor at the end. To do this, you can use the <i><code>...</code> array spread syntax together with the <code>slice()</code> method</i>.</p>
        <p>The <code>slice()</code> method lets you cut a “slice” of the array. To insert an item, you will create an array that spreads the slice before the insertion point, then the new item, and then the rest of the original array.</p>
        `,
        `<h3>Making other changes to an array</h3>
        <p>There are some things you can't do with the spread syntax and non-mutating methods like <code>map()</code> and <code>filter()</code> alone. For example, you may want to reverse or sort an array. The JavaScript <code>reverse()</code> and <code>sort()</code> methods are mutating the original array, so you can't use them directly. However, <i>you can copy the array first, and then make changes to it</i>.</p>`,
        `<h3>Copying an array: shallow vs deep</h3>
        <p><i>However, even if you copy an array, you can't mutate existing items inside of it directly. This is because copying is "shallow" — the new array will contain the same items as the original one. So if you modify an object inside the copied array, you are mutating the existing state</i>.</p>
        `,
        `<h3>Updating objects inside arrays</h3>
        <p><i>Objects are not really located "inside" arrays. They might appear to be "inside" in code, but each object in an array is a separate value, to which the array "points"</i>.</p>
        <p><i>When updating nested state, you need to create copies from the point where you want to update, and all the way up to the top level</i>.</p>
        <p><i>In general, you should only mutate objects that you have just created</i>. If you were inserting a new property to an object that you have just created, you could mutate it, but if you're dealing with something that's already in state, you need to make a copy.</p>
        `,
      ],
    },
  ],
};

const Managing_state = {
  title: '<p class="card__title--2">Managing state</p>',
  tooltips: [
    `<p>As your application grows, it helps to be more intentional about <i>how your state is organized</i> and <i>how the data flows between your components</i>. Redundant or duplicate state is a common source of bugs.</p>
    <p>In this section, you'll learn how to <i>structure your state well</i>, how to <i>keep your state update logic maintainable</i>, and how to <i>share state between distant components</i>.</p>`,
  ],
  sections: [
    {
      sectionTitle: 'React uses a declarative way to manipulate the UI',
      sectionSource:
        '/src/markdowns/03_Managing_state/React_uses_a_declarative_way_to_manipulate_the_UI.html',
      highlights: {
        highlight1: ['declarative way'],
      },
      tooltips: [
        `<h3>How <u>declarative UI</u> programming differs from <u>imperative UI</u> programming</h3>
        <p>With just Vanilla JavaScript, you have to write every single line of code that should be taken to build an app (Imperative Way).</p>
        <p><i>React uses a declarative way to manipulate the UI</i>. Instead of manipulating individual pieces of the UI directly, you <i>describe the different states that your component can be in</i>, and <i>switch between them</i> in response to user actions (user events) or computer actions (http events).</p>
        <p>With React, you won't modify the UI from code directly. With React you will <i>describe the UI you want to see for the <u>different visual states</u> of your component</i>, and then trigger the state changes in response to user input.</p>
        `,
        `<h3>Imperative way with Vanilla JavaScript vs declarative way with React</h3>
        <p>With just Vanilla JavaScript you have to write the exact instructions to manipulate the UI depending on what just happened. <i>It's called imperative because you have to "command" each element, telling the computer <u>how</u> to update the UI</i>.</p>
        <p>In React, you don't directly manipulate the UI. Instead, you declare what you want to show, and React figures out how to update the UI. When you design UI interactions, you probably think about <i>how the UI changes in response to user actions</i>.</p>
        <p>Declarative programming means <i>describing the UI for each <u>visual state</u></i> rather than micromanaging the UI (imperative).</p>
        <p><i>In React you need to describe what you want to see rather than manipulate the UI elements.</i> For example, if you want to add or remove a class from a DOM element, you need to <i>calculate the CSS class based on a state variable</i>, rather than select that DOM element and <i>change it's class directly</i> like you use to do imperatively with Vanilla Javascript.</p>
        `,
        `<h3>Thinking about UI declaratively</h3>
        <p>In React, you need to think about UI declaratively: <i>UI changes as state changes</i>.</p>
        <ul>There are some steps you need to follow when you build an app in React:
        <li>1. Identify your component's <i>different "visual states"</i></li>
        <li>2. Determine what triggers those <i>"visual states" changes</i>: human or computer</li>
        <li>3. Represent the <i>"visual states" in memory</i> using <code>useState</code></li>
        <li>4. Remove any <i>non-essential state variables</i></li>
        <li>5. Connect the <i>event handlers to set the state variables</i></li>
        </ul>`,
      ],
    },
    {
      sectionTitle: 'Choosing the state structure',
      sectionSource:
        '/src/markdowns/03_Managing_state/Choosing_the_state_structure.html',
      highlights: {
        highlight1: ['state structure'],
      },
      tooltips: [
        `<h3>Principles for structuring state</h3>
        <ul>When you write a <i>component that holds some state</i>, you'll have to make choices about how many state variables to use and what the shape of their data should be:
        <li>1. Group related state</li>
        <li>2. Avoid contradictions in state</li>
        <li>3. Avoid redundant state</li>
        <li>4. Avoid duplication in state</li>
        <li>5. Avoid deeply nested state</li>
        </ul>
        <p>The goal behind these principles is to make state <i>easy to update</i> without introducing mistakes. <i>Removing redundant and duplicate data from state helps ensure that all its pieces <u>stay in sync</u></i>.</p>
        `,
        `<h3>Group related state</h3>
        <p>If you always <i>update two or more state variables at the same time</i>, consider merging them into a single state variable. If some two state variables <i>always change together</i>, it might be a good idea to unify them into a single state variable. Then you won't forget to always <i>keep them in sync</i>.</p>
        <p>Another case where you'll group data into an object or an array is when <i>you don't know how many different pieces of state you'll need</i>. For example, it's helpful when you have a form where the user can add custom fields.</p>
        `,
        `<h3>Avoid contradictions in state</h3>
        <p>When the state is structured in a way that several pieces of state may contradict and "disagree" with each other, you leave room for mistakes. Try to avoid this.</p>
        `,
        `<h3>Avoid redundant state</h3>
        <p>If you can <i>calculate some information from the component's props or its existing state variables during rendering</i>, you should not put that information into that component's state.</p>
        <p><i>Don't mirror props in state!</i> If you initialize a state variable with a prop, if the parent component passes a different value for that prop, that state variable would not be updated! That's because <i>the state is only initialized during the <u>first render</u></i>. "Mirroring" props into state only makes sense when you want to <i>ignore all updates for a specific prop</i>. By convention, start the prop name with "initial" or "default" to clarify that its new values are ignored.</p>
        `,
        `<h3>Avoid duplication in state</h3>
        <p>When <i>the same data is duplicated between multiple state variables, or within nested objects, it is <u>difficult to keep them in sync</u></i>. Reduce duplication when you can.</p>
        `,
        `<h3>Avoid deeply nested state</h3>
        <p>Deeply hierarchical state is not very convenient to update. When possible, prefer to <i>structure state in a flat way</i>.</p>
        <p>Updating nested state involves making copies of objects all the way up from the part that changed. If the state is too nested to update easily, consider making it "flat" (restructure its data).</p>
        <p>You can nest state as much as you like, but making it "flat" can solve numerous problems. It makes state <i>easier to update</i>, and <i>it helps ensure you don't have duplication in different parts of a nested object</i>.</p>
        <p>Sometimes, you can also reduce state nesting by <i>moving some of the nested state into the child components</i>. This works well for ephemeral UI state that doesn't need to be stored, like whether an item is hovered.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Sharing state between components: lifting state up',
      sectionSource:
        '/src/markdowns/03_Managing_state/Sharing_state_between_components_lifting_state_up.html',
      highlights: {
        highlight1: ['lifting state up'],
      },
      tooltips: [
        `<h3>How to share state between components by lifting it up</h3>
        <p>Sometimes, you want <i>the state of two or multiple components to always change together</i>. To do it, <i>remove state from them, move it to their <u>closest common parent</u>, and then pass it down to them via props</i>. This is known as lifting state up.</p>
        <p>To change the state in the parent component, you need to pass down to the child components an <i>event handler that allow the child components to <u>change the parent's state</u></i>.</p>
        <p><i>Moving state of some components into the common parent component allow you to coordinate that components</i>, and passing down an event handler to the child allow the child to change the parent's state. Lifting state up often changes the nature of what you're storing as state.</p>
        <ul>You lift the state up in three steps:
        <li>1. Remove state from the child components</li>
        <li>2. Pass hardcoded data from the common parent</li>
        <li>3. Add state to the common parent and pass it down together with the event handlers as props</li>
        </ul>
        `,
        `<h3>Controlled and uncontrolled components</h3>
        <p>It is common to call <i>a component with some <u>local state</u> "uncontrolled". A child component that have a state variable that can't be changed by its parent component is called an uncontrolled component</i>.</p>
        <p>In contrast, you might say <i>a component is "controlled" when the important <u>data in it is driven by props</u> rather than its own local state</i>. This lets the parent component fully specify its behavior.</p>
        <p>Uncontrolled components are easier to use within their parents because they require less configuration. But they're less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props.</p>
        <p>In practice, “controlled” and “uncontrolled” aren't strict technical terms — each component usually has some mix of both local state and props. However, this is a useful way to talk about how components are designed and what capabilities they offer.</p>
        <p>When writing a component, consider which information in it should be <i>controlled (via props)</i>, and which information should be <i>uncontrolled (via state)</i>.</p>
        `,
        `<h3>A single source of truth for each state</h3>
        <p>In a React application, many components will have their own state. Some state may "live" close to the leaf components (components at the bottom of the tree) like inputs. Other state may "live" closer to the top of the app.</p>
        <p><i>For each unique piece of state, you will choose the component that "owns" it</i>. This principle is also known as having a "single source of truth". It doesn't mean that all state lives in one place — but that <i>for each piece of state, there is a specific component that holds that piece of information</i>.</p>
        <p><i>Instead of duplicating shared state between components, <u>lift it up</u> to their common shared parent, and <u>pass it down</u> to the children that need it.</i></p>
        `,
      ],
    },
    {
      sectionTitle: 'How to control whether the state gets preserved or reset',
      sectionSource:
        '/src/markdowns/03_Managing_state/How_to_control_whether_the_state_gets_preserved_or_reset.html',
      tooltips: [
        `<p>When you re-render a component, React needs to decide <i>which parts of the tree to keep (and update)</i>, and <i>which parts to discard or re-create from scratch</i>. In most cases, React's automatic behavior works well enough. <i>By default, React preserves the parts of the tree that “match up” with the previously rendered component tree.</i> However, sometimes this is not what you want.</p>
        <p>State is isolated between components. <i>React keeps track of which state belongs to which component based on their place in the UI tree</i>. You can control when to <u>preserve state</u> and when to <u>reset it</u> between re-renders.</p>
        `,
        `<h3>The UI tree</h3>
        <p>Browsers use many tree structures to model UI. The DOM represents HTML elements, the CSSOM does the same for CSS. <i>React also uses tree structures to manage and model the UI you make</i>.</p>
        <p><i>React makes UI trees from your JSX</i>, then React DOM updates the browser DOM elements to match that UI tree.</p>
        `,
        `<h3>State is tied to a position in the UI tree</h3>
        <p>When you give a component state, you might think the state "lives" inside the component. But the <i>state is actually held inside React. React associates each piece of state it's holding with the correct component by where that component sits in the UI tree</i>.</p>
        <p>State is not kept in JSX tags, it's associated with the tree position in which you put that JSX.</p>
        <p>In React, each component on the screen has fully isolated state.</p>`,
        `<h3>Same component at the same position preserves state</h3>
        <p><i>React will keep the state around for as long as you render the <u>same component</u> at the <u>same position</u></i>.</p>
        <p><i>When React removes a component, it destroys its state. When you add that component again to the DOM, its state is initialized from scratch</i>.</p>
        <p>React preserves a component's state for as long as it's being rendered at its position in the UI tree. If it gets removed, or a different component gets rendered at the same position, React discards its state.</p>
        <p><i>Same component at the same position preserves state. Different components at the same position reset state</i>. Remember that it's the position in the UI tree — not in the JSX markup — that matters to React!</p>
        `,
        `<h3>Different components at the same position reset state</h3>
        <p><i>When you render a <u>different component</u> in the <u>same position</u>, it resets the state of its entire subtree.</i></p>
        <p>As a rule of thumb, <i>if you want to preserve the state between re-renders, the structure of your tree needs to "match up" from one render to another</i>. If the structure is different, the state gets destroyed because <i>React destroys state when it removes a component from the tree</i>.</p>
        `,
        `<h3>Resetting state at the same position</h3>
        <p><i>By default, React preserves state of a component while it stays at the same position</i>. Usually, this is exactly what you want, so it makes sense as the default behavior. But sometimes, you may want to reset a component's state.</p>
        <ul>There are <i>two ways to reset state when <u>switching between same component at the same position</u></i>:
        <li>1. Render the component in <i>different positions</i></li>
        <li>2. Resetting state with a <i><code>key</code></i></li>
        </ul>
        <p>You might have seen <code>key</code>s when rendering lists. <i>Keys aren't just for lists! You can use keys to make React distinguish between any components. Specifying a <code>key</code> tells React to use the <code>key</code> itself as part of the position, instead of their order within the parent.</i> You can force a subtree to reset its state by giving it a different key.</p>
        <p>State is associated with the tree position. A <code>key</code> lets you specify a named position instead of relying on order.</p>
        <p>You can provide a <code>key</code> to a JSX tag and when that <code>key</code> changes, <i>React will re-create the DOM node from scratch, instead of reusing it</i>.</p>
        `,
        `<h3>Preserving state for removed components</h3>
        <p>- <i>You could render all components instead of just the current one, but hide all the others with CSS.</i> The components would not get removed from the tree, so their local state would be preserved. This solution works great for simple UIs. But it can get very slow if the hidden trees are large and contain a lot of DOM nodes.</p>
        <p>- <i>You could lift the state up and hold the state of child components in the parent component.</i> This way, when the child components get removed, it doesn't matter, because it's the parent that keeps the important information.</p>
        <p>- <i>You might also use a different source in addition to React state.</i></p>
        `,
      ],
    },
    {
      sectionTitle:
        'Extracting state logic into a Reducer with the <code>useReducer</code> hook',
      sectionSource:
        '/src/markdowns/03_Managing_state/Extracting_state_logic_into_a_Reducer.html',
      highlights: {
        highlight2: ['useReducer'],
      },
      tooltips: [
        `<h3>Consolidate state logic with a reducer</h3>
        <p>Components with <i>many state updates spread across many event handlers</i> can get overwhelming. For these cases, you can <i>consolidate all the state update logic <i>outside your component</i> in a single function</i>, called a reducer.</p>
        <p>Your event handlers become concise because they only specify the user “actions”. The reducer function specifies <i>how the state should update in response to each action</i>!</p>
        <ul>Reducers are <i>a different way to handle state</i>. You can migrate from <code>useState</code> to <code>useReducer</code> in three steps:
        <li>1. Move from <i>setting state</i> to <i>dispatching actions</i>.</li>
        <li>2. Write a <i>reducer function</i>.</li>
        <li>3. Use the reducer from your component.</li>
        </ul>
        `,
        `<h3>1. Move from <u>setting state</u> to <u>dispatching actions</u></h3>
        <p>Managing state with reducers is slightly different from directly setting state. Instead of telling React “what to do” by setting state, you specify “what the user just did” by <i>dispatching “actions” from your event handlers</i>.</p>
        <p>The state update logic will live elsewhere! So <i>instead of “setting” state via an event handler, you're dispatching an “action”.</i> This is more descriptive of the user's intent.</p>
        <p><i>The object you pass to dispatch function is called an “action” and is a regular JavaScript object</i>. You decide what to put in it, but generally it should contain the minimal information about what happened.</p>
        <p><i>An "action" object can have any shape. By convention, it is common to give it a string <code>type</code> that describes what happened</i>, and pass any additional information in other fields. Keep in mind that "action" <code>type</code>s should ideally describe “what the user did” rather than “how you want the state to change”. This makes it easier to later add more features.</p>
        `,
        `<h3>2. Write a reducer function</h3>
        <p>A reducer function is <i>where you will put your state logic</i>. It takes two arguments, the <i>current state</i> and the <i>"action" object</i>, and it <i>returns the next state</i>.</p>
        <p><i>React will set the state to what you return from the reducer</i>.</p>
        <p>Because the reducer function takes state as an argument, you can <i>declare it outside of your component</i>. This decreases the indentation level and can make your code easier to read.</p>
        <p>You can use <code>if/else</code> statements to manipulate the state inside reducers, but it's a convention to use <code>switch</code> statements. The result is the same, but it can be easier to read <code>switch</code> statements at a glance.</p>
        <p>If you want, you can even move the reducer to a different file.</p>
        `,
        `<h3>3. Use the reducer from your component</h3>
        <p>The <code>useReducer</code> Hook is similar to <code>useState</code> — you must pass it an initial state and it returns a stateful value and a way to set state (in this case, the dispatch function). But it's a little different.</p>
        <ul>The <code>useReducer</code> Hook takes two arguments:
        <li>1. A <i>reducer function</i></li>
        <li>2. An <i>initial state</i></li>
        </ul>
        <ul>And it returns:
        <li>1. A <i>stateful value</i></li>
        <li>2. A <i>dispatch function</i> (to “dispatch” user actions to the reducer)</li>
        </ul>
        `,
        `<h3><code>useReducer</code> vs <code>useState</code></h3>
        <p>Component logic can be easier to read when you separate concerns. By consolidate state logic with a reducer the event handlers <i>only specify what happened by dispatching actions</i>, and <i>the reducer function determines how the state updates in response to them</i>.</p>
        `,
        `<h3>Writing reducers well</h3>
        <ul>Keep these two tips in mind when writing reducers:
        <li>- <i>reducers must be pure</i>. Similar to state updater functions, reducers run during rendering! (Actions are queued until the next render.) This means that reducers must be pure — <i>same inputs always result in the same output</i>. They should not send requests, schedule timeouts, or perform any side effects (operations that impact things outside the component). They should <i>update objects and arrays without mutations</i>.</li>
        <li>- <i>each action describes a single user interaction</i>, even if that leads to multiple changes in the data. For example, if a user presses “Reset” on a form with five fields managed by a reducer, it makes more sense to dispatch one <code>reset_form</code> action rather than five separate <code>set_field</code> actions. If you log every action in a reducer, that log should be clear enough for you to reconstruct what interactions or responses happened in what order. This helps with debugging!</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle:
        '<code>useReducer</code> vs <code>useState</code> for state management',
      sectionSource:
        '/src/markdowns/03_Managing_state/useReducer_vs_useState_for_state_management.html',
      tooltips: [
        `<h3><code>useState()</code></h3>
        <p><i><code>useState()</code> is your main state management tool.</i> Typically, you start with <code>useState()</code> and often it's all you need. It's great for independent pieces of state and data. It's great if state updates are easy and limited to a few kinds of updates. So, if you don't have a lot of different cases that will change a state, and especially if you don't have an object as a state or anything like that.</p>`,
        `<h3><code>useReducer()</code></h3>
        <p>If you do have an object as a state or a <i>more complex state</i>, <code>useReducer()</code> might be interesting because, in general, <code>useReducer()</code> is great if you need more power and with more power, I simply mean that you can write such a reducer function that can contain <i>more complex state updating logic</i>, where you always are guaranteed to work with the latest state snapshot, and where you can move that potentially more complex logic out of your component function body into a separate reducer function.</p>
        <p>You should especially consider <code>useReducer()</code> if you're dealing with <i>related data</i>, with state that is made up of <i>related pieces of state</i>.</p>
        <p><code>useReducer()</code> can be helpful if you have more <i>complex state updates, if you have different cases, different actions that can change a state</i>.</p>
        `,
        `<h3>Comparing <code>useState()</code> and <code>useReducer()</code></h3>
        <ul> Reducers are not without downsides! Here's a few ways you can compare them:
        <li>- <i>Code size</i>: Generally, with <code>useState()</code> you have to write less code upfront. With <code>useReducer()</code>, you have to write both a reducer function and dispatch actions. However, <i><code>useReducer()</code> can help cut down on the code if <u>many event handlers modify state in a similar way</u></i>.</li>
        <li>- <i>Readability</i>: <code>useState()</code> is very easy to read when the state updates are simple. When they get more complex, they can bloat your component's code and make it difficult to scan. In this case, <i><code>useReducer()</code> lets you cleanly separate the <u>how</u> of update logic from the <u>what happened</u> of event handlers</i>.</li>
        <li>- <i>Debugging</i>: When you have a bug with <code>useState()</code>, it can be difficult to tell <u>where</u> the state was set incorrectly, and <u>why</u>. <i>With <code>useReducer()</code>, you can add a console log into your reducer to see every state update, and <u>why</u> it happened (due to which <code>action</code>).</i> If each <code>action</code> is correct, you'll know that the mistake is in the reducer logic itself. However, you have to step through more code than with <code>useState()</code>.</li>
        <li>- <i>Testing</i>: A reducer is a pure function that doesn't depend on your component. This means that you can export and test it separately in isolation. While generally it's best to test components in a more realistic environment, for complex state update logic it can be useful to assert that your reducer returns a particular state for a particular initial state and action.</li>
        </ul>`,
      ],
    },
    {
      sectionTitle:
        'How to pass information without “prop drilling”: passing data deeply with Context',
      sectionSource:
        '/src/markdowns/03_Managing_state/Passing_Data_Deeply_with_Context.html',
      highlights: {
        highlight2: ['Context'],
      },
      tooltips: [
        `<h3>The problem with passing props</h3>
        <p>Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information.</p>
        <p><i>Context lets the parent component make some information available to any component in the tree below it — no matter how deep — without passing it explicitly through props</i>.</p>
        `,
        `<h3>Context: an alternative to passing props</h3>
        <p>Context lets <i>a parent component provide data to the entire tree below it</i>.</p>
        <ul>You will implement context in three steps:
        <li>1. <i>Create</i> a context</li>
        <li>2. <i>Use</i> that context from the component that needs the data</li>
        <li>3. <i>Provide</i> that context from the component that specifies the data</li>
        </ul>
        <p>Context lets you read information from a component above.</p>
        `,
        `<h3>Step 1: <u>Create</u> the context</h3>
        <p>First, you need to create the context. You'll need to export it from a file so that your components can use it</p>
        <p>The only argument to <code>createContext</code> is the default value.</p>
        `,
        `<h3>Step 2: <u>Use</u> the context</h3>
        <p>Import the  <code>createContext</code> Hook from React and your context in the component that you want to use context.</p>
        `,
        `<h3>Step 3: <u>Provide</u> the context</h3>
        <p>If you don't provide the context, React will use the default value specified when you creating the context</p>
        <p>To provide the context you need to wrap all components that you want to use that context with a context provider. This tells React: "if any child component inside the parent component asks for context, give them the context value.”</p>
        <p>The child component will use the value of the nearest context provider in the UI tree above it.</p>
        `,
        `<h3>Context passes through intermediate components</h3>
        <p>You can insert as many components as you like between the component that provides context and the one that uses it. This includes both built-in components like <<span>div</span>> and components you might build yourself.</p>
        <p>Context lets you write components that "adapt to their surroundings" and display themselves differently depending on <u>where</u> (or, in other words, <u>in which context</u>) they are being rendered.</p>`,
        `<h3>Context work similar as CSS property inheritance</h3>
        <p>How context works might remind you of CSS property inheritance. In CSS, you can specify <code>color: blue</code> for a <<span>div</span>>, and any DOM node inside of it, no matter how deep, will inherit that color unless some other DOM node in the middle overrides it with <code>color: green</code>. Similarly, <i>in React, the only way to override some context coming from above is to wrap children into a context provider with a different value</i>.</p>
        <p>In CSS, different properties like <code>color</code> and <code>background-color</code> don't override each other. You can set all  <<span>div</span>>'s <code>color</code> to red without impacting <code>background-color</code>. Similarly, <i>different React contexts don't override each other. Each context that you make with <code>createContext()</code> is completely separate from other ones, and ties together components using and providing that particular context</i>. One component may use or provide many different contexts without a problem.</p>
        `,
        `<h3>Before you use context</h3>
        <p>Just because you need to pass some props several levels deep doesn't mean you should put that information into context.</p>
        <ul>Here's a few alternatives you should consider before using context:
        <li>- <i>Start by passing props</i>. If your components are not trivial, it's not unusual to pass a dozen props down through a dozen components.</li>
        <li>- <i>Extract components and pass JSX as <code>children</code> to them</i>. If you pass some data through many layers of intermediate components that don't use that data (and only pass it further down), this often means that you forgot to extract some components along the way.</li>
        </ul>
        <p>In general, if some information is needed by distant components in different parts of the tree, it's a good indication that context will help you.</p>
        <p>Context is not limited to static values. If you pass a different value on the next render, React will update all the components reading it below! This is why context is often used in combination with state.</p>
        <p>Apply Context sparingly because it MAKES COMPONENT REUSE MORE DIFFICULT !!!</p>
        `,
        `<h3>React Context Limitations</h3>
        <p>React Context can be great forcomponent wide state, so essentially states that affects multiple components, but it's not a replacement for component configuration. So props for configuration, context for state management across components or possibly across the entire app.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Making Context dynamic: scaling up with <code>useState</code> or <code>useReducer</code>',
      sectionSource:
        '/src/markdowns/03_Managing_state/Making_Context_dynamic.html',
      highlights: {
        highlight1: ['Context dynamic'],
      },
      tooltips: [
        `<h3>Combining a reducer with context</h3>
        <p>The good thing is you can set up a dynamic context, where you don't just pass data to other components, but also functions. Therefore, you can build and using a component context to manage your state and functions that changes the state. You can combine reducer with context to let any component read and update state above it.</p>
        <p>Context is not limited to static values. If you pass a different value on the next render, React will update all the components reading it below! This is why context is often used in combination with state.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Adding two-way binding',
      sectionSource:
        '/src/markdowns/03_Managing_state/Adding_two_way_binding.html',
      highlights: {
        highlight2: ['two-way binding'],
      },
      tooltips: [
        `Two-way binding is very useful when you're working with html <<span>form</span>> or <<span>input</span>> tags, because it allows you to gather user input, but then also change it.`,
      ],
    },
    {
      sectionTitle: 'Learning the "rules of Hooks"',
      sectionSource:
        '/src/markdowns/03_Managing_state/Learning_the_rules_of_Hooks.html',
      highlights: {
        highlight1: ['rules of Hooks'],
      },
      tooltips: [
        `<h3>Hooks are more restrictive than other functions</h3>
        <p>Hooks — <i>functions starting with 'use'</i> — can only be <i>called at the top level of your components or your own custom Hooks</i>. You can't call Hooks inside conditions, loops, or other nested functions. If you want to use a Hook like <code>useState</code> in a condition or a loop, extract a new component and put it there.</p>
        <p>Hooks are special functions that are only available while React is rendering. They let you “hook into” different React features.</p>
        <p>Hooks are functions, but it's helpful to think of them as unconditional declarations about your component's needs. You 'use' React features at the top of your component similar to how you 'import' modules at the top of your file.</p>
        `,
      ],
    },
  ],
};

const Refs = {
  title: '<p class="card__title--2">Refs</p>',
  sections: [
    {
      sectionTitle:
        'How to “remember” information without re-rendering: referencing values with refs',
      sectionSource: '/src/markdowns/06_Refs/Referencing_values_with_ref.html',
      highlights: {
        highlight2: ['refs'],
      },
      tooltips: [
        `<h3>Referencing values with refs</h3>
        <p>When you want a component to <i>"remember" some information, but you don't want that information to trigger new renders</i>, you can use a ref.<p>
        <p>Like state, <i>refs let you retain information between re-renders of a component</i>. However, setting state re-renders a component; changing a ref does not!</p>
        `,
        `<h3>Adding a ref to your component</h3>
        <p>You can access the current value of that ref through the <i><code>ref.current</code> property</i>. This value is intentionally <u>mutable</u>, meaning you can both read and write to it.</p>
        `,
        `<h3>Differences between refs and state</h3>
        <p>A component doesn't re-render when you modify the <code>ref.current</code> value.</p>
        <p>You shouldn't read (or write) the <code>ref.current</code> value during rendering but you can read state at any time. However, each render has its own <u>snapshot of state</u> which does not change.</p>
        <p><i>Limitations of React state don't apply to refs</i>. For example, state acts like a snapshot for every render and doesn't update synchronously, but when you mutate the current value of a ref, it changes immediately.</p>
        <p>You also don't need to worry about avoiding mutation when you work with a ref. <i>As long as the object you're mutating isn't used for rendering, React doesn't care what you do with the ref or its contents</i>. Refs are an escape hatch to <i>hold onto values that <u>aren't used for rendering</u></i>.</p>
        <p><i>When a piece of information is <u>used for rendering</u>, keep it in state</i>. When a piece of information is only needed by event handlers and changing it doesn't require a re-render, using a ref may be more efficient.</p>
        `,
        `<h3>When to use refs</h3>
        <ul>Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs — often a browser API <i>that won't impact the appearance of the component</i>:
        <li>- Storing timeout IDs</li>
        <li>- Storing and manipulating DOM elements</li>
        <li>- Storing other objects <i>that aren't necessary to calculate the JSX</i>.</li>
        </ul>
        <p><i>If your component needs to store some value, <u>but it doesn't impact the rendering logic</u>, choose refs</i>.</p>
        `,
        `<h3>Best practices for refs</h3>
        <p><i>Treat refs as an escape hatch</i>. Refs are useful when you work with external systems or browser APIs.</p>
        <p><i>Don't read or write <code>ref.current</code> during rendering</i>. If some information is needed during rendering, use state instead.</p>
        <p>You can use refs to store timeout IDs, DOM elements, and other objects <i>that don't impact the component's rendering output</i>.</p>
        `,
        `<h3>Refs and the DOM</h3>
        <p><i>You can point a ref to any value</i>. However, the most common use case for a ref is to <i>access a DOM element</i>. For example, this is handy if you want to focus an input programmatically. When you pass a ref to a <i><code>ref</code> attribute in JSX</i>, like <code><<span>div ref={myRef}</span>></code>, React will put the corresponding DOM element into <code>myRef.current</code>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'How to access DOM elements managed by React with the <code>ref</code> attribute',
      sectionSource:
        '/src/markdowns/06_Refs/Manipulating_the_DOM_with_ref.html',
      highlights: {
        highlight2: ['<code>ref</code> attribute'],
      },
      tooltips: [
        `<h3>Manipulating the DOM with Refs</h3>
        <p>React automatically updates the DOM to match your render output, so your components won't often need to manipulate it. However, sometimes you might need access to the DOM elements managed by React.</p>
        <p><code>ref</code> allow you to get <i>access to a DOM node</i> and work with it. With <code>ref</code> you can <i>set up a connection between a DOM node and your JavaScript code</i>.</p>
        <p>You can add <code>ref</code> to any <i>build-in HTML element</i>.</p>
        <p>You can have more than a single <code>ref</code> in a component.</p>
        `,
        `<h3>The <code>useRef</code> hook</h3>
        <p>The <code>useRef</code> hook <i>returns an object</i> with a single property called <i><code>current</code></i>. The <code>current</code> property <i>stores the actual DOM node</i>.</p>
        `,
        `<h3>When React attaches the refs</h3>
        <p>In general, <i>you don't want to access refs during rendering</i>. That goes for refs holding DOM nodes as well. During the first render, the DOM nodes have not yet been created, so <code>ref.current</code> will be <code>null</code>. And during the rendering of updates, the DOM nodes haven't been updated yet. So it's too early to read them.</p>
        <p><i>React sets <code>ref.current</code> during the commit</i>. Before updating the DOM, React sets the affected <code>ref.current</code> values to <code>null</code>. After updating the DOM, React immediately sets them to the corresponding DOM nodes.</p>
        <p><i>Usually, you will access refs from event handlers</i>. If you want to do something with a ref, but there is no particular event to do it in, you might need an Effect.</p>
        `,
        `<h3>Best practices for DOM manipulation with refs</h3>
        <p>Refs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose. If you stick to <i>non-destructive actions</i> like focusing and scrolling, you shouldn't encounter any problems. However, <i>if you try to modify the DOM manually, you can risk conflicting with the changes React is making</i>.</p>
        <p><i>Avoid changing DOM nodes managed by React</i>: modifying, adding children to, or removing children from elements that are managed by React can lead to inconsistent visual results or crashes. However, this doesn't mean that you can't do it at all. It requires caution. <i>You can safely modify parts of the DOM that React has no reason to update</i>. For example, if some <<span>div</span>> is always empty in the JSX, React won't have a reason to touch its children list. Therefore, it is safe to manually add or remove elements there.</p>
        <p>Usually, you will use refs for <i>non-destructive actions</i> like focusing, scrolling, or measuring DOM elements. <i>Rarely use <code>ref</code> to manipulate the DOM. Use <code>ref</code> only to read the DOM node</i>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Accessing another component’s DOM nodes: <code>React.forwardRef()</code> and <code>useImperativeHandle</code> hook',
      sectionSource:
        '/src/markdowns/06_Refs/Accessing_another_component_DOM_node.html',
      highlights: {
        highlight2: [
          '<code>React.forwardRef()</code>',
          '<code>useImperativeHandle</code>',
        ],
      },
      tooltips: [
        `<h3>Accessing another component's DOM nodes</h3>
        <p>The <code>ref</code> attribute is <i>supported on all built-in HTML elements</i>, but <i>by default you can't use <code>ref</code> attribute on your custom components</i>!</p>
        <p><i>A custom component doesn't expose its DOM nodes by default</i>. You can opt into exposing a DOM node by using <code>forwardRef</code> and passing the second <code>ref</code> argument down to a specific node.</p>
        <p><i>React does not let a component access the DOM nodes of other components</i>. Not even for its own children! Instead, custom components that want to expose their DOM nodes have to <u>opt in to that behavior</u>. A component can specify that it “forwards” its ref to one of its children.</p>
        `,
        `<h3>Exposing a subset of the API with an imperative handle</h3>
        <p>In uncommon cases, you may want to <i>restrict the exposed functionality</i> of a DOM node. You can do that with <code>useImperativeHandle</code> hook. <code>useImperativeHandle</code> instructs React to provide <i>your own special object</i> as the value of a ref to the parent component. In this case, <i>the ref "handle" is not the DOM node</i>, but the custom object you create inside <code>useImperativeHandle</code> call.</p>
        `,
      ],
    },
    {
      sectionTitle: '<code>useRef</code> & uncontrolled components',
      sectionSource:
        '/src/markdowns/06_Refs/useRef_and_uncontrolled_components.html',
      tooltips: [
        `<p>The approach of using <code>ref</code> to interact with DOM elements, specifically with <<span>input/</span>> elements, also has a special name. We're talking about <i>uncontrolled components, if you access values with a <code>ref</code>. Why uncontrolled? Because they're internal state, so the value which is reflected in them is not controlled by React</i>. You rely on the default behavior of the input, where a user is able to enter something, and that entered value is reflected. And you then just fetch it with a React feature (<code>ref</code>), but you don't feed data back into the <<span>input/</span>> like you do with <code>useState</code> and <code>value</code> attribute. So that's why is called uncontrolled, because you're not controlling the state off the <<span>input/</span>> element with React.</p>
        <p>Now, you can talk about uncontrolled and controlled components, also in the context of other components, but most commonly you have this scenario when you talk about input components, about form components in general, because those components tend to have some internal state, natively by the browser, an input element is configured to take user input and save and reflect it, and when you then work with those components in a React app, you wanna connect your React state to that. That's why you typically have this controlled/uncontrolled thing when you work with input components in React.</p>
        <p>When you use <code>ref</code> for inputs, you have uncontrolled input components.</p>`,
      ],
    },
  ],
};

const Handling_side_effects = {
  title: '<p class="card__title--2">Handling side effects</p>',
  sections: [
    {
      sectionTitle:
        'How to synchronize components with external systems: Synchronizing with Effects',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/Synchronizing_with_effects.html',
      highlights: {
        highlight1: ['synchronize components with external systems'],
      },
      tooltips: [
        `<h3>What are Effects and how are they different from events?</h3>
        <p>Some components need to synchronize with external systems. <i>Effects let you run some code <u>after rendering</u></i> so that you can synchronize your component with some system outside of React.</p>
        <ul>Before getting to Effects, you need to be familiar with two types of logic inside React components:
        <li>- <i>Rendering code</i> lives at the top level of your component. This is where you take the props and state, transform them, and return the JSX you want to see on the screen. Rendering code must be pure. Like a math formula, it should only calculate the result, but not do anything else.</li>
        <li>- <i>Event handlers</i> are nested functions inside your components that do things rather than just calculate them. An event handler might update an input field, submit an HTTP POST request to buy a product, or navigate the user to another screen. Event handlers contain "side effects" (they change the program's state) and are caused by a specific user action (for example, a button click or typing).</li>
        <li>Sometimes this isn't enough. <i>Effects let you specify <u>side effects that are caused by rendering itself</u>, rather than by a particular event</i>.</li>
        </ul>
        <p><i>Effects run at the end of the rendering process <u>after the screen updates</u></i>. Every time your component renders, React will update the screen and then run the code inside <code>useEffect</code>. In other words, <i><code>useEffect</code> "delays" a piece of code from running until that render is reflected on the screen</i>.</p>
        <p><code>useEffect()</code> function runs after every component render cycle, not before it, not during it, but after it.</p>
        <p>The code inside your Effect will only execute when the dependencies specified by you changed, and not when the component re-renders.</p>
        <p><code>useEffect()</code> will run no matter what only when your app is run for the first time. After your app run for the first time, <code>useEffect()</code> will only executed if the dependencies changes.</p>
        `,
        `<h3>You might not need an Effect</h3>
        <p>Effects let you synchronize a component with some external system. If there's no external system and you only want to adjust some state based on other state, you might not need an Effect.</p>
        `,
        `<h3>How to write an Effect</h3>
        <ul>To write an Effect, follow these three steps:
        <li>1. <i>Declare</i> an Effect. By default, your Effect will run <u>after</u> every render.</li>
        <li>2. Specify the <i>Effect dependencies</i>. Most Effects should only re-run <u>when needed</u>, rather than after every render.</li>
        <li>3. Add <i>cleanup</i> if needed. Some Effects need to specify how to stop, undo, or clean up whatever they were doing.</li>
        </ul>
        `,
        `<h3>The DOM and side effects</h3>
        <p><i>In React, rendering should be a pure calculation of JSX and should not contain side effects</i> like modifying the DOM. By wrapping the DOM update in an Effect, you let React update the screen first. Then your Effect runs.</p>`,
        `<h3>Specify the Effect dependencies</h3>
        <p>Does <code>useEffect</code> run after every render? Yes! By default, if you don't pass an array of dependencies, <code>useEffect</code> runs both after the first render and after every component render cycle.</p>
        <p><i>By default, Effects run <u>after every render</u> (including the initial one)</i>. Often, this is not what you want. <i>You can tell React to skip unnecessarily re-running the Effect by specifying an <u>array of dependencies</u></i> as the second argument to the <code>useEffect</code>. The dependency array can contain multiple dependencies. An empty dependency array <code>[]</code> corresponds to the component "mounting" (i.e. being added to the screen).</p>
        <p>React will <i>only skip re-running the Effect if all of the dependencies you specify have exactly the same values as they had during the previous render</i>.</p>
        <p><i>You can't "choose" your dependencies, they are determined by the code inside the Effect</i>. You will get a lint error if the dependencies you specified don't match what React expects based on the code inside your Effect. This helps catch many bugs in your code. If your Effect uses some value but you don't want to re-run the Effect when it changes, you'll need to edit the Effect code itself to not "need" that dependency. If the linter lets you omit a dependency without errors, that means it is safe to do. Omitting <i>always-stable dependencies</i> only works when the linter can "see" that the object is stable.</p>
        `,
        `<h3>Add cleanup if needed</h3>
        <p>In the <code>useEffect()</code> function you can <i>return only one specific thing, and that thing is a function</i>.</p>
        <p>The function that you return from the <code>useEffect()</code> is called <i>cleanup function</i>. This function that you return from <code>useEffect()</code> will <i>run as a cleanup process <u>before</u> <code>useEffect()</code> will be re-executed. The cleanup function will not run when the <code>useEffect()</code> is executed for the first time</i>.</p>
        <p>React will call your cleanup function each time <u>before</u> the Effect runs again, and one final time when the component unmounts from DOM (gets removed from DOM).</p>`,
        `<h3>How to handle the Effect firing twice in development?</h3>
        <p><i>In development React <u>remounts</u> every component once immediately after its initial mount. In production, you don't have this behavior</i>. Remounting components only happens in development to help you find Effects that need cleanup.</p>
        <p>The right question isn't “how to run an Effect once”, but “how to fix my Effect so that it works after remounting”. Usually, the answer is to implement the cleanup function.</p>
        <p>The cleanup function should stop or undo whatever the Effect was doing. The rule of thumb is that the user shouldn't be able to distinguish between the Effect running once (as in production) and a setup → cleanup → setup sequence (as you'd see in development).</p>
        <p>When Strict Mode is on, React mounts components twice (in development only!) to stress-test your Effects. <i>If your Effect breaks because of remounting, you need to implement a cleanup function</i>. React will call your cleanup function before the Effect runs next time, and during the unmount.</p>
        <p>When you implement the cleanup well, there should be no user-visible difference between running the Effect once vs running it, cleaning it up, and running it again.</p>
        `,
        `<h3><code>useState()</code> vs <code>useEffect()</code></h3>
        <p><code>useState()</code> run when the state change but <code>useEffect()</code> run when the dependencies change.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'How to remove unnecessary Effects from your components: You might not need an Effect',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/You_might_not_need_an_effect.html',
      highlights: {
        highlight1: ['remove unnecessary Effects'],
      },
      tooltips: [
        `<h3>Why to remove unnecessary Effects from your components</h3>
        <p>Effects are an escape hatch from the React paradigm. They let you "step outside" of React and synchronize your components with some external system. <i>If there is no external system involved (for example, if you want to update a component's state when some props or state change), you shouldn't need an Effect</i>. Removing unnecessary Effects will make your code easier to follow, faster to run, and less error-prone.</p>`,
        `<h3>How to remove unnecessary Effects</h3>
        <ul>There are two common cases in which you don't need Effects:
        <li>- You don't need Effects to <i>transform data for rendering</i>;</li>
        <li>- You don't need Effects to <i>handle user events</i>.</li>
        </ul>
        <p>You do need Effects to <i>synchronize with external systems</i>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'How an Effect’s lifecycle is different from a component’s: Lifecycle of reactive Effects',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/Lifecycle_of_reactive_effects.html',
      highlights: {
        highlight2: ['an Effect’s lifecycle is different from a component’s'],
      },
      tooltips: [
        `<h3>How an Effect's lifecycle is different from a component's lifecycle</h3>
        <p><i>Effects have a different lifecycle from components</i>. Components may mount, update, or unmount. An Effect can only do two things: to <i>start synchronizing</i> something, and later to <i>stop synchronizing</i> it. This cycle can happen multiple times if your Effect depends on <i>props and state that change over time</i>.</p>
        `,
        `<h3>How to think about each individual Effect in isolation</h3>
        <ul>Every React component goes through the same lifecycle:
        <li>- A component <u>mounts</u> when it's added to the screen.</li>
        <li>- A component <u>updates</u> when it receives new props or state. This usually happens in response to an interaction.</li>
        <li>- A component <u>unmounts</u> when it's removed from the screen.</li>
        </ul>
        <p>It's a good way to think about components, but not about Effects. Instead, try to think about each Effect <i><u>independently</u> from your component's lifecycle</i>. An Effect describes <i>how to synchronize an external system to the current props and state</i>. As your code changes, this synchronization will need to happen more or less often.</p>
        <p>When you write an Effect, it shouldn't matter whether a component is mounting, updating, or unmounting. All you need to do is to <i>describe how to start synchronization and how to stop it</i>.</p>
        <p><i>Your Effect's <u>body</u> specifies how to <u>start synchronizing</u>, and your <u>cleanup function</u> specifies how to <u>stop synchronizing</u></i>.</p>
        `,
        `<h3>When your Effect needs to re-synchronize, and why</h3>
        <p>Intuitively, you might think that React would start synchronizing when your component mounts and stop synchronizing when your component unmounts. Sometimes, it may also be necessary to <i>start and stop synchronizing multiple times while the component remains mounted</i>.</p>
        <p>The main reason your Effect will re-synchronize in practice is <i>if some data it uses has changed</i>.</p>
        `,
        `<h3>How React verifies that your Effect can re-synchronize</h3>
        <p><i>In development, React always <u>remounts</u> each component once</i>. In other words, React verifies that your Effect can re-synchronize by forcing it to do that immediately in development. React starts and stops your Effect one extra time in development to check you've implemented its cleanup well.</p>
        <p>The main reason your Effect will re-synchronize in practice is if some data it uses has changed.</p>
        `,
        `<h3>How React knows that it needs to re-synchronize the Effect</h3>
        <p>Every time <i>after your component re-renders</i>, React will look at the array of dependencies that you have passed. If any of the values in the array is different from the value at the same spot that you passed during the previous render, React will re-synchronize your Effect.</p>
        <p>What to do when you don't want to re-synchronize? You could “prove” to the linter that a value isn't a reactive value (that it can't change as a result of a re-render) by move it outside the component.</p>
        `,
        `<h3>Effects “react” to reactive values: what it means for a value to be reactive</h3>
        <p>Effects are <i>reactive blocks of code</i>. They re-synchronize when the values you read inside of them change. Unlike event handlers, which only run once per interaction, Effects run whenever synchronization is necessary.</p>
        <p>Effects "react" to reactive values: <i>props, state, and other values declared inside the component are reactive because they're calculated during rendering and participate in the React data flow. Reactive values must be included in dependencies</i>. After all, dependencies only do something when they change over time!</p>
        <p><i>All variables declared in the component body are reactive</i>: props and state aren't the only reactive values. Values that you calculate from them are also reactive. If the props or state change, your component will re-render, and the values calculated from them will also change. This is why all variables from the component body used by the Effect should also be in the Effect dependency list.</p>
        <p>Can global or mutable values be dependencies? Mutable values (including global variables) aren't reactive.</p>
        `,
        `<h3>Each Effect represents a separate synchronization process</h3>
        <p>Each Effect in your code should represent a <i>separate and independent synchronization process</i>.</p>
        <p>If an Effect synchronize different things, it made sense to split it up. On the other hand, if you split up a cohesive piece of logic into separate Effects, the code may look “cleaner” but will be more difficult to maintain. This is why you should think whether <i>the processes are same or separate, not whether the code looks cleaner</i>.</p>
        `,
        `<h3>What an Effect with empty dependencies means</h3>
        <p>If you think from the component's perspective, the empty <code>[]</code> dependency array means that Effect <i>run only when the component mounts</i>, and <i>run only when the component unmounts</i> (keep in mind that React would still run it an extra time in development to stress-test your Effect's logic).</p>`,
      ],
    },
    {
      sectionTitle:
        'How to prevent some values from re-triggering Effects: Separating Events from Effects',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/Separating_Events_from_Effects.html',
      highlights: {
        highlight1: ['prevent some values from re-triggering Effects'],
      },
      tooltips: [
        `<h3>Why Effects are reactive, and event handlers are not</h3>
        <p>Event handlers only re-run when you perform the same interaction again. Unlike event handlers, Effects re-synchronize if some value they read, like a prop or a state variable, is different from what it was during the last render.</p>
        <p>Event handlers run in response to <i>specific interactions</i> but Effects run <i>whenever synchronization is needed</i>.</p>
        `,
        `<h3>Reactive <u>values</u> and reactive <u>logic</u></h3>
        <p>Intuitively, you could say that event handlers are always triggered "manually", for example by clicking a button. Effects, on the other hand, are "automatic": they run and re-run as often as it's needed to stay synchronized. <i>Props, state, and variables declared inside your component's body are called <u>reactive values</u> because they participate in the rendering data flow and these values can <u>change due to a re-render</u></i>.</p>
        <ul><i>Event handlers and Effects are different in <u>how they respond to changes</u></i>:
        <li>- <i>logic inside event handlers is <u>not reactive</u></i>. It will not run again unless the user performs the same interaction (for example, a click) again. Event handlers can read reactive values, but they don't "react" to their changes;</li>
        <li>- <i>logic inside Effects is <u>reactive</u></i>. If your Effect reads a reactive value, you have to specify it as a dependency. Then, if a re-render causes that value to change, React will re-run your Effect's logic again with the new value.</li>
        </ul>
        <p>You can move non-reactive logic from Effects into <i>Effect Events</i>.</p>
        `,
        `<h3>Choosing between event handlers and Effects</h3>
        <p>When you write code and you are not sure where to put it (in an event handlers or Effects), every time you need to answer this question <i>"Why the code needs to run?"</i>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'How to make your Effect re-run less often: Removing Effect dependencies',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/Removing_Effect_dependencies.html',
      tooltips: [
        `<h3>How to fix infinite Effect dependency loops</h3>
        <p>When you write an Effect, the linter will verify that you've included every reactive value (like props and state) that the Effect reads in the list of your Effect's dependencies. This ensures that your Effect remains synchronized with the latest props and state of your component. <i>Unnecessary dependencies may cause your Effect to run too often</i>, or even create an infinite loop.</p>
        <p>If the code in your Effect should run in response to a specific interaction, move that code to an event handler.</p>
        <p>If different parts of your Effect should re-run for different reasons, split it into several Effects.</p>
        `,
        `<h3>What to do when you want to remove a dependency</h3>
        <p><i>Dependencies should match the code: if you want to change the dependencies, change the surrounding code first</i>.</p>
        <p>Effects “react” to reactive values. You can think of the dependency list as a list of all the reactive values used by your Effect's code. You don't intentionally choose what to put on that list. The list describes your code. To change the dependency list, change the surrounding code first.</p>
        <p>To remove a dependency, prove to the linter that it's not a dependency. Every reactive value used by your Effect's code must be declared in your dependency list. Your Effect's dependency list is determined by the surrounding code.</p>
        <p><i>You can't "choose" the dependencies of your Effect. Every reactive value used by your Effect's code must be declared in your dependency list</i>. Reactive values include props and all variables and functions declared directly inside of your component. To remove a dependency, you need to "prove" to the linter that it doesn't need to be a dependency.</p>
        `,
        `<h3>Removing unnecessary dependencies</h3>
        <ul>Every time you adjust the Effect's dependencies to reflect the code, look at the dependency list. Does it make sense for the Effect to re-run when any of these dependencies change? Sometimes, the answer is "no":
        <li>- You might want to re-execute different parts of your Effect under different conditions.</li>
        <li>- You might want to only read the latest value of some dependency instead of “reacting” to its changes.</li>
        <li>- A dependency may change too often unintentionally because it's an object or a function.</li>
        </ul>
        <ul>To find the right solution, you'll need to answer a few questions about your Effect:
        <li>- <i>Should this code move to an event handler?</i></li>
        <li>- <i>Is your Effect doing several unrelated things?</i></li>
        <li>- <i>Are you reading some state to calculate the next state?</i></li>
        <li>- <i>Do you want to read a value without “reacting” to its changes?</i></li>
        <li>- <i>Does some reactive value change unintentionally?</i></li>
        </ul>
        `,
        `<h3>Avoid objects and functions as Effect dependencies</h3>
        <p>In JavaScript, objects and functions are considered different if they were created at different times. In JavaScript, each newly created object and function is considered distinct from all the others. It doesn't matter that the contents inside of them may be the same! <i>Object and function dependencies create a risk that your Effect will re-synchronize more often than you need</i>. This is why, whenever possible, you should try to avoid objects and functions as your Effect's dependencies.</p>
        <ul>Instead, try:
        <li>- <i>moving them outside the component</i> (if the object does not depend on any props and state, you can move that object outside your component)</li>
        <li>- <i>moving them inside the Effect</i> (if your object depends on some reactive value that may change as a result of a re-render, you can't pull it outside your component. You can, however, move its creation inside of your Effect's code)</li>
        <li>- <i>extracting primitive values out of them</i></li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle:
        'What to add & not to add as dependencies to <code>useEffect()</code>',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/What_to_add_&_not_to_add_as_dependencies_to_useEffect.html',
      tooltips: [
        `<p>You add as dependencies what you're using in your <code>useEffect</code> function.<p>`,
        `<ul>You learned, that you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there. That is correct, but there are a <u>few exceptions</u> you should be aware of:
        <li>- You don't need to add <i>state updating functions</i>. React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though).</li>
        <li>- You don't need to add <i>"built-in" APIs</i> or functions like <code>fetch()</code>, <code>localStorage</code> etc (functions and features built-into the browser and hence available globally). These browser APIs / global functions are not related to the React component render cycle and they also never change.</li>
        <li>- You don't need to add <i>variables or functions you might've defined <u>outside of your components</u></i>.</li>
        </ul>
        `,
        `<p>You must add all "things" you use in your effect function <i>if those "things" could change because your component (or some parent component) re-rendered.</i></p>`,
      ],
    },
    {
      sectionTitle:
        'Adding nested properties as dependencies to <code>useEffect()</code>',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/Adding_nested_properties_as_dependencies_to_useEffect.html',
      highlights: {
        highlight1: ['nested properties as dependencies'],
      },
      tooltips: [
        `<h3>Add object properties as dependencies to <code>useEffect()</code></h3>
        <p>You can use object destructuring to add object properties as dependencies to <code>useEffect()</code>.</p>
        <p>The key thing is NOT that you use destructuring, but that you <i>pass specific properties instead of the entire object as a dependency</i>.</p>
        `,
      ],
    },
  ],
};

const Behind_the_scenes_of_React_and_optimization_techniques = {
  title:
    '<p class="card__title--2">Behind the scenes of React & <br>optimization techniques</p>',
  sections: [
    {
      sectionTitle: 'How React really works',
      sectionSource:
        '/src/markdowns/08_React_&_optimization_techniques/How_React_really_works.html',
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
        '/src/markdowns/08_React_&_optimization_techniques/Preventing_unnecessary_reevaluations_with_React_memo.html',
      highlights: {
        highlight1: ['Preventing unnecessary re-evaluations'],
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
        '/src/markdowns/08_React_&_optimization_techniques/Preventing_function_recreation_with_useCallback.html',
      highlights: {
        highlight1: ['Preventing function re-creation'],
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
        '/src/markdowns/08_React_&_optimization_techniques/A_first_summary.html',
    },
    {
      sectionTitle: 'Optimizing with <code>useMemo()</code>',
      sectionSource:
        '/src/markdowns/08_React_&_optimization_techniques/Optimizing_with_useMemo.html',
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

const Class_based_components = {
  title:
    '<p class="card__title--2">An alternative way of building components: <br>Class-based components</p>',
  sections: [
    {
      sectionTitle: 'Introducing error boundaries',
      sectionSource:
        '/src/markdowns/09_Class-based_Components/Introducing_error_boundaries.html',
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

const Custom_React_Hooks = {
  title: '<p class="card__title--2">Custom React Hooks</p>',
  sections: [
    {
      sectionTitle:
        'How to share logic between components: Reusing logic with "custom Hooks"?',
      sectionSource:
        '/src/markdowns/10_React_custom_Hooks/Reusing_logic_with_Custom_Hooks.html',
      highlights: {
        highlight1: ['share logic between components'],
        highlight2: ['"custom Hooks"'],
      },
      tooltips: [
        `<p>You can create custom Hooks, compose them together, pass data between them, and reuse them between components. As your app grows, you will write fewer Effects by hand because you’ll be able to reuse custom Hooks you already wrote.</p>`,
        `<h3>Custom Hooks: <u>sharing logic</u> between components</h3>
        <p>Custom hooks are just <i>regular functions</i>, just as the built-in hooks like <code>useState</code>, but they are functions which can contain stateful logic. You can build custom hooks to <i>outsource stateful logic into reusable functions</i>.</p>
        <p>Unlike regular functions, <i>custom hooks can use other React hooks, including other custom hooks</i>, and they can, therefore, also leverage React state managed with <code>useState</code> or <code>useReducer</code>; they can access <code>useEffect</code> and so on.</p>
        <p>Custom Hooks let you <i>share logic between components</i>.</p>
        <p>With custom hooks you can <i>outsource logic, which you might be using in different components</i>, into a custom hook, which you can then call from all these various components. So, it is simply <i>a mechanism of <u>reusing logic</u>, just as regular functions are, with the special thing that in these custom hook functions you can use React hooks and other hooks</i>.</p>
        `,
        `<h3>Creating a Custom React Hook function</h3>
        <p>As with components, you store every hook in a standalone file.</p>
        <p><i>Custom Hook names always start with "use" followed by a capital letter.</i></p>
        <p>Hooks may return arbitrary values.</p>
        `,
        `<h3>Custom Hooks let you share <u>stateful logic</u> but not <u>state itself</u></h3>
        <p>You are going to use a custom hook just as you use to build-in hooks.</p>
        <p>Custom Hooks let you <i>share stateful logic but <u>not state itself</u>. Each call to a Hook is completely independent from every other call to the same Hook</i>.</p>
        <p>If you call a custom hook in one of your components and that custom hook registers a state or an effect, then the state and the effect that you have in your custom hook will be tied to the component in which you use your custom hook. <i>If you use that custom hook in multiple components every component will receive its own separate state</i>.</p>
        <p><i>So just because you use a custom hook does not mean that you share state or effects across components</i>. Instead for every component the custom hook is executed again and every component instance then receives its own state, so it's just the logic which is shared, not the concrete state.</p>
        `,
        `<h3>Passing reactive values between Hooks</h3>
        <p><i>The code inside your custom Hooks will re-run during every re-render of your component</i>. This is why, like components, custom Hooks need to be pure. <i>Think of custom Hooks’ code as part of your component's body!</i></p>
        <p>Because custom Hooks re-render together with your component, they always receive the latest props and state.</p>
        <p>If a component uses a custom hook and that custom hook uses <code>useState</code>, <i>the component that uses the custom hook will re-render when the state in that custom hook will trigger a re-render</i>.</p>
        `,
        `<h3>Should all functions called during rendering start with the use prefix?</h3>
        <p>No. <i>Functions that don't call Hooks don't need to be Hooks</i>. If your function doesn't call any Hooks, avoid the "use" prefix. Instead, write it as a regular function without the "use" prefix. This ensures that your code can call that regular function anywhere, including conditions.</p>
        <p><i>You should give "use" prefix to a function (and thus make it a Hook) if it uses at least one Hook inside of it.</i></p>
        <p>In principle, you could make a Hook that doesn't call other Hooks. This is often confusing and limiting so it's best to avoid that pattern. However, there may be rare cases where it is helpful.</p>
        `,
        `<h3>When to use custom Hooks</h3>
        <p>You don't need to extract a custom Hook for every little duplicated bit of code. Some duplication is fine.</p>
        <p>However, whenever you write an Effect, consider whether it would be clearer to also wrap it in a custom Hook.</p>
        `,
        `<h3>Custom Hooks help you migrate to better patterns</h3>
        <p>Effects are an “escape hatch”: you use them when you need to “step outside React” and when there is no better built-in solution for your use case. With time, the React team’s goal is to reduce the number of the Effects in your app to the minimum by providing more specific solutions to more specific problems. Wrapping your Effects in custom Hooks makes it easier to upgrade your code when these solutions become available.</p>
        `,
      ],
    },
  ],
};

const Working_with_forms_and_user_inputs = {
  title: '<p class="card__title--2">Working with forms & user inputs</p>',
  sections: [
    {
      sectionTitle: "What's so complex about Forms?",
      sectionSource:
        '/src/markdowns/11_Working_with_forms_&_user_inputs/What_is_so_complex_about_forms.html',
    },
    {
      sectionTitle: 'Dealing with form submission & getting user input values',
      sectionSource: '',
    },
    {
      sectionTitle: 'Adding basic validation',
      sectionSource: '',
    },
    {
      sectionTitle: 'Providing validation feedback',
      sectionSource: '',
    },
    {
      sectionTitle: 'React to lost focus',
      sectionSource: '',
    },
    {
      sectionTitle: 'Managing The overall form validity',
      sectionSource: '',
    },
    {
      sectionTitle: 'Adding a custom input Hook',
      sectionSource: '',
    },
    {
      sectionTitle: 'Re-using the custom Hook',
      sectionSource: '',
    },
  ],
};

const Debugging_React_apps = {
  title: '<p class="card__title--2">Debugging React apps</p>',
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

const React_Router = {
  title:
    '<p class="card__title--2">Building a Multi-Page SPA with React Router</p>',
  sections: [
    {
      sectionTitle: 'Routing: Multiple Pages in Single-Page Applications',
      sectionSource:
        '/src/markdowns/12_React_Router/Routing_multiple_pages_in_single-page_applications.html',
      tooltips: [
        `<h3>Routing in traditional websites</h3>
        <p><i>In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server.</i></p>
        <p>When the user clicks a link, it starts the process all over again for a new page. The disadvantage is that you always have to request from the server a new HTML document (a new HTTP request is sent and a new response is received) and that can kind of break the user flow, it can introduce some lag and slow down your website, and it can therefore lead to a suboptimal user experience.</p>`,
        `<h3>Client Side Routing</h3>
        <p>React Router enables "client side routing". Client side routing allows your app to <i>update the URL</i> from a link click <i>without making another request for another document from the server</i>. Instead, your app can immediately render some new UI and make data requests with <code>fetch</code> to update the page with new information.
        <p>This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.</p>
        <p>Instead of loading new HTML files from the backend, we could add some client-side code that simply <i>watches the URL</i> and then <i>loads a different React component when that URL changes</i>.</p>
        `,
        `<h3>What Routing is all about?</h3>
        <p>Routing means that <i>different <u>URL paths</u> load different content on the screen</i>. Instead of loading new HTML files from the backend, with React Router we add some client-side code that simply <i>watches the URL</i> and then <i>loads a different React component when that URL changes</i>.</p>`,
        `<h3>Enable client side routing</h3>
        <p>Client side routing is enabled by creating a <code>router</code> and linking/submitting to pages with <code><<span>Link</span>></code> and <code><<span>Form</span>></code>.</p>`,
      ],
    },
    {
      sectionTitle: 'Installing React Router',
      sectionSource: '',
      tooltips: ['<code>npm install react-router-dom</code>'],
    },
    {
      sectionTitle:
        'Defining & using: routes <code>createBrowserRouter()</code>, <code><<span>RouterProvider</span>></code> component, <code>path</code> & <code>element</code> property',
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
        `<h3>First step: defining routes</h3>
        <ul>There are two ways of defining routes:
        <li>1. Using <i><code>createBrowserRouter()</code></i> and pass as an argument an array with single/multiple JavaScript objects, and that objects will describing the route/s characteristics;</li>
        <li>2. In older versions of <code>react-router-dom</code> you are defining routes with <i><code>createRoutesFromElements()</code></i> function and <i><code><<span>Route</span>></code></i> component.</li>
        </ul>
        <p>You can use a router in your JSX markup by importing the <i><code>RouterProvider</code> component</i> from the <code>react-router-dom</code> package.</p>
        `,
        `<h3>The recommended router: <code>createBrowserRouter</code></h3>
        <p>The <code>createBrowserRouter</code> is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.</p>
        <p>The <code>createBrowserRouter</code> is a function provided by <code>react-router-dom</code> package which allows you to define your routes that you wanna support in your application. Routes are simply <i>path<=>component mappings</i>; so for which path (<code>/products</code>) should which component (<code><<span>Products/</span>></code>) be loaded?</p>
        <p>To the <code>createBrowserRouter()</code> function you pass as an argument an <i>array of <u>routes objects</u></i>, where <i>every object represents <u>one route</u></i>. To every object you add some properties to define the route characteristics, so these route objects take a couple of properties with which you configure every route.</p>
        <p>Routes are perhaps the most important part of a React Router app. They <i>couple URL segments to components, data loading and data mutations</i>.</p>
        `,
        `<h3>The <code>path</code> property</h3>
        <p>One key property which you will almost always add is the <code>path</code> property. With <code>path</code> you <i>define the path for which the route should be active</i>.</p>
        `,
        `<h3>The <code>element</code> property</h3>
        <p><i>To establish a connection between your route path and your component</i>, you add another key property and that's the <code>element</code> property. <i>The <code>element</code> property contains the JSX markup that should be loaded when the route path is active</i>, so for the <code>element</code> property you set some JSX markup that should be rendered to the screen when the route is active.</p>
        <p><i>You could have any JSX markup in the <code>element</code> property</i>, but very often you will simply render a single component that then represents the entire page that should be rendered on the screen.</p>
        `,
        `<h3>Second step: using the route object with the help of <code>RouterProvider</code> component</h3>
        <p>Another step is to use the router object. To use it, you need store the returned value of the <code>createBrowserRouter()</code> function in a variable. You use that variable to tell React that the router stored in it should be rendered to the screen.</p>
        <p>To tell React that the stored router should be used, you need to import the <code>RouterProvider</code> component from the <code>react-router-dom</code> package. All router objects are passed to <code>RouterProvider</code> component to render your app and enable the rest of the APIs.</p>
        <p><i>The <code>RouterProvider</code> has a special prop which you must set, and that is the <code>router</code> prop. The value you pass to the <code>router</code> prop should be a router created with <code>createBrowserRouter()</code> function.</i></p>
        <p><i><code>RouterProvider</code> is a regular component which you can use in our JSX markup, and you could of course wrap it with other JSX markup or add more JSX markup.</i></p>
        `,
        `<h3>Separate components render by React Router from other components</h3>
        <p>Typically, you add a folder named 'pages' to hold the <i>components that will be <u>loaded as pages</u> by the router</i>. You don't have to name folder 'pages'. You can use the 'components' folder you already know, you could name it 'routes' or whatever you want. Is a good practice to separate pages folder with a name of 'pages' to clearly indicate that the components stored in there, <i>whilst being regular React components</i>, will be loaded with help of React Router.</p>
        `,
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
        `<h3>Two ways to navigate in React Router</h3>
        <ul>When the URL changes we call that a "navigation". There are <i>two ways to navigate in React Router</i>:
        <li>- <b><code><<span>Link</span>></code></b> component</li>
        <li>- <b><code>useNavigate</code></b> hook</li>
        </ul>`,
        `<h3>About <<span>Link</span>></code> component</h3>
        <p><<span>Link</span>></code> is the <i>primary means of navigation</i>. Rendering a <<span>Link</span>></code> <i>allows the user to change the URL when they click it</i>. React Router will <i>prevent the browser's default behavior</i> and tell the History API to push a new entry into the History stack. The location changes and the new matches will render.</p>
        <p>A <code><<span>Link</span>></code> is an element that lets the user navigate to another page by clicking or tapping on it, without sending a new HTTP request.</p>
        <p>In <code>react-router-dom</code>, a <code><<span>Link</span>></code> renders an accessible <<span>a</span>> element with a real <code>href</code> that points to the resource it's linking to. Instead of setting a path with the <code>href</code> attribute (like you do for <<span>a</span>> tag), <i><code><<span>Link</span>></code> component uses a <code>to</code> prop to setting a path: <code><<span>Link to="/path"</span> /></code></i>.</p>`,
        `<h3>Absolute & relative links path</h3>
        <p>If a <code><<span>Link</span>></code> path starts with <code>/</code>, it is an absolute path. Paths that don't start with <code>/</code> are relative paths.</p>
        <p><i>A link that have an absolute path it's added directly after the domain name</i>, not after the currently active path (the route path they are rendered in).</p>
        <p><i>Relative links are always relative to the route path they are <u>rendered in</u></i>, not to the full URL. Relative links inherit the route within which they are rendered. This makes it so your route components don't have to really know anything about the rest of the routes in the app.</p>`,
        `<h3>Relative links & theirs <code>relative</code> prop</h3>
        <p>When using the <code><<span>Link</span>></code> component, you also have a special <code>relative</code> prop which you can add to it. The <code>relative</code> prop can be set to one of two values: <code>path</code> or <code>route</code>. <i>With these values you control whether the segment defined on <code><<span>Link</span>></code> is added relative to the <u>the route path they are rendered in</u> or to the <u>currently active path in the browser URL</u></i>.</p>
        <p>The <code>relative</code> prop does not matter if you have an absolute path, always that absolute path is added after the domain name.</p>
        `,
        `<h3>The <code>..</code> relative path</h3>
        <p>If you have a relative path, like <code><<span>Link to=".."</span>></code> which simply goes back, then <i>the <code>relative</code> prop can be used to control the behavior of React Router</i>. A link can set to be "relative" to the <u>routes definitions</u>, or "relative" to the <u>browser URL</u>.</p>
        <p><i>By default, the <code>..</code> in relative links <u>traverse the route hierarchy</u>, not the URL segments. Adding <code>relative="path"</code> allows you to <u>traverse the path segments</u> instead</i>.</p>
        <p><code>..</code> is a relative path that goes back <u>one level</u> to the <u>previously</u> active route/URL path. By default, links are relative to the route hierarchy, so <code>..</code> will go up one route level. Occasionally, you may find that you have matching URL patterns that do not make sense to be nested, and you'd prefer to use <code>relative="path"</code> routing.</p>
        `,
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
        `<p>Sometimes you might want to see which link is currently active when you're on a page. To support links that should show you whether they active or not, <code>react-router-dom</code> has an alternative to the <code><<span>Link</span>></code> component, and that is the <code><<span>NavLink</span>></code> component.</p>`,
        `<h3>Add classes or inline-styles to a link <u>conditionally</u></h3>
        <p>A <code><<span>NavLink</span>></code> is a special kind of <code><<span>Link</span>></code> that knows whether or not it is "active".</p>
        <p><i>By default, an "active" class is added to a <code><<span>NavLink</span>></code> component when it is active.</i></p>
        <p>With <code><<span>NavLink</span>></code> you can <i>add classes or inline-styles <u>conditionally</u>, based on whether a link is active or not</i>.</p>
        <p>With <code><<span>NavLink</span>></code> you can pass a function to either <code>style</code> or <code>className</code> that will allow you to customize the inline styling or the class string based on the component's active state. You can also pass a function as children to customize the content of the <code><<span>NavLink</span>></code> component based on their active state, specially useful to change styles on internal elements.</p>
        `,
        `<h3>The <code>isActive</code> property</h3>
        <p><code><<span>NavLink</span>></code> has one special behavior. The <code>className</code> prop in <code><<span>NavLink</span>></code> is different from the regular <code>className</code> prop. The <code>className</code> in <code><<span>NavLink</span>></code> receives a function, and with that function you can set conditionally a class or inline-style on the <code><<span>NavLink</span>></code> element.</p>
        <p>Now that function also receives automatically an object from which you can destructure the <code>isActive</code> property. Base on the <code>isActive</code> property, you can set classes or inline-style conditionally.</p>
        `,
        `<h3>The <code>end</code> prop</h3>
        <p>By default, the behavior of <code><<span>NavLink</span>></code> is to <i>treated a link as active when its <u>descendant paths are matched</u></i>. You can use the <code>end</code> prop to ensure that a component isn't matched as "active" when its descendant paths are matched.</p>
        <p><code>end</code> pros take as a value a boolean: <code>end={true}</code> or <code>end={false}</code>. You can also just add <code>end</code> with no value and this means that <code>end</code> is automatically set to <code>true</code>.</p>
        `,
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
        `<h3>Imperative routing vs navigating programmatically</h3>
        <p>Up until now you only use <b>imperative routing</b>. You allow users to navigate between your app pages by providing links which can be clicked. This is the default way of providing navigation to users, but it's not the only way.</p>
        <ul>When the URL changes we call that a "navigation". There are <i>two ways to navigate in React Router</i>:
        <li>- <b><code><<span>Link</span>></code></b> component</li>
        <li>- <b><code>useNavigate</code></b> hook</li>
        </ul>
        <p>In some situations, for example maybe because some form was submitted or because some timer expired, <i>you as a programmer (not the user) might want to trigger a navigation action from inside your React code</i>, and you can do this by using the <code>useNavigate</code> hook provided by <code>react-router-dom</code>.</p>
        `,
        `<h3><code>useNavigate</code> hook</h3>
        <p>The <code>useNavigate</code> hook <i>returns a function that allows you, the programmer, to change the URL whenever you want, so <u>programmatically</u></i>.</p>
        <p>You should have a good reason to use <code>useNavigate</code> instead of <code><<span>Link</span>></code>. Aside from links and forms, very few interactions should change the URL because it introduces complexity around accessibility and user expectations.</p>
        `,
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
        `<h3>Nesting routes</h3>
        <p>You can nest routes in other route with the help of <code>children</code> property.</p>
        <p>A child route is like any other route, in that it needs both a path and a component . The one difference is that you place child routes in a <code>children</code> array within the parent route.</p>
        `,
        `<h3>The <code><<span>Outlet/</span>></code> component</h3>
        <p>The <code><<span>Outlet/</span>></code> component specifies <i>where the content of the child routes should be rendered</i>. The <code><<span>Outlet/</span>></code> component alone <i>allows nested routes to render their element content</i> out and anything else the layout route is rendering, i.e. navbars, sidebars, specific layout components, etc.</p>
        <p><i>An <code><<span>Outlet/</span>></code> should be used in parent route elements to render their child route elements</i>. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.</p>
        `,
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
        `<h3>Default errors vs custom errors</h3>
        <p>When you enter a URL that doesn't exist or when exceptions/errors are thrown in "loader"/"action" functions or component rendering, the <code>react-router-dom</code> package will <i>automatically generate an error. Instead of generate a default error, you can render a custom <code>ErrorPage</code> component</i>. The error made/thrown will be available with <code>useRouteError</code>.</p>
        <p>With the <code>errorElement</code> property in your route definitions, you can specify a <i><u>fallback page component</u> that will be rendered if an error is created</i>.</p>
        `,
        `<h3>Error bubbling</h3>
        <p><i>When a route does not have an <code>errorElement</code>, errors will <u>bubble up</u> through parent routes</i>.</p>
        <p><i>Put an <code>errorElement</code> at the top of your route tree and handle nearly every error in your app in <u>one place</u></i>. Or, put them on all of your routes and allow the parts of the app that don't have errors to continue to render normally. This gives the user more options to recover from errors instead of a hard refresh.</p>
        <p>Is recommend to always providing at least a root-level <code>errorElement</code> before shipping your application to production, because the UI of the default <code>errorElement</code> is ugly and not intended for end-user consumption. <i>If you do not provide an <code>errorElement</code> in your route tree to handle a given error, errors will bubble up and be handled by a default <code>errorElement</code> which will print the error message and stack trace.</i></p>
        `,
        `<h3>Throwing errors manually</h3>
        <p>While <code>errorElement</code> <i>handles <u>unexpected errors</u></i>, it can also be used to <i>handle <u>exceptions you expect</u></i>. Particularly in "loader"/"action" function, where you work with external data not in your control, you can't always plan on the data existing, the service being available, or the user having access to it. In these cases you can <code>throw</code> your own exceptions. As soon as you know you can't render the route with the data you're loading, you can throw to break the call stack.</p>
        <p><i>You can throw anything from a "loader"/"action" function, just like you can return anything: responses, errors, or plain objects</i>.</p>
        `,
        `<h3>Throwing Responses</h3>
        <p>While you can throw anything and it will be provided back to you through <code>useRouteError</code>, if you throw a <code>Response</code>, <i>React Router will automatically parse the response data before returning it to your components</i>. Coupled with <code>json</code>, you can easily throw responses with some data and render different cases in your boundary. This makes it possible to create a general error boundary, usually on your root route, that handles many cases.</p>
        `,
        `<h3>The <code>useRouteError</code> hook</h3>
        <p><i>Inside of an <code>errorElement</code>, the <code>useRouteError</code> hook returns anything thrown during a "loader"/"action" function or rendering</i>.</p>`,
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
        `<h3>Dynamic paths</h3>
        <p><code>react-router-dom</code> supports dynamic path segments or path parameters. <i>In your routes definitions, if a path segment starts with <code>:</code> then it becomes a "dynamic segment".</i> When the route matches the URL, the dynamic segment will be parsed from the URL and provided as <code>params</code> to other router APIs.</p>
        <p>Dynamic path segments helps you to always <i>render the <u>same component</u> for <u>different paths</u> (dynamic paths)</i>.</p>
        <p>You add a path parameter by adding a <code>:</code> and then any identifier of you choice: <code>{path: "/products/:productId"}</code></p>
        <p>The <code>:</code> signals to <code>react-router-dom</code> that the part after the <code>:</code> is dynamic. You could thereafter have more hard coded segments if you needed to, but <i>the segment with the <code>:</code> is dynamic</i>. You can also have <i>multiple dynamic segments in one route path</i>.</p>
        <ul>Examples:
        <li><code>{path: "/products/:productId/newseg"}</code></li>
        <li><code>{path="/c/:categoryId/p/:productId"}</code></li>
        </ul>
        `,
        `<h3>The <code>useParams</code> hook</h3>
        <p>With <code>useParams</code> hook you can <i>get the <u>dynamic path data</u> that's encoded in the URL</i>.</p>
        <p>The <code>useParams</code> hook <i>returns an object</i> of key/value pairs of the dynamic params from the current URL that were matched by the <code><<span>Route path</span>></code>. Child routes inherit all params from their parent routes.</p>
        <p>The <code>useParams</code> hook returns a JavaScript object which <i>contains <u>every dynamic path segment</u> you defined in our route definition as a property</i>.</p>
        `,
      ],
    },
    {
      sectionTitle: 'Defining & using optional path segments',
      sectionSource:
        '/src/markdowns/12_React_Router/Defining_&_using_optional_path_segments.html',
      highlights: {
        highlight1: ['optional path segments'],
      },
      tooltips: [
        `<p>You can make a route segment optional by adding a <code>?</code> to the end of the segment.</p>`,
      ],
    },
    {
      sectionTitle: 'Understanding absolute & relative routes paths',
      sectionSource:
        '/src/markdowns/12_React_Router/Understanding_absolute_&_relative_routes_paths.html',
      highlights: {
        highlight1: ['absolute & relative routes paths'],
      },
      tooltips: [
        `<h3>Absolute vs relative routes paths</h3>
        <p>When you defining <u>routes</u>, you define the <u>paths</u> for which that routes should be active. <i>If a route path starts with <code>/</code>, it is an absolute route path. Routes paths that don't start with <code>/</code> are relative routes paths</i>.</p>
        <p>When you are defining <i><u>child routes</u> as relative paths</i>, this means that the <i>child routes paths defined as relative paths are <u>appended after the path of the wrapper parent route path</u></i>. So if you have a child route with a relative path, then React Router will take a look at the path of the parent route and append the child route path after the parent route path. <i>Children relative route paths are relative to the path defined in theirs parent route definition</i>.</p>
        `,
        `<h3>Clashing route definitions</h3>
        <p>All <i>absolute child route</i> paths must start with the combined path of all its parent routes.</p>
        `,
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
        `<h3>Index routes</h3>
        <p>Index routes can be used for <i>children routes that have the same path as the parent route</i>.</p>
        <p>It is quite common that you might have a wrapping layout route and then <i>you have one child route that should be loaded for the parent's route path. Index routes render in their parent route's <code><<span>Outlet/</span>></code> at the parent route's path</i>.</p>
        <p>Index routes allows you to define the <i><u>default route</u> that should be loaded for a child route if the parent route path is active</i>.</p>
        `,
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
        `<p>On each route you can define a "loader" function to <i><u>provide data</u> to the route element <u>before it renders</u></i>. The route <i>"loader" function is called before the route component is render</i> and provides data for the component through <code>useLoaderData</code>.</p>
        <p>When you define a "loader" function, React Router will automatically take any value you return in that "loader" function and will make that data available in the page that's being rendered, as well as any other components where you need it.</p>
        <p>With the help of a "loader" function you <i>move all the fetch logic that you have in a component in that "loader" function</i>, and this process make the component way leaner and easier to reason about.</p>
        `,
        `<h3>Use the returned data from a "loader" function with the help of <code>useLoaderData</code> hook</h3>
        <p>To get access to the data returned by a "loader" function for a specific page, you can import <code>useLoaderData</code> from <code>react-router-dom</code>. This hook <i>provides the value returned from your route "loader" function</i>.</p>
        <p><code>useLoaderData</code> <i>always get the final data returned by the "loader" function</i>, even if that "loader" function is an async function. If the "loader" function is an async function, the <code>useLoaderData</code> won't return a Promise from the "loader" function, but will return the resolved/rejected value of that async "loader" function.</p>
        <p>The <code>useLoaderData</code> is a hook which you can execute to get access to the closest "loader" function data. So you can access "loader" function data with the help of <code>useLoaderData</code> in <i>any component on the <u>same level or lower level</u> than the component where you added the "loader" function</i>, so the route on which you added the "loader" function. <i>You can use <code>useLoaderData</code> in the element that's assigned to a route and in all components that might be used inside that element</i>.</p>
        <p><i>You can use this hook in any component or any custom hook, not just the Route element. It will return the data from the nearest route on context</i>. To get data from any active route on the page, see <code>useRouteLoaderData</code>.</p>
        `,
        `<h3>Where should "loader" function code be stored?</h3>
        <p><i>Is common pattern that you actually put the "loader" function code into your component file where you need it</i>, to be more precise in the page component file where you want to add the "loader" function.</p>`,
        `<h3>When are "loader" functions executed?</h3>
        <p>The "loader" function for a page will be called right when you start navigating to that page, so NOT AFTER the page component has been rendered, but BEFORE you actually navigate to that page.</p>
        <p>Data fetching is initiated as soon as you initiate the route transition (URL changes). By default, React Router will wait for the data to be fetched, so for the "loader" function to be finished, and <i>only when the "loader" function is finished the page component will be rendered with that fetched data</i>.</p>`,
        `<h3>Returning Responses in a "loader" function</h3>
        <p>One important aspect of a "loader" function is to understand that <i>you can return any kind of data</i> in that "loader" function. You can return an array, object, number, string etc, but what you can also return is a <code>Response</code> object.</p>
        <p>Whenever you return such a <code>Response</code> object in your "loader" function, the <i>React Router will automatically extract the data from your <code>Response</code> object when using <code>useLoaderData</code> hook</i>, so you don't need to manually extract the data from a Response.</p>
        `,
        `<h3>Which kind of code goes into a "loader" function?</h3>
        <p><i>You can use any browser APIs or vanilla JavaScript code in your "loader" function</i>. What you can't use in your "loader" function is, for example, React Hooks like <code>useState</code>. That doesn't work because those Hooks are only available in React components and the "loader" function is not a React component, but that's the only limitation.</p>`,
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
        `<ul>Within a "loader" function you can <i>get access to the route parameters</i> because when the React Router will call the "loader" function passes to it an <u>object parameter</u> that contains two important pieces of data which contains a <code>request</code> object and a <code>params</code> object:
        <li>- Example: <code>function loader({request, params}) { ... }</code>.</li>
        </ul>`,
        `<h3>The <code>params</code> object</h3>
        <p>Route params are parsed from dynamic segments and passed to your "loader" function via <code>params</code> object.</p>
        <p>The <code>params</code> object <i>contains all your route parameters</i>. With it, you can get access to all the route parameter values as you could do it with help of <code>useParams</code> hook, but <code>useParams</code> hook could only be used inside a component function, not inside a "loader" function.</p>`,
        `<h3>The <code>request</code> object</h3>
        <p>The <code>request</code> object parameter in a "loader" function could be used to <i>access the URL</i> to, for example, extract query parameters or anything like that.</p>`,
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
        `<h3>Fetch the same data for different children routes by adding a parent route with a "loader" function</h3>
        <p>You can use the <i><u>nested routes</u></i> feature not just as a wrapper layout component, but also to <i><u>share a "loader" function</u></i> from parent to child routes. Because as you learned, you can access "loader" function data in any component that's on the same level or a lower level than the route where the "loader" function is added.</p>
        <p>Instead of defining the same "loader" function twice for each sibling route, you can add a route parent that does not render an element. Now in that parent route you don't need an element because you don't want to have any shared layout or anything like that. Instead, you will using this approach because you want to add a "loader" function to the parent route so its child routes can have access to the returned data of its "loader" function. This is also how you can use nested routes to construct a URL, with the parent route URL and the child routes URLs.</p>
        `,
        `<h3><code>useLoaderData</code> vs <code>useRouteLoaderData</code></h3>
        <p>To access the data returned by the shared "loader" function, instead of using <code>useLoaderData</code> you need to use a different hook which is called <code>useRouteLoaderData</code>. This hook works almost like <code>useLoaderData</code> but it takes a <i>route ID as an argument</i> (the ID you assign to the parent route).</p>
        <p>The <code>useLoaderData</code> doesn't work in this case because this hook <i>provides the value returned from your route "loader" function</i>, but you want the get the data from the parent route.</p>
        <p>With the <code>useRouteLoaderData</code> you can <i>get access to the data of a higher level "loader" function from a route that doesn't have a "loader" function. Now you can reuse the same "loader" function across <u>multiple routes which all need the same data</u></i>.</p>
        <p>The <code>useRouteLoaderData</code> hook makes the data at any currently rendered route available <i>anywhere in the tree</i>. This is useful for components deep in the tree needing data from routes much farther up, as well as parent routes needing the data of child routes deeper in the tree.</p>
        <p><i>The only data available is the routes that are <u>currently rendered</u></i>. If you ask for data from a route that is not currently rendered, the hook will return <code>undefined</code>.</p>
        `,
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
        `<p>In your "loader" function you can <code>throw</code> an error. This will break out of the current call stack (stop running the current code) and React Router will start over down the "error path". <i>When you <code>throw</code> in a "loader" function something special happens: React Router will simply render the closest <code>errorElement</code></i>.</p>
        <p>The <code>errorElement</code> page component will be shown to the screen whenever an error is generated in any route related code, including "loader" functions.</p>
        <p>You can <code>throw</code> a new <code>Error</code> object with the built-in <code>Error</code> constructor, or <i>you can <code>throw</code> any other kind of object as an error</i>.</p>
        `,
        `<h3>Throwing <code>Response</code> and extracting error data with <code>useRouteError</code> hook</h3>
        <p>To differentiate between different errors like <code>404</code> or <code>500</code>, you can <code>throw</code> in your "loader" function a <code>Response</code> object and you can include some data into that <code>Response</code>. You thrown an <code>Response</code> object with some data attached to it because <i>you can actually get hold of the data that's being thrown as an error inside of the component that's being rendered as an <code>errorElement</code></i> and for that <code>react-router-dom</code> gives you a hook called <code>useRouteError</code>. <i>Inside of an <code>errorElement</code>, this hook returns anything thrown during an "loader"/"action" function or rendering</i>.</p>
        <p>The <code>useRouteError</code> return a object, and the returned object depends on whether you threw a <code>Response</code> or any other kind of object or data.</p>
        <p>If you threw a <code>Response</code> in your "loader" function, the <code>useRouteError</code> return an object that include a <code>status</code> property. This <code>status</code> property reflects the status of the <code>Response</code> you threw in the "loader" function.</p>
        <p>If you threw a regular JavaScript object, then the object returned by <code>useRouteError</code> would be that thrown object, so then there would not be that special <code>status</code> property. But that's why you might wanna throw <code>Response</code> instead of regular objects because <code>Response</code> allow you to include the extra <code>status</code> property which helps with <i>building a generic error handling page component</i>.</p>
        `,
        `<h3>The <code>json()</code> utility function</h3>
        <p>When using React Router, you will from time to time construct <code>Response</code>, especially when it comes to throwing errors. Now constructing <code>Response</code> manually is possible but a bit annoying, that's why React Router gives you a little helper utility: the <code>json()</code> function.</p>
        <p>Instead of creating your <code>Response</code> manually and return it, you can return the result of calling <code>json</code>. <i><code>json</code> is a function that creates a <code>Response</code> object that includes data in the json format</i>.</p>
        <p>With the <code>json</code> function you don't just have to type less code, but in the place where you use that <code>Response</code> data you also <i>don't have to parse the <code>json</code> format manually</i>. Instead, you can simplify the code because the parsing will now be done by React Router for you, so it is quite common to <i>use the <code>json</code> function for building <code>Response</code>s</i> with less effort.</p>
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
        `<p>React Router gives us a <code>useNavigation</code> hook which we can use to <i>check the current route transitions state</i>, so to find out if a transition has been initiated and we're currently still waiting for data to arrive, or if we're done.</p>
        <p><code>useNavigation</code> let you show/dispay a feedback when a user navigate to a page.</p>
        <ul>This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations. Things like:
        <li>- Global loading indicators</li>
        <li>- Disabling forms while a mutation is happening</li>
        <li>- Adding busy indicators to submit buttons</li>
        <li>- Optimistically showing a new record while it's being created on the server</li>
        <li>- Optimistically showing the new state of a record while it's being updated</li>
        </ul>
        <p><i>We get an object when we call <code>useNavigation</code> and that object has a couple of properties</i>, but for us the <code>state</code> property is the most important one.</p>
        <p>It's important to undestand that <i><code>useNavigation</code> won't be called on the page which you're transitioning to</i>, but instead on some page or a component which is already visible on the screen when the transition is started.</p>
        `,
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
        `<p>Just as you can add <i>"loader" functions to <u>load</u> data</i>, you can also add <i>"action" functions to <u>send</u> data</i>. Like the "loader" property, "action" property wants a function as a value.</p>
        <ul>Just like "loader" function, "action" functions:
        <li>- receives an object as parameter with <code>params</code> & <code>request</code> properties;</li>
        <li>- you can return anything from your "action" functions, even Responses;</li>
        <li>- you can <code>throw</code> in your "action" function to break out of the current call stack.</li>
        </ul>
        <p><i>When the "action" function completes, all of the "loader" function data on the page will automatically revalidate to keep your UI in sync with your data.</i></p>
        `,
        `<h3>Handling form submissions with React Router <<span>Form</span>> component</h3>
        <ul>The great thing about React Router is that it makes <i>handling form submissions</i> a brace and it helps with <i>extracting data from that form</i>. For that, you should go to the component that holds the form and make some changes to it:
        <li>- all your form inputs must have the <i><code>name</code> attribute</i>, because those names will later be used for extracting the data. Make sure your inputs have names or else the <code>FormData</code> will not include that field's value;</li>
        <li>- you need to replace the HTML <<span>form</span>> with the <i><<span>Form</span>> component</i> provided by <code>react-router-dom</code>. The <<span>Form</span>> component will make sure that the browser default of sending a request to the backend will be omitted but it will <i>take that request that would've been sent and give it to your "action" function</i>. When the form is submitted, <i>the <<span>Form</span>> component will trigger the "action" function</i>;</li>
        <li>- add to the <<span>Form</span>> component the <i><code>method</code> attribute</i> and optionally the <i><code>action</code> attribute</i>. Is important to understand that if you use the <<span>Form</span>> component the request will not be sent to the backend automatically, but instead to your "action" function and it will include all the form data.</li>
        </ul>
        `,
        `<h3>The <code>method</code> attribute</h3>
        <p>The default method is "GET". <i>GET submissions will not call an action</i>. GET submissions are the same as a normal navigation (user clicks a link) except the user gets to supply the search params that go to the URL from the form. All other methods are "mutation submissions", meaning you intend to change something about your data with POST, PUT, PATCH, or DELETE.</p>
        `,
        `<h3>The <code>action</code> attribute</h3>
        <p>You <u>optionally</u> add to the <<span>Form</span>> component the <code>action</code> attribute. <i>The <code>action</code> attribute contains the url to which the form will be submitted, just like HTML form action</i>. The only difference is the default action. With HTML forms, it defaults to the full URL. With <<span>Form</span>>, it defaults to the relative URL of the closest route in context; in other words, <i>it points to the matching segment of the URL for the route in which the <<span>Form</span>> is rendered</i>.</p>
        <p><i>You could send the request to a different route by adding the <code>action</code> prop to the <<span>Form</span>> component and setting it to any other path</i>, then in that case the "action" function of another path of another route definition object would be triggered. So if you had an "action" function on some other route, you could point at that "action" function by simply setting the <<span>Form</span>> component <code>action</code> prop value to the path of the route for which you wanna trigger the "action" function, but if you wanna trigger the "action" function of the currently active route you don't need the <code>action</code> prop.</p>
        `,
        `<h3>Extracting data from the <code>FormData</code></h3>
        <p>Just as a "loader" function, the "action" function is executed by React Router and it receives an object that includes a couple of helpful properties, to be precise the <code>request</code> and <code>params</code> properties. These properties are objects.</p>
        <ul>To extract and use the data from your <<span>Form</span>> component in you "action" function you need to use the<i> <code>request</code> object</i> with it <i><code>.formData()</code> method</i> and then the <i><code>.get()</code> method</i>.
        <li>- <i>The <code>.formData()</code> method return a Promise, so you need to use the <code>await</code> keyword</i>;</li>
        <li>- The <code>.get()</code> method is called to get access to the different input field values that were submitted.</li>
        </ul>
        <p><i>An alternative to <code>.get()</code> method is to use the spread operator & <code>Object.fromEntries()</code></i>.</p>
        `,
        `<h3>Redirect the user to another url with <code>redirect()</code></h3>
        <p>Typically, when submitting a form what you want to happen is that you navigate the user away to a different page after successfully submitting the form. To do that, you can return in your "action" function the result of calling <code>redirect()</code>.</p>
        <p><code>redirect()</code>, like <code>json()</code>, is a special function you can import from <code>react-router-dom</code> and like <code>json()</code>, <i><code>redirect()</code> creates a Response object</i>. However, it's a special Response object that simply redirects the user to a different page.</p>
        `,
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
        `<h3><<span>Form</span>> component vs <code>useSubmit</code> hook</h3>
        <p>The typical and <i>default way</i> of triggering an "action" function is by using the <<span>Form</span>> component. The <<span>Form</span>> component will <i><u>automatically</u> trigger the "action" function of the currently active route</i>, so the route for which the <<span>Form</span>> component was loaded.</p>
        <p>Just as you can navigate programmatically, you can also <i>submit data and trigger an "action" function <u>programmatically</u> with the <code>useSubmit</code> hook</i> imported from <code>react-router-dom</code>.</p>
        <p>The <code>useSubmit()</code> function is the <i>imperative version of <<span>Form</span>> component</i> that let's you, the programmer, submit a form instead of the user.</p>
        `,
        `<h3>Triggering an "action" function with <code>useSubmit</code> hook</h3>
        <ul>To the <code>useSubmit</code> function you can pass two arguments:
        <li>- submit <i>target</i>;</li>
        <li>- submit <i>options</i>;</li>
        </ul>
        `,
        `<h3>The submit target</h3>
        <p>The first argument to submit accepts many different values. You can submit any form or form input element, or you can submit <code>FormData</code>. The first argument may be the <i>data that you wanna submit</i>, and that data will automatically be wrapped in a <<span>Form</span>> data object, which you then could extract with the <code>.formData()</code> method.</p>`,
        `<h3>The submit options</h3>
        <p>The second argument is a set of options that map directly to <i>form submission attributes</i>. This argument allows you to basically set <i>the same values you could set on a <<span>Form</span>> component</i>, for example the <code>method</code> or the <code>action</code> if your "action" function would be defined on a different route path.</p>`,
      ],
    },
    {
      sectionTitle:
        'Updating the UI state based on the submission status with <code>useNavigation</code> hook',
      sectionSource:
        '/src/markdowns/12_React_Router/Updating_the_UI_state_based_on_the_submission_status.html',
      tooltips: [
        `<p>You can use the <code>useNavigation</code> hook to <i>update the UI based on different navigation state</i>.</p>
        <p>The <code>useNavigation</code> hook gives you access to a navigation object (JavaScript object), and you can extract various pieces of information from that object, for example, all the data that was submitted; but you can also find out what <i>the current state of the currently active transition is</i>.</p>
        <p><i>You can have a transition from one route to another if you click a link, but you can also have a transition if you submit a form</i>. Therefore, you also get information about the current data submission process and whether it completed already, so whether the "action" function that was triggered completed already.</p>
        <p>It's important to undestand that <i><code>useNavigation</code> won't be called on the page which you're transitioning to</i>, but instead on some page or a component which is already visible on the screen when the transition is started.</p>`,
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
        `<p><code>useActionData</code> hook does the same thing that <code>useLoaderData</code> hook. <i>The <code>useActionData</code> hook provides the returned value from the previous navigation's <code>action</code> result, or <code>undefined</code> if there was no submission</i>.</p>
        <p>The most common use-case for this hook is <i>form validation errors</i>. If the form isn't right, you can return the errors and let the user try again.</p>
        <p>Like in a "loader" function, the <code>Response</code> that you return from your "action" function will be automatically parsed by the <code>useActionData</code> for you.</p>
        `,
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
      sectionTitle:
        'Calling "action"/"loader" functions without causing a navigation (route transition): the <code>useFetcher()</code> hook',
      sectionSource:
        '/src/markdowns/12_React_Router/Working_with_useFetcher.html',
      highlights: {
        highlight2: ['<code>useFetcher()</code>'],
      },
      tooltips: [
        `<p>In HTML/HTTP, <i>data mutations and loads are <u>modeled with navigation</u></i>: <code><<span>a href</span>></code> and <code><<span>form action</span>></code>. Both cause a navigation in the browser. The React Router equivalents are <code><<span>Link</span>></code> and <code><<span>Form</span>></code>. But sometimes you want to <i>call a "action"/"loader" function <u>outside of navigation</u> (without changing the URL)</i>.</p>
        <p><i>Many interactions with the server aren't navigation events.</i></p>
        <p>The <code>useFetcher</code> hook <i>interacts with route "action"/"loader" function <u>without causing a navigation</u></i>. It is great for any interaction that stays on the same page.</p>
        <p>The <code>useFetcher</code> hook is the tool you should use if you wanna <i>interact with some "action"/"loader" function <u>without transitioning</u></i>, so if you wanna send your requests behind the scenes without triggering any route changes. Use it if you wanna <i>trigger a "loader"/"action" function without actually loading the route's <code>element</code> to which that "loader"/"action" function belongs</i>.</p>
        `,
        `<h3>Fetchers have a lot of built-in behavior</h3>
        <p><i>When submitting with POST, PUT, PATCH, DELETE, the "action" function is called first.</i> After the "action" function completes, the data on the page is revalidated to capture any mutations that may have happened, automatically keeping your UI in sync with your server state.</p>
        <ul>When multiple fetchers are inflight at once, it will:
        <li>- commit the freshest available data as they each land;</li>
        <li>- ensure no stale loads override fresher data, no matter which order the responses return.</li>
        </ul>
        `,
        `<h3><code>useFetcher()</code> returns an object</h3>
        <p>The <code>useFetcher</code> hook, when executed, <i>returns an object</i> that includes a bunch of useful properties and methods.</p>
        <p>For example, it gives you a <<span>fetcher.Form</span>> component which is different from the <<span>Form</span>> component you used before. It also gives you a <code>fetcher.submit</code> function which is different from the submit function you got from <code>useSubmit</code> hook, which you used before.</p>
        `,
        `<h3>The difference between <<span>fetcher.Form</span>> and <<span>Form</span>> component</h3>
        <p><<span>fetcher.Form</span>> is just like <<span>Form</span>> component, except it <i>doesn't cause a navigation</i>. <<span>fetcher.Form</span>> will actually <i>still trigger an "action" function but it will <u>not initialize a route transition</u></i>.</p>
        <p>So <<span>fetcher.Form</span>> should basically be used whenever you wanna trigger an "action" function, or also a "loader" function with help of the <code>fetcher.load()</code> method, <i>without actually navigating to the page to which the "loader"/"action" function belongs</i>.</p>
        <p>With the default <<span>Form</span>> component you will trigger the route "action" function BUT you also load the route element component. With <<span>fetcher.Form</span>> you ONLY trigger the "action" function WITHOUT loading the route element component, because with <<span>fetcher.Form</span>> you don't transition, you don't move to a different route.</p>`,
        `<h3><<span>fetcher.Form</span>>'s <code>action</code> attribute</h3>
        <p>As on the <<span>Form</span>> component, on the <<span>fetcher.Form</span>> you can add the <code>action</code> attribute to specify the url to which the "action" function will be called, for example, point at <code>action="/someRoute"</code> because you wanna trigger the "action" function off the <code>/someRoute</code> route.</p>
        `,
        `<h3><code>fetcher.data</code></h3>
        <p>The returned data from the "action"/"loader" function is stored in <code>fetcher.data</code>. Once the data is set, it persists on the fetcher even through reloads and resubmissions.</p>`,
        `<h3><code>fetcher.state</code></h3>
        <ul>You can know the state of the fetcher with <code>fetcher.state</code>. It will be one of:
        <li>- idle;</li>
        <li>- submitting;</li>
        <li>- loading.</li>
        </ul>
        `,
        `<h3><code>fetcher.load()</code></h3>
        <p>Loads data from a route "loader" function. Although a URL might match multiple nested routes, a <i><code>fetcher.load()</code> call will only call the "loader" function on the leaf match</i> (or parent of index routes).</p>`,
        `<h3><code>fetcher.submit()</code></h3>
        <p><i>The imperative version of <<span>fetcher.Form</span>></i>. If a user interaction should initiate the fetch, you should use <<span>fetcher.Form</span>>. But if you, the programmer are initiating the fetch (not in response to a user clicking a button, etc.), then use this function.</p>`,
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
        `<p>React Router provides a feature that allows you to <i>defer when data is loaded</i>.</p>
        <p>Sometimes you wanna <i>load a page component with some data <u>before fetching the data</u></i>, and show some parts of the that page component already until all the data is fetched. You can defer data loading and tell React Router that <i>you actually wanna render a page component already, even though the data is not fully there yet</i>.</p>
        <p>React Router takes advantage of React 18's <code><<span>Suspense</span>></code> component for data fetching using the <code>defer()</code> utility and <code><<span>Await</span>></code> component to solve this kind of problems.</p>
        <p>The defer feature can speed up your pages and make sure that you're already <i>showing some content whilst you're waiting for other content</i>. It especially shines if <i>you have pages with multiple HTTP requests with different speeds though</i>.</p>
        `,
        `<h3>The <code>defer()</code> function</h3>
        <p><code>defer()</code> function allows you to <i><u>defer values returned from "loader" functions</u> by passing promises instead of resolved values</i>.</p>
        <p>To <code>defer()</code> you <i>pass an <u>object</u></i>. In that object you bundle all the different HTTP requests you might have going on on a page component (you can have multiple request per one component).</p>
        <p>You can only use <code>defer()</code> if you have call an async function. Now <i>the only thing you return in your "loader" function is the <code>defer()</code> function</i>.</p>
        <p>If you use <code>defer()</code>, in your "loader" function you need to manually parse the response and return from "loader" function the resolved value, not the response (Promise). <i><code>defer()</code> doesn't parse your Response automatically, <code>defer()</code> need a <u>parsed Response</u></i>.</p>
        <p>As your next step, you have to go to the component where you want to use the deferred data and you still use <code>useLoaderData</code> for extracting data, but <i>now the data will be an object that gives you access to the deferred value keys in the <code>defer()</code> function</i>. Now in the component you don't directly render the JSX markup that needs your data, instead what you do in is to return another component provided by <code>react-router-dom</code> and that's the <code><<span>Await</span>></code> component.</p>
        `,
        `<h3>The <code><<span>Await</span>></code> component</h3>
        <p><code><<span>Await</span>></code> component is used to <i>render <u>deferred values</u> with <u>automatic error handling</u></i>. <code><<span>Await</span>></code> has a special <code>resolve</code> prop which wants one of your deferred values as a value.</p>
        <p>Now the <code><<span>Await</span>></code> component will wait for the "loader" function data to be there, and then between the opening and closing tags, you output a dynamic value which must be a function that will be executed by React Router once that data is there, so once that Promise resolved, once you have that data.</p>
        <p><i><code><<span>Await</span>></code> children can either be <u>React elements</u> or a <u>function</u>.</i> When using a function, the value is provided as the only parameter.</p>
        <p><code><<span>Await</span>></code> expects to be rendered inside of a <code><<span>React.Suspense</span>></code> or <code><<span>React.SuspenseList</span>></code> parent to enable the fallback UI.</p>
        `,
        `<h3>The <code><<span>Suspense</span>></code> component</h3>
        <p><code><<span>Suspense</span>></code> component is <i>imported from 'react'</i>, so not from 'react-router-dom'.</p>
        <p><code><<span>Suspense</span>></code> lets you <i>display a fallback until its children have finished loading</i>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'Controlling which data should be deferred and which data should be loaded before navigation',
      sectionSource:
        '/src/markdowns/12_React_Router/Controlling_which_data_should_be_deferred.html',
      highlights: {
        highlight1: ['deferred', 'loaded'],
      },
      tooltips: [
        `<p>So how does the <code>defer()</code> feature shine if you have multiple requests with different speeds? You can use <code>defer()</code> and <code>await</code> keyword to control which <i>data is <u>loaded</u> before navigation</i> and which <i>data is <u>deferred</u> before navigation</i> and loaded after the page component was rendered to the screen.</p>
        <p>The <code>await</code> keyword used inside <code>defer()</code> is your lever, your switch for controlling which data should be awaited before render the page component tot the screen, and which data should be deferred, so data you wanna load after the page component was rendered to the screen.</p>
        `,
        `<h3><code><<span>Await</span>></code> need to be wrapped by its own <code><<span>Suspense</span>></code></h3>
        <p><i>Every <code><<span>Await</span>></code> block must be wrapped with its own <code><<span>Suspense</span>></code> component</i>, otherwise <code><<span>Suspense</span>></code> will wait for all <code><<span>Await</span>></code> components to complete before showing anything, which is not what you want.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'More about the <code><<span>Await</span>></code> component',
      sectionSource:
        '/src/markdowns/12_React_Router/More_about_the_Await_component.html',
      tooltips: [
        `<p><code><<span>Await</span>></code> component is used to <i>render <u>deferred values</u></i> with <i>automatic error handling</i>.</p>
        <p><code><<span>Await</span>></code> expects to be rendered inside of a <code><<span>React.Suspense</span>></code> or <code><<span>React.SuspenseList</span>></code> parent to enable the fallback UI.</p>
        `,
        `<h3>The <code>resolve</code> prop</h3>
        <p>The <code>resolve</code> prop <i>takes a promise returned from a deferred loader</i> value to be resolved and rendered.</p>
        `,
        `<h3><code><<span>Await</span>></code> children</h3>
        <p><code><<span>Await</span>></code> children can either be <i>React elements</i> or a <i>function</i>.</p>
        <p>When using a function, the value is provided as the only parameter. When using React elements, <code>useAsyncValue</code> will provide the data.</p>
        `,
        `<h3>The <code>errorElement</code> prop</h3>
        <p><i>The error element renders instead of the children when the promise rejects.</i> You can access the error with <code>useAsyncError</code>.</p>
        <p>If you do not provide an <code>errorElement</code> prop, the rejected value will bubble up to the nearest route-level <code>errorElement</code> and be accessible via the <code>useRouteError</code> hook.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'More about the <code><<span>Suspense</span>></code> component',
      sectionSource:
        '/src/markdowns/12_React_Router/More_about_the_Suspense_component.html',
      tooltips: [
        `<p><code><<span>Suspense</span>></code> lets you <i><u>display a fallback</u> until its children have finished loading</i>.</p>`,
        `<h3>The <code>children</code> prop</h3>
        <p><i>The actual UI you intend to render.</i> If <code>children</code> suspends while rendering, the <code><<span>Suspense</span>></code> boundary will switch to rendering <code>fallback</code>.</p>
        <p>You can wrap any part of your application with a Suspense boundary. React will display your loading fallback until all the code and data needed by the children has been loaded.</p>
        `,
        `<h3>The <code>fallback</code> prop</h3>
        <p><i>An alternate UI to render in place of the actual UI if it has not finished loading</i>.</p>
        <p><code><<span>Suspense</span>></code> will automatically switch to <code>fallback</code> when <code>children</code> suspends, and back to <code>children</code> when the data is ready. If <code>fallback</code> suspends while rendering, it will activate <i>the closest parent <code><<span>Suspense</span>></code> boundary</i>.</p>
        `,
        `<h3>Caveats</h3> 
        <p>React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch.</p>
        <p>If Suspense was displaying content for the tree, but then it suspended again, the <code>fallback</code> will be shown again unless the update causing it was caused by <code>startTransition</code> or <code>useDeferredValue</code>.</p>
        <p>If React needs to hide the already visible content because it suspended again, it will clean up layout Effects in the content tree. When the content is ready to be shown again, React will fire the layout Effects again. This lets you make sure that Effects measuring the DOM layout don't try to do this while the content is hidden.</p>
        `,
        `<h3>Revealing content together at once</h3>
        <p><i>By default, the whole tree inside Suspense is treated as a single unit</i>. Components that load data don't have to be direct children of the Suspense boundary.</p>
        `,
        `<h3>Revealing nested content as it loads</h3>
        <p>When a component suspends, the <u>closest parent Suspense component</u> shows the fallback. This lets you <i>nest multiple Suspense components to create a <u>loading sequence</u></i>.</p>
        <p>Suspense boundaries let you coordinate which parts of your UI should always "pop in" together at the same time, and which parts should progressively reveal more content in a sequence of loading states.</p>
        `,
        `<h3>Preventing already revealed content from hiding</h3>
        <p>When a component suspends, the closest parent Suspense boundary switches to showing the fallback. This can lead to a jarring user experience if it was already displaying some content. To prevent this from happening, you can mark the navigation state update as a transition with <code>startTransition</code>. This tells React that the state transition is not urgent, and it's better to keep showing the previous page instead of hiding any already revealed content.</p>
        <p><i>A transition doesn't wait for <u>all</u> content to load. It only waits long enough to avoid hiding already revealed content.</i></p>
        `,
        `<h3>Resetting Suspense boundaries on navigation</h3>
        <p><i>During a transition, React will avoid hiding already revealed content.</i> However, if you navigate to <i>a route with different parameters</i>, you might want to tell React it is <i><u>different</u> content</i>. You can express this with a <code>key</code>: <code><<span>ProfilePage key={queryParams.id} </span>/></code></p>
        `,
        `<h3>How do I prevent the UI from being replaced by a fallback during an update?</h3>
        <p>Replacing visible UI with a fallback creates a jarring user experience. This can happen when an update causes a component to suspend, and the nearest Suspense boundary is already showing content to the user.</p>
        <p><i>To prevent this from happening, mark the update as non-urgent using <code>startTransition</code>. During a transition, React will wait until enough data has loaded to prevent an unwanted fallback from appearing.</i></p>
        <p>This will avoid hiding existing content. However, any newly rendered <code>Suspense</code> boundaries will still immediately display fallbacks to avoid blocking the UI and let the user see the content as it becomes available.</p>
        <p><i>React will only prevent unwanted fallbacks during non-urgent updates. It will not delay a render if it's the result of an urgent update. You must opt in with an API like <Code>startTransition</code> or <Code>useDeferredValue</code>.</i></p>
        <p>If your router is integrated with Suspense, it should wrap its updates into <Code>startTransition</code> automatically.</p>
        `,
      ],
    },
  ],
};

const Redux = {
  title:
    '<p class="card__title--2">Diving into Redux <br>(an alternative to the Context API)</p>',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: 'Another Look At State In React Apps',
      sectionSource: '',
    },
    {
      sectionTitle: 'Redux vs React Context',
      sectionSource: '',
    },
    {
      sectionTitle: 'How Redux Works',
      sectionSource: '',
    },
    {
      sectionTitle: 'Exploring The Core Redux Concepts',
      sectionSource: '',
    },
    {
      sectionTitle: 'More Redux Basics',
      sectionSource: '',
    },
    {
      sectionTitle: 'Preparing a new Project',
      sectionSource: '',
    },
    {
      sectionTitle: 'Creating a Redux Store for React',
      sectionSource: '',
    },
    {
      sectionTitle: 'Providing the Store',
      sectionSource: '',
    },
    {
      sectionTitle: 'Using Redux Data in React Components',
      sectionSource: '',
    },
    {
      sectionTitle: 'Dispatching Actions From Inside Components',
      sectionSource: '',
    },
    {
      sectionTitle: 'Redux with Class-based Components',
      sectionSource: '',
    },
    {
      sectionTitle: 'Attaching Payloads to Actions',
      sectionSource: '',
    },
    {
      sectionTitle: 'Working with Multiple State Properties',
      sectionSource: '',
    },
    {
      sectionTitle: 'How To Work With Redux State Correctly',
      sectionSource: '',
    },
    {
      sectionTitle: 'Redux Challenges & Introducing Redux Toolkit',
      sectionSource: '',
    },
    {
      sectionTitle: 'Adding State Slices',
      sectionSource: '',
    },
    {
      sectionTitle: 'Connecting Redux Toolkit State',
      sectionSource: '',
    },
    {
      sectionTitle: 'Migrating Everything To Redux Toolkit',
      sectionSource: '',
    },
    {
      sectionTitle: 'Working with Multiple Slices',
      sectionSource: '',
    },
    {
      sectionTitle: 'Reading & Dispatching From A New Slice',
      sectionSource: '',
    },
    {
      sectionTitle: 'Splitting Our Code',
      sectionSource: '',
    },
    {
      sectionTitle: 'Summary',
      sectionSource: '',
    },
    {
      sectionTitle: 'Module Resources',
      sectionSource: '',
    },
  ],
};

const Advanced_Redux = {
  title: '<p class="card__title--2">Advanced Redux</p>',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: 'Redux & Side Effects (and Asynchronous Code)',
      sectionSource: '',
    },
    {
      sectionTitle: 'Refresher / Practice: Part 1/2',
      sectionSource: '',
    },
    {
      sectionTitle: 'Refresher / Practice: Part 2/2',
      sectionSource: '',
    },
    {
      sectionTitle: 'Redux & Async Code',
      sectionSource: '',
    },
    {
      sectionTitle: 'Frontend Code vs Backend Code',
      sectionSource: '',
    },
    {
      sectionTitle: 'Where To Put Our Logic',
      sectionSource: '',
    },
    {
      sectionTitle: 'Using useEffect with Redux',
      sectionSource: '',
    },
    {
      sectionTitle: 'A Problem with useEffect()',
      sectionSource: '',
    },
    {
      sectionTitle: 'Handling Http States & Feedback with Redux',
      sectionSource: '',
    },
    {
      sectionTitle: 'Using an Action Creator Thunk',
      sectionSource: '',
    },
    {
      sectionTitle: 'Getting Started with Fetching Data',
      sectionSource: '',
    },
    {
      sectionTitle: 'Finalizing the Fetching Logic',
      sectionSource: '',
    },
    {
      sectionTitle: 'Exploring the Redux DevTools',
      sectionSource: '',
    },
    {
      sectionTitle: 'Summary',
      sectionSource: '',
    },
    {
      sectionTitle: 'Module Resources',
      sectionSource: '',
    },
  ],
};

const Replacing_Redux_with_React_Hooks = {
  title: '<p class="card__title--2">Replacing Redux with React Hooks</p>',
  sections: [
    {
      sectionTitle:
        'Alternative 1: Using the Context API (and why NOT to use it instead of Redux)',
      sectionSource: '',
    },
    {
      sectionTitle:
        'Alternative 2: Using a custom Hook - create an custom store hook that manage the wide-state data',
      sectionSource:
        '/src/markdowns/14_Replacing_Redux_with_React_hooks/Alternative_2_Using_a_custom_Hook_part1.html',
      highlights: {
        highlight1: ['custom store'],
      },
    },
    {
      sectionTitle:
        'Alternative 2: Using a custom Hook - creating a concrete store & using the custom store',
      sectionSource:
        '/src/markdowns/14_Replacing_Redux_with_React_hooks/Alternative_2_Using_a_custom_Hook_part2.html',
      highlights: {
        highlight1: ['concrete store'],
      },
    },
    {
      sectionTitle: 'Optimizing the custom store hook',
      sectionSource:
        '/src/markdowns/14_Replacing_Redux_with_React_hooks/Optimizing_the_custom_store_hook.html',
    },
    {
      sectionTitle: 'Managing multiple state slices with the custom store hook',
      sectionSource:
        '/src/markdowns/14_Replacing_Redux_with_React_hooks/Managing_multiple_state_slices_with_the_custom_store_hook.html',
    },
  ],
};

const Deploying_React_apps = {
  title: '<p class="card__title--2">Deploying React apps</p>',
  sections: [
    {
      sectionTitle: 'Understanding & adding Lazy Loading',
      sectionSource:
        '/src/markdowns/15_Deploying_React_apps/Understanding_&_adding_lazy_loading.html',
      highlights: {
        highlight1: ['Lazy Loading'],
      },
    },
    {
      sectionTitle: 'Server-side Routing vs Client-side Routing',
      sectionSource: '',
    },
  ],
};

const Animating_React_Apps = {
  title: '<p class="card__title--2">Animating React Apps</p>',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: 'Preparing the Demo Project',
      sectionSource: '',
    },
    {
      sectionTitle: 'Using CSS Transitions',
      sectionSource: '',
    },
    {
      sectionTitle: 'Using CSS Animations',
      sectionSource: '',
    },
    {
      sectionTitle: 'CSS Transition & Animations Limitations',
      sectionSource: '',
    },
    {
      sectionTitle: 'Using ReactTransitionGroup',
      sectionSource: '',
    },
    {
      sectionTitle: 'Using the Transition Component',
      sectionSource: '',
    },
    {
      sectionTitle: 'Wrapping the Transition Component',
      sectionSource: '',
    },
    {
      sectionTitle: 'Animation Timings',
      sectionSource: '',
    },
    {
      sectionTitle: 'Transition Events',
      sectionSource: '',
    },
    {
      sectionTitle: 'The CSSTransition Component',
      sectionSource: '',
    },
    {
      sectionTitle: 'Customizing CSS Classnames',
      sectionSource: '',
    },
    {
      sectionTitle: 'Animating Lists',
      sectionSource: '',
    },
    {
      sectionTitle: 'Alternative Animation Packages',
      sectionSource: '',
    },
    {
      sectionTitle: 'Wrap Up',
      sectionSource: '',
    },
    {
      sectionTitle: 'Module Resources',
      sectionSource: '',
    },
  ],
};

const Testing_React_Apps = {
  title: '<p class="card__title--2">Testing React Apps (Unit Tests)</p>',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: 'What & Why?',
      sectionSource: '',
    },
    {
      sectionTitle: 'Understanding Different Kinds Of Tests',
      sectionSource: '',
    },
    {
      sectionTitle: 'What To Test & How To Test',
      sectionSource: '',
    },
    {
      sectionTitle: 'Understanding the Technical Setup & Involved Tools',
      sectionSource: '',
    },
    {
      sectionTitle: 'Running a First Test',
      sectionSource: '',
    },
    {
      sectionTitle: 'Writing Our First Test',
      sectionSource: '',
    },
    {
      sectionTitle: 'Grouping Tests Together With Test Suites',
      sectionSource: '',
    },
    {
      sectionTitle: 'Testing User Interaction & State',
      sectionSource: '',
    },
    {
      sectionTitle: 'Testing Connected Components',
      sectionSource: '',
    },
    {
      sectionTitle: 'Testing Asynchronous Code',
      sectionSource: '',
    },
    {
      sectionTitle: 'Working With Mocks',
      sectionSource: '',
    },
    {
      sectionTitle: 'Summary & Further Resources',
      sectionSource: '',
    },
    {
      sectionTitle: 'Module Resources',
      sectionSource: '',
    },
  ],
};

const Adding_authentication_to_React_apps = {
  title: '<p class="card__title--2">Adding authentication to React apps</p>',
  sections: [
    {
      sectionTitle: 'Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: 'What, How & Why?',
      sectionSource: '',
    },
    {
      sectionTitle: 'More on "Authentication Tokens"',
      sectionSource: '',
    },
    {
      sectionTitle: 'Starting Setup & First Steps',
      sectionSource: '',
    },
    {
      sectionTitle: 'Adding User Signup',
      sectionSource: '',
    },
    {
      sectionTitle: 'Showing Feedback To The User',
      sectionSource: '',
    },
    {
      sectionTitle: 'Adding User Login',
      sectionSource: '',
    },
    {
      sectionTitle: 'Managing The Auth State With Context',
      sectionSource: '',
    },
    {
      sectionTitle: 'Using The Token For Requests To Protected Resources',
      sectionSource: '',
    },
    {
      sectionTitle: 'Redirecting The User',
      sectionSource: '',
    },
    {
      sectionTitle: 'Adding Logout',
      sectionSource: '',
    },
    {
      sectionTitle: 'Protecting Frontend Pages',
      sectionSource: '',
    },
    {
      sectionTitle: 'Persisting The User Authentication Status',
      sectionSource: '',
    },
    {
      sectionTitle: 'Adding Auto-Logout',
      sectionSource: '',
    },
    {
      sectionTitle: 'Finishing Steps',
      sectionSource: '',
    },
    {
      sectionTitle: 'Module Resources',
      sectionSource: '',
    },
  ],
};

export const dataStorage = [
  React_basics,
  Styling_React_components,
  Rendering_lists_and_conditional_content,
  Adding_interactivity_to_a_component,
  Managing_state,
  Refs,
  Handling_side_effects,
  Behind_the_scenes_of_React_and_optimization_techniques,
  Class_based_components,
  Custom_React_Hooks,
  Working_with_forms_and_user_inputs,
  Debugging_React_apps,
  React_Router,
  Redux,
  Advanced_Redux,
  Replacing_Redux_with_React_Hooks,
  Deploying_React_apps,
  Animating_React_Apps,
  Testing_React_Apps,
  Adding_authentication_to_React_apps,
];
