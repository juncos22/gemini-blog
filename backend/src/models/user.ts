import { User } from "./types";
import { readDB, writeDB } from "../helpers/db";

const UserModel = {
  findAll: (): User[] => {
    const db = readDB();
    return db.users || [];
  },

  findByEmail: (email: string): User | undefined => {
    const db = readDB();
    return (db.users || []).find((u) => u.email === email);
  },

  findById: (id: number): User | undefined => {
    const db = readDB();
    return (db.users || []).find((u) => u.id === id);
  },

  create: (userData: Omit<User, "id">): User => {
    const db = readDB();
    if (!db.users) {
      db.users = [];
    }
    const newUser: User = {
      id: db.users.length > 0 ? Math.max(...db.users.map((u) => u.id)) + 1 : 1,
      ...userData,
      password: userData.password || "",
    } as User;
    db.users.push(newUser);
    writeDB(db);
    return newUser;
  },

  update: (id: number, updatedData: Partial<Omit<User, "id">>): User | null => {
    const db = readDB();
    if (!db.users) {
      return null;
    }
    const index = db.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      db.users[index] = { ...db.users[index], ...updatedData };
      writeDB(db);
      return db.users[index];
    }
    return null;
  },

  delete: (id: number): boolean => {
    const db = readDB();
    if (!db.users) {
      return false;
    }
    const initialLength = db.users.length;
    db.users = db.users.filter((u) => u.id !== id);
    if (db.users.length < initialLength) {
      writeDB(db);
      return true;
    }
    return false;
  },
};

export default UserModel;
