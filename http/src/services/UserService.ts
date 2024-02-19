import axios from "axios";
import { User } from "../interfaces/User";

class UserService {

    private baseUrl: string = 'https://peticiones.online/api/users';

    constructor() { }

    async getAll(): Promise<User[]> {
        const response = await axios.get(this.baseUrl);
        return response.data.results;
    }

    async create(newUser: User): Promise<User> {
        const response = await axios.post(this.baseUrl, newUser);
        return response.data;
    }

}

export default UserService;