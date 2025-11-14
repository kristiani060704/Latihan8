const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

// tes awal
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// pasang routes users (sesuai langkah B.6 di SS)
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
