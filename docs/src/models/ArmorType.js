module.exports = (sequelize, DataTypes) => {
  const ArmorType = sequelize.define('ArmorType', {
    name: DataTypes.STRING
  })

  ArmorType.associate = function (models) {
    ArmorType.belongsToMany(models.Item, { through: 'Item_ArmorType' })
    ArmorType.belongsToMany(models.Effect, { through: 'Effect_ArmorType' })
  }; // eslint-disable-line

  return ArmorType
}; // eslint-disable-line
