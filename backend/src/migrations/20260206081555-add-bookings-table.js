'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('bookings', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        schedule_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'schedules',
            key: 'id'
          }
        },
        seats_no: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        status: {
          type: Sequelize.ENUM('confirmed', 'cancelled'),
          allowNull: false,
          defaultValue: 'confirmed'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
