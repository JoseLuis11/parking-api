module.exports = {
  up: async (queryInterface, DataTypes) => {
    const ParkingTypeHelper = (await import('../../src/enums/ParkingType/ParkingTypeHelper.js')).default;

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
        availableSpots: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        contact: {
          allowNull: true,
          type: DataTypes.STRING
        },
        parkingType: {
          allowNull: false,
          type: DataTypes.ENUM(ParkingTypeHelper.getTypes())
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: true,
          type: DataTypes.DATE
        }
      },
      {
        charset: 'utf8'
      }
    )
  },
  down: queryInterface => queryInterface.dropTable('parking_lots')
}
