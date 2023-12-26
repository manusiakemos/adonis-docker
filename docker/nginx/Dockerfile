# Use the official Nginx image
FROM nginx:alpine

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (default HTTP port)
EXPOSE ${NGINX_HOST_HTTP_PORT}

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
