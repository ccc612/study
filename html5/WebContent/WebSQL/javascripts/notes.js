var db = null;

connectToDB = function() {
   db = window.openDatabase('awesome_notes', '1.0',
                                   'AwesomeNotes Database',
                                   1024 * 1024 * 3);
};

createNotesTable = function() {
	db.transaction(function(tx) {
		tx.executeSql(
			'CREATE TABLE notes (id INTEGER PRIMARY KEY, \
			title TEXT, note TEXT)', [],
			function() {
				alert('노트 테이블이 잘 만들어졌습니다!');
			},
			function(tx, error) {
				alert(error.message);
			}
		);
	});
};

insertNote = function(title, note) {
	db.transaction(function(tx){
		tx.executeSql('INSERT INTO notes (title, note) VALUES (?, ?)', 
			[title.value, note.value],
			function(tx, result) { 
				var id = result.insertId;          
				alert('Record ' + id+ ' saved!');
          
				title.setAttribute('data-id', result.insertId );
				addToNotesList(id, title.value);
				document.querySelector('#delete_button').style.display = 'inline';         
			},
			function() { 
				alert('노트를 삽입하지 못했습니다.'); 
			}
		);
	});
};

updateNote = function(title, note) {
	var id = title.getAttribute('data-id');
	db.transaction(function(tx){
		tx.executeSql('UPDATE notes set title = ?, note = ? where id = ?',
			[title.value, note.value, id],
			function(tx, result) { 
				alert('Record ' + id + ' updated!');
				document.querySelector('#notes>li[data-id="' + id + '"]').innerHTML = title.value;
			},
			function() { 
				alert('노트를 갱신하지 못했습니다!');
			}
		);
	});
};

deleteNote = function(title) {
	var id = title.getAttribute('data-id');
	db.transaction(function(tx) {
		tx.executeSql('DELETE from notes where id = ?', [id],
			function(tx, result) { 
				alert('Record ' + id + ' deleted!');
				var removeLi = document.querySelector('#notes>li[data-id="' + id + '"]');
				removeLi.parentNode.removeChild(removeLi);
			},
			function() { 
				alert('노트를 삭제하지 못했습니다!');
			}
		);
	});
};

fetchNotes = function() {
	db.transaction(function(tx) {
		tx.executeSql('SELECT id, title, note FROM notes', [],
			function(SQLTransaction, data) {
				for(var i = 0; i < data.rows.length; ++i) {
					var row = data.rows.item(i);
					var id = row['id'];
					var title = row['title'];

					addToNotesList(id, title);
				}
			}
		);
	});
};

addToNotesList = function(id, title) {
	var notes = document.querySelector('#notes');
	var item = document.createElement('li');
	item.setAttribute('data-id', id);
	item.innerHTML = title;               
	notes.appendChild(item);
};

loadNote = function(id) {
	db.transaction(function(tx) {
		tx.executeSql('SELECT id, title, note FROM notes where id = ?', [id],
			function(SQLTransaction, data) {
				var row = data.rows.item(0);
				var title = document.querySelector('#title');
				var note = document.querySelector('#note');

				title.value = row['title'];
				title.setAttribute('data-id', row['id']);
				note.value = row['note'];
				document.querySelector('#delete_button').style.display = 'inline';
			}
		);
	});
};

newNote = function() {
	document.querySelector('#delete_button').style.display = 'none';
	
	var title = document.querySelector('#title');
	title.removeAttribute('data-id');
	title.value = '';
	
	document.querySelector('#note').value = '';
};

window.onload = function() {
	connectToDB();
	createNotesTable();
	fetchNotes();

	document.querySelector('#save_button').onclick = function(event) {
		event.preventDefault();
		var title = document.querySelector('#title');
		var note = document.querySelector('#note');
    
		if(title.getAttribute('data-id')) {
			updateNote(title, note);
		}
		else {
			insertNote(title, note);
		}
	};

	document.querySelector('#delete_button').onclick = function(event) {
		event.preventDefault();
		var title = document.querySelector('#title');
		deleteNote(title);
    
		newNote();
	};

	document.querySelector('#notes').onclick = function(event) {
		if(event.target.constructor === document.createElement('li').constructor) {
			loadNote(event.target.getAttribute('data-id'));
		}    
	};
  
	document.querySelector('#new_button').onclick = function(event) {
		event.preventDefault();
		newNote();
	};
  
	newNote();
};















