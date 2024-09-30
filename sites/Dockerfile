# Use uma imagem base leve do Python
FROM python:3.9-slim

# Crie um diretório para os sites
RUN mkdir /sites

# Copie os sites para o diretório criado
COPY . /sites

# Defina o diretório de trabalho
WORKDIR /sites

# Exponha a porta 80
EXPOSE 1001

# Comando para iniciar o servidor HTTP embutido do Python
CMD ["python3", "-m", "http.server", "1001"]
