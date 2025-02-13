// importar biblioteca
const express = require("express");
// iniciando servidor || criando um aplicativo express 
const app = express();
// configurando para usar json
app.use(express.json());

app.get("/healthcheck", (request, response) => {
    return response.json({
        msg: "estamos vivos",
        status: true
    });
});

app.post("/usuario", (req, res) => {
    // request, body
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({
            msg: "campos preenchidos"
        })
    }

    console.log({
        nome,
        email,
        senha
    });

    return res.status(200).json({
        msg: "usuario criado com sucesso"
    });
});

app.put("/usuario/:id", (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    if (!id || !nome || !email || !senha) {
        return res.status(400).json({
            msg: "campos vazios"
        })
    }

   console.log("o id é:", + id );
   console.log({
    nome, email, senha
   });

   return res.status(200).json({msg: "usuario atualizado com sucesso"});
});

app.listen(8080, () => {
    console.log("estamos on!!");
});