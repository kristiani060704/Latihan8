const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // ganti jika bukan root
  password: '',   // isi jika MySQL kamu pakai password
  database: 'dbpraktikum8'
});

db.connect((err) => {
  if (err) {
    console.error('Koneksi MySQL gagal:', err.message);
    return;
  }
  console.log('Terhubung ke MySQL.');
});

module.exports = db;
