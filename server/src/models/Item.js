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

  return Item
}; // eslint-disable-line
