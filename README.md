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
## Project Structure

```text
fractal-mevn-assignment
│
├── backend
│   ├── models
│   │   └── Activity.js
│   │
│   ├── routes
│   │   └── activityRoutes.js
│   │
│   ├── seed
│   │   └── seedData.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Feed.vue
│   │   │   └── ActivityCard.vue
│   │   │
│   │   ├── App.vue
│   │   └── main.js
│   │
│   ├── index.html
│   └── package.json
│
└── README.md
```


## Backend Setup

Navigate to the backend folder:

cd backend  
npm install  

Start the backend server:

node server.js


## Seed Database

To insert sample activities into MongoDB:

node seed/seedData.js

This will populate the database with activity records.


## Frontend Setup

Navigate to the frontend folder:

cd frontend  
npm install  

Start the development server:

npm run dev


Open the application in browser:

http://localhost:5173


## API Endpoint

GET /api/feed

This endpoint returns activity records from MongoDB.


Example response:

[
  {
    "_id": "...",
    "title": "Activity 1",
    "description": "Sample activity",
    "createdAt": "2026-03-14"
  }
]


## Data Flow

1. The Vue frontend sends HTTP requests to the Node.js backend using Axios.
2. The Express API retrieves activity data from MongoDB.
3. The backend returns the activities as JSON.
4. The frontend renders the activities in the feed UI.
5. When the user scrolls, additional activities are fetched and appended to the feed.


## Features

- Activity feed UI
- Infinite scroll pagination
- REST API backend
- MongoDB database integration
- Component-based Vue architecture


## Author

Govind Singh   
B.Tech Computer Science Engineering

