# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Name:
Omar Akbari

## Pages links:
Expose:  
https://gurigabarafta.github.io/Lab5_Starter/expose.html

Explore:  
https://gurigabarafta.github.io/Lab5_Starter/explore.html

## Check your understanding

### 1)

I would not use a unit test to test a message feature because there are too many moving parts involved. "Message feature" is very broad, and could include many individual elements working together such as how input is handled, how the server deals with the message, what inputs are valid, etc.. Unit tests are better suited for individual parts of code "in encapsulated units."

### 2)

Yes, a unit test would be appropriate for such a feature, because it is an individual aspect of a larger feature that can be thoroughly tested without having to account for other parts of the messaging application. Unit tests for the feature could be as simple as attempting to pass more than 80 characters and seeing if the feature allows for this to happen.  