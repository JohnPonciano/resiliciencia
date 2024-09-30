# Use uma imagem base leve do Node.js
FROM node:14-slim

# Crie um diretório para a API
WORKDIR /usr/src/app

# Copie o arquivo package.json e instale as dependências
COPY api/package*.json ./
RUN npm install

# Copie os arquivos da API
COPY api/ .

# Exponha a porta 1002
EXPOSE 1002

# Comando para iniciar o servidor
CMD ["node", "server.js"]
