# Language Basics

Thinking of learning a new language? Tired of using the same old boring script? Well then, you've come to the right place. Here, you can find
the basics of each language, how it works, and some simple methods. However, remember that **this is not a comprehensive list of everything
about every language.** If there is a language you don't see here and you would like to add it, please contact the captains.

## Java
Java, not to be confused with *Javascript*, is probably one of, if not the most widely known language in our computing team, thanks to
AP Computer Science A. One notable use of Java (of the many, of course) is the mildly popular video game *Minecraft: Java Edition*. Java is
an **object-oriented** programming language, because 90% of what we do in Java is create objects and use them to create other objects.

### How It Works
In Java, every class creates a new *object*. Objects contain variables, which are things that can take on different values.
They also contain *methods*, which are pretty much its functions and what it does. Methods can be called by other methods, and methods 
that aren't built-in can be *imported*. Many classes have a **main** method, which is what is run by the compiler and is the main function 
of the object. 

This sounds really complicated, so let's use  an analogy. Suppose we make a human object. The human contain variables, such as their name, 
their age, their gender, etc. They also contain methods (functions), such as walk, talk, eat and sleep. However, this human may not 
know how to write. So, we will import a "write" function, which teaches the human how to write.

### Syntax
Java uses semicolons (;) to close off every action, or *statement*. Every object and method is wrapped with curly braces ({}). To
set variables, we use a single equal sign (=), and to check if something is equal to another, we use two equal signs (==). Two forward slashes
(//) symbolize a *comment*, which does not run as code and therefore can be left as comments on the code.

### Basic terms

- Object: The core of Java. Every Java class creates an object. Objects contain methods, and they can be called by other objects through imports or extensions.
- Variable: A name that stores a value. There are two types of variables: a *primitive* variable and an *object* variable.
  - Primitive variables are basic, built-in variables such as `int`, `double`, `float`, `char`, and `boolean`. These are recognized because they are not capitalized when declared.
  - Object variables are variables that store objects. These can be anything, as long as they exist, and are recognized because they are capitalized.
- Method: A function of an object. Methods are always followed by parentheses, which contain any parameters that the method may need. Methods also need to include a return type, which symbolize the variable type they are going to return to you once it is called. Use `void` if the method does not return anything.
- Statement: An action. This could be creating a variable, changing a variable, calling a method, etc. **ALWAYS** end statements with semicolons.

An example of basic Java code:

```java
import java.util.Scanner; //Since there is no built-in input function, we must import it.

public class NVComputing{ //this creates our object, NVComputing.
    public static void main(String[] args){ //this is our main method, which is the primary function of NVComputing.
        Scanner input = new Scanner(System.in); //allows the compiler to interact with the code. Note that we had to import this object.
        int year = input.nextInt(); //integer variable, set its value using the "nextInt()" method of our scanner object.
        String name = input.next(); //String (text) variable, set its value using the "next()" method of our scanner object.
        System.out.println(name + " is the MVP of the " + year + " NV Computing Team."); //
    }
}
```
