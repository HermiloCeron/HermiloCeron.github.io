# Project One: Tower of Hanoi

## Basic game

* The original basic game consists of three rods where you can stack discs of different sizes. The clasical game begins with all the discs stacked at the left rod ordered by size.
* Player selects a top disc stacked in a rod.
* Player moves the disc where it wants. But the disc is only moved if these rules are satisfied:
    + You can only move the disc at the top.
    + The disc can only be moved to a rod where the top disc is larger than the one you are moving or it is empty.
* The game continious until all the discs are stacked at the rigth rod.

## Basic logic

* Each disc is represented by an integer number beggining at zero for the smallest.
* The core of the logic is an array containing 3 sub-arrays.
*  Each sub-array contains numbers which represent the discs.