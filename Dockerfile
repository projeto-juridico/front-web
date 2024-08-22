# Use uma imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que o aplicativo React vai rodar
EXPOSE 8080

# Comando para iniciar o aplicativo
CMD ["npm", "start"]