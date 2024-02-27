const express = require("express");
const app = express();
// import { myDataSource } from "./app-data-source"
const { myDataSource } = require("./app-data-source.ts");
// import { User } from "./entity/User"

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// Middleware para manejar el cuerpo de las solicitudes JSON
app.use(express.json());

// Rutas
app.get("/users",  (req, res) => {
    // Lógica para obtener y devolver todos los usuarios
    const users = []; // Aquí deberías obtener los usuarios desde tu base de datos u otra fuente de datos
    // const users = await myDataSource.getRepository(User).find()
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    // Lógica para obtener y devolver un usuario por su ID
    const userId = req.params.id;
    // Aquí deberías obtener el usuario correspondiente al ID desde tu base de datos u otra fuente de datos
    const user = { id: userId, name: "John Doe" }; // Ejemplo de usuario ficticio
    res.json(user);
});

app.post("/users", (req, res) => {
    // Lógica para crear y guardar un usuario
    const userData = req.body;
    // Aquí deberías guardar el usuario recibido en la solicitud en tu base de datos u otra fuente de datos
    const newUser = { ...userData, id: 123 }; // Ejemplo de usuario ficticio con ID generado
    res.status(201).json(newUser); // Código de estado 201 para recurso creado
});

app.put("/users/:id", (req, res) => {
    // Lógica para actualizar un usuario por su ID
    const userId = req.params.id;
    const updatedUserData = req.body;
    // Aquí deberías actualizar el usuario correspondiente al ID en tu base de datos u otra fuente de datos
    const updatedUser = { id: userId, ...updatedUserData }; // Ejemplo de usuario actualizado
    res.json(updatedUser);
});

app.delete("/users/:id", (req, res) => {
    // Lógica para eliminar un usuario por su ID
    const userId = req.params.id;
    // Aquí deberías eliminar el usuario correspondiente al ID de tu base de datos u otra fuente de datos
    res.sendStatus(204); // Código de estado 204 para sin contenido
});

// Iniciar servidor Express
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Express iniciado en el puerto ${port}`);
});
