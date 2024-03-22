import { db } from "../db.js";

export const getContatos = (_, res) => {
  const q = "SELECT * FROM contatos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addContato = (req, res) => {
  const q =
    "INSERT INTO contato(`nome`, `idade`, `fone`, `fone2`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.idade,
    req.body.fone,
    req.body.fone2,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Contato criado com sucesso.");
  });
};

export const updateContato = (req, res) => {
  const q =
    "UPDATE contatos SET `nome` = ?, `idade` = ?, `fone` = ?, `fone2` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.idade,
    req.body.fone,
    req.body.fone2,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Contato atualizado com sucesso.");
  });
};

export const deleteContato = (req, res) => {
  const q = "DELETE FROM contato WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Contato deletado com sucesso.");
  });
};
