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
