# Educational Platform API

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/soni-naveen/edu-platform.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:

Create a .env file in the root directory.

Add the following variables:

```
PORT=5000
DATABASE_URL=<your mongodb url>
```

4. Create a `.gitignore` file and paste the following:

```gitignore
node_modules
.env
```

5. Run the Project

Start the server:

```
node index.js
```

### Example API Endpoints

#### Course Endpoints

● POST **/api/courses** – Create a course

● GET **/api/courses** – Retrieve all courses

● GET **api/courses/:id** – Retrieve a specific course

● PUT **/api/courses/:id** – Update a course

● DELETE **/api/courses/:id** – Delete a course

#### Quiz Endpoints

● POST **/api/courses/:courseId/quizzes** – Create a quiz for a course

● GET **/api/courses/:courseId/quizzes** – Retrieve all quizzes for a course

● GET **/api/quizzes/:id** – Retrieve a specific quiz

● PUT **/api/quizzes/:id** – Update a quiz

● DELETE **/api/quizzes/:id** – Delete a quiz
