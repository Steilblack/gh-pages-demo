const fs = require('fs');
const path = require('path');
const getDb = require('../db');

const db = getDb();
const targetDir = path.resolve(__dirname, '../../../build/static/db');

fs.mkdirSync(targetDir, { recursive: true });

for (const [key, value] of Object.entries(db)) {
  fs.writeFileSync(
    path.join(targetDir, `${key}.json`),
    JSON.stringify(value, null, 2)
  );
}
console.log('Static JSON DB successfully exported to build/static/db');
