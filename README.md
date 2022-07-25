# Indecisive-foodies
Orbital 2022

[Demo](https://beamish-marzipan-9eb696.netlify.app)

## Introduction 

### Proposed Level of Achievement:

**Project Apollo**

### Motivation:

We have very indecisive friends who take a long time to decide on what to eat. As such, a lot of time is wasted on this and we hope that we can create something to solve this problem. Often, students suffer from analysis paralysis in all sorts of decisions. We want to decrease the number of decisions that students need to make especially on food choices so they can focus on the more important stuff.


### User Stories:

- As a user, I want to easily get a randomly selected food choice.
- As a user, I want to categorise my food choices.
- As a user, I want to insert my own food choices and categorise them.
- As a user, I want to navigate around the application easily and intuitively.
- As a user, I want this application to be convenient and be able to use it through a telegram bot.
- As a user, I want to automatically pick the next few days worth and save it in my calendar.


### Scope of Project:

The web app allows users to pick a randomly selected food based on the category.

## System Design

### Core Features:

* Random Generator with a button to start the selection and a dropdown menu for users to select the category
* Form for users to enter the name of the food and choose the category of the entered food.
* Database: Store all food items and users.


### Additional features:

* Calendar. Instead of needing to open the application and select a food every meal, the user is able to select meals for the next 3 days. By pressing generate next 3 days, users are able to view meals for the next 3 days.

* Telegram API. Able to use the Telegram Bot to retrieve a random food choice from specified meal. 

* Login / Register Feature. A login feature was created to provide users with a personalised food planning experience. Users can create accounts by pressing the register tab and filling up the relevant data. To ensure users data are safe, passwords are hashed using bcrypt and their personalised data are only accessible if they have a valid JWT token. 


### Tech Stack:

1. ReactJS (Frontend)
2. Formik
3. Express + Node.js (Backend)
4. MongoDB
5. Telegraf (Telegram Bot API, JS library) 

Development Plan:
Initial design for poster and videos ( Week 1)
Come up with potential features ( Week 2)
Learn relevant tech (right after exams) (Week 3)
Wireframe (Week 4)
Build random generator ( Week 5 - 7)
Build Telegram bot and calendar ( Week 8,9)
Testing and debugging (week 10)

### Mockups: 

![test](https://github.com/Evande1/indecisive-foodies/blob/main/MicrosoftTeams-image.png)

![test run](https://github.com/Evande1/indecisive-foodies/blob/main/MicrosoftTeams-image%20(1).png)

![form](https://github.com/Evande1/indecisive-foodies/blob/main/MicrosoftTeams-image%20(2).png)



### Features developed:

#### Admin page able to delete, view, edit meals based on categories 
![test](https://github.com/Evande1/indecisive-foodies/blob/main/app4.png)

#### Random Generator with a button to start the selection and a dropdown menu for users to select the category 
![test](https://github.com/Evande1/indecisive-foodies/blob/main/app1.png)
![test](https://github.com/Evande1/indecisive-foodies/blob/main/app2.png)

#### Form for users to enter the name of the food and choose the category of the entered food
![test](https://github.com/Evande1/indecisive-foodies/blob/main/app4.png)

#### Scheduler Page

Add Breakfast, Lunch, Dinner for the next 3 days
<img width="1485" alt="Screenshot 2022-07-25 at 5 30 46 PM" src="https://user-images.githubusercontent.com/62635032/180745877-9cac8109-4aa6-4ac8-8b5d-5028a7fe4f36.png">

Clear Schedule 
<img width="1481" alt="Screenshot 2022-07-25 at 5 34 56 PM" src="https://user-images.githubusercontent.com/62635032/180746454-042991bd-54ee-450a-8cbc-165361b7d139.png">

#### Login Page 
<img width="1483" alt="Screenshot 2022-07-25 at 5 32 36 PM" src="https://user-images.githubusercontent.com/62635032/180745974-897f70c8-b73c-4ec2-8e6f-f2e802437b90.png">

#### SignUp Page
<img width="1480" alt="Screenshot 2022-07-25 at 5 33 15 PM" src="https://user-images.githubusercontent.com/62635032/180746088-38408b6b-63c9-47d5-afb4-3e4ea2d1357b.png">



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

Authentication. We should have started with authentication first as we needed to make slight modifications to our database diagrams, adding a user field to each meal. Moreover, the authentication also required that each page would redirect to the login page if no user in signed in.

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


### Design Decisions:
* Environment variables. Storing secret keys and other credentials in environment variables prevent authorised access and spamming of database resources.

* User accounts. By making individual user profiles, users are able to customise their food choices and meals for their personal use. 

* Hashing of passwords. Using Bcrypt and JWT, passwords are able to be secured in the database through hashing and the use of a SALT. This prevents unauthorised access even if developers can access the database.

* Material UI vs Bootstrap. We chose material UI instead of bootstrap because material UI provides better customization and it is overall a more extensive library with good documentation compared to boostrap. 



We data modelled the database schema on a website called DBDiagramIo 

DB diagram: 

![updated database diagram](https://user-images.githubusercontent.com/62635032/180745031-842f1af1-92b8-47ce-8019-4987d093f14e.png)


## Evaluation
In order to ensure that Indecisive Foodies is working as intended based on the features proposed, we need a formal and thorough plan. 

Tools used:
* Google Forms
* Cypress

* Usablility testing
  * Use of google forms to gather feedback. 
<Insert images>

Unit Testing

https://user-images.githubusercontent.com/62635032/175981320-d0cab71e-4b8a-47df-8db4-86de68baf76c.mp4

Yup Validation 


