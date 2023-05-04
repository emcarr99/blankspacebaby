const fs = require("fs");
const util = require("util");

const readNotes = util.promisify(fs.readFile);

// convert JSON into string 
const writeNote = (destination, content) => {
  fs.writeFile(destination, JSON.stringify(content, null, 2), (err) => err ? console.log(err) : console.log('success!')
  );
};

const readAndWrite = (content, file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if(err) {
      console.error(err);
    } else {
      const parseData = JSON.parse(data);

      parseData.push(content);

      writeNote(file, parseData);
    }
  })
};


module.exports = {readNotes, writeNote, readAndWrite};