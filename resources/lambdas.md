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

## What is Functional Programming

Functional programming is a programming paradigm where functions are "treated as first class citizens". Essentially, functions are treated as objects and can do
anything that an object can (be passed as a parameter, returned, etc).
The main idea behind functional programming is that it's programming without any or with minimal [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). 
In other words, it's programming where only local variables that are created inside the function can be modified. This means that no global variables, variables passed by reference, or parameterized variables can be
modified for it to count as functional programming. An example would be:
```java
int[] things = {1, 2, 3, 4, 5, 6, 7, 8, 9};
int[] otherThings = Arrays.stream(things).filter(i-> i>5).toArray();
```
This program created a new array that only contained the integers that were greater than 5 from `things[]`. The important detail is that `things[]` was never altered; there were no side effects. 
As a result, streams are an example of functional programing (but not the only one) since they never alter the original collection, and lambdas are too (as long as the input never gets altered). If you like to think of it mathematically, f(x) 
must always return the same number (let's say a); but if you change the value of x it won't return a. If x never gets changed, then we have functional
programming; but if it doesn't then we don't.

Functional programming is really useful for a lot of things. A big example is with javascript's `something().then(thing())` which causes `thing()` to run after `something()` runs. If you want to try it out, try experimenting with functions as arguments
since there's a lot of cool stuff you can do with that.

*Authors: Daniel Li, Anmol Shah, Raymond Zhao*