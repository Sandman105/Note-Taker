// create a function to render the list of notes and read all notes from the database, need to make sure I can grab the data from the table and the seeds. Confused about the first line of code.
var noteList = $(".list-container .list-group");

function getCurrentDbNotes() {

    $.ajax({
        url: '/api/notes',
        method: "GET"
    })
        .then(function (noteData) {
            displayCurrentDbNotes(noteData);
            console.log(noteData);


        });

}

getCurrentDbNotes()

function displayCurrentDbNotes(notes) {

    var allNotes = [];

    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        console.log("Test" + note);

        var list = $("<li class='list-group-item' id='" + note.id + "'>").append(note);
        console.log(list);
        var titleDiv = $("<div>");
        var titleSpan = $("<span class='font-weight-bold'>").text(note.title);
        var delButton = $("<i class='fas fa-trash-alt float-right text-danger delete-note'id='" + note.id + "'>");
        var notePara = $("<p class='mt-2'>").text(note.body);



        titleDiv.append(titleSpan, delButton);
        list.prepend(titleDiv, notePara);
        allNotes.push(list);


    }
    noteList.append(allNotes);

}
// get the note data from the inputs, save it to the db and update the view

// create a function to save (post) a new note

// create a function to delete the clicked note

$(".save-note").on("click", function (event) {
    event.preventDefault();

    var newNote = {
        title: $("#title").val().trim(),
        body: $("#user-note").val().trim(),
    }

    console.log(newNote);
    //Working submit button

    $.ajax({
        url: '/api/notes',
        data: newNote,
        method: "POST"
    }).then(function (data) {
        location.reload();
        console.log(data);
        if (data) {
            alert("Note has been updated");
        }
    });

});

function deleteCurrentDbNotes () {
    
    console.log(this.id);
    var note = $(this).parents(".list-group-item").data();
    console.log(note);
    
    $.ajax({
      url: '/api/notes/' + this.id,
      method: "DELETE"
    }).then(function() {
      location.reload();
    });



}
noteList.on("click", ".delete-note", deleteCurrentDbNotes);