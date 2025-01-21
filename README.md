# Project: IKHAA API

IKHAA is a dynamic web application designed to simplify and enhance the process of charitable giving. The platform connects donors who wish to give away items with needers seeking assistance, all under the supervision of charity organizations members to ensure transparency and fairness.

With IKHAA, donors can effortlessly put their giveaways at the charity, members of the charity will put these categorized items on IKHAA, and needers can explore available items, add them to a cart, and submit requests. The system facilitates seamless interaction while keeping charity organizations in control of approvals and logistics.

Key Features:

- **User Roles**: Separate interfaces for charity members and needers, with tailored functionalities for each.

- **Request Management**: Real-time updates on request statuses and notifications.

- **Streamlined Operations**: Category and item management, request approvals, and tracking.

IKHAA leverages modern web technologies to create an intuitive and impactful solution for fostering connections and facilitating resource sharing in the community.

## Prerequisites

Before running the API, ensure you have the following installed on your systme:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or a cloud instance like MongoDB Atlas)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Instructions to Run the API

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### 1. Clone the Repository

```bash
git clone <clone URl from repository>
cd Final-Ikhaa
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### 2. Install Dependencies listed in package.json

```bash
sudo npm install --verbose
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### 3. Set Up Environment Variables if the .env file is not already existed in the repo directory

The API requires a `.env` file to store sensitive configuration details. Follow these steps to create and configure the file:

1. Create a `.env` file in the root directory of the project:
   - On Linux/MacOS:

     ```bash
     touch .env
     ```

2. Add the following environment variables to the `.env` file:

   ```env
   # Server Configuration
   PORT=5000

   # MongoDB Configuration
   # Replace with your MongoDB connection string (local or Atlas).
   MONGO_URI="mongodb+srv://username:password@cluster.mongodb.net"

   # JWT Configuration
   # Replace with a strong random string.
   JWT_SECRET=your_jwt_secret_here

   ```

3. Ensure that .env file is in your .gitignore

4. Load Enviroment Variables in your Code

```bash
npm install dotenv
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### 4. Start the Backend Server

```bash
npm start
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### 5. Test the API Endpoints

```bash
npm test
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### 6. Explore the API by accessing the localhost 5000 and try to signup/login as needer and as member to see different functionalities for both roles

## Here is a full testing API Documentation with all status codes responses

## 📁 Collection: Reaching the API LandingPage

## End-point: Get LandingPage

This is get request to reach the landing page of API and then have the chances to login or signup.

### Method: GET
>
>
```
>localhost:5000/
>```
>
### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|

### Response: 200

```json
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>IKHAA - Welcome</title>
        <link rel="stylesheet" href="/public/landingPage.css">
    </head>
    <body>
        <header>
            <div class="header-container">
                <h1>Welcome to 
                    <span class="highlight">IKHAA</span>
                </h1>
                <p>Join our mission of brotherhood, sharing resources, and helping those in need.</p>
            </div>
        </header>
        <main>
            <div class="hero-section">
                <div class="hero-text">
                    <h2>Your contribution makes a difference!</h2>
                    <p>Sign up now to be a part of the change, or log in to continue your journey.</p>
                </div>
            </div>
            <div class="buttons-container">
                <button id="signup-btn" onclick="redirectToSignup()">Signup</button>
                <button id="login-btn" onclick="redirectToLogin()">Login</button>
            </div>
        </main>
        <footer>
            <p>&copy; 2024 IKHAA. All rights reserved.</p>
        </footer>
        <script>
    // Redirect to the signup page
    function redirectToSignup() {
      window.location.href = "/public/authentication/signup.html";
    }

    // Redirect to the login page
    function redirectToLogin() {
      window.location.href = "/public/authentication/login.html";
    }
  </script>
    </body>
</html>
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Authentication Requests

## End-point: Member signup Post Request

This is the post request to sign up as a member with providing the request with member data such as name, email, phone, role, password, and photo is optional.

You will see below two examples for different responses, response 201 status code created successfully, and 400 status code bad request.

### Method: POST
>
>```
>localhost:5000/auth/signup
>```
>
### Body (**raw**)

```json
{
    "name": "Adam Mohamed",
    "email": "adam@test.com",
    "role": "member",
    "password": "newPassword123",
    "phone": "2223339555"
}
```

### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|

### Response: 400

```json
{
    "error": "User already exists"
}
```

### Response: 201

