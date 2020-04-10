# _Theorem Human Resources Portal_

#### By _**Joshua Forman, Marcus Jensen, and Kyle Wymer**_

## Description

#### _This is an application for accessing hr materials, submitting hr feedback, and viewing personal employee information._

## Core Function Definition and Execution Table (Does not include callbacks)

| Function Name           | Defined  | Executed           | Explanation                                |
|:----------------------: |:--------:| :-----------------:| :-----------------------------------------:|
| componentDidMount       | App.js   | App.js             | gets all data for all employees            |
| handleAddingNewFeedback | App.js   | FeedbackSubmit.jsx | Adds new feedback, sends notification email|
| handleLogin             | App.js   | LoginPage.jsx      | logs employee in                           |
| handleLogout            | App.js   | Header.jsx         | logs employee out                          |
| onHandleDelete          | App.js   | AdminView.jsx      | deletes clicked piece of feedback          |


##Feedback Notification emails

_Are powered by emailJS. Today, all of the emails are being sent from and to theorem.feedback@gmail.com. This email can be adjusted when application is put into use._



###Things that will need to change once the HR Portal has a backend

1. Alter recipient email addresses when a user submits feedback. Marcus can hand over keys to emailJS account powering this functionality.

2. componentDidMount method will need to make API call returning object with all employee data. This will be stored in masterList instead of the dummy json object we have in there now. (within App.js)

3. handleAddingNewFeedback will need to be a POST method to a Theorem Feedback API. The email send portion of this function should still work as written. (App.js)

4. handleLogin currently has no password encryption. It simply searches the object for the correct user. This would pose a security risk in a production environment. (App.js)

5. onHandleDelete will need to make a delete request to the Theorem Feedback API. Today it is searching an array of feedback and deleting the selected piece of feedback out of the array. (App.js).

6. Depending on how backend data is structured, we can add a third ‘administrator header’. Today, ‘Admin View’ is visible when any user logs in for demonstration purposes. In reality, this view will be hidden (or not) depending on who logs in.


###Future Goals

1. All appropriate links on Employee Home view. Today they don’t lead anywhere. We didn’t have the assets.

2. Ability for an employee to ‘Request Time Off’. If an admin approves, deduct requested hours from that employee’s ‘vacation hours remaining’.

3. Notification email to the user’s direct manager informing them that one of their direct reports has requested time off, and they need to go into the app and approve/decline it.



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

## Folder Structure

```
/Theorem-HR-Portal/
|-- /node_modules/                      # Node Modules
|
|-- /public/                            # Public Files
|   |-- favicon.icon
|   |-- index.html
|   |-- manifest.json
|   |-- robots.txt
|
|-- /src/                               # Source files
|   |-- /components/
|       |-- AdminView.jsx               #
|       |-- EmployeeDetail.jsx          #
|       |-- EmployeeHome.jsx            #
|       |-- FeedbackSubmit.jsx          #          
|       |-- Header.jsx                  #
|       |-- LoggedInHeader.jsx          #
|       |-- LoggedOutHeader.jsx         #
|       |-- LoginPage.jsx               #
|       |-- QuickLinks.jsx              #
|       |-- TimeOffRequest.jsx          #

|   |-- /css/            
||      -- style.css                    # Compiled styles for production              
|   |-- /scss/
|       |-- _adminView.scss             #
|       |-- _employeeDetail.scss        #  
|       |-- _employeeHome.scss          #  
|       |-- _feedbackSubmit.scss        #                  
|       |-- _header.scss                #
|       |-- _loggedInHeader.scss        #  
|       |-- _loggedOutHeader.scss       #
|       |-- _loginPage.scss             #
|       |-- _quickLinks.scss            #
|       |-- _timeOffRequest.scss        #
|       |-- _variables.scss             # Theorem color pallette and fonts
|       |-- style.scss                  # Compiled scss files for css conversion
|   App.js                              #
|   App.scss                            #
|   App.test.js                         #
|   index.js                            #
|   index.scss                          #
|   logo.svg                            #
|   serviceWorker.js                    #
|   setupTests.js                       #
|   test_json_object.js                 #
|   .gitignore                          #
|   package.json                        #
|   package-lock.json                   #
|   README.md                           #
|   yarn.lock                           #
```


## Support and contact details

_For any questions, comments or contributions please contact Josh Forman (cyborgforman@gmail.com), Kyle Wymer (wymerkd@gmail.com), or Marcus Jensen (marcusjensen1515@gmail.com)_

## Technologies Used

_React_

### License

*The MIT License


Copyright (c) 2020 **_Joshua Forman, Kyle Wymer, Marcus Jensen_**
