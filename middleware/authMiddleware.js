


const authMiddleware = (req, res, next) => {
  try {
    if(req.user) {
        next()
    } else {
        throw new Error("Login required")
    }
  } catch (error) {
      next(error)
  }
};


module.exports = authMiddleware;