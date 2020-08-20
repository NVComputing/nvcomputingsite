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
(?:[^\[|\](){}<>=]*\s*\|\s*)?([^\[|\](){}<>=]*)
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
    * `$a*$` - This is *a* repeated 0 or more times. This is known as *closure*, or the *Kleene star* (named after Stephen Cole Kleene, the computer scientist who invented regular expressions and helped establish recursion theory).

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

### Tokens

| Symbol | Meaning | Example | Matches | Doesn't Match |
| --- | --- | --- | --- | --- |
| <code class="regex language-regex">.</code> | A wildcard; it can represent any character. | <code class="regex language-regex">a.b</code> | `acb`, `a7b`, `a‽b` | `ab`, `accb` |
| <code class="regex language-regex">[ ]</code> | It matches a single character within the brackets. A range can be specified with a dash. | <code class="regex language-regex">[abc]</code> or <code class="regex language-regex">[a-c]</code> | `a`, `b`, `c` | `abc`, `d` |
| <code class="regex language-regex">[^ ]</code> | It matches a single character **not** within the brackets. A range can be specified with a dash. | <code class="regex language-regex">[^abc]</code> or <code class="regex language-regex">[^a-c]</code> | `f`, `h`, `z`, `2` | `a`, `b`, `c`, `fz` |

### Quantifiers

| Symbol | Meaning | Example | Matches | Doesn't Match |
| --- | --- | --- | --- | --- |
| <code class="regex language-regex">*</code> | This matches the preceding token **0 or more** times. | <code class="regex language-regex">ba*</code> | `b` `ba`, `baa`, `baaaaaa` | `bbaa`, `aaa` |
| <code class="regex language-regex">?</code> | This matches the preceding token **0 or 1** times (basically, makes the previous token *optional*). | <code class="regex language-regex">colou?r</code> | `color`, `colour` | `coloer` |
| <code class="regex language-regex">+</code> | This matches the preceding token **1 or more** times. Not to be confused with <code class="regex language-regex">*</code> - this requires at least one of the preceding token. | <code class="regex language-regex">a+h</code> | `ah`, `aaah`, `aaaaaah` (etc) | `h`, `aaahh` |

### Group Constructs

| Symbol | Meaning | Example | Matches | Doesn't Match |
| --- | --- | --- | --- | --- |
| <code class="regex language-regex">|</code> or `$\cup$` | "Or". This separates alternatives. Notably, ACSL prefers the `$\cup$` syntax. Also, note that parenthesis are not required to group this specific operator - it tells the regular expression to either match *everything to the left of it* or *everything to the right of it*. To limit its scope, you need to use parentheses to group it. If you want more options, just add more pipe operators (<code class="regex language-regex">a|b|c</code> matches a, b, and c). | <code class="regex language-regex">dog|cat</code> | `dog`, `cat` | `dogat`, `docat` |
| <code class="regex language-regex">( )</code> | This is used to define a sub-expression. The contents cannot be separated. As said before, these take the highest priority. | <code class="regex language-regex">(ab)+</code> | `ab`, `abab`, `ababab` | `aabb` |

### Other Syntax Notes

