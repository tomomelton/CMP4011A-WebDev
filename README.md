# CMP4011A-WebDev

Repository to store the collaborative coursework for CMP-4011A Web Development Group C19

## Key Features & Benefits

*   **Backend with Node.js & Express:** Provides a robust server-side environment.
*   **Route Handling:** Implements routing for handling different requests.
*   **Static File Serving:** Serves static files such as images, CSS, and JavaScript from the `public` directory.
*   **File Download:** Enables downloading files from the server (e.g., energy policy PDF).
*   **Middleware Support:** Includes middleware for handling URL-encoded and JSON request bodies.

## Prerequisites & Dependencies

Before running this project, ensure you have the following installed:

*   **Node.js:** (Version 18 or higher recommended) - JavaScript runtime environment.
*   **npm:** (Node Package Manager) - Package manager for installing dependencies.

## Installation & Setup Instructions

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/tomomelton/CMP4011A-WebDev.git
    cd CMP4011A-WebDev
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Start the Server:**

    ```bash
    npm start
    ```

    or

    ```bash
    node app/app.js
    ```

    The server will start listening on port 3000.

## Usage Examples & API Documentation

### Downloading the Energy PDF

To download the energy PDF, send a GET request to the `/downloadEnergy` endpoint:

```
GET /downloadEnergy
```

This will trigger the download of the `SDG 7 Policy Briefs 2021.pdf` file from the `public/downloads/` directory.

### Serving Static Files

Place any static files (e.g., images, CSS, JavaScript) in the `public` directory. These files can be accessed directly via the server's URL.

## Configuration Options

The following configurations are available:

*   **Port:** The server listens on port `3000` by default. This can be changed by modifying the `port` variable in `app/app.js`.
*   **Static Directory:** The `public` directory is used to serve static files. This can be modified by changing the argument passed to `express.static()` in `app/app.js`.

## License Information

No license specified. All rights reserved by the owner.

## Acknowledgments

*   Express.js: For providing the web framework.
*   Node.js: For the JavaScript runtime environment.
*   npm: For package management.
