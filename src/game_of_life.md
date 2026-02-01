# Game of Life

```nat
grid_width = 35;
grid_height = 10;

fun grid_init(w, h)
	grid = [];
	for i=0, h, 1
		do grid[i] = [];
		for y=0, w, 1
			do grid[i][y] = %q( );
		rof 
	rof
	return grid; 
nuf

fun print_grid(grid)
	for i=0, grid:get_len()-1, 1
		do
		for m=0, grid[i]:get_len()-1, 1
			do grid[i][m]:printq(%q( ));
		rof
		printq(%q(\n));
	rof 
nuf

fun list_neighbours(grid, x, y)
	neighbours = [];
	for x_off = -1, 1 do
		for y_off = -1, 1 do
			nx = x+x_off;
			ny = y+y_off;
			if nx < 0 or ny < 0 or nx >= grid:get_len() or ny >= grid[0]:get_len() or (x_off == 0 and y_off == 0)
				then next;
			fi
			neighbours = neighbours + [grid[nx][ny]];
		rof	
	rof
	return neighbours;
nuf

fun is_alive(grid, x, y)
	n_count = 0;
	n = list_neighbours(grid, x, y);
	for i=0, n:get_len()-1 do
		if n[i] == %q(#) then
			n_count++;
		fi
	rof
	if n_count < 2 then
		return false;
	elif n_count > 3 then
		return false;
	elif n_count == 3 and grid[x][y] == %q( ) then
		return true;	
	else
		return grid[x][y] == %q(#);				
	fi
nuf

fun step(grid)
	new_grid = [];
	for i=0, grid:get_len()-1 do
		new_grid[i] = [];
		for m=0, grid[0]:get_len()-1 do
			if grid:is_alive(i, m) then
				new_grid[i][m] = %q(#);
			else
				new_grid[i][m] = %q( );	
			fi
		rof
	rof
	return new_grid;
nuf

new_grid = grid_init(grid_width, grid_height);
xo = 3;
yo = 1;
new_grid[yo+3][xo+0] = %q(#);
new_grid[yo+4][xo+0] = %q(#);
new_grid[yo+3][xo+1] = %q(#);
new_grid[yo+4][xo+1] = %q(#);
new_grid[yo+2][xo+3] = %q(#);
new_grid[yo+3][xo+3] = %q(#);
new_grid[yo+4][xo+3] = %q(#);
new_grid[yo+5][xo+3] = %q(#);

new_grid[yo+1][xo+4] = %q(#);
new_grid[yo+2][xo+4] = %q(#);
new_grid[yo+5][xo+4] = %q(#);
new_grid[yo+6][xo+4] = %q(#);
new_grid[yo+0][xo+5] = %q(#);
new_grid[yo+7][xo+5] = %q(#);
new_grid[yo+0][xo+7] = %q(#);
new_grid[yo+7][xo+7] = %q(#);
new_grid[yo+0][xo+8] = %q(#);
new_grid[yo+2][xo+8] = %q(#);
new_grid[yo+5][xo+8] = %q(#);
new_grid[yo+7][xo+8] = %q(#);
new_grid[yo+3][xo+9] = %q(#);
new_grid[yo+4][xo+9] = %q(#);
new_grid[yo+3][xo+10] = %q(#);
new_grid[yo+4][xo+10] = %q(#);
new_grid[yo+1][xo+11] = %q(#);
new_grid[yo+2][xo+11] = %q(#);
new_grid[yo+5][xo+11] = %q(#);
new_grid[yo+6][xo+11] = %q(#);

loop
	new_grid:print_grid();
	# printq(%q(do you want to continue? n/y\n));
	# user_input = getstring();
	# if user_input == %q(Y) or user_input == %q(y) then
	new_grid = new_grid:step();
	# else
	# exit;	
	# fi
pool
```
