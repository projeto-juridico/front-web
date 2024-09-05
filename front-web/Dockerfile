# Use uma imagem Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação para o container
COPY . .

# Compila o projeto para produção
RUN npm run build

# Servidor HTTP para servir a aplicação estática
# Instala o pacote 'serve'
RUN npm install -g serve

# Expõe a porta 8080
EXPOSE 8080

# Comando para rodar a aplicação na porta 8080
CMD ["serve", "-s", "build", "-l", "8080"]
