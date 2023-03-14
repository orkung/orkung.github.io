---
title: "Java Notlari"
layout: post
---

## Getting Started

the API is a large collection of ready-made software components that provide
many useful capabilities. it's group into libraries of related classes and
interfaces; these libraries are known as *packages*.

* every application begins with a *class* definition.
* every application must contain a *main method*
* The main method accepts a single argument: an array of elements of type String.

This lesson will introduce you to objects, classes, inheritance, interfaces, and
packages.

* **object**: a software object takes place methods(behaviour) and fields(state)
  variables in some programming languages

hiding internal state and requiring all interaction to be perfomed through an
object's methods is known as *data encapsulation*

* **class**: in object-oriented terms, we say that your bicycle as *an instance*
of the *class of objects* known as bicycles. A *class* is the blueprint from
which individual objects are created.

the fields ***cadence***, ***speed*** and ***gear*** represent the object's
state, and the methods (changeCadence, changeGear, speedUp etc.) define its
interaction with the outside world.

* **inheritance**: object-oriented programming allows classes to *inherit*
  commonly used state and behaviour from other classes. In this example Bicycle
  now becomes the *superclass* of MountainBike, RoadBike and TandemBike

* **interface**: methods form the object's *interface* with the outside world.

* **package**: a package is a  namespace that organizes a set of related classes
  and interfaces. The Java platform provides an enormous class library ( a set
  of packages) suitable for use in your own applications. This library is known
  as the "application programming interface", or "API" for short.

## Learning the Java Language

### Language Basics

* variables: mean objects store their state in fields. kinds:
  * **instance variables** (non-static fields). Non-static fileds are also known as
    *instance variables* because their values are unique to eachs *instance* of
    a class (to each object)
  * **class variables**: additionally, the keyword *final* could be added to
    indicate that the number of gears will never change
  * **local variables**: similar to how an object stores its state in fields,
    a method will often store its temporary state in *local variables*.
  * **parameters**: in HelloWorldApplication, the args variable is the parameter
    to this method.
* a type's fields, methods, and nested types are collectively called its members.
* always use 'single quotes' for char literals and "double quotes" for String
  literals.
* **Arrays**:

### Naming

If the name you choose consists of only one word, spell that word in all
lowercase letters. If it consists of more than one word, capitalize the first
letter of each subsequent word.  If your variable stores a constant value, such
as static final int NUM_GEARS = 6, the convention changes slightly, capitalizing
every letter and separating subsequent words with the underscore character. By
convention, the underscore character is never used elsewhere.

### Primitive Data Types

The eight primitive data types supported by the Java programming language are:

* *byte*: can be useful for saving memory in large arrays, where the memory
  savings actually matters. *short*  bigger than byte.

* built-in length property to determine the size of any array.

#### Summary of Variables

The Java programming language uses both "fields" and "variables" as part of its
terminology. Instance variables (non-static fields) are unique to each instance
of a class. Class variables (static fields) are fields declared with the static
modifier; there is exactly one copy of a class variable, regardless of how many
times the class has been instantiated. Local variables store temporary state
inside a method. Parameters are variables that provide extra information to a
method; both local variables and parameters are always classified as "variables"
(not "fields"). When naming your fields or variables, there are rules and
conventions that you should (or must) follow.

The eight primitive data types are: byte, short, int, long, float, double,
boolean, and char. The java.lang.String class represents character strings. The
compiler will assign a reasonable default value for fields of the above types;
for local variables, a default value is never assigned. A literal is the source
code representation of a fixed value. An array is a container object that holds
a fixed number of values of a single type. The length of an array is established
when the array is created. After creation, its length is fixed.

A resource is an object that must be closed after the program is finished with
it.

increment/decrement operators can be applied before (prefix) or after (postfix)
the operand. The code *result++*; and *++result*; will both end in result being
incremented by one. The only difference is that the prefix version evaluates to
the incremented value, whereas the postfix version evaluates to the original
value

### Expressions, Statements and Blocks

#### Control Flow Statements

this break up the flow of execution by employing decision making, looping and
branching, enabling your program to *conditionally* execute particular blocks of
code.

* decision-making
* the looping
* branching

Trying a Simple way to explain about the Object created for a Class.

Class (consider as A) is like a closed Room with many things inside. You are an
outsider (from Class B), wanting to access something(METHODS) from the class A.
You wont be able to directly access anything in a room(A) as there is no way to
go inside. What you need is a way to go inside the room to access the components
(Methods). So we have to create a door (OBJECT) to that room. The created Door
(OBJECT) is especially for you. Only you can use the door (OBJECT). No person
from other Room (CLASS) can access through the Door (OBJECT) created by you. He
has to create his own Door (OBJECT). If you are already inside the room A, you
dont need a door to access the things inside the room where you are in. i.e., To
access a Method in a class from whithin the class itself, you dont have to
create a object(door). You can directly access the things (METHODS) by its name.

P.S: There are ways to create only one object to a class (SINGLETON). You can
get to know about that while studying in detail.

##### The wile and do-while Statements

##### The for Statement

### Branching Statements

