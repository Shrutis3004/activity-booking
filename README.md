# Activity Booking App

A simple Node.js REST API backend for an activity booking app where users can register, login, view activities, book them, and view their bookings. The app uses **JWT Authentication** for user security and **MongoDB** for data storage.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT Token-based authentication
- **Environment Variables**: `.env` file for sensitive information (like database URI, JWT secret)
- **Validation**: Joi/express-validator for input validation
- **Password Hashing**: bcrypt.js for secure password storage

## Features

1. **User Registration & Login**:

   - Users can register with their name, email, phone, and password.
   - Login with email and password to get a JWT token for authorized routes.

2. **List Activities** (Public Endpoint):

   - View a list of available activities like cricket, movies, etc.
   - Each activity contains: `id`, `title`, `description`, `location`, `date`, and `time`.

3. **Book an Activity** (Authorized Users Only):

   - After logging in, users can book an activity.
   - Bookings are saved in the database with user details.

4. **Get My Bookings**:
   - Users can view a list of all the activities they have booked.

## 🔧 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Shrutis3004/activity-booking.git
cd activity-booking
```
