# AlgoCode Problem Service

## Description

The **AlgoCode Problem Service** is part of a larger microservices-based platform for code compilation and execution. This service manages the CRUD (Create, Read, Update, Delete) operations for programming problems, including the creation and management of problem descriptions, test cases, inputs/outputs, and code stubs for different languages.

It is designed to provide a robust and flexible API for interacting with problems, making it suitable for dynamic problem administration in platforms like Leetcode or Codeforces.

## Table of Contents

- [API Endpoints](#api-endpoints)
  - [Ping Check](#ping-check)
  - [Ping Check Problem Controller](#ping-check-problem-controller)
  - [Create Problem](#create-problem)
  - [Get All Problems](#get-all-problems)
  - [Get Problem by ID](#get-problem-by-id)
  - [Delete Problem by ID](#delete-problem-by-id)
  - [Update Problem by ID](#update-problem-by-id)
- [Installation](#installation)
- [Usage](#usage)
  - [Testing with Postman](#testing-with-postman)
  - [Common Commands](#common-commands)
- [Contributing](#contributing)
- [License](#license)

---

## API Endpoints

### 1. Ping Check
- **Method**: `GET`
- **Description**: A simple endpoint to check if the problem service is running.
- **Endpoint**: `/ping`
- **Response**: A basic "pong" response indicating the service is up and running.

### 2. Ping Check Problem Controller
- **Method**: `GET`
- **Description**: Health check for the problem controller, ensuring the system is connected and functional.
- **Endpoint**: `/api/v1/problems/ping`
- **Response**: "pong"

### 3. Create Problem
- **Method**: `POST`
- **Description**: Create a new programming problem, including its title, description, difficulty, editorial, test cases, and language-specific code stubs.
- **Request Body**: 
    ```json
    {
      "title": "Sample Problem 1",
      "description": "\n### Add Two Numbers\n\n## Given two numbers, add them.",
      "difficulty": "easy",
      "testCases": [
        {
          "input": "3\n4",
          "output": "7"
        },
        {
          "input": "4\n5",
          "output": "9"
        }
      ],
      "editorial": "Some editorial explaining the approach",
      "codeStubs": [
        {
          "language": "JAVA",
          "startSnippet": "// Driver Code Starts\n// Initial Template for Java\nimport java.io.*;\nimport java.util.*;\nclass GFG {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        int t = Integer.parseInt(br.readLine().trim());\n        while (t-- > 0) {\n            int a = Integer.parseInt(br.readLine().trim());\n            int b = Integer.parseInt(br.readLine().trim());\n            Solution sln = new Solution();\n            System.out.println(sln.addNumbers(a, b));\n        }\n    }\n}\n// } Driver Code Ends",
          "userSnippet": "class Solution {\n    int addNumbers(int a, int b) {\n        // Your Code Here\n        return a + b;\n    }\n}",
          "endSnippet": ""
        }
      ]
    }
    ```
- **Endpoint**: `/api/v1/problems`
- **Response**: 
    - Status: `201 Created`
    - Response body will include the problem data, including a unique problem ID.

### 4. Get All Problems
- **Method**: `GET`
- **Description**: Retrieve all problems from the database.
- **Endpoint**: `/api/v1/problems`
- **Response**: A list of all problems in the database, including their titles, descriptions, test cases, difficulty levels, and code stubs.

### 5. Get Problem by ID
- **Method**: `GET`
- **Description**: Fetch a single problem by its unique ID.
- **Endpoint**: `/api/v1/problems/{id}`
  - Replace `{id}` with the actual problem ID.
- **Response**: The problem data, including title, description, test cases, editorial, and code stubs.

### 6. Delete Problem by ID
- **Method**: `DELETE`
- **Description**: Delete a problem from the database by its unique ID.
- **Endpoint**: `/api/v1/problems/{id}`
  - Replace `{id}` with the actual problem ID.
- **Response**: 
    - Status: `200 OK`
    - The problem is deleted successfully.

### 7. Update Problem by ID
- **Method**: `PUT`
- **Description**: Update the details of an existing problem by its unique ID. The request body should contain the updated problem data.
- **Endpoint**: `/api/v1/problems/{id}`
  - Replace `{id}` with the actual problem ID.
- **Request Body**:
    ```json
    {
      "title": "Updated Problem Title",
      "description": "\n### Updated Description\n",
      "difficulty": "medium",
      "testCases": [
        {
          "input": "4\n1 2 3 4\n5",
          "output": "1 2"
        }
      ],
      "editorial": "Updated editorial",
      "codeStubs": [
        {
          "language": "JAVA",
          "userSnippet": "class Solution {\n    int addNumbers(int a, int b) {\n        return a + b;\n    }\n}"
        }
      ]
    }
    ```
- **Response**: 
    - Status: `200 OK`
    - The problem is updated successfully.

---

## Installation

### Prerequisites

Ensure that you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (for storing problem data)
- **Postman** (optional, to test API endpoints easily)