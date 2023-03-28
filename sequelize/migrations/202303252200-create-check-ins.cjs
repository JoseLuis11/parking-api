module.exports = {
  up: async (queryInterface, DataTypes) => {
    const UserTypeHelper = (await import('../../src/enums/UserType/UserTypeHelper.js')).default;

    return queryInterface.createTable('check_ins', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        parkingId: {
          type: DataTypes.INTEGER,
          references: {
            key: 'id',
            model: 'parking_lots'
          },
          allowNull: false
        },
        userType: {
          allowNull: false,
          type: DataTypes.ENUM(UserTypeHelper.getTypes()),
        },
        checkedInAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: true,
          type: DataTypes.DATE
        },
        checkedOutAt: {
          allowNull: true,
          type: DataTypes.DATE
        }
      },
      {
        charset: 'utf8'
      }
    )
  },
  down: queryInterface => queryInterface.dropTable('check_ins')
}
