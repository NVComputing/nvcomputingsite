const fs = require('fs');
const path = require('path');

module.exports.set = (app) => app.post('/stats', (req, res) => res.json(JSON.parse(fs.readFileSync(path.join(__dirname, '../stats.json'), 'utf8'))));