Quantifiers, for obvious reasons, can *only follow tokens.* You cannot put a quantifier directly behind another quantifier (something like `a**`)
(well, technically you can - <code class="regex language-regex">a*?</code> is what's called a *lazy quantifier*, and
<code class="regex language-regex">a*+</code> is what's called a *possessive quantifier* in some flavors of regex. However,
for all ACSL purposes, you can't put a quantifier behind another quantifier.)

## Identities

It may take a bit to really understand why these identities are valid, but be sure to take your
time. It's always better to reason with the logic behind each identity so that they become
common sense rather than something you have to memorize.

Although frankly, for most of these identities, they won't be any use at all. Just use these to get the hang of
how regex works (treat them like practice for understanding regex logic). Don't even bother trying to memorize them.

| Identity | Explanation |
| --- | --- |
| <code class="regex language-regex">(a*)*</code>&nbsp;=&nbsp;<code class="regex language-regex">a*</code> | One means "0 or more `a`s", and the other means "0 or more `a`s 0 or more times". So basically, they both just say "print as many `a`s as you want". <code class="regex language-regex">a*</code> is essentially the simplified version of <code class="regex language-regex">(a*)*</code>. |
| <code class="regex language-regex">aa*</code>&nbsp;=&nbsp;<code class="regex language-regex">a*a</code> | Let's say <code class="regex language-regex">a*</code> displayed 1 *a* for both the LH and RH expressions in this equation. <code class="regex language-regex">a*a</code> and <code class="regex language-regex">aa*</code> would both print *aa*. So, regardless of which *a* in the regex receives a <code class="regex language-regex">*</code>, the evaluation is the same (note that these are both also equivalent to <code class="regex language-regex">a+</code>). |
| <code class="regex language-regex">aa*|λ</code>&nbsp;=&nbsp;<code class="regex language-regex">a*</code> | <code class="regex language-regex">aa*</code> would display *a* 1 or more times. However, since we're saying the the String could also be null (<code class="regex language-regex">λ</code>), then we simplify this to <code class="regex language-regex">a*</code>. (I don't know what ACSL has against <code class="regex language-regex">a+</code>, but they just never use it for some reason, and use <code class="regex language-regex">aa*</code> instead. Weird.) |
| <code class="regex language-regex">a(b|c)</code>&nbsp;=&nbsp;<code class="regex language-regex">ab|ac</code> | <code class="regex language-regex">b|c</code> means that either *b* or *c* will be displayed. *a* will definitely be displayed. So, the display may be *ab* or *ac*, which we can write down as <code class="regex language-regex">ab|ac</code>. |
| <code class="regex language-regex">a(ba)*</code>&nbsp;=&nbsp;<code class="regex language-regex">(ab)*a</code> | Let's say that the characters in the parentheses display twice. <code class="regex language-regex">a(ba)*</code> would print *ababa*, as would <code class="regex language-regex">(ab)*a</code>. The same applies if the characters in the parentheses were displayed any other amount of times. (This isn't a very useful property. I'm not sure why ACSL chose to show it.) |
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

Let's start with the biggest question: **Why do I need to learn regex?**<br> Regex oftentimes seems like a foreign language that you
never want to touch or bother with, because you're never going to use them anyway, right?

**Wrong.** In fact, you couldn't be more wrong. Out of *everything* I have learned in the last 2 years about computer science,
the one thing I used the MOST was regex. It is incredibly useful (not just for programming). Knowing regex can simplify a task
from manually editing 500,000 database entries to writing one find-and-replace command.

This quote from Automate the Boring Stuff sums it up pretty well:

"Regular expressions are helpful, but few non-programmers know about them even though most modern text editors and word processors, such as Microsoft Word or OpenOffice, have find and find-and-replace features that can search based on regular expressions. Regular expressions are huge time-savers, not just for software users but also for programmers."

If you still don't have any interest in learning more than is absolutely needed for ACSL about regex,
you can skip this section.

### [Skip this section](#sampleproblems)

---

Regex is very, *very* useful. Don't believe me?

## Example Use

Let's say you have a field in a website. You want to check if what's in that field is a valid phone number - you don't want
to call an invalid phone number like "chicken" and have your program crash.

We're just going to do a simplified version of this, with a single string we're checking to see if it's a phone number.

The format is going to be predefined as xxx-xxx-xxxx (something like 123-456-7890).

### Without Regex

Let's try writing a solution for this without regex in Java.

First, we know that the phone number is going to be 12 characters long.

We'll check every individual location to see if it's a number or a dash.

```java
public static boolean isPhoneNumber(String str) {
    String numbers = "1234567890";

    if(str.length() != 12) {
        return false;
    }
    if (!str.substring(3, 4).equals("-") || !str.substring(7, 8).equals("-")) {
        return false;
    }

    for(int i = 0; i < 3; i++) {
        if(!numbers.contains(str.substring(i, i + 1))) {
            return false;
        }
    }
    for(int i = 4; i < 7; i++) {
        if(!numbers.contains(str.substring(i, i + 1))) {
            return false;
        }
    }
    for(int i = 8; i < 12; i++) {
        if(!numbers.contains(str.substring(i, i + 1))) {
            return false;
        }
    }
    return true;
}
```

This is very, *very* painful code, not only to write, but also to debug or expand to other number formats.
(Imagine having to do this with (xxx)xxx-xxxx).

It becomes even more painful when you look at the regex solution.

