##### Introduction

Basic CRUD template with express js and mongoose

##### What is contained on this template?

- Express js server setup
- Mongoose connection
- Docker setup
- Basic authentication
- Module base definition example

##### Requirements

- Basic CRUD operations
- Authentication via JWT
- Environment variables management
- Typescript supported
- Modular code structure
- Error handling middleware
  - Logging middleware
  - Request validation middleware
- Dockerfile for containerization

##### How to use this template?

1. Clone the repository
2. Install dependencies using `npm install` or `yarn install`
3. Set up environment variables in a `.env` file (you can use `.env.example` as a reference)
4. Start the server using `npm start` or `yarn start`
5. Access the API at `http://localhost:3000` (or the port you specified in the `.env` file)
6. Use tools like Postman or curl to test the API endpoints
7. Create new modules by command `npm run create-module -- <module-name>` or `yarn create-module <module-name>`
8. Customize the code as per your project requirements

##### Docker Setup

1. Ensure you have Docker installed on your machine
2. Build the Docker image using the command: `docker build -t your-image-name .`
3. Run the Docker container using the command: `docker run -p 3000:3000 your-image-name`
4. The application will be accessible at `http://localhost:3000`

##### Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and add the necessary environment variables. You can refer to the `.env.example` file for guidance.
3. Start the development server:

   ```bash
   npm run dev
   ```

4. The server will start on the port specified in your `.env` file (default is 3000). You can access it at `http://localhost:3000`.

##### Note

- Make sure to replace `your-image-name` with a suitable name for your Docker image.
- Update the `.env` file with appropriate values for your environment.
- Modify the code structure and add more features as per your project needs.
- For any issues or contributions, feel free to open an issue or pull request on the repository.
