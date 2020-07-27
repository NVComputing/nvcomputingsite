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
| 2. <img src="https://user-images.githubusercontent.com/60682642/88572119-45efa000-d004-11ea-86af-db2e0565a8f0.png" width="100" height="100" /> | *M* is placed to the right of *A* because it comes later in the alphabet. | 6. <img src="https://user-images.githubusercontent.com/60682642/88572671-273dd900-d005-11ea-9c90-3b34257eb567.png" width="150" height="150" /> | *C* belongs on the right of *A* and to the left of *M*. Since *C* comes before *E*, it is placed to the left. |
| 3. <img src="https://user-images.githubusercontent.com/60682642/88572276-83542d80-d004-11ea-9ad9-967c9539b023.png" width="100" height="100" /> | *E* belongs on the right of *A*; however, because it comes before *M* in the alphabet, it is placed to the left of *M*. | 7. <img src="https://user-images.githubusercontent.com/60682642/88572723-450b3e00-d005-11ea-9333-66b9cdbb92d7.png" width="150" height="150" /> | *A* (the second one) is equal to the root *A*. So, it is placed to the left of the root. |
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

<img src="https://user-images.githubusercontent.com/60682642/88582873-01203500-d015-11ea-9418-1cceaa357410.png" width="200" height="200" />

Although the tree leans more to the left subbranch, which has 4 elements compared to 2 in the right subbranch, this is still considered balanced as they only differ in 1 node layer overall. 

### Full vs Complete Trees

A *Full tree*, or *strictly binary tree*, is drawn in a way such that each node (except the leaves) has 2 nodes; they are not necessarily balanced. For *complete trees*, each level besides the last level must be filled. For the last level, while it does not need to be completely filled, any nodes in that level are all located on the left side.

See the table below to understand the differences between the two in more detail:

| Tree <img width=600/> | Description <img width=100/> | Tree <img width=600/> | Description <img width=100/> |
| --- | --- | --- | --- |
| <img src="https://user-images.githubusercontent.com/60682642/88583851-6c1e3b80-d016-11ea-8108-4d2bcb340261.png" width="150" height="150" /> | It is not complete because the last level's nodes are not all left-oriented. It is not full either because there is 1 node with only 1 child. | <img src="https://user-images.githubusercontent.com/60682642/88583895-76d8d080-d016-11ea-83e7-7dc6ac7a02a8.png" width="150" height="150" /> | It is complete because every level other than the last level is filled; the node in the last level is also oriented on the left. It is not full, however, because nodes cannot have only 1 child. |
| <img src="https://user-images.githubusercontent.com/60682642/88583907-7cceb180-d016-11ea-9239-cebf219d486e.png" width="150" height="150" /> | It is full because each node indeed has 2 children besides the leaves. It is not complete because the nodes on the last level are not fully left-oriented. | <img src="https://user-images.githubusercontent.com/60682642/88583914-822bfc00-d016-11ea-8990-31fc7938327b.png" width="150" height="150" /> | Each node has 2 children except for the leaves, so it is full. Each level is filled except for the last level, whose nodes are left-justified, thus making the tree complete. |

<br>

# Path Lengths

Before moving further into priority queues, let's talk briefly about path lengths. In earlier sections, I addressed "layers"/"levels" of the tree; these can also be referred to as "depths". The root has a depth of 0; the next layer has a depth of "1", and this continues to increment for subsequent, deeper layers.

*Internal path length* (IPL) is the sum of the depths of all nodes in the tree. *External path length* (EPL) is the sum of the depths of the nodes that can be added to the tree's current leaves. An easier way to calculate the EPL is with this formula: `EPL = IPL + 2n`, where `n` represents the number of nodes in the tree.

