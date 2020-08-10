# FSAs and Regular Expressions

## Contents
- [Introduction](#introduction)
- [Understanding FSAs](#understandingfsas)
- [Regex](#regex)
  - [Syntax](#syntax)
  - [Identities](#identities)
- [Regex in Programming](#regexinprogramming)
- [Sample Problems](#sampleproblems)

<br>

# Introduction

A *Finite State Automaton* (or just FSA) is a mathematical model of computation. A regular
expression (or RegEx for short) is the algebraic representation of an FSA.

In less abstract terms, a regular expression is a *description for a pattern of text*.

Regular expressions are helpful when it comes to checking for certain patterns. With patterns, 
you can do many things such as complex replacing (way more powerful than Ctrl+F), extremely simple input validation, finding
specific patterns amongst extremely large amounts of data very quickly, and data extraction / parsing.
You can also write cool, unintelligible expressions like
```regex
^(?:\s*(?:=.*?=|<.*?>|\[.*?]|\(.*?\)|\{.*?})\s*)*
(?:[^\[|\](){}<>]*\s*\|\s*)?([^\[|\](){}<>]*)
(?:\s*(?:=.*?=|<.*?>|\[.*?]|\(.*?\)|\{.*?})\s*)*$
```
that are actually useful.

In ACSL, FSAs will be limited to parsing strings.

<br>

# Understanding FSAs

In a FSA, there are *states*, which are marked as circles. Only one of these states can be 
*active*. All that really means is that the state you are currently at is "in use", and thus 
active.

The *initial state* has an arrow pointing toward it from nowhere (i.e. this arrow does not come from any other
state). The *final state* is marked as a double circle.

To go from one state to another, we have *transition rules*, which are shown as labeled edges.
Transition rules can also go from one state to itself; however, these rules may occur 0 or more
times.

Here's an example FSA that parses Strings that consist of x's and y's:

![](/res/acsl/regex/fsa.png")

Here, we have *A*, *B*, and *C* as our states. *A* is the initial state whereas *C* is the final
state. There are transition rules that exist between either two different state or a state and
itself.

To go from state A to state B, the FSA must "see" the letter *x* in the input String. Then,
when it gets to state B, there are two options. If the FSA sees an *x*, then *B* will stay as
the active state; if it sees a *y*, then the FSA will move to *C*, which becomes the new active
state. Any additional *y*(s) will keep *C* as the active state. 

Once the string has been completely processed, it will be deemed as **accepted** by the FSA
as long as the FSA is at the final state.

So, the FSA above would accept *xy*, *xxy*, *xyy*, *xxxxy*, and much more. In general, the FSA above would
accept any string that is composed of one or more *x*'s followed by one or more *y*'s.

<br>

# Regex

You can create a regular expression out of an FSA, and vice versa. When it comes to regex, here
are a few things to keep in mind:

1. A null string (marked with the lambda sign, `$\lambda$`) counts as a string/character (it's just the equivalent of `""` in regular programming.)
2. If *a* and *b* are both regex, then so are the following:
    * `$ab$` - This is just *a* followed by *b*; it does not mean *and* like it would in boolean algebra. The proper term for this would be **concatenation**.
    * `$a\cup b$` or `$a\,|\,b$` - This stands for *a or b*. The proper term for this is *union*. (In almost every programming language or sensible implementation of regex, the pipe symbol `|` is used.)
    * `$a*$` - This is *a* repeated 0 or more times. This is known as *closure*, or the *Kleene star*.
    
As always, order of precedence still exists. It goes: Kleene star, concatenation, and then union.

Parentheses still hold the highest priority. For example, <code class="regex language-regex">dca*b</code> would produce strings like
`dcb`, `dcab`, `dcaaaab`, and so on. On the other hand, <code class="regex language-regex">d(ca)*b</code> would produce `db`, `dcab`, 
`dcacacab`, etc.

<br>

## Syntax

Specific syntax rules vary depending on the implementation or the programming language/library
being used. The syntax rules below are more universal across all regex packages, which is why
ACSL chose to cover them.

In regex, a string *matches* if it can be represented completely by a regex.

In the Matches column, commas have been used to separate possible
matches. So, for example, `a`, `b` is not a literal match; `a` and `b` are the actual 
possible matches.

ACSL presents these symbols in a long list; however, it is easier to understand if you classify them into different classes.

- **Tokens** - These are things that literally match a part of the string. For example, <code class="regex language-regex">a</code>
is just a token that represents the character `a`.
- **Quantifiers** - These are things that tell you how many times you can repeat the previous token.
- **Group Constructs** - For now, this is just the parenthesis <code class="regex language-regex">( )</code> and the OR operator <code class="regex language-regex">|</code> - we'll go into more detail about groups below and why they're useful.

You might've also noticed the syntax highlighting of the regex on this page.
Here's how the highlighting is done for each class: (This is in accordance with IntelliJ's Darcula theme.)

- **Tokens** - Regular, literal string tokens (like just <code class="regex language-regex">a</code>) are green.
However, special tokens, like <code class="regex language-regex">.</code>, ranges <code class="regex language-regex">[A-Za-z]</code>, and other
tokens with special meanings that aren't *match literally just what this token says*, are highlighted in yellow.
- **Quantifiers** - These are highlighted in blue.
- **Group Constructs** - The OR operator is highlighted in orange <code class="regex language-regex">|</code>, and any groups are highlighted in yellow.

Also, we'll go over the actual syntax in programming languages further down
(this is just ACSL's syntax for programming competitions - however, do note that actual regex has all the below syntax in it too.)

| Symbol | Meaning | Example | Matches | Doesn't Match |
| --- | --- | --- | --- | --- |
| <code class="regex language-regex">|</code> or `$\cup$` | "Or". This separates alternatives. | <code class="regex language-regex">a|b</code> | a, b | c |
| <code class="regex language-regex">*</code> | 0 or more times of the preceding element. | <code class="regex language-regex">a*</code> | a, aa, aaaaaa (etc) | 
| <code class="regex language-regex">?</code> | Either 0 or 1 time of the preceding element only. | <code class="regex language-regex">colou?r</code> | color, colour |
| <code class="regex language-regex">+</code> | 1 or more times of the preceding element. Not to be confused with <code class="regex language-regex">*</code>. | <code class="regex language-regex">a+h</code> | ah, aaah, aaaaaah (etc) |
| <code class="regex language-regex">.</code> | A wildcard; it can represent any character. | <code class="regex language-regex">a.b</code> | acb, a7b, a‽b (etc)  |
| <code class="regex language-regex">[ ]</code> | It matches a single character within the brackets. A range can be specified with a dash. | <code class="regex language-regex">[abc]</code> or <code class="regex language-regex">[a-c]</code> | a, b, c |
| <code class="regex language-regex">[^ ]</code> | It matches a single character **not** within the brackets. A range can be specified with a dash. | <code class="regex language-regex">[^abc]</code> or <code class="regex language-regex">[^a-c]</code> | f, h, z, 2 (etc) |
| <code class="regex language-regex">( )</code> | This is used to define a sub-expression. The contents cannot be separated. As said before, these take the highest priority. | <code class="regex language-regex">(ab)*</code> | ab, ababab (etc) |

## Identities

It may take a bit to really understand why these identities are valid, but be sure to take your
time. It's always better to reason with the logic behind each identity so that they become
common sense rather than something you have to memorize.

| Identity | Explanation |
| --- | --- |
| <code class="regex language-regex">(a*)*</code>&nbsp;=&nbsp;<code class="regex language-regex">a*</code> | <code class="regex language-regex">(a*)*</code> can print any number of *a*'s without limit. If we wanted 3 *a*'s, we could have <code class="regex language-regex">(aaa)*</code> display *aaa* one time. <code class="regex language-regex">a*</code> can also easily display *aaa*; <code class="regex language-regex">a*</code> is essentially the simplified version of <code class="regex language-regex">(a*)*</code>. |
| <code class="regex language-regex">aa*</code>&nbsp;=&nbsp;<code class="regex language-regex">a*a</code> | Let's say <code class="regex language-regex">a*</code> displayed 1 *a* for both the LH and RH expressions in this equation. <code class="regex language-regex">a*a</code> and <code class="regex language-regex">aa*</code> would both print *aa*. So, regardless of which *a* in the regex receives a <code class="regex language-regex">*</code>, the evaluation is the same. |
| <code class="regex language-regex">aa*|λ</code>&nbsp;=&nbsp;<code class="regex language-regex">a*</code> | <code class="regex language-regex">aa*</code> would display *a* 1 or more times. However, since we're saying the the String could also be null (<code class="regex language-regex">λ</code>), then we simplify this to <code class="regex language-regex">a*</code>. |
| <code class="regex language-regex">a(b|c)</code>&nbsp;=&nbsp;<code class="regex language-regex">ab|ac</code> | <code class="regex language-regex">b|c</code> means that either *b* or *c* will be displayed. *a* will definitely be displayed. So, the display may be *ab* or *ac*, which we can write down as <code class="regex language-regex">ab|ac</code>. |
| <code class="regex language-regex">a(ba)*</code>&nbsp;=&nbsp;<code class="regex language-regex">(ab)*a</code> | Let's say that the characters in the parentheses display twice. <code class="regex language-regex">a(ba)*</code> would print *ababa*, as would <code class="regex language-regex">(ab)*a</code>. The same applies if the characters in the parentheses were displayed any other amount of times. |
| <code class="regex language-regex">(a|b)*</code>&nbsp;=&nbsp;<code class="regex language-regex">(a*|b*)*</code> | <code class="regex language-regex">(a|b)*</code> would print either *a* or *b* (not both) zero or more times, which is just <code class="regex language-regex">a*</code> and <code class="regex language-regex">b*</code>. <code class="regex language-regex">(a*|b*)*</code> states that either <code class="regex language-regex">a*</code> or <code class="regex language-regex">b*</code> (again, not both) will be displayed 0 or more times. We know from a previous identity that <code class="regex language-regex">(a*)*</code> and <code class="regex language-regex">(b*)*</code> are just <code class="regex language-regex">a*</code> and <code class="regex language-regex">b*</code> respectively, which matches with what <code class="regex language-regex">(a|b)*</code> displays. |
| <code class="regex language-regex">(a|b)*</code>&nbsp;=&nbsp;<code class="regex language-regex">(a*b*)*</code> | Again, <code class="regex language-regex">(a|b)*</code> displays either <code class="regex language-regex">a*</code> or <code class="regex language-regex">b*</code>. For <code class="regex language-regex">a*</code>, <code class="regex language-regex">(a*b*)*</code> could have it so that <code class="regex language-regex">b*</code> displays *b* 0 times. The expression would simplify to <code class="regex language-regex">(a*)*</code>, or <code class="regex language-regex">(a*)</code>. A similar idea applies if we wanted <code class="regex language-regex">b*</code>. |
| <code class="regex language-regex">(a|b)*</code>&nbsp;=&nbsp;<code class="regex language-regex">a*(ba*)*</code> | <code class="regex language-regex">(a|b)*</code> displays either <code class="regex language-regex">a*</code> or <code class="regex language-regex">b*</code>. For <code class="regex language-regex">a*</code>, we could have it so that <code class="regex language-regex">(ba*)*</code> displays 0 times; we would then be left with <code class="regex language-regex">a*</code> as we wanted. For <code class="regex language-regex">b*</code>, we could have the two <code class="regex language-regex">a*</code> in the RH expression display *a* zero times. The expression would then become <code class="regex language-regex">b*</code>. |

<br>

# Regex in Programming

Much of this is adapted from [Chapter 7 of Automate the Boring Stuff](https://automatetheboringstuff.com/2e/chapter7/). Read that
for an at-length introduction into the world of regular expressions in programming (assuming you're somewhat familiar with Python syntax).
I **highly recommend** reading it if this section either goes too fast for you or you still don't understand the applications
of regular expressions.

If you don't want to bother with reading that, however, this section is basically the SparkNotes version.

Let's start with the biggest question: Why do I need to learn regex? Regex oftentimes seems like a foreign language that you
never want to touch or bother with, because you're never going to use them anyway, right?

**Wrong.** In fact, you couldn't be more wrong. Out of *everything* I have learned in the last 2 years about computer science,
the one thing I used the MOST was regex. It is incredibly useful (not just for programming), and can simplify a task
from one that takes 3000 steps to one that takes 3.

If you still don't have any interest in learning more than is absolutely needed for ACSL about regex,
you can skip this section.

So how do we use this magical tool?

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
