# LISP

## Contents
- [Introduction](#introduction)
- [Syntax](#syntax)
- [Basic Functions](#basicfunctions)
  - [Initializing Variables](#initializingvariables)
  - [Evaluations](#evaluations)
- [List Functions](#listfunctions)
  - [CAR and CDR](#carandcdr)
  - [CONS and REVERSE](#consandreverse)
- [Arithmetic Functions](#arithmeticfunctions)
- [Defining Your Own Functions](#definingyourownfunctions)
- [Sample Problems](#sampleproblems)

<br>

# Introduction

LISP (LISt Processing language) is a computer language with relatively simple syntax 
and semantics that was developed by John McCarthy. LISP is very practical and flexible
in what it can do; its simplicity also comes in handy in numerous situations, thus it 
can be considered to be one of the most powerful languages there are.

<br>

# Syntax

Everything in LISP is either an atom or a list; an element cannot be both an atom and
a list unless it's `NIL` (also denoted as `()`). 

Atoms are identified by a `'` mark (e.g. `'hello` or `'(this is an atom)`); this mark
is not used for atoms that are numbers (e.g. `23` instead of `'23`). 

Lists are denoted as elements inside a pair of parentheses. Those elements can be 
lists themselves (so nested lists are valid) or be atoms. Here is an example:

`(test (this is easy) hello world)` -- 

In this list, `(this is easy)` is its own list. `'test`, `'hello`, and `'world` are all
atoms. Note how the atoms in a list were not written with a `'` mark; the `'` mark is
used more for atoms that do not belong in any list.

LISP statements are function calls that follow this format: (**function** *arg1 arg2 ...*).
The number of arguments depends on the function; some functions can take in any amount
of arguments while others take in a fixed amount. All statements will return either an
atom or a list.

<br>

# Basic Functions

An important tip to know going forward is that atoms are **not** to be evaluated. This
will make more sense in the next few sections.

## Initializing Variables

There are two functions that can initialize variables: `SET` and `SETQ`. `SET` is set
up as `(SET '*atomName* *value*)`. `SETQ` is very similar except the `'` mark before
`atomName` is not needed.

See the table below:

| Statement <img width="150"/>| Value <img width="80"/>| Comment |
| --- | --- | --- |
| (SET 'a (MULT 2 3)) | 6 | There is no `'` before `(MULT 2 3)`; so, `(MULT 2 3)` is evaluated to be `6`, which is then stored into the atom `'a`. |
| (SET 'a '(MULT 2 3)) | (MULT 2 3) | This time, there is a `'` before `(MULT 2 3)`, meaning that `(MULT 2 3)` is its own atom and should not be evaluated. So, `'a` is initialized with `(MULT 2 3)`. |
| (SET 'b 'a) | a | `'a` is not to be evaluated because it is an atom. So, `'b` is initialized with the character `a` and not whatever `a` equals. |
| (SET 'c a) | (MULT 2 3) | There is no `'` mark before `a`. While `'a` is an atom, `a` only refers to its value. So, `'a`'s value, `(MULT 2 3)` is stored into `'c`. |
| (SETQ EX (ADD 3 ( MULT 2 5))) | 13 | There is no `'` mark before `(ADD 3 (MULT 2 5))`; so, this is evaluated to be 13, which is then stored into `'EX`. Remember that the `'` is implied for `SETQ`. |
| (SETQ VOWELS '(A E I O U)) | (A E I O U) | Once again, there is an implied `'` mark before `VOWELS` because of `SETQ`. A `'` mark is placed before `(A E I O U)`; so, the list now becomes an atom and is stored into `'VOWELS`. |

## Evaluations

`EVAL` takes in an argument and returns its value; whether there is a `'` mark before
the argument is very important. Refer to the table below for more details.

On the other hand, `ATOM` evaluates whether the argument is an atom or a list; it 
returns either `true` or `NIL` for false.

See the following examples.

| Statement | Value <img width="100"/> | Comment |
| --- | --- | --- |
| (SETQ p '(ADD 1 2 3 4)) | (ADD 1 2 3 4) | This simply sets the atom `'p` to be equal to `'(ADD 1 2 3 4)`. |
| (ATOM 'p) | true | The `'` mark before `p` attests to the fact that it is indeed an atom. Hence, this function returns true. |
| (ATOM p) | NIL | There is no `'` mark before `p`, so an evaluation is done to get us `(ADD 1 2 3 4)`, which is not an atom but a list. |
| (EVAL 'p) | (ADD 1 2 3 4) | `'p` would first be evaluated to get `(ADD 1 2 3 4)`. However, it is not evaluated further because of the `'` mark. |
| (EVAL p) | 10 | `'p` is evaluated to get `(ADD 1 2 3 4)`. Unlike the function, there is no `'` mark before `p`; so, `(ADD 1 2 3 4)` would be evaluated further to get us `10`. |

<br>

# List Functions

As their name indicates, these are functions that work specifically with lists. 
They do not change the actual list; they only return a revised version of it. Read
below for more information.

## CAR and CDR

These two functions are likely the two most famous functions in LISP. 

`CAR` takes in an argument that must be a list. Then, it returns the first 
atom in that list. `CDR` (pronounced as could-er, if you were wondering) takes in its
list argument and returns that list argument without its first element.

These two functions are both used to grab specific elements in a list, which is why they
are very useful. Often times, you may need to call on `CAR` and/or `CDR` multiple
times in a row; so, there is a shorthand to write this out. Instead of writing 
`CAR (CDR x)`, with `x` being a list, you could write `(CADR x)`. 

Whenever you see this shorthand notation, make sure that you evaluate from right to 
left. So, using `(CADR x)` as an example, you should first evaluate `(CDR x)` and 
then use the `CAR` function afterwards.

Here are a few other examples:

| Statement | Value |
| --- | --- |
| (CAR '(This is a list)) | This | 
| (CDR '(This is a list)) | (is a list) |

## CONS and REVERSE

`CONS` essentially works as an insert function. It takes in two arguments; the second
argument must be a list. `CONS` will then insert the first argument to be the new
first element of that list and then return the new list.

`REVERSE` is exactly as it sounds; it takes in a list and reverses the order. Note that
if there are lists inside that list, the order of the elements in those inner lists
is not changed. 

Refer to the table below for examples:

| Statement <img width="150"/> | Value <img width="80"/> | Comment |
| --- | --- | --- |
| (CONS 'red '(white blue)) | (red white blue) | The atom `'red` is inserted into the start of the list to get a new list, `(red white blue)`. |
| (SETQ z (CONS '(red white blue) (CDR '(This is a list)))) | ((red white blue) is a list) | The `CDR` function call should be handled first; `This` is removed from the argument list to get `(is a list)`. Then, `'(red white blue)` is to be inserted into this list. The elements are inserted into the list as an inner list; they do not become part of the larger list. So, the new list becomes `((red white blue) is a list)`. `'z` is then finally initialized with this list. |
| (REVERSE z) | (list a is (red white blue)) | Note how `(red white blue)` did not become `(blue white red)`. This is because `REVERSE` only applies to the outer list, `z`, and any inner lists contained in `z`. |
| (CDDAR z) | (blue) | While the `REVERSE` function was used on `z` before, remember that list functions don't change the actual list. So, `(CDDAR z)` works with `((red white blue) is a list)`. First, `CAR` runs to get us `(red white blue)`. Then, we call on `CDR` twice. The first time gets us `(white blue)`. The second time gets us `(blue)`. Notice how even though there is only one element in the list, `CDR` still returns a list and not just the atom itself. |

<br>

# Arithmetic Functions

The arithmetic functions are generally all pretty self-explanatory because their names
are very indicative of what they do. All of them return atoms. Take a look:

| Function | # of Arguments | Result |
| --- | --- | --- |
| (ADD a b ...) | any | sum of all arguments |
| (SUB a b) | 2 | `$a - b$` |
| (MULT a b ...) | any | product of all arguments |
| (DIV a b) | 2 | `$a / b$` - This does actual division; the result is not rounded to an integer. |
| (SQUARE a) | 1 | `$a^2$` |
| (EXP a n) | 2 | `$a^n$` |
| (EQ a b) | 2 | `true` if `a` and `b` are equal, `NIL` otherwise |
| (POS a) | 1 | `true` if `a` is positive, `NIL` otherwise |
| (NEG a) | 1 | `true` if `a` is negative, `NIL` otherwise |

The `ADD`, `SUB`, `MULT`, and `DIV` functions can be written with `+`, `-`, `*`, and 
`/` if you'd like.

<br>

# Defining Your Own Functions

To define functions, the `DEF` function is used. Sometimes, `DEFUN` (standing for
DEFine FUNction) is used, as it is more standard terminology. 

Here's the format: `(DEF <func name>(args) (<actions>))`

So, the defined function will operate on a single parameter named "args" (you can 
replace this name with something else, e.g. params) and perform actions on that 
parameter. 

Here's an example of a defined function:

`(SETQ X '(a c s l))`
`(DEF WHAT(args) (CONS args (REVERSE (CDR args))))`
`(WHAT X)` - returns `((a c s l) l s c)`

Here, `'X` is first initialized as `(a c s l)`. `'X` is then used as the parameter of
our defined `WHAT` function. First, we use the `CDR` function on `'X` to get
`(c s l)`; the `REVERSE` function is then called on this list to get us `(l s c)`.
Finally, we have to insert `(a c s l)` into `(l s c)` because of the `CONS` function.
So, we are left with `((a c s l) l s c)`.

<br>

# Sample Problems

As you work through these problems, it is crucial that you keep track of parentheses!

## 1. Evaluate the following expression: `CADDAADR (apple ((banana coconut durian elderberry fig) grape huckleberry))`

Here are the steps to solving this problem:

0. `CADDAADR '(apple ((banana coconut durian elderberry fig) grape huckleberry))`
1. `CADDAAR '(((banana coconut durian elderberry fig) grape huckleberry))`
2. `CADDAR '((banana coconut durian elderberry fig) grape huckleberry)`
3. `CADDR '(banana coconut durian elderberry fig)`
4. `CADR '(coconut durian elderberry fig)`
5. `CAR '(durian elderberry fig)`
6. **`'durian`**

## 2. With the code block below, evaluate what the last line of code would return.

```code
(SETQ X '(pencil giraffe revolution drawer))
(SETQ X (CONS '(ADD (MULT 2 3) (DIV 12 4)) X))
(SET 'B (CAR X))
(EVAL 'B)
```

Here, pay close attention to the `'` marks as well as parentheses.

First `'X` is initalized the the list `(pencil giraffe revolution drawer)`. Then,
`'X` is re-initialized in the next line; let's look at 
`(CONS '(ADD (MULT 2 3) (DIV 12 4)) X)` first. Because of the `'` mark,
`(ADD (MULT 2 3) (DIV 12 4))` is not evaluated further. It is then inserted at the 
start of `'X`. This returned list, `((ADD (MULT 2 3) (DIV 12 4)) pencil giraffe
revolution drawer)`, is used to re-initialize `'X`.

The next step is initializing `'B`. `(CAR X)` would get us 
`(ADD (MULT 2 3) (DIV 12 4))`; so, this is stored in `'B`.

Finally, we get to the last line. `'B` is first evaluated to get
`(ADD (MULT 2 3) (DIV 12 4))`. This is not evaluated further because of the `'` mark.
So, our final answer is **`(ADD (MULT 2 3) (DIV 12 4))`.

## 3. With the function definitions below, what would be the value of the following: `(WG (DR (WG '((us ru fr) ch uk jp))))`.

```code
(DEF DR (args) (REVERSE (CAR args)))
(DEF WG (args) (CONS '((no one)(knows why)) (DR(args))))
```

This problem will involve going back and forth between the two functions multiple times.

First, let's look at our expression again: `(WG (DR (WG '((us ru fr) ch uk jp))))``.

To start off, we need to evaluate `(WG '((us ru fr) ch uk jp))`. So, we pass the
list down as an argument, and after plugging it into the actions defined in the `WG`
function, we have `(CONS '((no one)(knows why)) '(DR ((us ru fr) ch uk jp)))`. 

Now, we have to jump to the `DR` function. `CAR '((us ru fr) ch uk jp)` would be 
`(us ru fr)`; this is then reversed to get `(fr ru us)`. This list is then returned;
we are now left with `(CONS '((no one)(knows why)) '(fr ru us))`, which evaluates to
`(((no one)(knows why)) fr ru us)`.

So that's one step done. We now have `(WG (DR (((no one)(knows why)) fr ru us)))` left.
We will calculate (DR (((no one)(knows why)) fr ru us)). 
`CAR '(((no one)(knows why)) fr ru us)` would give us `((no one)(knows why))`. Then,
the reversed version of this would be `((knows why)(no one))`.

One more step to go! We have `(WG ((knows why)(no one)))` now. So, this is the same as
`(CONS '((no one)(knows why)) (DR ((knows why)(no one))))`. Let's start off with
`(DR ((knows why)(no one)))`. `CAR '((knows why)(no one))` would be `(knows why)`.
The reverse of that would be `(why knows)`.

So, we are down to `(CONS '((no one)(knows why)) '(why knows))`. This would get us
to our final answer, **`(((no one)(knows why)) why knows)`**.

---
Author: Kelly Hong