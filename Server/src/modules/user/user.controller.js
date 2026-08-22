const UserService = require('./user.service');
const NotFoundError = require('../../errors/notFoundError');

class UserController {
    async getAll(req, res, next){
        try {
            const users = await UserService.getAll();
            if(users.length === 0){
                throw new NotFoundError('No users found');
            }
            res.json({  
                        success: true, 
                        data: users, 
                        message: 'Users retrieved successfully'
                    });
        } catch(err) {
            next(err)
        }
    }
}

module.exports = new UserController();