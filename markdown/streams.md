# Stream API

## Contents
- [Introduction](#introduction)
- [What is a stream?](#whatisastream)
- [Why use streams?](#whyusestreams)
- [When shouldn't you use streams?](#whenshouldntyouusestreams)
- [How to use streams](#howtousestreams)
    1. [Stream Creation](#operation1streamcreation) 
    2. [Intermediate Operations](#operation2intermediateoperations)
    3. [Terminal Operations](#operation3terminaloperations)
- [Putting it all together](#puttingitalltogether)

<br>

## Introduction
Java 8 introduced the Streams API.
This is a high-level API that can more or less replace looping by just chaining method calls instead.

This is a relatively advanced feature, so don't feel bad if you don't get it.

Code for the streams API can be found in [StreamAPI.java in our code snippets repository](https://github.com/NVHSComputing/code-snippets/blob/master/src/advanced/StreamAPI.java).

<br>

## What is a stream?
Streams represent a flow of data (imagine a stream of strings being basically a pipeline with all the strings from the array flowing through it), be it from an array, ArrayList, or any collection. You can manipulate this data using the Streams
API provided by Java, as a way to prevent looping for simple method calls.

## Why use streams?
Streams are a fast way to write loops. Instead of writing a messy for loop and doing method calls on each of the elements,
you can call those methods on each element directly from a stream, greatly simplifying your coding process.

Streams are also lazy by default. This means they don't perform an operation unless they absolutely have to.
As a result, this means you do not lose performance while using the Streams API.

## When shouldn't you use streams?
Whenever you need access to a more powerful tool to manipulate arrays, as you will in most competitive
coding problems. Streams will not make up the body of your code; they are mostly useful for input processing
and basic operations.

Also, streams do not let you access each element in the list's index. If you need access to the index, use a classic for loop.

<br>

# How to use streams
There are 3 operations you do on a stream:
- Creation
- Intermediate Operation
- Terminal Operation

<br>

## Operation 1: Stream Creation
First, let's create a stream. There are a couple ways you can do this.

First, let's create an array and an arraylist, both containing data:
```java
ArrayList<String> list = new ArrayList<>();
list.add("Foo");
list.add("Bar");
list.add("Foobar");

String[] list2 = new String[]{"Foo", "Bar", "Foobar"};
```

To get a stream from an ArrayList (or anything that's a Collection, like a Set, List, Map, etc.), just call
the .stream() method on it.
```java
Stream<String> stream = list.stream();
```
		
To get a stream from an array, call the Arrays.stream() method on it.
```java
Stream<String> stream2 = Arrays.stream(list2);
```
		
At this point in time, these two streams (stream1 and stream2) are basically identical. Let's move on to step 2.

<br>

## Operation 2: Intermediate Operations

Intermediate operations either remove elements from the stream, modify the elements of a stream, or
some other transformation. You may chain as many of these together on a stream as you like.

They always can be called *on* a stream, and always *return* a stream.

The most common intermediate operations used in streams are `filter()` and `map()`.

Here's an example of how to use `filter()`:
```java
stream.filter(str -> str.length() == 3)
```
*If you don't recognize what that arrow is, go read the document on anonymous functions (a.k.a lambdas).*

`filter()` accepts 1 argument, a Predicate. Predicates are any anonymous functions that return
a boolean (true or false). In this case, the predicate is `str -> str.length() == 3)`.

Any entries inside the stream that do not return true when checked against the predicate
will be removed from the stream.

Assuming the stream is the one shown above (containing "Foo", "Bar", and "Foobar"),
this filter command will filter the stream into only strings with length 3, meaning that only
"Foo" and "Bar" will remain.

Now let's modify stream 2 (currently also containing "Foo", "Bar", and "Foobar"), but this time with a `map()` operation.

Here's an example of how to use `map()`:
```java
stream2.map(str -> str.toUpperCase())
```
`map()` accepts 1 argument, an anonymous function. This anonymous function should accept 1 value (for each
item in the stream individually) and return 1 value. `map()` essentially replaces every argument inside the array
with the result of the method called ON the array.

(Note that this can be shortened to `stream2.map(String::toUpperCase)`. Read the part about method references
in anonymous functions.)
 
This example specifically calls the toUpperCase method on every string.
After this, the contents of stream2 become "FOO", "BAR", and "FOOBAR".

<br>

## Operation 3: Terminal Operations

Terminal operations end the stream. After a terminal operation, the stream stops. You are taking the data in the pipeline and
doing a final operation with it. There are a few commonly used terminal operations, but by far
the most common is `collect()`.

Here's an example of how to use `collect()`:
```java
ArrayList<String> arr = stream.collect(Collectors.toCollection(ArrayList::new));
```
(Note the method reference for new arraylist.)

`collect()` accepts 1 argument, a *collector*. These are mostly obtained using the Collectors class (
collectors.to____). This collector will collect all the items on the pipeline into an object using that collector. For example,
this specific collector takes the contents of the `stream` pipeline and dumps them all into an arraylist, in
sequential order (streams preserve order).

This specific example, when executed after the other 2 examples, creates an ArrayList with the items ["Foo", "Bar"]
("Foobar" got filtered out.)

Another common terminal operation is `forEach()`.
```java
stream2.forEach(System.out::println)
```
(Note the method reference for System.out.println().)

`forEach` accepts 1 argument, a *consumer*. These are anonymous functions that accept a
stream value and return void. In this case, this will print every string inside the stream to the system.

This function is **unordered**, meaning that it will call the method on each of the stream items not necessarily
in order. This means it might not print
```text
FOO
BAR
FOOBAR
```
and instead print these three items out of order. If preserving order is vital, use `forEachOrdered()`, which IS ordered.

<br>

# Putting it all together

Let's put all of this together to write a simple code snippet.

Let's say we have a string in this format:
```
"1 23 45 678 91 12"
```

We want to read all the integers from this stream, and parse them into an arraylist of integers.
In other words, we want to end up with an ArrayList<Integer> containing [1, 23, 45, 678, 91, 12].

First, we know that the `.split(string)` method gives us an array of Strings split by the string in the middle (i.e.
`"1 23 45 678 91 12".split(" ")` = ["1", "23", "45", "678", "91", "12"]).

With a traditional `for` loop, our code would look something like this:
```java
String s = "1 23 45 678 91 12";

String[] arr = s.split(" ");
ArrayList<String> nums = new ArrayList<>();

for(int i = 0; i < arr.length; i++) {
    nums.add(Integer.parseInt(arr[i]);
}
```

Instead, let's try doing this with streams.

First, we need to stream the array of strings.

We can do that like so:

```java
String s = "1 23 45 678 91 12";

Arrays.stream(s.split(" ")) // gives us a Stream<String>
```

Next, we can call a method on each element of the stream to transform it (this is the `map()` function's purpose.)
```java
String s = "1 23 45 678 91 12";

Arrays.stream(s.split(" ")).map(Integer::parseInt) // now it's a Stream<Integer>
```

Then, finally, we can collect our final list of integers that have been parsed for us.
```java
String s = "1 23 45 678 91 12";

ArrayList<Integer> nums = Arrays.stream(s.split(" "))
                                .map(Integer::parseInt)
                                .collect(Collectors.toCollection(ArrayList::new));
```
This code is exactly equivalent to the above traditional for loop, except it looks a lot cleaner.

And now you know the basics of how to use the Streams API!

There are a few finer details I've glossed over here, like how streams of primitives work (they require a bit more caution. If you're
interested, check out the IntStream class and similar classes, and the mapToInt() and toArray() functions. Or you can always just ask me in person.)

*Authors: Raymond Zhao*
