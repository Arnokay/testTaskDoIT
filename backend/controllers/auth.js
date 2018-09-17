import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/user'

class AuthController {

  authenticate(req, res, next) {
    User.findOne({
      username: req.body.username
    })
      .exec()
      .then(
        user => {
          if (!user) return next();
          user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return next(err);
            if (isMatch) {
              req.user = user;
              console.log("3 " + req.user);
              next();
            } else {
              return next();
            }
          });
        },
        err => next(err)
      );
  }

  generateToken(req, res, next) {
    if (!req.user) return next();

    const jwtPayload = {
      id: req.user._id
    };

    const jwtData = {
      expiresIn: config.jwtDuration
    };

    const secret = config.jwtSecret;
    req.token = jwt.sign(jwtPayload, secret, jwtData);

    next();
  }

  respondJWT(req, res) {
    if (!req.user){
      res.status(401).json({
        error: 'This user does not exist.'
      });
    } else {
      res.status(200).json({
        jwt: req.token
      });
    }
  }

}

export default AuthController;