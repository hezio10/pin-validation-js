# Pin Validation App

A web application, using js, which validates a PIN(Personal Identification Number) and it gives to the user hints about whether the PIN they entered is greater or less than the expected(correct) PIN, so that he can get closer to it. 


## How does it work?

- First you click on the "Gerar PIN" button to get the expected PIN;
- Then you insert the PIN and click on the "Verificar" button, and it will tell you whether the PIN is correct, greater or less than the expected;

- If the right PIN is greater and the difference between the entered PIN and the right PIN is more than 5000 it will tell you that it's much greater, and if it's less than 5000 it will tell you that it's just greater;
- If the right PIN is less and the difference between the entered PIN and the right PIN is more than 5000 it will tell you that it's much less, and if it's less than 5000 it will tell you that it's just less;


## How was it developed?
- First, I thought about how it should work and decided to "play" a little bit with DOM. That's why a lot of information is displayed on the DOM. Then I "designed" the workflow of the app, thinking about generating a random PIN with a button and verifying it with another button and displaying the hints on the DOM, instead of just using console or popups(I used it, but not for that). Then I created the UI using HTML and CSS. And finally created the functions activated by the click events with js.


## Challenges
- 


## Used technologies
- HTML
- CSS
- JS
