class AppController {

  constructor (model) {
    this._model = model;
    this.create = this.create.bind(this);
    this.load = this.load.bind(this);
    this.list = this.list.bind(this);
  }

  load(req, res, next, id) {
    this._model.findById(id).select('-__v').select('-password')
      .exec()
      .then(
        obj => {
          req.dbObject = obj;
          return next();
        },
        err => next(err)
      );
  }

  get(req, res) {
    return res.json(req.dbObject);
  }

  create(req, res, next) {
    let obj = req.body;
    let object = new this._model(obj);
    object.save()
      .then(
        savedObject => {
          return res.json(savedObject);
        },
        err => next(err)
      );
  }

  update(req, res, next) {
    const obj = req.dbObject;
    Object.assign(obj, req.body);

    obj.save()
      .then(
        () => res.sendStatus(204),
        err => next(e)
      );
  }

  list(req, res, next) {
    this._model.find().select('-__v').select('-password')
      .exec()
      .then(
        markers => res.json(markers),
        err => next(err)
      );
  }

  remove(req, res, next) {
    const obj = req.dbObject;
    obj.remove()
      .then(
        () => res.sendStatus(204),
        err => next(err)
      )
  }
}

export default AppController;