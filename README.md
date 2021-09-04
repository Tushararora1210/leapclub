# Memory Game

## Technologies Used
``` This project is built using __ReactJS__ ```

## Functionality
```User is given with 16 cards showing their back side and on clicking the card,it shows the alphabet on it which can range between A-H.The moment two cards having same alphabets are clicked,the cards get vanished.If user ends this game with minimum clicks then it shows that his memory is excellent. ```

## File Structure
```
C:
│   App.css
│   App.js
│   App.test.js
│   index.css
│   index.js
│   logo.svg
│   reportWebVitals.js
│   setupTests.js
│
├───Components
│       card.js
│       home.js
│       menu.js
│
└───images
        backgroundimg.jpg
        Cardimage.png
```

## Approach
```Alphabets from A-H are being taken in an array and that array is being merged with itself which actually generates 2 alphabets for every alphabet in range A-H. After that on click on every card,we just store the id of that card in the state and check whether the card clicked earlier and now are having same id or not.If they are having same id then we increase the match count and vanish those cards otherwise,we restore the earlier state```