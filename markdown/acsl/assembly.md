# Assembly Language Programming

## Contents
- [Introduction](#introduction)
- [How It Works](#how-it-works)
- [List of OPCODEs](#list-of-opcodes)
- [Sample Problems](#sample-problems)

<br>

# Introduction

Many of us probably know that computers read instructions as 0s and 1s (binary); this is known as machine language. Now, we have high-level languages that use English and common symbols for operations, which is why they are much easier to understand by us. A few well-known examples are Python, Java, C++, and many others. 

Assembly languages lie in the middle of machine languages and high-level languages. It is a *low-level language.*
They are slightly more "English-like" than machine languages, as Assembly uses names to specify operations
instead of numbers. The advantages of knowing how assembly languages work include understanding hardware more deeply and meeting time/space constraints.

<br>

# How It Works

Just like programming today, execution starts from the first line down until the END instruction; exceptions are branch instructions (see List of OPCODEs), which loop back to an earlier part of the program if conditions are met. There exists the ACC, or "accumulator", which is essentially a special variable with an initial value of zero.

One line of an assembly language program is formatted as follows:

| LABEL | OPCODE | LOC |
| --- | --- | --- |
| x | ADD | =6 |

The LABEL field is optional; when paired with the DC command, it serves as a way to declare a variable. Otherwise, it essentially "marks" a line that you may want to utilize later on. OPCODEs are uppercase reserved words that cannot be used as a label. The LOC field can either reference a label defined in a previous line or immediate data (data not stored in a "variable"). When using immediate data, an = sign is put before the data. Only OPCODEs that do not modify the LOC field have the option of using immediate data; these are marked with a (^) symbol in the "List of OPCODEs" section down below.

<br>

# List of OPCODEs

Here are the general operations:

| OPCODE | Description |
| -- | -- |
| LOAD (^) | The value of LOC is stored into the ACC. So, if LOC is a variable, Q, with a value of 3, then ACC will store the value 3. |
| STORE | The opposite of LOAD, the value of ACC is stored into LOC. |
| ADD (^) | The value of LOC is added to ACC. The sum becomes the new value of ACC. So, if LOC is =4 and ACC's value is 2, then ACC's new value will be 6. |
| SUB (^) | The value of LOC is subtracted from ACC. The difference becomes the new value of ACC. |
| MULT (^) | The value of LOC is multiplied by ACC's value. The product becomes the new value of ACC. |
| DIV (^) | ACC's value is divided by the value of LOC. The quotient becomes the new value of ACC; decimals are rounded down to integers. |
| BG | This branch instruction will return to the instruction labeled with LOC if ACC's value is greater than 0 (hence B**G** for "greater"). So, if ACC's value is 3, and LOC is *TOP*, then the program will move back to the instruction labeled as *TOP*.|
| BE | This branch instruction will return to the instruction labeled with LOC if ACC's value is equal to 0 (hence B**E** for "equal"). |
| BL | This branch instruction will return to the instruction labeled with LOC if ACC's value is less than 0 (hence B**L** for "less"). |
| BU | This branch instruction will return to the instruction labeled with LOC regardless of what ACC's value is (hence B**U** for "unconditional"). |
| READ | This essentially serves as a way to read user input into LOC. So, writing "    \ READ \ X " will read for an input and store it into X. |
| PRINT | This is exactly as it sounds; it prints the value of LOC. |
| DC | This is a way to declare a variable. The LABEL field is mandatory, as it is where the name of your variable will go. The ACC is not changed in any way. So, writing " VAR \ DC \ 2 " would give me a variable, VAR, with the value of 2. |
| END | This signals the end of your program. The LOC field must be kept empty. |

<br>

# Sample Problems

As you solve these problems, it can be very easy to lose track of everything! So, it may be wise to create a table that can keep track of the values of ACC and any other variables that may have been defined in the program.

// TODO

// Can take Problem 1 from ACSL wiki page

## 1. After the following program is executed, what value is in location TEMP? (This is from the ACSL Wiki.)

| LABEL | OPCODE | LOC |
| -- | -- | -- |
| TEMP | DC | 0 |
| A | DC | 8 |
| B | DC | -2 |
| C | DC | 3 |
| | LOAD | B |
| | MULT | C |
| | ADD | A |
| | DIV | B |
| | SUB | A |
| | STORE | TEMP |
| | END | |

This program defines 4 variables: TEMP, A, B, and C. The value of B (-2) is loaded into the ACC. The value of ACC is multiplied by C, or 3; so, the new value of ACC becomes -6. Then, ACC holds a value of 2 (-6 + 8), -1 (2 / -2), and then -9 (-1 - 8). This value is then stored into TEMP; thus, TEMP has a value of -9.

## 2. What is printed in this program?

| LABEL | OPCODE | LOC |
| -- | -- | -- |
| | READ | Q |
| W | DC | 2 |
| | LOAD | Q |
| TOP | SUB | =1 |
| | BE | DONE |
| | STORE | Q |
| | LOAD | W |
| | MULT | =2 |
| | STORE | W |
| | LOAD | Q |
| | BU | TOP |
| DONE | PRINT | W |
| | END | |

This program loops between TOP and DONE (DONE not being included) for a total of Q times. To solve through this type of problem, it may help to assign your own value to Q and work through the program with that value; in general, it's always good to choose a smaller number. In this solution explanation, we will use the number 3. Look at the following table below to understand how the program changes over time:

| Instruction | ACC | Q | W |
| -- | -- | -- | -- |
| READ | | 3 | |
| DC | | 3 | |
| DC | | 3 | 2 |
| LOAD | 3 | 3 | 2 |
| SUB | 2 | 3 | 2 |
| STORE | 2 | 2 | 2 |
| LOAD | 2 | 2 | 2 |
| MULT | 4 | 2 | 2 |
| STORE | 4 | 2 | 4 |
| LOAD | 2 | 2 | 4 |
| SUB | 1 | 2 | 4 |
| STORE | 1 | 1 | 4 |
| LOAD | 4 | 1 | 4 |
| MULT | 8 | 1 | 4 |
| STORE | 8 | 1 | 8 |
| LOAD | 1 | 1 | 8 |
| SUB | 0 | 1 | 8 |

Now that ACC is equal to 0, the branch instruction BE after SUB now applies, thus taking us to DONE, where the value of W, or 8, is printed. The program then ends. Notice the pattern with W; it was initially equal to 2, but then became 4 and finally 8. As we said before, we inputted a 3 for Q. 2 ^ 3 = 8; so, this program prints 2 ^ Q.




