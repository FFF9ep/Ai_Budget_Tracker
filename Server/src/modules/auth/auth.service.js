const { User} = require('../../../models');
const bcrypt = require('bcrypt');
const BadRequestError = require('../../errors/badRequestError');
const jwtService = require('./jwt.service');
const NotFoundError = require('../../errors/notFoundError');

class authService {
    constructor (){
        this.SALT_ROUNDS = 10;
    }

    async register({name, email, password, number}) {
        const existingUser = await User.findOne({where: {email}});

        if (existingUser) {
            throw new BadRequestError("Email has been exist");
        }

        const hash = await bcrypt.hash(password, this.SALT_ROUNDS);
        const newUser = await User.create({name, email, password: hash, number});
        const token = jwtService.sign({id: newUser.id, email: newUser.email});

        const userJson = newUser.toJSON();
        delete userJson.password;
        return { user: userJson, token};
    }
    
    async login({name, email, password}) {
        const user = await User.findOne({where: {email}});
        if(!user) throw new NotFoundError("Email Not Found!");

        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) throw new BadRequestError("Wrong Password!");

        const token = jwtService.sign({id: user.id, email: user.email});

        const userJson = user.toJSON();
        delete userJson.password;
        return { user: userJson, token};
    }

    async profile(){

    }
}

module.exports = new authService();
