const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./students.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message)
  } else {
    console.log('Connected to database')
  }
})

db.serialize(() => {
  // SQLite doesn't have a DateTime type, storing as strings
  db.run(`CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    check_in_time TEXT NOT NULL
  )`)
  
  db.run(`
    INSERT INTO students (first_name, last_name, check_in_time) VALUES (?, ?, ?)`,
    ['Altay', 'Hodoglugil', new Date().toDateString()]
  )

  db.run(`
    INSERT INTO students (first_name, last_name, check_in_time) VALUES (?, ?, ?)`,
    ['Stephen', 'Curry', new Date().toDateString()]
  )

  db.run(`
    INSERT INTO students (first_name, last_name, check_in_time) VALUES (?, ?, ?)`,
    ['Lebron', 'James', new Date().toDateString()]
  )


});