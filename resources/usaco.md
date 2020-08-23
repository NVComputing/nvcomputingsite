# USACO
USACO is a multi-level online programming competition primarily focused on algorithms and efficiency.

## Contents
- [Contest Format / Details](#contestformat)
  - [Taking the Contest](#takingthecontest)
  - [Grading](#grading)
- [Levels](#levels)
- [Input / Output](#inputoutput)
- [Efficiency](#efficiency)
- [Problems](#problems)

# Contest Format

**_For full rules, check the <a href="http://usaco.org/index.php?page=instructions" target="_blank" rel="noopener noreferrer">USACO website’s rules page</a>._**

USACO is a programming competition that occurs **4 times** during the year.

(These dates are from last year, and are a rough estimate; they are not necessarily accurate for the 2020-2021 season.)_

*   Dec 13-16: First Contest
*   Jan 17-20: Second Contest
*   Feb 21-24: Third Contest
*   Mar 27-30: US Open

The first three contests are **identical in format**.

## Taking the Contest

You have a **4-day** window to begin the contest.
Pick a time that works for you, anytime during that 4-day window.

No outside help is allowed (you may not collaborate on this contest).
Once the contest begins, you have **4 hours** to view and solve **3 separate programming problems**
(usually about Farmer John and his cows).

These problems have varying difficulty depending on your level in USACO (scroll down to read more about levels).
All 3 problems are worth 333.333 points for a **total of 1000 points.** For each problem, the points are allocated evenly among every test case. If there are are 10 test cases for problem 1, 11 for problem 2, and 12 test cases for problem 3, each test case in problem 1 would  be worth 33.33 points, each test case in problem 2 will be worth 30 points, and each test case in problem three will be worth 27.77 points)

Problems are submitted online, and can be coded using a variety of languages. The full list is as follows:

- Java 8 (1.8.0_121 JRE)
- C++ 11
- C++
- C
- Python 2 (2.7.6)
- Python 3 (3.4.0)
- Pascal

(If you’re using Java, **make sure there is no “package” line at the top of your code.**)

## Grading

Problems are graded automatically by the USACO system.
The amount of test cases will vary by problem (typically around 10). Each of the test cases are worth an equivalent amount of points, and the total point value of all of them is 333.

Sometimes, earlier test cases will be significantly easier in terms of their required time complexity.
This means that if your code is very inefficient, **it should still be able to get the first few test cases for partial credit.**

There is **no penalty** for resubmitting.
However, if you submit multiple times, the LAST (**NOT THE BEST**) submission you submitted will be counted as your score.

If your program doesn’t compile, is missing output, or has a runtime error, the submission **will fail (will not be graded)** and you will be notified of the error.
Your program must also **first get the sample case correct** before grading begins.

Once your program passes initial compilation and the sample test case, it will be run against all the test cases.
There are a few codes for what caused a test case to fail.

- `T`: Timeout (you are provided 4 seconds in Java / 2 seconds in every other language for your code to successfully run and return a solution)
- `!`: Runtime Error (typical runtime errors, but also includes exceeding the memory limit, which is rare, but may happen)
- `X`: Wrong answer (your answer for the test case was incorrect)

If you manage to get 1000/1000 points in a contest (pass every test case), you get an **in-contest promotion.** (The score to get an in-contest promotion can sometimes be less than 1000, although this is very rare.)
This means that you can begin the competition for the next level up in the current 4-day contest window (you do not have to wait for the window to end to get promoted.)

Otherwise, you have to wait **until the window ends** to be able to be promoted. USACO will calculate cutoff scores based off of the results, and if your score is higher than the cutoff, you will be promoted to the next level. Depending on the contest, a score higher than a 750 or 800 will usually get you promoted.

However, the **US Open,** which serves as USACO’s national championship, has a few minor differences (everything else is the same).

*   Problems are significantly more difficult.
*   Contests are **5 hours** in length instead of 4.

# Levels

There are **4 levels** in USACO, each representing a different programming skill level.

*   Bronze
*   Silver
*   Gold
*   Platinum

Everybody begins at Bronze, and makes their way up through the course of different contests. There is a contest for each skill level for each USACO competition (i.e. Silver people don’t take the same contest as Bronze people).

You can find sample problems from past competitions <a href="http://usaco.org/index.php?page=contests" target="_blank" rel="noopener noreferrer">here</a>.

Make sure you can solve at least some of these.

Here is the list of what you need to know for each level’s programming competition / how to pass each level’s programming competition.

## Bronze

Bronze is the baseline level of USACO.

**Brute force** is usually sufficient to pass most bronze problems (you do not have nearly as many efficiency concerns as the upper levels.
To pass, you must be able to:
*   Solve and interpret a programming problem.
*   Know / be able to create basic algorithms and logic
    *   Looping, arrays, internal algorithms
## Silver

Silver is substantially harder than Bronze to get past.

Brute force **does not work many of the later test cases.** It should be used only if you are unable to come up with a more efficient algorithm, so you can at least get some points for the problem.


To pass, you must know:
*   Trees and basic graphs. (TREES ALMOST ALWAYS SHOW UP ON AT LEAST ONE PROBLEM IN SILVER!).
*   Prefix Sum (this is fairly common and often used in a greedy algorithm)
*   Data structures, such as maps, sets, and trees.
    *   Hash (HashMap, HashSet, etc.) is EXTREMELY helpful here to optimize your code.
*   How to come up with and implement efficient, optimal solutions for problems.

## Gold

This level is where getting any higher takes an extraordinary amount of effort (only 1 person in the last 2 years of Computing Team has gotten past this level).

Performance is everything. If your code is not extremely efficient, you will not get past this level.

To pass, you must know:
*   Dynamic Programming
*   Shortest Path Algorithms
*   Occasional use of Number Theory
## Platinum

This level is ridiculously difficult: if you score a perfect score in this during the US Open, you are essentially guaranteed a position in the 4 person US national team which competes in IOI (this is much more prestigious than ACSL and is practically a ticket to any college you want).
It is the computing equivalent of making USAMO.
To be successful in this level, you need to:
    *   Have a sophisticated understanding of how computing functions
    *   Have incredible proficiency in number theory and a very good mathematical background
    *   Become one with the graphs
    *   Have a highly developed understanding of time/space complexity and how to optimize code to the fullest
    *   Have a creative perspective to unique problems
    *   Have skills in pattern recognition and problem solving

# Input / Output

In USACO, input/output is done in a very specific manner.

Input and output are both done via files.
Input is always a file in the format: **(name).in**
You read this file and output your result to a file with the name: **(name).out**

For example, if you have a problem named Social Distancing, the input file would probably be named “socdist.in” and the output file “socdist.out”.

As a side note, because of the strict performance / time limits in USACO, you **might want to use BufferedReader** for performance purposes. Scanner works as well if you are more comfortable with it (it is significantly easier to learn and use), but BufferedReader is suggested for better input performance.

See the input/output document for language-specific details on inputting / outputting. (It has information about BufferedReader and Scanner.)

# Efficiency

When coding at a higher level, there are typically two different types of solutions. There are the efficient solutions and the naive solutions. Efficient solutions are typically better at managing time complexity, but it can also be better at managing space complexity. Naive solutions typically use either brute force or require far more computation to come up with a solution.

This can work for earlier test cases in USACO, but as the values and parameters get larger, they take longer and longer to run.

A very important tool to measure your code’s efficiency is known as **Big O Notation. **Big O is denoted with the syntax “O(some expression involving n)”. It is a way to determine how many operations your code requires to run.


Some examples of naive versus efficient code can be seen here.

## Problem

Given an array of n integers, find the subarray of size 2 with the largest sum. (members of subarrays do not have to be adjacent).
i.e. given the array [1, 2, 6, 5, 11], the largest subarray is [6, 11].

## Naive Solution

Check every single subarray of size 2 and perform a sum algorithm.  This gets extremely inefficient as n increases (it has a time complexity of **O(n^2)**).

This solution would check [1,2], [1,6], [1,5], [1,11], [2,6], [2,5], [2,11], [6, 5], [6,11], [5,11]. This takes 10 visits.

## Efficient Solution

Iterate through the array once to find the largest value, store that value, remove that value from the array, and iterate through the remaining array to find the second largest value. This is your subarray.

This is a far more efficient solution that will always finish in 2 traversals, regardless of the size of the array (it has a time complexity of **O(n)**). This takes only 9 visits, once you remove 11 in the second pass. Although this only seems to save you one visit, the amount of visits saved increases quadratically. In an array of size 600(this is relatively small in USACO standards), this algorithm takes only 1199 visits while the other takes 180,300 visits.

### Note

This problem also demonstrates the importance of understanding the problem correctly, as this problem is just a very confusing way of asking to find the largest two elements, and does not have much to do with subarrays. Many USACO problems, especially bronze will try to mask what they are asking in a much more wordy and complicated way.

## Problem

Given a sorted array of integers R, return the index of integer K in the array or return -1 if the value isn’t contained in the array. (This is a problem you should have already seen.)

### Naive Solution

Do a linear search through the array, which runs in O(n). This is something that you are probably familiar with and seems fairly efficient, but is impractical as n gets larger.

### Efficient Solution

Do a binary search through the array, which runs in O(log(n)). Those of you who took AP CSA probably learned this later in the year. This is very efficient, and runs quickly no matter how large n is.

- Time Complexity: You typically want your code to run at a pace of O(nlog(n)) or better after passing bronze.


Many of the problems require combining 2 to 3 different algorithms such as combining a max algorithm with calculation asked by the problem, so a good way to organize code is to have a new static method perform each algorithm. This way, everytime you find a logic error in your code, you can just edit it there. For the first example problem above, this would mean having a method perform the max algorithm search and calling it once for each of the two traversals.

## Common Techniques to Optimize Code

### Greedy Algorithm

*   This is a very common algorithm in USACO as it is used to not make questions too repetitive.
*   A greedy algorithm breaks a problem into parts and finds the most efficient solution to each part and then combines them together.
*   Prefix Sum
*   This problem assists in reducing the number of array traversals and is often paired with a greedy algorithm.
*   Prefix sums replace every index with the sum of all the prefix indexes and runs O(n) to create a prefix sum for both time and space complexity.
*   This is typically used to find sum of the values between two indices. Given indices A and B, this would normally take O(B-A), but with a prefix sum array, it can be done in O(1).

### Tree Traversal

*   Depth-First-Search
    *   This technique is typically done with recursion and goes through each branch individually.
*   Breadth-First-Search
    *   This technique is done with a queue and adds the leaves of a branch to the end of the queue after each branch is done.
*   Dynamic Programming
*   This technique is normally used to avoid recursion.
*   It can be used to optimize a brute force algorithm by making sure repeated method calls don’t occur.
*   This can be seen in the flood fill algorithm (this is algorithm used the paint bucket in MS paint)
*   Just use C++
*   It’s more efficient.
*   After you learn java, it should be relatively easy, there are just slight syntax adjustments and pointers you need to get used to. There is quite a steep learning curve, but learning C++ is worth it for the sheer efficiency bonus.
*   C++ runs much faster because it compiles directly to assembly and is heavily optimized while compiling.

# Problems

---
*Authors: Raymond Zhao, Nishikar Paruchuri, Nihal Shivannagari*
