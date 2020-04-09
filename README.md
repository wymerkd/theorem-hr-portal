# _Theorem Human Resources Portal_

## Core Function Definition and Execution Table (Does not include callbacks)

| Function Name           | Defined  | Executed           | Explanation                                |
|:----------------------: |:--------:| :-----------------:| :-----------------------------------------:|
| componentDidMount       | App.js   | App.js             | gets all data for all employees            |
| handleAddingNewFeedback | App.js   | FeedbackSubmit.jsx | Adds new feedback, sends notification email|
| handleLogin             | App.js   | LoginPage.jsx      | logs employee in                           |
| handleLogout            | App.js   | Header.jsx         | logs employee out                          |
| onHandleDelete          | App.js   | AdminView.jsx      | deletes clicked piece of feedback          |




#### By _**Joshua Forman, Marcus Jensen, and Kyle Wymer**_

## Description

#### _This is an application for accessing hr materials, submitting hr feedback, and viewing personal employee information._


## Setup/Installation Requirements

* _$ git clone https://github.com/wymerkd/theorem-hr-portal.git_

* _$ cd theorem-hr-portal_

* _$ npm install_

* _$ npm run start (browser will open to localhost:3000)_  

* _$ npm run scss (if editing, needed to translate scss)_  

### Test User Account  
* email: jim@theorem.com  
password: test1  


## Specs

* _The application allows the user to view personal employee information and create anonymous feedback for hr._
* _This application also allows admin users the additional ability to view and delete anonymous feedback._




## Support and contact details

_For any questions, comments or contributions please contact Josh Forman (cyborgforman@gmail.com), Kyle Wymer (wymerkd@gmail.com), or Marcus Jensen (marcusjensen1515@gmail.com)_

## Technologies Used

_React_

### License

*The MIT License


Copyright (c) 2020 **_Joshua Forman, Kyle Wymer, Marcus Jensen_**
