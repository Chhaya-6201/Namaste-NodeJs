Create a repository
Initialize the repository
node_modules,package.json,package-lock.json
Install express
Create a server
Listen to port 7777
Write request handlers for /test, /hello
Install nodemon and update scripts inside package.json
What are dependencies
Difference between caret and tilde(^ vs ~)

Initialize git
.gitignore
Create a remote repo on github
Push all code to remote origin

Play with routes and route extensions
Order of the routes matter alot


Explore routing and use of ?,+,(),* in the routes  
Use of regex in routes /a/,/.*fly$/
Reading the query params in the routes


Reading the dynamic routes

Multiple Route Handlers-Play with the code
next()
next function and errors along with res.send()
app.use("/route",rH,[rH2,rH3],rH4,rH5);
What is a Middleware and why do we need it?
How express Js basically handles requests behind the scenes
Difference between app.use and app.all
Write a dummy auth middleware for admin
Write a dummy auth middleware for all user routes, except /user/login
Error Handling using app.use("/",(err,req,res,next)=>{});

Create a free cluster on MongoDB official Website(Mongo Atlas)
Install mongoose library
Connect your application to the Database "Connection-url/devTinder(devTinder is the name of the database)
Call the connectDB function and connect to database before starting application on 3000
Create a userSchema & user Model
Create POST/signup API to add data to database
Push some documents using API calls from postman
Error Handling using try,catch

JS object vs JSON(difference)
Add the express.json() middleware to your app
Make your signup API dynamic to receive data from the end user
User.findOne with duplicate email ids,which object returned
API-Get user by email
API-Feed API-GET/feed - get all the users from the database
API-get user By ID
Create a delete user API
API-Update a user
Explore the Mongoose Documentation for Model methods
What are options in a Model.findOneAndUpdate method, explore more about it
API-Update the user with email ID