module.exports = (sequelize, DataTypes) => {
  const Effect = sequelize.define('Effect', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  })

  Effect.associate = function (models) {
    Effect.belongsToMany(models.Item, { through: 'Item_Effect' })
  }; // eslint-disable-line

  return Effect
}; // eslint-disable-line
