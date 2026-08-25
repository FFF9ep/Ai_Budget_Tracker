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

    async getById(req, res, next){
         try {
            const user = await UserService.getById();
            if(!user){
                throw new NotFoundError('No users found');
            }
            res.json({  
                        success: true, 
                        data: user, 
                        message: 'Users retrieved successfully'
                    });
        } catch(err) {
            next(err)
        }
    }

    async create(req, res, next){
         try {
            const user = await UserService.create(req.body);
            res.status(201).json({
                success: true,
                data: user,
                message: 'User created successfully'
            });
        } catch(err) {
            next(err)
        }
    }

    async update(req, res, next){
         try {
            const user = await UserService.update(req.params.id, req.body);
            if(!user) throw new NotFoundError('User not found');
            res.status(200).json({
                success: true,
                data: user,
                message: 'User updated successfully'
            });
        } catch(err) {
            next(err)
        }
    }

    async delete(req, res, next){
         try {
            const user = await UserService.delete(req.params.id);
            if(!user) throw new NotFoundError('User not found');
            res.status(200).json({
                success: true,
                data: user,
                message: 'User deleted successfully'
            });
        } catch(err) {
            next(err)
        }
    }
}

module.exports = new UserController();