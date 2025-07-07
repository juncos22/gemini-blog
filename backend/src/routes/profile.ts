
import { Router } from 'express';
import * as profileController from '../controllers/profileController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

/**
 * @swagger
 * /profiles:
 *   get:
 *     summary: Returns the list of all the profiles
 *     responses:
 *       200:
 *         description: The list of the profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profile'
 */
router.get('/', profileController.getAllProfiles);

/**
 * @swagger
 * /profiles/{id}:
 *   get:
 *     summary: Get the profile by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The profile id
 *     responses:
 *       200:
 *         description: The profile description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: The profile was not found
 */
router.get('/:id', profileController.getProfileById);

/**
 * @swagger
 * /profiles:
 *   post:
 *     summary: Create a new profile
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfileInput'
 *     responses:
 *       201:
 *         description: The profile was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       500:
 *         description: Some server error
 *       401:
 *         description: Unauthorized
 */
router.post('/', authMiddleware, profileController.createProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   put:
 *     summary: Update the profile by the id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The profile id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfileInput'
 *     responses:
 *       200:
 *         description: The profile was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: The profile was not found
 *       500:
 *         description: Some error happened
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', authMiddleware, profileController.updateProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   delete:
 *     summary: Remove the profile by id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The profile id
 *     responses:
 *       204:
 *         description: The profile was deleted
 *       404:
 *         description: The profile was not found
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', authMiddleware, profileController.deleteProfile);

export default router;
