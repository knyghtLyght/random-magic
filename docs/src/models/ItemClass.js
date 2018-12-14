module.exports = (sequelize, DataTypes) => {
  const ItemClass = sequelize.define('ItemClass', { name: DataTypes.STRING })

  return ItemClass
}; // eslint-disable-line
