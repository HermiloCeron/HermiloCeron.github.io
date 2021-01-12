# Project One: Tower of Hanoi

## Basic game

* The original basic game consists of three rods where you can stack discs of different sizes. The clasical game begins with all the discs stacked at the left rod ordered by size.
* The allowed movements have to follow the following rules:

Elements of the tower have an initial position
* Player select a top disc stacked in a rod
* Player moves the disc where it wants. But the disc is only moved if these rules are satisfied:
    + You can only move the disc at the top
    + The disc can only be moved to a rod where the top disc is larger than the one you are moving or it is empty
* The game continious until all the discs are stacked at the rigth rod

## Basic logic