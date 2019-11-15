const mysql = require('mysql');

const query = (query) => {
    const con1 = mysql.createConnection({
        host: "localhost",
        user: "srijan",
        password: 'password',
        database: "eis"
    });
    return new Promise((resolve, reject) => {
        con1.connect(function (err) {
            if (err) reject(err);
            con1.query(query, function (err, result) {
                if (err) reject(err);
                con1.end();
                resolve(result);
            });
        });
    })
}

module.exports = {
    query
};