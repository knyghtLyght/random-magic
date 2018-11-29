module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    level: DataTypes.INTEGER,
    name: DataTypes.STRING,
    class: DataTypes.STRING,
    base: DataTypes.STRING,
    rarity: DataTypes.STRING,
    effect: DataTypes.JSON,
    flavor: DataTypes.TEXT
  })

  Item.associate = function (models) {
    Item.hasMany(models.WeaponClass)
    Item.hasMany(models.Tag)
    Item.belongsToMany(models.ItemClass, { through: 'Item_Class' })
    Item.belongsToMany(models.WeaponClass, { through: 'Item_WeaponClass' })
  }; // eslint-disable-line

  return Item
}; // eslint-disable-line
