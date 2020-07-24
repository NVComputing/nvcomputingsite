# Assembly Language Programming

## Contents
- [Introduction](#introduction)
- [How It Works](#how-it-works)
- [List of OPCODEs](#list-of-opcodes)
- [Sample Problems](#sample-problems)

<br>

# Introduction

Many of us probably know that computers read instructions as `0`s and `1`s (binary); this is known as machine language.

Most of us have only used high-level languages that use English and common symbols for operations,
which is why they are much easier to understand for us. These languages abstract away the difficulty of understanding machine language,
but need a compiler to transform the code into machine code. This process makes high level languages far more inefficient than pure
binary instructions, but also much, much, much simpler to write.

A few well-known examples of high-level languages are Python, Java, and C++. (C++ is a little strange because it compiles directly to
assembly, circumventing many of the performance issues and making it a lower-level language.)

**Assembly** lies in the middle of machine languages and high-level languages. It is a *low-level language.*
They are slightly more "English-like" than machine languages, as assembly uses names to specify operations
instead of numbers. However, it's still much, much harder to program in assembly than and high-level language.

Since assembly is so low-level, it runs ridiculously quickly on all hardware, while simultaneously
being humanly possible to write (unlike machine code). It's applied in applications where performance is absolutely critical
(which is why C++ compiles to it). Knowing it can help you understand how hardware (like the CPU) works.
<br>

# How It Works

Execution of assembly starts from the first line down until the END instruction; exceptions are branch instructions (see List of OPCODEs),
which loop back to an earlier part of the program if conditions are met.
There's also something called the ACC, or "accumulator", which is essentially a special variable with an initial value of 0.

One line of an assembly language program is formatted as follows:

| LABEL | OPCODE | LOC |
| --- | --- | --- |
| x | ADD | =6 |

The LABEL field is optional; when paired with the DC command, it serves as a way to declare a variable. Otherwise, it essentially "marks" a line that you may want to utilize later on. OPCODEs are uppercase reserved words that cannot be used as a label. The LOC field can either reference a label defined in a previous line or immediate data (data not stored in a "variable"). When using immediate data, an = sign is put before the data. Only OPCODEs that do not modify the LOC field have the option of using immediate data; these are marked with a (^) symbol in the "List of OPCODEs" section down below.

<br>

# List of OPCODEs

Here are the general operations:

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

# Example Program


# Sample Problems

---
*Authors: Kelly Hong, Raymond Zhao*
