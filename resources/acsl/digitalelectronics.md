# Digital Electronics

## Contents
- [Introduction](#introduction)
- [Definitions](#definitions)
- [Sample Problems](#sampleproblems)

<br>

# Introduction

Digital electronics is a way to visualize boolean algebra using drawn-out circuits (also
known as logic gates). Be sure to make sure you understand all of the boolean operations;
check out the [Boolean Algebra](/resources/acsl/booleanalgebra) page if needed.

Do note that there may be multiple ways to display the same boolean expression.

<br>

# Definitions

Please refer to the table below. Operators that were not mentioned on the Boolean
Algebra page will come with an extra explanation.

| Name | Logic Gate | Algebraic Expression | Extra Notes |
| --- | --- | --- | --- |
| BUFFER | <img src="/res/acsl/digitalelectronics/buffer.png" width="200" height="50 /> | `$X = A$` | This logic gate doesn't really do much; the output is the input. |
| NOT | <img src="/res/acsl/digitalelectronics/not.png" width="200" height="75" /> | `$X = \overline{A} = \neg A$` | |
| AND | <img src="/res/acsl/digitalelectronics/and.png" width="200" height="75" /> | `$X = AB = A \bullet B$` | |
| NAND | <img src="/res/acsl/digitalelectronics/nand.png" width="200" height="75" /> | `$X = \overline{AB} = \overline{A \bullet B}$` | This is the opposite of the *and* operator. Whatever is evaluated as true for the *and* operator becomes false, and vice versa. |
| OR | <img src="/res/acsl/digitalelectronics/or.png" width="200" height="75" /> | `$X = A + B$` | |
| NOR | <img src="/res/acsl/digitalelectronics/nor.png" width="200" height="75" /> | `$X = \overline{A + B}$` | This is the opposite of the *or* operator. Whatever is evaluated as true for the *or* operator becomes false, and vice versa. | 
| XOR | <img src="/res/acsl/digitalelectronics/xor.png" width="200" height="75" /> | `$X = A \oplus B$` | | 
| XNOR | <img src="/res/acsl/digitalelectronics/xnor.png" width="200" height="75" /> | `$X = \overline{A \oplus B} = A \odot B$` | |

Notice how adding the little extra circle causes the logic gate to become negated. So, for example, OR becomes NOR after
adding the little circle is added to the OR logic gate.

<br>

# Sample Problems 

## 1. Write out the following circuit as a boolean expression. Then, simplify.

## 2. How many ordered 3-tuples (A, B, C) make the following circuit FALSE?
