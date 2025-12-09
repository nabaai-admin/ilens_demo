# I Lens I Lens AI Demo - Docker Setup

This document provides instructions for running the I Lens I Lens AI Demo React application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Quick Start

### Production Build

1. **Build and run the production application:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Open your browser and navigate to `http://localhost:7098`
   - The application will be served on port 7098

3. **Stop the application:**
   ```bash
   docker-compose down
   ```

### Development Build

1. **Run the development environment:**
   ```bash
   docker-compose --profile dev up --build
   ```

2. **Access the development server:**
   - Open your browser and navigate to `http://localhost:5173`
   - Hot reloading is enabled for development

3. **Stop the development environment:**
   ```bash
   docker-compose --profile dev down
   ```

## Docker Commands

### Build the image manually:
```bash
docker build -t ilens-yemen-ai-demo .
```

### Run the container manually:
```bash
docker run -p 7098:80 ilens-yemen-ai-demo
```

### View logs:
```bash
docker-compose logs -f ilens-web
```

### Access container shell:
```bash
docker-compose exec ilens-web sh
```

## Configuration

### Environment Variables

The application uses the following environment variables:

- `NODE_ENV`: Set to `production` for production builds
- `PORT`: Port for the development server (default: 5173)

### Nginx Configuration

The nginx configuration (`nginx.conf`) includes:

- Static file caching for better performance
- Gzip compression
- Security headers
- React Router support (SPA routing)
- Health check endpoint at `/health`

### Customization

To customize the nginx configuration:

1. Modify the `nginx.conf` file
2. Rebuild the Docker image:
   ```bash
   docker-compose build
   ```

## Health Check

The application includes a health check endpoint:

```bash
curl http://localhost:7098/health
```

Expected response: `healthy`

## Troubleshooting

### Port already in use
If port 7098 is already in use, modify the `docker-compose.yml` file:

```yaml
ports:
  - "8099:80"  # Change 7098 to 8099 or another available port
```

### Build issues
If you encounter build issues:

1. Clear Docker cache:
   ```bash
   docker system prune -a
   ```

2. Rebuild without cache:
   ```bash
   docker-compose build --no-cache
   ```

### Permission issues
If you encounter permission issues with logs:

1. Create the logs directory:
   ```bash
   mkdir -p logs/nginx
   ```

2. Set proper permissions:
   ```bash
   chmod 755 logs/nginx
   ```

## Production Deployment

For production deployment:

1. **Build the production image:**
   ```bash
   docker build -t ilens-yemen-ai-demo:latest .
   ```

2. **Run with proper environment variables:**
   ```bash
   docker run -d \
     --name ilens-yemen-ai-demo \
     -p 7098:80 \
     -e NODE_ENV=production \
     --restart unless-stopped \
     ilens-yemen-ai-demo:latest
   ```

3. **Set up reverse proxy (optional):**
   - Configure your reverse proxy (nginx, Apache, etc.) to forward requests to the Docker container
   - Set up SSL/TLS certificates for HTTPS

## Monitoring

### View application logs:
```bash
docker-compose logs -f ilens-web
```

### Monitor resource usage:
```bash
docker stats ilens-yemen-ai-demo
```

### Check container health:
```bash
docker-compose ps
```

## Security Considerations

- The nginx configuration includes security headers
- Static assets are cached for performance
- The application runs as a non-root user in the container
- Health checks are implemented for monitoring

## Support

For issues related to Docker setup, please check:

1. Docker logs: `docker-compose logs`
2. Container status: `docker-compose ps`
3. Health check endpoint: `curl http://localhost/health` 