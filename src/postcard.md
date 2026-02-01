# Syntax on a Postcard

This postcard shows `nat20` in a single glance.
What you see here is what the language considers essential.

```nat
fun greet(name)
	if name == %q(world) then
		%q(Ah yes.. hello, world! We meet again!\n):printq();
	else
		printq(%q(Well met, ), name, %q(. Roll initiative - ), 1d6, %q(\n));	
	fi	
nuf

dnd_players = [%q(god), %q(senef), %q(aminah), %q(argus), %q(najma), %q(honey), %q(world)];

add_title = fun(player)
	case player
		when %q(god)    then return player + %q( the benevolent);
	    when %q(senef)  then return player + %q( the weasel-man);
	    when %q(aminah) then return player + %q( the elf);
	    when %q(argus)  then return player + %q( the angelic turtle);
	    when %q(najma)  then return player + %q( the winner of all);
	    when %q(honey)  then return player + %q( the curious);
		else return player + %q( the unknown);
	esac
nuf;

for p=0, dnd_players:get_len()-1, 1
	do loop dnd_players[p]:add_title():greet(); exit; pool
rof

inventory = {
	%q(potions) -> %q(27),
	%q(rope) -> %q(10),
	%q(Amulet of Forceful Cantrip) -> 1
};

inventory:detect_magic():printq(%q(\n));
inventory[%q(potions)]:cast_int():printq(%q(\n));
```
