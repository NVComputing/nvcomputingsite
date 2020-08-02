# Computer Number Systems

## Contents
- [Introduction](#introduction)
- [Understanding Binary, Octal, Decimal, and Hexadecimal](#understandingbinarydecimalandhexadecimal)
- [Converting between Bases](#convertingbetweenbases)
  - [Special Conversions with Binary](#specialconversionswithbinary)
- [Arithmetic for Numbers in Other Bases](#arithmeticfornumbersinotherbases)
  - [Addition](#addition)
  - [Subtraction](#subtraction)
  - [Multiplication](#multiplication)
- [Sample Problems](#sampleproblems)

<br>

# Introduction

<br>

# Understanding Binary, Octal, Decimal, and Hexadecimal

<br>

# Converting between Bases

There are many tricks that can be used to convert between bases. However, this is a simple all use strategy to convert from any base to base 10 and to base 10 from any base.

Any base to base 10:

- Suppose there is a number D with N digits in base K.
  - This would be written D<sub>N</sub> D<sub>N-1</sub> D<sub>N-2</sub> ... D<sub>3</sub> D<sub>2</sub> D<sub>1</sub>
- To calculate the value in base 10, it is as simple as taking the same of every digit D<sub>a</sub> and multiplying it by k<sup>a-1</sup>.
  - This would be formally written as \sum_{i=1}^{10} (D<sub>i</sub>* k<sup>i-1</sup>).

Base 10 to any base:

- The process is simple yet repetitive.
- Suppose there is a number D in base 10 and you want it to be stored to T in base K.
- You would divide D by K and find the remainder. You would then make the remainder the first digit of T and set D to the quotient you got.
- Then, you simply have to repeat this process until D is 0, leaving you with the solution, T!
<br>

## Special Conversions with Binary

<br> 

# Arithmetic for Numbers in Other Bases

<br>

## Addition

## Subtraction

## Multiplication

<br>

# Sample Problems

<br>
