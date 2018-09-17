import AppController from './app'

class MarkerController extends AppController{

  constructor(model) {
    super(model);

    this.userMarkers = this.userMarkers.bind(this);
    this.overwriteMarkers = this.overwriteMarkers.bind(this);
  }

  userMarkers(req, res, next) {
    this._model.find({user: req.user.id}).select('-__v').select('-user').select('-_id')
      .exec()
      .then(
        markers => {
          res.json(markers)
        },
            err => next(err));

  }

  overwriteMarkers(req, res, next) {
    this._model.deleteMany({user: req.user.id})
      .then(
        () => {
          return this._model.insertMany(req.body.markers.map(marker => ({
            user: req.user.id,
            lat: marker.lat,
            lng: marker.lng
          })));
        }
      )
      .then(
        () => res.sendStatus(204),
      )
      .catch(err => next(err));
  }

}

export default MarkerController;