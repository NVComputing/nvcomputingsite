# Lambdas and Functional Programming

## Contents
- [Lambdas](#lambdas)
  - [What is a lambda?](#whatisalambda)
  - [How do I use it?](#howdoiuseit)
- [Functional Programming](#functionalprogramming)
  - [What is functional programming?](#whatisfunctionalprogramming)

# Lambdas

This will be an at-length introduction into the world of lambdas.

At first glance, people may feel scared when looking at lambda functions. After all, the actual usage of the `->` and the weird placement
of the `{}`s may cause beginners to look away. However, lambda functions are not as complex as they seem. After all, they are just another way
of declaring methods. (Since I only know Java, I will be writing all the code and syntax in Java. Apologies in advance.)

## What is a lambda?

A lambda expression is a way of declaring methods without actually declaring them. Thus, they are usually referred to as anonymous functions.
To start, take a look at the following code:
```java
int getSchool(){
  return "NVHS";
}
```
We can write the same thing using a lambda expression:
```java
() -> "NVHS";
```
See? It's very simple and useful, since we don't need to declare an entirely new method.
The usual syntax of a lambda method is
```java
(parameters) -> {code}
```
Since the lambda expression we wrote before only required one line of code, we were able to neglect the curly braces. However, if your code
will be more than one line long, then the curly braces are required:
```java
int getSchool(int x, int y){
  int sum = x + y; //so we can see how to use parameters
  System.out.println("Neuqua Valley High School");
  return "NVHS";
}
```
would become
```java
(int x, int y) -> {
  int sum = x + y;
  System.out.println("Neuqua Valley High School");
  return "NVHS";
}
```

Remember, lambda expressions cannot be used on their own. They must be declared with the use of **functional interfaces**.
Functional interfaces are interfaces with only one abstract method. Here is an example of what it would look like in a class:
```java
interface NVComputingInfo{
  int getSchool(int x, int y);
}
public class NVComputing{
  public static void main(String[] args){
    NVComputingInfo school = (int x, int y) -> {
      int sum = x + y;
      return "NVHS";
    };
  }
}
```
In the code above, we created the functional interface `NVComputingInfo` with abstract method `getSchool()`. Our lambda expression then stored
the code into its only method (since it's a functional interface), so if we call `getSchool()`, it should give us `NVHS`.

For more on lambda expressions, refer to the
<a href="https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html" target="_blank" rel="noopener noreferrer"> Javadoc</a>, and the
<a href="https://www.programiz.com/java-programming/lambda-expression" target="_blank" rel="noopener noreferrer"> source.</a>

# Functional Programming

This will be a basic introduction into functional programming, I recommend first reading the earlier section on lambdas and our section on [streams](/resources/streams) as it will help a lot and since 
most of functional programming is streams and lambdas.

## What is a Functional Programming Language?

In general programming theory, there exists two main types of languages:

- [Imperative programming](https://en.wikipedia.org/wiki/Imperative_programming)
- [Functional programming](https://en.wikipedia.org/wiki/Functional_programming)

While these two will turn out to seem super different, they are [proven](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis) to be identical.

In a nutshell, functional programming languages treat EVERYTHING as a function, including the basic definitions of `true` and `false`!

From there, every series of actions is not defined as **what something should do**, but rather **what something is** as a recursive set of functions, then asking for a thing.
While this may seem useless, it is powerful to define incredibly complex processes, and only commit processing power when it is needed (lazy evaluation).


```text
f(x) = y

-- snip --

f(x) -> [what happens in f(x) stays in f(x)...] -> y
```

From these implementations, two things are realized; namely:
- Working with sets becomes very useful
- Functions can't *do anything* besides define more things. (A lot like mathematical functions)

What does that last bit mean? Basically, a function cannot contain [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). In other words, it must follow a
"black box" model, where all the function/caller can see is the value passed in and the value returned, nothing outside edited, no prints, no outside variables, nada.

Functional programming languages are still widely used, particularly in data science for large processing operations. The YouTube channel Computerphile has a ton of 
really neat videos on them if you're interested.

## What does this have to do with what I'M working with?

Great question. Well, since around 1993, a lot of imperative language developers started to realize how powerful functional programming can be.
As you'd expect, Java is one of these functional-capable languages, and you may have even seen some of its functional features already. The most commonly used ones are:

- Anonymous functions (lambdas): functions with no name
- `map` function: applies a given function to every element in a collection
- `fold` function: collapses a collection into a single value according to a passed function
- `filter` function: returns a collection with elements kept/removed according to a boolean function passed
- Closures: while java does not have support for closures, these can be emulated with anonymous classes

A typical usecase of functional programming in Java might be:
```java
int[] things = {1, 2, 3, 4, 5, 6, 7, 8, 9};
int[] otherThings = Arrays.stream(things).filter(i->i>5).toArray();
```

There is a lot to note here about the aforementioned "side effects" as well.

This program created a new array that only contained the integers that were greater than 5 from `things[]`. The important detail is that `things[]` was never altered; there were no side effects. 
As a result, streams are an example of functional programing (but not the only one) since they never alter the original collection, and lambdas are too (as long as the input never gets altered). If you like to think of it mathematically, f(x) 
must always return the same number (let's say a); but if you change the value of x it won't return a. If x never gets changed, then we have functional
programming; but if it doesn't, it must be pulling from an outside source, no bueno.

Once you start looking, you'll find many cases where using functional programming is just faster. And while it may just seem like a bunch of shorthand, the ability to combine
and mix functions as you please becomes far, far greater than anything you could accomplish with just a couple `for` loops.

*Authors: Daniel Li, Anmol Shah, Raymond Zhao, Andrew Fargo*
