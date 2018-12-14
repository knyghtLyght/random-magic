module.exports = (sequelize, DataTypes) => {
  const WeaponType = sequelize.define('WeaponType', {
    name: DataTypes.STRING
  })

  WeaponType.associate = function (models) {
    WeaponType.belongsToMany(models.Item, { through: 'Item_WeaponType' })
    WeaponType.belongsToMany(models.Effect, { through: 'Effect_WeaponType' })
  }; // eslint-disable-line

  return WeaponType
}; // eslint-disable-line
