# Black Jack

```nat
#*
Blackjack Game
Player reveives 2 random cards and tries to get as close to 21 as possible.
Face cards (J, Q, K) are worth 10, Aces are worth 11 (or 1 if total > 21).
Player can "hit" (draw more cards) or "stay" (keep current total).
If player goes over 21, they bust and lose.
Computer then plays, drawing cards until reaching 17 or higher.
Whoever has the higher total without busting wins
Game tracks wins and losses across multiple rounds
*#

# evaluate special cards
fun get_card_value(card)
	case card
		when %q(J) then return 10;
		when %q(Q) then return 10;
		when %q(K) then return 10;
		when %q(A) then return 11;
	esac
	return card:cast_int();	
nuf

# sums up the elements of the list
fun sum(list)
  if list:get_len() == 0 then
     return 0;
  fi

  result = list[0];
  for i = 1, list:get_len() - 1
    do result = result + list[i];
  rof
  return result;
nuf

# maps the list
fun map(list, f)
  new = [];
  for i = 0, list:get_len() - 1
    do new[i] = list[i]:f();
  rof

  return new;
nuf


fun calc_hand(hand)
	aces = 0;
	total = hand:map(get_card_value):sum();
	
	for i=0, hand:get_len()-1, 1 do
		if hand[i] == 11
			then aces++;	
		fi
	rof
	loop
		if total < 21 or aces == 0
			then exit;
		fi	
		total = total - 10;
		aces--;
	pool 	
	return total;
nuf

fun draw_card()
	all_cards = [%q(2), %q(3), %q(4), %q(5), %q(6), %q(7), %q(8), %q(9), %q(10), %q(J), %q(Q), %q(K), %q(A)];
	index = random(all_cards:get_len()-1);
	return all_cards[index];
nuf

fun player_turn()
	hand = [];
	hand[0] = draw_card();
	hand[1] = draw_card();
	printq(%q(Your cards: ), hand, %q( - total: ), calc_hand(hand), %q(\n));

	loop
		printq(%q(Hit or Stay? type h or s: ));
		choice = getstring();

		if choice == %q(h) or choice == %q(H) then
			hand = hand + [draw_card()];
			total = calc_hand(hand);
			printq(%q(Your cards: ), hand, %q( - total: ), hand:calc_hand(), %q(\n));
			if total > 21 then
				printq(%q(bust! You lose.));
				return 0;
			fi
		elif choice == %q(s) or choice == %q(S) then
			return hand:calc_hand();	
		fi
	pool	
nuf

fun computer_turn(player_total)
	hand = [];
	hand[0] = draw_card();
	hand[1] = draw_card();
	printq(%q(computer cards: ), hand, %q( - total: ), hand:calc_hand(), %q(\n));

	loop
		if hand:calc_hand() < 17 then
			hand = hand + [draw_card()];
			printq(%q(computer drows: ), hand[hand:get_len()-1], %q(\n));
			printq(%q(computer cards: ), hand, %q( - total: ), hand:calc_hand(), %q(\n));	
		else
			exit;
		fi
	pool
	computer_total = calc_hand(hand);

	if computer_total > 21 then
		printq(%q(computer busts! You win!\n));
		return 1;
	elif computer_total > player_total then
		printq(%q(computer wins with ), computer_total, %q(\n));
		return 0;
	elif computer_total < player_total then
		printq(%q(you win with: ), player_total, %q(\n));
		return 1;
	else
		printq(%q(it's a tie));
		return 0;		 	
	fi
nuf

fun play_blackjack()
	wins = 0;
	losses = 0;

	loop
		printq(%q(\n--- new game ---\n));
		player_total = player_turn();

		if player_total > 0 then
			result = player_total:computer_turn();
			if result == 1 then
				wins++;
			else
				losses++;	
			fi
		else
			losses++;	
		fi
		printq(%q(\nscore - wins: ), wins, %q(, losses: ), losses, %q(\n));
		printq(%q(\nplay again? y/n: ));
		play_again = getstring();
		if play_again != %q(y) and play_again != %q(Y) then
			exit;
		fi
	pool	
nuf

play_blackjack();
```
