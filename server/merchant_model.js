const Pool = require('pg').Pool
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'my_database',
    password: 'root',
    port: 5434,
});

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM merchants ORDER')
    })
}