// MIDDLEWARES

//AUTH
function authenticated(joiSchema) {
  return (req, res, next) => {
    const autenticateToken = joiSchema.validate(req.headers);
    if (!autenticateToken.error) return next();
    res.status(400).json(autenticateToken.error.message);
  };
}
//MODEL EXIST

function ifmodelexist(Model) {
  return (req, res, next) => {
    const exist = Model.validate(req.params.id);
    if (!exist.error) return next();
    res.status(400).json(exist.error.message);
  };
}
//LOGOUT USER

function validate(joiSchema) {
  return (req, res, next) => {
    const validation = joiSchema.validate(req.body);
    if (!validation.error) return next();
    res.status(400).json(validation.error.message);
  };
}
module.exports = { authenticated, validate, ifmodelexist };