#### the break Statement

An unlabeled *break* statement terminates the innermost statement, but a labeled
*break* statement terminates an outer statement.

### Classes and Objects

#### Declaring Classes

The *class body* contains allt the code that provides for the life cycle of the
objects created from the class:

* constructors for initializing new objects
* declarations for the fields that provide th state of the class and its objects.
* methods to implement the behaviour of the class and its objects

The class name, with the initial letter capitalized by convention.

#### Defining Methods

the only required elements of a method declaration are the method's;

* return type
* name
* a pair of parentheses: a comma-delimited list of input parameters, preceded by
  their data types, enclosed by parentheses, if there are no parameters, you
  must use empty parentheses.
* a body between braces

#### Providing constructors for your Classes

constructor declarations look like method declarations - except that they use
the name of the class and have no return type

Note: *Parameters* refers to the list of variables in a method declaration.
*Arguments* are the actual values that are passed in whne the method is invoked.
When you invoke a method, the arguments used must match the declaration's
parameters in type and order.

#### Passing Rereference Data Type Arguments

when the method returns, the passed-in reference still references the sam object
as before. *However*, the values of the object's fields *can* be changed in the
method, if they have the proper access level.

#### Creating Objects

following statement creates an object and assigns it to a variable;

`Point originOne = new Point(23,94);`

This statement has three parts:

* **Declaration**: The code left part of the equal sign are all variable
  declarations that associate a variable name with an object type
* **Instantiation**: The `new` keyword is a Java operator that creates the object
* **Initialization**: The `new` operator is followed by a call to a constructor,
  which initializes the new object.

You can also declare a reference variable on its own line; eg:

`Point originOne;`

if you declare originOne like this, its value will be undetermined until an
object is actually created and assigned to it. Simply declaring a reference
variable does not create an object. For that, you need to use `new` operator.

##### Instantiating a Class

Instantiating a class means the same thing as "creating an object", when you
create an object, you're creating an "instance" of a class.

All classes have at least one constructor. If a class does not explicitly
declare any, the Java compiler automatically provides a no-argument constructor,
called the *default constructor*, or the Object constructor if the class has no
other parent. If the parent has no constructor (Object does have one), the
compiler reject the program

#### Using Objects

once you've created an object, you probably want to use it for something. You
may need to use the value of one of its fields, change one of its fields, or
call one of its methods to perform an action.

Attempting to use the simple names `width` and `height` from the code in the
`CreatedObjectDemo` class doesn't make sense --those fields exist onlyu within
an object-- and results in a compile error.

When you access an instance field through an object reference, you reference
that particular object's field. The two objects `rectOne` and `rectTwo` in the
`CreatedObjectDemo` program have different `origin`, `width` and `height`
fields.

##### Calling an Object's Methods

you also use an object reference to invoke an object's method.

Because x is defined as a public static int in the class IdentifyMyParts, every
reference to x will have the value that was last assigned because x is a static
variable (and therefore a class variable) shared across all instances of the
class. That is, there is only one x: when the value of x changes in any instance
it affects the value of x for all instances of IdentifyMyParts.

## AP Computer Science in Java

A for loop consists of three parts: the header, the curly braces, and the code
inside of the curly braces. The header is made up of three parts:
initialization, the conditional, and update.

## java: A Beginner's Guide

In Java, the semicolon is a statement terminator. That is, each individual
statement must be ended with a semicolon. It indicates the end of one logical
entity.
In Java an identifier is a name given to a method, a variable, or any other
user-defined item
Java as a totality is a combination of the Java language itself, plus its
standard classes. As you will see, the class libraries provide much of the
functionality that comes with Java

Java allows variables to be declared within any block. A block defines a scope.
A scope determines what objects are visible to other parts of your program. It
also determines the lifetime of those objects. The most important scopes in Java
are those defined by a class and those defined by a method.

A cast is an instruction to the compiler to convert one type into another.
Thus, it requests an explicit type conversion. A cast has this general form:
`(target-type) expression`

Widening − Converting a lower datatype to a higher datatype is known as widening.
Narrowing − Converting a higher datatype to a lower datatype is known as narrowing.

### Program Control Statements

There are three categories of program control statemens: *selection* statemens,
which include the **if** and **switch**; *iteration* statemens, which include
the **for**, **while**, and **do-while** loops; and *jump* statemens, which
include **break**, **continue**, and **return**

### Introducing Classes, Ojects and Methods

The class defines the nature of an object. A class is a template that
defines the form of an object.

If there is no final else and all other conditions are false, no action will take place.

## Kaynakca

* [Oracle Java Tutorial ](https://docs.oracle.com/javase/tutorial]
* [Summary of Creating and Using Classes and Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/summaryclasses.html)
* [AP Computer Science in Java](https://codehs.gitbooks.io/apjava/content/)
* "Head First Java" by Kathy Sierra and Bert Bates: This book is known for its
  engaging style and practical examples, making it a popular choice for beginners.
* "Effective Java" by Joshua Bloch: This book is more advanced and focuses on
  best practices and design patterns for writing efficient and reliable Java code.