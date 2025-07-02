
# Getting Started

- First of all, you will need to create a database with Atlas MongoDB.
- Also have a Stripe account so you can get your SECRET STRIPE KEY.

<h2>🎥 Video - https://www.youtube.com/watch?v=DBMPXJJfQEA</h2>

- How to create a database with MongoDB - 3:38:27.
- Stripe Tutorial - 7:49:55.


# Installation

<h2>How to install/setup the Front-End</h2>

> Open a terminal in VS Code and go into the frontend folder and then run

>❗Open the frontend first [http://localhost:5173](http://localhost:5173)


```
npm install
npm run dev
```


<h2>How to install/setup the Admin Page</h2>

> Open a terminal in VS Code and go into the admin folder and then run

>❗Open the admin after the frontend. [http://localhost:5174](http://localhost:5174)

```
npm install
npm run dev
```
   
<h2>How to install/setup the Backend</h2>

> Open a terminal in VS Code and go into the backend folder and then run

```
npm start server
```

- [ ] Remember to include your Database in db.js and your Stripe Secret Key in .env


# for redirecting to admin panel:
    1. my datbase(mongodb atlas) must have the sign up with email= "prakash@admin.com" and password=123456789.
    2. Now login with these credentials (email= "prakash@admin.com" and password=123456789) will lead us to admin panel.
    3. for changing the credentials of admin go to usercontroller.js and change the email and then again signup with the same email and then logout->then login and now it will take us to admin panel.