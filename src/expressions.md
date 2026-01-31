# Expressions

An expression is a syntactic construct that evaluates to a value.
In `nat20` expressions consist of variables, operators, and function calls.

#### Examples of expressions in `nat20` include:
```nat
x + y;
x - y;
```

Expressions can also be grouped:
```nat
a = (27 - x) / 2;
```

#### Function calls
In `nat20` there are two types of function calls.
The first one is a c-style:

```nat
get_fruits(bananas, apples);
```
And there is an option to call a function on a parameter:

```nat
bananas:get_fruits(apples);
```
In the example above `bananas` is going to be passed to the `get_fruits()` as its first parameter.

#### Other operators include:

| Operator | Example | Description |
|----------|---------|-------------|
|    +     |  a + b  |  a plus b   |
|    -     |  a - b  |  a minus b  |
|    *     |  a * b  |  a mul b    |
|    /     |  a / b  |  a div b    |
|    %     |  a % b  |  a mod b    |
|    >     |  a > b  |  a gt b     |
|    <     |  a < b  |  a lt b     |
|   >=     |  a >= b |  a ge b     |
|   <=     |  a <= b |  a le b     |
|   ++     |  a++    |  inc a      |
|   --     |  a--    |  dec a      |
|    ^     |  a^b    |  a pow b    |
|   and    | a and  b| logical and |
|   or     | a or b  | logical or  |
|   xor    | a xor b | logical xor |
|   not    |  not a  | logical not |
|    =     |  a = b  | assign      |
|    :     |  a:fun()| fun call op |