```java
public static boolean isPhoneNumber(String str) {
    return str.matches("\\d{3}-\\d{3}-\\d{4}");
}
```

Yep. One line. It does the exact same thing.

This regex - <code class="regex language-regex">\d{3}-\d{3}-\d{4}</code> - does EXACTLY the same check in one line (the backslashes are doubled because
you have to escape them in Java, because there are no raw string literals where you don't have to escape backslashes,
because [JEP 326 for Java 12 was rejected](https://openjdk.java.net/jeps/326) because the Java developers think somehow
two backslashes for every single regex delimiter and FOUR BACKSLASHES to match a single literal backslash in regex
doesn't cause [Leaning Toothpick Syndrome](https://en.wikipedia.org/wiki/Leaning_toothpick_syndrome) and force you
to destroy your code readability by double escaping everything in regex - this is why I use Python instead
no I'm not salty at all don't @ me.)

---
Now you might be wondering: What's that <code class="regex language-regex">\d</code> symbol? Why are there *curly brackets*?

To answer that, we'll need to delve into the actual syntax.

## Syntax

All the syntax ACSL uses is preserved in actual regex, but actual regex has a much richer set of features.

Let's split these symbols again, by their types. I'll be doing a more abbreviated version here with only the most common symbols
(that I've found to be more than enough for everyday use) - you can find the full set of regex syntax in various reference
sheets online.

Quick reminder of the types:

- **Tokens** - These are things that literally match a part of the string. For example, <code class="regex language-regex">a</code> is just a token that represents the character `a`.
- **Quantifiers** - These are things that tell you how many times you can repeat the previous token.
- **Group Constructs** - This includes parenthesis <code class="regex language-regex">()</code>, capturing groups, non-capturing groups, alternation (<code class="regex language-regex">|</code>), and other
constructs that help you manage specific locations in your regex / form some sort of groups. I'll tell you more about capturing groups a bit further down.

And a few more notes:

- Like mentioned above, Java requires double-escapes for every backslash inside a string (so they're not interpreted incorrectly.)
So think of every pair of two backslashes in your Java string as one backslash in your regex string. (Yes, this means matching a literal
backslash in Java regex requires `\\\\`.)
- Syntax varies *slightly* depending on the *flavor* of regex - the regex expressions that follow will mostly be **PERL flavor** (this is the one that most programming languages, Java and Python included, use.)
- Anything that isn't listed as special here is a literal token.
- If you want to enter something in regex that's a special character, but you want it to be interpreted as literal, escape it with a `\` (i.e. <code class="regex language-regex">\.</code> matches a literal `.`)

### Tokens

| Symbol | Meaning | Example | Matches | Doesn't Match |
| --- | --- | --- | --- | --- |
| <code class="regex language-regex">.</code> | A wildcard; it can match one of any character (may or may not match line breaks, depending on regex string settings - usually will not) | <code class="regex language-regex">a.b</code> | `acb`, `a7b`, `a‽b` | `ab`, `accb` |
| <code class="regex language-regex">[ ]</code> | A *character class* - it matches a single character within the brackets. A range can be specified with a dash. | <code class="regex language-regex">[abc]</code> or <code class="regex language-regex">[a-c]</code> | `a`, `b`, `c` | `abc`, `d` |
| <code class="regex language-regex">[^ ]</code> | It matches a single character **not** within the brackets. A range can be specified with a dash. | <code class="regex language-regex">[^abc]</code> or <code class="regex language-regex">[^a-c]</code> | `f`, `h`, `z`, `2` | `a`, `b`, `c`, `fz` |
| <code class="regex language-regex">\d</code> | Matches a single digit from 0 to 9. Equivalent to <code class="regex language-regex">[0-9]</code>. | <code class="regex language-regex">-?\d</code> | `-1`, `5`, `3` | `-25`, `-a`, `b` |
| <code class="regex language-regex">\w</code> | Matches a single alphanumeric character ("word" character, hence the w). This means 0-9, a-z, A-Z, and underscores (basically anything you can put in a Minecraft username). Equivalent to <code class="regex language-regex">[a-zA-Z0-9_]</code>. | <code class="regex language-regex">\w{3,16}</code> | Any valid Minecraft username | `a a a a a`, `mince^raft` |
| <code class="regex language-regex">\s</code> | Matches a single whitespace character (tab, space, carriage return, new line, vertical tab, form feed (yes all of these are characters lol)). Especially useful for handling any wacky spacing in input with a <code class="regex language-regex">\s*</code> | <code class="regex language-regex">Hello\s+there!</code> | `Hello there!`, `Hello(\n)there!`, `Hello(tab tab tab)there!` |  `Hellosthere!` |
| <code class="regex language-regex">\D</code> | Matches a single character that DOESN'T match <code class="regex language-regex">\d</code> (isn't a digit from 0 to 9). (Opposite of <code class="regex language-regex">\d</code>, basically.) |
| <code class="regex language-regex">\W</code> | Opposite of <code class="regex language-regex">\w</code>. |
| <code class="regex language-regex">\S</code> | Opposite of <code class="regex language-regex">\s</code>. |
| <code class="regex language-regex">\b</code> | A word boundary. Matches, without actually taking up any characters in the match, immediately between a character that matches <code class="regex language-regex">\w</code> and one that doesn't. Especially useful in conjunction with capturing groups (more details below, because this is incredibly hard to show using matches). | Usage Below | 
| <code class="regex language-regex">\B</code> | Opposite of <code class="regex language-regex">\b</code> - matches, without actually taking up any characters in the match, immediately between two characters that match <code class="regex language-regex">\w</code>. |

### Quantifiers

# Sample Problems

## 1. Which of the following regexes are equivalent?

1. <code class="regex language-regex">(a|b)(ab*)(b*|a)</code>
2. <code class="regex language-regex">(aab*|bab*)a</code>
3. <code class="regex language-regex">aab*|bab*|aaba|bab*a</code>
4. <code class="regex language-regex">aab*|bab*|aab*a|bab*a</code>
5. <code class="regex language-regex">a*|b*</code>

First off, one choice that we can eliminate immediately is #5 because null strings `λ` are valid matches;
the other 4 choices don't accept `λ` as a match.

Also, notice that #2 will always display an `a` at the end regardless of the OR in the
parentheses. The other 3 choices don't have to display an `a` at the end (they can, but they don't *have* to).
So, we can eliminate #2.

We are now down to #1, #3, and #4. Take a look at #3 and #4; they are, for the most part, identical.
However, their third OR alternative differs; #3 has `$a\,a\,b\,a$` whereas #4 has
`$a\,a\,b*a$`. So, #3 and #4 must not be equivalent.

So, the question now is, are #1 and #3 identical? Or is it #1 and #4? What we can do is list out
what strings #1 can display.

Here are the possible strings for #1 (we'll use a table to separate each subexpression).
| 1 | 2 | 3 | Final Result |
| --- | --- | --- | --- |
| <code class="regex language-regex">(a)</code> | <code class="regex language-regex">(ab*)</code> | <code class="regex language-regex">(b*)</code> | <code class="regex language-regex">aab*</code> |
| <code class="regex language-regex">(a)</code> | <code class="regex language-regex">(ab*)</code> | <code class="regex language-regex">(a)</code> | <code class="regex language-regex">aab*a</code> |
| <code class="regex language-regex">(b)</code> | <code class="regex language-regex">(ab*)</code> | <code class="regex language-regex">(b*)</code> | <code class="regex language-regex">bab*</code> |
| <code class="regex language-regex">(b)</code> | <code class="regex language-regex">(ab*)</code> | <code class="regex language-regex">(a)</code> | <code class="regex language-regex">bab*a</code> |

Then, we can see if #3 and #4 can create each of those strings; if it can't create even one of
them, then it must not be identical to #1. #3 would be unable to create `$aab*a$` since it only
has `$aaba$`; so, #1 and #4 must be identical.

## 2. Which of the following strings would be accepted / matched by the regex below? List all correct answers.

<code class="regex language-regex">abb*(a|b*)a(b*|a*)</code>

1. `ababbaab`
2. `ababa`
3. `aaabb`
4. `abbbbab`
5. `abbaababbaa`

We can do this by just looking at all 5 of the strings.

Let's look at #1. <code class="regex language-regex">abb*(a|b*)a</code> can match `aba` just fine. However,
<code class="regex language-regex">(b*|a*)</code>, which
produces only `a`s or only `b`s, cannot match `bbaab`. Hence, #1 doesn't match.

A similar idea applies to #2; <code class="regex language-regex">(b*|a*)</code> cannot match `ba`.

As for #3, it doesn't match because the string must start with `ab`.

For #4, it would match. <code class="regex language-regex">abb*(a|b*)a</code> can display `abbbba`. The final `b`
can be displayed by <code class="regex language-regex">(b*|a*)</code>, so #4 matches.

The last option would not be valid because `babbaa` cannot be produced by <code class="regex language-regex">(b*|a*)</code>.

So, only #4 would actually be accepted.

Another (probably better) way to do this problem would be to translate the regex into plain English and do it intuitively.
This particular regex means:

| Regex | English |
| --- | --- |
| <code class="regex language-regex">abb*</code> | Matches `ab` literally, followed by `b` 0 or more times |
| <code class="regex language-regex">(a|b*)</code> | Matches either `a` literally or `b` 0 or more times. We can simplify this into just an <code class="regex language-regex">a?</code> because we know <code class="regex language-regex">b*b*</code> (if we choose 2nd option) is just <code class="regex language-regex">b*</code>, meaning that this part matcher either `a` or nothing. |
| <code class="regex language-regex">a</code> | Matches `a` literally |
| <code class="regex language-regex">(b*|a*)</code> | Matches either `a` 0 or more times or `b` 0 or more times |

Then we can compare our plain-English description against the different strings, in left-to-right order.

Here is a brief description of how you might do this intuitively:

| String | Explanation |
| --- | --- |
| `ababbaab` | `ab` literally, `b` must be 0 times, don't match optional `a` (to avoid failing next part), `a` literally, last part can't match remaining `bbaab` |
| `ababa` | `ab` literally, `b` must be 0 times, don't match optional `a` (to avoid failing next part), `a` literally, last part can't match remaining `ba` |
| `aaabb` | can't match `ab` literally |
| `abbbbab` | `ab` literally, `b` 3 times, don't match optional `a` (to avoid failing next part), `a` literally, last part matches remaining `b`  |
| `abbaababbaa` | `ab` literally, `b` 1 time, match optional `a`, `a` literally, last part can't match remaining `babbaa` |

## 3. Determine what strings would be accepted by the following FSA. Make your answer general. (So basically, give us a regular expression.)

<img src="/res/acsl/regex/prob3.png" class="img-fluid" />

The fork in the FSA represents a union. If we were to take the upper "path", we would have a
string of <code class="regex language-regex">10*1101*10*0</code>. If we took the lower path, we'd have <code class="regex language-regex">10*110*10*0</code>.
Notice where they are the same and where they differ.

They both share <code class="regex language-regex">10*11</code> at the beginning as well as <code class="regex language-regex">10*0</code> at the end. The middle conflicting
portion can be written as a union in our final regex.

So, we would have <code class="regex language-regex">10*11((01*)|0*)10*0</code> as our regex.

## 4. Which of the given strings would be accepted by the following FSA?

<img src="/res/acsl/regex/prob4.png" class="img-fluid" />

1. <code class="regex language-regex">a(ba*aba|aba)|(aba*b)</code>
2. <code class="regex language-regex">a(ba*a(ba|ab)a)|aba*ab</code>
3. <code class="regex language-regex">a((ba*a(ba|ab)a)|(aba*ab))</code>
4. <code class="regex language-regex">a((ba*aba|aba)|aba*ab)</code>
5. None of the above

For this problem, it would be easier to analyze the FSA rather than looking at the strings
one by one. In this FSA, there are two unions that we would have to keep in mind.

Regardless of what "path" is taken, *a* would always start the string. Now, we have a union; we
can analyze the two subpaths separately. The upper path would produce either <code class="regex language-regex">ba*abaa</code> or
<code class="regex language-regex">ba*aaba</code>; we can write this as <code class="regex language-regex">ba*a(ab|ba)a</code>.

The lower path would produce <code class="regex language-regex">aba*ab</code>.

Now, we can put these together to get our overall regex of <code class="regex language-regex">a((ba*a(ab|ba)a)|(aba*ab))</code>.
Note how many parentheses were used to clarify what the different union alternatives are. This
regex matches what is written for #3; hence, #3 is our answer.

---
Authors: Kelly Hong, Raymond Zhao
