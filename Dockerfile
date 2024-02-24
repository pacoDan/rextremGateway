FROM jhonpaco/node AS development
#LABEL authors="Daniel"

# Create app directory
WORKDIR /rextrem-dev

# Copy dependency definitions
COPY public/ ./public/
COPY src/ ./src/
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
