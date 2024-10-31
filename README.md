![Alt text](./src/assets/logoComplete.png)

# AI Companion

AI Companion is a comprehensive service designed to be your one-stop shop for all AI needs. This service currently offers capabilities such as resume generation and audio transcription from uploaded videos. With continuous updates, AI Companion aims to become a vast library of AI tools and functionalities.

## Features

- **Resume Generation**: Automatically generate professional resumes by filling in a form asking for all of their professional information.
- **Audio Transcription**: Convert audio from uploaded videos to text accurately and efficiently.
- **Cover Letter Creation**: Automatically generate professional cover letters based on a job description and resume.
- **Image Creation**: Create images using OpenAI's Dall-E-3 model. Users input an image description to generate an image.
- **Generate SQL Queries**: Automatically generate SQL Queries based on listing schemes or table columns and table names, and entering the description of what you are trying access in the database. -**Convert Text to Speach**: Convert text to speech. -**Generate Music**: Generate music tracks based on given parameters or styles. -**Generate an Individualized Travel Itinerary**: Enter where you want to travel and get an individualized recommended travel itinerary.

More features are planned for future updates. We welcome any suggestions for additional functionalities that could enhance the service.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js - version 22.2.0
- npm
- MongoDB - latest version https://www.mongodb.com/docs/manual/installation/
- Docker - latest version https://docs.docker.com/engine/install/

You will need to get an OPEN AI API Key:

- Follow step 2 in the Quick Start guide of the OpenAI Api Docs: https://platform.openai.com/docs/quickstart

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/ai-companion-next.git
   cd AIcompanion
   ```

2. Install the dependencies for the client side:
   ```sh
   npm install
   ```

The below might not be needed for the NextJS version

<!-- 3. Install the dependencies for the server side:
    ```sh
    cd server
    npm install
    ``` -->

4. Install FFmpeg:

   ```sh
   npm install fluent-ffmpeg
   ```

5. Update the `.env` file to include your OpenAI API key and DB name:

   ```sh
   OPENAI_API_KEY=your_openai_api_key_here
   DB_NAME=AiCompanion
   ```

6. Start docker container for DB
   ```sh
   docker-compose up -d
   ```

### Running the Service

1. Start the service with npm:
   ```sh
   npm run dev
   ```

NOT SURE THIS IS NEEDED IN NEXT.JS VERSION 2. You must have the express server started to handle api calls. you can start the service directly with Node.js:
`sh
    npm run server
    `

## Contributing

We are open to contributions and ideas on how to improve the AI Companion. Feel free to fork the repository, make your changes, and submit a pull request. If you have any suggestions for new features, please open an issue to discuss.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!

---

**Contact**

- **Email**: brian.stern2511@gmail.com
- **GitHub**: https://github.com/sterno2510
