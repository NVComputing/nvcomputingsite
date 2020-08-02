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

The following examples below were taken from the ACSL Wiki, but extra details have been
added to the *Comment* section.

| Statement | Value | Comment |
| --- | --- | --- |
| (SET 'a (MULT 2 3)) | 6 | There is no `'` before `(MULT 2 3)`; so, `(MULT 2 3)` is evaluated to be `6`, which is then stored into the atom `'a`. |
| (SET 'a '(MULT 2 3)) | (MULT 2 3) | This time, there is a `'` before `(MULT 2 3)`, meaning that `(MULT 2 3)` is its own atom and should not be evaluated. So, `'a` is initialized with `(MULT 2 3)`. |
| (SET 'b 'a) | a | `'a` is not to be evaluated because it is an atom. So, `'b` is initialized with the character `a` and not whatever `a` equals. |
| (SET 'c a) | (MULT 2 3) | There is no `'` mark before `a`. While `'a` is an atom, `a` only refers to its value. So, `'a`'s value, `(MULT 2 3)` is stored into `'c`. |
| (SETQ EX (ADD 3 ( MULT 2 5))) | 13 | There is no `'` mark before `(ADD 3 (MULT 2 5))`; so, this is evaluated to be 13, which is then stored into `'EX`. Remember that the `'` is implied for `SETQ`. |
| (SETQ VOWELS '(A E I O U)) | (A E I O U) | Once again, there is an implied `'` mark before `VOWELS` because of `SETQ`. A `'` mark is placed before `(A E I O U)`; so, the list now becomes an atom and is stored into `'VOWELS`. |

## Evaluations



<br>

# List Functions


## CAR and CDR

## CONS and REVERSE

<br>

# Arithmetic Functions

<br>

# Defining Your Own Functions

<br>

# Sample Problems

