//Tools
import jwt from "jsonwebtoken";
import privateKey from "../middlewares/auth/key";


//Modele & bdd
import { User, userCreationAttributes } from "../models/user";
class AuthController {

    async signin(userData: userCreationAttributes) {
        const user = await User.findOne({
            where: { mail: userData.mail },
        });
        console.log(userData.password)
        console.log(user?.password)
        if(userData.password != user?.password){
            return
        }

        const token = jwt.sign({ userId: user!.id }, privateKey, {
            expiresIn: "1h",
        });
        return {
            id: user!.id,
            token,
        };
    }

    
}

export default new AuthController();
