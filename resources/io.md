# Input / Output
*Input and output are essential parts of any program. Every programming problem in competitive programming will involve some kind
of input/output.*

## Contents
- [Introduction](#introduction)
  - [Basics](#basics)
  - [What is stdin/stdout?](#whatisstdinstdout)
- [Java](#java)
  - [Scanner](#scanner)
  - [BufferedReader](#bufferedreader)
  - [Which one should I use?](#whichoneshouldiuse)
  - [Advanced I/O / Input Processing](#advancedioinputprocessing)
  - [Input Reading Examples](#inputreadingexamples)
- [C++](#c++)
  - [cin / cout and freopen](#cincoutandfreopen)
  - [Optimization Tricks](#optimizationtricks)

# Introduction

## Basics

## What is stdin/stdout?

# Java

## Scanner

## BufferedReader

## Which one should I use?

## Advanced I/O / Input Processing

## Input Reading Examples
Assume we’re reading input for a problem.

The input starts with an integer n that denotes the number of integers per line, and an integer m that denotes the number of lines that follow.
The m lines after that first line all contain n integers. We want to put all these lines into a 2D array.
Example:
```text
5 3
3 5 6 7 9
2 9 1 3 3
3 4 2 3 1
```

We want 
```text
[[3, 5, 6, 7, 9], [2, 9, 1, 3, 3], [3, 4, 2, 3 ,1]]
```
to be our array. For this example, we’re going to be reading from stdin.

Here are 3 examples of how this would be done using 3 different methods.

### Using Scanner
```java
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int m = sc.nextInt();

int[][] nums = new int[n][m];

for(int i = 0; i < n; i++) {
    for(int j = 0; j < m; j++) {
        nums[i][j] = sc.nextInt();
    }
}
```

### Using BufferedReader and StringTokenizer
```java
BufferedReader buf = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(buf.readLine());

int n = Integer.parseInt(st.nextToken());
int m = Integer.parseInt(st.nextToken());

int[] nums = new int[n][m];

for(int i = 0; i < n; i++) {
    StringTokenizer st = new StringTokenizer(buf.readLine());
    for(int j = 0; j < m; j++) {
        nums[i][j] = Integer.parseInt(st.nextToken());
    }
}
```

### Using BufferedReader and [Streams API](/resources/streams)
```java
BufferedReader buf = new BufferedReader(new InputStreamReader(System.in));
buf.readLine(); // we don't even need the first line lol

int[][] nums = buf.lines().map(s -> s.split(" "))
               .map(arr -> Arrays.stream(arr)
               .mapToInt(Integer::parseInt).toArray())
               .toArray(int[][]::new);
```

# C++

## cin / cout and freopen

## Optimization Tricks
