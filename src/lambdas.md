# Lambda Functions

`nat20` has support for lambda fucntions which operate just like normal function
but they do not have a name.
This is what lambdas actually mean:
```nat
# in this example we assign a lambda function to x and after we can call x
x = fun() printq(%q(Lambdas are finally here! Better late than never\n)); nuf;
x();

# the equivalent function definition to the one above
fun _UNNAMED_FUN_1()
    printq(%(Lambdas are finally here! Better late than never\n));
nuf
x = _UNNAMED_FUN_1;
x();
```

Here are some examples of lambda functions in `nat20`:

```nat
# another example
# output: 10 20 30 40
my_list = [10, 20, 30, 40];
fun for_each(list, f)
	for i=0, list:get_len()-1, 1
		do list[i]:f();
	rof
nuf

for_each(my_list, fun(elem) elem:printq(%q( )); nuf);

# map example using lambdas
# output: [0 : 10, 1 : 15, 2 : 20]
nums = [5, 10, 15];
fun map(list, f)
	new_list = [];
	for i=0, list:get_len()-1, 1
		do new_list[i] = list[i]:f();
	rof
	return new_list;
nuf

map(nums, fun(elem) return elem+5; nuf):printq();
```

#### Challenges
The main challenge while implementing lambdas was to not erase locals
defined before the function. This issue was solved by introducing a function border that keeps
track of local variables within a function.

Like there are for block there is now functions for entering and leaving a function.
