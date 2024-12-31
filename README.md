# Job Listing Backend 

This backend provides RESTful APIs to manage jobs and interact with Unsplash, enabling users to create jobs for retrieving images, with statuses set to "resolved" on success or "pending" otherwise.


## Requirements

- Node.js v14 or higher
- npm 

## Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:abdulrehman1020/job-listing-backend.git
cd job-listing-backend
```

### 2. Create Environment File

Create a .env file in the project's root directory following the format specified in env.sample.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Project

```bash
npm run dev
```

## API Endpoints

### POST `/api/job`

- **Description**: Creates a new job to retrieve a random image from Unsplash's food category.

### GET `/api/job`

- **Description**: Retrieves a list of all jobs with their id,status and image.

### GET `/api/job/:id`

- **Description**: Retrieves the status and image of a job by its ID.

