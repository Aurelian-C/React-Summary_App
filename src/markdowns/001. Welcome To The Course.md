# Activating Strict Mode

JavaScript's Strict Mode, introduced in ECMAScript 5, is a way to opt into a ==**restricted variant of JavaScript**==, thereby implicitly opting-out of Sloppy Mode.

> **Note**: Sometimes you'll see the default, non-Strict Mode referred to as Sloppy Mode. This isn't an official term, but be aware of it, just in case.

Strict Mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting Strict Mode will run Strict Mode code with different behavior from browsers that do, so don't rely on Strict Mode without feature-testing for support for the relevant aspects of Strict Mode. ==Strict Mode code and non-Strict Mode code can coexist==, so scripts can opt into Strict Mode incrementally.

Strict Mode makes several changes to normal JavaScript semantics:

- ==Eliminates some JavaScript **silent errors** by changing them to **throw errors**==.
- ==**Fixes mistakes** that make it difficult for JavaScript Engine to perform **optimizations**==: Strict Mode code can sometimes be made to run faster than identical code that's not Strict Mode.
- **==Prohibits some syntax==** likely to be defined in future versions of ECMAScript.

Strict Mode makes it easier for us developers to ==avoid accidental errors==, so basically it helps us introduce the bugs into our code and that's because of 2 reasons:

- first, **Strict Mode ==forbids us to do certain things==**;
- second, it will actually ==**create visible errors**== for us in certain situations, in which without Strict Mode JavaScript will simply fail silently without letting us know that we did a mistake.

Strict Mode ==_convert_ **mistakes** or **bad syntax** into **errors**==.

## Invoking Strict Mode

Strict Mode applies to ==entire **scripts**== or to ==individual **functions**==. It ==**doesn't apply to block statements enclosed in** `{}` **braces**==; attempting to apply it to such contexts does nothing.

> **Note**: ==If we have any code before 'use strict' then Strict Mode will not be activated. Comments are allowed because JavaScript will just ignore them==.

### Strict Mode for scripts

To invoke Strict Mode for an entire script, put the exact statement `"use strict";` (or `'use strict';`) ==before any other statements==.

```js
// Whole-script Strict Mode syntax
'use strict';
var v = "Hi! I'm a Strict Mode script!";
```

### Strict Mode for functions

To invoke Strict Mode for a function, put the exact statement` "use strict";` (or `'use strict';`) in the function's body ==before any other statements==.

```js
// With Strict Mode enabled
function Strict() {
  // Function-level Strict Mode syntax
  'use Strict';
  function nested() {
    return 'And so am I!';
  }
  return "Hi!  I'm a Strict Mode function!  " + nested();
}

// With Strict Mode disabled
function notStrict() {
  return "I'm not Strict.";
}
```

### Strict Mode for ES6 Modules

ECMAScript 2015 introduced JavaScript Modules and therefore a 3rd way to enter Strict Mode. The entire contents of JavaScript modules are ==**automatically in Strict Mode**, with no statement needed to initiate it==.

```js
function strict() {
  // because this is a module, I'm strict by default
}
export default strict;
```

### Strict Mode for Classes

All parts of ECMAScript ==**classes are Strict Mode code**==, including both class declarations and class expressions — and so also including all parts of class bodies.

## Changes in Strict Mode

Strict Mode changes both **==syntax==** and **==runtime behavior==**.

Changes generally fall into these categories:

- changes ==converting mistakes into errors== (as syntax errors or at runtime);
- changes simplifying how the particular variable for a given use of a name is computed;
- changes simplifying `eval` and `arguments`;
- changes making it easier to write "secure" JavaScript;
- changes anticipating future ECMAScript evolution.

### Converting mistakes into errors

Strict Mode ==changes some **previously-accepted _mistakes_ into _errors_**==. JavaScript was designed to be easy for novice developers, and sometimes it gives operations which should be errors non-error semantics. Sometimes this fixes the immediate problem, but sometimes this creates worse problems in the future. Strict Mode treats these mistakes as errors so that they're discovered and promptly fixed.

First, Strict Mode ==makes it impossible to **accidentally create global variables**==. In normal JavaScript mistyping a variable in an assignment creates a new property on the global object and continues to "work" (although future failure is possible: likely, in modern JavaScript).

```js
'use strict';

mistypeVariable = 17; // Assuming no global variable mistypeVariable exists this line throws a ReferenceError due to the misspelling of variable

function weird() {
  height = 50;
}
weird() //Uncaught ReferenceError: height is not defined
```

Second, Strict Mode ==makes assignments which would otherwise **silently fail to throw an exception**==. For example, `NaN` is a non-writable global variable. In normal code assigning to `NaN` does nothing; the developer receives no failure feedback. In Strict Mode assigning to `NaN` throws an exception. Any assignment that silently fails in normal code (assignment to a non-writable global or property, assignment to a getter-only property, assignment to a new property on a non-extensible object) will throw in Strict Mode:

```js
'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError
```

Third, Strict Mode **==makes attempts to delete undeletable properties throw==** (where before the attempt would have no effect):

```js
'use strict';
delete Object.prototype; // throws a TypeError
```

Fourth, Strict Mode ==requires that **function parameter names be unique**==. In normal code the last duplicated argument hides previous identically-named arguments. Those previous arguments remain available through `arguments[i]`, so they're not completely inaccessible. Still, this hiding makes little sense and is probably undesirable (it might hide a typo, for example), so in Strict Mode duplicate argument names are a syntax error:

```js
function sum(a, a, c) {
  // !!! syntax error
  'use strict';
  return a + a + c; // wrong if this code ran
}
```

Fifth, a Strict Mode in ECMAScript 5 forbids a 0-prefixed octal literal or octal escape sequence. Outside Strict Mode, a number beginning with a 0, such as `0644`, is interpreted as an octal number (`0644 === 420`), if all digits are smaller than 8. Octal escape sequences, such as "`\45`", which is equal to "`%`", can be used to represent characters by extended-ASCII character code numbers in octal. In Strict Mode, this is a syntax error. In ECMAScript 2015, octal literals are supported by prefixing a number with "`0o`"; for example:

```js
var a = 0o10; // ES2015: Octal
```

Novice developers sometimes believe a leading zero prefix has no semantic meaning, so they might use it as an alignment device — but this changes the number's meaning! A leading zero syntax for the octal is rarely useful and can be mistakenly used, so Strict Mode makes it a syntax error:

```js
'use strict';
var sum =
  015 + // !!! syntax error
  197 +
  142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Sixth, Strict Mode in ECMAScript 2015 forbids setting properties on primitive values. Without Strict Mode, setting properties is ignored (no-op), with Strict Mode, however, a `TypeError` is thrown.

```js
(function () {
  'use strict';

  false.true = ''; // TypeError
  (14).sailing = 'home'; // TypeError
  'with'.you = 'far away'; // TypeError
})();
```

In ECMAScript 5 Strict-mode code, duplicate property names were considered a `SyntaxError`. With the introduction of computed property names, making duplication possible at runtime, ECMAScript 2015 removed that reStriction.

```js
'use strict';
var o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

## Simplifying variable uses

Strict Mode simplifies how variable names map to particular variable definitions in the code. Many compiler optimizations rely on the ability to say that variable _X_ is stored in _that_ location: this is critical to fully optimizing JavaScript code. JavaScript sometimes makes this basic mapping of name to variable definition in the code impossible to perform until runtime. Strict Mode removes most cases where this happens, so the compiler can better optimize Strict Mode code.

## References

1. [Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

2. [Transitioning to Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_Strict_mode)
