# 1/Main Function : 
We would like to get information/data (First name, Last name, Email, Description) from a job candidate. 
Your task is to create a web app frontend* (Example 1), where the candidate fills the form and clicks on the submit button then the data is sent over a REST API (POST Request) to the backend
<br>
frontend : you can use React or Vanilla JS (HTML, CSS, JS without framework) or Angular.
choseen framework: React
<br>
backend: highly recommended to use JavaScript (Node.js), But you can use other Languages such as Python (flask, Django, FastAPI) or Java (Spring), PHP.
cheosen language: Node.js

## 2/Bonus question: add CV upload [file: PDF or DOCX] to the form.
The backend** exposes the resource “candidate” through a specific route as follows: http://localhost:3000/candidate
When you receive the data in this resource, you need to store it as a JSON File (Example 2).
<br>
Example 2:
{
    “firstName”: ”Hamid”,
    “lastName”: ”Zahir”,
    “Email”: ”hamid.zahir@gmail.com”, “Description”: ”frontend developer.” 
}

## 3/Bonus question: store the CV as file in the backend.
## 4/ Expose route "/candidate" to get all candidates.

## Run the project:
### run front end:
> cd frontend
> npm install
> npm start
### run back end:
> cd backend
> npm install
> npm start
### run script : 
> bash script.sh
## Endpoints :
>   **localhost:3000/**
>   **localhost:3000/candidate**


