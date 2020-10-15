
# Homework Problems - Week 3

[Link to Submission Form](https://forms.gle/Xgo26QNRjuwCF2jP8)

## Directions

Answer the following problems, and submit your answers to the Google form linked below. Please don’t waste your time by cheating, unless you plan to do so during the actual contest as well.

## Don't use:
- Calculators
- Online Resources
- Friends (Because Nihal doesn't have any so it's an unfair advantage)

## Problem 1
What would be printed?

### 
```
Q=101: X=0: Y=1
FOR A=1 TO Y
	IF INT(Q/A)== Q/A THEN 
		X=X+A: Y=Y*A
	END IF
NEXT
OUTPUT X*Y
```
    
## Problem 2
What is the last value in the array?

###
```
A(0)=32: A(1)=12: A(2)= 45: A(3)=4: A(4)= 14: A(5)=21: A(6)=22: A(7)=6: A(8)=39: A(9)=5
C=5
FOR X=0 TO 9
	FOR Y=X to 9
		IF A(X)>A(Y) THEN
			C=A(X): A(X)=A(Y): A(Y)=C
		END IF
	NEXT
NEXT
```

## Problem 3
Find the difference between the outputs for when the input is 40,40 and when the input is 35,30.

### 
```
INPUT A, B
C=0
IF A>36 THEN
	C=B+(A-36)*2*A
END IF
IF B>30 THEN
	C=C+A+(B-30)*3*B
END IF
C=C+A*B
OUTPUT C
```

## Note

The next question is a challenge question. This means it is OPTIONAL. (They might curry you a bit of favor with the captains, though.)

## Challenge Question
What would be printed?

###
```
A=1476: B=1944
IF A<B THEN
C=B: B=A: A=C
END If
WHILE B!=0
	C=B: B=A%B: A=C
END WHILE
OUTPUT A
```


## Practice Programming Problem
For this week, there is one problem:

[Magnets](https://codeforces.com/problemset/problem/344/A)

Solve this problem and submit your answer to Codeforces (contact the captains if you have any issues with Codeforces).

### Submission Instructions

Click the link and solve the problem in your IDE and language of choice. After you finish the problem, submit your code.
The submit button is in the top left (next to Problems).

As proof of your submission, provide us a screenshot that looks somewhat like the following:

![](https://cdn.discordapp.com/attachments/755867961369165854/759560439607722015/unknown.png)

(Header columns are not required - just the data underneath the headers. Any screenshot is fine, as long as it shows
the necessary data - it can be of your whole screen.)

(We won't check your code - just your submission.)
