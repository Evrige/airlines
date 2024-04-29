import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
	const dbconnection = await mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: '1234',
		database: 'airlines'
	});

	try {
		await dbconnection.ping();
		console.log('Database connection successful.');

		const [results] = await dbconnection.execute(query, values);
		return results;
	} catch (error) {
		console.error('Error connecting to database: ', error);
		throw new Error('Error connecting to database');
	} finally {
		await dbconnection.end();
	}
}
