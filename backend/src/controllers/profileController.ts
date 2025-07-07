import { Request, Response } from "express";
import ProfileModel from "../models/profile";
import { AuthRequest } from "../middleware/authMiddleware";

export const getAllProfiles = (req: Request, res: Response) => {
  const profiles = ProfileModel.findAll();
  res.json(profiles);
};

export const getProfileById = (req: Request, res: Response) => {
  const profile = ProfileModel.findById(parseInt(req.params.id));
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send("Profile not found");
  }
};

export const createProfile = (req: AuthRequest, res: Response) => {
  const { bio } = req.body;
  const userId = req.user?.id; // Assuming the profile is for the authenticated user
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const newProfile = ProfileModel.create({ bio, userId });
  res.status(201).json(newProfile);
};

export const updateProfile = (req: AuthRequest, res: Response) => {
  const updatedProfile = ProfileModel.update(parseInt(req.params.id), req.body);
  if (updatedProfile) {
    res.json(updatedProfile);
  } else {
    res.status(404).send("Profile not found");
  }
};

export const deleteProfile = (req: AuthRequest, res: Response) => {
  const deleted = ProfileModel.delete(parseInt(req.params.id));
  if (deleted) {
    res.status(204).send(); // No Content
  } else {
    res.status(404).send("Profile not found");
  }
};
