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
  - [Classifying Trees Even Further](#classifyingtreesevenfurther)
    - [Balanced Trees](#balancedtrees)
    - [Full vs Complete Trees](#fullvscompletetrees)
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

Inserting a node requires knowing its position relative to existing nodes. Here's an example with the word *AMERICAN*:

| Step <img width=400/> | Description <img width=125/> | Step <img width=400/>| Description <img width=125/>|
| --- | --- | --- | --- |
| 1. <img src="https://user-images.githubusercontent.com/60682642/88571933-0032d780-d004-11ea-80ec-62f278e342a1.png" width="75" height="75" /> | *AMERICAN* starts with an *A*; thus, it is natural to make the tree's root an *A*. | 5. <img src="https://user-images.githubusercontent.com/60682642/88572623-11301880-d005-11ea-9df9-2f47d33f1063.png" width="150" height="150" /> | *I* belongs on the right of *A*. It belongs to the left of *M* as well. *I* comes later in the alphabet than *E*, so *I* is placed to the right of *E*. |
| 2. <img src="https://user-images.githubusercontent.com/60682642/88572119-45efa000-d004-11ea-86af-db2e0565a8f0.png" width="100" height="100" /> | *M* is placed to the right of *A* because it comes later in the alphabet. | 6. <img src="https://user-images.githubusercontent.com/60682642/88572723-450b3e00-d005-11ea-9333-66b9cdbb92d7.png" width="150" height="150" /> | *C* belongs on the right of *A* and to the left of *M*. Since *C* comes before *E*, it is placed to the left. |
| 3. <img src="https://user-images.githubusercontent.com/60682642/88572276-83542d80-d004-11ea-9ad9-967c9539b023.png" width="100" height="100" /> | *E* belongs on the right of *A*; however, because it comes before *M* in the alphabet, it is placed to the left of *M*. | 7. <img src="https://user-images.githubusercontent.com/60682642/88572671-273dd900-d005-11ea-9c90-3b34257eb567.png" width="150" height="150" /> | *A* (the second one) is equal to the root *A*. So, it is placed to the left of the root. |
| 4. <img src="https://user-images.githubusercontent.com/60682642/88572406-b39bcc00-d004-11ea-8954-6190a61c2d84.png" width="100" height="100" /> | *R* belongs on the right of *A*. Since it also comes after *M*, it is placed to the right of *M*. | 8. <img src="http://www.categories.acsl.org/wiki/images/thumb/b/bf/Bst-american.svg/300px-Bst-american.svg.png" width="150" height="150" /> | *N* comes after *A* and *M*, so it belongs on the right of those. However, it is placed to the left of *R*, which comes even later. |

Note that if you were to switch out the positions of the letters in *AMERICAN* to become something like *MCEAANIR*, the tree would look very different.

### Deleting Nodes

In the case that a node needs to be deleted, this generally involves some minor shifting. Less, equal, and greater relationships between nodes still have to be considered for proper placement.

| Original <img width=300/> | Deletion <img width=300/> | Description <img width=150/> |
| --- | --- | --- |
| | <img src="http://www.categories.acsl.org/wiki/images/thumb/8/8a/Bst-american-del-i.svg/300px-Bst-american-del-i.svg.png" width="150" height="150" /> | *I* has been removed. Since it had *no* children, no shifts needed to be made.
| <img src="http://www.categories.acsl.org/wiki/images/thumb/b/bf/Bst-american.svg/300px-Bst-american.svg.png" width="150" height="150" /> | <img src="http://www.categories.acsl.org/wiki/images/thumb/3/39/Bst-american-del-r.svg/300px-Bst-american-del-r.svg.png" width="150" height="150" /> | *R* has been removed. Since it had *1* child, that child was moved up to be on the right of *M*. Since *N* comes after *M*, this shift is valid. |
| | <img src="http://www.categories.acsl.org/wiki/images/thumb/3/3c/Bst-american-del-m.svg/300px-Bst-american-del-m.svg.png" width="150" height="150" /> | *M* has been removed. So, the left branch of *M* is moved up to take *M*'s place. *M*'s right branch is placed to the right of that branch. |            

### Searching for Nodes

To search for a specific code, refer to the following pseudocode algorithm:

```code
p = root
found = FALSE
while (p ≠ NIL) and (not found)
  if (x < p’s key)
    p = p’s left child
  else if (x > p’s key)
    p = p’s right child
  else
    found = TRUE
  end if
end while
```

So, searching first starts at the root of the tree and works its way down, moving either left or right based on what character you are searching for and where it is positioned within the tree. As an example, I will once again use the *AMERICAN* tree and attempt to find *E*.

<img src="http://www.categories.acsl.org/wiki/images/thumb/b/bf/Bst-american.svg/300px-Bst-american.svg.png" width="150" height="150" />

First, *p* is set to the root, *A*. *x* holds the value we are trying to find, *E*. 

Then, we move on to the while loop, whose conditions have both been met. In this loop, since *E* > *p*'s key, *p* is then set to equal *M*. The cycle then ends, and we start the loop anew. This time, *E* < *p*'s key, so *p* is now set to equal *E*. Note that the while loop does not stop here! Instead, it would traverse through the loop once again and then execute the "else" statement to make *found = TRUE*. 

So, by following this pseudocode, we have now successfully found our desired node.

## Classifying Trees Further

We've thoroughly worked with the *AMERICAN* binary search tree long enough, and now let's analyze it a bit more just for good measure. 

### Balanced Trees 

If we were to compare the left and right branches of the root, we can see that the left branch has significantly less nodes to work with, thus making the tree very unbalanced. The more unbalanced a tree is, the longer it takes to search for a node. 

Let's compare these two images:

| Unbalanced <img width=250/> | Balanced <img width=250/> |
| --- | --- |
| <img src="https://user-images.githubusercontent.com/60682642/88579998-93720a00-d010-11ea-9766-a4f50a113265.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88580022-9c62db80-d010-11ea-911c-fc6290d290ff.png" width="150" height="150" /> |

While these two trees display the same elements, they are drastically different because of the order the elements were put into the tree. If we wanted to search for 7 and used the pseudocode mentioned earlier in "Searching for Nodes", it would take us 7 loop cycles using the unbalanced tree to find it. On the other hand, it would only take us 3 cycles with the balanced tree because there were less "layers" to the tree to work with; that is why balanced trees are much more efficient overall.

There is some leeway given to balanced trees; as long as the left and right branches of any particular node differ in the number of layers by no more than 1, then the tree is still considered balanced. See the image below:

<img src="https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/_images/BSTBal.png" width="150" height="150" />

Both *a)* and *b)* are balanced trees. In *a)*, 7 is slightly unbalanced because it has no right node to balance out the left node. However, since this difference is only by 1 node, then the tree is still considered balanced.

### Full vs Complete Trees

A *Full tree*, or *strictly binary tree*, is drawn in a way such that each node (except the leaves) has 2 nodes; they are not necessarily balanced. *Complete trees* 

<br>

# Path Lengths

<br>

# Priority Queues

Priority queues are similar to binary search trees. However, with deleting and finding items, they are limited to the first item/element. While they are more limited, that does not mean they are necessarily worse than binary search trees; in some situations, deleting and finding other items may not be very important and thus can be ignored.

<br>

## Inserting Nodes

## Deleting Nodes

<br>

# Sample Problems

<br>
