# Bit-String Flicking

## Contents
- [Introduction](#introduction)
- [Operators](#operators)
  - [Bitwise Operators](#bitwiseoperators)
  - [Shift Operators](#shiftoperators)
- [Sample Problems](#sampleproblems)
  - [Evaluations](#evaluations)
  - [Finding Possible Bitstrings](#findingpossiblebitstrings)

<br>

# Introduction

Bit strings are essentially just strings of binary digits (so, for example, `011010`) that can be manipulated in a variety of ways by operators (see Operators below). They can also be represented by 
the binary form of many data types, such as integers, strings, etc.

Most high-level languages support such operations. Bit strings can be used to represent sets in the form of binary sets. If you were to have a program with 8 different options that all have the choice of "Yes" or "No", one way to store this information would be with an array of size 8. However, an easier and less space-consuming way would be to use a bit string, with each option choice taking up one bit.

Understanding how bit strings work is very helpful in systems programming, assembly language programming, code optimization, and hardware design.

<br>

# Operators

The order of precedence/operation (the order in which they are executed) for the operators goes as follows:
- Parenthesis (highest precedence)
- NOT
- SHIFT and CIRC
- AND
- XOR
- OR (lowest precedence)

Continue reading this section for more information on what each of these operators do.

## Bitwise Operators

All of these operators (except NOT) are binary operators,
meaning that they must take in two operands, which must be the same length.
If the two bit strings are different lengths,
zeros will be added to the left of the shorter operand until it is the same length
as the other operand. So, for example, if we had the operands `101111` and `101`,
3 zeros would need to be added to `101` to make it `000101`.

Since *not* is a unary operator (meaning that it only takes in one operand), this condition does not apply.

All of these operators are also *bitwise*, meaning that they work *bit-by-bit*.
They do an operation on every single bit of the string *individually*,
not the whole bit string as one.

| Operator | Symbol | Description | Example |
| --- | --- | --- | --- |
| not | `$\sim$` or `$\neg$` | Logical negation is performed on each bit in the bit strings. 0s turn into 1s, and vice versa. | <div class="monospace"><div>`$\neg$`<br>=&nbsp;</div><div>`$10110$`<br>`$01001$`</div></div> |
| and | & | A comparison is made between a bit and its corresponding bit (based on position) in the other bit string. If both bits are 1s, then the resultant bit will be a 1; otherwise, it will be 0. This is done for each bit in the bit strings.| <div class="monospace"><div><br>&<br>=&nbsp;</div><div>`$10001$`<br>`$01101$`<br>`$00001$`</div></div>|
| or | \| | Similar to *and*, bits are compared with the bits in the other bit string. If at least one bit is a 1, then the resultant bit will be a 1. This is done for each bit in the bit strings. | <div class="monospace"><div><br>\|<br>=&nbsp;</div><div>`$101011$`<br>`$011001$`<br>`$111011$`</div></div> |
| xor | `$\oplus$` | Again, this involves bit comparison. If one bit has a value of 0 while the other has a value of 1, then the resultant bit is 1 (so basically, if the bits have different values). This is done for each bit in the bit strings. | <div class="monospace"><div><br>`$\oplus$`<br>=&nbsp;</div><div>`$101011$`<br>`$011001$`<br>`$110010$`</div></div>|

Note: There is a shortcut for xor specifically - you can think of it like this:

<div class="monospace"><div>&nbsp;&nbsp;<br><code>$\oplus$</code></div><div><code>$101011$</code><br><code>$011001$</code></div></div>

For each bit, instead of comparing them individually, just look at the bits in the 2nd bit string with a `1`. *Toggle* (perform the NOT operation on) the bits corresponding to those `1`s in the first string to get your final bit string.

So for this example, we're toggling <code class="text-white">1</code>`01`<code class="text-white">01</code>`1`. After flipping the red bits, we have `$110010$`, which is exactly what the answer should be.

This works because of the truth table for XOR:

| `$X$` | `$Y$` | `$X \oplus Y$` |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 1 | 0 |

We can see that the `$X \oplus Y$` bit is equal to `$X$` when `$Y$` is 0, and equal to `$\neg X$` when `$Y$` is 1.

For more details on truth tables, or if you're confused about what a truth table is, check out our page on [Boolean Algebra](/resources/acsl/booleanalgebra).

## Shift Operators

As their name indicates, "shift" operators are unary operators that involve shifting bits around in a bit string. The direction in which they shift as well as how many positions they shift over by varies based on the operator. For the operators in the table below, we will include the abbreviation that we typically use for each operator. 

Note that none of these operators change the length of the bit string.

| Operator | Abbreviation | Description | Example |
| --- | --- | --- | --- |
| LSHIFT-x | LS-x | Each bit in the bit string is shifted over by *x* positions to the left. If its shift causes it to go out of bounds, that bit will be lost ("shifted out"); a 0 at the other end (the right) will be ended to preserve bit string length. | `LS-2 01101`: The first two bits, `01`, are shifted out, leaving us with `101`. 2 zeros are then filled at the right end of the bit string, thus leaving us with `10100`.|
| RSHIFT-x | RS-x | Each bit in the bit string is shifted over by *x* positions to the right. If its shift causes it to go out of bounds, that bit will be lost ("shifted out"); a 0 at the other end (the left) will be ended to preserve bit string length. | `RS-3 01101`: The first three bits on the right, `101` are shifted out; now we have `01` left. 3 zeros are then filled at the left end of the bit string, thus leaving us with `00001`. |
| LCIRC-x | LC-x | Each bit in the bit string is shifted over by *x* positions to the left. If its shift causes it to go out of bounds, then that bit will circulate to the other end (the right) rather than being lost. | `LC-3 01101`: The first three digits circulate over to the other end of the bit string in order. The resulting bit string becomes `01011`. |
| RCIRC-x | RC-x | Each bit in the bit string is shifted over by *x* positions to the right. If its shift causes it to go out of bounds, then that bit will circulate to the other end (the left) rather than being lost. | `RC-2 01011`: The first two digits on the right are circulated over to the other end of the bit string. So, `01011` becomes `11010`. |

So, while SHIFTs may cause there to be different bits, CIRCs only change the order of the existing bits.

Also, because of the way these operators work, you can significantly simplify operations depending on the length of the bit string.

If SHIFT has a higher shift than the length of the string, obviously the entire string is shifted out and becomes just zeros.

If CIRC has a shift that is a multiple of the string length, the shift leaves the bits in their original location (no effect).
As a result, any CIRC x operations are equal to CIRC (bit length mod x) operations. That means you can divide the CIRC x by the bit length and just use the remainder as your CIRC.

For example, LCIRC-19 `10001` is just equivalent to LCIRC-4. This means that we can calculate that the resultant bit string
is `00011` very quickly. (As a side note, you can simplify this even further: LCIRC-4 = RCIRC-1 on a bitstring with length 5, because 4 mod 5 is also -1 (and LCIRC-x is just RCIRC-(-x))).

<br>

# Sample Problems

Here are some sample problems that you can use to practice bit-string flicking. Full solutions are provided.

## Evaluations

This requires knowing all of the bit string operators and how they work. Refer to the Operators section if needed. 

### 1. ((RS–1 (NOT (LC–1 10110))) OR (NOT (LC–1 (RS–1 01001)))) . (This is from North Hollywood ACSL.)

The following solution is broken down into smaller steps to help improve understanding:

0. ((RS–1 (NOT (LC–1 10110))) OR (NOT (LC–1 (RS–1 01001))))
1. ((RS–1 (NOT 01101)) OR (NOT (LC–1 (RS–1 01001))))
2. ((RS–1 10010) OR (NOT (LC–1 (RS–1 01001))))
3. (01001 OR (NOT (LC–1 (RS–1 01001))))
4. (01001 OR (NOT (LC–1 00100)))
5. (01001 OR (NOT 01000))
6. (01001 OR 10111)
7. **11111**

### 2. ((RC-14 (LC-23 01101)) | (LS-1 10011) & (RS-2 10111)) . (This is from the ACSL Wiki.)

Note that the CIRC operation involve circulating by multiple positions beyond one cycle. However, if you think about it, `LC-5 01101` is just `01101`, since one full cycle would have been done. So, accounting for these full cycles, `LC-23 01101` would go through 4 full cycles (since `23 // 5 = 4`); thus, it is equivalent to `LC-3 01101`.

A similar idea applies to `RC-14`. `RC-5` on a 5-bit bit string would just be 1 full cycle that doesn't have any impact on the bit string. So, `RC-14` would go through 2 full cycles (since `14 // 5 = 2`); so, it is equal to `RC-4` (for a 5-bit bit string, at least).

Knowing this, we can now reduce our problem to simpler terms and then solve.

0. ((RC-14 (LC-23 01101)) | (LS-1 10011) & (RS-2 10111))

1. ((RC-4 (LC-3 01101)) | (LS-1 10011) & (RS-2 10111))

2. ((RC-4 01011) | (LS-1 10011) & (RS-2 10111))

3. (10110 | (LS-1 10011) & (RS-2 10111))

4. (10110 | 00110 & (RS-2 10111))

5. (10110 | 00110 & 00101)

6. (10110 | 00100)

7. **10110**

## Finding Possible Bitstrings

Solving these types of problems take on a different method of solving,
as you are given an equation but not one of the bitstrings, which you then need to solve for. To depict this mystery bitstring, we typically use letters. So, if we had a mystery bitstring that is 5 bits long, then you could display that as `abcde`.

Working with letters for the first time can take a bit of adjusting, since letters are in no way similar to `0` and `1`. So, please refer to the following table below to understand how calculations work out:

Many of these concepts are ripped straight from the [Boolean Algebra](/resources/acsl/booleanalgebra) page. If you understand those concepts, you understand this.

| Operation | Result | Explanation |
| --- | --- | --- |
| `$\neg a$` | A | This is just our way of differentiating between `0` and `1` but in letter form. Note that `a` does not necessarily equal `0`; `A` is simply a placeholder to say that we have negated the value. |
| `$\neg A$` | a | Similarly, negating the negated version of `a` would return `a`.|
| `$a \oplus 0$` | a | If `a` was a 1, then the resultant value would be `1`. If `a` was a 0, then the resultant value would also be `0`. So, overall, the result is `a`. |
| `$a \oplus 1$` | A | If `a` was a 1, then the resultant value would be `0`. If `a` was a 1, then the resultant value would be `0`. Note how the end result is the opposite value of `a`; so, we mark the end result as `A`. |
| `$a$` & `$0$` | 0 | Regardless of what `a` is, this would always return `0` because one of the operands is already 0. (See [Annihilator Law](/resources/acsl/booleanalgebra#annihilatorlaw)) |
| `$a$` & `$1$` | a | If `a` was a 1, then the resultant value would be `1`. If `a` was a 0, then the resultant value would also be `0`. So, overall the result is `a`. (See [Identity Law](/resources/acsl/booleanalgebra#identitylaw)) |
| `$a$` \| `$0$` | a | Since one of the operands is already 0, then whether this operation returns a 0 or 1 all depends on `a`. If `a` is a 1, then the value also becomes `1`; the same applies for if `a` is a 0. So, overall, the result is `a`. (See [Identity Law](/resources/acsl/booleanalgebra#identitylaw)) |
| `$a$` \| `$1$` | 1 | Regardless of what `a` is, this would always return `1` because one of the operands is already 1, thus meeting the condition of the \| operator. (See [Annihilator Law](/resources/acsl/booleanalgebra#annihilatorlaw)) |

Now, using this table, please try the following problems:

### 3. List all possible values of x (5 bits long) that solve the following equation: (LS-1 (10110 XOR (RC-3 x) AND 11011)) = 01100. (This is from the ACSL Wiki).

Let's first mark `x` as `abcde`. Now, we can carry on:

0. (LS-1 (10110 XOR (RC-3 abcde) AND 11011)) = 01100
1. (LS-1 (10110 XOR cdeab AND 11011)) = 01100
2. (LS-1 (10110 XOR cd0ab)) = 01100
3. (LS-1 Cd1Ab) = 01100
4. d1Ab0 = 01100

At this point, you can now solve for a few variables. `d` correlates with `0`. `1` correlates with `1`; notice that while variables are not involved, this is a good way to ensure that you correctly evaluated the bit string. (Note that it is also possible to have *no* answers, so if you're 100% sure you did everything correctly but two constants don't line up, there are *no solutions.* Typically ACSL has solutions, so you probably won't need to worry about this.) `A` is equal to 1; so, `a` is equal to `0`. `b` is equal to `0`, and the final `0` correlates with 0.

So, altogether, `a` = 0, `b` = 0, and `d` = 0. We don't know about `c` or `e`, but their values don't actually matter. This is because regardless of what they are, the equation will always be reduced to what we have in Step 4 (the variables are annihilated somewhere along the line). 

Thus, our answer is `x` = `00*0*`, with the `*` standing for any value (`0` or `1`). During the ACSL contest, you should write these solutions out manually (unless noted otherwise) as: `00000`, `00100`, `00001`, and `00101`.

### 4. List all possible values of x (5 bits long) that solve the following equation: (LSHIFT-2 (RCIRC-3 (NOT x))) = 10100. (This is from someone else's Quizlet.)

Again, we will mark `x` as `abcde`. 

0. (LSHIFT-2 (RCIRC-3 (NOT abcde))) = 10100
1. (LSHIFT-2 (RCIRC-3 ABCDE)) = 10100
2. (LSHIFT-2 CDEAB) = 10100
3. EAB00 = 10100.

Now, the chances that we calculated this correctly are fairly high since the last two bit pairs match correctly (`0` and `0`). So, `E` = 1, `A` = 0, and `B` = 1.

This translates to `e` = 0, `a` = 1, and `b` = 0. The values of `c` and `d` don't matter and thus can either be `0` or `1`.

So, our answer is `x` = `10**0` with the `*` standing for any value (`0` or `1`). Fully written out, this would be: `10000`, `10100`, `10010`, and `10110`.

---
*Authors: Kelly Hong, Raymond Zhao*
