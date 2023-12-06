const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Child extends Model {}

Child.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'child',
    }
  );
  
  module.exports = Child;