| IPL <img width=250/> | EPL <img width=250/> |
| --- | --- |
| <img src="https://user-images.githubusercontent.com/60682642/88585115-472ac800-d018-11ea-98a7-087bd11a03e8.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88585034-2e221700-d018-11ea-9c07-061747091825.png" width="150" height="150" /> |
| There are 5 nodes here. Node 1 has a depth of 0 since it's the root. Nodes 2 and 3 have a depth of 1 each. Nodes 4 and 5 have a depth of 2 each. So, the IPL = `0 + 2(1) + 2(2) = 6`. | The squares represent the nodes that can be added to the tree. Two are of depth 2 while the other four are of depth 3. So, the EPL = `2(2) + 4(3) = 16`. We could also solve this with the formula. Since the IPL is 6, and there are 5 nodes, the EPL = `6 + 2(5) = 16`. |

<br>

# Priority Queues

<br>

Priority queues are similar to binary search trees. However, with deleting and finding items, they are limited to the first item/element. Their name comes from this particular feature; they prioritize the first element. While they are more limited, that does not mean they are necessarily worse than binary search trees; in some situations, deleting and finding other items may not be very important and thus can be ignored.

## Inserting Nodes

Priority queues are typically implemented using a *heap* data structure. When using a *min-heap*, the parent is always less than or equal to its children nodes; the root is the smallest element in the tree. Conversely, a *max-heap* is where the parent is greater than or equal to its children nodes, and the root is the largest element in the tree.

As you add nodes, the tree is filled in from left to right, top to bottom; a level must be completely filled before moving onto the next one. When you add the node, you need to compare it with its parent. For min-heaps, if the new node is less than the parent, then you should switch the two and continue moving up the heap until the formation is valid. A similar idea applies to max-heaps except that it's for when the new node is greater than the parent. By doing so, all of the smallest elements (or largest for max-heap) would be at the top of the tree.

Take this table as an example on how to implement *AMERICAN* with a min-heap:

| Step <img width=400/> | Description <img width=125/> | Step <img width=400/>| Description <img width=125/>|
| --- | --- | --- | --- |
| 1. <img src="https://user-images.githubusercontent.com/60682642/88590984-3fbbec80-d021-11ea-891f-6ca515f26e9d.png" width="75" height="75" /> | *A* is added like normal as the root of the new tree. | 5. <img src="https://user-images.githubusercontent.com/60682642/88591403-ea340f80-d021-11ea-9c87-7e3e0c6eded0.png" width="150" height="150" /> | *I* is first added as an child of *M*. However, because it is less than *M*, the two switch places. *I* is not less than *A*, so it does not move further up the heap. |
| 2. <img src="https://user-images.githubusercontent.com/60682642/88591079-667a2300-d021-11ea-91b0-787df1441e56.png" width="150" height="150" /> | *M* is added as a child of *A* on the left end. Since *M* is larger than *A*, it stays where it is. | 6. <img src="https://user-images.githubusercontent.com/60682642/88591594-31ba9b80-d022-11ea-9b52-cce3b6188314.png" width="150" height="150" /> | *C* is added as a child of *E*. However, since it is less than *E*, the two switch places. *C* is greater than *A*, so it does not switch places with the root. |
| 3. <img src="https://user-images.githubusercontent.com/60682642/88591135-7eea3d80-d021-11ea-9dbf-8dcbefdef609.png" width="150" height="150" /> | *E* is added into the tree. No shifting of nodes occurs since *E* is indeed larger than *A*. | 7. <img src="https://user-images.githubusercontent.com/60682642/88591782-7b0aeb00-d022-11ea-9fa9-c1d86b5e9162.png" width="150" height="150" /> | *A* (not the root) is added as a child of *C*. Since it is less than *C*, the two switch places. Although *A* has the same value as the root *A*, switching the two wouldn't make any difference. So the two *A*s can be kept as is. |
| 4. <img src="https://user-images.githubusercontent.com/60682642/88591248-aa6d2800-d021-11ea-8654-c263398b894c.png" width="150" height="150" /> | *R* is added into the tree and starts the next row since the previous row was completely filled. No shifts occur. | 8. <img src="https://user-images.githubusercontent.com/60682642/88591897-b60d1e80-d022-11ea-923e-6dde512cebd9.png" width="150" height="150" /> | *N* is added as a child of *R* and starts the next row. Since it is less than *R*, the two switch places. *N* is greater than *I*, it does not move further up the heap. We have now finishing constructing the tree. |

