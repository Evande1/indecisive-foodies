# Indecisive-foodies
Orbital 2022

## NUS ORBITAL 2022 - Milestone 1

## Proposed Level of Achievement:

**Project Apollo**

## Motivation:

We have very indecisive friends who take a long time to decide on what to eat. As such, a lot of time is wasted on this and we hope that we can create something to solve this problem. Often, students suffer from analysis paralysis in all sorts of decisions. We want to decrease the number of decisions that students need to make especially on food choices so they can focus on the more important stuff.


## User Stories:

- As a user, I want to easily get a randomly selected food choice.
- As a user, I want to categorise my food choices.
- As a user, I want to insert my own food choices and categorise them.
- As a user, I want to navigate around the application easily and intuitively.
- a user, I want this application to be convenient and be able to use it through a telegram bot.
- a user, I want to automatically pick the next 7 days of food and save it in my calendar.


## Scope of Project:

The web app allows users to pick a randomly selected food based on the category.

## Features:

Random Generator with a button to start the selection and a dropdown menu for users to select the category
Form for users to enter the name of the food and choose the category of the entered food.
Database: Store all food items and users


## Tech Stack:

1. ReactJS (Frontend)
2. Formik
3. Express + Node.js (Backend)
4. MongoDB
5. Telegraf (Telegram Bot API, JS library) (Optional)
6. Calendar API


## Special features:

Calendar list for a week
Instead of needing to open the application and select a food every meal, the user is able to select their 3 meals for the next 7 days and save it on google calendar.
Telegram API
Able to use the Telegram Bot to retrieve a random food choice

Development Plan:
Initial design for poster and videos ( Week 1)
Come up with potential features ( Week 2)
Learn relevant tech (right after exams) (Week 3)
Wireframe (Week 4)
Build random generator ( Week 5 - 7)
Build Telegram bot and calendar ( Week 8,9)
Testing and debugging (week 10)

Mockups: 

![test](https://github.com/Evande1/indecisive-foodies/blob/main/MicrosoftTeams-image.png)

![test run](https://github.com/Evande1/indecisive-foodies/blob/main/MicrosoftTeams-image%20(1).png)

![form](https://github.com/Evande1/indecisive-foodies/blob/main/MicrosoftTeams-image%20(2).png)



Core features developed:

Admin page able to delete, view, edit meals based on categories 
![test](https://github.com/Evande1/indecisive-foodies/blob/main/app4.png)

Random Generator with a button to start the selection and a dropdown menu for users to select the category 
![test](https://github.com/Evande1/indecisive-foodies/blob/main/app1.png)
![test](https://github.com/Evande1/indecisive-foodies/blob/main/app2.png)

Form for users to enter the name of the food and choose the category of the entered food
![test](https://github.com/Evande1/indecisive-foodies/blob/main/app4.png)

Database: Store all food items 

Telegram API Able to use the Telegram Bot to retrieve a random food choice
![test](https://github.com/Evande1/indecisive-foodies/blob/main/tele1.png)
![test](https://github.com/Evande1/indecisive-foodies/blob/main/tele2.png)
![test](https://github.com/Evande1/indecisive-foodies/blob/main/tele3.png)
![test](https://github.com/Evande1/indecisive-foodies/blob/main/tele4.png)
![test](https://github.com/Evande1/indecisive-foodies/blob/main/tele5.png)

Problems encountered: 

CORS. At first, the http requests worked in postman, but it wasn’t working when we tried integrating the frontend and the backend. Eventually we found out we needed to enable CORS to allow our frontend to make http calls to our backend.

Updating form, we made the wrong http request and we were stuck for 3 days. (Put instead of patch)

Finding a way to hide the secret keys, we used dotenv and .env files to hide our secret keys, to prevent unauthorised access to our data.

Calendar list for a week, we realised we cannot use google calendar API as we require authentication to utilise their features.

Integration between material UI and cypress was difficult. Used a lot of time to figure out work arounds. 

Good software engineering practices: 
1. Git issues 
![test](https://github.com/Evande1/indecisive-foodies/blob/main/github-issues.png)

2. Adhere to proper commit messages
![test](https://github.com/Evande1/indecisive-foodies/blob/main/commit.png)

3. Linked commits to git issues
![test](https://github.com/Evande1/indecisive-foodies/blob/main/link-issues.png)

4. Peer code review to ensure good coding quality is ensured  
6. Use of environment files to hide api tokens 
![test](https://github.com/Evande1/indecisive-foodies/blob/main/env-file.png)




We data modelled the database schema on a website called DBDiagramIo 

DB diagram: 


![test](https://github.com/Evande1/indecisive-foodies/blob/main/db_diagram.png)


Unit Testing

https://user-images.githubusercontent.com/62635032/175981320-d0cab71e-4b8a-47df-8db4-86de68baf76c.mp4

Yup Validation 


