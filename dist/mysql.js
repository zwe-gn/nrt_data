"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("util"));
var MySql;
(function (MySql) {
    var mysql = require('mysql');
    var pool = mysql.createPool({
        connectionLimit: 10,
        host: '10.100.1.130',
        user: 'nrt',
        password: 'nrt',
        database: 'nrt_controls'
    });
    // Ping database to check for common exception errors.
    pool.getConnection(function (err, connection) {
        if (err) {
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.error('Database connection was closed.');
            }
            if (err.code === 'ER_CON_COUNT_ERROR') {
                console.error('Database has too many connections.');
            }
            if (err.code === 'ECONNREFUSED') {
                console.error('Database connection was refused.');
            }
        }
        if (connection)
            connection.release();
        return;
    });
    // Promisify for Node.js async/await.
    pool.query = util_1.default.promisify(pool.query);
})(MySql = exports.MySql || (exports.MySql = {}));
