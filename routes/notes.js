const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/FC.js');
const uuid = require('../helpers/uuid');


notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for a new UX/UI tip
  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const {title, text,} = req.body;
  
    if (req.body) {
      const newTip = {
        title,
        text,
        id: uuid(),
      };
  
      readAndAppend(newTip, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

  notes.delete('/:id', (req, res) => {
    // get the current contents of the db
    readFromFile("./db/db.json").then((data) => {
      const parsedData = JSON.parse(data);
      
      // filter the db so that the note the we want to delete gets removed
      // result: db - note
      const filteredData = parsedData.filter((note) => {
        return (note.id !== req.params.id)
      })

      // overwrite the db.json file with the result
      writeToFile("./db/db.json", filteredData)
      res.json(filteredData)
    })


  })
     
  
  module.exports = notes;
  