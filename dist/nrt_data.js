"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = __importStar(require("mysql2/promise"));
var bhspoolConfig = {
    host: "localhost",
    user: "bhs",
    password: "bhs",
    database: "db2118",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt1poolConfig = {
    host: "192.168.11.10",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt2poolConfig = {
    host: "192.168.11.12",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt3poolConfig = {
    host: "192.168.11.14",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt4poolConfig = {
    host: "192.168.11.16",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt5poolConfig = {
    host: "192.168.11.28",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt6poolConfig = {
    host: "192.168.11.20",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var max3poolConfig = {
    host: "192.168.11.26",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var max4poolConfig = {
    host: "192.168.11.28",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var max5poolConfig = {
    host: "192.168.11.30",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var max6poolConfig = {
    host: "192.168.11.32",
    user: "nrt",
    password: "nrt",
    database: "nrt_controls",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
var nrt1pool = mysql.createPool(nrt1poolConfig);
var nrt2pool = mysql.createPool(nrt2poolConfig);
var nrt3pool = mysql.createPool(nrt3poolConfig);
var nrt4pool = mysql.createPool(nrt4poolConfig);
var nrt5pool = mysql.createPool(nrt5poolConfig);
var nrt6pool = mysql.createPool(nrt6poolConfig);
var max3pool = mysql.createPool(max3poolConfig);
var max4pool = mysql.createPool(max4poolConfig);
var max5pool = mysql.createPool(max5poolConfig);
var max6pool = mysql.createPool(max6poolConfig);
var bhspool = mysql.createPool(bhspoolConfig);
//const promisePool = pool.promise();
setInterval(function () {
    console.log("call db");
    getData(nrt1pool, 'nrt01_db');
    getData(nrt2pool, 'nrt02_db');
    getData(nrt3pool, 'nrt03_db');
    getData(nrt4pool, 'nrt04_db');
    getData(nrt5pool, 'nrt05_db');
    getData(nrt6pool, 'nrt06_db');
    getData(max3pool, 'max03_db');
    getData(max4pool, 'max04_db');
    getData(max5pool, 'max05_db');
    getData(max6pool, 'max06_db');
}, 30000);
function getData(_pool, dbtable) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //const connection = await pool.getConnection();
                // Use the connection
                //await connection.ping();
                return [4 /*yield*/, _pool.query("SELECT ui_name as name, material_id , \n    (select ui_color from nrt_controls.scada_object_material_info as b where unit_id = 1 and a.material_id =b.material_id  limit 1) as color  , \n    avg(per_cent_identified) as percent FROM nrt_controls.scada_object_material_info as a  group by  material_id, name,  color ", function (err, rows, fields) { return __awaiter(_this, void 0, void 0, function () {
                        var ui_name, ui_color, percent, total_percent, i, dbinsert;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (err) {
                                        console.log("error:%s", err);
                                    }
                                    console.log("t_stamp=%s  ", new Date());
                                    ui_name = [];
                                    ui_color = [];
                                    percent = [];
                                    total_percent = 0;
                                    for (i = 1; i < 15; i++) {
                                        if (rows[i - 1] != undefined) {
                                            ui_name[i] = rows[i - 1]["name"];
                                            ui_color[i] = rows[i - 1]["color"];
                                            percent[i] = rows[i - 1]["percent"];
                                            total_percent = total_percent + percent[i];
                                        }
                                    }
                                    dbinsert = {
                                        t_stamp: new Date(),
                                        ui_name_1: ui_name[1],
                                        ui_name_2: ui_name[2],
                                        ui_name_3: ui_name[3],
                                        ui_name_4: ui_name[4],
                                        ui_name_5: ui_name[5],
                                        ui_name_6: ui_name[6],
                                        ui_name_7: ui_name[7],
                                        ui_name_8: ui_name[8],
                                        ui_name_9: ui_name[9],
                                        ui_name_10: ui_name[10],
                                        ui_name_11: ui_name[11],
                                        ui_name_12: ui_name[12],
                                        ui_name_13: ui_name[13],
                                        ui_name_14: ui_name[14],
                                        ui_color_1: ui_color[1],
                                        ui_color_2: ui_color[2],
                                        ui_color_3: ui_color[3],
                                        ui_color_4: ui_color[4],
                                        ui_color_5: ui_color[5],
                                        ui_color_6: ui_color[6],
                                        ui_color_7: ui_color[7],
                                        ui_color_8: ui_color[8],
                                        ui_color_9: ui_color[9],
                                        ui_color_10: ui_color[10],
                                        ui_color_11: ui_color[11],
                                        ui_color_12: ui_color[12],
                                        ui_color_13: ui_color[13],
                                        ui_color_14: ui_color[14],
                                        percent_1: percent[1],
                                        percent_2: percent[2],
                                        percent_3: percent[3],
                                        percent_4: percent[4],
                                        percent_5: percent[5],
                                        percent_6: percent[6],
                                        percent_7: percent[7],
                                        percent_8: percent[8],
                                        percent_9: percent[9],
                                        percent_10: percent[10],
                                        percent_11: percent[11],
                                        percent_12: percent[12],
                                        percent_13: percent[13],
                                        percent_14: percent[14]
                                    };
                                    if (!(total_percent > 0)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, bhspool.query('insert into ' + dbtable + ' set ?', dbinsert)];
                                case 1:
                                    _a.sent();
                                    console.log("* ins ---");
                                    return [4 /*yield*/, bhspool.query('delete from ' + dbtable + ' WHERE t_stamp < DATE_ADD(Now() , interval -30 day )')];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
                case 1:
                    //const connection = await pool.getConnection();
                    // Use the connection
                    //await connection.ping();
                    _a.sent();
                    console.log("after ---");
                    return [2 /*return*/];
            }
        });
    });
}
