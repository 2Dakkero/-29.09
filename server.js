const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// Главная
app.get('/', (req, res) => {
  res.send('<h1>Портал conference_rf</h1><a href="/register">Регистрация</a>');
});
// /about — «О портале»
app.get('/about', (req, res) => {
  res.send('<h1>О портале</h1><p>Портал для бронирования помещений и проведения конференций.</p>');
});

// /contact — «Контакты»
app.get('/contact', (req, res) => {
  res.send('<h1>Контакты</h1><p>Email: support@conference-rf.ru</p><p>Тел: +7 (999) 123-45-67</p>');
});

// /help — «Помощь»
app.get('/help', (req, res) => {
  res.send('<h1>Помощь</h1><ul><li>Как забронировать помещение?</li><li>Как зарегистрироваться?</li><li>Как связаться с админом?</li></ul>');
});

// /rooms — «Список помещений»
app.get('/rooms', (req, res) => {
  res.send(`
    <h1>Список помещений</h1>
    <ul>
      <li>Аудитория 101 — 30 чел.</li>
      <li>Переговорная A — 10 чел.</li>
      <li>Конференц-зал — 100 чел.</li>
    </ul>
  `);
});
app.listen(PORT, () => {
  console.log(`Сервер conference_rf запущен: http://localhost:${PORT}`);
});
