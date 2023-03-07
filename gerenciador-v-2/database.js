const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:'); // ou podemos definir um caminho para um arquivo .db

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS professores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL,
      disciplina TEXT NOT NULL
    )
  `);
  
  db.run(`
    CREATE TABLE IF NOT EXISTS alunos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL,
      curso TEXT NOT NULL
    )
  `);
  
  db.run(`
    CREATE TABLE IF NOT EXISTS turmas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      professor_id INTEGER NOT NULL,
      FOREIGN KEY(professor_id) REFERENCES professores(id)
    )
  `);
});
