# Control Flow

In `nat20`, control flow is primarily expressed through conditional statements and
loops.

#### Conditional Statements

The conditional structure in `nat20` is expressed through the `if` statement,
optionally followed by `elif` and `else` clauses. `if` statements also require
the closing keyword `fi`.

```nat
if x > 0 then
  printq(%q(x is positive));
elif x == 0 then
  printq(%q(x is zero));
else
  printq(%q(x is negative));
fi			
```

Another example of control flow is `case`. `case` requires `esac` to close the block.
Similar to `if` the `else` in `case` is optional.
```nat
case x
  when 10 then printq(%q(apples));
  when 20 then printq(%q(bananas));
  when 100 then printq(%q(watermelons));
  else printq(%q(oreos));
esac	
```

> [!Note]
> There is no fallthrough between when-arms.

#### for-loops

For-loops require a defined range for iterations as well as a step 
which can be positive or negative:
```nat
for i=1, 10, 1
  do i:printq();
rof

for i=7, 0, -1
  do i:printq();
rof

for i=0, 5
  do 
  if i == 3
    then next; # next skips 3 and jumps the next
  fi
  i:printq();
rof    
```

> [!Note]
> The step in a for-loop is optional and defaults to 1.

#### loop-loops
Loop-loop is a classic boundless loop that will iterate for 5ever
unless you tell it stop.

```nat
counter = 0;
loop
  printq(%q(banana));
  counter++;
  if counter == 100
    then exit;
  fi
pool    
```

#### Challenges
The biggest challenge overall is sitting in this section. I present to you - THE FOR-LOOPS.
1. I tried to implement `next` which does the same thing as `continue` in C.
Because of how `LOOPBEGIN` operates (the first thing that the program would jump to is
a condition check) it was creating an endless loop.
```
BEGIN
  <COND>
BODY
  <STMT>
  <STEP>
END    
```
I had to change it by implementing `CUSTOMLOOPBEGIN` that takes one argument (it jump over the step).
This argument indicates a jump and now instead of jumping to a condition at the start of an iteration,
the program jumps to the step first.
```
<arg>
BEGIN_JMP
  <STEP>
  <COND>
BODY
  <STMT>
END    
```
2. SEGFAULTS with variables. while implementing for-loops it was discovered that local variables get reallocated when
another one is added, because the variable numbers are accessible via pointers, I had to save this
value into a variable to preserve it.

Broken Version
 ```nat
struct var *loc_start = var_add_local("loc-start");
struct var *loc_end = var_add_local("loc-end");
/* this invalidates loc_start because var_add_local reallocates */
assert(loc_start != NULL);
prog_add_num(prog, loc_start->nr);
prog_add_op(prog, SETVAR);
```

Fixed Version
```nat
struct var *loc_start = var_add_local("loc-start");
int loop_start_nr = loc_start->nr;
struct var *loc_end = var_add_local("loc-end");
assert(loc_start != NULL);
prog_add_num(prog, loop_start_nr);
prog_add_op(prog, SETVAR);
```
