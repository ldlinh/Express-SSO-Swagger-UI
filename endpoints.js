const mysql = require('mysql');
const Keycloak = require('keycloak-connect');
const session = require('express-session');
const bodyParser = require('body-parser');
const initializeEndpoints = (app) => {

app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.use(function (req, res, next) {
  global.connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
  connection.connect();
  next();
});
var memoryStore = new session.MemoryStore();
var kcConfig = {
  clientId: 'dev-con-documents',
  bearerOnly: true,
  serverUrl: 'http://auth.mmsofts.com/auth',
  realm: 'dev-con-1.5.5'
};
var keycloak = new Keycloak({ store: memoryStore },kcConfig);

// set session for keycloak
app.use(session({
  secret: 'secretS3cret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(keycloak.middleware());

/**
  @swagger
 * /api/todos:
 *    get:
 *      tags:
 *        - Todo
 *      name: To do list
 *      security:
 *        - bearerAuth: []
 *      summary: List all to do jobs
 *      comsumes:
 *           - application/json
 *      responses:
 *        200:
 *          description: Return to do list
 *        500:
 *          description: Server error.
 */
app.get("/api/todos",keycloak.protect(), async (req, res, next) => {
	
    let sql = "select * from todo_list";
    connection.query(sql.toString(), function (error, results, fields) {
        if (error)
            res.send(JSON.stringify({"status": 500, "error": error, "response": "Error when list todo list"}));
        else
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });

});
}

module.exports = initializeEndpoints;