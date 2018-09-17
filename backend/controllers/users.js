import AppController from './app'
import config from '../config'

class UserController extends AppController{

  constructor(model) {
    super(model);

    this.createMainUser = this.createMainUser.bind(this);
  }

  createMainUser (req, res, next) {
    this._model.findOne({username: config.username})
    .exec()
    .then(
      user => {
        if(!user) {
          req.body.username = config.username;
          req.body.password = config.password;
          this.create(req, res, next);
        } else next();
      },
      err => console.log(err)
    );
  }

}

export default UserController;