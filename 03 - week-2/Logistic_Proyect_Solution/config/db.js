import mysql2 from 'mysql2/promise';
let pool;

try {
    pool = mysql2.createPool({
        host: 'b0m91voppvz74ioul0wn-mysql.services.clever-cloud.com',
        user: 'u7a8s3u6ybr12geb',
        database: 'b0m91voppvz74ioul0wn',
        port: 3306,
        password: 'WzWTXQpFwsU3PpWkIQUc',
    })

    console.log('data base conected');
} catch (err) {
    console.log(err);
}

export { pool };