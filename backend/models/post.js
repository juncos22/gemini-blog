
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db.json');

// Helper function to read the database
const readDB = () => {
  const dbData = fs.readFileSync(dbPath);
  return JSON.parse(dbData);
};

// Helper function to write to the database
const writeDB = (dbData) => {
  fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));
};

const Post = {
  findAll: () => {
    const db = readDB();
    return db.posts;
  },

  findById: (id) => {
    const db = readDB();
    return db.posts.find(p => p.id === id);
  },

  create: (postData) => {
    const db = readDB();
    const newPost = {
      id: db.posts.length > 0 ? Math.max(...db.posts.map(p => p.id)) + 1 : 1,
      ...postData
    };
    db.posts.push(newPost);
    writeDB(db);
    return newPost;
  },

  update: (id, updatedData) => {
    const db = readDB();
    const index = db.posts.findIndex(p => p.id === id);
    if (index !== -1) {
      db.posts[index] = { ...db.posts[index], ...updatedData, id: id };
      writeDB(db);
      return db.posts[index];
    }
    return null;
  },

  delete: (id) => {
    const db = readDB();
    const initialLength = db.posts.length;
    db.posts = db.posts.filter(p => p.id !== id);
    if (db.posts.length < initialLength) {
      writeDB(db);
      return true;
    }
    return false;
  }
};

module.exports = Post;
