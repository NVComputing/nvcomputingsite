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
Scanner sc = new Scanner(System.in);
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

Note the empty line below hello - this is because the previous next() methods read the hello, but did not advance to the next line, so the nextLine() method printed out the rest of the current line and moved the Scanner's "cursor" to the next line(similar to the println method).

It is also a good practice to close your scanner with the close() method after you are done using it.

This is all you know if you want to get started with using Scanner, however if you would like to go further, here is the 
<a href="https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html" target="_blank" rel="noopener noreferrer"> Javadoc</a>, and here is a 
<a href="https://www.javatpoint.com/Scanner-class" target="_blank" rel="noopener noreferrer"> list</a> of other methods you can use.
 
## BufferedReader
BufferedReader is more efficient at reading inputs than Scanner, although at the level most of us are at, it doesn't make a significant difference. It is less straightforward to use, but it something you should try and learn once you are comfortable with taking input and output.

Like Scanner, BufferedReader will take a console input
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
```
and a file input.
```java
BufferedReader br = new BufferedReader(new FileReader("FileName.in"));
```
The main difference between Scanner and BufferedReader is that Scanner uses a delimiters to separate inputs into tokens by default, but BufferedReader does not. Therefore, BufferedReader requires a StringTokenizer class to take multiple space separated inputs from the same line. The only method you have to learn with BufferedReader is the .readLine() method which will return the current line as a String, and then move to the next line. Simply pass this input to a StringTokenizer constructor like shown below.
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(br.readLine());
StringTokenizer st2 = new StringTokenizer(br.readLine());
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
Again, it is good practice to close your BufferedReader at the end of the code. Also note that the main disadvantage with BufferedReader is that you need to know how many lines of input you are going to be given. (Alternatively, you can use the .lines() method to stream the entire input at once, then work with the lines as a stream. This is discussed in more detail below in the Advanced I/O section.)

## Which one should I use?

This is gone over in more detail [here](https://stackoverflow.com/questions/2231369/scanner-vs-bufferedreader) and [here](https://javahungry.blogspot.com/2018/12/difference-between-bufferedreader-and-scanner-in-java-examples.html)
, but essentially there are 4 major distinguishing features that decide which one you should use.

#### 1. Scanners can parse input, while BufferedReaders can only read it

If you want to read in a primitive data type, Scanners can do it directly using their `.next(datatype)`, however you will need to use StringTokenizers to parse BufferedReader input
into the desired data type.

#### 2. BufferedReaders have a buffer of 8kb, while Scanners have a buffer of 1kb

This means that BufferedReaders can read a lot more data at a time, so if you are trying to read large amounts of data (i.e. a large file),
then you should probably use a BufferedReader

#### 3. BufferedReaders are faster

If you care about speed a lot (*cough cough competitive programming*), then just use a BufferedReader.

#### 4. BufferedReaders are synchronized, Scanners are not

If you are multithreading and reading input in multiple threads, then you can use a single BufferedReader for all of them, but you would need
separate Scanners for each one.

(You probably shouldn't do that anyway. Multithreading is hard.)

## Advanced I/O / Input Processing

Despite the fancy title, this is just more stream stuff, so if you have no idea what that is then read [this](/resources/streams) and then maybe [this](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html).  

#### Input with Streams

Let's say we want to read a single line of integers and toss it in an array. We could do something like this:

```java
BufferedReader buf = new BufferedReader(new InputStreamReader(System.in));
int[] arr = Arrays.stream(buf.readLine().split(" ")).mapToInt(s-> Integer.parseInt(s)).toArray();
```
This would take the inputted line from our `BufferedReader` (which is a string), turn it into an array (`.split(" ")`), convert that into a stream (`Arrays.stream()`),
turn that into a stream of integers with `mapToInt(s-> Integer.parseInt(s)` and then turn that back into an integer array with `toArray()`. It's really a lot of type conversions.

That was considerably less lines of code and relatively faster than writing a for loop with Scanners or a BufferedReader. The best part is you don't even need the number of integers, it just does it.  

Now let's say we want to take multiple lines of input and turn it into an integer 2d-array. We could do something like this:

```java
BufferedReader buf = new BufferedReader(new InputStreamReader(System.in));
int[][] arr = buf.lines().map(s->s.split(" "))
                         .map(s->Arrays.stream(s).mapToInt(
                                  s->Integer.parseInt(s)
                             ).toArray())
                         .toArray(Collectors.toCollection(int[][]::new));
```

This will take a bunch of lines of input, turn those lines into `Stream<String>` with `.lines()`, split those Strings into `String[]` so that we now have a `Stream<String[]>`,
then turn that into a `Stream<Stream<String>>` with `.map(s->Arrays.stream(s))`. This is when it gets a bit weird so pay close attention to the inner `Stream<String>` 
and just remember that that is part of a larger Stream.

We take the inner `Stream<String>` and turn it into a `IntStream`
with `.mapToInt(s -> Integer.parseInt(s))` so in reality we have a `Stream<IntStream>` (don't worry about the IntStream if you want think about it as a specified stream that only has ints the only benefit is that it removes a couple words later on, I just wanted to show that
there are more than just Stream<Class>), then we turn this inner Stream (the `IntStream`) into an `int[]` with `.toArray()` so that we have (in total) a `Stream<int[]>`.

We finally turn this `Stream<int[]>` into a `int[][]` by running `.toArray(int[][]::new)`.  

TLDR:  `Stream<String>` -> `Stream<String[]>` -> `Stream<Stream<String>>` -> `Stream<IntStream>` -> `Stream<int[]>` -> `int[][]`  
TLDR was TL, DR: We just converted types until we got what we wanted  

Although this seems really complicated, you will eventually get the hang of it.

#### Output with Streams

This is really just getting fancy with `.forEach`

```java
ArrayList<String> list = new ArrayList<String>();
list.add("pain1");
list.add("agony1");
list.add("despair1");
list.stream().forEach(s->System.out.println(s)); 

String[] arr = {"pain2", "agony2", "despair2"};
Arrays.stream(arr).forEach(s->System.out.println(s));

String[][] arr2d = {{"please", "help", "me"},{"I'm", "stuck", "in", "here"}};
Arrays.stream(arr2d).forEach(s->Arrays.stream(s).forEach(t->System.out.println(t))); 
//String[][] -> Stream<String[]> ->Stream<Stream<String>> -> prints out all of the Strings
```

An important detail is that `.forEach` is **unordered**, so it might not print the strings in order. If you want them in order, use
`.forEachOrdered()`

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

cin and cout represent stream objects, which are used to perform input and output operations.
By default, these streams direct to standard input/output, and can be redirected to read/write
from files using freopen.

cout is used with the insertion operator, ```<<```, to insert data into the output stream.
For example, the following code:
```c++
int x = 13;
cout << "text" << " and other text\n";
cout << 12 << " happens to be one less than " << x;
```
would print:
```text
text and other text
12 happens to be one less than 13
```

Similarly, cin is used with the extraction operator, ```>>```, to extract data from the input stream into variables.
Given the input
```text
69 420
evil spooky
numbers
```
```c++
int a, b;
string words[3];
cin >> a >> b;
for (int i = 0; i < 3; i++) {
    cin >> words[i];
}
```
a and b would recieve the values ```69``` and ```420``` respectively, and words would be equal to ```{"evil", "spooky", "numbers"}```.
cin doesn't check for the type of the data inputted, so make sure you input into the right type of variable.
Note that cin only reads up until the next space or line break; to read entire lines of input, use ```getline()``` instead.
```c++
string str;
getline(cin, str); //this puts the next line of input from cin into str
```
### freopen
```freopen()``` is used to redirect a stream to a file, which allows you to use cin/cout to read and write to files instead of stdin/stdout.
```freopen()``` takes three parameters: the file name, the file access mode, and the stream to redirect to the file.
Below is a list of modes that files can be opened in.

| Mode    | Function                                                                                                    | 
|---------|-------------------------------------------------------------------------------------------------------------|
| ```r``` | read: the file is opened to read input from                                                                 |
| ```w``` | write: creates an empty file to output to, or deletes any existing content in the file if it already exists |
| ```a``` | append: opens a file or creates a new file if one doesn't exist and appends output to the end of the file   |

Example code:
```c++
// opens file "input.txt" in read mode, allowing it to be used as input
// and redirects the contents of that file to stdin so that it can be read from cin
freopen("input.txt", "r", stdin); 

// creates file "output.txt" in write mode, allowing it to be used for output operations
// redirects output from stdout into this file so it can written to using cout
freopen("output.txt", "w", stdout);
```

## Optimization Tricks

In C++, there are a few competitive programming-specific optimizations that can be used to speed up input/output operations.
These optimizations are not necessary for most problems, but can be useful for problems with large input/output sizes.

```c++
ios_base::sync_with_stdio(false);
cin.tie(NULL);
```

These optimizations speed up input/output operations by disabling synchronization between C and C++ standard streams,
and untying cin from cout - meaning that if one is flushed, the other doesn't need to be.
For more details, you can read [this post](https://stackoverflow.com/questions/31162367/significance-of-ios-basesync-with-stdiofalse-cin-tienull).

---
*Authors: Raymond Zhao, Nishikar Paruchuri, Daniel Li, Anmol Shah, Canchen Li*