```json
{
    "message": "User registered successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Needer signup post request

This is the post request to sign up as a needer with providing the request with needer data such as name, email, phone, role, password, and photo is optional.

You will see below two examples for different responses, response 201 status code created successfully, and 400 status code bad request.

### Method: POST
>
>```
>localhost:5000/auth/signup
>```
>
### Body (**raw**)

```json
{
    "name": "Adam Elgendy",
    "email": "adamneeder@test.com",
    "role": "needer",
    "password": "newPassword123",
    "phone": "1113214455"
}
```

### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|

### Response: 400

```json
{
    "error": "User already exists"
}
```

### Response: 201

```json
{
    "message": "User registered successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Needer login request

This is the login request endpoint, inwhich the needer will be generated his own token containing his role"needer", that allows him to get into neederboard and do his own journey.

### Method: POST
>
>```
>localhost:5000/auth/login
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|

### Body (**raw**)

```json
{
    "email": "radwaneeder@test.com",
    "password": "newPassword123"
}
```

### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|

### Response: 200

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNjY5ODk4NCwiZXhwIjoxNzM2Nzg1Mzg0fQ.AuWk2FwGdIADU4Uwj-VuY0dIhKAMuXgvH5V11HFvvAw",
    "role": "needer",
    "message": "User logged in successfully"
}
```

### Response: 404

```json
{
    "error": "User does not exist"
}
```

### Response: 400

```json
{
    "error": "Invalid password"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Member login request

This is the login request endpoint, inwhich the member will be generated his own token containing his role"member", that allows him to get into memberboard and do his own journey.

### Method: POST
>
>```
>localhost:5000/auth/login
>```
>
### Body (**raw**)

```json
{
    "email": "radwa@test.com",
    "password": "newPassword123"
}
```

### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|

### Response: 200

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTgzMTMsImV4cCI6MTczNzA0NDcxM30.PyKk9os65rROnW-2K_dkDoLuWKUEJoWiCsAWrnESKi4",
    "role": "member",
    "message": "User logged in successfully"
}
```

### Response: 404

```json
{
    "error": "User does not exist"
}
```

### Response: 400

```json
{
    "error": "Invalid password"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: reaching needer board after login

This is the specific board endpoint for needers to reach needer board, needer-roles only are available to reach this board.

### Method: GET
>
>```
>localhost:5000/board/neederboard
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNjk1ODc4NSwiZXhwIjoxNzM3MDQ1MTg1fQ.px9t-rfVGxWcqYskzRPVEd6nT4egeGV3G-dtX5CtW_0|

### Response: 200

```json
{
    "message": "Welcome to the neederboard, updtaed-Radwa Ahmed!"
}
```

### Response: 401

```json
{
    "error": "Access denied. No token provided"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: reaching member board after login

This is the specific board endpoint for members to reach member board, member-roles only are available to reach this board.

### Method: GET
>
>```
>localhost:5000/board/memberboard
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoiUmFkd2EgVGF3ZmlrIiwiaWF0IjoxNzM2NDQyOTkwLCJleHAiOjE3MzY1MjkzOTB9.pCjGTmOeH4nzfb17LY5xSmSCkHWXrgZEvzul7Zv1dPM|

### Response: 200

```json
{
    "message": "Welcome to the memberboard, updtaed-Radwa Tawfik!"
}
```

### Response: 401

```json
{
    "error": "Access denied. No token provided"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Categories Model handeling Requests

## End-point: Get all categories for needers

This request to handle needers getting all available categories members already created at their board and it is fetched when the needer login into his own needer board

### Method: GET
>
>```
>localhost:5000/categories
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNjk1ODc4NSwiZXhwIjoxNzM3MDQ1MTg1fQ.px9t-rfVGxWcqYskzRPVEd6nT4egeGV3G-dtX5CtW_0|

### Response: 200

```json
[
    {
        "_id": "6775b60c7a444ab4d2a17570",
        "name": "Fresh Food",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-01T21:39:24.249Z",
        "updatedAt": "2025-01-03T06:12:18.250Z",
        "__v": 0,
        "items": [
            {
                "_id": "677c0b6fac2bf2a702f64629",
                "name": "Fresh Cucumber",
                "description": "Freshly harvested cucumber from giver lands and ready to be picked up until tomorrow",
                "category": "6775b60c7a444ab4d2a17570",
                "quantity": 1,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-06T16:57:19.878Z",
                "updatedAt": "2025-01-12T21:04:55.409Z",
                "__v": 0
            }
        ],
        "id": "6775b60c7a444ab4d2a17570"
    },
    {
        "_id": "6776c7e3d490c3cc320af679",
        "name": "Women Clothes",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-02T17:07:47.664Z",
        "updatedAt": "2025-01-02T17:07:47.664Z",
        "__v": 0,
        "items": [
            {
                "_id": "67771dc41123b485e4f045b5",
                "name": "yellow shirt",
                "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs.",
                "category": "6776c7e3d490c3cc320af679",
                "quantity": 2,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-02T23:14:12.587Z",
                "updatedAt": "2025-01-12T21:04:55.000Z",
                "__v": 0
            }
        ],
        "id": "6776c7e3d490c3cc320af679"
    },
    {
        "_id": "6777179e88751c4dfd919ba0",
        "name": "Electronics",
        "createdBy": "6774e728ade090786ee77239",
        "createdAt": "2025-01-02T22:47:58.624Z",
        "updatedAt": "2025-01-02T22:47:58.624Z",
        "__v": 0,
        "items": [
            {
                "_id": "677c0a25ac2bf2a702f6460f",
                "name": "HP Computer",
                "description": "HP computer gently used with long charger and battery replacemnet",
                "category": "6777179e88751c4dfd919ba0",
                "quantity": 12,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-06T16:51:49.799Z",
                "updatedAt": "2025-01-12T09:57:43.800Z",
                "__v": 0
            },
            {
                "_id": "677c0a6cac2bf2a702f64613",
                "name": "Smart TV",
                "description": "smart tv with high resolution quality and embedded systems to link to the internet",
                "category": "6777179e88751c4dfd919ba0",
                "quantity": 16,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-06T16:53:00.236Z",
                "updatedAt": "2025-01-12T16:15:59.708Z",
                "__v": 0
            },
            {
                "_id": "6783dd23b18734db0f522d19",
                "name": "Mouse",
                "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
                "category": "6777179e88751c4dfd919ba0",
                "quantity": 88,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6779eb2d4bdc9710b7f3ed75",
                "createdAt": "2025-01-12T15:17:55.211Z",
                "updatedAt": "2025-01-12T21:12:13.928Z",
                "__v": 0
            },
            {
                "_id": "6784302db18734db0f522ff7",
                "name": "Mouse",
                "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
                "category": "6777179e88751c4dfd919ba0",
                "quantity": 100,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6779eb2d4bdc9710b7f3ed75",
                "createdAt": "2025-01-12T21:12:13.739Z",
                "updatedAt": "2025-01-12T21:12:13.739Z",
                "__v": 0
            }
        ],
        "id": "6777179e88751c4dfd919ba0"
    },
    {
        "_id": "677717ba88751c4dfd919ba2",
        "name": "Books to Borrow",
        "createdBy": "6774e728ade090786ee77239",
        "createdAt": "2025-01-02T22:48:26.091Z",
        "updatedAt": "2025-01-02T22:48:26.091Z",
        "__v": 0,
        "items": [
            {
                "_id": "678040101468440a36ec297f",
                "name": "Pride and prejeduice",
                "description": "A great novel talking about Darcy and Elizabeth who fell in love together but they faced lots of challenges due to the community surrounding",
                "category": "677717ba88751c4dfd919ba2",
                "quantity": 3,
                "photo": "https://via.placeholder.com/300x300.png",
                "addedBy": "677ffed830b0c145c91aade4",
                "createdAt": "2025-01-09T21:30:56.552Z",
                "updatedAt": "2025-01-12T09:57:44.434Z",
                "__v": 0
            }
        ],
        "id": "677717ba88751c4dfd919ba2"
    },
    {
        "_id": "67783262d3dee58b18b67e16",
        "name": "Men Shoes",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-03T18:54:26.838Z",
        "updatedAt": "2025-01-03T18:54:26.838Z",
        "__v": 0,
        "items": [],
        "id": "67783262d3dee58b18b67e16"
    },
    {
        "_id": "6779d642f0cede25e01824e6",
        "name": "Technology",
        "createdBy": "6773a22462ef5a6931ce791e",
        "createdAt": "2025-01-05T00:45:54.357Z",
        "updatedAt": "2025-01-05T00:45:54.357Z",
        "__v": 0,
        "items": [],
        "id": "6779d642f0cede25e01824e6"
    },
    {
        "_id": "677a64cf22b7b0b56c28e2bd",
        "name": "BabyCare",
        "createdBy": "677a5ffe85c629b2c5c38d1f",
        "createdAt": "2025-01-05T10:54:07.961Z",
        "updatedAt": "2025-01-05T10:54:07.961Z",
        "__v": 0,
        "items": [],
        "id": "677a64cf22b7b0b56c28e2bd"
    },
    {
        "_id": "678011f5c88c0486991f4dcd",
        "name": "SkinCare Products",
        "createdBy": "677ffed830b0c145c91aade4",
        "createdAt": "2025-01-09T18:14:13.227Z",
        "updatedAt": "2025-01-09T18:14:13.227Z",
        "__v": 0,
        "items": [],
        "id": "678011f5c88c0486991f4dcd"
    },
    {
        "_id": "6784143bb18734db0f522e15",
        "name": "Women shoes",
        "createdBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T19:12:59.818Z",
        "updatedAt": "2025-01-13T00:22:23.973Z",
        "__v": 0,
        "items": [],
        "id": "6784143bb18734db0f522e15"
    },
    {
        "_id": "67841443b18734db0f522e17",
        "name": "Children shoes",
        "createdBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T19:13:07.043Z",
        "updatedAt": "2025-01-13T00:22:32.797Z",
        "__v": 0,
        "items": [],
        "id": "67841443b18734db0f522e17"
    },
    {
        "_id": "67842bb5b18734db0f522f77",
        "name": "Hair Products",
        "createdBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T20:53:09.632Z",
        "updatedAt": "2025-01-13T00:22:51.722Z",
        "__v": 0,
        "items": [],
        "id": "67842bb5b18734db0f522f77"
    },
    {
        "_id": "67844a2dfafefc46f27f4c51",
        "name": "School Supplies",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-12T23:03:09.750Z",
        "updatedAt": "2025-01-13T00:23:38.312Z",
        "__v": 0,
        "items": [],
        "id": "67844a2dfafefc46f27f4c51"
    }
]
```

### Response: 401

```json
{
    "error": "Access denied. No token provided"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get all categories for members

This request is to handle members getting all categories they already created on their own member board, which then appears on the needer board when the needer logs in.

### Method: GET
>
>```
>localhost:5000/categories
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Response: 200

```json
[
    {
        "_id": "6775b60c7a444ab4d2a17570",
        "name": "Fresh Food",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-01T21:39:24.249Z",
        "updatedAt": "2025-01-03T06:12:18.250Z",
        "__v": 0,
        "items": [
            {
                "_id": "677c0b6fac2bf2a702f64629",
                "name": "Fresh Cucumber",
                "description": "Freshly harvested cucumber from giver lands and ready to be picked up until tomorrow",
                "category": "6775b60c7a444ab4d2a17570",
                "quantity": 1,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-06T16:57:19.878Z",
                "updatedAt": "2025-01-12T21:04:55.409Z",
                "__v": 0
            }
        ],
        "id": "6775b60c7a444ab4d2a17570"
    },
    {
        "_id": "6776c7e3d490c3cc320af679",
        "name": "Women Clothes",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-02T17:07:47.664Z",
        "updatedAt": "2025-01-02T17:07:47.664Z",
        "__v": 0,
        "items": [
            {
                "_id": "67771dc41123b485e4f045b5",
                "name": "yellow shirt",
                "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs.",
                "category": "6776c7e3d490c3cc320af679",
                "quantity": 2,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-02T23:14:12.587Z",
                "updatedAt": "2025-01-12T21:04:55.000Z",
                "__v": 0
            }
        ],
        "id": "6776c7e3d490c3cc320af679"
    },
    {
        "_id": "6777179e88751c4dfd919ba0",
        "name": "Electronics",
        "createdBy": "6774e728ade090786ee77239",
        "createdAt": "2025-01-02T22:47:58.624Z",
        "updatedAt": "2025-01-02T22:47:58.624Z",
        "__v": 0,
        "items": [
            {
                "_id": "677c0a25ac2bf2a702f6460f",
                "name": "HP Computer",
                "description": "HP computer gently used with long charger and battery replacemnet",
                "category": "6777179e88751c4dfd919ba0",
                "quantity": 12,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-06T16:51:49.799Z",
                "updatedAt": "2025-01-12T09:57:43.800Z",
                "__v": 0
            },
            {
                "_id": "677c0a6cac2bf2a702f64613",
                "name": "Smart TV",
                "description": "smart tv with high resolution quality and embedded systems to link to the internet",
                "category": "6777179e88751c4dfd919ba0",
                "quantity": 16,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-06T16:53:00.236Z",
                "updatedAt": "2025-01-12T16:15:59.708Z",
                "__v": 0
            },
            {
                "_id": "6783dd23b18734db0f522d19",
                "name": "Mouse",
                "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
                "category": "6777179e88751c4dfd919ba0",
                "quantity": 88,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6779eb2d4bdc9710b7f3ed75",
                "createdAt": "2025-01-12T15:17:55.211Z",
                "updatedAt": "2025-01-12T21:12:13.928Z",
                "__v": 0
            },
            {
                "_id": "6784302db18734db0f522ff7",
                "name": "Mouse",
                "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
                "category": "6777179e88751c4dfd919ba0",
                "quantity": 100,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6779eb2d4bdc9710b7f3ed75",
                "createdAt": "2025-01-12T21:12:13.739Z",
                "updatedAt": "2025-01-12T21:12:13.739Z",
                "__v": 0
            }
        ],
        "id": "6777179e88751c4dfd919ba0"
    },
    {
        "_id": "677717ba88751c4dfd919ba2",
        "name": "Books to Borrow",
        "createdBy": "6774e728ade090786ee77239",
        "createdAt": "2025-01-02T22:48:26.091Z",
        "updatedAt": "2025-01-02T22:48:26.091Z",
        "__v": 0,
        "items": [
            {
                "_id": "678040101468440a36ec297f",
                "name": "Pride and prejeduice",
                "description": "A great novel talking about Darcy and Elizabeth who fell in love together but they faced lots of challenges due to the community surrounding",
                "category": "677717ba88751c4dfd919ba2",
                "quantity": 3,
                "photo": "https://via.placeholder.com/300x300.png",
                "addedBy": "677ffed830b0c145c91aade4",
                "createdAt": "2025-01-09T21:30:56.552Z",
                "updatedAt": "2025-01-12T09:57:44.434Z",
                "__v": 0
            }
        ],
        "id": "677717ba88751c4dfd919ba2"
    },
    {
        "_id": "67783262d3dee58b18b67e16",
        "name": "Men Shoes",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-03T18:54:26.838Z",
        "updatedAt": "2025-01-03T18:54:26.838Z",
        "__v": 0,
        "items": [],
        "id": "67783262d3dee58b18b67e16"
    },
    {
        "_id": "6779d642f0cede25e01824e6",
        "name": "Technology",
        "createdBy": "6773a22462ef5a6931ce791e",
        "createdAt": "2025-01-05T00:45:54.357Z",
        "updatedAt": "2025-01-05T00:45:54.357Z",
        "__v": 0,
        "items": [],
        "id": "6779d642f0cede25e01824e6"
    },
    {
        "_id": "677a64cf22b7b0b56c28e2bd",
        "name": "BabyCare",
        "createdBy": "677a5ffe85c629b2c5c38d1f",
        "createdAt": "2025-01-05T10:54:07.961Z",
        "updatedAt": "2025-01-05T10:54:07.961Z",
        "__v": 0,
        "items": [],
        "id": "677a64cf22b7b0b56c28e2bd"
    },
    {
        "_id": "678011f5c88c0486991f4dcd",
        "name": "SkinCare Products",
        "createdBy": "677ffed830b0c145c91aade4",
        "createdAt": "2025-01-09T18:14:13.227Z",
        "updatedAt": "2025-01-09T18:14:13.227Z",
        "__v": 0,
        "items": [],
        "id": "678011f5c88c0486991f4dcd"
    },
    {
        "_id": "6784143bb18734db0f522e15",
        "name": "Women shoes",
        "createdBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T19:12:59.818Z",
        "updatedAt": "2025-01-13T00:22:23.973Z",
        "__v": 0,
        "items": [],
        "id": "6784143bb18734db0f522e15"
    },
    {
        "_id": "67841443b18734db0f522e17",
        "name": "Children shoes",
        "createdBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T19:13:07.043Z",
        "updatedAt": "2025-01-13T00:22:32.797Z",
        "__v": 0,
        "items": [],
        "id": "67841443b18734db0f522e17"
    },
    {
        "_id": "67842bb5b18734db0f522f77",
        "name": "Hair Products",
        "createdBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T20:53:09.632Z",
        "updatedAt": "2025-01-13T00:22:51.722Z",
        "__v": 0,
        "items": [],
        "id": "67842bb5b18734db0f522f77"
    },
    {
        "_id": "67844a2dfafefc46f27f4c51",
        "name": "School Supplies",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-12T23:03:09.750Z",
        "updatedAt": "2025-01-13T00:23:38.312Z",
        "__v": 0,
        "items": [],
        "id": "67844a2dfafefc46f27f4c51"
    }
]
```

### Response: 401

```json
{
    "error": "Access denied. No token provided"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Adding new Category

This request handles how the member and member-only can add new categories to the categories list.

### Method: POST
>
>```
>localhost:5000/categories/add
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Body (**raw**)

```json
{
    "name": "Coffee Beans"
}
```

### Response: 500

```json
{
    "error": "Failed to create category"
}
```

### Response: 201

```json
{
    "message": "Category created successfully.",
    "category": {
        "name": "Coffee Beans",
        "createdBy": "677ffed830b0c145c91aade4",
        "_id": "6787e98f1e0829ee7f3fca5a",
        "createdAt": "2025-01-15T16:59:59.910Z",
        "updatedAt": "2025-01-15T16:59:59.910Z",
        "__v": 0,
        "id": "6787e98f1e0829ee7f3fca5a"
    }
}
```

### Response: 400

```json
{
    "error": "name and createdBy are required"
}
```

### Response: 401

```json
{
    "error": "Access denied. No token provided"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Counting Categories

This request is to handle how the member can get the count of categories already exists

### Method: GET
>
>```
>localhost:5000/categories/count
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Response: 200

```json
{
    "count": 13
}
```

### Response: 401

```json
{
    "error": "Access denied. No token provided"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Getting Specific category by Id

This request is to handle the member to get a specific category by it's ID

### Method: GET
>
>```
>localhost:5000/categories/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Response: 200

```json
{
    "_id": "6775b60c7a444ab4d2a17570",
    "name": "Fresh Food",
    "createdBy": "6774dc923b4111b80bd8faa1",
    "createdAt": "2025-01-01T21:39:24.249Z",
    "updatedAt": "2025-01-03T06:12:18.250Z",
    "__v": 0,
    "items": [
        {
            "_id": "677c0b6fac2bf2a702f64629",
            "name": "Fresh Cucumber",
            "description": "Freshly harvested cucumber from giver lands and ready to be picked up until tomorrow",
            "category": "6775b60c7a444ab4d2a17570",
            "quantity": 1,
            "photo": "http://via.placeholder.com/150",
            "addedBy": "6774dc923b4111b80bd8faa1",
            "createdAt": "2025-01-06T16:57:19.878Z",
            "updatedAt": "2025-01-12T21:04:55.409Z",
            "__v": 0
        }
    ],
    "id": "6775b60c7a444ab4d2a17570"
}
```

### Response: 500

```json
{
    "error": "Failed to fetch category"
}
```

### Response: 404

```json
{
    "error": "Category not exists"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Getting categories created by certain member Id

This request to handle how the member can get all categories created by certain member ID

### Method: GET
>
>```
>localhost:5000/categories/user/:userId
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
[
    {
        "_id": "6775b60c7a444ab4d2a17570",
        "name": "Fresh Food",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-01T21:39:24.249Z",
        "updatedAt": "2025-01-03T06:12:18.250Z",
        "__v": 0,
        "items": [
            {
                "_id": "677c0b6fac2bf2a702f64629",
                "name": "Fresh Cucumber",
                "description": "Freshly harvested cucumber from giver lands and ready to be picked up until tomorrow",
                "category": "6775b60c7a444ab4d2a17570",
                "quantity": 1,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-06T16:57:19.878Z",
                "updatedAt": "2025-01-12T21:04:55.409Z",
                "__v": 0
            }
        ],
        "id": "6775b60c7a444ab4d2a17570"
    },
    {
        "_id": "6776c7e3d490c3cc320af679",
        "name": "Women Clothes",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-02T17:07:47.664Z",
        "updatedAt": "2025-01-02T17:07:47.664Z",
        "__v": 0,
        "items": [
            {
                "_id": "67771dc41123b485e4f045b5",
                "name": "yellow shirt",
                "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs.",
                "category": "6776c7e3d490c3cc320af679",
                "quantity": 2,
                "photo": "http://via.placeholder.com/150",
                "addedBy": "6774dc923b4111b80bd8faa1",
                "createdAt": "2025-01-02T23:14:12.587Z",
                "updatedAt": "2025-01-12T21:04:55.000Z",
                "__v": 0
            }
        ],
        "id": "6776c7e3d490c3cc320af679"
    },
    {
        "_id": "67783262d3dee58b18b67e16",
        "name": "Men Shoes",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-03T18:54:26.838Z",
        "updatedAt": "2025-01-03T18:54:26.838Z",
        "__v": 0,
        "items": [],
        "id": "67783262d3dee58b18b67e16"
    },
    {
        "_id": "67844a2dfafefc46f27f4c51",
        "name": "School Supplies",
        "createdBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-12T23:03:09.750Z",
        "updatedAt": "2025-01-13T00:23:38.312Z",
        "__v": 0,
        "items": [],
        "id": "67844a2dfafefc46f27f4c51"
    }
]
```

### Response: 500

```json
{
    "error": "Failed to fetch user categories"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Updating Category

This request to handle how the member can update existed category name

### Method: PUT
>
>```
>localhost:5000/categories/update/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Body (**raw**)

```json
{
    "name": "Available Books"
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 404

```json
{
    "error": "Category not exists"
}
```

### Response: 400

```json
{
    "error": "Invalid Category name"
}
```

### Response: 200

```json
{
    "_id": "677717ba88751c4dfd919ba2",
    "name": "Available Books",
    "createdBy": "6774e728ade090786ee77239",
    "createdAt": "2025-01-02T22:48:26.091Z",
    "updatedAt": "2025-01-15T17:19:15.898Z",
    "__v": 0,
    "id": "677717ba88751c4dfd919ba2"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Deleting Category

This Request is to handle how the member can delete a category with all items added inside

### Method: DELETE
>
>```
>localhost:5000/categories/delete/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 404

```json
{
    "error": "Category not exists"
}
```

### Response: 200

```json
{
    "message": "Category and associated items deleted successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Deleting multi together at once

This request is to handle how the member can multi-select more than one category and delete them all at once

### Method: POST
>
>```
>localhost:5000/categories/bulk-delete
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|

### Body (**raw**)

```json
{
    "ids": ["677a64cf22b7b0b56c28e2bd"]
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 404

```json
{
    "error": "No categories found for deletion"
}
```

### Response: 200

```json
{
    "message": "Categories and associated items deleted successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Items Model handeling Requests

## End-point: getting items for member by category id

This request is to handle how the member/needer can get a certain category by it's ID

### Method: GET
>
>```
>localhost:5000/items/categories/:categoryId/items
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
[
    {
        "_id": "677c0a25ac2bf2a702f6460f",
        "name": "HP Computer",
        "description": "HP computer gently used with long charger and battery replacemnet",
        "category": {
            "_id": "6777179e88751c4dfd919ba0",
            "name": "Electronics",
            "id": "6777179e88751c4dfd919ba0"
        },
        "quantity": 12,
        "photo": "http://via.placeholder.com/150",
        "addedBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-06T16:51:49.799Z",
        "updatedAt": "2025-01-12T09:57:43.800Z",
        "__v": 0
    },
    {
        "_id": "677c0a6cac2bf2a702f64613",
        "name": "Smart TV",
        "description": "smart tv with high resolution quality and embedded systems to link to the internet",
        "category": {
            "_id": "6777179e88751c4dfd919ba0",
            "name": "Electronics",
            "id": "6777179e88751c4dfd919ba0"
        },
        "quantity": 16,
        "photo": "http://via.placeholder.com/150",
        "addedBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-06T16:53:00.236Z",
        "updatedAt": "2025-01-12T16:15:59.708Z",
        "__v": 0
    },
    {
        "_id": "6783dd23b18734db0f522d19",
        "name": "Mouse",
        "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
        "category": {
            "_id": "6777179e88751c4dfd919ba0",
            "name": "Electronics",
            "id": "6777179e88751c4dfd919ba0"
        },
        "quantity": 88,
        "photo": "http://via.placeholder.com/150",
        "addedBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T15:17:55.211Z",
        "updatedAt": "2025-01-12T21:12:13.928Z",
        "__v": 0
    },
    {
        "_id": "6784302db18734db0f522ff7",
        "name": "Mouse",
        "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
        "category": {
            "_id": "6777179e88751c4dfd919ba0",
            "name": "Electronics",
            "id": "6777179e88751c4dfd919ba0"
        },
        "quantity": 100,
        "photo": "http://via.placeholder.com/150",
        "addedBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T21:12:13.739Z",
        "updatedAt": "2025-01-12T21:12:13.739Z",
        "__v": 0
    }
]
```

### Response: 500

```json
{
    "error": "Internal Server Error"
}
```

### Response: 404

```json
{
    "error": "No items found for this category"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getting items for needers by category Id

This request is to handle how the member/needer can get a certain category by it's ID

### Method: GET
>
>```
>localhost:5000/items/categories/:categoryId/items
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNjk1ODc4NSwiZXhwIjoxNzM3MDQ1MTg1fQ.px9t-rfVGxWcqYskzRPVEd6nT4egeGV3G-dtX5CtW_0|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
[
    {
        "_id": "677c0a25ac2bf2a702f6460f",
        "name": "HP Computer",
        "description": "HP computer gently used with long charger and battery replacemnet",
        "category": {
            "_id": "6777179e88751c4dfd919ba0",
            "name": "Electronics",
            "id": "6777179e88751c4dfd919ba0"
        },
        "quantity": 12,
        "photo": "http://via.placeholder.com/150",
        "addedBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-06T16:51:49.799Z",
        "updatedAt": "2025-01-12T09:57:43.800Z",
        "__v": 0
    },
    {
        "_id": "677c0a6cac2bf2a702f64613",
        "name": "Smart TV",
        "description": "smart tv with high resolution quality and embedded systems to link to the internet",
        "category": {
            "_id": "6777179e88751c4dfd919ba0",
            "name": "Electronics",
            "id": "6777179e88751c4dfd919ba0"
        },
        "quantity": 16,
        "photo": "http://via.placeholder.com/150",
        "addedBy": "6774dc923b4111b80bd8faa1",
        "createdAt": "2025-01-06T16:53:00.236Z",
        "updatedAt": "2025-01-12T16:15:59.708Z",
        "__v": 0
    },
    {
        "_id": "6783dd23b18734db0f522d19",
        "name": "Mouse",
        "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
        "category": {
            "_id": "6777179e88751c4dfd919ba0",
            "name": "Electronics",
            "id": "6777179e88751c4dfd919ba0"
        },
        "quantity": 88,
        "photo": "http://via.placeholder.com/150",
        "addedBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T15:17:55.211Z",
        "updatedAt": "2025-01-12T21:12:13.928Z",
        "__v": 0
    },
    {
        "_id": "6784302db18734db0f522ff7",
        "name": "Mouse",
        "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
        "category": {
            "_id": "6777179e88751c4dfd919ba0",
            "name": "Electronics",
            "id": "6777179e88751c4dfd919ba0"
        },
        "quantity": 100,
        "photo": "http://via.placeholder.com/150",
        "addedBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T21:12:13.739Z",
        "updatedAt": "2025-01-12T21:12:13.739Z",
        "__v": 0
    }
]
```

### Response: 404

```json
{
    "error": "No items found for this category"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getting items for members by itemId

This request is to handle how members/needers can get certain items by their ID

### Method: GET
>
>```
>localhost:5000/items/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 404

```json
{
    "error": "Item not found"
}
```

### Response: 200

```json
{
    "_id": "6784302db18734db0f522ff7",
    "name": "Mouse",
    "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
    "category": {
        "_id": "6777179e88751c4dfd919ba0",
        "name": "Electronics",
        "id": "6777179e88751c4dfd919ba0"
    },
    "quantity": 100,
    "photo": "http://via.placeholder.com/150",
    "addedBy": "6779eb2d4bdc9710b7f3ed75",
    "createdAt": "2025-01-12T21:12:13.739Z",
    "updatedAt": "2025-01-12T21:12:13.739Z",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getting items for needers by itemId

This request is to handle how members/needers can get certain items by their ID

### Method: GET
>
>```
>localhost:5000/items/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNjk1ODc4NSwiZXhwIjoxNzM3MDQ1MTg1fQ.px9t-rfVGxWcqYskzRPVEd6nT4egeGV3G-dtX5CtW_0|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 404

```json
{
    "error": "Item not found"
}
```

### Response: 200

```json
{
    "_id": "6784302db18734db0f522ff7",
    "name": "Mouse",
    "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
    "category": {
        "_id": "6777179e88751c4dfd919ba0",
        "name": "Electronics",
        "id": "6777179e88751c4dfd919ba0"
    },
    "quantity": 100,
    "photo": "http://via.placeholder.com/150",
    "addedBy": "6779eb2d4bdc9710b7f3ed75",
    "createdAt": "2025-01-12T21:12:13.739Z",
    "updatedAt": "2025-01-12T21:12:13.739Z",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: adding a new item into category by member only

This request is to handle how the member and member-only can add new item into certain category by it's ID

### Method: POST
>
>```
>localhost:5000/items/categories/:categoryId/items/add
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Body (**raw**)

```json
{
    "name": "HeadPhones",
    "description": "brand new HeadPhones colored black and ready to be picked up at the charity once request submitted",
    "quantity": "1"
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 201

```json
{
    "name": "HeadPhones",
    "description": "brand new HeadPhones colored black and ready to be picked up at the charity once request submitted",
    "category": "6777179e88751c4dfd919ba0",
    "quantity": 1,
    "photo": "https://via.placeholder.com/300x300.png",
    "addedBy": "677ffed830b0c145c91aade4",
    "_id": "678800ec1e0829ee7f3fcada",
    "createdAt": "2025-01-15T18:39:40.594Z",
    "updatedAt": "2025-01-15T18:39:40.594Z",
    "__v": 0
}
```

### Response: 500

```json
{
    "error": "Internal Server Error"
}
```

### Response: 400

```json
{
    "error": "\"description\" is required"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: updating items by Id for members only

This request is to handle how the member and member-only can update existing item data by item ID

### Method: PUT
>
>```
>localhost:5000/items/update/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Body (**raw**)

```json
{
    "quantity": "5"
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 500

```json
{
    "error": "Failed to update item"
}
```

### Response: 200

```json
{
    "_id": "6783dd23b18734db0f522d19",
    "name": "Mouse",
    "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
    "category": "6777179e88751c4dfd919ba0",
    "quantity": 188,
    "photo": "http://via.placeholder.com/150",
    "addedBy": "677ffed830b0c145c91aade4",
    "createdAt": "2025-01-12T15:17:55.211Z",
    "updatedAt": "2025-01-15T18:45:44.473Z",
    "__v": 0
}
```

### Response: 404

```json
{
    "error": "Item not found"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: deleting items by id for members only

This request is to handle how the member can delete certain item by it's ID

### Method: DELETE
>
>```
>localhost:5000/items/delete/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 404

```json
{
    "error": "Item not found"
}
```

### Response: 200

```json
{
    "message": "Item deleted successfully",
    "item": {
        "_id": "6784302db18734db0f522ff7",
        "name": "Mouse",
        "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir",
        "category": "6777179e88751c4dfd919ba0",
        "quantity": 100,
        "photo": "http://via.placeholder.com/150",
        "addedBy": "6779eb2d4bdc9710b7f3ed75",
        "createdAt": "2025-01-12T21:12:13.739Z",
        "updatedAt": "2025-01-12T21:12:13.739Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Requests Model handeling requests

## End-point: Creating a request by needer

This request is to handle how a needer-role only can submit a request including requested items when he confirms the order request in his basket window

### Method: POST
>
>```
>localhost:5000/requests/submit
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNjk1ODc4NSwiZXhwIjoxNzM3MDQ1MTg1fQ.px9t-rfVGxWcqYskzRPVEd6nT4egeGV3G-dtX5CtW_0|

### Body (**raw**)

```json
{
    "items": [
        {"itemId": "678040101468440a36ec297f", "quantity": "1"}
    ]
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 404

```json
{
    "success": false,
    "message": "Item with ID undefined not found"
}
```

### Response: 400

```json
{
    "success": false,
    "message": "No items provided in the request"
}
```

### Response: 201

```json
{
    "success": true,
    "message": "Request submitted successfully",
    "request": {
        "needer": "677fff4330b0c145c91aade7",
        "items": [
            {
                "item": "678040101468440a36ec297f",
                "quantity": 1,
                "_id": "678806e41e0829ee7f3fcaf4"
            }
        ],
        "status": "pending",
        "notifications": [
            "678806e41e0829ee7f3fcaf6"
        ],
        "_id": "678806e41e0829ee7f3fcaf3",
        "createdAt": "2025-01-15T19:05:08.438Z",
        "updatedAt": "2025-01-15T19:05:08.523Z",
        "__v": 1
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all requests from needers by members only

This request is to handle how the member and member-only can get all requests submitted from needers whatever their status is ("Pending", "Collected", "Refused"), and handled that status can be filtered to get requests only with status provided in the query part

### Method: GET
>
>```
>localhost:5000/requests/
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzY5NTg1MjgsImV4cCI6MTczNzA0NDkyOH0._fNZAQ-MvFscUQCT6mzdQEHO4U6KC4Cb57uAHu1GV4M|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 200

```json
{
    "success": true,
    "requests": [
        {
            "_id": "677ac91c67275e5dd894a4b7",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 2,
                    "_id": "677ac91c67275e5dd894a4b8"
                },
                {
                    "item": null,
                    "quantity": 1,
                    "_id": "677ac91c67275e5dd894a4b9"
                }
            ],
            "status": "collected",
            "notifications": [
                "677ac91c67275e5dd894a4bb",
                "677aca1b67275e5dd894a4d8"
            ],
            "createdAt": "2025-01-05T18:02:04.007Z",
            "updatedAt": "2025-01-05T18:06:19.739Z",
            "__v": 2
        },
        {
            "_id": "677b4536633eeae6f093e109",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677b4536633eeae6f093e10a"
                }
            ],
            "status": "collected",
            "notifications": [
                "677b4536633eeae6f093e10c",
                "677c00570fbd1a327d9a3dc7",
                "677c01c6f23ca9bc0b180412"
            ],
            "createdAt": "2025-01-06T02:51:34.578Z",
            "updatedAt": "2025-01-06T16:16:06.672Z",
            "__v": 3
        },
        {
            "_id": "677c082aac2bf2a702f645d0",
            "needer": {
                "_id": "677c06e0ac2bf2a702f645b4",
                "name": "Test8 tester",
                "email": "test8@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677c082aac2bf2a702f645d1"
                }
            ],
            "status": "refused",
            "notifications": [
                "677c082aac2bf2a702f645d3",
                "677c7c7c30a2ef38183eadf2"
            ],
            "createdAt": "2025-01-06T16:43:22.062Z",
            "updatedAt": "2025-01-07T00:59:40.149Z",
            "__v": 2
        },
        {
            "_id": "677c08d6ac2bf2a702f64601",
            "needer": {
                "_id": "677c06bbac2bf2a702f645ab",
                "name": "updatedTest5 tester",
                "email": "test5@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677c08d6ac2bf2a702f64602"
                }
            ],
            "status": "refused",
            "notifications": [
                "677c08d6ac2bf2a702f64604",
                "677cbf1571338ba601c72885"
            ],
            "createdAt": "2025-01-06T16:46:14.412Z",
            "updatedAt": "2025-01-07T05:43:49.530Z",
            "__v": 2
        },
        {
            "_id": "677c0c1fac2bf2a702f64665",
            "needer": {
                "_id": "677c0697ac2bf2a702f645a4",
                "name": "Test2 tester",
                "email": "test2@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677c0c1fac2bf2a702f64666"
                }
            ],
            "status": "collected",
            "notifications": [
                "677c0c1fac2bf2a702f64668",
                "677cbfa071338ba601c728cb"
            ],
            "createdAt": "2025-01-06T17:00:15.470Z",
            "updatedAt": "2025-01-07T05:46:08.434Z",
            "__v": 2
        },
        {
            "_id": "677c3e20cf10c3b3ac0cbb94",
            "needer": {
                "_id": "677c06e0ac2bf2a702f645b4",
                "name": "Test8 tester",
                "email": "test8@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677c3e20cf10c3b3ac0cbb95"
                }
            ],
            "status": "refused",
            "notifications": [
                "677c3e20cf10c3b3ac0cbb97",
                "677c67017f632ee733e0eea7"
            ],
            "createdAt": "2025-01-06T20:33:36.175Z",
            "updatedAt": "2025-01-06T23:28:01.136Z",
            "__v": 2
        },
        {
            "_id": "677c3e4ecf10c3b3ac0cbba7",
            "needer": {
                "_id": "677c06d7ac2bf2a702f645b1",
                "name": "Test7 tester",
                "email": "test7@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0b6fac2bf2a702f64629",
                        "name": "Fresh Cucumber",
                        "description": "Freshly harvested cucumber from giver lands and ready to be picked up until tomorrow"
                    },
                    "quantity": 1,
                    "_id": "677c3e4ecf10c3b3ac0cbba8"
                }
            ],
            "status": "pending",
            "notifications": [
                "677c3e4ecf10c3b3ac0cbbaa"
            ],
            "createdAt": "2025-01-06T20:34:22.820Z",
            "updatedAt": "2025-01-06T20:34:22.854Z",
            "__v": 1
        },
        {
            "_id": "677c3e6acf10c3b3ac0cbbbf",
            "needer": {
                "_id": "677c06d7ac2bf2a702f645b1",
                "name": "Test7 tester",
                "email": "test7@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677c3e6acf10c3b3ac0cbbc0"
                }
            ],
            "status": "refused",
            "notifications": [
                "677c3e6acf10c3b3ac0cbbc2",
                "677c66327f632ee733e0ee9e"
            ],
            "createdAt": "2025-01-06T20:34:50.159Z",
            "updatedAt": "2025-01-06T23:24:34.290Z",
            "__v": 2
        },
        {
            "_id": "677c3e83cf10c3b3ac0cbbcf",
            "needer": {
                "_id": "677c06d7ac2bf2a702f645b1",
                "name": "Test7 tester",
                "email": "test7@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677c3e83cf10c3b3ac0cbbd0"
                }
            ],
            "status": "collected",
            "notifications": [
                "677c3e83cf10c3b3ac0cbbd2",
                "677c4cd0867d9b0e44a11e44"
            ],
            "createdAt": "2025-01-06T20:35:15.089Z",
            "updatedAt": "2025-01-06T21:36:16.107Z",
            "__v": 2
        },
        {
            "_id": "677ccfa1b747d122a89d2abd",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677ccfa1b747d122a89d2abe"
                }
            ],
            "status": "refused",
            "notifications": [
                "677ccfa1b747d122a89d2ac0",
                "677ccfe9b747d122a89d2ae4"
            ],
            "createdAt": "2025-01-07T06:54:25.135Z",
            "updatedAt": "2025-01-07T06:55:37.605Z",
            "__v": 2
        },
        {
            "_id": "677d3bcf2166ee83dfdb443d",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677d3bcf2166ee83dfdb443e"
                }
            ],
            "status": "collected",
            "notifications": [
                "677d3bcf2166ee83dfdb4440",
                "677d3c6d2166ee83dfdb4468"
            ],
            "createdAt": "2025-01-07T14:35:59.327Z",
            "updatedAt": "2025-01-07T14:38:37.222Z",
            "__v": 2
        },
        {
            "_id": "677d3de00433f3a833939c04",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677d3de00433f3a833939c05"
                }
            ],
            "status": "refused",
            "notifications": [
                "677d3de00433f3a833939c07",
                "677d3e2c0433f3a833939c24"
            ],
            "createdAt": "2025-01-07T14:44:48.422Z",
            "updatedAt": "2025-01-07T14:46:04.903Z",
            "__v": 2
        },
        {
            "_id": "67813a3ea0bafcba397f4f26",
            "needer": {
                "_id": "677fff4330b0c145c91aade7",
                "name": "updtaed-Radwa Ahmed",
                "email": "radwaneeder@test.com",
                "phone": "1233214455"
            },
            "items": [
                {
                    "item": {
                        "_id": "678040101468440a36ec297f",
                        "name": "Pride and prejeduice",
                        "description": "A great novel talking about Darcy and Elizabeth who fell in love together but they faced lots of challenges due to the community surrounding"
                    },
                    "quantity": 1,
                    "_id": "67813a3ea0bafcba397f4f27"
                }
            ],
            "status": "collected",
            "notifications": [
                "67813a3ea0bafcba397f4f29",
                "6781670f784c286a5ab85d0c"
            ],
            "createdAt": "2025-01-10T15:18:22.589Z",
            "updatedAt": "2025-01-10T18:29:35.217Z",
            "__v": 2
        },
        {
            "_id": "678806e41e0829ee7f3fcaf3",
            "needer": {
                "_id": "677fff4330b0c145c91aade7",
                "name": "updtaed-Radwa Ahmed",
                "email": "radwaneeder@test.com",
                "phone": "1233214455"
            },
            "items": [
                {
                    "item": {
                        "_id": "678040101468440a36ec297f",
                        "name": "Pride and prejeduice",
                        "description": "A great novel talking about Darcy and Elizabeth who fell in love together but they faced lots of challenges due to the community surrounding"
                    },
                    "quantity": 1,
                    "_id": "678806e41e0829ee7f3fcaf4"
                }
            ],
            "status": "pending",
            "notifications": [
                "678806e41e0829ee7f3fcaf6"
            ],
            "createdAt": "2025-01-15T19:05:08.438Z",
            "updatedAt": "2025-01-15T19:05:08.523Z",
            "__v": 1
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get all pending requests from needers by members

This request is to handle members getting all pending requests submitted from needers that their status=Pending.

### Method: GET
>
>```
>localhost:5000/requests/?status=pending
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Query Params

|Param|value|
|---|---|
|status|pending|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
{
    "success": true,
    "requests": [
        {
            "_id": "677c3e4ecf10c3b3ac0cbba7",
            "needer": {
                "_id": "677c06d7ac2bf2a702f645b1",
                "name": "Test7 tester",
                "email": "test7@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0b6fac2bf2a702f64629",
                        "name": "Fresh Cucumber",
                        "description": "Freshly harvested cucumber from giver lands and ready to be picked up until tomorrow"
                    },
                    "quantity": 1,
                    "_id": "677c3e4ecf10c3b3ac0cbba8"
                }
            ],
            "status": "pending",
            "notifications": [
                "677c3e4ecf10c3b3ac0cbbaa"
            ],
            "createdAt": "2025-01-06T20:34:22.820Z",
            "updatedAt": "2025-01-06T20:34:22.854Z",
            "__v": 1
        },
        {
            "_id": "678806e41e0829ee7f3fcaf3",
            "needer": {
                "_id": "677fff4330b0c145c91aade7",
                "name": "updtaed-Radwa Ahmed",
                "email": "radwaneeder@test.com",
                "phone": "1233214455"
            },
            "items": [
                {
                    "item": {
                        "_id": "678040101468440a36ec297f",
                        "name": "Pride and prejeduice",
                        "description": "A great novel talking about Darcy and Elizabeth who fell in love together but they faced lots of challenges due to the community surrounding"
                    },
                    "quantity": 1,
                    "_id": "678806e41e0829ee7f3fcaf4"
                }
            ],
            "status": "pending",
            "notifications": [
                "678806e41e0829ee7f3fcaf6"
            ],
            "createdAt": "2025-01-15T19:05:08.438Z",
            "updatedAt": "2025-01-15T19:05:08.523Z",
            "__v": 1
        }
    ]
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: updating requests status to collected by members only

This request is to handle how the members can update a "pending" status request to a "collected" status request when they push a collect button on the frontend side.

### Method: PATCH
>
>```
>localhost:5000/requests/update-status/:requestId/collect
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 404

```json
{
    "success": false,
    "message": "Request not found"
}
```

### Response: 200

```json
{
    "success": true,
    "message": "Request '678809eb1e0829ee7f3fcbc2' status updated to 'collected' successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get latest 10 pending requests from needers by members only

This request is to handle how the members can get the latest 10 pending requests when they log in to their memberboard.

### Method: GET
>
>```
>localhost:5000/requests/latest
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
{
    "success": true,
    "message": "Latest 10 requests fetched successfully.",
    "requests": [
        {
            "_id": "678806e41e0829ee7f3fcaf3",
            "needer": {
                "_id": "677fff4330b0c145c91aade7",
                "name": "updtaed-Radwa Ahmed",
                "email": "radwaneeder@test.com",
                "phone": "1233214455"
            },
            "items": [
                {
                    "item": {
                        "_id": "678040101468440a36ec297f",
                        "name": "Pride and prejeduice",
                        "description": "A great novel talking about Darcy and Elizabeth who fell in love together but they faced lots of challenges due to the community surrounding"
                    },
                    "quantity": 1,
                    "_id": "678806e41e0829ee7f3fcaf4"
                }
            ],
            "status": "pending",
            "notifications": [
                "678806e41e0829ee7f3fcaf6"
            ],
            "createdAt": "2025-01-15T19:05:08.438Z",
            "updatedAt": "2025-01-15T19:05:08.523Z",
            "__v": 1
        },
        {
            "_id": "677c3e4ecf10c3b3ac0cbba7",
            "needer": {
                "_id": "677c06d7ac2bf2a702f645b1",
                "name": "Test7 tester",
                "email": "test7@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0b6fac2bf2a702f64629",
                        "name": "Fresh Cucumber",
                        "description": "Freshly harvested cucumber from giver lands and ready to be picked up until tomorrow"
                    },
                    "quantity": 1,
                    "_id": "677c3e4ecf10c3b3ac0cbba8"
                }
            ],
            "status": "pending",
            "notifications": [
                "677c3e4ecf10c3b3ac0cbbaa"
            ],
            "createdAt": "2025-01-06T20:34:22.820Z",
            "updatedAt": "2025-01-06T20:34:22.854Z",
            "__v": 1
        }
    ]
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get done requests (status updated) by members only

This request is to handle how the member can get all requests that their status is whether "collected" or "refused" to be easy fetched when the member load the archive window

### Method: GET
>
>```
>localhost:5000/requests/done
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 200

```json
{
    "success": true,
    "message": "Done requests fetched successfully.",
    "requests": [
        {
            "_id": "678809eb1e0829ee7f3fcbc2",
            "needer": {
                "_id": "677fff4330b0c145c91aade7",
                "name": "updtaed-Radwa Ahmed",
                "email": "radwaneeder@test.com",
                "phone": "1233214455"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a6cac2bf2a702f64613",
                        "name": "Smart TV",
                        "description": "smart tv with high resolution quality and embedded systems to link to the internet"
                    },
                    "quantity": 1,
                    "_id": "678809eb1e0829ee7f3fcbc3"
                }
            ],
            "status": "collected",
            "notifications": [
                "678809eb1e0829ee7f3fcbc5",
                "678a8bc57536c3a6904c3642"
            ],
            "createdAt": "2025-01-15T19:18:03.528Z",
            "updatedAt": "2025-01-17T16:56:37.622Z",
            "__v": 2
        },
        {
            "_id": "678809be1e0829ee7f3fcbac",
            "needer": {
                "_id": "6783eae6fafefc46f27f4bab",
                "name": "Adam Elgendy",
                "email": "adamneeder@test.com",
                "phone": "1113214455"
            },
            "items": [
                {
                    "item": {
                        "_id": "6783dd23b18734db0f522d19",
                        "name": "Mouse",
                        "description": "Logitech M171 Souris Sans Fil pour PC, Mac, Ordinateur portable, 2,4 GHz avec Mini-récepteur USB, Suivi Optique, Autonomie de Piles de 12 mois, Ambidextre- Noir"
                    },
                    "quantity": 3,
                    "_id": "678809be1e0829ee7f3fcbad"
                }
            ],
            "status": "refused",
            "notifications": [
                "678809be1e0829ee7f3fcbaf",
                "678a8c837536c3a6904c3652"
            ],
            "createdAt": "2025-01-15T19:17:18.361Z",
            "updatedAt": "2025-01-17T16:59:47.926Z",
            "__v": 2
        },
        {
            "_id": "67813a3ea0bafcba397f4f26",
            "needer": {
                "_id": "677fff4330b0c145c91aade7",
                "name": "updtaed-Radwa Ahmed",
                "email": "radwaneeder@test.com",
                "phone": "1233214455"
            },
            "items": [
                {
                    "item": {
                        "_id": "678040101468440a36ec297f",
                        "name": "Pride and prejeduice",
                        "description": "A great novel talking about Darcy and Elizabeth who fell in love together but they faced lots of challenges due to the community surrounding"
                    },
                    "quantity": 1,
                    "_id": "67813a3ea0bafcba397f4f27"
                }
            ],
            "status": "collected",
            "notifications": [
                "67813a3ea0bafcba397f4f29",
                "6781670f784c286a5ab85d0c"
            ],
            "createdAt": "2025-01-10T15:18:22.589Z",
            "updatedAt": "2025-01-10T18:29:35.217Z",
            "__v": 2
        },
        {
            "_id": "677d3de00433f3a833939c04",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677d3de00433f3a833939c05"
                }
            ],
            "status": "refused",
            "notifications": [
                "677d3de00433f3a833939c07",
                "677d3e2c0433f3a833939c24"
            ],
            "createdAt": "2025-01-07T14:44:48.422Z",
            "updatedAt": "2025-01-07T14:46:04.903Z",
            "__v": 2
        },
        {
            "_id": "677d3bcf2166ee83dfdb443d",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677d3bcf2166ee83dfdb443e"
                }
            ],
            "status": "collected",
            "notifications": [
                "677d3bcf2166ee83dfdb4440",
                "677d3c6d2166ee83dfdb4468"
            ],
            "createdAt": "2025-01-07T14:35:59.327Z",
            "updatedAt": "2025-01-07T14:38:37.222Z",
            "__v": 2
        },
        {
            "_id": "677ccfa1b747d122a89d2abd",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677ccfa1b747d122a89d2abe"
                }
            ],
            "status": "refused",
            "notifications": [
                "677ccfa1b747d122a89d2ac0",
                "677ccfe9b747d122a89d2ae4"
            ],
            "createdAt": "2025-01-07T06:54:25.135Z",
            "updatedAt": "2025-01-07T06:55:37.605Z",
            "__v": 2
        },
        {
            "_id": "677c3e83cf10c3b3ac0cbbcf",
            "needer": {
                "_id": "677c06d7ac2bf2a702f645b1",
                "name": "Test7 tester",
                "email": "test7@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677c3e83cf10c3b3ac0cbbd0"
                }
            ],
            "status": "collected",
            "notifications": [
                "677c3e83cf10c3b3ac0cbbd2",
                "677c4cd0867d9b0e44a11e44"
            ],
            "createdAt": "2025-01-06T20:35:15.089Z",
            "updatedAt": "2025-01-06T21:36:16.107Z",
            "__v": 2
        },
        {
            "_id": "677c3e6acf10c3b3ac0cbbbf",
            "needer": {
                "_id": "677c06d7ac2bf2a702f645b1",
                "name": "Test7 tester",
                "email": "test7@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677c3e6acf10c3b3ac0cbbc0"
                }
            ],
            "status": "refused",
            "notifications": [
                "677c3e6acf10c3b3ac0cbbc2",
                "677c66327f632ee733e0ee9e"
            ],
            "createdAt": "2025-01-06T20:34:50.159Z",
            "updatedAt": "2025-01-06T23:24:34.290Z",
            "__v": 2
        },
        {
            "_id": "677c3e20cf10c3b3ac0cbb94",
            "needer": {
                "_id": "677c06e0ac2bf2a702f645b4",
                "name": "Test8 tester",
                "email": "test8@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677c3e20cf10c3b3ac0cbb95"
                }
            ],
            "status": "refused",
            "notifications": [
                "677c3e20cf10c3b3ac0cbb97",
                "677c67017f632ee733e0eea7"
            ],
            "createdAt": "2025-01-06T20:33:36.175Z",
            "updatedAt": "2025-01-06T23:28:01.136Z",
            "__v": 2
        },
        {
            "_id": "677c0c1fac2bf2a702f64665",
            "needer": {
                "_id": "677c0697ac2bf2a702f645a4",
                "name": "Test2 tester",
                "email": "test2@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "677c0a25ac2bf2a702f6460f",
                        "name": "HP Computer",
                        "description": "HP computer gently used with long charger and battery replacemnet"
                    },
                    "quantity": 1,
                    "_id": "677c0c1fac2bf2a702f64666"
                }
            ],
            "status": "collected",
            "notifications": [
                "677c0c1fac2bf2a702f64668",
                "677cbfa071338ba601c728cb"
            ],
            "createdAt": "2025-01-06T17:00:15.470Z",
            "updatedAt": "2025-01-07T05:46:08.434Z",
            "__v": 2
        },
        {
            "_id": "677c08d6ac2bf2a702f64601",
            "needer": {
                "_id": "677c06bbac2bf2a702f645ab",
                "name": "updatedTest5 tester",
                "email": "test5@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677c08d6ac2bf2a702f64602"
                }
            ],
            "status": "refused",
            "notifications": [
                "677c08d6ac2bf2a702f64604",
                "677cbf1571338ba601c72885"
            ],
            "createdAt": "2025-01-06T16:46:14.412Z",
            "updatedAt": "2025-01-07T05:43:49.530Z",
            "__v": 2
        },
        {
            "_id": "677c082aac2bf2a702f645d0",
            "needer": {
                "_id": "677c06e0ac2bf2a702f645b4",
                "name": "Test8 tester",
                "email": "test8@test.com",
                "phone": "4357689877"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677c082aac2bf2a702f645d1"
                }
            ],
            "status": "refused",
            "notifications": [
                "677c082aac2bf2a702f645d3",
                "677c7c7c30a2ef38183eadf2"
            ],
            "createdAt": "2025-01-06T16:43:22.062Z",
            "updatedAt": "2025-01-07T00:59:40.149Z",
            "__v": 2
        },
        {
            "_id": "677b4536633eeae6f093e109",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 1,
                    "_id": "677b4536633eeae6f093e10a"
                }
            ],
            "status": "collected",
            "notifications": [
                "677b4536633eeae6f093e10c",
                "677c00570fbd1a327d9a3dc7",
                "677c01c6f23ca9bc0b180412"
            ],
            "createdAt": "2025-01-06T02:51:34.578Z",
            "updatedAt": "2025-01-06T16:16:06.672Z",
            "__v": 3
        },
        {
            "_id": "677ac91c67275e5dd894a4b7",
            "needer": {
                "_id": "677a9a5170ab9150ff598419",
                "name": "Needer Tester",
                "email": "newhello@example.com",
                "phone": "2899331599"
            },
            "items": [
                {
                    "item": {
                        "_id": "67771dc41123b485e4f045b5",
                        "name": "yellow shirt",
                        "description": "small yellow dress with colorful patterns painting on it and valid to 65 kgs."
                    },
                    "quantity": 2,
                    "_id": "677ac91c67275e5dd894a4b8"
                },
                {
                    "item": null,
                    "quantity": 1,
                    "_id": "677ac91c67275e5dd894a4b9"
                }
            ],
            "status": "collected",
            "notifications": [
                "677ac91c67275e5dd894a4bb",
                "677aca1b67275e5dd894a4d8"
            ],
            "createdAt": "2025-01-05T18:02:04.007Z",
            "updatedAt": "2025-01-05T18:06:19.739Z",
            "__v": 2
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: updating requests status to refused by members only

This request is to handle how the members can update a "pending" status request to a "refused" status request when they push a reject button on the frontend side.

### Method: PATCH
>
>```
>localhost:5000/requests/update-status/:requestId/reject
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 404

```json
{
    "success": false,
    "message": "Request not found"
}
```

### Response: 200

```json
{
    "success": true,
    "message": "Request '678809be1e0829ee7f3fcbac' status updated to 'refused' successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: deleting requests by members before updating status(in their pending status)

This request is to handle how the members can delete a request in "pending" status before updating their status, taking into consideration that after deletion the requested items should be restocked again.

### Method: DELETE
>
>```
>localhost:5000/requests/delete/:requestId
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 404

```json
{
    "success": false,
    "message": "Request not found"
}
```

### Response: 200

```json
{
    "success": true,
    "message": "Request deleted and items restocked successfully."
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: deleting requests by members from archive after updating their status

This request is to handle how the member can delete a request from archived ones that their status is already updated to whether collected or refused

### Method: DELETE
>
>```
>localhost:5000/requests/archive/delete/:requestId
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 404

```json
{
    "success": false,
    "message": "Request not found"
}
```

### Response: 200

```json
{
    "success": true,
    "message": "Request deleted from Archive successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Notifications Model handeling requests

## End-point: Get All notifications for needers when clicking on the notifications icon

This request is to handle the needers how to get their own notifications sent to them when they click on the notifications button in their needer board

### Method: GET
>
>```
>localhost:5000/notifications/
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNzEzMjU0OCwiZXhwIjoxNzM3MjE4OTQ4fQ.A_ZYg8TVasEOrNNVSk9Nu9eODN0lYpmlMB33kEZU11I|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 200

```json
{
    "success": true,
    "notifications": [
        {
            "_id": "678a8bc57536c3a6904c3642",
            "message": "Your request 678809eb1e0829ee7f3fcbc2 has been collected and is ready for pickup at the charity."
        },
        {
            "_id": "678809eb1e0829ee7f3fcbc5",
            "message": "Your request 678809eb1e0829ee7f3fcbc2 has been submitted successfully. We will notify you once it's status updated, keep an eye on notifications."
        },
        {
            "_id": "678806e41e0829ee7f3fcaf6",
            "message": "Your request 678806e41e0829ee7f3fcaf3 has been submitted successfully. We will notify you once it's status updated, keep an eye on notifications."
        },
        {
            "_id": "6781670f784c286a5ab85d0c",
            "message": "Your request 67813a3ea0bafcba397f4f26 has been collected and is ready for pickup at the charity."
        },
        {
            "_id": "67813a3ea0bafcba397f4f29",
            "message": "Your request 67813a3ea0bafcba397f4f26 has been submitted successfully. We will notify you once it's status updated, keep an eye on notifications."
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: marking all previous notifications as read once clicked on notifications icon

This request handles how the needers can update the isRead status of their notifications when they push on notifications button so all sent notifications should be marked as read "isRead: "true""

### Method: PATCH
>
>```
>localhost:5000/notifications/mark-all-as-read
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNzEzMjU0OCwiZXhwIjoxNzM3MjE4OTQ4fQ.A_ZYg8TVasEOrNNVSk9Nu9eODN0lYpmlMB33kEZU11I|

### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 200

```json
{
    "success": true,
    "message": "3 notifications marked as read."
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Handling Needers list requests

## End-point: getting all needers for members only

This request is to handle how the member can get all needers list existing on the api database.

### Method: GET
>
>```
>localhost:5000/needers/
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 200

```json
{
    "message": "List of needers",
    "needers": [
        {
            "_id": "677a9a5170ab9150ff598419",
            "name": "Needer Tester",
            "email": "newhello@example.com",
            "password": "$2a$12$zz7yY8XhscH53yH5JTspCuOhLkB6iKzWi9ZKXcToct702trlr8MUe",
            "role": "needer",
            "phone": "2899331599",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-05T14:42:25.502Z",
            "updatedAt": "2025-01-07T18:07:58.885Z",
            "__v": 0
        },
        {
            "_id": "677c0685ac2bf2a702f645a1",
            "name": "Test1 tester",
            "email": "test1@test.com",
            "password": "$2a$12$1MNF5ngHUbkXh0PV7ymHJOCJc765sKRXwG5fLUdVZHlNiaQOpkZBS",
            "role": "needer",
            "phone": "4357689877",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-06T16:36:21.678Z",
            "updatedAt": "2025-01-06T16:36:21.678Z",
            "__v": 0
        },
        {
            "_id": "677c0697ac2bf2a702f645a4",
            "name": "Test2 tester",
            "email": "test2@test.com",
            "password": "$2a$12$Q6ZV.RbvM3guc3PpkskuVOadNzOwNwZ0Rth.7Q5TJUWdVgY3sUq8.",
            "role": "needer",
            "phone": "4357689877",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-06T16:36:39.231Z",
            "updatedAt": "2025-01-06T16:36:39.231Z",
            "__v": 0
        },
        {
            "_id": "677c06b0ac2bf2a702f645a8",
            "name": "Test4 tester",
            "email": "test4@test.com",
            "password": "$2a$12$xKxDsLh/OnCXJlDIFLeYuO7rYF9/BWZUHm7.gwm.A3u7wmZ7UJGFu",
            "role": "needer",
            "phone": "4357689877",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-06T16:37:04.135Z",
            "updatedAt": "2025-01-06T16:37:04.135Z",
            "__v": 0
        },
        {
            "_id": "677c06bbac2bf2a702f645ab",
            "name": "updatedTest5 tester",
            "email": "test5@test.com",
            "password": "$2a$12$ocPPqxKdFycHGSJZt4ZFiORX26.WbrEjouUWUB5XJtww6o9Wz5hPe",
            "role": "needer",
            "phone": "4357689877",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-06T16:37:15.596Z",
            "updatedAt": "2025-01-12T02:11:35.623Z",
            "__v": 0
        },
        {
            "_id": "677c06c8ac2bf2a702f645ae",
            "name": "Test6 tester",
            "email": "test6@test.com",
            "password": "$2a$12$d2qopV3HF/8AvXhGK1yJl.JHduHB6jTmiazUqETwI5i1uDpU3Gw6K",
            "role": "needer",
            "phone": "4357689877",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-06T16:37:28.178Z",
            "updatedAt": "2025-01-06T16:37:28.178Z",
            "__v": 0
        },
        {
            "_id": "677c06d7ac2bf2a702f645b1",
            "name": "Test7 tester",
            "email": "test7@test.com",
            "password": "$2a$12$yrZv1h.j6S4MFL7T6Ljsgu2RqDKlPzPxWeC7oTuemRPm6jkpr19GK",
            "role": "needer",
            "phone": "4357689877",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-06T16:37:43.413Z",
            "updatedAt": "2025-01-06T16:37:43.413Z",
            "__v": 0
        },
        {
            "_id": "677c06e0ac2bf2a702f645b4",
            "name": "Test8 tester",
            "email": "test8@test.com",
            "password": "$2a$12$DKD7X7FYjkLg5tAGPyLKsu72ly8f5bdneCA5QO9IfwM3Tqw1EEhQi",
            "role": "needer",
            "phone": "4357689877",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-06T16:37:52.613Z",
            "updatedAt": "2025-01-06T16:37:52.613Z",
            "__v": 0
        },
        {
            "_id": "677d94fa4cd79a58245fc679",
            "name": "Mohamed Refat",
            "email": "refaat@test.com",
            "password": "$2a$12$gv0lJAa4fvhnQab.wdtym.C7tY1GQX2xxIUhtXlrsTATKPrYZRsym",
            "role": "needer",
            "phone": "2899337684",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-07T20:56:26.214Z",
            "updatedAt": "2025-01-07T20:56:26.214Z",
            "__v": 0
        },
        {
            "_id": "677fff4330b0c145c91aade7",
            "name": "updtaed-Radwa Ahmed",
            "email": "radwaneeder@test.com",
            "password": "$2a$12$ZEjuXIouhpFUrYaDYyYUmuxaocPYfI84suiaiGnVu7/CedeyTOHGC",
            "role": "needer",
            "phone": "1233214455",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-09T16:54:27.185Z",
            "updatedAt": "2025-01-12T02:27:07.128Z",
            "__v": 0
        },
        {
            "_id": "6783262a9ac506940b7ac0be",
            "name": "Memberly-Added Needer",
            "email": "needer@test.com",
            "password": "$2a$12$DmKLzItISGD.v6oQ/E4f6.4WefVeYelosG4jhRqKCiC.EsVzr9ImW",
            "role": "needer",
            "phone": "4445556666",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-12T02:17:14.331Z",
            "updatedAt": "2025-01-12T02:17:14.331Z",
            "__v": 0
        },
        {
            "_id": "6783a613b18734db0f522b3c",
            "name": "Needer3",
            "email": "needer3@test.com",
            "password": "$2a$12$yk6H5am.kgWeXt4QgmDVxudG4UsQkAKLYHQXI6RdZM4VuzWS..9qC",
            "role": "needer",
            "phone": "1234444444",
            "photo": "data:image/png;base64,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",
            "createdAt": "2025-01-12T11:22:59.521Z",
            "updatedAt": "2025-01-13T01:49:44.930Z",
            "__v": 0
        },
        {
            "_id": "6783eae6fafefc46f27f4bab",
            "name": "Adam Elgendy",
            "email": "adamneeder@test.com",
            "password": "$2a$12$SUIkRzPFFOC/7s9ict1czeoin5KKalljmJ0Smg3M7avGIcKre70SK",
            "role": "needer",
            "phone": "1113214455",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-12T16:16:38.900Z",
            "updatedAt": "2025-01-12T16:16:38.900Z",
            "__v": 0
        },
        {
            "_id": "67842f9db18734db0f522fd8",
            "name": "Needer1",
            "email": "needer1@test.com",
            "password": "$2a$12$touxqhfNj7qMA4RoI2fxG.vHeRERGhcIU6ASOpYNGnFUWV.6yvKIe",
            "role": "needer",
            "phone": "1234444444",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-12T21:09:49.821Z",
            "updatedAt": "2025-01-12T21:09:49.821Z",
            "__v": 0
        },
        {
            "_id": "6784302ab18734db0f522fe5",
            "name": "Needer2",
            "email": "needer2@test.com",
            "password": "$2a$12$K/62FslbBgfYr5lz02EFsOn513rGgKbbkJJtzeZxQhoNZWEp0KYC2",
            "role": "needer",
            "phone": "1234444444",
            "photo": "https://via.placeholder.com/150x150.png",
            "createdAt": "2025-01-12T21:12:10.995Z",
            "updatedAt": "2025-01-12T21:12:10.995Z",
            "__v": 0
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getting specific needer by id and view his data

This request is to handle how the member can view certain needer by his ID and gets his own data

### Method: GET
>
>```
>localhost:5000/needers/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 200

```json
{
    "_id": "677c06bbac2bf2a702f645ab",
    "name": "updatedTest5 tester",
    "email": "test5@test.com",
    "password": "$2a$12$ocPPqxKdFycHGSJZt4ZFiORX26.WbrEjouUWUB5XJtww6o9Wz5hPe",
    "role": "needer",
    "phone": "4357689877",
    "photo": "https://via.placeholder.com/150x150.png",
    "createdAt": "2025-01-06T16:37:15.596Z",
    "updatedAt": "2025-01-12T02:11:35.623Z",
    "__v": 0
}
```

### Response: 500

```json
{
    "error": "Error fetching needer details"
}
```

### Response: 404

```json
{
    "error": "Needer not found"
}
```

### Response: 200

```json
{
    "_id": "677c06bbac2bf2a702f645ab",
    "name": "updatedTest5 tester",
    "email": "test5@test.com",
    "password": "$2a$12$ocPPqxKdFycHGSJZt4ZFiORX26.WbrEjouUWUB5XJtww6o9Wz5hPe",
    "role": "needer",
    "phone": "4357689877",
    "photo": "https://via.placeholder.com/150x150.png",
    "createdAt": "2025-01-06T16:37:15.596Z",
    "updatedAt": "2025-01-12T02:11:35.623Z",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: adding needer for members only

This request is to handle how the member can add new needers into needers list from his side in case some people are not familiar with technology or something like that

### Method: POST
>
>```
>localhost:5000/needers/
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Body (**raw**)

```json
{
    "name": "Last-added Needer",
    "email": "lastneeder@test.com",
    "phone": "4445555555",
    "password": "newPassword123"
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 400

```json
{
    "error": "Email already exists"
}
```

### Response: 500

```json
{
    "error": "Internal Server Error"
}
```

### Response: 201

```json
{
    "message": "Needer added successfully",
    "newNeeder": {
        "name": "Last-added Needer",
        "email": "lastneeder@test.com",
        "password": "$2a$12$g0nTCL0YFiOoUyRl0i6AnehJUWfIumRIQOpjDZwxX0qiYmXd8lDKS",
        "role": "needer",
        "phone": "4445555555",
        "photo": "https://via.placeholder.com/150x150.png",
        "_id": "678aa748e1b81ff820a73e62",
        "createdAt": "2025-01-17T18:54:00.985Z",
        "updatedAt": "2025-01-17T18:54:00.985Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: updating needer by id for members only

This request is to handle how the member can update needer data by his ID from his side in case some people are not familiar with technology or something like that

### Method: PUT
>
>```
>localhost:5000/needers/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Body (**raw**)

```json
{
    "name": "updatedTest5 tester"
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 404

```json
{
    "error": "Needer not found"
}
```

### Response: 500

```json
{
    "error": "Internal Server Error"
}
```

### Response: 200

```json
{
    "message": "Needer updated successfully",
    "updatedNeeder": {
        "_id": "677c06bbac2bf2a702f645ab",
        "name": "updatedTest5 tester",
        "email": "test5@test.com",
        "password": "$2a$12$ocPPqxKdFycHGSJZt4ZFiORX26.WbrEjouUWUB5XJtww6o9Wz5hPe",
        "role": "needer",
        "phone": "4357689877",
        "photo": "https://via.placeholder.com/150x150.png",
        "createdAt": "2025-01-06T16:37:15.596Z",
        "updatedAt": "2025-01-17T18:57:14.512Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete needer by id for members only

This request is to handle how the member can delete certain needers from the database of needers by the needer ID through his member board.

### Method: DELETE
>
>```
>localhost:5000/needers/:id
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 404

```json
{
    "error": "Needer not found"
}
```

### Response: 500

```json
{
    "error": "Error deleting needer"
}
```

### Response: 200

```json
{
    "message": "Needer deleted successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: ProfileSettings handling requests

## End-point: getting user details for user settings for needers

This request is to handle how the users can get their own data already stored for their ID

### Method: GET
>
>```
>localhost:5000/settings/setting
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNzEzMjU0OCwiZXhwIjoxNzM3MjE4OTQ4fQ.A_ZYg8TVasEOrNNVSk9Nu9eODN0lYpmlMB33kEZU11I|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
{
    "_id": "677fff4330b0c145c91aade7",
    "name": "updtaed-Radwa Ahmed",
    "email": "radwaneeder@test.com",
    "role": "needer",
    "phone": "1233214455",
    "photo": "https://via.placeholder.com/150x150.png",
    "createdAt": "2025-01-09T16:54:27.185Z",
    "updatedAt": "2025-01-12T02:27:07.128Z",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: updating user data for needers

This request is to handle how the users can update their data from the profile settings in their board

### Method: PUT
>
>```
>localhost:5000/settings/setting
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNzEzMjU0OCwiZXhwIjoxNzM3MjE4OTQ4fQ.A_ZYg8TVasEOrNNVSk9Nu9eODN0lYpmlMB33kEZU11I|

### Body (**raw**)

```json
{
    "name": "updtaed-Radwa Ahmed"
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
{
    "message": "Settings updated successfully",
    "user": {
        "_id": "677fff4330b0c145c91aade7",
        "name": "updtaed-Radwa Ahmed",
        "email": "radwaneeder@test.com",
        "password": "$2a$12$ZEjuXIouhpFUrYaDYyYUmuxaocPYfI84suiaiGnVu7/CedeyTOHGC",
        "role": "needer",
        "phone": "1233214455",
        "photo": "https://via.placeholder.com/150x150.png",
        "createdAt": "2025-01-09T16:54:27.185Z",
        "updatedAt": "2025-01-17T19:11:04.659Z",
        "__v": 0
    }
}
```

### Response: 500

```json
{
    "error": "Internal Server Error"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getting user details for user settings for members

This request is to handle how the users can get their own data already stored for their ID

### Method: GET
>
>```
>localhost:5000/settings/setting
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
{
    "_id": "677ffed830b0c145c91aade4",
    "name": "updtaed-Radwa Tawfik",
    "email": "radwa@test.com",
    "role": "member",
    "phone": "2233344555",
    "photo": "https://via.placeholder.com/150x150.png",
    "createdAt": "2025-01-09T16:52:40.659Z",
    "updatedAt": "2025-01-12T02:27:40.436Z",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: updating user data for members

This request is to handle how the users can update their data from the profile settings in their board

### Method: PUT
>
>```
>localhost:5000/settings/setting
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Body (**raw**)

```json
{
    "name": "updtaed-Radwa Tawfik"
}
```

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 500

```json
{
    "error": "Internal Server Error"
}
```

### Response: 200

```json
{
    "message": "Settings updated successfully",
    "user": {
        "_id": "677ffed830b0c145c91aade4",
        "name": "updtaed-Radwa Tawfik",
        "email": "radwa@test.com",
        "password": "$2a$12$wxXzHH5lTWmJb1HAzlYxuOnyuwOvnBQDoj4LXZR8Q08SvXP62qbG2",
        "role": "member",
        "phone": "2233344555",
        "photo": "https://via.placeholder.com/150x150.png",
        "createdAt": "2025-01-09T16:52:40.659Z",
        "updatedAt": "2025-01-17T19:14:54.558Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Users data handling requests

## End-point: getting user data by id to fetch user data in Frontend integration for needers

This request is to handle how to fetch needer data from their token needed in the frontend integration and how to link user data with the needer interface side.

### Method: GET
>
>```
>localhost:5000/user/
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZjQzMzBiMGMxNDVjOTFhYWRlNyIsInJvbGUiOiJuZWVkZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBBaG1lZCIsImlhdCI6MTczNzEzMjU0OCwiZXhwIjoxNzM3MjE4OTQ4fQ.A_ZYg8TVasEOrNNVSk9Nu9eODN0lYpmlMB33kEZU11I|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
{
    "_id": "677fff4330b0c145c91aade7",
    "name": "updtaed-Radwa Ahmed",
    "email": "radwaneeder@test.com",
    "role": "needer",
    "phone": "1233214455",
    "photo": "https://via.placeholder.com/150x150.png",
    "createdAt": "2025-01-09T16:54:27.185Z",
    "updatedAt": "2025-01-17T19:11:57.446Z",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getting user data by id to fetch user data in Frontend integration for members

This request is to handle how to fetch member data from their token needed in the frontend integration and how to link user data with the member interface side.

### Method: GET
>
>```
>localhost:5000/user/
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 200

```json
{
    "_id": "677ffed830b0c145c91aade4",
    "name": "updtaed-Radwa Tawfik",
    "email": "radwa@test.com",
    "role": "member",
    "phone": "2233344555",
    "photo": "https://via.placeholder.com/150x150.png",
    "createdAt": "2025-01-09T16:52:40.659Z",
    "updatedAt": "2025-01-17T19:14:54.558Z",
    "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Statistics Model Handeling requests

## End-point: getting requests statistics filterd by timezones for members only

This request is to handle how the member can get statistics of all requests submitted, collected, and refused through specific timezone, weekly, monthly or yearly

### Method: GET
>
>```
>localhost:5000/statistics/
>```
>
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2ZmZWQ4MzBiMGMxNDVjOTFhYWRlNCIsInJvbGUiOiJtZW1iZXIiLCJuYW1lIjoidXBkdGFlZC1SYWR3YSBUYXdmaWsiLCJpYXQiOjE3MzcxMzI1MTUsImV4cCI6MTczNzIxODkxNX0.4ZLvuRHbk8fLWfMC7MlTFakxSxNnRGy2u_pkh82mTvw|

### Response: 401

```json
{
    "error": "Invalid or Expired token"
}
```

### Response: 403

```json
{
    "error": "Access denied. Unauthorized role"
}
```

### Response: 200

```json
{
    "totalRequests": 2,
    "collectedRequests": 1,
    "refusedRequests": 0,
    "pendingRequests": 1
}
```

### Response: 200

```json
{
    "totalRequests": 14,
    "collectedRequests": 7,
    "refusedRequests": 6,
    "pendingRequests": 1
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
