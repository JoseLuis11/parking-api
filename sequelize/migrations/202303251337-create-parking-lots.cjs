module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('parking_lots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      spots: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      contact: {
        allowNull: true,
        type: DataTypes.STRING
      },
      parkingType: {
        allowNull: false,
        type: DataTypes.STRING
      }
      },
      {
        charset: 'utf8'
      }
    )
  },
  down: queryInterface => queryInterface.dropTable('parking-lots')
}
