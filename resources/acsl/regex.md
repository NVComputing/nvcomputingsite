# FSAs and Regular Expressions

## Contents
- [Introduction](#introduction)
- [Understanding FSAs](#understandingfsas)
- [Regex](#regex)
  - [Syntax](#syntax)
  - [Identities](#identities)
- [Regex in Programming](#regexinprogramming)
- [Sample Problems](#sampleproblems)

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

<img src="/res/acsl/regex/fsa.png" class="img-fluid"/>

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

# Regex

You can create a regular expression out of an FSA, and vice versa. When it comes to regex, here
are a few things to keep in mind:

1. A null string (marked with the lambda sign, `$\lambda$`) counts as a string/character (it's just the equivalent of `""` in regular programming.)
2. If *a* and *b* are both regex, then so are the following:
    * `$ab$` - This is just *a* followed by *b*; it does not mean *and* like it would in boolean algebra. The proper term for this would be **concatenation**.
    * `$a\cup b$` or `$a\,|\,b$` - This stands for *a or b*. The proper term for this is *union*. (In almost every programming language or sensible implementation of regex, the pipe symbol `|` is used.)
    * `$a*$` - This is *a* repeated `$0$`  or more times. This is known as *closure*, or the *Kleene star* (named after Stephen Cole Kleene, the computer scientist who invented regular expressions and helped establish recursion theory).

As always, order of precedence still exists. It goes: Kleene star, concatenation, and then union.

Parentheses still hold the highest priority. For example, `/dca*b/` would produce strings like
`dcb`, `dcab`, `dcaaaab`, and so on. On the other hand, `/d(ca)*b/` would produce `db`, `dcab`,
`dcacacab`, etc.

## Syntax

Specific syntax rules vary depending on the implementation or the programming language/library
being used. The syntax rules below are more universal across all regex packages, which is why
ACSL chose to cover them.

In regex, a string *matches* if it can be represented completely by a regex.

In the Matches column, commas have been used to separate possible
matches. So, for example, `a`, `b` is not a literal match; `a` and `b` are the actual 
possible matches.

ACSL presents these symbols in a long list; however, it is easier to understand if you classify them into different classes.

- **Tokens** - These are things that literally match a part of the string. For example, `/a/`
is just a token that represents the character `a`.
- **Quantifiers** - These are things that tell you how many times you can repeat the previous token.
- **Group Constructs** - For now, this is just the parenthesis `/( )/` and the OR operator `/|/` - we'll go into more detail about groups below and why they're useful.

You might've also noticed the syntax highlighting of the regex on this page.
Here's how the highlighting is done for each class: (This is in accordance with IntelliJ's Darcula theme.)

- **Tokens** - Regular, literal string tokens (like just `/a/`) are green.
However, special tokens, like `/./`, ranges `/[A-Za-z]/`, and other
tokens with special meanings that aren't *match literally just what this token says*, are highlighted in yellow.
- **Quantifiers** - These are highlighted in blue.
- **Group Constructs** - The OR operator is highlighted in orange `/|/`, and any groups are highlighted in yellow.

Also, we'll go over the actual syntax in programming languages further down
(this is just ACSL's syntax for programming competitions - however, do note that actual regex has all the below syntax in it too.)

### Tokens

| Symbol | Meaning | Example | Matches | Doesn't Match |
| --- | --- | --- | --- | --- |
| `/./` | A wildcard; it can represent any character. | `/a.b/` | `acb`, `a7b`, `a‽b` | `ab`, `accb` |
| `/[ ]/` | It matches a single character within the brackets. A range can be specified with a dash. | `/[abc]/` or `/[a-c]/` | `a`, `b`, `c` | `abc`, `d` |
| `/[^ ]/` | It matches a single character **not** within the brackets. A range can be specified with a dash. | `/[^abc]/` or `/[^a-c]/` | `f`, `h`, `z`, `2` | `a`, `b`, `c`, `fz` |

### Quantifiers

| Symbol | Meaning | Example | Matches | Doesn't Match |
| --- | --- | --- | --- | --- |
| `/*/` | This matches the preceding token **`$0$` or more** times. | `/ba*/` | `b` `ba`, `baa`, `baaaaaa` | `bbaa`, `aaa` |
| `/?/` | This matches the preceding token **`$0$`  or 1** times (basically, makes the previous token *optional*). | `/colou?r/` | `color`, `colour` | `coloer` |
| `/+/` | This matches the preceding token **1 or more** times. Not to be confused with `/*/` - this requires at least one of the preceding token. | `/a+h/` | `ah`, `aaah`, `aaaaaah` (etc) | `h`, `aaahh` |

### Group Constructs

| Symbol | Meaning | Example | Matches | Doesn't Match |
| --- | --- | --- | --- | --- |
| `/|/` or `$\cup$` | "Or". This separates alternatives. Notably, ACSL prefers the `$\cup$` syntax. Also, note that parenthesis are not required to group this specific operator - it tells the regular expression to either match *everything to the left of it* or *everything to the right of it*. To limit its scope, you need to use parentheses to group it. If you want more options, just add more pipe operators (`/a|b|c/` matches a, b, and c). | `/dog|cat/` | `dog`, `cat` | `dogat`, `docat` |
| `/( )/` | This is used to define a sub-expression. The contents cannot be separated. As said before, these take the highest priority. | `/(ab)+/` | `ab`, `abab`, `ababab` | `aabb` |

### Other Syntax Notes

Quantifiers, for obvious reasons, can *only follow tokens.* You cannot put a quantifier directly behind another quantifier (something like `a**`)
(well, technically you can - `/a*?/` is what's called a *lazy quantifier*, and
`/a*+/` is what's called a *possessive quantifier* in some flavors of regex. However,
for all ACSL purposes, you can't put a quantifier behind another quantifier.)

## Identities

It may take a bit to really understand why these identities are valid, but be sure to take your
time. It's always better to reason with the logic behind each identity so that they become
common sense rather than something you have to memorize.

Although frankly, for most of these identities, memorizing them won't be much use at all. Just use these to get the hang of
how regex works (treat them like practice for understanding regex logic). Don't even bother trying to memorize them.

| Identity | Explanation |
| --- | --- |
| `/(a*)*/`&nbsp;=&nbsp;`/a*/` | One means "0 or more `a`s", and the other means "0 or more `a`s 0 or more times". So basically, they both just say "print as many `a`s as you want". `/a*/` is essentially the simplified version of `/(a*)*/`. |
| `/aa*/`&nbsp;=&nbsp;`/a*a/` | Let's say `/a*/` displayed 1 *a* for both the LH and RH expressions in this equation. `/a*a/` and `/aa*/` would both print *aa*. So, regardless of which *a* in the regex receives a `/*/`, the evaluation is the same (note that these are both also equivalent to `/a+/`). |
| `/aa*|λ/`&nbsp;=&nbsp;`/a*/` | `/aa*/` would display *a* 1 or more times. However, since we're saying the the String could also be null (`/λ/`), then we simplify this to `/a*/`. (I don't know what ACSL has against `/a+/`, but they just never use it for some reason, and use `/aa*/` instead. Weird.) |
| `/a(b|c)/`&nbsp;=&nbsp;`/ab|ac/` | `/b|c/` means that either *b* or *c* will be displayed. *a* will definitely be displayed. So, the display may be *ab* or *ac*, which we can write down as `/ab|ac/`. |
| `/a(ba)*/`&nbsp;=&nbsp;`/(ab)*a/` | Let's say that the characters in the parentheses display twice. `/a(ba)*/` would print *ababa*, as would `/(ab)*a/`. The same applies if the characters in the parentheses were displayed any other amount of times. (This isn't a very useful property. I'm not sure why ACSL chose to show it.) |
| `/(a|b)*/`&nbsp;=&nbsp;`/(a*|b*)*/` | `/(a|b)*/` would print either *a* or *b* (not both) zero or more times, which is just `/a*/` and `/b*/`. `/(a*|b*)*/` states that either `/a*/` or `/b*/` (again, not both) will be displayed 0 or more times. We know from a previous identity that `/(a*)*/` and `/(b*)*/` are just `/a*/` and `/b*/` respectively, which matches with what `/(a|b)*/` displays. |
| `/(a|b)*/`&nbsp;=&nbsp;`/(a*b*)*/` | Again, `/(a|b)*/` displays either `/a*/` or `/b*/`. For `/a*/`, `/(a*b*)*/` could have it so that `/b*/` displays *b* 0 times. The expression would simplify to `/(a*)*/`, or `/(a*)/`. A similar idea applies if we wanted `/b*/`. |
| `/(a|b)*/`&nbsp;=&nbsp;`/a*(ba*)*/` | `/(a|b)*/` displays either `/a*/` or `/b*/`. For `/a*/`, we could have it so that `/(ba*)*/` displays 0 times; we would then be left with `/a*/` as we wanted. For `/b*/`, we could have the two `/a*/` in the RH expression display *a* zero times. The expression would then become `/b*/`. |

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

This regex - `/\d{3}-\d{3}-\d{4}/` - does EXACTLY the same check in one line (the backslashes are doubled because
you have to escape them in Java, because there are no raw string literals where you don't have to escape backslashes,
because [JEP 326 for Java 12 was rejected](https://openjdk.java.net/jeps/326) because the Java developers think somehow
two backslashes for every single regex delimiter and FOUR BACKSLASHES to match a single literal backslash in regex
doesn't cause [Leaning Toothpick Syndrome](https://en.wikipedia.org/wiki/Leaning_toothpick_syndrome) and force you
to destroy your code readability by double escaping everything in regex - this is why I use Python instead
no I'm not salty at all don't @ me.)

---
Now you might be wondering: What's that `/\d/` symbol? Why are there *curly brackets*?

To answer that, we'll need to delve into the actual syntax.

## Syntax

All the syntax ACSL uses is preserved in actual regex, but actual regex has a much richer set of features.

Let's split these symbols again, by their types. I'll be doing a more abbreviated version here with only the most common symbols
(that I've found to be more than enough for everyday use) - you can find the full set of regex syntax in various reference
sheets online.

Quick reminder of the types:

- **Tokens** - These are things that literally match a part of the string. For example, `/a/` is just a token that represents the character `a`.
- **Quantifiers** - These are things that tell you how many times you can repeat the previous token.
- **Group Constructs** - This includes parenthesis `/()/`, capturing groups, non-capturing groups, alternation (`/|/`), and other
constructs that help you manage specific locations in your regex / form some sort of groups. I'll tell you more about capturing groups a bit further down.

And a few more notes:

- Like mentioned above, Java requires double-escapes for every backslash inside a string (so they're not interpreted incorrectly.)
So think of every pair of two backslashes in your Java string as one backslash in your regex string. (Yes, this means matching a literal
backslash in Java regex requires `\\\\`.)
- Syntax varies *slightly* depending on the *flavor* of regex - the regex expressions that follow will mostly be **PERL flavor** (this is the one that most programming languages, Java and Python included, use.)
- Anything that isn't listed as special here is a literal token.
- If you want to enter something in regex that's a special character, but you want it to be interpreted as literal, escape it with a `\` (i.e. `/\./` matches a literal `.`)

### Tokens

| Symbol | Meaning | Example | Matches | Doesn't Match |
| --- | --- | --- | --- | --- |
| `/./` | A wildcard; it can match one of any character (may or may not match line breaks, depending on regex string settings - usually will not) | `/a.b/` | `acb`, `a7b`, `a‽b` | `ab`, `accb` |
| `/[ ]/` | A *character class* - it matches a single character within the brackets. A range can be specified with a dash. | `/[abc]/` or `/[a-c]/` | `a`, `b`, `c` | `abc`, `d` |
| `/[^ ]/` | It matches a single character **not** within the brackets. A range can be specified with a dash. | `/[^abc]/` or `/[^a-c]/` | `f`, `h`, `z`, `2` | `a`, `b`, `c`, `fz` |
| `/\d/` | Matches a single digit from 0 to 9. Equivalent to `/[0-9]/`. | `/-?\d/` | `-1`, `5`, `3` | `-25`, `-a`, `b` |
| `/\w/` | Matches a single alphanumeric character ("word" character, hence the w). This means 0-9, a-z, A-Z, and underscores (basically anything you can put in a Minecraft username). Equivalent to `/[a-zA-Z0-9_]/`. | `/\w{3,16}/` | Any valid Minecraft username | `a a a a a`, `mince^raft` |
| `/\s/` | Matches a single whitespace character (tab, space, carriage return, new line, vertical tab, form feed (yes all of these are characters lol)). Especially useful for handling any wacky spacing in input with a `/\s*/` | `/Hello\s+there!/` | `Hello there!`, `Hello(\n)there!`, `Hello(tab tab tab)there!` |  `Hellosthere!` |
| `/\D/` | Matches a single character that DOESN'T match `/\d/` (isn't a digit from 0 to 9). (Opposite of `/\d/`, basically.) |
| `/\W/` | Opposite of `/\w/`. |
| `/\S/` | Opposite of `/\s/`. |
| `/\b/` | A word boundary. Matches, without actually taking up any characters in the match, immediately between a character that matches `/\w/` and one that doesn't. Especially useful in conjunction with capturing groups (more details below, because this is incredibly hard to show using matches). | Usage Below | 
| `/\B/` | Opposite of `/\b/` - matches, without actually taking up any characters in the match, immediately between two characters that match `/\w/`. |

### Quantifiers

# Sample Problems

## 1. Which of the following regexes are equivalent?

1. `/(a|b)(ab*)(b*|a)/`
2. `/(aab*|bab*)a/`
3. `/aab*|bab*|aaba|bab*a/`
4. `/aab*|bab*|aab*a|bab*a/`
5. `/a*|b*/`

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
| `/(a)/` | `/(ab*)/` | `/(b*)/` | `/aab*/` |
| `/(a)/` | `/(ab*)/` | `/(a)/` | `/aab*a/` |
| `/(b)/` | `/(ab*)/` | `/(b*)/` | `/bab*/` |
| `/(b)/` | `/(ab*)/` | `/(a)/` | `/bab*a/` |

Then, we can see if #3 and #4 can create each of those strings; if it can't create even one of
them, then it must not be identical to #1. #3 would be unable to create `$aab*a$` since it only
has `$aaba$`; so, #1 and #4 must be identical.

## 2. Which of the following strings would be accepted / matched by the regex below? List all correct answers.

`/abb*(a|b*)a(b*|a*)/`

1. `ababbaab`
2. `ababa`
3. `aaabb`
4. `abbbbab`
5. `abbaababbaa`

We can do this by just looking at all 5 of the strings.

Let's look at #1. `/abb*(a|b*)a/` can match `aba` just fine. However,
`/(b*|a*)/`, which
produces only `a`s or only `b`s, cannot match `bbaab`. Hence, #1 doesn't match.

A similar idea applies to #2; `/(b*|a*)/` cannot match `ba`.

As for #3, it doesn't match because the string must start with `ab`.

For #4, it would match. `/abb*(a|b*)a/` can display `abbbba`. The final `b`
can be displayed by `/(b*|a*)/`, so #4 matches.

The last option would not be valid because `babbaa` cannot be produced by `/(b*|a*)/`.

So, only #4 would actually be accepted.

Another (probably better) way to do this problem would be to translate the regex into plain English and do it intuitively.
This particular regex means:

| Regex | English |
| --- | --- |
| `/abb*/` | Matches `ab` literally, followed by `b` 0 or more times |
| `/(a|b*)/` | Matches either `a` literally or `b` 0 or more times. We can simplify this into just an `/a?/` because we know `/b*b*/` (if we choose 2nd option) is just `/b*/`, meaning that this part matcher either `a` or nothing. |
| `/a/` | Matches `a` literally |
| `/(b*|a*)/` | Matches either `a` 0 or more times or `b` 0 or more times |

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
string of `/10*1101*10*0/`. If we took the lower path, we'd have `/10*110*10*0/`.
Notice where they are the same and where they differ.

They both share `/10*11/` at the beginning as well as `/10*0/` at the end. The middle conflicting
portion can be written as a union in our final regex.

So, we would have `/10*11((01*)|0*)10*0/` as our regex.

## 4. Which of the given strings would be accepted by the following FSA?

<img src="/res/acsl/regex/prob4.png" class="img-fluid" />

1. `/a(ba*aba|aba)|(aba*b)/`
2. `/a(ba*a(ba|ab)a)|aba*ab/`
3. `/a((ba*a(ba|ab)a)|(aba*ab))/`
4. `/a((ba*aba|aba)|aba*ab)/`
5. None of the above

For this problem, it would be easier to analyze the FSA rather than looking at the strings
one by one. In this FSA, there are two unions that we would have to keep in mind.

Regardless of what "path" is taken, *a* would always start the string. Now, we have a union; we
can analyze the two subpaths separately. The upper path would produce either `/ba*abaa/` or
`/ba*aaba/`; we can write this as `/ba*a(ab|ba)a/`.

The lower path would produce `/aba*ab/`.

Now, we can put these together to get our overall regex of `/a((ba*a(ab|ba)a)|(aba*ab))/`.
Note how many parentheses were used to clarify what the different union alternatives are. This
regex matches what is written for #3; hence, #3 is our answer.

---
Authors: Kelly Hong, Raymond Zhao
