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

// Write program that reads a number and then multiplies 4 by that number of times... will need to create "loop" with branch conditions. After loop ends, should move on and use PRINT (just to help ppl see even more OPCODEs), then END program --> people should the final output (similar to Problem 2 from ACSL but with tweaks?)

// 3rd sample problem that takes a number and adds together its digits????? will need to do it the hard way because % operator doesnt exist 

