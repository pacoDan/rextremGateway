FROM jhonpaco/node AS development
#LABEL authors="Daniel"

# Instala git en la imagen
RUN apt-get update && apt-get install -y --no-install-recommends git && rm -rf /var/lib/apt/lists/*

# Create app directory
#WORKDIR /rextrem-dev
WORKDIR /app

# Clona el repositorio de GitHub dentro del contenedor
RUN git clone https://github.com/pacoDan/rextremGateway.git .


# Copy dependency definitions
#COPY public/ ./public/
#COPY src/ ./src/
#COPY package.json ./
#COPY package-lock.json ./

# Install dependencies
RUN npm install

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]