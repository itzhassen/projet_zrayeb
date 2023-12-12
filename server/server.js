const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gest-bureau',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Fetch all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Fetch a single user by ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  db.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...newUser });
  });
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId], (err) => {
    if (err) throw err;
    res.json({ id: userId, ...updatedUser });
  });
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
    if (err) throw err;
    res.json({ message: 'User deleted successfully' });
  });
});

// Add this route handler for login in your server code
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const [user] = await new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
          if (err) reject(err);
          resolve(results);
        });
      });
  
      if (user) {
        if (user.password === password) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      console.error('Error during login check:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
