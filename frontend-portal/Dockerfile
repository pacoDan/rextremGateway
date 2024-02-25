FROM jhonpaco/node AS development
#LABEL authors="Daniel"

# Instala git en la imagen
#RUN apt-get update && apt-get install -y --no-install-recommends git && rm -rf /var/lib/apt/lists/*

# Create app directory
#WORKDIR /rextrem-dev
WORKDIR /app

# Clona el repositorio de GitHub dentro del contenedor
# RUN git clone https://github.com/pacoDan/rextremGateway.git .

# Copia los archivos de configuración y dependencias del proyecto
# COPY portal-frontend/package.json portal-frontend/package-lock.json ./
# Copy dependency definitions
#COPY public/ ./public/
#COPY src/ ./src/
#COPY package.json ./
#COPY package-lock.json ./
# Copia los archivos de la aplicación al contenedor
COPY ./ ./

# Install dependencies
RUN npm install

# Construye la aplicación React
RUN npm run build

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]