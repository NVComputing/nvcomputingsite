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

Trees consist of elements called *nodes* that are connected by *edges*. The *root* is the top node in the tree. *Parent* nodes are nodes that have other nodes, *children* nodes, stemming from them. *Leaves* are the nodes that do not have any other children nodes stemming from them. Nodes that have the same immediate parent are *siblings*.

So, in the following table below, 7 is the root. 7, 2, and 9 are all parent nodes. 2, 9, 1, 5, and 14 are all children nodes; notice that parent nodes can also be children nodes of other nodes. 1, 5, and 14 are leaves. 1 and 5 are siblings.

<img src="https://miro.medium.com/proxy/1*4M5MU3CqJYGNExEi5Ttuew.png" width="150" height="100" />

## Binary Search Trees

Binary search trees are one way to store items in a particular order. They can efficiently insert, delete, and look for items within the tree. 

Each node can have a total of two children. The left child must be less than or equal in value, whereas the right child must be greater in value. With numbers, this is easy enough; as for alphabet letters, they are considered to be "less than" another letter if they come earlier in the alphabet. So, for example, A < E.

### Inserting Nodes

Inserting a node requires knowing its position relative to existing nodes. Here's an example:

| AMERICAN | | | |
| --- | --- | --- | --- |
| <img src="https://user-images.githubusercontent.com/60682642/88571933-0032d780-d004-11ea-80ec-62f278e342a1.png" width="75" height="75" /> | <img src="https://user-images.githubusercontent.com/60682642/88572119-45efa000-d004-11ea-86af-db2e0565a8f0.png" width="75" height="75" /> | <img src="https://user-images.githubusercontent.com/60682642/88572276-83542d80-d004-11ea-9ad9-967c9539b023.png" width="75" height="75" /> | <img src="https://user-images.githubusercontent.com/60682642/88572406-b39bcc00-d004-11ea-8954-6190a61c2d84.png" width="75" height="75" /> |
| 

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
