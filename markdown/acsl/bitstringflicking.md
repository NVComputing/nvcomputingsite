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

Most high-level languages support such operations. Bit strings can be used to represent sets in the form of binary sets. If you were to have a program with 8 different options that all have the choice of "Yes" or "No", one way to store this information would be with an array of size 7. However, an easier and less space-consuming way would be to use a bit string, with each option choice taking up one bit.

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
| and | & | A comparison is made between a bit and its corresponding bit (based on position) in the other bit string. If both bits are 1s, then the resultant bit will be a 1; otherwise, it will be 0. This is done for each bit in the bit strings.| `100011 and 011001` would return `000001`. |
| or | /| | Similar to *and*, bits are compared with the bits in the other bit string. If at least one bit is a 1, then the resultant bit will be a 1. This is done for each bit in the bit strings.| |
| xor | ⊕ | Again, this involves bit comparison. If one bit has a value of 0 while the other has a value of 1, then the resultant bit is 1 (so basically, if the bits have different values). This is done for each bit in the bit strings. | |

## Shift Operators

<br>

# Sample Problems

<br>
