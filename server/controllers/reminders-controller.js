const reminders = require('../models/reminders-model');
//const moduleCollection = require('../models/modules');

module.exports = {
    getReminders : async (req, res) => {
        //find by id
        //render to dashboard
    },
    newReminderList : async (req, res) => {
        //create new list
        //render empty list to dashboard
    },
    newReminderItem : async (req, res) => {
        //find reminder list by id
        //add item to items array & populate with info from req.params
        //render updated dashboard
    },
    deleteReminderItem : async (req, res) => {
        //find reminder list by id
        //find reminder item (by array index?)
        //delete reminder item
        //render updated dashboard
    },
    deleteReminderList : async (req, res) => {
        //find reminder list by id
        //delete reminder list
        //render updated dashboard
    }
}