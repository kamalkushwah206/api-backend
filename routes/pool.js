var mysql=require('mysql2')
const db = mysql.createConnection({
  host: mysql.railway.internal,
  port: 3306,
  user: root,
  password: YJLXZjDsDSjuTkjCBoEbUzWpNoFLJRVk,
  database: railway,
});
module.exports = pool;



