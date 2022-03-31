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

In general programming theory, there exists two main ways to complete a task:

- [Imperative programming](https://en.wikipedia.org/wiki/Imperative_programming)
- [Functional programming](https://en.wikipedia.org/wiki/Functional_programming)

As outlined ahead, both methods have their distinct advantages, and most modern languages contain support for both.
While these two will turn out to be structued very differently, they are [proven](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis) to be identically effective.

### Imperative programming

The best way to understand the concepts of functional programming requires knowledge of imperative programming.

Imperative programming is pretty much what you are already used to. It involves telling the computer **what to do** in
a discrete order of operations, usually with logical flow.

An example of imperative programming could be a simple few statements:

```c
#include <stdio.h> // Allows us to print

int main() 
{
  int i = 2;
  i = i + 2;

  printf("%d\n", i); // Prints number
}
```

First, the program defines `i` with a value of 2. Then, the program increases `i` to 4. Finally the program prints the number and exits.

```text
$ ./a.out
4
$
```

Pretty simple stuff, and assuredly something you've seen before. But now, functional programming flips that on its head.

### Functional programming

Functional programming works quite similar to ideas found in math.
Instead of a program retrieving an output by telling it what to do, you instead tell it **what the output is, given an input.**

Think mathematically, if you wanted to make a table of x's square values given x, you'd write `f(x) = x^2`. 
You wouldn't write `ok so take a number x and multiply it by itself given an input x`. 

Believe it or not, the definition of x^2 as a function *is* an example of functional programming. 
Written in a purely functional programming language (Haskell), the previous example would look like this:

```haskell
f :: Int -> Int
f x = x ** 2
```

Now, Haskell is able to define `f(x) = x^2` nicely, but how would it print? This runs into a major aspect regarding functional programming:
side effects.

### Side effects

While functional and imperative programming are otherwise identical, one key difference emerges.

Imperative programming allows for the manipulation of the program's current state. Some examples of a program's state are 
global variables, passed references, a terminal to print to, et cetera. 

However, a simple definition like `f(x) = x^2` has no idea about what's happening outside of it, besides `x`. 

Changing the program's state from within a function is called a [side effect](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). 

<img style="width:75%;height:auto;" src="https://www.investopedia.com/thmb/pcE6K25skC_umPJa4pG8gt2auw4=/6250x2834/filters:no_upscale():max_bytes(150000):strip_icc()/blackbox2-10a65df4364d4bf19fce709227f6822b.png">


A good way to think about functional programming is the "black box model". Where the function acts like a "black box", and neither the function nor its caller is aware of what is happening to the other.

Consequently this means that in functional programming, a lot like mathematics, a function is only valid when each set of inputs is mapped to
*one output only*. I.e. you cannot get two possible effects from one input state.

Functional programming languages are still widely used, particularly in data science for large processing operations. The YouTube channel Computerphile has a ton of 
really neat videos on them if you're interested.

## What does this have to do with what I'M working with?

Great question. Well, since around 1993, a lot of imperative language developers started to realize how powerful functional programming can be.
As you'd expect, Java is one of these functional-capable languages, and you may have even seen some of its functional features already. The most commonly used ones are:

- Lambdas
- Various higher-level functions (functions that take functions as parameters) 
  - `map` function: applies a given function to every element in a collection
  - `reduce` function: collapses a collection into a single value according to a passed function
  - `filter` function: returns a collection with elements kept/removed according to a boolean function passed

While these specific names come from Java's Stream interface, many languages have functional features as well, (e.g. `fold` in turn of `reduce`).
Check the documentation on your specific language for a more in-depth look into support for functional programming.

A typical usecase of functional programming in Java might be:
```java
int[] things = {1, 2, 3, 4, 5, 6, 7, 8, 9};
int[] otherThings = Arrays.stream(things).filter(i->i>5).toArray();
```

This is that same problem, written imperatively, and with ArrayList instead of streams:
```java
int[] things = {1, 2, 3, 4, 5, 6, 7, 8, 9};
ArrayList<int> alOtherThings = new ArrayList<int>();

for (int i : things)
  if (i > 5)
    alOtherThings.add(i)

otherThings = alOtherThings.toArray();
```

Much more concise when done functionally. Pretty neat, right?

There is a lot to note here about the aforementioned "side effects" as well.

This program created a new array that only contained the integers that were greater than 5 from `things[]`. The important detail is that `things[]` was never altered; there were no side effects. 
As a result, streams are an example of functional programing (but not the only one) since they never alter the original collection, and lambdas are too (as long as the input never gets altered). If you like to think of it mathematically, f(x) 
must always return the same number (let's say a); but if you change the value of x it won't return a. If x never gets changed, then we have functional
programming; but if it doesn't, it must be a side effect, no bueno.

Once you start looking, you'll find many cases where using functional programming is just faster. And while it may just seem like a bunch of shorthand, the ability to combine
and mix functions as you please becomes far, far greater than anything you could accomplish with just a couple `for` loops.

*Authors: Daniel Li, Anmol Shah, Raymond Zhao, Andrew Fargo*
