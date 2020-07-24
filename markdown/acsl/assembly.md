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

Just like programming today, execution starts from the first line down until the END instruction; exceptions are branch instructions (see List of OPCODEs), which loop back to an earlier part of the program if conditions are met. There exists the ACC, or "accumulator", which is essentially a special variable with an initial value of 0.

One line of an assembly language program is formatted as follows:

| LABEL | OPCODE | LOC |
| --- | --- | --- |
| x | ADD | =6 |

The LABEL field is optional; when paired with the DC command, it serves as a way to declare a variable. Otherwise, it essentially "marks" a line that you may want to utilize later on. OPCODEs are uppercase reserved words that cannot be used as a label. The LOC field can either reference a label defined in a previous line or immediate data (data not stored in a "variable"). When using immediate data, an = sign is put before the data. Only OPCODEs that do not modify the LOC field have the option of using immediate data; these are marked with a (^) symbol in the "List of OPCODEs" section down below.

<br>

# List of OPCODEs

Here are the general operations:

| OPCODE | Description | Example |
| LOAD | -- | -- |
| STORE | -- | -- |
| ADD | -- | -- |
| SUB | -- | -- |
| MULT | -- | -- |
| DIV | -- | -- |
| BG | -- | -- |
| BE | -- | -- |
| BL | -- | -- |
| BU | -- | -- |
| READ | -- | -- |
| PRINT | -- | -- |
| DC | -- | -- |
| END | -- | -- |

- **LOAD (^)** :
- **STORE** :
- **ADD (^)** :
- **SUB (^)** :
- **MULT (^)** :
- **DIV (^)** :
- **BG** :
- **BE** :
- **BL** :
- **BU** :
- **READ** :
- **PRINT** :
- **DC** :
- **END** :

<br>

# Sample Problems

