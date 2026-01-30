# DnD Literals

This feature is where `nat20` began.
The idea is pretty simple - just like in Dungeons & Dragons you can `roll` a die.
In DnD you typically roll dice and instead of saying "roll 2 20-sided dice", you would
say "roll 2d20".

In `nat20` you can do that too.

```nat
# This code generates a number between 1 and 6
initiative_roll = 1d6;

# Roll twice: one d10 per beam, per standard Warlock operating procedure
# This code generates a number between 2 and 20
eldritch_blast = 2d10

# In a loop a new random number is generated in every iteration.
for i=1, 10, 1
  do 2d20:printq();
rof  
```

> [!IMPORTANT]
> To use DnD literals you MUST use only valid DnD dice (`d4`, `d6`, `d8`, `d10`, `d12`, `d20`, `d100`)
