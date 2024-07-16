# NestJS Template Project

This project is a template for creating a NestJS application with PostgreSQL, Docker, and Swagger documentation.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- Docker
- Docker Compose

### Project Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. **Remove Git History and Initialize a New Repository**

   To start with a clean slate, remove the existing Git history and reinitialize the repository.

   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory** with the following content:

   ```env
   POSTGRES_HOST=db
   POSTGRES_PORT=5432
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=password
   POSTGRES_DB=test
   PGADMIN_DEFAULT_EMAIL=admin@admin.com
   PGADMIN_DEFAULT_PASSWORD=admin
   ```

### Running the Application

1. **Build and start the application** using Docker Compose:

   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

2. **Access the application**:

    - API: `http://localhost:3000`
    - Swagger Documentation: `http://localhost:3000/api`

### Project Structure

- `src/app.module.ts`: Main application module.
- `src/database/database.module.ts`: Database module.
- `src/database/database.service.ts`: Database service to handle database operations.
- `src/database/database.controller.ts`: Database controller to expose the API endpoints.
- `src/database/dto/timestamp.dto.ts`: DTO for the timestamp response.
- `src/reports/reports.entity.ts`: Example entity for database operations.
- `.env`: Environment configuration file.
- `Dockerfile`: Docker configuration file.
- `docker-compose.yml`: Docker Compose configuration file.
- `docker-compose.prod.yml`: Production Docker Compose configuration file.

### Swagger Documentation

Swagger is configured in `src/main.ts` to provide API documentation. The documentation can be accessed
at `http://localhost:3000/api`.

### Production Setup

A `docker-compose.prod.yml` file is prepared for production deployment. This file can be used to run the application in
a production environment with optimized settings.

### License

This project is licensed under the MIT License - see the LICENSE file for details.



