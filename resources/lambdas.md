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
