const { model, datatypes } = require('sequelize');

const sequelize = require('../config/connection');

const bcrypt = require('bcrypt');

class user extends model {

    checkpassword(loginPw) {
        return bcrypt.compareSync(), this.password);

    }

}


user.init(
    {
     
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
      

        username: {
          type: DataTypes.STRING,
          allowNull: false
        },

        twitter: {
            type: DataTypes.STRING,
            allowNull: true
        },

        github: {
            type: DataTypes.STRING,
            allowNull: true
        },


        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: 

          {

            isemail: true

          }

        },
    
        password: {
          type: datatypes.STRING,
          allowNull: false,

          validate: {

            len: [2]

          }

        }

      },

  {
      hooks: {
 
        
        async beforecreate(newuserdata) {
            newuserdata.password = await bcrypt.hash(newuserdata.password, 10);
            return newuserdata;

        },
     
        
        async beforeUpdate(updatedUserData) {
            updateduserdata.password = await bcrypt.hash(updatedUserData.password, 10);
            return updateduserdata;

        }

      },


    sequelize,
    timestamps: false,
    tablename: true,
    underscored: true,
    modelname: 'user'

  }

);

module.exports = user;