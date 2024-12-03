
# Cycle Rental System 🚴‍♂️

A modern and efficient platform for renting bicycles, enabling customers to browse, book, and manage rentals while allowing administrators to oversee the system seamlessly.

---

## Table of Contents 📚

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Team](#team)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## About the Project 🎯

The **Cycle Rental System** simplifies bicycle rentals for customers and provides a comprehensive management system for administrators. Customers can sign up, search for cycles, book rentals, and check booking statuses, while administrators manage cycles and handle booking requests.

---

## Features 🌟

### For Customers:
- **Sign Up and Login**: Create an account or log in to access the system.
- **Search for Cycles**: Search for specific bicycles based on preferences.
- **Book a Cycle**: Reserve a cycle by sending a booking request to the admin.
- **Booking Status**: Check the approval status of your booking request.
- **User Dashboard**: Access a personalized dashboard to manage bookings and view information.

### For Admins:
- **Post a Cycle**: Add new bicycles to the system for customers to view and book.
- **Approve/Reject Requests**: Review and approve or reject customer booking requests.
- **Update Bicycle Details**: Edit bicycle details such as availability, specifications, or pricing.
- **Admin Dashboard**: Manage bicycles, view bookings, and handle customer requests.

---

## Technologies Used 🛠️

- **Frontend**: Angular
- **Backend**: Spring Boot
- **Database**: MySQL
- **Additional Tools**:
  - JWT for secure authentication and authorization
  - RESTful APIs for efficient communication between frontend and backend
  - Bootstrap or Material UI for styling (if applicable)

---

## Installation ⚙️

### Prerequisites:
- **Node.js** (for Angular)
- **Java Development Kit (JDK)** (for Spring Boot)
- **MySQL** (for database)

### Steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/V3nugopalKP/cycle-rental-system.git
   cd cycle-rental-system
complete this

2. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```
   - Start the Angular development server:
     ```bash
     ng serve
     ```
   - The frontend will be available at `http://localhost:4200`.

3. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Update the `application.properties` file with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```
   - Build and run the Spring Boot application:
     ```bash
     mvn spring-boot:run
     ```
   - The backend will run at `http://localhost:8080`.

4. **Database Setup**:
   - Create a MySQL database:
     ```sql
     CREATE DATABASE cycle_rental_db;
     ```
   - Import the database schema provided in the `database.sql` file:
     ```bash
     mysql -u your_username -p cycle_rental_db < database.sql
     ```

5. **Connecting Frontend and Backend**:
   - Update the Angular environment configuration file (`src/environments/environment.ts`) to point to the backend API:
     ```typescript
     export const environment = {
       production: false,
       apiUrl: 'http://localhost:8080/api'
     };
     ```

6. **Start the System**:
   - Ensure both the frontend and backend servers are running.
   - Open a browser and navigate to `http://localhost:4200` to access the application.

---

## Usage 🚀

### Customer Workflow:
1. Register and log in to your account.
2. Browse or search for available bicycles.
3. Book a bicycle and send a booking request to the admin.
4. Check your booking status on the dashboard.

### Admin Workflow:
1. Log in to the admin panel.
2. Post new bicycles to the system.
3. Review and approve or reject customer booking requests.
4. Update bicycle details, such as availability or pricing.

---
## Team 👨‍💻👩‍💻

- **Venugopal K P**  
  - **Role**: Backend Developer  
  - [GitHub Profile](https://github.com/V3nugopalKP)  

- **Sreeram Nair**  
  - **Role**: Backend Developer  
  - [GitHub Profile](https://github.com/person2-github)  

- **Jaideep M**  
  - **Role**: Frontend Developer 
  - [GitHub Profile](https://github.com/person3-github)  

- **Hari Govind Rajesh**  
  - **Role**: Frontend developer  
  - [GitHub Profile](https://github.com/person4-github)  

## Contributing 🤝

We welcome contributions to improve this project! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
