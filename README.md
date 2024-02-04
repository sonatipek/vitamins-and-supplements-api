[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)

# Vitamins and Supplements API
Vitamins and Supplements API is a RESTful service created to provide access to basic information and recommendations about vitamins and dietary supplements. The API fetches vitamin/supplement information such as dosage, benefits, recommendations and score through various endpoints. It can create, update and delete supplements/vitamins.

I used this API in my "vitamins&supplements" infographic frontend project to support athletes' training programs, help sedentary individuals find the right supplements for them, and provide information to anyone who wants to make informed decisions about nutrition. [Related Project](/README.md#related-project)

_Does not contain recommendations for use, I recommend that you consult your doctor in any case_

## Related Project

You can access the "vitamins&supplements" infographic frontend project I developed using this API from the link below: <br>[Vitamins & Supplements](https://github.com/sonatipek/)

## Tech Stack

![Tech](https://skillicons.dev/icons?i=nodejs,express,mongo)

## API Reference / Endpoints

You can view the related endpoints via the following link: [API Reference](/API_REFERENCE.md)

## Run Locally

1. Clone the project
   ```bash
   git clone https://github.com/sonatipek/vitamins-and-supplements-api.git
   ```

2. Go to the project directory
   ```bash
   cd vitamins-and-supplements-api
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the server
   ```bash
   npm run dev
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_CONNECTION`

`JWT_SECRET_KEY`

`JWT_EXPIRE`

## Feedback

Please don't hesitate to give me feedback on your reviews. I really care about this feedback and find it very valuable to improve myself.<br>
You can send your feedback through the communication channels in my profile or sonatsayginipek@gmail.com.

###### Source
The information in the API's database is excerpted from the video below.
https://www.youtube.com/watch?v=z3LFfY3AhVQ