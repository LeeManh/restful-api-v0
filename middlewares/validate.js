export const checkProductData = async (req, res, next) => {
  const errors = [];
  console.log(req.body);

  for (const key in req.body) {
    if (!req.body[key]) {
      errors.push(`Please add product ${key} value.`);
    }
  }

  if (errors.length > 0) return res.status(401).json({ msg: errors });

  next();
};
