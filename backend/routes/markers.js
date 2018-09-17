import {Router} from 'express'
import validate from 'express-validation'

import MarkerController from '../controllers/markers'
import Marker from '../models/marker'
import auth from '../config/jwt'
import validation from './validation/markers'

const router = Router();
const markerCtrl = new MarkerController(Marker);

router.route('/')
  .get(auth, markerCtrl.userMarkers)
  .put(auth, markerCtrl.overwriteMarkers)
  .post([auth, validate(validation.createMarker)], markerCtrl.create);

export default router;