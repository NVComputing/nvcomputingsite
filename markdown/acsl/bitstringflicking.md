# Bit String Flicking

## Contents
- [Introduction](#introduction)
- [Operators](#operators)
  - [Bitwise Operators](#bitwiseoperators)
  - [Shift Operators](#shiftoperators)
- [Sample Problems](#sampleproblems)

<br>

# Introduction

Bit strings are essentially just strings of binary digits (so, for example, `011010`) that can be manipulated in a variety of ways by operators (see Operators below). 

Most high-level languages support such operations. Bit strings can be used to represent sets in the form of binary sets. If you were to have a program with 8 different options that all have the choice of "Yes" or "No", one way to store this information would be with an array of size 8. However, an easier and less space-consuming way would be to use a bit string, with each option choice taking up one bit.

Understanding how bit strings work is very helpful in systems programming, assembly language programming, code optimization, and hardware design.

<br>

# Operators

<br>

## Bitwise Operators

All of these operators (except *not*) are binary operators, meaning that they must take in two operands, which must be the same length. In the case that they are of different lengths, then zeros will be added to the left of the shorter operand until it is the same length as the other operand. So, for example, if we had the operands `101111` and `101`, 3 zeros would need to be added to *101* to make it `000101`.

Since *not* is a unary operator, this condition does not apply.

| Operator | Symbol | Description | Example |
| --- | --- | --- | --- |
| not | ~ or ¬ | Logical negation is performed on each bit in the bit strings. 0s turn into 1s, and vice versa. | `~10110` would become `01001`. |
| and | & | A comparison is made between a bit and its corresponding bit (based on position) in the other bit string. If both bits are 1s, then the resultant bit will be a 1; otherwise, it will be 0. This is done for each bit in the bit strings.| `10001 and 01101` would return `00001`. |
| or | \| | Similar to *and*, bits are compared with the bits in the other bit string. If at least one bit is a 1, then the resultant bit will be a 1. This is done for each bit in the bit strings.| `101011 or 011001` would return `111011`. |
| xor | ⊕ | Again, this involves bit comparison. If one bit has a value of 0 while the other has a value of 1, then the resultant bit is 1 (so basically, if the bits have different values). This is done for each bit in the bit strings. | `101011 xor 011001` would return `110010`.|

## Shift Operators

As their name indicates, "shift" operators involve shifting bits around in a bit string. The direction in which they shift as well as how many positions they shift over by varies based on the operator. For the operators in the table below, we will include the abbreviation that we typically use for each operator. 

| Operator | Abbreviation | Description | Example |
| --- | --- | --- | --- |
| LSHIFT-x | LS-x | Each bit in the bit string is shifted over by *x* positions to the left. If its shift causes it to go "out of bounds", that bit will be lost; a 0 at the other end (the right) will be ended to preserve bit string length. | `LS-2 01101`: The first two bits, `01`, are lost when shifting because they go out of bounds, leaving us with `100` (temporarily). 2 zeros then take their place at the right end of the bit string, thus leaving us with `10100`.|
| RSHIFT-x | RS-x | Each bit in the bit string is shifted over by *x* positions to the right. If its shift causes it to "go out of bounds", that bit will be lost; a 0 at the other end (the left) will be ended to preserve bit string length. | `RS-3 01101`: The first three bits on the right, `101` are lost when shifting because they go out of bounds; now we have `01` left. 3 zeros take their place at the left end of the bit string. So, our resultant bit string is `00001`. |
| LCIRC-x | LC-x | Each bit in the bit string is shifted over by *x* positions to the left. If its shift causes it to "go out of bounds", then that bit will circulate to the other end (the right) rather than being lost. | `LC-3 01101`: The first three digits circulate over to the other end of the bit string in order. In order, the bit string goes from `01101` to `11010`, `10101`, and then finally `01011`. |
| RCIRC-x | RC-x | Each bit in the bit string is shifted over by *x* positions to the right. If its shift causes it to "go out of bounds", then that bit will circulate to the other end (the left) rather than being lost. | `RC-2 01011`: The first two digits on the right are circulated over to the other end of the bit string. So, `01011` becomes `10101` and then `11010`. |

So, while SHIFTs may cause there to be different bits, CIRCs only change the order of the existing bits.

<br>

# Sample Problems

<br>

mix of evaluate expression and find 5-digit possible value questions --> 2-4 questions