## Deleting Nodes

Just as a reminder, only the root can be deleted! To do so, replace the root with the rightmost node in the last node. Then, keep switching out the root with its smaller child (or larger child, if using max-heap) until the tree is finally valid. Make sure to make adjustions to the rest of the tree if needed. 

In the case that both of the root's children are smaller than the root itself, then choose the smallest child to replace the root with; of course, for max-heap, it would be that if both children are larger than the root, then the larger child should replace the root.

<br>

# Sample Problems

<br>

## 1. Stacks/Queues: Determine what the value of C would be if the operations below were performed on an initially empty stack. Analyze it as a queue afterward.

```code
PUSH(18)
B = POP()
PUSH(7)
PUSH(33)
C = POP()
A = POP()
```

As a stack... 18 would first be added to the stack; this would then be popped out and stored in B. Afterwards, 7 and 33 (in that order) are put into the stack. Because 33 was pushed into the stack later than 7, it is also the first to be popped; so, 33 is popped and stored into C, whereas 7 is stored in A. So, our final answer is **33**.

As a queue... 18 would be added first; then, this would be popped out and stored in B. Afterwards, 7 and 33 (in that order) are put into the queue. Since queues follow a "first in, first out" rule, 7 would be popped first and stored into C. 33 would consequently be stored in A. So, our final answer here would be **7**.

## 2. Create a priority queue of the letters COMPUTING with a min-heap. What are the letters in the bottommost row, from left to right?

| Construction <img width=250/> | <img width=250/> | <img width=250/> | <img width=250/> |
| --- | --- | --- | --- |
| <img src="https://user-images.githubusercontent.com/60682642/88599081-82d18c00-d030-11ea-820a-05ae219c2b55.png" width="75" height="75" /> | <img src="https://user-images.githubusercontent.com/60682642/88599116-9bda3d00-d030-11ea-9c44-ac25e8f72ef9.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88599145-b01e3a00-d030-11ea-9684-9752c47f0b4e.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88599183-c62bfa80-d030-11ea-9c56-638f1aecfec1.png" width="150" height="150" /> |
| <img src="https://user-images.githubusercontent.com/60682642/88599219-e2c83280-d030-11ea-8ba0-4758835bcb8c.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88600703-8c5cf300-d034-11ea-96d4-a210959fae0e.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88599371-36d31700-d031-11ea-9f10-51e8acb9c37b.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88599446-64b85b80-d031-11ea-8736-827a59e5cddd.png" width="150" height="150" /> |
| <img src="https://user-images.githubusercontent.com/60682642/88599524-95989080-d031-11ea-8f4d-0500a6ad0189.png" width="150" height="150" /> | | | |

So, the bottommost letters are *P* and *O*.

## 3. Create a binary search tree with the letters NEUQUA. What are the internal path length and external path length?

| Consruction  <img width=250/> | <img width=250/> | <img width=250/> |
| --- | --- | --- |
| <img src="https://user-images.githubusercontent.com/60682642/88599611-d1cbf100-d031-11ea-81ee-7733dc41770a.png" width="75" height="75" /> | <img src="https://user-images.githubusercontent.com/60682642/88599633-dbedef80-d031-11ea-8e93-71df7e0ca794.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88599662-e9a37500-d031-11ea-8bd1-dec4c16990b1.png" width="150" height="150" /> |
| <img src="https://user-images.githubusercontent.com/60682642/88599696-02ac2600-d032-11ea-8033-f1b31806d87b.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88599751-20798b00-d032-11ea-9392-dd9efc29918d.png" width="150" height="150" /> | <img src="https://user-images.githubusercontent.com/60682642/88599761-2b342000-d032-11ea-9665-d4962aacb079.png" width="150" height="150" /> |

The internal path length would be `0 + 2(1) + 2(2) + 3 = 9`. The external path length would be `9 + 2(6) = 21`.

---

Author: Kelly Hong
