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
| not | `x̅` or `¬x` | This is a *unary* (taking in one operand) operator. The resulting value is the opposite of x; if x is true, then the result is false, and vice versa. |
| xor | `x ⊕ y` | The result is true if the values of x and y are different. This is also equal to `xy̅ + x̅y`; if `x = 0` and `y = 1`, then this expression would evaluate to `0 • 0 + 1 • 1`, or `1`. Since x and y have different values, this makes sense. Conversely, if `x = y = 0`, then this expression would evaluate to `0 • 1 + 1 • 0`, or `0`. |
| xnor | `x ⊙ y` | This is the exact opposite of xor; the result is true if the values of x and y are the same. For this reason, `x ⊙ y` can also be written as `x̅ ̅⊙̅ ̅y̅`

For the order of precedence, it goes as follows: *not*, *and*, *xor* and *xnor*, and then *or*. 


<br>

# Important Laws

<br>

## Commutative Law

## Associative Law

## Idempotent Law

## Annihilator Law

## Identity Law

## Complement Law

## Distributive Law

## Absorptive Law

## DeMorgan's Law

## XOR and XNOR

<br>

# Sample Problems

<br>
