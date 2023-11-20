import connection from "../dataBase";
import { RowDataPacket } from "mysql2";

interface User {
    id_user: number;
    user_name: string;
    password: string;
}


const login_model = {

async checkifUserExists(userName: string){
    const query = `SELECT * FROM user WHERE user_name = ?`;	
    const [rows] = await connection.promise().query(query, [userName]);
    if (!Array.isArray(rows) || rows.length === 0) {
        return null;
    }
    return rows[0] as User; 
},

async getUserPwd(userName: any) {
    const query = `SELECT password FROM user WHERE user_name = ?`;
    const [rows] = await connection.promise().query(query, [userName]);
    if (!Array.isArray(rows) || rows.length === 0) {
        return null;
    }
    const user = rows[0] as { password: string }; // Cast to the expected type
    return user.password;
},

async getLoginUser(userName: string, password: string) {
    const query = `SELECT * FROM user WHERE user_name = ? AND password = ?`;
    const result = await connection.promise().query(query, [userName, password]);
    return result[0];
} 
};

export default login_model;