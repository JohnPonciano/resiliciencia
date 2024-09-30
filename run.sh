#!/bin/bash

# Nome da imagem e do container
IMAGE_NAME="resiliencia-blog"
CONTAINER_NAME="resiliencia-blog"

# Verifica se o container já está rodando
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "O container $CONTAINER_NAME já está rodando."
    exit 0
fi

# Verifica se o container existe (mas está parado)
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Removendo container parado $CONTAINER_NAME."
    docker rm $CONTAINER_NAME
fi

# Construindo a imagem a partir do Dockerfile
echo "Construindo a imagem $IMAGE_NAME..."
docker build -t $IMAGE_NAME .

# Executa o container com a política de reinício (resiliência)
echo "Iniciando o container $CONTAINER_NAME..."
docker run -d -p 1001:1001 --name $CONTAINER_NAME --restart unless-stopped $IMAGE_NAME

# Verifica o status do container
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Container $CONTAINER_NAME iniciado com sucesso. Site rodando na porta 1001 e API na porta 1002."
else
    echo "Erro ao iniciar o container $CONTAINER_NAME."
    exit 1
fi
