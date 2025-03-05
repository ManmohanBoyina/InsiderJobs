# InsiderJobs

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A full-stack job application platform built with the MERN stack to streamline the hiring process for both job seekers and recruiters.

## Overview

InsiderJobs provides dedicated portals where job seekers can browse job listings, submit applications, and track their progress, while recruiters can post job openings, review applications, and manage candidates efficiently. The platform features secure authentication, real-time notifications, and optimized performance for a seamless user experience.

![InsiderJobs Screenshot](https://via.placeholder.com/800x400)

## Features

### For Job Seekers
- **Job Discovery**: Browse and search through available job listings
- **Application Management**: Submit applications and track their progress
- **Profile Builder**: Create and maintain a professional profile
- **Real-time Updates**: Receive instant notifications about application status changes

### For Recruiters
- **Job Posting**: Create and publish new job opportunities
- **Candidate Management**: Review applications and manage candidate pipelines
- **Applicant Tracking**: Monitor application statuses and history
- **Analytics Dashboard**: Gain insights into job posting performance

### Platform Capabilities
- **Secure Authentication**: JWT-based authentication with role-based access control
- **Real-time Notifications**: WebSocket implementation for instant updates
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Optimized Performance**: Efficient data handling with MongoDB indexing strategies

## Tech Stack

### Frontend
- **React.js**: Component-based UI development
- **Redux**: State management
- **Material UI**: Component library for responsive design
- **Socket.io-client**: Real-time communication with the server

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for scalable data storage
- **Mongoose**: MongoDB object modeling
- **JWT**: Secure authentication
- **Socket.io**: Real-time bidirectional communication

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

### Installation

1. Clone the repository
```bash
git clone https://github.com/ManmohanBoyina/InsiderJobs.git
cd InsiderJobs
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
   - Create a `.env` file in the server directory
   - Add the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/insiderjobs
JWT_SECRET=your_jwt_secret
```

4. Start the development servers
```bash
# Start backend server
cd server
npm run dev

# Start frontend server in a new terminal
cd client
npm start
```

5. Access the application at `http://localhost:3000`

## Project Structure

```
InsiderJobs/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # React source files
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # State management
│   │   ├── services/       # API services
│   │   ├── utils/          # Utility functions
│   │   └── App.js          # Main application component
├── server/                 # Backend Node.js/Express application
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Express middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   └── server.js           # Express app entry point
└── README.md               # Project documentation
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT token

### Job Endpoints
- `GET /api/jobs` - Get all job listings
- `GET /api/jobs/:id` - Get specific job details
- `POST /api/jobs` - Create a new job posting (Recruiter only)
- `PUT /api/jobs/:id` - Update a job posting (Recruiter only)
- `DELETE /api/jobs/:id` - Delete a job posting (Recruiter only)

### Application Endpoints
- `GET /api/applications` - Get user's applications or recruiter's received applications
- `POST /api/applications/:jobId` - Submit a job application (Job seeker only)
- `PUT /api/applications/:id` - Update application status (Recruiter only)

## Performance Improvements

- **30% improvement in API response times** through backend optimization
- **Efficient data management** with MongoDB indexing strategies
- **Real-time updates** via WebSockets to enhance user engagement

## Future Enhancements

- **Advanced Search Filters**: Implement more sophisticated job search capabilities
- **Interview Scheduling**: Add calendar integration for interview management
- **Resume Parsing**: Automate candidate data extraction from resumes
- **Mobile Application**: Develop native mobile apps for iOS and Android

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Manmohan Boyina - [Your Email](mailto:your-email@example.com)

Project Link: [https://github.com/ManmohanBoyina/InsiderJobs](https://github.com/ManmohanBoyina/InsiderJobs)
