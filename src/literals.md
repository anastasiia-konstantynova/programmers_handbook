# Literals

Literals are fixed values written directly into the source code.
`nat20` supports several kinds of literals including numeric, string, boolean, and the coolest `DnD-literal`
that deserves its own chapter. 

#### Numeric literals

```nat
x = 27;   # integer
y = 27.07 # floating-point number
```

#### String literals

```nat
%q(this is a nat20 string);

# Multi-line string example

%q(this string
   has multiple
   lines);
```

#### Boolean literals

```nat
x = true;
y = false;
```

#### DnD literals

```nat
initiative = 1d6;
```
DnD literals and what they do will be discussed in [this](dndliterals.md) chapter

#### Collection literals

`nat20` supports lists as well as dictionaries

```nat
# Lists
fruits = [%q(apple), %q(banana), %q(watermelon)];
apple = fruits[0];

# Dictionaries
fruits_dict = {
	%q(apple) -> 7,
	%q(banana) -> 17,
	%q(watermelon) -> 27
};
banana_num = fruits_dict[%q(banana)];
```
