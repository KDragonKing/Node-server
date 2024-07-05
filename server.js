const express = require('express');
const app = express();
const port = 3000;

const headlines = [
    "Breaking News: Major Event Unfolds",
    "Latest Update: Changes on the Horizon",
    "New Discovery: Scientists Unveil Findings",
    "Market Watch: Stocks on the Rise",
    "Weather Alert: Storm Approaching",
    "Sports News: Team Wins Championship"
];

app.get('/headline', (req, res) => {
    const randomIndex = Math.floor(Math.random() * headlines.length);
    const randomHeadline = headlines[randomIndex];
    res.send(randomHeadline);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
