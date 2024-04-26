module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Invalid email format",
        },
        isUnique: function (value, next) {
          User.findOne({
            where: { email: value },
            attributes: ["id"],
          })
            .then((user) => {
              if (user) {
                return next("Email already in use!");
              }
              next();
            })
            .catch((error) => next(error));
        },
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^08[0-9]{8,15}$/,
          msg: "Invalid phone number format",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, undefined],
          msg: "Password must be at least 8 characters long",
        },
        notEmpty: {
          msg: "Password is required",
        },
      },
    },
  });

  return User;
};
