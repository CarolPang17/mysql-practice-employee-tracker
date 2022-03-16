# mysql-practice-employee-tracker

github : https://github.com/CarolPang17/mysql-practice-employee-tracker <br />
to See How to use,
please visit : https://drive.google.com/file/d/1MCwn3ficQUSwMoDS7sJ044c01DIJvcCG/view <br />

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Database](#Database)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

# User Story

AS A business owner <br />
I WANT to be able to view and manage the departments, roles, and employees in my company <br />
SO THAT I can organize and plan my business <br />

## Database

The database contains three tables:

- **department**:

  - **id** - INT PRIMARY KEY
  - **name** - VARCHAR(30) to hold department name

- **role**:

  - **id** - INT PRIMARY KEY
  - **title** - VARCHAR(30) to hold role title
  - **salary** - DECIMAL to hold role salary
  - **department_id** - INT to hold reference to department role belongs to

- **employee**:

  - **id** - INT PRIMARY KEY
  - **first_name** - VARCHAR(30) to hold employee first name
  - **last_name** - VARCHAR(30) to hold employee last name
  - **role_id** - INT to hold reference to role employee has
  - **manager_id** - INT to hold reference to another employee that manager of the current employee

## Installation

`npm init`

`npm install inquirer`

`npm install mysql2`

`npm install console-table`

## Usage

Run the below command at the root of your project:<br />

`npm start`

then start answering the prompt questions<br />


## Contributing
: [CarolPang](https://github.com/CarolPang17)<br />

## Questions
✉️ Contact me with any questions: [GitHub](https://github.com/CarolPang17)<br />