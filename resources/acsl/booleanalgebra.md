# Boolean Algebra

## Contents
- [Introduction](#introduction)
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

<br>

# Introduction 

<br>

As many of us may know, booleans are an essential part of programming that can hold one of two values: `true` and `false`, which can be denoted as `1` and `0`. Booleans can take the form of either a variable (such as `s = true`) or an expression (like `5 < 36`, which evaluates to `true`). These are most often used in if statements (formatted as `if (boolean condition)`), another essential piece of programming that allows us to perform different functions for different conditions.

Boolean algebra is needed for digital circuits that make up a computer's hardware. 

It is also used to make more specific search expressions. For example, say you were looking for a part-time job that could be anything except being a tutor. So, to narrow your search results, you could write `Part-time job NOT tutor`.

*Fun Fact*: the power button we see almost everywhere is actually a 0 and a 1 on top, since booleans are just that significant!

<br>

# Basic Operators

| Operator | How It's Denoted | Description |
| --- | --- | --- |
| and | `xy` or `x • y` | The resulting value is only `true` (or 1) if x and y are *both* true. |
| or | `x + y` | The resulting value is `true` as long as *either* x or y (or both) are true. |
| not | `$\bar{x}$` or `¬x` | This is a *unary* (taking in one operand) operator. The resulting value is the opposite of x; if x is true, then the result is false, and vice versa. |
| xor | `x ⊕ y` | The result is true if the values of x and y are different. This is also equal to `xy̅ + x̅y`; if `x = 0` and `y = 1`, then this expression would evaluate to `0 • 0 + 1 • 1`, or `1`. Since x and y have different values, this makes sense. Conversely, if `x = y = 0`, then this expression would evaluate to `0 • 1 + 1 • 0`, or `0`. |
| xnor | `x ⊙ y` | This is the exact opposite of xor; the result is true if the values of x and y are the same. For this reason, `x ⊙ y` can also be written as `x̅ ̅⊙̅ ̅y̅`

For the order of precedence, it goes as follows: *not*, *and*, *xor* and *xnor*, and then *or*. 

// NOTE: NEED LATEX TO DO OVERLINES SO WILL NEED TO EDIT NOT, XOR, and XNOR

<br>

# Important Laws

These are all useful ways to simplify boolean expressions. An extra description in the form of a table has been made for the laws that may be more difficult to understand.

<br>

## Commutative Law

The order that you write two separate terms in does not matter. 

1. `x + y = y + x`
2. `x • y = y • x`.

## Associative Law

You can regroup terms in an expression without changing the value of the expression as long as the operators are the same. For example, `(0 + 1) + 0` is the same as `(0 + (1 + 0)`, as both would evaluate to `1`. However, `(1 + 0) • 0` is not the same as `1 + (0 • 0)`; they would return `0` and `1` respectively.

1. `(x + y) + z = x + (y + z)`
2. `(x • y) • z = x • (y • z)`

## Idempotent Law

"Idempotent" means "unchanged in value when multiplied or otherwise operated on by itself," which certainly applies to these identities. If the *or* or *and* operator is used on a term with itself, then the resultant value is that term.

| Identity | Description |
| --- | --- |
| x + x = x | If `x = 0`, then `0 + 0 = 0`. If `x = 1`, then `1 + 1 = 1`. Both of these equations are true; thus, the law must be valid. |
| x • x = x | If `x = 0`, then `0 • 0 = 0`. If `x = 1`, then `1 • 1 = 1`. Again, these equations are both true, thus proving the law. |

## Annihilator Law

Both of the identities below disregard x; hence this law is called the "annihilator law".

| Identity | Description |
| --- | --- |
| x + 1 = 1 | Regardless of what *x* is, this identity will always equal 1 since the *or* operator only requires that at least one of its operands is equal to 1, which applies in this situation. |
| x • 0 = 0 | Since the *and* operator requires that both operands are 1, the expression `x • 0` is automatically 0 regardless of what x is. |

## Identity Law

This is so-called the "identity" law because of how the result is always the original term; this is not to be confused with the idempotent law, which conducts an operation between a variable and itself.

| Identity | Description |
| --- | --- |
| x + 0 = x | If `x` is 0, then the result is 0 since none of the operators for the *or* operation were 1. If `x` was a 1, however, then this *or* operation would also evaluate to 1. |
| x • 1 = x | If `x` is 0, then the result is 0 since both operators need to be 1 for the *and* operation to be evaluated to true. Conversely, if `x` was a 1, then `1 • 1 = 1`. |

## Complement Law

This is termed the "complement" law because it involves a term and its opposite/complementary value.

| Identity | Description |
| --- | --- |
| x + x̅ = 1 | Since we are guaranteed to have either `1 + 0` or `0 + 1`, this expression would always evaluate to 1. |
| x • x̅ = 0 | Since this will be either `1 • 0` or `0 • 1`, this would never meet the conditions of the *and* operator and thus give us a 0. |

## Distributive Law

Just like regular math, the distributive law can also apply to boolean algebra.

1. x • (y + z) = xy + xz
2. (x + y) • (p + q) = xp + xq + yp + yq
3. (x + y)(x + z) = x + yz

## Absorptive Law

The expressions below are reduced by "absorbing" like terms.

| Identity | Description |
| --- | --- |
| x + xy = x | Based on the distributive law, `x + xy` can also be written as `x • (1 + y)`, which then simplifies to `x • 1`. Based on the identity law, this would evaluate to `x`. |


## DeMorgan's Law

## XOR and XNOR

// TO FIX --> COMPLEMENT LAW

<br>

# Sample Problems

<br>
