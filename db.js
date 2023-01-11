import postgres from 'postgres'

const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  username: 'postgres'
}) // will use psql environment variables

export async function getUsersOver() {
  const city = await sql`
      select
        city
      from weather
    `
  console.log(city);
  return city
}
await getUsersOver()
