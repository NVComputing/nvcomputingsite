# Efficiency
## Contents
- [General Tips](#generaltips)
- [Writing Efficient Code](#writingefficientcode)
- ["Big O" Notation](#bigonotation)
- [Example Problems](#exampleproblems)

# General Tips
* Try to limit your usage of for loops. For loops can take especially long, and are the main reason why your code is not passing time constraints.
* Avoid nesting loops.
* Even though they seem like a single function, methods such as `.sort` actually do take up time.

# Writing Efficient Code

When coding at a higher level, there are typically two different types of solutions. There are the efficient solutions and the naive solutions. Efficient solutions are typically better at managing time complexity, but it can also be better at managing space complexity. Naive solutions typically use either brute force or require far more computation to come up with a solution. 

This can work for earlier test cases in USACO, but as the values and parameters get larger, they take longer and longer to run.

# "Big O" Notation
A common way to measure the efficiency of code is to use "Big O" notation. They are formatted using a capital O, followed by a mathematical
formula in parentheses (e.g. O(log N)). Here's a list of the common "Big O"'s, in order of fastest to slowest:

| Notation | Example |
| --- | --- |
| `$O(1)$` | One simple action, such as `x++`.|
| `$O(\log(N))$` | Binary search, sorted set/maps and queues. |
| `$O(N)$` | A set amount of actions, such as a for loop with size `$N$`.|
| `$O(N\log(N))$` | Sorting algorithms (`Arrays.sort`, `Collections.sort`, etc.). |
| `$O(N^2)$` | Two nested for loops (one for loop inside the other). |
| `$O(2^N)$` | Iterating through every single subset. |
| `$O(N!)$` | Iterating through every single permutation. |

Generally, you want to keep your time complexity as low/fast as possible. Also, Big O Notation disregards the constant value, so if your `$N$` is like `$9 * 10^{17}$`, obviously `$O(N)$` will be
extremely slow.

In competitive programming, for example, the time limit for a problem is usually around 1-5 seconds.
You can determine the maximum allowable time complexity by looking at the time limit, and the limit of the
numbers given to you in the input. For most problems, `$O(N\log(N))$` is the highest you can go, but for some
particularly complex problems, `$O(N^2)$` or even `$O(N^3)$` can be acceptable (usually when the input is limited
to something like 1 < input < 10^3).

Examples of naive versus efficient code can be seen here.

# A Note on Logarithms

`$O(N\log(N))$` is a common time complexity that you see a lot in competitive programming, but how good is it exactly?

When I first began programming, I thought that `$O(N\log(N))$` was more or less "halfway" between `$O(N)$` and `$O(N^2)$`, but that's not the case.
In fact, `$O(N\log(N))$` is much, much, MUCH closer to `$O(N)$` than it is to `$O(N^2)$`.

This is because of the nature of logarithms. Logarithms grow extremely slowly, and even assuming a very low base of 2,
the logarithm of 10^6 is only 20. This means that, for N=10^6, `$O(N\log(N))$` is only 20 times slower than `$O(N)`.
On the other hand, `$O(N^2)$` is 1,000,000 times slower than `$O(N)`.

It's a bit unintuitive, but this example is given here to help you understand just how big the gap is.

# Example Problems
## Problem 1
Given an array of n integers, find the subarray of size 2 with the largest sum. (members of subarrays do not have to be adjacent).
i.e. given the array [1, 2, 6, 5, 11], the largest subarray is [6, 11].

### Naive Solution

Check every single subarray of size 2 and perform a sum algorithm.
This gets extremely inefficient as n increases (it has a time complexity of **O(n^2)**).

This solution would check [1,2], [1,6], [1,5], [1,11], [2,6], [2,5],
[2,11], [6, 5], [6,11], [5,11]. This takes 10 visits.

### Efficient Solution

Iterate through the array once to find the largest value, store that value,
remove that value from the array, and iterate through the remaining array to find the second largest value. This is your subarray.

This is a far more efficient solution that will always finish in 2 traversals,
regardless of the size of the array (it has a time complexity of **O(n)**).
This takes only 9 visits, once you remove 11 in the second pass.
Although this only seems to save you one visit, the amount of visits saved
increases quadratically. In an array of size 600(this is relatively small in USACO standards),
this algorithm takes only 1199 visits while the other takes 180,300 visits.

#### Note
This problem also demonstrates the importance of understanding the problem correctly.
This problem is just a very confusing way of asking to find the largest two elements,
and does not have much to do with subarrays. Many programming problems, especially in USACO Bronze,
try to mask what they're actually asking by using wordy descriptions or weird situations.

Make sure you're able to distill problems down to their roots.

## Problem 2
Given a sorted array of integers R, return the index of integer K in the array, or
return -1 if the value isn’t contained in the array. (This is a problem you should have
already seen.)

### Naive Solution
Do a linear search through the array, which runs in `$O(N)$`. This is something that you are probably familiar with and seems fairly efficient, but is impractical as n gets larger.

### Efficient Solution
Do a binary search through the array, which runs in `$O(log(N))$`.
Those of you who took AP Computer Science A probably learned this later in the year, and it runs much faster as time goes on.

## Problem 3
Given two sorted arrays, create a new array that is also sorted and contains all the elements of the two arrays.

### Naive Solution
Simply just attach the two arrays to each other to create a big array, then sort that array.
Using the fastest sorts (quicksort/mergesort), this would run in `$O(N\log(N))$`.

### Efficient Solution
Compare the first elements of the two arrays, and add the smaller one to the new array.
Remove that element from the array, and repeat until one of the arrays is empty.
Then, add the remaining elements of the other array to the new array.

This merges the two arrays without ever sorting them, and runs in `$O(N)$`.

---
*Authors: Raymond Zhao, Nishikar Paruchuri, Nihal Shivannagari, Daniel Li*
