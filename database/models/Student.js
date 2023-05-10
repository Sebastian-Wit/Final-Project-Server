/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageurl: {
    type: Sequelize.STRING,
    defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
  },

  gpa: {
    type: Sequelize.DECIMAL(3, 2),
    defaultValue: 0.0,
    allowNull: false,
    validate: {
      min: 0,
      max: 4
    }
  }
});

// Export the student model
module.exports = Student;