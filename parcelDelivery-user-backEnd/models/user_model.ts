import connection from "../dataBase";

const user = {
    // Get all users
    getUsers: async () => {
        try {
            const query = `SELECT * FROM user`;
            const result = await connection.promise().query(query);
            return result
        }
        catch (e: any) {
            console.error(e.message);
            return `Error from user model: ${e.message}`;
        }
    },
    // Get user by id
    getUser: async (userid: number) => {
        try {
            const query = `SELECT * FROM user WHERE id_user = ?`;
            const result = await connection.promise().query(query, [userid]);
            return result[0] as any;
        }
        catch (e: any) {
            console.error(e.message);
            return `Error from user model: ${e.message}`;
        }
    },
    // Create user
    createUser: async (
        user_name:string, 
        password:string, 
        first_name:string, 
        last_name:string, 
        telephone:string, 
        email:string, 
        street_address:string, 
        postal_code:string, 
        city:string) => {
        try {
            const query = `INSERT INTO user (
                user_name, password, first_name, last_name, telephone, 
                email, street_address, postal_code, city) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?)`;
            const result = await connection.promise().query(query, [
                user_name, password, first_name, last_name, telephone, email, street_address, postal_code, city]);
            return result[0] as any;
        }
        catch (e: any) {
            console.error(e.message);
            return `Error from user model: ${e.message}`;
        }
    },
    // Update user
    updateUser: async (
        userid: number, 
        password:string, 
        first_name:string, 
        last_name:string, 
        telephone:string, 
        email:string, 
        street_address:string, 
        postal_code:string, 
        city:string) => {
        try {
            const query = `UPDATE user SET first_name = ?, last_name=?, email = ?, password = ?, telephone = ?, Street_address = ? WHERE id_user = ?`;
            const result = await connection.promise().query(query, [ password, first_name, last_name, telephone, email, street_address, postal_code, city, userid]);
            return result[0] as any;
        }
        catch (e: any) {
            console.error(e.message);
            return `Error from user model: ${e.message}`;
        }
    },
    // Delete user
    deleteUser: async (userid: number) => {
        try {
            const query = `DELETE FROM user WHERE id_user = ?`;
            const result = await connection.promise().query(query, [userid]);
            return result[0] as any;
        }
        catch (e: any) {
            console.error(e.message);
            return `Error from user model: ${e.message}`;
        }
    },

};

export default user;

