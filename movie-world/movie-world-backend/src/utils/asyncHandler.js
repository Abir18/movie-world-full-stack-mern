export const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    requestHandler(req, res, next);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message
    });
  }
};
