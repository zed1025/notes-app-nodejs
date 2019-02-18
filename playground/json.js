
// var obj = {
// 	name:"Amit"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));

const fs = require('fs');

var origionalNote = {
	title:"Some Title",
	body:"Some Body"
};

// var origionalNoteString = JSON.stringify(origionalNote);
// fs.writeFile('notes.json', origionalNoteString, function (err) {
// 	if (err) {
// 		console.log('Cannot open file!');
// 	}
// });

var noteString  = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof(note));
console.log(note.title);
