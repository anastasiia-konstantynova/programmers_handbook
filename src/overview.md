# Syntax Overview

In this chapter I am going to talk about `nat20` syntax
as well as everything you need to know to run your first `.nat` file.

So get your dice ready and let's begin!

```nat
printq(%q(Detect Magic reveals: Hello, World!\n));
short_rest();
printq(%q(Roll initiative....\n));
1d6:printq();
```
In order to run a `nat20` program download the source from GitLab.
Type in the following cammends:
```
make -B

./nat20 file_name.nat 
``` 
