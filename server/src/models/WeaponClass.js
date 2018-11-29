module.exports = (sequelize, DataTypes) => {
  const WeaponClass = sequelize.define('WeaponClass', {
    name: DataTypes.STRING
  })

  WeaponClass.associate = function (models) {
    WeaponClass.belongsToMany(models.Item, { through: 'Item_WeaponClass' })
    WeaponClass.belongsToMany(models.Effect, { through: 'Effect_WeaponClass' })
  }; // eslint-disable-line

  return WeaponClass
}; // eslint-disable-line
