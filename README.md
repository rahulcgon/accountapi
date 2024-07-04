# Simple Backend API

## Overview

The purpose of this task is to create a simple backend API with the following features:
- CRUD endpoints for the database schema "Account".
- User login endpoint with email and password authentication.
- List of accounts endpoint with result limitation through the request.

## Instructions

1. **Database Connection**
   - Connect the API to a local database, preferably SQLite or PostgreSQL.

2. **Frameworks**
   - You can use any of the following frameworks:
     - NodeJS
     - ExpressJS

3. **Encryption**
   - Add any encryption process to ensure the password field is encrypted in the database.

4. **Authentication**
   - Implement authentication through Firebase or OAuth.

5. **Validation**
   - Validate all necessary fields appropriately.

6. **Authorization**
   - Implement proper authorization mechanisms.

7. **Optional**
   - Send informational emails to a specific account every time an account is created.

## Database Schema: Account

| Field Name     | Description          | Size         |
|----------------|----------------------|--------------|
| first_name     | User first name      | 100          |
| last_name      | User last name       | 100          |
| email          | User account email   | 100          |
| phone          | User phone number    | 16           |
| password       | Account password     | 50           |
| birthday       | User birth date      | yyyy-mm-dd   |
| created_at     | Account creation date| yyyy-mm-dd hh:mm:ss |
| last_modified  | Last account update  | yyyy-mm-dd hh:mm:ss |

## Endpoints

1. **CRUD Endpoints for Account**
   - Create Account: `POST /accounts`
   - Read Account: `GET /accounts/:id`
   - Update Account: `PUT /accounts/:id`
   - Delete Account: `DELETE /accounts/:id`

2. **User Login Endpoint**
   - `POST /login` with email and password authentication.

3. **List of Accounts Endpoint**
   - `GET /accounts` with result limitation through the request.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
