# GoodTalk App Challenge 


## About the challenge 🚀
**Developed for**
[GoodTalk App](https://goodtalk.app/)

_This is a little project, a coding challeng build by Goodtalk to their interview process, i am applying for the
Front-end position here in Santiago de Chile, this project has been code in Reactjs framework without any external libraries._

[link to challenge](https://github.com/Goodtalkapp/gdtlk-interview)

### Pre-requires 📋

_You have to install npm (sudo) npm install -g_
Your favorite terminal ( example git Bash) 
You should have a uncompres program like WinRAR or similar


### Instation 🔧

_Follow this steps to run the project_

After download the file and unfold it, excecute your Power shell (ex Git Bash) inside the project folder.

```
$npm install 
```
And then 

```
$ npm start
```
This will run the proyect on Local Host port 3000, if it doesn´t open it self you can see it 
<a href="http://localhost:3000">HERE</a>

## How it is works ⚙️

You can tap a button to select a tilt in order to form a word, this word by default is invalid. But if your word exist in 
the dictionary file, it becomes valid and change the color to a nice green. 
<img src="http://i65.tinypic.com/2dietzl.png" alt="state 1">
<img src="http://i65.tinypic.com/mwf59j.png" alt="state 2">
<img src="http://i65.tinypic.com/23wqgir.png" alt="state 3">


##Part 3 of challenge Aswers
There are several errors that can be important in the code.
The first thing I think would be the issue of security. You can not store passwords as plain text. that's a BIG security flaw. the ideal is to encrypt them in some way. with a library or something like that.
Second, I would say that it is error handling when starting the server. only the case in which the user does not exist is working, but if the passwords do not match nothing happens. there should be handled in a better way.
Third it could be that at the beginning, when external dependencies are invoked, you are mixing ways to call them. as import and require at the same time you should decide an and stick to it.
That occurs to me for now. I think there are more, in any case, but the most important ones I think would be those 😄

## Usefull documentation used in this project 📦

**Loops in react render**
https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778

**About the state in react** 
https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d

**Used js inside the render** 
https://thinkster.io/tutorials/rendering-variables-in-react

**About the components life cicle**
https://medium.com/@simonhoyos/ciclos-de-vida-de-los-componentes-de-react-e1bf48a5ff73


## Coded by ✒️

* **Mariel Quezada** - *Developer* - [Marielk](https://github.com/Marielk)
:woman: :computer:. 

