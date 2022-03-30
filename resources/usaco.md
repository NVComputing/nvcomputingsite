# USACO
USACO is a multi-level online programming competition primarily focused on algorithms and efficiency.

## Contents
- [Contest Format / Details](#contestformat)
  - [Taking the Contest](#takingthecontest)
  - [Grading](#grading)
- [Levels](#levels)
- [Input / Output](#inputoutput)
- [Optimizing Code](#optimizingcode)
- [Problems](#problems)

# Contest Format

**_For full rules, check the <a href="http://usaco.org/index.php?page=instructions" target="_blank" rel="noopener noreferrer">USACO website’s rules page</a>._**

USACO is a programming competition that occurs **4 times** during the year.

*   Dec 17-20: First Contest
*   Jan 28-31: Second Contest
*   Feb 25-28: Third Contest
*   Mar 25-28: US Open

The first three contests are **identical in format**.

## Taking the Contest

You have a **4-day** window to begin the contest.
Pick a time that works for you, anytime during that 4-day window.

No outside help is allowed (you may not collaborate on this contest).
Once the contest begins, you have **4 hours** to view and solve **3 separate programming problems**
(usually about Farmer John and his cows).

These problems have varying difficulty depending on your level in USACO (scroll down to read more about levels).
All 3 problems are worth 333.333 points for a **total of 1000 points.** For each problem, the points are allocated evenly among every test case. If there are are 10 test cases for problem 1, 11 for problem 2, and 12 test cases for problem 3, each test case in problem 1 would  be worth 33.33 points, each test case in problem 2 will be worth 30 points, and each test case in problem three will be worth 27.77 points.

Problems are submitted online, and can be coded using a variety of languages. The full list is as follows:

- Java 8 (1.8.0_121 JRE)
- C++ 11
- C++
- C
- Python 2 (2.7.6)
- Python 3 (3.4.0)

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

- `T`: Timeout (you are provided 4 seconds in Java and Python / 2 seconds in every other language for your code to successfully run and return a solution)
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
* Interpret a programming problem.
* Know / be able to create basic algorithms and logic.
    * Looping, arrays, internal algorithms
* Know / be able to transfer your own thoughts to code.


## Silver

Silver is substantially harder than Bronze to get past.

Brute force **does not work many of the later test cases.** It should be used only if you are unable to come up with a more efficient algorithm, so you can at least get some points for the problem.

To pass, you must know:
* Trees and basic graphs. (TREES ALMOST ALWAYS SHOW UP ON AT LEAST ONE PROBLEM IN SILVER!).
* Prefix Sum (this is fairly common and often used in a greedy algorithm)
* Data structures, such as maps, sets, and trees.
    * Hash (HashMap, HashSet, etc.) is EXTREMELY helpful here to optimize your code.
* Efficient algorithms for sorting/searching
* How to come up with and implement efficient, optimal solutions for problems.

## Gold

This level is where getting any higher takes an extraordinary amount of effort (only 1 person in the last 2 years of Computing Team has gotten past this level).

Performance is everything. If your code is not extremely efficient, you will not get past this level.

To pass, you must know:
*   Dynamic Programming
*   Shortest Path Algorithms
*   Number Theory

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

**As of December 2020, the input/output method for USACO has been changed.**

USACO now uses the standard input/output (i.e. System.in/System.out in java).

**For contests before December 2020, read below:**

In USACO, input/output is done in a very specific manner.

Input and output are both done via files.

Input is always a file in the format: **(name).in**

You read this file and output your result to a file with the name: **(name).out**

For example, if you have a problem named Social Distancing, the input file would probably be named “socdist.in” and the output file “socdist.out”.

As a side note, because of the strict performance / time limits in USACO, you **might want to use BufferedReader** for performance purposes. Scanner works as well if you are more comfortable with it (it is significantly easier to learn and use), but BufferedReader is suggested for better input performance.

See the [input/output page](/resources/io) for language-specific details on inputting / outputting. (It has information about BufferedReader and Scanner.)

# Optimizing Code

There are a few tricks you can and should use to optimize your code.

Many of these tricks involve knowing a certain algorithm - oftentimes, problems will require some sort of obscure algorithm that you have never heard about before to solve efficiently.

## Greedy Algorithm

* This is a very common algorithm in USACO as it is used to not make questions too repetitive.
* A greedy algorithm, as stated in the name, finds the fastest solutions **at the moment**. 
* A greedy algorithm never goes back on its work and constructs a direct solution.

A basic example would be:

"Given a list of houses and their prices, determine the maximum amount of houses you can buy within a certain budget."

We would want to use the greedy algorithm here because we know that in order to maximize the number of houses we buy, we must select the cheapest
ones possible. Using the greedy algorithm, we would select the cheapest house every time until we run out of budget.

Of course, 99.9% of all programming problems will not be this simple. However, the fundamental concept is the same: selecting the best
option **at the moment**.

## Prefix Sums
The simplest way to explain prefix sums is to show a basic example: finding the sum of part of an array. In this case, we want to find the sum of `$[1, 3]$`.

|Index| 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
|Value| 3 | 2 | 5 | 1 | 6 |

The most basic way of doing so is to loop through the indices and sum them up, taking `$O(N)$` time to do so:

`$A[1] + A[2] + A[3] = 2 + 5 + 1 = 8$`.

However, a much faster way is to construct a "sum" array as we input it:

|Index| 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
|Value| 3 | 5 | 10 | 11 | 17 |

Now, if we want to find the entire sum of the array, we just take `$A[4] = 17$`. This takes `$O(1)$` time. If we want to find the sum between two indexes,
such as `$[1,3]$`, we can take `$A[3] - A[0] = 8$`, which is the same answer we got above.

The general form of taking the prefix sum of an array from index `$[X, Y]$` would be `$A[Y] - A[X - 1]$`.


## Dynamic Programming

*   This technique is normally used to avoid recursion.
*   It can be used to optimize a brute force algorithm by making sure repeated method calls don’t occur.
*   This can be seen in the flood fill algorithm (this is algorithm used the paint bucket in MS paint)
*   It can also be seen in the efficient Fibonacci series algorithm.

## Just use C++

*   It’s more efficient.
*   After you learn java, it should be relatively easy, there are just slight syntax adjustments and pointers you need to get used to. There is quite a steep learning curve, but learning C++ is worth it for the sheer efficiency bonus.
*   C++ runs much faster because it compiles directly to assembly and is heavily optimized while compiling.

# Problems

For example problems, please check the [USACO website.](http://usaco.org/index.php?page=contests)

If you would like to see a walkthrough of problems and how we solved them in the past, you can check our
[past problems page here.](/resources/past-problems)

---
*Authors: Raymond Zhao, Nishikar Paruchuri, Nihal Shivannagari*
