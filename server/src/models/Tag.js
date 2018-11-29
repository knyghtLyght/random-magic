module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', { name: DataTypes.STRING })

  return Tag
}; // eslint-disable-line
