# Tips for Programming
## Contents
- [General Tips](#generaltips)
- [Java-Specific Tips](#java)
    -

# General Tips

- It's always good to write your code in chunks (specifically as functions/methods, if applicable),
as it is easy to lose track of what does what otherwise!
It also makes testing easier, as it is harder to find an error in a
large block of code than in a smaller block of code.

- Just because you are able to solve a problem does not
necessarily mean that you have the best answer! Consider the efficiency of your program.
Think of time and space efficiency (read [this page](/resources/efficiency) for more details).

- Always keep your eye out for where you can use data structures. Sometimes a problem will explicity state that a data structure needs to be used, and sometimes you will have to infer it.

- Dynamic programming can help avoid unnecessary repitition, typically recursion. You may have learned the basics of this when finding fibonacci numbers, and would have to use this during a floodfill algorithm. Dynamic programming is any change to an algorithm that avoids running repetitive code. In the fibonacci series, this would be adding up the first n numbers, which runs is O(n), versus calling a recusive method which adds up the n-1th number and the n-2th number, which runs is O(`$\phi^{n}$`) where `$\phi$` is the golden ratio.

- Methods can help avoid repeating code, make your code neater, and are easier to debug. These things can be really important when time is of the essence to finish a contest.

- Greedy Algorithms are incredibly useful at the lower level and should always be searched for. A greedy algorithm essentially reduces a problem into a couple of simpler problems and finds the solution to each of these problems. This would be useful in problems where an individual has to find out how many values in array T are the sum of a subset from 0 to K in positive integer array R. You would solve this by doing a prefix sum on array R and binary searching for each value of T on it.
    - This is an example of a greedy algorithm that combines two efficient algorithms.



<br>

# Java

- A few of you may have recognized that most IDEs, including Eclipse, have debuggers. This is incredibly useful, and I use it frequently. You are able to run through each line of your code and check the values of each variable at the time. It is incredibly convenient when troubleshooting a testcase that gives an incorrect response.

- Be cautious when using arraylists. ArrayLists have methods that occasionally run in slower time than expected. For example, the remove method and the add by index method both run in O(n) time, while you would expect them to run in O(1) time like in arrays or hash maps.
