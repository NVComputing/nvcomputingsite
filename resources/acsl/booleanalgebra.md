# Boolean Algebra

## Contents
- [Introduction](#introduction)
- [Truth Tables](#truthtables)
- [Basic Operators](#basicoperators)
- [Important Laws](#importantlaws)
  - [Commutative Law](#commutativelaws)
  - [Associative Law](#associativelaws)
  - [Idempotent Law](#idempotentlaw)
  - [Annihilator Law](#annihilatorlaw)
  - [Identity Law](#identitylaw)
  - [Complement Law](#complementlaw)
  - [Distributive Law](#distributivelaw)
  - [Absorptive Law](#absorptivelaw)
  - [DeMorgan's Law](#demorganslaw)
  - [XOR and XNOR](#xorandxnor)
- [Sample Problems](#sampleproblems)
  - [Simplify the Expression](#simplifytheexpression)
  - [Find the Solutions](#findthesolutions)

<br>

# Introduction 

As many of us may know, booleans are an essential part of programming that can hold one of two values: `true` and `false`, which can be denoted as `1` and `0`. Booleans can take the form of either a variable (such as `s = true`) or an expression (like `$5 \less 36$`, which evaluates to `true`). These are most often used in if statements (formatted as `if (boolean condition)`), another essential piece of programming that allows us to perform different functions for different conditions.

Boolean algebra is needed for digital circuits that make up a computer's hardware. 

It is also used to make more specific search expressions. For example, say you were looking for a part-time job that could be anything except being a tutor. So, to narrow your search results, you could write `Part-time job NOT tutor`.

*Fun Fact*: the power button we see almost everywhere is actually a 0 and a 1 on top, since booleans are just that significant!

<br>

# Truth Tables

Say we were to have an expression such as `X and Y`, where we don't know the values of X and Y. To resolve issues like these, we use truth tables! Understanding how truth tables can be crucial in certain situations, such as in the `Find the Solutions` subsection under `Sample Problems`. So, if you don't quite understand what truth tables are or how to set one up, then please continue reading below.

Here's an example:

| X | Y | X and Y |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 1 | 1 |

So, let's break down how exactly this truth table was drawn:

First, a column was made for each of the variable terms. Under these columns, I listed out all possible combinations of values for X and Y. X and Y can both either be 0 or 1; together, they could form the pairs: `(0, 0)`, `(1, 0)`, `(0, 1)`, and `(1, 1)`. Each of these pairs should make up one row in the table.

Then, a column was made for the actual expression itself. In this column, I wrote out all of the resultant values for each row. So, for example, in the first row (excluding the header labels), the values for X and Y were both 0. `X and Y` would thus be `0 and 0`, which simplifies down to `0`. Because of this, I put down a `0` for that row. I then did the same for the other rows.

And that's it! One thing to note is that when you get to longer expressions, it may be wise to break it down and use multiple columns. Let's say the expression was `X and Y or X`. This is how it could be set up:

| | | A | |
| --- | --- | --- | --- |
| X | Y | X and Y | A or X |
| 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

For this, I broke the expression into two smaller parts. I used `A` to symbolize `X and Y` simply because I didn't want to write out `X and Y or X` in the last column header.

<br>

# Basic Operators

| Operator | How It's Denoted | Description |
| --- | --- | --- |
| and | `$xy$` or `$x • y$` | The resulting value is only `true` (or 1) if x and y are *both* true. |
| or | `$x + y$` | The resulting value is `true` as long as *either* x or y (or both) are true. |
| not | `$\overline{x}$` or `$\neg x$` | This is a *unary* (taking in one operand) operator. The resulting value is the opposite of x; if x is true, then the result is false, and vice versa. You can take the negations of either one or multiple terms. For multiple terms, they are implicitly grouped together by the overhead line. So, `$\overline{y + z}$` would be treated the same as `$\overline{(y + z)}$`. |
| xor | `$x \oplus y$` | The result is true if the values of x and y are different. This is also equal to `$x\overline{y} + \overline{x}y$`; if `$x = 0$` and `$y = 1$`, then this expression would evaluate to `$0 • 0 + 1 • 1$`, or `1`. Since x and y have different values, this makes sense. Conversely, if `$x = y = 0$`, then this expression would evaluate to `$0 \bullet 1 + 1 \bullet 0$`, or `0`. |
| xnor | `$x \odot y$` | This is the exact opposite of xor; the result is true if the values of x and y are the same. For this reason, `$x \odot y$` can also be written as `$\overline{x \oplus y}$`. |

For the order of precedence, it goes as follows: *not*, *and*, *xor* and *xnor*, and then *or*. 

<br>

# Important Laws

These are all useful ways to simplify boolean expressions. An extra description in the form of a table has been made for the laws that may be more difficult to understand.

Please use this time to thoroughly understand each of these laws. You shouldn't have to memorize them; they should just make sense automatically.

<br>

## Commutative Law

The order that you write two separate terms in does not matter. 

1. `$x + y = y + x$`
2. `$x • y = y • x$`

## Associative Law

You can regroup terms in an expression without changing the value of the expression as long as the operators are the same. For example, `$(0 + 1) + 0$` is the same as `$(0 + (1 + 0)$`, as both would evaluate to `1`. However, `$(1 + 0) \bullet 0$` is not the same as `$1 + (0 \bullet 0)$`; they would return `0` and `1` respectively.

1. `$(x + y) + z = x + (y + z)$`
2. `$(x \bullet y) \bullet z = x \bullet (y \bullet z)$`

## Idempotent Law

"Idempotent" means "unchanged in value when multiplied or otherwise operated on by itself," which certainly applies to these identities. If the *or* or *and* operator is used on a term with itself, then the resultant value is that term.

| Identity | Description |
| --- | --- |
| `$x + x = x$` | If `$x = 0$`, then `$0 + 0 = 0$`. If `$x = 1$`, then `$1 + 1 = 1$`. Both of these equations are true; thus, the law must be valid. |
| `$x \bullet x = x$` | If `$x = 0$`, then `$0 \bullet 0 = 0$`. If `$x = 1$`, then `$1 \bullet 1 = 1$`. Again, these equations are both true, thus proving the law. |

## Annihilator Law

Both of the identities below disregard x; hence this law is called the "annihilator law".

| Identity | Description |
| --- | --- |
| `$x + 1 = 1$` | Regardless of what *x* is, this identity will always equal 1 since the *or* operator only requires that at least one of its operands is equal to 1, which applies in this situation. |
| `$x \bullet 0 = 0$` | Since the *and* operator requires that both operands are 1, the expression `$x \bullet 0$` is automatically 0 regardless of what x is. |

## Identity Law

This is so-called the "identity" law because of how the result is always the original term; this is not to be confused with the idempotent law, which conducts an operation between a variable and itself.

| Identity | Description |
| --- | --- |
| `$x + 0 = x$` | If `x` is 0, then the result is 0 since none of the operators for the *or* operation were 1. If `x` was a 1, however, then this *or* operation would also evaluate to 1. |
| `$x \bullet 1 = x$` | If `x` is 0, then the result is 0 since both operators need to be 1 for the *and* operation to be evaluated to true. Conversely, if `x` was a 1, then `1 • 1 = 1`. |

## Complement Law

This is termed the "complement" law because it involves a term and its opposite/complementary value.

| Identity | Description |
| --- | --- |
| `$x + \overline{x} = 1$` | Since we are guaranteed to have either `$1 + 0$` or `$0 + 1$`, this expression would always evaluate to 1. |
| `$x \bullet \overline{x} = 0$` | Since this will be either `$1 \bullet 0$` or `$0 \bullet 1$`, this would never meet the conditions of the *and* operator and thus give us a 0. |

## Distributive Law

Just like regular math, the distributive law can also apply to boolean algebra.

1. `$x \bullet (y + z) = xy + xz$`
2. `$(x + y) \bullet (p + q) = xp + xq + yp + yq$`
3. `$(x + y)(x + z) = x + yz$`

## Absorptive Law

The expressions below are reduced by "absorbing" like terms.

| Identity | Description |
| --- | --- |
| `$x + xy = x$` | Based on the distributive law, `$x + xy$` can also be written as `$x \bullet (1 + y)$`, which then simplifies to `$x \bullet 1$`. Based on the identity law, this would evaluate to `x`. |
| `$x + \overline{x}y = x + y$` | If `x` was 0, then the expression would be `$0 + 1 \bullet y$`, which simplifies to `$0 + y$` and then `y`. If `x` was 1, then the expression would be `$1 + 0 \bullet y$`, which would be `1`, which is just `x`. So, to combine these two results together, we write `$x + y$`. |
| `$x(x + y) = x$` | If `x` was 0, then this expression would become `$0 \bullet (0 + y)$`, or just `0`. If `x` was 1, then the expression would be `$1 \bullet (1 + y)$`, or `1`. So, we write these results as `x`. |

## DeMorgan's Law

This famous law essentially states that applying negation to an entire *and* or *or* operation would change not only the operands but also the operators themselves. The negation of *and* is *or*, and vice versa.

1. `$\overline{x + y} = \overline{x} \bullet \overline{y}$`
2. `$\overline{x \bullet y} = \overline{x} + \overline{y}$`

## Double Negation

If we were to negate a term and then negate that negated version, the result would simply be the original term. So, `$\overline{\overline{x}} = x$`.

## XOR and XNOR

As said previously, *xnor* is the negated version of *xor*. Overall, we can come to this conclusion: `$x \odot y = \overline{x \oplus y} = \overline{x} \oplus y = x \oplus \overline{y}$`.

To understand this equation, let's assume a case where `x` and `y` have the same value, 0, and then analyze each of the separate expressions in the equation above. Since the values are the same, `$0 \odot 0 = 1$`. Then, if we were to find the negated version after using the *xor* operator, we would get `$\overline{0 \oplus 0} = \overline{0} = 1$`.

For the next two expressions, think about it like this. Since `x` and `y` have the same value, the only way to get a `1` after using a *xor* operation with these terms would be if we were to negate one of these terms. That way, we would have a pair of `0` and `1`, thus rendering the *xor* operation as `1` as we wanted it to. So, written out in equation terms, this proof would be: `$\overline{0} \oplus 0 = 1 \oplus 0 = 1$` and `$0 \oplus \overline{0} = 0 \oplus 1 = 1$`.

So, since these different expressions all evaluate to `1` for when `x` and `y` equal 0, then it is safe to say that this relationship between *xor* and *xnor* has been proven. If you're still not quite convinced, try solving for the expressions when `x` and `y` have different values.

<br>

# Sample Problems

It may take a while to remember all of the laws, so take your time! Also make sure to keep order of precedence in mind.

## Simplify the Expression

### 1. `$\overline{\overline{A}(B + C)} • B + \overline{B}$`

0. `$\overline{\overline{A}(B + C)} \bullet B + \overline{B}$`
1. `$(\overline{\overline{A}} + \overline{B + C}) \bullet B + \overline{B}$`  - this uses DeMorgan's Law
2. `$A + \overline{B} \bullet \overline{C} \bullet B + \overline{B}$` - this uses DeMorgan's Law and Double Negation
3. `$A + 0 \bullet \overline{C} + \overline{B}$` - this uses the Complement Law
4. `$A + \overline{B}$` - this uses the Annihilator Law

### 2. `$(X(X * 1))(X + Y) + C$`

0. `$(X(X * 1))(X + Y) + C$`
1. `$(XX)(X + Y) + C$` - this uses the Identity Law
2. `$X(X + Y) + C$` - this uses the Idempotent Law
4. `$X + C$` - this uses the Absorptive Law

## Find the Solutions

These types of problems involve one extra step after simplifying the expression, as you have to consider what values for each term within the expression would make that expression true or false.

### 3. Find all ordered pairs (X, Y) that make the following expression true: `$\overline{\overline{X + XY} \bullet Y} + X$`

First off, let's simplify this expression:

0. `$\overline{\overline{X + XY} \bullet Y} + X$`
1. `$\overline{\overline{X} \bullet Y} + X$`
2. `$\overline{\overline{X}} + \overline{Y} + X$`
3. `$X + \overline{Y} + X$`
4. `$X + X + \overline{Y}$`
5. `$X + \overline{Y}$`

Now, we can set this final reduced expression to 1, since the problem asks us to find ordered pairs to make the expression true. Then, using a truth table, the solutions can be easily found:

| X | Y | `$X + \overline{Y}$` |
| --- | --- | --- |
| 0 | 0 | 1 |
| 1 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 1 | 1 |

So, as we can see here, the ordered pairs that would make the expression true are: `(0, 0)`, `(1, 0)`, and `(1, 1)`.

---

Author: Kelly Hong
