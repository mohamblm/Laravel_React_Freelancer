# How to Clone and Run the Laravel & React Freelancer Project

This guide will walk you through the steps to clone and set up the Laravel & React Freelancer project from the GitHub repository.

### Repository Information
**Repository URL:** [Laravel_React_Freelancer](https://github.com/mohamblm/Laravel_React_Freelancer)

---

## Step 1: Clone the Repository
1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project:
   ```bash
   cd path/to/your/directory
   ```
3. Clone the repository using the following command:
   ```bash
   git clone https://github.com/mohamblm/Laravel_React_Freelancer.git
   ```
4. Move into the cloned project directory:
   ```bash
   cd Laravel_React_Freelancer
   ```

---

## Step 2: Set Up the Backend (Laravel)

### Install Dependencies
1. Ensure you have [Composer](https://getcomposer.org/) installed on your system.
2. Run the following command to install Laravel dependencies:
   ```bash
   composer install
   ```

### Configure the Environment
1. Copy the `.env.example` file to create a `.env` file:
   ```bash
   cp .env.example .env
   ```
2. Open the `.env` file in a text editor and configure the following settings:
   - **Database Connection:** Update the `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` fields to match your local database setup.
   
### Generate the Application Key
Run the following command to generate the application key:
   ```bash
   php artisan key:generate
   ```

### Migrate the Database
1. Ensure your database server is running.
2. Run the migrations to create the necessary tables:
   ```bash
   php artisan migrate --seed
   ```
   This command will also seed the database with initial data (if applicable).

### Serve the Laravel Backend
Run the following command to start the Laravel development server:
   ```bash
   php artisan serve
   ```
The backend should now be running at [http://localhost:8000](http://localhost:8000).

---

## Step 3: Set Up the Frontend (React)

### Install Dependencies
1. Ensure you have [Node.js](https://nodejs.org/) and npm (or Yarn) installed on your system.
2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Start the React Development Server
Run the following command to start the React development server:
   ```bash
   npm start
   ```
The frontend should now be running at [http://localhost:3000](http://localhost:3000).

---

## Step 4: Access the Application
1. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.
2. Ensure the backend is running at [http://localhost:8000](http://localhost:8000) for API requests to work correctly.

---

## Troubleshooting
- **Database Errors:** Ensure your database credentials in the `.env` file are correct and the database server is running.
- **Dependency Issues:** Ensure you have the correct versions of Composer, Node.js, and npm installed.
- **Cross-Origin Errors:** Configure CORS settings in the Laravel backend if you encounter issues with API requests.

---


