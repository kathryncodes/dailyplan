const schedule = require('../models/schedule-model');
//const moduleCollection = require('../models/modules');

module.exports = {
    getSchedule : async (req, res) => {
        //find schedule by id
        //render to dashboard
    }, 
    newSchedule : async (req, res) => {
        //create new schedule
        //render to dashboard
    },
    addBlock : async (req, res) => {
        //find schedule by id 
        //push new block to blocks array
    },
    editBlock : async (req, res) => {
        //find schedule by id
        //find block (by array index? text?)
        //set text to text input
        //set duration to duration input
        //render dashboard
    }, 
    deleteBlock : async (req, res) => {
        //find schedule by id
        //find block (by array index?)
        //remove block from blocks array
        //render dashboard
    },
    deleteSchedule : async(req, res) => {
        //find schedule by id
        //delete schedule
        //render dashboard
    }
}