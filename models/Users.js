'use strict';

const Sequelize = require('sequelize');

const db = require('../database/db.js');

module.exports = db.sequelize.define(
  'Users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
      lowercase: true
    },
    first_name: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
      lowercase: true
    },
    last_name: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: Sequelize.STRING,
      required: true
    },
    currentTeam: {
      type: Sequelize.STRING
    },
    inviteCode: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,

      field: 'createdAt'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updatedAt'
    }
  },
  {
    timestamps: false
  }
);
