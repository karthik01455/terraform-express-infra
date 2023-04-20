const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const app = express();
app.use(cors)
const prisma = new PrismaClient();


// Endpoint to add a color to the database
app.use(express.json());
app.post('/colors', async (req, res) => {
  try {
    console.log(req.body)
    const { name } = req.body;
    const color = await prisma.color.create({
      data: {
        name,
      },
    });
    res.json(color);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to fetch all colors from the database
app.get('/colors', async (req, res) => {
  try {
    const colors = await prisma.color.findMany();
    res.json(colors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Endpoint to print hello world
app.get('/user', async (req, res) => {
  try {
    console.log('user');
    res.json('user');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/user/profile', async (req, res) => {
  try {
    console.log('user');
    res.json('user');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
