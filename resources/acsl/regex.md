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
you can do many things such as complex replacing (way more powerful than Ctrl+F), extremely simple input validation, finding
specific patterns amongst extremely large amounts of data very quickly, and data extraction / parsing.
You can also write cool, unintelligible expressions like
```regex
^(?:\s*(?:=.*?=|<.*?>|\[.*?]|\(.*?\)|\{.*?})\s*)*
(?:[^\[|\](){}<>]*\s*\|\s*)?([^\[|\](){}<>]*)
(?:\s*(?:=.*?=|<.*?>|\[.*?]|\(.*?\)|\{.*?})\s*)*$`
```
that are actually useful.

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
| `$(a*)* = a*$` | `$(a*)*$` can print any number of *a*'s without limit. If we wanted 3 *a*'s, we could have `$(aaa)*$` display *aaa* one time. `$a*$` can also easily display *aaa*; `$a*$` is essentially the simplified version of `$(a*)*$`. |
| `$aa* = a*a$` | Let's say `$a*$` displayed 1 *a* for both the LH and RH expressions in this equation. `$a*a$` and `$aa*$` would both print *aa*. So, regardless of which *a* in the regex receives a `$*$`, the evaluation is the same. |
| `$aa* \cup \: \lambda = a*$` | `$aa*$` would display *a* 1 or more times. However, since we're saying the the String could also be null (`$\lambda$`), then we simplify this to `$a*$`. |
| `$a(b \cup c) = ab \cup ac$` | `$b\cup c$` means that either *b* or *c* will be displayed. *a* will definitely be displayed. So, the display may be *ab* or *ac*, which we can write down as `$ab \cup ac$`. |
| `$a(ba)* = (ab)*a$` | Let's say that the characters in the parentheses display twice. `$a(ba)*$` would print *ababa*, as would `$(ab)*a$`. The same applies if the characters in the parentheses were displayed any other amount of times. |
| `$(a \cup b)* = (a* \cup \: b \: *)*$` | `$(a \cup b)*$` would print either *a* or *b* (not both) zero or more times, which is just `$a*$` and `$b*$`. `$(a* \cup \: b \: *)*$` states that either `$a*$` or `$b*$` (again, not both) will be displayed 0 or more times. We know from a previous identity that `$(a*)*$` and `$(b*)*$` are just `$a*$` and `$b*$` respectively, which matches with what `$(a \cup b)*$` displays. |
| `$(a \cup b)* = (a*b \: *)*$` | Again, `$(a \cup b)*$` displays either `$a*$` or `$b*$`. For `$a*$`, `$(a*b \: *)*$` could have it so that `$b*$` displays *b* 0 times. The expression would simplify to `$(a*)*$`, or `$(a*)$`. A similar idea applies if we wanted `$b*$`. |
| `$(a \cup b)* = a*(b\: a\:*)*$` | `$(a \cup b)*$` displays either `$a*$` or `$b*$`. For `$a*$`, we could have it so that `$(ba*)*$` displays 0 times; we would then be left with `$a*$` as we wanted. For `$b*$`, we could have the two `$a*$` in the RH expression display *a* zero times. The expression would then become `$b*$`. |

<br>

# Sample Problems

## 1. Which of the following regex are equivalent?

1. `$(a\cup b)(a\,b\,*)(b*\cup \,a)$`
2. `$(a\,a\,b*\cup \,b\,a\,b\,*)a$`
3. `$a\,a\,b*\cup \,b\,a\,b*\cup \,a\, a\, b\, a\cup b\,a\,b*a$`
4. `$a\,a\,b*\cup \,b\,a\,b*\cup \,a\, a\, b*a\cup b\, a\, b*a$`
5. `$a*\cup \, b\, *$`

First off, one choice that we can eliminate immediately is #5 because null strings are valid;
the other 4 choices will display something for sure.

Also, notice that #2 will always display an *a* at the end regardless of the union in the 
parentheses. While the other 3 choices can also display an *a* at the end, it would not display
*a* in all cases since it depends on the alternative chosen in the union(s). So, we can
eliminate #2.

We are down to #1, #3, and #4. Take a look at #3 and #4; they are, for the most part, identical.
However, their third union alternative differs; #3 has `$a\,a\,b\,a$` whereas #4 has
`$a\,a\,b*a$`. So, #3 and #4 must not be equivalent.

So, the question now is, are #1 and #3 identical? Or is it #1 and #4? What we can do is list out
what strings #1 can display. 

Here are the possible strings for #1 (// will temporarily be used to separate the values of
each sub-expression contained in parentheses):

1. `$a \;// \;a\,b* \;//\; b\,* = a\,a\,b\,*$`
2. `$a \;// \;a\,b* \;//\; a = a\,a\,b*a$`
3. `$b \;// \;a\,b* \;//\; b\,* = b\,a\,b\,*$`
4. `$b \;// \;a\,b* \;//\; a = b\,a\,b*a$`

