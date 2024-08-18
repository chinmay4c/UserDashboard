# UserDashboard

This React application provides a user dashboard that includes profile management, activity history, and settings. It allows users to view and edit their profile information, track their activities, and access settings such as logout.


## Live Application

You can view the live application at: [User Dashboard](https://userdashboard-one.vercel.app/)
## Features

- **Profile Management**: View and edit user profile details including name, email, and profile picture.
- **Activity History**: Track user activities with a list of recent actions.
- **Settings**: Access and perform actions like logout.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/chinmay4c/UserDashboard.git
cd UserDashboard
```

### Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

### Project Structure

- **`src/`**: Contains all source files.
  - **`components/`**: Contains React components for Profile, EditProfile, ActivityHistory, and Settings.
  - **`Profile.png`**: Example profile picture.
  - **`App.js`**: Main application file.
  - **`styles.css`**: Styles for the application.
- **`public/`**: Contains the HTML file and other static assets.

### Running the Application

To start the development server and run the application locally, use:

```bash
npm start
```

This command will start the development server and open the application in your default web browser. The app will automatically reload when you make changes to the source files.

### Usage

1. **Profile Management**:
   - View your profile information including name, email, and profile picture.
   - Click the "Edit Profile" button to modify your profile details.
   - Save changes or cancel editing through the provided buttons.

2. **Activity History**:
   - View a list of recent activities performed on the dashboard.

3. **Settings**:
   - Access the settings by clicking the "Open Settings" button in the dashboard header.
   - Use the logout button to log out of the application.

