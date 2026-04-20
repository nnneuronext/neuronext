#!/bin/bash
echo "Building Neuronext application..."

# Build backend
echo "Building backend..."
cd backend
docker build -t neuronext-backend .

# Build frontend  
echo "Building frontend..."
cd ../frontend
docker build -t neuronext-frontend .

echo "Build complete!"
