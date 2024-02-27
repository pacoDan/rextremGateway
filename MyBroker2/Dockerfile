#FROM jhonpaco/jdk
FROM amazoncorretto:17
#FROM openjdk:17
# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos fuente al contenedor
COPY . .

RUN ./gradlew clean test --info

# Compilamos el proyecto con Gradle
RUN ./gradlew build --info

# Copiamos el archivo JAR compilado desde el contenedor del compilador al contenedor de ejecución
COPY ./build/libs/MyBroker2-0.0.1-SNAPSHOT.jar .

# Exponemos el puerto en el que la aplicación Spring Boot va a escuchar las peticiones
EXPOSE 8080

# Comando para ejecutar la aplicación Spring Boot
CMD ["java", "-jar", "MyBroker2-0.0.1-SNAPSHOT.jar"]