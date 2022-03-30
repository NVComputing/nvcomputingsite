# Input / Output

*Input and output are essential parts of any program. Every programming problem in competitive programming will involve some kind
of input/output.*

**This page is under construction.**

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
Input/Output is very important for coding. It allows a user to interact with their code, and the code will act accordingly based on what the 
user inputs. Output is similar; it allows the user to read what the code has stored and calculated. Input/Output has many uses besides simple
communication between the code and the user. It can be used for debugging, since a string of simple `println()` statements at various points
can show the user exactly what may be wrong with the code.

## What is stdin/stdout?
Stdin/stdout, as you can guess, stands for standard input/output. It is the most basic way of reading something or printing something in the code,
using the terminal as a way of communication. For debugging purposes, stdin/stdout is probably the most efficient way to do so, although
printing using files and other external sources is possible (but why would you do that?).

# Java

## Scanner
Scanner is an easy to use input reading system. It can read from files, as well as from console inputs, making it useful when wanting to test code before submitting. It's worth noting that the hasMoreTokens() method doesn't work properly when taking a console input.

At the beginning of your class, make sure you "import java.io.*;" and import "java.util.*;" at the top of your class to use Scanner. Also, change your main method to the following:
```java
public static void main(String[] args) throws IOException
```

Scanner works by using a delimiter, which is a white space by default. The scanner will separate its input into tokens, and will create a new token every time it reads a delimiter. If there are two delimeters consecutively, it will still treat it as one delimter. For example, given the following input with the default delimiter:

```text
1 2 hello      23 4844566 hi
```
It would create 6 tokens, those being 1, 2, hello, 23, 4844566, and hi.
Now that you know the basis of Scanner Token creation, we can work on how to use it read inputs and retrieve information from it.
In order to read inputs from the console(works for codeforces, ACSL, and Code Jam), use the following code.

```java
Scanner sc= new Scanner(System.in);
```

In order to read inputs from files(USACO) use the following code:
```java
Scanner sc= new Scanner(new FileReader("FileName.out"));
```
There are three commonly used methods in order to retrieve data from a Scanner. The first one is using the next() method. This method will return the next token in the Scanner as a String data type.

The next method is nextLine(), which will return the entire next line as a single string, and then advance to the next line. It is important to note that even if next() is used on the last token in a line, it will not move to next line until another next() is called. Therefore, a situation like this would cause .nextLine() to output the rest of the current line(which is an empty string). See the example to understand this in more detail.

The final method is actually a series of similar methods. Instead of using .next() to return a token as a string, methods like .nextInt() or nextBoolean() will return the next token as an int or boolean value. There is a version of next for most primitive data types, you can check which ones in the java Scanner api. Note: it is up to you to guarantee the next token is of the type you are asking, as it will result in an error if not.
 
Here is an example that reads the given console input:
```text
1234567891 hello
hi hihi hi hi
123 true
```

```java
Scanner sc= new Scanner(System.in);
System.out.println(sc.next());
System.out.println(sc.next());
System.out.println(sc.nextLine());
System.out.println(sc.nextLine());
System.out.println(sc.nextInt());
System.out.println(sc.nextBoolean());
sc.close();
```

The output would be:

```text
1234567891
hello

hi hihi hi hi
123
true
```

Note the empty line below hello, this is because the previous next() methods read the hello but did not advance to the next line, so the nextLine() method printed out the rest of the current line and moved the Scanners "cursor" to the next line(similar to the println method).

It is also a good practice to close your scanner with the close() method after you are done using it.

This is all you know if you want to get started with using Scanner, however if you would like to go further, here is the 
<a href="https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html" target="_blank" rel="noopener noreferrer"> Javadoc</a>, and here is a 
<a href="https://www.javatpoint.com/Scanner-class" target="_blank" rel="noopener noreferrer"> list</a> of other methods you can use.
 
## BufferedReader
BufferedReader is more efficient at reading inputs than Scanner, although at the level most of us are at, it doesn't make a significant difference. It is less straightforward to use, but it something you should try and learn once you are comfortable with taking input and output.

Like Scanner, BufferedReader will take a console input
```java
BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
```
and a file input.
```java
BufferedReader br= new BufferedReader(new FileReader("FileName.in"));
```
The main difference between Scanner and BufferedReader is that Scanner uses a delimiters to separate inputs into tokens by default, but BufferedReader does not. Therefore, BufferedReader requires a StringTokenizer class to take multiple space separated inputs from the same line. The only method you have to learn with BufferedReader is the .readLine() method which will return the current line as a String, and then move to the next line. Simply pass this input to a StringTokenizer constructor like shown below.
```java
BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st= new StringTokenizer(br.readLine());
StringTokenizer st2= new StringTokenizer(br.readLine());
```
With the following input:
```text
1 2 hello
23 4844566 hi
```
st1 would recieve the input of "1 2 hello" and st2 would recieve the input of "23 4844566 hi".
The StringTokenizer class will take a string input and create tokens out of it, using the space character as a delimiter, just like Scanner does. There are two methods you should know with StringTokenizer. The first one is the .nextToken() method. This method will return the next token as a String, and works very similar to the Scanner .next() method.

The other method is the .hasMoreTokens(). This method returns a boolean value, depending on whether the inputted String has more tokens in it.

Now that you know how BufferedReader and StringTokenizer works, here is an example that reads the following console input.

```text
Hi, what is your name?
My name is Bob.

Coolio
```

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(br.readLine());
System.out.print(st.nextToken()+ " ");
System.out.print(st.nextToken()+ " ");
System.out.print(st.nextToken()+ " ");
System.out.print(st.nextToken()+ " ");
System.out.println(st.hasMoreTokens());
st = new StringTokenizer(br.readLine());
System.out.print(st.nextToken()+ " ");
System.out.print(st.nextToken()+ " ");
System.out.print(st.nextToken()+ " ");
System.out.print(st.nextToken()+ " ");
System.out.println(st.hasMoreTokens());
System.out.println(br.readLine();
st = new StringTokenizer(br.readLine());
System.out.println(st.nextToken());
br.close();

```
The output would be:
```text
Hi, what is your true
My name is Bob. false

Coolio
```
Again, it is good practice to close your BufferedReader at the end of the code. Also note that the main disadvantage with BufferedReader is that you need to know how many lines of input you are going to be given.
## Which one should I use?
For beginners, Scanner will probably be better. It's easier to use, easier to understand and provides the same result. Although it is a bit
slower, in most projects and/or problems it should have no problem with the time limit. Only in certain complex problems will the speed
of the input system be an issue. In those cases, BufferedReader will work better. It's faster, but a bit more complex to use since it reads
everything as a String (which is why we need to use ParseInt() to convert numbers to integers). Overall, it is completely up to the user's
preference.

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
               .map(arr -> Arrays.stream(arr).mapToInt(Integer::parseInt).toArray())
               .toArray(int[][]::new);
```

# C++

## cin / cout and freopen

## Optimization Tricks
