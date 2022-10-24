const { model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class post extends model {}

post.init(

    {

      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true

      },

      title: {
        type: DataTypes.STRING,
        allowNull: false

      },

      post_content: {
        type: DataTypes.TEXT,
        allownull: true

      },

      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'

        }

      }

    },

    {
      sequelize,
      tablename: true,
      underscored: true,
      modelname: 'post'

    }

  );

  module.exports = post;
