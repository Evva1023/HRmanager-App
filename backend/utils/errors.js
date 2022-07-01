class ValidationError extends Error {}

const handleError = (error, req, res, next) => {
   console.error(error);
   
   res.status(error instanceof ValidationError ? 400 : 500)
      .json({
        message: error instanceof ValidationError ? error.message : "Przepraszamy, spróbuj ponownie za jakiś czas",
      });
};

module.exports = {
  handleError,
  ValidationError,
};