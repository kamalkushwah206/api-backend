var mysql=require('mysql')
var pool=mysql.createPool({
host:"mysql.railway.internal",
port:3306,
user:"root",
password:"YJLXZjDsDSjuTkjCBoEbUzWpNoFLJRVk",
database:"railway,",
multipleStatements:true,
connectionLimit:100
})
module.exports = pool;