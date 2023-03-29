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
        'React is a JavaScript library for <i>building user interfaces (UI)</i>.',
        'React apps are made out of components. A component is <i>a piece of the UI that has its own logic and appearance</i>. A component can be as small as a button, or as large as an entire page.',
        `<h3>What is a component?</h3>
        <p>Conceptually, components are just JavaScript functions that accept arbitrary inputs (called <u>props</u>) and return <u>JSX markup</u> describing what should appear on the screen. So a component in React is just <i>a JavaScript function that returns JSX markup</i>.</p>
        <p>Components are in the end just a combination of HTML, CSS and JavaScript.</p>
        <p>Components are <i><u>reusable</u> building blocks</i> in your UI. You don't have to reuse a component to make it a component, it's just one of its traits that a component is reusable. Components are a handy way to organize UI code and markup, even if some of them are only used once.</p>
        <ul>React components are regular JavaScript functions except:
        <li>- their names always begin with a capital letter;</li>
        <li>- they return JSX markup.</li>
        </ul>`,
        `<h3>Why components?</h3>
        <p>React is all about components because <i>the UI in the end is made up of components</i>.</p>
        <p>React is all about <i>splitting your UI into small building blocks (components), where every building block (component) has a clear task</i>, and therefore your code stays maintainable and manageable, and React will do the heavy lifting of rendering something onto the screen and of combining all your code.</p>
        <p>Components let you <i>split the UI into <u>independent</u>, <u>reusable</u> pieces, and think about each piece in isolation</i>.</p>
        `,
      ],
    },
    {
      sectionTitle: 'How to create a new React project',
      sectionSource: '',
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
        <p>The web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript — often in separate files! Content was marked up inside HTML while the page's logic lived separately in JavaScript. But as the Web became more interactive, <i>logic increasingly determined content. JavaScript was in charge of the HTML!</i> This is why <i>in React, rendering logic and markup live together in the same place — components</i>.</p>
        <p>Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a <i><u>syntax extension</u> called <u>JSX</u> to represent that markup</i>.</p>
        `,
        `<h3>JSX: Putting markup into JavaScript</h3>
        <p>JSX is a <i>syntax extension</i> for JavaScript that lets you <i>write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place</i>. JSX looks a lot like HTML, but it is a bit stricter, has a few more rules than HTML and can display dynamic information.</p>
        <p>JSX just provides <i>syntactic sugar</i> for the <code>React.createElement()</code> function.</p>
        `,
        `<h3>You can store JSX markup in variables</h3>
        <p>You are not limited to using JSX only if you return it, you can also use it to create a value, which is stored in a variable</p>
        `,
        `<h3>How JSX is different from HTML (rules of JSX)</h3>
        <ul>JSX is stricter than HTML: 
        <li>1. <i>Close all the tags</i>: JSX requires tags to be explicitly closed; self-closing tags like <<span>img></span>, <<span>input></span> must become <<span>img /></span>, <<span>input /></span>.</li> 
        <li>2. <i>Return a single root element</i>: Your component also can't return multiple JSX tags. You have to wrap them into a shared parent, like a <<span>div></span>...<<span>/div></span> or if you don't want to add an extra parent tag to your markup you can write an empty <>...<</span>/></span> wrapper.</li>
        <li>3. <i>camelCase all most of the things</i>: JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names; for example, their names can't contain dashes or be reserved words like <code>class</code>. This is why, in React, many HTML and SVG attributes are written in camelCase.</li>
        </ul>
        `,
        `<h3>Why do multiple JSX tags need to be wrapped?</h3>
        <p>JSX markup looks like HTML markup, but under the hood it is transformed into plain JavaScript objects. You can't return two objects from a function without wrapping them into an array. This explains why you also can't return two JSX tags without wrapping them into another tag or a <code>React.Fragment</code>.</p>
        `,
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
        <p><i>A React custom component is basically just a <b>custom HTML element</b></i>. The key difference between custom components and built-in HTML elements (tags) is that <i>custom components names must always start with a capital letter while HTML tags must be lowercase</i>.</p>
        <p>These custom components are not really HTML elements which end up on the screen, you just use them in your JSX markup. In the end, what ends up on the screen are just default HTML elements.</p>
        `,
        `<h3>React component & return statements</h3>
        <p>In a React component return statements can be written all on one line but if your markup isn't all on the same line as the <code>return</code> keyword, you must wrap it in a pair of parentheses. Without parentheses, any code on the lines after <code>return</code> will be ignored!</p>`,
        `<h3>Nesting components</h3>
        <p>Components can render other components, but you must never nest their definitions. Instead, <i>define every component at the top level</i>. When a child component needs some data from a parent, pass it by props instead of nesting definitions.</p>
        <p>Components (parent) can render other components (child), but you must never nest their definitions (<i>never define a component inside another component!</i>).</p>
        `,
        `<h3>Splitting components in separate files</h3>
        <p>You can have <i>multiple components in the same file</i>, but is considered a good practice to put new components into new files, so that you have <i>one file per component</i>.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'JavaScript in JSX with Curly Braces: Outputting dynamic data & working with expressions in JSX',
      sectionSource:
        '/src/markdowns/01_React_basics/JavaScript_in_JSX_with_Curly_Braces.html',
      highlights: {
        highlight1: ['Outputting dynamic data', 'expressions in JSX'],
        highlight2: ['JavaScript in JSX'],
      },
      tooltips: [
        `<h3>JavaScript in JSX with Curly Braces</h3>
        <p><i>Curly braces <code>{}</code> let you <u>bring JavaScript logic and variables into your markup</u>!</i></p>
        <p>Curly braces let you "escape back" into JavaScript so that you can embed some variable from your code and display it to the user or to write some expressions. <i>Any JavaScript expression will work between curly braces, including function calls</i>.</p>
        <p><i>JSX is very minimal as a templating language</i> because it lets you organize data and logic using JavaScript.</p>
        `,
        `<h3>JSX curly braces & JSX attributes</h3>
        <p>With curly braces you can also "escape into JavaScript" from JSX attributes.</p>
        `,
        `<h3>Using "double curlies": CSS and other objects in JSX</h3>
        <p>In addition to strings, numbers, and other JavaScript expressions, <i>you can even pass objects in JSX</i>. To pass a JS object in JSX, <i>you must wrap the object in another pair of curly braces</i>.</p>
        <p>You may see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases). But when you need an inline style, you pass an object to the <code>style</code> attribute.</p>
        <p><i>The next time you see <code>{{ ... }}</code> in JSX, know that it's nothing more than an object inside the JSX curlies!</i></p>
        `,
        `<h3>Write any expression inside JSX curly braces</h3>
        <ul>You can put more complex expressions inside the JSX curly braces too, for example:
        <li>- string concatenation</li>
        <li>- function calls</li>
        <li>- JavaScript objects</li>
        </ul>
        `,
        `<h3>You can only use curly braces in two ways inside JSX:</h3>
        <p>- as <i>text</i> directly inside a JSX tag<p>
        <p>- as <i>attributes</i> immediately following the <code>=</code> sign<p>`,
        `<h3>Summary:</h3>
        <p>- JSX attributes inside quotes are passed as strings;</p>
        <p>- <i>Curly braces let you bring JavaScript logic and variables into your markup</i>;</p>
        <p>- They work inside the JSX tag content or immediately after <code>=</code> in attributes;</p>
        <p>- <code>{{ ... }}</code> is not special syntax: it's a JavaScript object tucked inside JSX curly braces.</p>`,
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
        <p>Props is a super important concept because it allows you to <i>make your components <u>reusable</u></i> and it <i>allows you to <u>pass data</u></i> from a parent component to a child component.</p>
        `,
        `<h3>Passing props to a child component</h3>
        <p>Props let you think about parent and child components independently.</p>
        <p>Props serve the same role as arguments serve for functions — in fact, <i>props are the only argument to your component! React component functions accept a single argument, a <code>props</code> object</i>.</p>
        <p>When we pass props from parent to child we can't skip intermediate child components in between, so it's also totally fine to have a <i>component which just passes data on</i>.</p>
        `,
        `<h3>Destructuring props</h3>
        <p>Usually you don't need the whole <code>props</code> object itself, so you destructure it into individual props. <i>To read props, you can use the function destructuring syntax</i>: <code>Avatar({ person, size })</code>.</p>
        `,
        `<h3>Specifying a default value for a prop</h3>
        <p>You can specify a default value like <code>size = 100</code>, which is used for missing and <code>undefined</code> props.</p>
        `,
        `<h3>Naming conventions</h3>
        <p>The convention for props which hold functions is to start their name with "on".</p>
        `,
        `<h3>Forwarding props with the spread syntax</h3>
        <p>Sometimes, passing props gets very repetitive. Some components forward all of their props to their children, so <i>you can forward all props with the spread syntax</i>: <<span>input {...props}</span> /> or <<span>input {...props.object}</span> /></p>
        <p>Use spread syntax with restraint. If you're using it in every other component, something is wrong. Often, it indicates that you should split your components and pass children as JSX.</p>
        `,
        `<h3>Passing JSX as children: <code>props.children</code></h3>
        <p><i>When you nest content inside a JSX tag, the parent component will receive that content in a prop called <code>children</code></i>.</p>
        <p>With the help of <code>children</code> prop you can build wrapper components. Wrapper components can wrap any nested content. It doesn't need to “know” what's being rendered inside of it.</p>
        `,
        `<h3>How props change over time</h3>
        <p>Props are <i>read-only snapshots in time</i>: every render receives a new version of props.</p>
        <p><i>You can't change props</i>. When you need interactivity, you'll need to set state.</p>
        `,
      ],
    },
    {
      sectionTitle:
        'The concept of "composition": passing JSX as children via <code>props.children</code>',
      sectionSource:
        '/src/markdowns/01_React_basics/The_concept_of_composition_props_children.html',
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
    {
      sectionTitle:
        'When and how to create multi-component files: splitting a component into multiple components',
      sectionSource:
        '/src/markdowns/01_React_basics/Splitting_a_component_into_multiple_components.html',

      tooltips: [
        `<h3>One component per one file</h3>
        <p>You can declare many components in one file, but large files can get difficult to navigate.</p>
        <p><i>The magic of components lies in their <u>reusability</u>: you can create components that are composed of other components</i>. But as you nest more and more components, it often makes sense to start splitting them into different files. This lets you <i>keep your files easy to scan and <u>reuse</u> components in more places</i>.</p>
        `,
        `<h3>Separation of concerns</h3>
        <p>React is all about splitting your app into small building blocks (components), where every building block (component) is <i>focused on <u>one core task</u></i>, and therefore your <i>code stays <u>maintainable</u> and <u>manageable</u></i>. You build your overall UI by combining these building blocks (components).`,
        `<h3>Multiple components per one file</h3>
        <p>Components are regular JavaScript functions, so you can keep multiple components in the same file. This is <i>convenient when components are relatively <u>small</u> or tightly <u>related to each other</u></i>. If the file gets crowded, you can always split your components to a separate file.</p>
        <p>Thus far, we always had one component per file, and that generally is a good rule to keep, but if you have a component that is really only getting used by the other component in that file, having both components in the same file can make sense too.</p>`,
        `<h3>Importing and exporting components</h3>
        <ul>You can move a component into another file in three steps:
        <li>1. <i>Make a new JS file</i> to put the components in;</li>
        <li>2. <i>Export your function component</i> from that file using either <u>default</u> or <u>named</u> exports;</li>
        <li>3. <i>Import it</i> in the file where you'll use the component using the corresponding technique for importing default or named exports.</li>
        </ul>
        <p><i>How you export your component dictates how you must import it</i>.</p>
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
        <li>- <i>It minds its own business</i>. It does <i><u>not change</u> any objects or variables that existed before it was called</i>;</li>
        <li>- <i>Same inputs, same output</i>. Given the <u>same inputs</u>, a pure function should always return the <u>same result</u>.</li>
        </ul>
        <p>React assumes that every component you write is a pure function. This means that <i>React components you write <u>must always return the same JSX given the same inputs</u></i>.</p>
        `,
        `<h3>Side Effects: (un)intended consequences</h3>
        <p>React's <i><u>rendering</u> process must always be pure</i>. Components should <i>only return their JSX</i>, and <i>not change any objects or variables that existed <u>before rendering</u></i> — that would make them impure!</p>
        <p>In general, you should not expect your components to be rendered in any particular order. <i>Each component should only "think for itself", and not attempt to coordinate with or depend upon others during rendering</i>. Rendering is like a school exam: <i>each component should calculate JSX on their own!</i>.</p>
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
        <p>Side effects are things that <i>happen “on the side”, <u>not during rendering</u></i>.</p>
        <p>In React, <i>side effects usually belong inside <u>event handlers</u></i>. Even though event handlers are defined inside your component, <u>they don't run during rendering</u>! So <i>event handlers don't need to be pure</i>.</p>
        <p>If you've exhausted all other options and can't find the right event handler for your side effect, you can still attach it to your returned JSX with a <code>useEffect</code> call in your component. This tells React to execute it later, <u>after rendering</u>, when side effects are allowed. However, this approach should be your last resort.</p>
        <p>Strive to express your component's logic in the JSX you return. When you need to "change things", you'll usually want to do it in an event handler. As a last resort, you can <code>useEffect</code>.</p>
        `,
        `<h3>Why does React care about purity?</h3>
        <p>- your components could run in a <i>different environment</i> — for example, on the server! Since they return the same result for the same inputs, one component can serve many user requests.</p>
        <p>- you can improve performance by <i>skipping rendering components whose inputs have not changed</i>. This is safe because pure functions always return the same results, so they are safe to cache.</p>
        <p>- if some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.</p>
        `,
      ],
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
        `<h3>Rendering data from arrays</h3>
        <p>You will often want to <i>display multiple <u>similar components</u> from a <u>collection of data</u></i>. You can use JavaScript's <code>filter()</code> and <code>map()</code> with React to filter and <i>transform your array of data into an <u>array of components</u></i>.</p>
        <p>If you do <i>output an <u>array of JSX elements</u>, then React is capable of rendering on the UI that JSX elements</i>. So if you had <i>an array of JSX elements as part of your JSX markup</i>, React would simply render that elements side by side.</p>
        `,
        `<h3>Keeping list items in order with <code>key</code></h3>
        <p>You need to give each array item a <code>key</code> — a string or a number that <i><u>uniquely</u> identifies it among other items in that array</i>.</p>
        <p>JSX elements directly inside a <code>map()</code> call always need keys!</p>
        <p><i>Keys tell React which array item each component corresponds to</i>, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen <codekey</code helps React infer what exactly has happened, and make the correct updates to the DOM tree.</p>
        <p>The <code>key</code> prop is a prop you <i>can add to any component, no matter if it's a custom component or if it's a built-in HTML element</i>.</p>
        `,
        `<h3>Displaying several DOM nodes for each list item</h3>
        <p>What do you do when each item needs to render not one, but several DOM nodes? The short <code><><span><</span>/></code> Fragment syntax won't let you pass a key, so you need to either group them into a single <<span>div</span>>, or use the slightly longer and more explicit <code><<span>Fragment key={id}</span>></code> syntax.</p>
        `,
        `<h3>Where to get your <code>key</code></h3>
        <p>Rather than generating keys on the fly, you should include them in your data.</p>
        <p>You might be tempted to use an item's index in the array as its key. In fact, that's what React will use if you don't specify a <code>key</code> at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.</p>
        `,
        `<h3>Rules of keys</h3> 
        <p>- <i>Keys must be <u>unique</u> among siblings</i>. However, it's okay to use the same keys for JSX nodes in different arrays.<p>
        <p>- <i>Keys must <u>not change</u></i> or that defeats their purpose! Don't generate them while rendering.</p>
        `,
        `<h3>Why does React need keys?</h3>
        <p>Why should you add the special <code>key</code> prop to list JSX elements? It's required for React to <i>correctly <u>identify</u> and update (if needed) the list of JSX elements</i>.</p>
        <p><i>Keys let us <u>uniquely</u> identify an item between its siblings</i>. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the <code>key</code> lets React identify the item throughout its lifetime.</p>
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
        `<h3>Outputting conditional content</h3>
        <p>Your components will often need to <i>display different things</i> depending on <i>different conditions</i>. In React, you can conditionally render JSX using JavaScript syntax like <code>if</code> statements, Conditional (ternary) operator <code>? :</code>, and Logical AND operator <code>&&</code>.</p>
        <p><i>Conditional content</i> is about rendering <i>different output</i> under <i>different conditions</i>.</p>
        <p>When it comes to output content conditionally, <i>long statements like <code>if..else</code> or <code>for</code> loops are not allowed between curly braces, in JSX markup</i>. So, for achive your results, you need to use Ternary Operator <code>? :</code> or Logical AND operator <code>&&</code>.</p>
        `,
        `<h3>Conditionally returning JSX</h3>
        <p>In React, there is no special syntax for writing conditions. Instead, you'll use the same techniques as you use when writing regular JavaScript code.  For example, <i>you can use an <code>if</code> statement to conditionally <u>return</u> JSX markup</i>.</p>
        `,
        `<h3>Conditionally returning nothing with <code>null</code></h3>
        <p>In some situations, you won't want to render anything at all. A component must return something. In this case, you can return <code>null</code>.</p>
        <p>In practice, returning <code>null</code> from a component isn't common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component's JSX.</p>
        `,
        `<h3>Common conditional syntax shortcuts you'll encounter in React codebases</h3>
        <p>If you prefer more compact code, you can use the <i><b>conditional <code>? :</code></b> operator</i>. Unlike <code>if</code>, it <i>works inside JSX markup</i>.</p>
        <p>When you don't need the <code>else</code> branch or conditional (ternary) operator, you can also use the <i><b>Logical AND <code>&&</code></b> operator</i>. Inside React components, it often comes up when you want to render some JSX when the condition is true, <u>or render nothing otherwise</u>.</p>
        <p>In JSX, <code>{cond && <<span>A /</span>>}</code> means: if <code>cond</code>, render <code><<span>A /</span>></code>, otherwise nothing.</p>
        `,
        `<h3>Conditionally assigning JSX to a variable</h3>
        <p>You can use an <code>if</code> or <code>if..else</code> statement to conditionally assign JSX to a variable and then <i>include</i> it in your returned JSX tree.</p>
        <p>You can <i>store JSX markup in variables</i>. You are not limited to using JSX only if you return it, you can also use it to create a value, which is stored in a variable.</p>
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
      sectionTitle: 'Listening to events & working with event handlers',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/Listening_to_events_&_working_with_event_handlers.html',
      tooltips: [
        `<h3>How to write components that handle interactions</h3>
        <p>React lets you <i>add event handlers to your JSX</i>. Event handlers are your own <i>functions that will be triggered in response to interactions</i>.</p>
        `,
        `<h3>Adding event handlers</h3>
        <p>To add an event handler, you will first <i>define a function</i> and then <i>pass it as a prop</i> to the appropriate JSX tag. Functions passed to event handlers must be passed, not called.</p>
        <p>On all built-in HTML elements, like <<span>div</span>>, <<span>h2</span>>, <<span>buttons</span>> and so on, you have full access to all the native DOM events, which you can listen to. <i>React exposes all native DOM events as props which start with "on"</i>.</p>
        `,
        `<h3>Naming convention</h3>
        <p>By convention, it is common to name event handlers as <i>"handle"</i> followed by the event name: <code>onClick={handleClick}</code>.</p>
        <p>React exposes all <i>native DOM events</i> as props which start with <i>"on"</i>: <code>onClick={}</code>. <i>Custom event handler props</i> should also start with <i>"on"</i>, followed by a capital letter: <code>onRun={}</code>.</p>
        `,
        `<h3>Reading props in event handlers</h3>
        <p>Because event handlers are declared inside of a component, they have access to the component's props.</p>
        `,
        `<h3>Passing event handlers as props</h3>
        <p>Often you'll want <i>the parent component to specify a child's event handler</i>. You can pass event handling logic from a parent component to a child component by <i>passing event handlers as props to the child component</i>.</p>
        `,
        `<h3>Event propagation: how events propagate and how to stop them</h3>
        <p>Event handlers will also catch events from any children your component might have. We say that an event <i>"bubbles" or "propagates" up the tree: it starts with where the event happened, and then goes up the tree</i>.</p>
        <p>All events propagate in React except <code>onScroll</code>, which only works on the JSX tag you attach it to.</p>
        <p>Event handlers receive an <i>event object</i> as their only argument. If you want to prevent an event from reaching parent components, you need to call <code>e.stopPropagation()</code>.</p>
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
      tooltips: [
        `<p>Components often need to change what's on the screen as a result of an interaction. Components need to "remember" things.</p>`,
        `<h3>When a regular variable isn't enough</h3>
        <p>- <i>Local variables don't persist between renders</i>. When React renders a component a second time, it renders it from scratch — it doesn't consider any changes to the local variables.</p>
        <p>- <i>Changes to local variables won't trigger renders</i>. React doesn't realize it needs to render the component again with the new data.</p>
        `,
        `<h3>Adding a state variable with <code>useState</code> Hook</h3>
        <ul>To update a component with new data, two things need to happen:</p>
        <li>1. <i><u>Retain</u> the data between renders.</i></li>
        <li>2. <i><u>Trigger</u> React to render the component with new data (re-rendering).</i></li></ul>
        <ul>The <code>useState</code> Hook provides those two things:
        <li>1. A <i>state variable</i> to <u>retain the data between renders</u>.</li>
        <li>2. A <i>state setter function</i> to <u>update the variable</u> and <u>trigger React to render the component again</u>.</li></ul>
        <p>Use a state variable when a component needs to "remember" some information between renders.</p>
        <p>The <code>useState</code> Hook allows you to <i>define values as state</i>, where changes to these values should reflect in a component function being called again, which is a key difference to a value stored in a regular variable.</p>
        `,
        `<h3>Anatomy of <code>useState</code></h3>
        <p>When you call <code>useState</code>, you are telling React that you want this component to remember something.</p>
        <p>The only argument to <code>useState</code> is the <i>initial value</i> of your state variable.</p>
        <ul>Every time your component renders, <i><code>useState</code> gives you an array containing two values</i>:</p>
        <li>1. The <i>state <u>variable</u></i> with the value you stored.</li>
        <li>2. The <i>state setter <u>function</u></i> which can update the state variable and trigger React to render the component again.</li></ul>
        <p>You can use array destructuring to read values from the array that <code>useState</code> gives you.</p>
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
        `<h3>There are two types of "model" data in React</h3>
        <ul>There are two types of "model" data in React: <i>props</i> and <i>state</i>. The two are very different:
        <li>- props are like arguments you pass to a function. They let a parent component pass data to a child component and customize its appearance.</li>
        <li>- state is like a component's memory. It lets a component keep track of some information and change it in response to interactions.</li>
        </ul>
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
        <li>1. <i>Triggering</i> a render</li>
        <li>2. <i>Rendering</i> the component</li>
        <li>3. <i>Committing</i> to the DOM</li>
        </ul>
        `,
        `<h3><u>Trigger</u> a render: when and why React renders a component</h3>
        <ul> There are two reasons when a component trigger a render:
        <li>1. It's the component's <i>initial render</i>.</li>
        <li>2. The component's (or one of its ancestors) <i>state has been updated</i>.</li>
        </ul>
        <p>Once the component has been initially rendered, you can trigger further renders by updating its state with the state setter function provided by <code>useState</code> Hook. <i>Updating your component's state automatically trigger a render</i>.</p>
        <p>Only the component where the <code>useState()</code> was registered and its child components will be updated, not any other components.</p>
        `,
        `<h3>React <u>renders</u> your components: what rendering means in React</h3>
        <p>After you trigger a render, <u>React calls your components</u> to figure out what to display on screen. <i>"Rendering" is React <u>calling</u> your components.</i></p>
        <p>- <i>On initial render</i>, React will call the root component.</p>
        <p>- <i>For subsequent renders</i>, React will call the component whose state update triggered the render.</p>
        <p><i>This process is <u>recursive</u></i>: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.</p>
        `,
        `<h3>React <u>commits</u> changes to the DOM</h3>
        <p>After rendering (calling) your components, React will modify the DOM.</p>
        <p>- For the <i>initial render</i>, React will use the <code>appendChild()</code> DOM API to put all the DOM nodes it has created on screen.</p>
        <p>- For <i>re-renders</i>, React will apply the <u>minimal necessary operations</u> (calculated while rendering!) to make the DOM match the latest rendering output. <i>React only changes the DOM nodes if there's a difference between renders</i>.</p>
        `,
        `<h3>Why rendering does not always produce a DOM update</h3>
        <p>React does not touch the DOM <i>if the rendering result is the same as last time</i>. React only changes the DOM nodes if there's a difference between renders.</p>
        `,
      ],
    },
    {
      sectionTitle: 'State as a snapshot',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/State_as_a_snapshot.html',
      tooltips: [
        `<h3>Relationship between state and rendering: setting state triggers renders</h3>
        <p><u>State variables</u> might look like <u>regular JavaScript</u> variables that you can read and write to. However, <i>state behaves more like a snapshot. Setting it does not change the state variable you already have</i>, but instead triggers a re-render.</p>
        <p>You might think of your UI as changing directly in response to the user event like a click. In React, it works a little differently from this mental model. You know that <i>setting state requests a re-render from React</i>. This means that <i>for an interface to react to the event, you need to <u>update the state</u></i>.</p>
        `,
        `<h3>Rendering takes a snapshot in time</h3>
        <p>"Rendering" means that React is calling your component, which is a function. The JSX you return from that function is like <i>a snapshot of the UI in time</i>. Its props, event handlers and local variables were all <i>calculated using its state at <u>the time of the render</u></i>.</p>
        <p>State behaves like a <i>component's memory</i>, so is not like a regular variable that disappears after your function returns. <i>State actually "lives" in React itself — as if on a shelf! — outside of your function. When React calls your component, it gives you <u>a snapshot of the state for that particular render</u></i>. Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, <i>all calculated using the state values from that render</i>!</p>
        <p>When you call <code>useState</code>, React gives you <i>a snapshot of the state for that render</i>. Every render (and functions inside it) will always "see" the snapshot of the state that React gave to that render.</p>
        <p>Variables and event handlers don't "survive" re-renders. <i>Every render has its own event handlers</i>. Event handlers created in the past have the state values from the render in which they were created.</p>
        `,
        `<h3>Why state does not update immediately after you set it</h3>
        <p><i>Setting state only changes it for the next render! A state variable's value never changes within a render</i>, even if its event handler's code is asynchronous. <i>React keeps the state values "fixed" within one render's event handlers</i>. You don't need to worry whether the state has changed while the code is running.</p>
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
        `<p><i>Setting state does not change the variable in the existing render, but it requests a new render</i>. But sometimes you might want to <i>perform multiple operations on the value <u>before queueing the next render</u></i>. To do this, it helps to understand how React batches state updates. State updates are scheduled by React, they are not processed immediately.</p>`,
        `<h3>React batches state updates</h3>
        <p><i>Each render's state values are fixed</i>. React waits until all code in the event handlers has run before processing your state updates. This is why the re-render only happens after all state updating function calls finished. <i>React processes state updates after event handlers have finished running</i>: this is called <i><u>batching</u></i>.</p>
        <p><i>React lets you update multiple state variables — even from multiple components — without triggering too many re-renders</i>. But this also means that <i>the UI won't be updated until after your event handler, and any code in it, completes</i>. This behavior, also known as batching, makes your React app run much faster. It also avoids dealing with confusing "half-finished" renders where only some of the variables have been updated.</p>
        <p><i>React does not batch across multiple intentional events like clicks — each click is handled separately</i>. Rest assured that React only does batching when it's generally safe to do. This ensures that, for example, if the first button click disables a form, the second click would not submit it again.</p>
        `,
        `<h3>Updating the same state variable multiple times <u>before the next render</u></h3>
        <p>If you would like to <i>update the <u>same state variable</u> multiple times <u>before the next render</u></i>, instead of passing the next state value like <code>setNumber(number + 1)</code>, you can <i>pass as argument an <u>updater function</u> that calculates the next state based on the previous one in the queue</i>, like <code>setNumber(n => n + 1)</code>. It is a way to tell React to "do something with the state value" instead of just replacing it.</p>
        <p>You may have noticed that <code>setState(x)</code> actually works like <code>setState(n => x)</code>, but <code>n</code> is unused! <i>To <u>update some state multiple times in one event</u>, you can use <code>setState(n => x)</code> updater function</i>.</p>
        <p>After the event handler completes, React will trigger a re-render. During the re-render, React will process the queue. Updater functions run during rendering, so <i>updater functions must be pure</i> and only return the result. Don't try to set state from inside of them or run other side effects</p>
        `,
      ],
    },
    {
      sectionTitle: 'Updating objects in state',
      sectionSource:
        '/src/markdowns/02_Adding_interactivity_to_a_component/Updating_objects_in_state.html',
      tooltips: [
        `<h3>Treat state as read-only</h3>
        <p>State can hold any kind of JavaScript value, including objects. But <i>you shouldn't change objects that you hold in the React state directly</i>. Instead, when you want to update an object, you need to <i>create a new one (or make a copy of an existing one), and then set the state to use that copy</i>.</p>
        <p>You should <i>treat object in React as if they were immutable (unchangeable or "read-only")</i>, so treat any JavaScript object that you put into state as read-only.</p>
        <p><i>When you store objects in state, mutating them will not trigger renders and will change the state in previous render "snapshots"</i>. Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.</p>
        <p>In React, you treat all state as immutable!</p>
        `,
        `<h3>Local mutation is fine</h3>
        <p><i>Mutation is only a problem when you change existing objects that are already in state</i>, so mutating an object you've just created is okay because no other code references it yet. Changing it isn't going to accidentally impact something that depends on it. This is called a local mutation.</p>
        <p><i>You can even do local mutation <u>while rendering</u></i>.</p>
        `,
        `<h3>Copying objects with the spread syntax</h3>
        <p>Often you will want to <i>include existing data as a part of the new object you're creating</i>. For example, you may want to update only one field in a form, but keep the previous values for all other fields.</p>
        <p>With the spread syntax you <i>don't need to copy every property separately</i>.</p>
        <p>You can use the <code>{...obj, something: 'newValue'}</code> object spread syntax to create copies of objects.</p>
        `,
        `<h3>Copying nested objects: shallow vs deep</h3>
        <p><i>The <code>...</code> spread syntax is "shallow" — it only copies things one level deep</i>. This makes it fast, but it also means that if you want to update a nested property, you'll have to use it more than once.</p>
        <p>To update a nested object, you need to <i>create copies all the way up from the place you're updating</i>.</p>
        `,
        `<h3>Objects are not really nested</h3>
        <p>"Nesting" is an inaccurate way to think about how objects behave. When the code executes, <i>there is no such thing as a "nested" object</i>. Every object is a separate object "pointing" at a different address in memory.</p>
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
        <p>The easiest way to remove an item from an array is to filter it out. In other words, you will produce a new array that will not contain that item. To do this, use the <i><code>filter()</code> method</i>.</p>
        `,
        `<h3>Transforming an array with <code>map()</code></h3>
        <p>If you want to change some or all items of the array, you can use <i><code>map()</code></i> to create a new array. The function you will pass to <code>map()</code> can decide what to do with each item, based on its data or its index (or both).</p>
        `,
        `<h3>Replacing items in an array with <code>map()</code></h3>
        <p>To replace an item, create a new array with <code>map()</code>. Inside your <code>map(</code> call, you will receive the item index as the second argument. Use it to decide whether to return the original item (the first argument) or something else.</p>
        `,
        `<h3>Inserting into an array</h3>
        <p>Sometimes, you may want to insert an item at a particular position that's neither at the beginning nor at the end. To do this, you can use the <i><code>...</code> array spread syntax together with the <code>slice()</code> method</i>.</p>
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
        `<h3>Reacting to Input with State</h3>
        <p>With just Vanilla JavaScript, you have to write every single line of code that should be taken to build an app (Imperative Way).</p>
        <p><i>React uses a declarative way to manipulate the UI</i>. Instead of manipulating individual pieces of the UI directly, you <i>describe the different states that your component can be in</i>, and <i>switch between them</i> in response to user actions (user events) or computer actions (http events).</p>
        <p>With React, you won't modify the UI from code directly. With React you will <i>describe the UI you want to see for the <u>different visual states</u> of your component</i>, and then trigger the state changes in response to user input.</p>
        `,
        `<h3>How imperative UI compares to declarative UI </h3>
        <p>With just Vanilla JavaScript you have to write the exact instructions to manipulate the UI depending on what just happened. <i>It's called imperative because you have to "command" each element, telling the computer <u>how</u> to update the UI</i>.</p>
        <p>In React, you don't directly manipulate the UI. Instead, you declare what you want to show, and React figures out how to update the UI. When you design UI interactions, you probably think about <i>how the UI changes in response to user actions</i>.</p>
        <p>Declarative programming means <b>describing the UI for each <u>visual state</u></b> rather than micromanaging the UI (imperative).</p>
        `,
        `<h3>Thinking about UI declaratively</h3>
        <p>In React, you need to think about UI declaratively: <i>UI changes as state changes</i>.</p>
        <ul>When developing a component:
        <li>1. Identify your component's all <i>visual states</i></li>
        <li>2. Determine what triggers those <i>state changes</i>: human or computer</li>
        <li>3. Represent the <i>state in memory</i> using <code>useState</code></li>
        <li>4. Remove any <i>non-essential state variables</i></li>
        <li>5. Connect the <i>event handlers to set state</i></li>
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
        <ul>When you write a component that holds some state, you'll have to make choices about how many state variables to use and what the shape of their data should be:
        <li>1. Group related state</li>
        <li>2. Avoid contradictions in state</li>
        <li>3. Avoid redundant state</li>
        <li>4. Avoid duplication in state</li>
        <li>5. Avoid deeply nested state</li>
        </ul>
        <p>The goal behind these principles is to make state easy to update without introducing mistakes. <i>Removing redundant and duplicate data from state helps ensure that all its pieces <u>stay in sync</u></i>.</p>
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
        `<h3>Lifting state up</h3>
        <p>Sometimes, you want <i>the state of two or multiple components to always change together</i>. To do it, <i>remove state from them, move it to their <u>closest common parent</u>, and then pass it down to them via props</i>. This is known as lifting state up.</p>
        <p>To change the state in the parent component, you need to pass down to the to the child components an <i>event handler that allow the child components to <u>change the parent's state</u></i>.</p>
        <p><i>Moving state of some components into the common parent component allow you to coordinate that components</i>, and passing down an event handler to the child allow the child to change the parent's state. Lifting state up often changes the nature of what you're storing as state.</p>
        `,
        `<h3>Controlled and uncontrolled components</h3>
        <p>It is common to call <i>a component with some <u>local state</u> "uncontrolled". A child component that have a state variable that can't be changed by its parent component is called an uncontrolled component</i>.</p>
        <p>In contrast, you might say <i>a component is "controlled" when the important <u>data in it is driven by props</u> rather than its own local state</i>. This lets the parent component fully specify its behavior.</p>
        <p>Uncontrolled components are easier to use within their parents because they require less configuration. But they're less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props.</p>
        <p>When writing a component, consider which information in it should be <i>controlled (via props)</i>, and which information should be <i>uncontrolled (via state)</i>.</p>
        `,
        `<h3>A single source of truth for each state</h3>
        <p>In a React application, many components will have their own state. Some state may "live" close to the leaf components (components at the bottom of the tree) like inputs. Other state may "live" closer to the top of the app.</p>
        <p><i>For each unique piece of state, you will choose the component that "owns" it</i>. This principle is also known as having a "single source of truth". It doesn't mean that all state lives in one place — but that <i>for each piece of state, there is a specific component that holds that piece of information</i>. Instead of duplicating shared state between components, <i>lift it up</i> to their common shared parent, and <i>pass it down</i> to the children that need it.</p>
        `,
      ],
    },
    {
      sectionTitle: 'How to control whether the state gets preserved or reset',
      sectionSource:
        '/src/markdowns/03_Managing_state/How_to_control_whether_the_state_gets_preserved_or_reset.html',
      tooltips: [
        `<h3>The UI tree</h3>
        <p>Browsers use many tree structures to model UI. The DOM represents HTML elements, the CSSOM does the same for CSS. React also uses tree structures to manage and model the UI you make. React makes UI trees from your JSX.</p>
        `,
        `<h3>State is tied to a position in the UI tree</h3>
        <p>State is isolated between components. <i>React keeps track of which state belongs to which component based on their place in the UI tree</i>.</p>
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
        <ul>There are <i>two ways to reset state when <u>switching between them</u></i>:
        <li>1. Render components in <i>different positions</i></li>
        <li>2. Resetting state with a <i><code>key</code></i></li>
        </ul>
        <p>You might have seen <code>key</code>s when rendering lists. <i>Keys aren't just for lists! You can use keys to make React distinguish between any components. Specifying a <code>key</code> tells React to use the <code>key</code> itself as part of the position, instead of their order within the parent.</i> You can force a subtree to reset its state by giving it a different key.</p>
        <p>State is associated with the tree position. A <code>key</code> lets you specify a named position instead of relying on order.</p>
        <p>You can provide a <code>key</code> to a JSX tag and when that <code>key</code> changes, <i>React will re-create the DOM node from scratch, instead of reusing it</i>.</p>
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
        <ul>Reducers are <i>a different way to handle state</i>. You can migrate from <code>useState</code> to <code>useReducer</code> in three steps:
        <li>1. Move from <i>setting state</i> to <i>dispatching actions</i>.</li>
        <li>2. Write a <i>reducer function</i>.</li>
        <li>3. Use the reducer from your component.</li>
        </ul>
        `,
        `<h3>Move from <u>setting state</u> to <u>dispatching actions</u></h3>
        <p>Managing state with reducers is slightly different from directly setting state. Instead of telling React “what to do” by setting state, you specify “what the user just did” by <i>dispatching “actions” from your event handlers</i>.</p>
        <p>The state update logic will live elsewhere! So <i>instead of “setting” state via an event handler, you're dispatching an “action”.</i> This is more descriptive of the user's intent.</p>
        <p><i>The object you pass to dispatch function is called an “action” and is a regular JavaScript object</i>. You decide what to put in it, but generally it should contain the minimal information about what happened.</p>
        <p><i>An "action" object can have any shape. By convention, it is common to give it a string <code>type</code> that describes what happened</i>, and pass any additional information in other fields.</p>
        `,
        `<h3>Write a reducer function</h3>
        <p>A reducer function is <i>where you will put your state logic</i>. It takes two arguments, the <i>current state</i> and the <i>"action" object</i>, and it <i>returns the next state</i>.</p>
        <p><i>React will set the state to what you return from the reducer</i>.</p>
        <p>Because the reducer function takes state as an argument, you can <i>declare it outside of your component</i>. This decreases the indentation level and can make your code easier to read.</p>
        <p>You can use if/else statements to manipulate the state inside reducers, but it's a convention to use switch statements. The result is the same, but it can be easier to read switch statements at a glance.</p>
        <p>If you want, you can even move the reducer to a different file.</p>
        `,
        `<h3>Use the reducer from your component</h3>
        <p>The <code>useReducer</code> Hook is similar to <code>useState</code> — you must pass it an initial state and it returns a stateful value and a way to set state (in this case, the dispatch function). But it's a little different.</p>
        <ul>The <code>useReducer</code> Hook takes two arguments:
        <li>1. A reducer function</li>
        <li>2. An initial state</li>
        </ul>
        <ul>And it returns:
        <li>1. A stateful value</li>
        <li>2. A dispatch function (to “dispatch” user actions to the reducer)</li>
        </ul>
        `,
        `<h3><code>useReducer</code> vs <code>useState</code></h3>
        <p>Component logic can be easier to read when you separate concerns. By consolidate state logic with a reducer the event handlers <i>only specify what happened by dispatching actions</i>, and <i>the reducer function determines how the state updates in response to them</i>.</p>
        `,
        `<h3>Writing reducers well</h3>
        <ul>Keep these two tips in mind when writing reducers:
        <li>- <i>reducers must be pure</i>. Similar to state updater functions, reducers run during rendering! (Actions are queued until the next render.) This means that reducers must be pure — <i>same inputs always result in the same output</i>. They should not send requests, schedule timeouts, or perform any side effects (operations that impact things outside the component). They should <i>update objects and arrays without mutations</i>.</li>
        <li>- <i>each action describes a single user interaction</i>, even if that leads to multiple changes in the data.</li>
        </ul>
        `,
      ],
    },
    {
      sectionTitle:
        '<code>useReducer</code> vs <code>useState</code> for state management',
      sectionSource:
        '/src/markdowns/03_Managing_state/useReducer_vs_useState_for_state_management.html',
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
      sectionTitle: 'React Context limitations',
      sectionSource:
        '/src/markdowns/03_Managing_state/React_Context_limitations.html',
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
        "Hooks — functions starting with 'use' — can only be <i>called at the top level of your components or your own Hooks</i>. You can't call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it's helpful to think of them as unconditional declarations about your component's needs. You 'use' React features at the top of your component similar to how you 'import' modules at the top of your file.",
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
    },
    {
      sectionTitle: 'Adding basic CSS styling',
      sectionSource:
        '/src/markdowns/05_Styling_React_Components/Adding_basic_CSS_styling.html',

      tooltips: [
        'In React, you specify a CSS class with <code>className</code>. It works the same way as the HTML <code>class</code> attribute.',
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
        '/src/markdowns/05_Styling_React_Components/Introducing_styled_components.html',
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
        '/src/markdowns/05_Styling_React_Components/Using_CSS_modules.html',
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

const Fragments_Portals_and_Refs = {
  title: '<p class="card__title--2">Fragments, Portals & "Refs"</p>',
  sections: [
    {
      sectionTitle: 'JSX limitations & workarounds',
      sectionSource:
        '/src/markdowns/06_Fragments_Portals_&_Refs/JSX_limitations_&_workarounds.html',
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
        '/src/markdowns/06_Fragments_Portals_&_Refs/React_Fragments.html',
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
        '/src/markdowns/06_Fragments_Portals_&_Refs/React_Portals.html',
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
      sectionTitle:
        'How to “remember” information without re-rendering: Referencing values with refs',
      sectionSource:
        '/src/markdowns/06_Fragments_Portals_&_Refs/Referencing_values_with_ref.html',
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
      sectionTitle:
        'How to access DOM elements managed by React: Manipulating the DOM with <code>ref</code> prop',
      sectionSource:
        '/src/markdowns/06_Fragments_Portals_&_Refs/Manipulating_the_DOM_with_ref.html',
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
        '/src/markdowns/06_Fragments_Portals_&_Refs/useRef_and_uncontrolled_components.html',
      tooltips: [
        "When we use ref's for inputs, we have uncontrolled input components.",
      ],
    },
    {
      sectionTitle: 'Diving into "forward refs"',
      sectionSource:
        '/src/markdowns/06_Fragments_Portals_&_Refs/Diving_into_Forward_Refs.html',
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

const Handling_side_effects = {
  title: '<p class="card__title--2">Handling side effects</p>',
  sections: [
    {
      sectionTitle:
        'How to synchronize components with external systems: Synchronizing with Effects',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/Synchronizing_with_effects.html',
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
      sectionTitle:
        'How to remove unnecessary Effects from your components: You might not need an Effect',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/You_might_not_need_an_effect.html',
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
      sectionTitle:
        'How an Effect’s lifecycle is different from a component’s: Lifecycle of reactive Effects',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/Lifecycle_of_reactive_effects.html',
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
      sectionTitle:
        'How to prevent some values from re-triggering Effects: Separating Events from Effects',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/Separating_Events_from_Effects.html',
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
      sectionTitle:
        'How to make your Effect re-run less often: Removing Effect dependencies',
      sectionSource:
        '/src/markdowns/07_Handling_side_effects/Removing_Effect_dependencies.html',
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
        '/src/markdowns/07_Handling_side_effects/Using_the_useEffect_hook.html',
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
        '/src/markdowns/07_Handling_side_effects/What_to_add_&_not_to_add_as_dependencies_to_useEffect.html',
      tooltips: [
        "You add as dependencies what you're using in your <code>useEffect</code> function.",
        "Does <code>useEffect()</code> run after every render? Yes! By default, if you don't pass an array of dependencies, <code>useEffect()</code> runs both after the first render and after every component render cycle.",
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
        'We used object destructuring to add object properties as dependencies to <code>useEffect()</code>.',
        'The key thing is NOT that we use destructuring, but that we pass specific properties instead of the entire object as a dependency.',
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
        'If a component uses a custom hook and that custom hook uses <code>useState</code>, <i>the component that uses the custom hook will re-render when the state in that custom hook will trigger a re-render</i>.',
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

const React_Router = {
  title:
    '<p class="card__title--2">Building a Multi-Page SPA with React Router</p>',
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
      sectionTitle: 'Module Introduction',
      sectionSource: '',
    },
    {
      sectionTitle: 'Deployment Steps',
      sectionSource: '',
    },
    {
      sectionTitle: 'Adding Lazy Loading',
      sectionSource: '',
    },
    {
      sectionTitle: 'Building The Code For Production',
      sectionSource: '',
    },
    {
      sectionTitle: 'Getting Started With Deployment (Uploading Files)',
      sectionSource: '',
    },
    {
      sectionTitle: 'Exploring Routing Issues & Finishing Deployment',
      sectionSource: '',
    },
    {
      sectionTitle: 'Module Resources',
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

const React_and_TypeScript = {
  title: '<p class="card__title--2">React + TypeScript</p>',
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

const Introduction_to_NextJS = {
  title:
    '<p class="card__title--2">A (Pretty Deep Dive) Introduction to Next.js</p>',
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

const Optional_React_Hooks_introduction_and_summary = {
  title:
    '<p class="card__title--2">Optional: React Hooks Introduction & Summary</p>',
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

const Optional_React_summary_and_core_feature_walkthrough = {
  title:
    '<p class="card__title--2">Optional: React Summary & Core Feature Walkthrough</p>',
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

const Course_Roundup = {
  title: '<p class="card__title--2">Course Roundup</p>',
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
  React_basics,
  Rendering_lists_and_conditional_content,
  Adding_interactivity_to_a_component,
  Managing_state,
  Styling_React_components,
  Debugging_React_apps,
  Fragments_Portals_and_Refs,
  Handling_side_effects,
  Behind_the_scenes_of_React_and_optimization_techniques,
  Class_based_components,
  Custom_React_Hooks,
  Working_with_forms_and_user_inputs,
  React_Router,
  Redux,
  Advanced_Redux,
  Replacing_Redux_with_React_Hooks,
  Deploying_React_apps,
  Animating_React_Apps,
  Testing_React_Apps,
  Adding_authentication_to_React_apps,
  // React_and_TypeScript,
  // Introduction_to_NextJS,
  Optional_React_Hooks_introduction_and_summary,
  Optional_React_summary_and_core_feature_walkthrough,
  // Course_Roundup,
];
