# Run Length Decoder

```nat
fun get_digit_idx(str)
  for i=0, str:get_len()-1, 1
	  do
		case str[i]
			when %q(0) then return i;
			when %q(1) then return i;
			when %q(2) then return i;
			when %q(3) then return i;
			when %q(4) then return i;
			when %q(5) then return i;
			when %q(6) then return i;
			when %q(7) then return i;
			when %q(8) then return i;
			when %q(9) then return i;
		esac
	rof
	return -1;
nuf			
			

fun decode(s)
	digit_idx = s:get_digit_idx();
	if digit_idx < 0
	    then return s;
	fi
	times=s[digit_idx]:cast_int();
	str_len = s:get_len();
	prefix = s:slice(0, digit_idx);
	sliced_str = s:slice(digit_idx+2, str_len-1):decode();
	res = prefix;
	for i=1, times, 1
		do res=res + sliced_str;
	rof
	return res;
nuf		

input_one = %q(2[ab]);
input_two =%q(3[hello2[world]]);
input_three = %q(2[a3[b2[cd]]]);

input_one:decode():printq(%q(\n));
input_two:decode():printq(%q(\n));
input_three:decode():printq(%q(\n));
```
