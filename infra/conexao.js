import pkg from 'pg'
const { Client } = pkg;


const conexao = new Client({
    host: 'postgres',
    port: '5432',
    user: 'postgres',
    password: 'postgres',
    database: 'bdcopa'
})

export default conexao