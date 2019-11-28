
import * as mysql from "mysql2/promise";



let bhspoolConfig = {
  host: "localhost",
  user: "bhs",
  password: "bhs",
  database: "db2118",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt1poolConfig = {
  host: "192.168.11.10",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt2poolConfig = {
  host: "192.168.11.12",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt3poolConfig = {
  host: "192.168.11.14",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt4poolConfig = {
  host: "192.168.11.16",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt5poolConfig = {
  host: "192.168.11.28",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt6poolConfig = {
  host: "192.168.11.20",
  user: "nrt",
  password: "nrt",
  database: "nrt_controls",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let nrt1pool = mysql.createPool(nrt1poolConfig);
let nrt2pool = mysql.createPool(nrt2poolConfig);
let nrt3pool = mysql.createPool(nrt3poolConfig);
let nrt4pool = mysql.createPool(nrt4poolConfig);
let nrt5pool = mysql.createPool(nrt5poolConfig);
let nrt6pool = mysql.createPool(nrt6poolConfig);
let bhspool = mysql.createPool(bhspoolConfig);
//const promisePool = pool.promise();
setInterval(() => {
  console.log("call db");
  getData(nrt1pool,  'nrt01_db');
  getData(nrt2pool,  'nrt02_db');
  getData(nrt3pool,  'nrt03_db');
  getData(nrt4pool,  'nrt04_db');
  getData(nrt5pool,  'nrt05_db');
  getData(nrt6pool,  'nrt06_db');
}, 10000);

async function getData(_pool: mysql.Pool,  dbtable: string) {
  //const connection = await pool.getConnection();
  // Use the connection
  //await connection.ping();

  await _pool.query(
    `SELECT ui_name as name, material_id , 
    (select ui_color from nrt_controls.scada_object_material_info as b where unit_id = 1 and a.material_id =b.material_id  limit 1) as color  , 
    avg(per_cent_identified) as percent FROM nrt_controls.scada_object_material_info as a  group by  material_id, name,  color `,
    async (
      err: mysql.QueryError,
      rows: mysql.RowDataPacket[],
      fields: mysql.FieldPacket
    ) => {
      if (err) {
        console.log("error:%s", err);
      }

      console.log("t_stamp=%s  ", new Date());
      // rows.forEach(res => {
      //   console.log("res: %s color:%s  value:%s", res['name'], res['color'], res['percent']);
      // });
      let ui_name = [];
      let ui_color = [];
      let percent = [];
      for (let i = 1; i < 14; i++) {
        if (rows[i - 1] != undefined)
          ui_name[i] = rows[i - 1]["name"];
        //else
        //  ui_name[i] = ""
        if (rows[i - 1] != undefined)
          ui_color[i] = rows[i - 1]["color"];
        // else
        //   ui_color[i] = ""
        if (rows[i - 1] != undefined)
          percent[i] = rows[i - 1]["percent"];
        // else
        //   percent[i] = 0
      }
      // console.log(
      //   "u1_name1:%s ui_name2:%s percent:%s",
      //   ui_name[16],
      //   ui_name[2],
      //   percent[5]
      // );
     
      let dbinsert = {
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
      await bhspool.query('insert into ' + dbtable + ' set ?', dbinsert);
      console.log("* ---");
      return rows;
    }
  );

  console.log("after ---");
  //onnection.release();
}
