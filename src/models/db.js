// const mysql = require("mysql2");

// const mybatisMapper = require("mybatis-mapper");

// const connection = mysql.createConnection({
//   host: process.env.MYBATIS_HOST,
//   user: process.env.MYBATIS_USERNAME,
//   database: process.env.MYBATIS_DATABASE,
//   password: process.env.MYBATIS_PASSWORD,
// });

// mybatisMapper.createMapper(["./src/models/mapper.xml"]);

// let param = {
//   test_id: 1,
// };

// //질의문 형식
// let format = { language: "sql", indent: "  " };
// let query = mybatisMapper.getStatement("testMapper", "testBasic", param, format);
// //첫번째는 xml의 name값, 두번째는 해당 xml의 id값, 세번째는 파라미터, 마지막은 포맷 입니다.

// console.log(query); //해당쿼리가 조합된 것을 볼 수 있습니다.

// connection.connect();
// connection.query(query, function (error, results, fields) {
//   //조회
//   if (error) {
//     console.log(error);
//   }
//   console.log(results);
// });
// connection.end();

// module.exports = { connection };
