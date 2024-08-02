"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const db_1 = __importDefault(require("../config/db"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.default.query('SELECT * FROM users');
        res.json(rows);
    }
    catch (error) {
        res.status(500).send('Server error');
    }
});
exports.getAll = getAll;
// export const getUserById = async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   try {
//     const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
//     if (rows.length > 0) {
//       res.json(rows[0]);
//     } else {
//       res.status(404).send('User not found');
//     }
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };
// export const createUser = async (req: Request, res: Response) => {
//   const newUser: User = req.body;
//   try {
//     const [result] = await pool.query('INSERT INTO users SET ?', [newUser]);
//     res.status(201).json({ id: (result as any).insertId, ...newUser });
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };
