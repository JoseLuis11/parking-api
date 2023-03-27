module.exports = {
  up: async (queryInterface, DataTypes) => {
    const helper = await import('../../build/enums/ParkingType/ParkingTypeHelper.js');
    const { getTypes: getParkingTypes } = helper.default;

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
          type: DataTypes.ENUM(getParkingTypes())
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
