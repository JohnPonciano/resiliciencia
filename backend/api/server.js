const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 1002;

// Usando CORS para permitir acessos entre origens diferentes
app.use(cors());

// Middleware para permitir parsing de JSON em requisições POST
app.use(express.json());

// Função para carregar os dados do arquivo JSON de perguntas e respostas
const loadData = () => {
    try {
        const data = fs.readFileSync('results.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading from the results file:', error);
        return { questions: [], results: {} }; // Fallback caso ainda não exista o arquivo
    }
};

// Função para salvar dados no arquivo JSON
const saveData = (data) => {
    try {
        fs.writeFileSync('results.json', JSON.stringify(data, null, 2), 'utf8');
        console.log('Data saved successfully');
    } catch (error) {
        console.error('Error writing to the results file:', error);
    }
};

// Endpoint para obter perguntas
app.get('/questions', (req, res) => {
    const data = loadData();
    res.json({ questions: data.questions });
});

// Endpoint para salvar respostas completas ao final do quiz
app.post('/save_answers', (req, res) => {
    const results = req.body; // Recebe o objeto completo dos resultados no request body
    if (!results || typeof results !== 'object') {
        return res.status(400).send({ message: 'Invalid input data' });
    }

    const data = loadData();  // Carrega o arquivo atual com o banco de dados (perguntas e resultados)

    // Itera sobre os resultados enviados e atualiza o ranking de cada pergunta correspondente
    Object.entries(results).forEach(([questionIndex, answer]) => {
        if (!data.results.hasOwnProperty(questionIndex)) {
            data.results[questionIndex] = { a: 0, b: 0 }; // Cria a entrada se não existir para essa pergunta
        }
        if (answer.a) data.results[questionIndex].a += answer.a;
        if (answer.b) data.results[questionIndex].b += answer.b;
    });

    // Salva os dados atualizados no arquivo
    saveData(data);

    res.send({ message: 'Answers saved successfully!' });
});

// Endpoint para obter resultados (apenas como referência - utilizado anteriormente)
app.get('/results', (req, res) => {
    const data = loadData();
    res.json(data.results);
});

// Inicializando o servidor na porta especificada
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});