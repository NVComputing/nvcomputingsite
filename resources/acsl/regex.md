# FSAs and Regular Expressions

## Contents
- [Introduction](#introduction)
- [Understanding FSAs](#understandingfsas)
- [Regex](#regex)
  - [Syntax](#syntax)
  - [Identities](#identities)
- [Sample Problems](#sampleproblems)

<br>

# Introduction

A *Finite State Automaton* (or just FSA) is a mathematical model of computation. A regular
expression (or RegEx for short) is the algebraic representation of an FSA.

Regular expressions are helpful when it comes to checking for certain patterns. With patterns, 
you can do many things such as specify your search criteria for something.

In ACSL, FSAs will be limited to parsing Strings.

<br>

# Understanding FSAs

In a FSA, there are *states*, which are marked as circles. Only one of these states can be 
*active*. All that really means is that the state you are currently at is "in use", and thus 
active.

The *initial state* has an arrow pointing toward it; this arrow does not stem from any other
state. The *final state* is marked as a double circle.

To go from one state to another, we have *transition rules*, which are shown as labeled edges.
Transition rules can also go from one state to itself; however, these rules may occur 0 or more
times.

Here's an example FSA that parses Strings that consist of x's and y's:

<img src="/res/acsl/regex/fsa.png" width="300"/>

Here, we have *A*, *B*, and *C* as our states. *A* is the initial state whereas *C* is the final
state. There are transition rules that exist between either two different state or a state and
itself.

To go from state A to state B, the FSA must "see" the letter *x* in the input String. Then,
when it gets to state B, there are two options. If the FSA sees an *x*, then *B* will stay as
the active state; if it sees a *y*, then the FSA will move to *C*, which becomes the new active
state. Any additional *y*(s) will keep *C* as the active state. 

Once the parse string has finished being processed, it will be deemed as **accepted** by the FSA
as long as the FSA ended at the final state.

So, the FSA above would accept *xy*, *xxy*, *xyy*, *xxxxy*, and much more. If I were to generalize
this more, I can say that the FSA above would accept any string that is composed of one or more
*x*'s followed by one or more *y*'s.

<br>

# Regex

You can create a regular expression out of an FSA, and vice versa. When it comes to regex, here
are a few things to keep in mind:

1. A null string (marked with the lambda sign, `$\lambda$`) counts as a regex.
2. If *a* and *b* are both regex, then so are the following:
    * `$ab$` - This is just *a* followed by *b*; it does not mean *and* like it would in boolean algebra. The proper term for this would be **concatenation**.
    * `$a\cup b$` or `$a\,|\,b$` - This stands for *a or b*. The proper term for this is *union*.
    * `$a*$` - This is *a* repeated 0 or more times. This is known as *closure* or the *Kleene star*.
    
As always, order of precedence still exists. It goes: Kleene star, concatenation, and then union.

Parentheses still hold the highest priority. For example, `dca*b` would produce strings like
`dcb`, `dcab`, `dcaaaab`, and so on. On the other hand, `d(ca)*b` would produce `db`, `dcab`, 
`dcacacab`, etc.

<br>

## Syntax

Specific syntax rules vary depending on the implementation, or the programming language/library
being used. The syntax rules below are more universal across all regex packages, which is why
ACSL chose to cover them. 

In the output column, commas have been used to separate possible
outputs. So, for example, `a, b` is not the literal output; `a` and `b` are the actual 
possible outputs.

| Sign | Meaning | Example | Output |
| --- | --- | --- | --- |
| `$|$` or `$\cup$` | "Or". This separates alternatives. | `$a\,|\,b$` | a, b|
| `$*$` | 0 or more times of the preceding element. | `$a*$` | a, aa, aaaaaa (etc) |
| ? | Either 0 or 1 time of the preceding element only. | colou?r | color, colour |
| + | 1 or more times of the preceding element. Not to be confused with `$*$`. | `$ab+c$` | abc, abbc, abbbbc (etc) |
| . | A wildcard; it can represent any character. | `$a.b$` | acb, a7b, agb (etc)  |
| [ ] | It matches a single character within the brackets. A range can be specified with `$-$`. | [abc] or [a-c] | a, b, c |
| [^ ] | It matches a single character **not** within the brackets. A range can be specified with `$-$`. | [^abc] | f, h, z, 2 (etc) |
| ( ) | This is used to define a sub-expression. The contents cannot be separated. As said before, these take the highest priority. | `$(ab)*$` | ab, ababab (etc) |

## Identities

It may take a bit to really understand why these identities are valid, but be sure to take your
time. It's always better to reason with the logic behind each identity so that they become
common sense rather than something you have to memorize.

| Identity | Explanation |
| --- | --- |
| `$(a*)* = a*$` | |
| `$aa* = a*a$` | |
| `$aa* \cup \lambda = a*$` | |
| `$a(b \cup c) = ab \cup ac$` | |
| `$a(ba)* = (ab)*a$` | |
| `$(a \cup b)* = (a* \cup b*)*$` | |
| `$(a \cup b)* = (a*b*)*$` | |
| `$(a \cup b)* = a*(ba*)*$` | |

<br>

# Sample Problems
