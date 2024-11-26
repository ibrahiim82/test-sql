/*


npm init -y

npm install expres

/ Express'i dahil et
const express = require('express');

/ Uygulamayı oluştur
const app = express();

/ Anasayfa yönlendiricisi
app.get('/', (req, res) => {
  res.send('Merhaba, Express!');
});

/ Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});

nodemon app.js


*/