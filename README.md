# Flow.ai-Personal-Expense-Tracker-Assignment
Personal Expense Tracker
Overview
This project is a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

Tools and Technologies
Backend Framework: Node.js with Express.js
Database: SQLite (for simplicity)
Requirements
Database Setup

SQLite: The database has the following tables:
transactions: id, type (income or expense), category, amount, date, description
categories: id, name, type (income or expense)
API Endpoints

POST /transactions: Adds a new transaction (income or expense).
GET /transactions: Retrieves all transactions.
GET /transactions/:id: Retrieves a transaction by ID.
PUT /transactions/:id: Updates a transaction by ID.
DELETE /transactions/:id: Deletes a transaction by ID.
GET /summary: Retrieves a summary of transactions, such as total income, total expenses, and balance. Optionally, this can be filtered by date range or category.
Functionality

Implement route handlers for each endpoint.
Provide error handling to manage common issues like invalid transaction IDs, invalid inputs, etc.
Optionally add user authentication to protect the routes and associate transactions with specific users.
Setup Instructions
Clone the Repository
git clone https://github.com/salmasultana-shaik/Flow.ai-Personal-Expense-Tracker-Assignment.git
cd personal-expense-tracker

Install Dependencies
bash
npm install

Run the Server
bash
node server.js

This server will start on port 3000. You can access the API at http://localhost:3000.

API Documentation

Transactions

POST /transactions

Description: Add a new transaction.

Request Body:json

{
  "type": "income",
  "category": 1,
  "amount": 1000,
  "date": "2023-01-01",
  "description": "Salary"
}

Response:json

{
  "id": 1
}

Expected Response: 201 created with a JSON object of the transaction

GET /transactions

Description: Retrieve all transactions.

Response:json
[
  {
    "id": 1,
    "type": "income",
    "category": 1,
    "amount": 1000,
    "date": "2023-01-01",
    "description": "Salary"
  }
]
Expected Response: 200 OK with a JSON object of the transaction

GET /transactions/:id

Description: Retrieve a transaction by ID.

Response:json

{
  "id": 1,
  "type": "income",
  "category": 1,
  "amount": 1000,
  "date": "2023-01-01",
  "description": "Salary"
}

Expected Response: 200 OK with a JSON object of the transaction with ID 1.

PUT /transactions/:id

Description: Update a transaction by ID.

Request Body:json

{
  "type": "expense",
  "category": 1,
  "amount": 500,
  "date": "2023-01-02",
  "description": "Groceries"
}
Response: 204 No Content

DELETE /transactions/:id

Description: Delete a transaction by ID.

Response: 204 No Content

Postman Screenshots

POST /transactions:"C:\Users\User\OneDrive\Pictures\Screenshots\post_transaction.png"

GET /transactions

Optional Enhancements

Implement basic user authentication and link transactions to specific users.

Add pagination to the GET /transactions endpoint to handle large volumes of data.

Create an endpoint for generating reports, such as monthly spending by category.

Author
Shaik Salma Sultana

License
This project is licensed under the MIT License.
