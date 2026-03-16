# MEVN Stack Infinite Scroll Activity Feed

This project is a full stack activity feed application built using the MEVN stack.

## Tech Stack

Frontend
- Vue.js
- Axios

Backend
- Node.js
- Express.js

Database
- MongoDB

## Features

- Activity Feed UI
- Infinite Scroll Pagination
- REST API Backend
- MongoDB Integration

## Project Structure

fractal-mevn-assignment
├── backend
│   ├── models
│   │   └── Activity.js
│   ├── routes
│   │   └── activityRoutes.js
│   ├── seed
│   │   └── seedData.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Feed.vue
│   │   │   └── ActivityCard.vue
│   │   ├── App.vue
│   │   └── main.js
│   ├── index.html
│   └── package.json
│
└── README.md

## Backend Setup

cd backend  
npm install  
node server.js  

## Seed Database

node seed/seedData.js

## Frontend Setup

cd frontend  
npm install  
npm run dev

Open in browser:

http://localhost:5173

## Data Flow

The Vue frontend sends requests to the Node.js backend using Axios.  
The backend retrieves activity records from MongoDB and returns them as JSON.  
The frontend renders the activities and loads additional records as the user scrolls.

## Author

Govind Singh Rajput  
B.Tech Computer Science Engineering
