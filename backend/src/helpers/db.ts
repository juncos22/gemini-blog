
import fs from 'fs';
import path from 'path';
import { Post, User, Profile } from '../models/types';

const dbPath = path.join(__dirname, '../../db.json');

interface Database {
  posts: Post[];
  users: User[];
  profiles: Profile[];
}

export const readDB = (): Database => {
  const dbData = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(dbData) as Database;
};

export const writeDB = (dbData: Database) => {
  fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));
};
