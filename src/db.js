import postgres from 'postgres'

const sql = postgres({ 
    host: 'localhost',
    port: 5432,
    database: 'mydb',
    username: 'postgres'
}) // will use psql environment variables

export default sql