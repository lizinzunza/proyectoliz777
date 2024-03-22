const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 27017;

mongoose.connect('mongodb://127.0.0.1:27017/bd_login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  email: String,
  password: String
});

const UserModel = mongoose.model('User', userSchema);

app.use(express.json());

// Ruta para registrar un nuevo usuario
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
