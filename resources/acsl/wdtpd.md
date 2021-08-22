# What Does This Program Do?

## Contents
- [Introduction](#introduction)
- [ACSL's Pseudocode Syntax](#acslspseudocodesyntax)
- [Sample Problems](#sampleproblems)

# Introduction

Often times, you may use other programmers' code in your own program. Before incorporating it in
your program, however, you would have to make sure that the code is exactly how you want it; so,
you would have to review this other code and make any modifications if needed.

Documentation (such as text explanations, in-line comments, and docstrings) is unfortunately
something that is often forgotten in programs. You may not be able to get in touch with the
other programmer either. So, that is why it's important that you can understand a program even if
it doesn't have documentation.

In this category, ACSL presents you with a program, and you will have to determine what it does.
There is no real "method" to solving these types of problems. Imagine the pseudocode as regular
code, and go from there.

# ACSL's Pseudocode Syntax

The pseudocode listed below should all look familiar, as they reflect basic programming syntax.

**Operators**

1. ! (not)
2. ^ or `$\uparrow$` (exponents)
3. `$*$`, / and %
4. +, -
5. >, <, >=, <=, !=, == (relational)
6. && (and)
7. || (or)

**Functions**

1. abs(x) -- absolute value
2. sqrt(x) -- square root
3. int(x) -- rounds *x* down to the nearest integer if it is not already an integer

**Variables**

Variable names still start with a letter. However, they will only consist of letters and digits
(so no underscores or anything like that).

**Sequential Statements**

```code
INPUT variable
variable = expression
OUTPUT variable
```
Note that the middle line is an assignment statement.

**Decision Statements**

```code
IF boolean THEN
Statement(s)
ELSE (optional)
Statement(s)
END IF
```

Unlike many programs like Java and Python, ACSL does add an 'end' to better distinguish what statements belong in the if block.

**While (Indefinite) Loops**

```code
WHILE boolean
Statement(s)
END WHILE
```

**For (Definite) Loops**

```code
FOR variable = start TO end STEP increment
Statement(s)
NEXT
```

The step argument is optional; if it is not given, then the default step is +1. `end` is also inclusive, meaning that when `variable`
does equal `end`, the loop would still run one last time.

**Arrays**

The size of the array will usually be specified in the problem statement. They will generally
either be 1-dimensional or 2-dimensional. They are based on a zero index, although earlier
ACSL problems may have a start index of 1 instead.

**Strings**

Strings are marked with " " (quotation marks). They can be empty. The characters are labeled based on a zero index.

Errors occur if the user attempts to access an index that is out of range.

The *len(A)* function will find the length of the String; this is typical Python syntax. It is
equivalent to *.length()* in Java.

[ ] can be used to specify either a single character or a range of characters with their
indices.

Now, there are a few inconsistent things that ACSL does with these brackets (not sure why), so
be sure to take note of them in the table below. *S* has been used as our example string.

| Code | Explanation |
| --- | --- |
| S[start:] | This would give you the characters from index *start* all the way to the last character (inclusive). You can think of this as the last *start* characters of the string. |
| S[:end] | This would give you all the characters starting from the first character to the character at index *end* (**not inclusive**). You can think of this as the first *end* characters of the string. |
| S[start:end] | This would give you the characters starting from index *start* to index *end* (**inclusive**).

To access one character in the String, you would just need to write `S[index]` (with *index*
replaced with the number index).

A plus sign is still used to concatenate (or join) strings.

# Sample Problems

## 1. What is the value of B that is printed if the input values are 50 and 10 respectively?

```code
input H, R
B = 0
if H>48 then
    B = B + (H-48) * 2 * R
    H = 48
end if
if H>40 then
    B = B + (H-40) * (3/2) * R
    H = 40
end if
B = B + H * R
output B
```

First, *B* is initialized to 0 on line 2. The if statement on line 3 would apply since `$50>48$`,
so `$B = 0 + (50-48) * 2 * 10 = 40$` and `$H = 48$`.

Then, the if statement starting on line 7 would also execute because `$48>40$`. So, `$B =
40 + (48-40) * (3/2) * 10 = 40 + 8 * 3/2 * 10 = 40 + 120 = 160$`. `$H = 40$`.

Finally, on line 11, `$B = 160 + 40 * 10 = 160 + 400 = 560$`. So, our final answer is `560`.

## 2. What is the final value of NUM after the following program is executed?

```code
A = "BANANAS"
NUM = 0: T = ""
for J = len(A) - 1 to 0 step -1
    T = T + A[J]
next
for J = 0 to len(A) - 1
    if A[J] == T[J] then NUM = NUM + 1
next
```

This code first initializes three variables: *A*, *NUM*, and *T*. The first for loop traverses
through *A* in reverse order and stores the reverse of *A* into *T*. The next for loop checks
for if the character at index *J* in *A* is the same as the character at index *J* in *T*; if
they are the same, then *NUM* increments by 1.

So, this is what we have. *A* is `BANANAS`. After the for loop, *T* becomes `SANANAB`. These
two strings' characters are compared to each other. All of the characters besides the first and
last ones are the same. So, *NUM* increments up to 5.

Our final answer is **5**.

## 3. What is the final value of C[4] after the program below is executed?

```code
A(1) = 12: A(2) = 41: A(3) = 52
A(4) = 57: A(5) = 77: A(6) = -100
B(1) = 17: B(2) = 34: B(3) = 81
j = 1: k = 1: n = 1
WHILE A(j) > 0
    WHILE B(k) <= A(j)
        C(n) = B(k)
        n = n + 1
        k = k + 1
    END WHILE
    C(n) = A(j): n = n + 1: j = j + 1
END WHILE
```

For this program, it may be hard to verbally track all of the variables' values. So, a table
will be used instead. One note is that line 11 was broken up into 2 different steps in the table,
one step being `C(n) = A(j)` and the other being the variable updates.

| Line(s) | j | k | n | A(j) | B(k) | C(n) |
| --- | --- | --- | --- | --- | --- | --- |
| 1-4 | 1 | 1 | 1 | 12 | 17 | -- |
| 11 | 1 | 1 | 1 | 12 | 17 | 12 |
| 11 | 2 | 1 | 2 | 41 | 17 | -- |
| 7 | 2 | 1 | 2 | 41 | 17 | 17 |
| 8-9 | 2 | 2 | 3 | 41 | 34 | -- |
| 7 | 2 | 2 | 3 | 41 | 34 | 34 |
| 8-9 | 2 | 3 | 4 | 41 | 81 | -- |
| 11 | 2 | 3 | 4 | 41 | 81 | **41** |
| 11 | 3 | 3 | 5 | 52 | 81 | -- |
| 11 | 3 | 3 | 5 | 52 | 81 | 52 |
| 11 | 4 | 3 | 6 | 57 | 81 | -- |
| 11 | 4 | 3 | 6 | 57 | 81 | 57 |
| 11 | 5 | 3 | 7 | 77 | 81 | -- |
| 11 | 5 | 3 | 7 | 77 | 81 | 77 |
| 11 | 6 | 3 | 8 | -100 | 81 | -- |
| END | | | | | | |

While we could have stopped evaluating the rest of the program after we got `C[4]`, I still
decided to show you how the entire program would run.

So, based on our table, `$C[4] = 41$`.

---
Author: Kelly Hong