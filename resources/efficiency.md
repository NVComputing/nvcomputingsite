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

Generally, you want to avoid doing anything above `$O(N)$`. In smaller cases, `$O(N\log(N))$` and `$O(N^2)$` are forgivable, but be cautious
when doing so. Also, Big O Notation disregards the constant value, so if your `$N$` is like `$9 * 10^{17}$`, obviously `$O(N)$` will be
extremely slow.

Examples of naive versus efficient code can be seen here.

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
Given a sorted array of integers R, return the index of integer K in the array or
return -1 if the value isn’t contained in the array. (This is a problem you should have
already seen.)

### Naive Solution
Do a linear search through the array, which runs in `$O(n)$`. This is something that you are probably familiar with and seems fairly efficient, but is impractical as n gets larger.

### Efficient Solution
Do a binary search through the array, which runs in `$O(log(n))$`.
Those of you who took AP Computer Science A probably learned this later in the year, and it runs much faster as time goes on.

## Problem 3
Given an array of size `$N$`, find the sum of the values from index `$A$` to index `$B$`.

### Naive Solution
Input the entire array, loop through the given indices to find the sum. This runs in `$O(qN)$`, where `$q$` will be the number of indices
between `$A$` and `$B$`. Unless your problem specifically states that the `$q$` will be less than a certain number, we can assume that it will
go up to extreme values. Therefore, `$O(qN)$` will be too slow.

### Efficient Solution
Use [prefix sums](https://usaco.guide/silver/prefix-sums?lang=java) (also explained in our USACO page). Instead of inputting the array,
input a prefix sum array that will show the sum at that specific index instead of the value. To find the sum between the two indices, take
`$P[B] - P[A - 1]$`. This runs in `$(N)$` time, which is much faster.

---
*Authors: Raymond Zhao, Nishikar Paruchuri, Nihal Shivannagari, Daniel Li*
