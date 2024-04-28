module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          msg: "Image URL must be a valid URL",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 255],
          msg: "Name must be between 3 and 255 characters long",
        },
        notEmpty: {
          msg: "Name is required",
        },
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["Kategori 1", "Kategori 2", "Kategori 3"]],
          msg: "Invalid category",
        },
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Stock must be an integer",
        },
        min: {
          args: [0],
          msg: "Stock cannot be negative",
        },
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: "Price must be a floating-point number",
        },
        min: {
          args: [0],
          msg: "Price cannot be negative",
        },
      },
    },
  });

  return Product;
};
