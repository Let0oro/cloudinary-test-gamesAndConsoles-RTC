# Sports Team & Player Management API w/ Cloudinary

## **Introduction**

This is a RESTful API built with Express.js, MongoDB, and Cloudinary for managing players and teams in a sports application. It handles CRUD operations (Create, Read, Update, Delete) for both players and teams, and also supports image uploads for each entity using Cloudinary and Multer. The backend is developed entirely in JavaScript.

---

### **Dependencies**

1. **express**: Web framework for building the API.
   - **Installation**: `npm install express`
   - **Usage**: Manages routes, middleware, and server setup.

2. **mongoose**: MongoDB object modeling tool.
   - **Installation**: `npm install mongoose`
   - **Usage**: Provides a schema-based solution to model application data, connecting to MongoDB.

3. **multer**: Middleware for handling multipart/form-data, used for uploading files.
   - **Installation**: `npm install multer`
   - **Usage**: Handles image uploads before passing them to Cloudinary.

4. **cloudinary**: SDK for interacting with Cloudinary’s API.
   - **Installation**: `npm install cloudinary`
   - **Usage**: Uploads, manages, and transforms images in the cloud.

5. **multer-storage-cloudinary**: Integration between Multer and Cloudinary.
   - **Installation**: `npm install multer-storage-cloudinary`
   - **Usage**: Stores uploaded files directly to Cloudinary.

6. **dotenv**: Module for loading environment variables.
   - **Installation**: `npm install dotenv`
   - **Usage**: Manages configuration using environment variables.

---

## Features

- **CRUD Operations**: Manage players and teams with full CRUD functionality.
- **Image Upload**: Upload and manage images for players and teams using Cloudinary.
- **MongoDB Integration**: Use MongoDB as the database to store player and team data.
- **Error Handling**: Robust error handling for all routes.


### **Technologies Used**

- **Node.js**: JavaScript runtime for executing server-side code.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB & Mongoose**: NoSQL database and ODM for data management.
- **Multer**: Middleware for handling `multipart/form-data`, which is primarily used for uploading files.
- **Cloudinary**: Cloud service for storing and managing images.
- **dotenv**: Module for loading environment variables from a `.env` file into `process.env`.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).
- **MongoDB**: You need a MongoDB instance. You can use a local installation or a cloud-based solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Cloudinary Account**: Create an account at [Cloudinary](https://cloudinary.com/) to get your API keys.



### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/players-teams-api.git
   cd players-teams-api
   ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory with the following content:

    ```env
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    DB_URL=your_mongodb_uri

4. **Start the server:**

    ```bash
    npm run dev
    ```

    The API will be available at `http://localhost:3000/api`.

## Endpoints

### Team Endpoints

- **GET /teams**: Retrieve all teams.
- **GET /teams/:id**: Retrieve a team by its ID.
- **POST /teams/new**: Create a new team. (Image upload supported)
- **PUT /teams/update/:id**: Update a team by its ID. (Image upload supported)
- **DELETE /teams/delete/:id**: Delete a team by its ID. (Image deleting supported)

### Player Endpoints

- **GET /players**: Retrieve all players.
- **GET /players/:id**: Retrieve a player by its ID.
- **POST /players/new**: Create a new player. (Image upload supported)
- **PUT /players/update/:id**: Update a player by its ID. (Image upload supported)
- **DELETE /players/delete/:id**: Delete a player by its ID. (Image deleting supported)

## Image Upload

This API uses Cloudinary to store images. Multer handles the image upload process on the server side before sending it to Cloudinary.

- **POST/PUT requests** that involve image uploads should include the image file in the `form-data` body with the key `logo` (for teams) or `profilePicture` (for player).

## Project Structure

```plaintext
├───api/
│   ├── controllers/
│   │   ├── team.controller.js
│   │   └── player.controller.js
│   ├── models/
│   │   ├── team.model.js
│   │   └── player.model.js
│   ├── routes/
│   │   ├── team.routes.js
│   │   └── player.routes.js
│   ├── seeds/
│   │   └── team.seed.js
├── middlewares/
│   └── files.middleware.js
├── utils/
│   └── db.js
├── index.js
├── .env
├── package.json
└── README.md
```

## Usage

### Creating a Team

To create a new team, send a `POST` request to `/teams/new` with the following fields:

- `name`: String, required
- `coach`: String, required
- `description`: String, required
- `foundationYear`: Number, required
- `category`: String, required
- `logo`: Image file (optional)

### Creating a Player

To create a new player, send a `POST` request to `/players/new` with the following fields:

- `name`: String, required
- `position`: String, required
- `jerseyNumber`: Number, required
- `age`: Number, required
- `team`: Team ID, required
- `position`: String, required
- `profilePicture`: Image file (optional)

## License

This project is licensed under the MIT License.
