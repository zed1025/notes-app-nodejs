//console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions =  {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};
var bodyOptions = {
	describe: 'Body(content) of the note',
	demand: true,
	alias: 'b'
};
const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;
var command = process.argv[2];
//console.log('Command: ' + command); 
//console.log('Process' + process.argv);
//console.log('Yargs' + argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note != undefined){
		console.log('Note Created...');
		notes.logNote(note);
	} else {
		console.log('A note with same title already exists.');
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach(note => {
		notes.logNote(note);
	});
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if(note) {
		notes.logNote(note);
	} else {
		console.log('Note not found!');
	}
} else if (command === 'remove'){
	var noteRemoved = notes.removeNote(argv.title);
	var message = (noteRemoved) ? "Note successfully removed!" : "Note not found!";
	console.log(message);
} else {
	console.log('Not recognised.');
}



























// var user = os.userInfo(); 

// console.log(user);


// fs.appendFile('greetings.txt', 'Hello ' + user['username']+'\n', function (err){
// 	if (err){
// 		console.log('Unable to write to file.');
// 	}
// });

//Using the template string
// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age} years old.\n`, function (err){
// 	if (err){
// 		console.log('Unable to write to file.');
// 	}
// });


// var res = notes.addNote();
// console.log(res);


// var adder = notes.add(5.6, 6);
// console.log(adder);

// console.log(_.isString(true));
// console.log(_.isString('Amit'));



