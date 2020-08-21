# Pre-fix, Post-fix, and In-fix Notation

## Contents
- [Introduction](#introduction)
- [More Types of Notations](#moretypesofnotation)
  - [Evaluating Expressions in Any Notation](#evaluatingexpressionsinanynotation)
- [Converting Between Notations](#convertingbetweennotations)
  - [Doing Multiple Scans](#doingmultiplescans)
  - [Binary Trees](#binarytrees)
- [Sample Problems](#sampleproblems)

# Introduction

We all come in contact with math in numerous situations. Whenever we see a math expression
like `$8 + 14 * 6$`, we are looking at infix notation. *In-fix* means that the operators
are written between its two operands. However, there are two other notations that we
will explore next.

# More Types of Notations

As we touched upon in the Introduction, we should all be very much acquainted with
in-fix notation.

Another type of notation is *pre-fix* notation, where each operator is placed before
its operands. So, the pre-fix notation of `$8 + 14 * 6$` would be `$+ 8 * 14 6$`.

The other type of notation is *post-fix* notation, where each operator is placed after
its operands instead. The post-fix notation of `$8 + 14 * 6$` would be `$8 14 6 * +$`.

One note is that exponents are marked with a `$\uparrow$` rather than a `^` mark.
Also, pre-fix and post-fix both do not use parentheses.

## Evaluating Expressions in Any Notation

When it comes to evaluating in-fix expressions, you would simply follow *PEMDAS*:
parentheses, exponents, multiplication, division, addition, and then subtraction.
Multiplication and division have the same precedence, as do addition and subtraction;
terms with equal precedence are evaluated from left to right.

With pre-fix and post-fix, there is no specific order of precedence.

For pre-fix, you would first scan the expression for any operators that are followed by
2 operands, simplify those, and continue to cycle over the expression to simplify further
and further. Here's an example:

0. `$\uparrow - * 3 7 / 6 2 2$`
1. `$\uparrow - 21 / 6 2 2$`
2. `$\uparrow - 21 3 2$`
3. `$\uparrow 18 2$`
4. **`$324$`**

Notice that the order that the operands are written in still matters, especially for
division and subtraction!

As for post-fix, a similar idea applies except that you would scan the expression for
any operators that are preceded by 2 operands. Here's an example:

0. `$3 7 * 6 2 / - 2 \uparrow$`
1. `$21 6 2 / - 2 \uparrow$`
2. `$21 3 - 2 \uparrow$`
3. `$18 2 \uparrow$`
4. `$324$`

# Converting Between Notations

There are two ways you could convert between in-fix, pre-fix, and post-fix notation.
Both are listed down below.

Experiment with both so that you can see which one you prefer more; perhaps you may
even use both!

## Doing Multiple Scans

Whenever you need to convert in-fix to one of the other two expressions, you can first
list out all of the operands. Then, following the order of operations, slowly add in
all of the operators either before (for pre-fix) or after (for post-fix) the operands
they correspond to. The expression `$X = (AB - C/D)\uparrow E$` will be used as an example.

**Pre-fix**

| Expression | Notes |
| --- | --- |
| `$X \; A \; B \; C \; D \; E$` | We have written out the operands in one row. |
| `$X * A \; B \; C \; D \; E$` | `$AB$` is one of the first operations to be executed based on PEMDAS; it's located in parentheses and is higher in precedence than subtraction. |
| `$X * A \; B / \; C \; D \; E$` | `$C/D$` is of the same precedence as `$AB$` and thus is evaluated next. |
| `$X - * \; A \; B \; / \; C \; D \; E$` | `$* \; A \; B$` and `$/ \; C \; D$` become `$AB$` and `$C/D$`. We then have to find the difference of these two, which is why the subtraction mark is put before both `$* \; A \; B$` and `$/ \; C \; D$`. |
| `$X \uparrow - * A \; B \; / \; C \; D \; E$` | `$- \; * \; A \; B \; / \; C \; D$` is `$(AB - C/D)$`, which is supposed to all be taken to the Eth power. So, the `$\uparrow$` mark at the front of `$- * A \; B \; / \; C \; D$`. |
| `$ = X \uparrow - * A \; B \; / \; C \; D \; E$` | The equal sign is treated as last in precedence by default since it isn't exactly an operation.

**Post-fix**

Notes will not be written for the steps below as they are identical to the steps taken
above for pre-fix; the only difference is that the operators are placed after the
operands.

0. `$X \; A \; B \; C \; D \; E$`
1. `$X \; A \; B \; * \; C \; D \; E$`
2. `$X \; A \; B \; * \; C \; D \; / \; E$`
3. `$X \; A \; B \; * \; C \; D \; / \; - \; E$`
4. `$X \; A \; B \; * \; C \; D \; / \; - \; E \; \uparrow$`
5. `$X \; A \; B \; * \; C \; D \; / \; - \; E \; \uparrow \; =$`

On the other hand, if you were to be converting from pre-fix or post-fix to in-fix,
then you could make multiple scans from left to right to convert expressions into
in-fix notation. Parentheses will be helpful. Let's convert the pre-fix expression
from before, `$ = X \uparrow - * A \; B \; / \; C \; D \; E$`, to better demonstrate
what I mean.

0. `$ = X \uparrow - * A \; B \; / \; C \; D \; E$`
1. `$ = X \uparrow - \; (AB) \; / \; C \; D \; E$`
2. `$ = X \uparrow - \; (AB) \; (C/D) \; E$`
3. `$ = X \uparrow (AB - C/D) \; E$`
4. `$ = X \; (AB - C/D)\uparrow E$`
5. `$ X = (AB - C/D)\uparrow E$`

If you want to convert from pre-fix to post-fix or vice versa, it is easy to get
mixed up; so, converting to in-fix first may be your better choice, although it's
a tedious extra step to take.

## Binary Trees

Binary trees are a way to represent an expression more visually. For example, if I
were to represent `$3+6$` as a tree, I would draw:

<img src="/res/acsl/notation/operation.png" class="img-fluid" />

Note how the operator lies in the middle of the two operands and acts as a stem, or
root. This applies to even pre-fix and post-fix expressions.

Let's look at `$X = (AB - C/D)\uparrow E$` once more and convert it into a tree.
Follow the table below to see the process.

| Construction | |
| --- | --- |
| 1. <img src="/res/acsl/notation/sample1.png" class="img-fluid" /> | 4. <img src="/res/acsl/notation/sample4.png" class="img-fluid" />|
| 2. <img src="/res/acsl/notation/sample2.png" class="img-fluid" /> | 5. <img src="/res/acsl/notation/sample5.png" class="img-fluid" />|
| 3. <img src="/res/acsl/notation/sample3.png" class="img-fluid" /> | |

Now, with this completed tree, we can convert to any notation we want. The order to
write the expression is already drawn out; first, work with the operation in the
bottommost row on the left (which is `$A*B$` in this case). Complete any other
operations in the same row, and then move up to the next row up. In this next row,
start calculating from left to right again before moving up once more. This process
is continued until you get to the uppermost (or final) operation.

The only difference between the notations is where you place the operators. In the
binary tree, you may see:

<img src="/res/acsl/notation/operation.png" class="img-fluid" />

However, since this is written in in-fix terms, you would have to remember to put
the operator before or after the operands if you're converting to pre-fix or post-fix.
So, again, for pre-fix, this would be `$* \; A \; B$`. For post-fix, it would be
`$A \; B \; *$`.

# Sample Problems

A quick note: for terms that have more than 1 digit, such as `16`, parentheses have
been put around them to avoid confusion.

For conversion problems, solutions using both the multiple scans and binary tree
methods have been provided.

## 1. What would the following pre-fix expression evaluate to: `$- + * \; 4 \; 6 \; (24) \; / \; 8 \; - * \; 3 \; 2 \; 2$`

0. `$- + * \; 4 \; 6 \; (24) \; / \; 8 \; - * \; 3 \; 2 \; 2$`
1. `$- + \; (24) \; (24) \; / \; 8 \; - * \; 3 \; 2 \; 2$`
2. `$- \; 48 \; / \; 8 \; - * \; 3 \; 2 \; 2$`
3. `$- \; 48 \; / \; 8 \; - \; 6 \; 2$`
4. `$- \; 48 \; / \; 8 \; 4$`
5. `$- \; 48 \; 2$`
6. `$46$`

## 2. Convert the following in-fix expression to post-fix: `$(2+7)\uparrow 3 - (3+4-5)*8$`

### **Multiple Scans**

0. `$2 \; 7 \; 3 \; 3 \; 4 \; 5 \; 8$`
1. `$2 \; 7 \; + \; 3 \; 3 \; 4 \; 5 \; 8$`
2. `$2 \; 7 \; + \; 3 \; 3 \; 4 \; + \; 5 \; 8$`
3. `$2 \; 7 \; + \; 3 \; 3 \; 4 \; + \; 5 \; - \; 8$`
4. `$2 \; 7 \; + \; 3 \; \uparrow \; 3 \; 4 \; + \; 5 \; - \; 8$`
5. `$2 \; 7 \; + \; 3 \; \uparrow \; 3 \; 4 \; + \; 5 \; - \; 8 \; *$`
6. `$2 \; 7 \; + \; 3 \; \uparrow \; 3 \; 4 \; + \; 5 \; - \; 8 \; * \; -$`

### **Binary Tree**

| Construction | | |
| --- | --- | --- |
| 1. <img src="/res/acsl/notation/prob2-1.png" class="img-fluid" /> | 2. <img src="/res/acsl/notation/prob2-2.png" class="img-fluid" /> | 3. <img src="/res/acsl/notation/prob2-3.png" class="img-fluid" /> |
| 4. <img src="/res/acsl/notation/prob2-4.png" class="img-fluid" /> | 5. <img src="/res/acsl/notation/prob2-5.png" class="img-fluid" /> | 6. <img src="/res/acsl/notation/prob2-6.png" class="img-fluid" /> |

Notice that in a few of the steps, I chose to work on subbranches of the final tree
before putting them altogether.

Now, at this point, we just need to analyze the tree to get us the post-fix expression
we want.

1. `$2 \; 7 \; +$`
2. `$2 \; 7 \; + \; 3 \; \uparrow$`
3. `$2 \; 7 \; + \; 3 \; \uparrow$` and `$3 \; 4 \; +$` --> *and* will be used to divide our conversions into two smaller sections.
4. `$2 \; 7 \; + \; 3 \; \uparrow$` and `$3 \; 4 \; + \; 5 \; -$`
5. `$2 \; 7 \; + \; 3 \; \uparrow$` and `$3 \; 4 \; + \; 5 \; - \; 8 \; *$`
6. `$2 \; 7 \; + \; 3 \; \uparrow \; 3 \; 4 \; + \; 5 \; - \; 8 \; * -$`

## 3. Convert the following post-fix expression to pre-fix: `$E \; B \; A \; C \; + / \; D \; - \uparrow$`

### **Multiple Scans**

First, we will convert the post-fix expression to in-fix:

0. `$E \; B \; A \; C \; + / \; D \; - \uparrow$`
1. `$E \; B \; (A+C) \; / \; D \; - \uparrow$`
2. `$E \; (B \; / \; (A+C)) \; D \; - \uparrow$`
3. `$E \; (B \; / \; (A+C) \; - \; D) \; \uparrow$`
4. `$E \; \uparrow (B \; / \; (A+C) \; - \; D)$`

Then, we will convert this into pre-fix:

0. `$E \; B \; A \; C \; D$`
1. `$E \; B \; + \; A \; C \; D$`
2. `$E \; / \; B \; + \; A \; C \; D$`
3. `$E \; - / \; B \; + \; A \; C \; D$`
4. `$\uparrow \; E \; - / \; B \; + \; A \; C \; D$`

### **Binary Tree**

We would first construct the tree like so:

| Construction | |
| --- | --- |
| 1. <img src="/res/acsl/notation/prob3-1.png" class="img-fluid" /> | 2. <img src="/res/acsl/notation/prob3-2.png" class="img-fluid" /> |
| 3. <img src="/res/acsl/notation/prob3-3.png" class="img-fluid" /> | 4. <img src="/res/acsl/notation/prob3-4.png" class="img-fluid" /> |

Then, we can analyze this tree from bottom to top, left to right to get our pre-fix
expression:

1. `$+ \; A \; C$`
2. `$/ \; B \; + \; A \; C$`
3. `$- / \; B \; + \; A \; C \; D$`
4. `$\uparrow \; E \; - / \; B \; + \; A \; C \; D$`

---
Author: Kelly Hong
