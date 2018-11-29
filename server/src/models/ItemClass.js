module.exports = (sequelize, DataTypes) => {
  const ItemClass = sequelize.define('ItemClass', { name: DataTypes.STRING })

  ItemClass.associate = function (models) {
    ItemClass.belongsToMany(models.Item, { through: 'Item_Class' })
  }; // eslint-disable-line

  return ItemClass
}; // eslint-disable-line
