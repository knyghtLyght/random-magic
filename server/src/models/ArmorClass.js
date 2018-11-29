module.exports = (sequelize, DataTypes) => {
  const ArmorClass = sequelize.define('ArmorClass', {
    name: DataTypes.STRING
  })

  ArmorClass.associate = function (models) {
    ArmorClass.belongsToMany(models.Item, { through: 'Item_ArmorClass' })
    ArmorClass.belongsToMany(models.Effect, { through: 'Effect_ArmorClass' })
  }; // eslint-disable-line

  return ArmorClass
}; // eslint-disable-line
