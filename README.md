
### Overview

Data Visualization Dashboard app using Mern(Mongo,Express,React,Node)

Following are the Features included in the App.
1. Use data from given json file
2. Add data to MongoDB using MongoDB Compass
3. Create Server side using NODE.JS,Express.JS
4. Use of Axios, Router,Mongoose,
5. Use of React,Bootsrap,tailwind css for client side 
6. User can view data in the form of cards on Home page  
7. Only 8 cards are shown first time, by clicking show more you can see two more new cards and so on..
8. on the sidebar section there is option to toggle from home page to charts pages without reloading page
9. in the bar chart menu users can see total number of projects  
10. in the polar and doughnut chart section users can see number of countries, sectors, topics, pestles, sources, etc are involved
    if user deselct the any of section graph will regenrate
11. Line Chart represents number of projects as per pestle
12. Pie and Radar Charts represents number of projects as per pestle
13. Filters are on each page , users can also filter by there need
14. Search bar Works as search engine any keyword which matches to value can shown 
15. Responsive Designe works perfectly on each device
 




### Backend
In the backend of the project uses 

- Node.js(Main backend lamguage )
- Express.js(To craete REST API)
- Mongoose( To connect MongoDB with express)
- Routers( To Routing Between client and server)




* Setup Project

    * Create connection of mongoDB using MongoDB Compass
        add data to database in collection blackoffer3
        simply upload json file to this collection

    * init project

   

    * create main file app.js
        which manages connection of DB and PORT

    * create Folder routes
        which manages routing of the app

    * create Models
       SCHEMA of the DB

    * controllers
       includes API call


  ###  Frontend

- Reactjs
- Bootstrap (UI library)
- react-router-dom (routing in UI)
- axios (call APIs)
- Tailwindcss (for styling)


     * Setup project npx create-react-app
        * App.js (Main file which has routes of the project)
        * craete folder component has chart folder and components that can be reusable
        * in Pages folder has all files
        * styles folder includes css




### How To Run Project


    1. Step 
        open MongoDB Compass
        connect to HOST:localhost:27017 

    2. step
        open project folder
        cd server
        open terminal cd server
        npm install
        nodemon app.js
        project will run as nodemon if any changes has done in the project nodemon will auto refresh 
        no need to restart server
        after successfully done this message will show
        Server is active on Port 8000
        MongoDb database is connected!

        now the node.js(backend) of the project run on port 8000

    3. step
        in terminal
        cd client
        npm install
        npm start
        webpack compiled successfully
        project runs on the browser 
        http://localhost:3000/






### Project 
    
    * this project is responsive works perfect on mobile 
    * Users can view there data in the form of graphs
    * users can filter by year,country,topic,region,sector
    * saerch bar can searches any of the value
    * Neat and clean design
    * user friendly



### IN Progress
    
    * More filter options 
    * there is hard code for filter dropdown values 
    * in future filter dropdown values should get from database as per need
    * Advanced UI Dashboard
    * Advanced Serach option
    * Pagination for data cards
    * More Graph options
#   D a t a - V i s u a l i z a t i o n - D a s h b o a r d 
 
 
