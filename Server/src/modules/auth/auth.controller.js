const authService = require('./auth.service');

class authController {
    async register(req, res, next) {
        try{
            const data = req.body;
            const result = await authService.register(data);
            res.status(201).json({
                success: true,
                message: "Register Success",
                data: result
            });
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try{
            const data = req.body;
            const result = await authService.login(data);
            res.status(200).json({
                success: true,
                message: "Login Success",
                data: result
            });
        } catch (error) {
            next(error)
        }
    }
    
    async profile(req, res, next) {
        try{
    
            res.status(200).json({
                success: true,
                message: "Login Success",
            });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new authController();