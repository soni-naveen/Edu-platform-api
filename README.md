# Educational Platform API

### Tech Stack : ExpressJs , MongoDB

#### API Documentation : https://documenter.getpostman.com/view/34287184/2sAYQiC8dm

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/soni-naveen/Edu-platform-api
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:

   ```
   PORT=4000
   DATABASE_URL= mongodb://localhost:27017/<database>
   ```

4. Run the Project

   Start the server:
   
   ```
   node index.js [or nodemon index.js]
   ```

## Example API Endpoints

### Course Endpoints

● POST **/api/courses** – Create a course

● GET **/api/courses** – Retrieve all courses

● GET **api/courses/:id** – Retrieve a specific course

● PUT **/api/courses/:id** – Update a course

● DELETE **/api/courses/:id** – Delete a course

### Quiz Endpoints

● POST **/api/courses/:courseId/quizzes** – Create a quiz for a course

● GET **/api/courses/:courseId/quizzes** – Retrieve all quizzes for a course

● GET **/api/quizzes/:id** – Retrieve a specific quiz

● PUT **/api/quizzes/:id** – Update a quiz

● DELETE **/api/quizzes/:id** – Delete a quiz
