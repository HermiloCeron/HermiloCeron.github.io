Project One: Tower of Hanoi

* GAME BEGINS
* Elements of the tower have an initial position
* Player select a top element inside a container
* Player clicks on the container where it wants to move the element
* The element is moved only if the basic movement rules are satisfied
    * BASIC MOVEMENT RULES
    * The game has three main containers where you could move the elements of the tower
    * You can only move the element at the top
    * The element can only be moved to a container where the smallest element is larger than the one you are moving
* Game continious until all the elements are inside the rigth container
* GAME ENDS

* key variable to keep game tracking
* An array which contains 3 sub-array. En each sub-array is going to be stored the current tower.

* BASIC SCORE RULES
* Points would have 2 components. 
    * 1.- The number of movements required by the player
    * 2.- The number of elements/dics of the Tower of Hanoi
* Accordind to the Wikipedia https://en.wikipedia.org/wiki/Tower_of_Hanoi:
    * The minimum number of movements required to win is 2^n-1 where n is the number of discs
    * Discs         Minimum movements to win
    * 1             1
    * 2             3
    * 3             7
    * 4             15
    * 5             31
    * 6             63
    * 7             127
    * 8             255
    * 9             511
* The maximum points by level will be equal to the minimum movements to win
* The player would be penalized by doing more movements than the minimum
* The initial penalization would be -1 point by each extra movement
