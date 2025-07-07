import { Profile } from './types';
import { readDB, writeDB } from '../helpers/db';

const ProfileModel = {
  findAll: (): Profile[] => {
    const db = readDB();
    return db.profiles;
  },

  findById: (id: number): Profile | undefined => {
    const db = readDB();
    return db.profiles.find(p => p.id === id);
  },

  create: (profileData: Omit<Profile, 'id'>): Profile => {
    const db = readDB();
    const newProfile: Profile = {
      id: db.profiles.length > 0 ? Math.max(...db.profiles.map(p => p.id)) + 1 : 1,
      ...profileData,
    };
    db.profiles.push(newProfile);
    writeDB(db);
    return newProfile;
  },

  update: (id: number, updatedData: Partial<Omit<Profile, 'id'>>): Profile | null => {
    const db = readDB();
    const index = db.profiles.findIndex(p => p.id === id);
    if (index !== -1) {
      db.profiles[index] = { ...db.profiles[index], ...updatedData };
      writeDB(db);
      return db.profiles[index];
    }
    return null;
  },

  delete: (id: number): boolean => {
    const db = readDB();
    const initialLength = db.profiles.length;
    db.profiles = db.profiles.filter(p => p.id !== id);
    if (db.profiles.length < initialLength) {
      writeDB(db);
      return true;
    }
    return false;
  }
};

export default ProfileModel;
