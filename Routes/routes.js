const { query } = require('../db/db');

let routes = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {name: 'srijan'});
    });

    app.get('/users', (req, res) => {
        query('select * from example_table')
        .then(
            (results) => {
                query('slknfn vvv ffff');
            }
        ).then(
            (result2) => {
                res.render('index', {users: results})
            }
        ).catch((e) => {
            res.send(e);
        });
    });

    app.get('/userAwait', async (req, res) => {
        try {
            let results = await query('select * from example_table');
            let results2 = await query('select resuls.name from example_table');
            res.render('await', {users: results});
        } catch (error) {
            res.send(error);
        }
        
    });
}

module.exports = {
    routes: routes
}