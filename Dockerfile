# Use a imagem base do Node.js 20.11 no Alpine
FROM node:20.11-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
# COPY package*.json ./

# # Instale as dependências
# RUN npm install

#  Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# # Exponha a porta 3000 (ajuste conforme necessário)
# EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "run", "dev"]
