# Data Structures

## Contents
- [Introduction](#introduction)
- [Stacks and Queues](#stacksandqueues)
  - [Stacks](#stacks)
  - [Queues](#queues)
- [Trees](#trees)
  - [Terminology](#terminology)
  - [Binary Search Trees](#binarysearchtrees)
    - [Inserting Nodes](#insertingnodes)
    - [Deleting Nodes](#deletingnodes)
    - [Searching for Nodes](#searchingfornodes)
  - [Other Types of Trees](#othertypesoftrees)
- [Priority Queues](#priorityqueues)
  - [Inserting Nodes](#insertingnodes)
  - [Deleting Nodes](#deletingnodes)
- [Path Lengths](#pathlengths)
- [Sample Problems](#sampleproblems)

<br>

# Introduction

Data structures make up an integral part of efficient algorithms. When you have a large amount of data to work with, data structures help you keep organized and manage everything properly.

ACSL specifically focuses on stacks, queues, binary search trees, and priority queues. The general idea behind each is covered but not the actual details regarding how to implement them in programs.

<br>

# Stacks and Queues

<br>

## Stacks

Stacks are generally used to save information to be processed later on. This applies to recursion (when a function calls on itself); the inner function call comes after the actual function call but is processed first. 

Stacks work in a "last in, first out" (LIFO) order. They support two operations, PUSH and POP. PUSH takes in a key, which is essentially a parameter, to insert at the top of the stack. So, `PUSH("A")` would add the key "A" to the top of the stack. POP is a bit different, as it is written as `X = POP()`. What this does is that it removes the top element in the stack and stores it in variable X. So, if there was a stack with its top element being "E", then writing `H = POP()` would store "E" in H. 

In the case that the POP operation is called on an empty stack, then the variable is given the special value NIL, which means "nonexistent".

## Queues

Queues, on the other hand, are often used to handle requests. It's similar to waiting in line (or a *queue* in Britain); the first people in line are processed first. Hence, queues follow a "first in, first out" (FIFO) order.

The PUSH operation works the same as it would with stacks. However, with POP, instead of removing the top (most recently added) element, queues have their bottom element removed.

<br>

# Trees

<br>

## Terminology

![Tree Example](<img src="https://miro.medium.com/proxy/1*4M5MU3CqJYGNExEi5Ttuew.png" width="100" height="100">)

## Binary Search Trees

Binary search trees are one way to store items in a particular order. They can efficiently insert, delete, and look for items within the tree.

### Inserting Nodes

### Deleting Nodes

### Searching for Nodes

## Other Types of Trees

<br>

# Priority Queues

Priority queues are similar to binary search trees. However, with deleting and finding items, they are limited to the first item/element. While they are more limited, that does not mean they are necessarily worse than binary search trees; in some situations, deleting and finding other items may not be very important and thus can be ignored.

<br>

## Inserting Nodes

## Deleting Nodes

<br>

# Path Lengths

<br>

# Sample Problems

<br>
