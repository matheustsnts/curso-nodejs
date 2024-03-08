import app from './src/app.js'

import conexao from './infra/conexao.js'

const port = 3000

// Fazer a conexao
conexao.connect()
    .then(() => {
        console.log('Conexão com o PostgreSQL estabelecida!');
        // Inicie o servidor da aplicação
        app.listen(port, () => {
            console.log(`Aplicação ouvindo na porta ${port}`);
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar-se ao PostgreSQL:', err);
    });