Then, we can see if #3 and #4 can create each of those strings; if it can't create even one of
them, then it must not be identical to #1. #3 would be unable to create `$aab*a$` since it only
has `$aaba$`; so, #1 and #4 must be identical.

## 2. Which of the following strings would be accepted by the regex below? List all. 

`$a\,b\,b\,*(a \cup\,b\,*)\,a\,(b*\cup\,a\,*)$`

1. ababbaab
2. ababa
3. aaabb
4. abbbbab
5. abbaababbaa

Let's look at #1. *aba* can be displayed fine due to `$a\,b\,b\,*(a \cup\,b\,*)\,a$`. However,
*bbaab* would not be able to be produced by `$(b*\cup\,a\,*)$`. Hence, #1 would not be accepted.

A similar idea applies to #2; *ba* would not be able to be produced by `$(b*\cup\,a\,*)$`.

As for #3, it would not be valid because the string must start with *ab*.

For #4, it would be valid. `$a\,b\,b\,*(a \cup\,b\,*)\,a$` can display *abbbba*. The final *b*
can be displayed by `$(b*\cup\,a\,*)$` if `$b*$` was chosen in the union.

The last option would not be valid because *babbaa* cannot be produced by `$`$(b*\cup\,a\,*)$`.

So, only #4 would actually be accepted.

## 3. Determine what strings would be accepted by the following FSA. Make your answer general. 

<img src="/res/acsl/regex/prob3.png" width="600"/>

The fork in the FSA represents a union. If we were to take the upper "path", we would have a
string of `$10*1101*10*0$`. If we took the lower path, we'd have `$10*110*10*0$`.
Notice where they are the same and where they differ.

They both share `$10*11$` at the beginning as well as `$10*0$` at the end. The middle conflicting
portion can be written as a union in our final regex.

So, we would have `$10*11((01*)\cup\,0\,*)10*0$` as our regex.

## 4. Which of the given strings would be accepted by the following FSA?

<img src="/res/acsl/regex/prob4.png" width="600"/>

1. `$a(ba*aba\cup aba)\cup (aba*b)$`
2. `$a(ba*a(ba\cup ab)a)\cup aba*ab$`
3. `$a[(ba*a(ba\cup ab)a)\cup (aba*ab)]$`
4. `$a[(ba*aba\cup aba)\cup aba*ab]$`
5. None of the above

For this problem, it would be easier to analyze the FSA rather than looking at the strings
one by one. In this FSA, there are two unions that we would have to keep in mind. 

Regardless of what "path" is taken, *a* would always start the string. Now, we have a union; we
can analyze the two subpaths separately. The upper path would produce either `$ba*abaa$` or 
`$ba*aaba$`; we can write this as `$ba*a(ab\cup ba)a$`. 

The lower path would produce `$aba*ab$`.

Now, we can put these together to get our overall regex of `$a[(ba*a(ab\cup ba)a)\cup (aba*ab)]$`. 
Note how many parentheses were used to clarify what the different union alternatives are. This
regex matches what is written for #3; hence, #3 is our answer.

---
Author: Kelly Hong
