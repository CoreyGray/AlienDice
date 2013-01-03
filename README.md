AlienDice
=========

A game of Alien Dice!!

Alien Dice is an HTML5 based dice game for 2+ players with an alien theme.
Alien Dice is intended as a learning project and as such will be open source but collaboration will be by invitation only at least at first.

For more in-depth coverage of the rules and the game setup go to the Wiki. 


Getting Started
===============

First create an account on GitHub.  Then download and install GitHub for Windows (and obviously link it to your github account).  Now fork this project.
You now have you're own repo that is a copy of this project.  Make a branch.  You will be making changes on this branch.  Then you will commit the changes and push (sync) to your repository.
Now your changes are on GitHub in your version of the repository.  To get them in to the official production version you make a pull request.  Your changes are then reviewed and either rejected or merged in to the project.
To make new changes you create a new branch. Rinse and repeat.


The Concept
===========

The game consists of:  
4 Fleet dice (dice skewed in a fleet member's favor. That'd be you!)  
3 Neutral Zone dice (dice with an even chance for fleet members or aliens)  
2 Alien dice (dice skewed in an alien's favor. That wouldn't be you!)

On your turn you take 3 randomly chosen dice and roll them.  
Any zaps you roll mean you were shot by an alien.  3 zaps will end your turn with no score.  
Any aliens you roll mean you shot the alien and count as 1 point.  
Any flying saucers you roll mean the alien evaded you.  
All zaps and points must be kept.    
If you haven't accumulated 3 zaps yet you may continue or stop. If you stop you keep the points you rolled this turn. If you continue you re-roll any saucers and take enough new dice to make 3 dice.
If you use all of the dice or have less than 3 dice remaining to roll then you start over with ALL of the dice just as if you had started your turn.
Your turn continues until you stop and keep your accumulated score or are zapped at least 3 times.

The winner is the first to reach 20 points.  Each other player gets one more turn after the first player to reach 20 points.

Technology
==========

Server side will use Microsoft Web API for a REST like interface and sql server express to store data.

Client side will be plain HTML5 and javascript.  No MVC or razor syntax.




