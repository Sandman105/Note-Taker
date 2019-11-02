// get the note data from the inputs, save it to the db and update the view
// Need to make sure I can grab the data from the table and the seeds
function currentNotes() {

    $.ajax({ url: '/api/notes', method: "GET" })
        .then(function (data) {


            console.log(data);


        });




    //Need to make some test jQuery <div> <ul> just to see if it can post the information on the page.











}

// create a function to render the list of notes and read all notes from the database

// create a function to save (post) a new note

// create a function to delete the clicked note





$(".submit").on("click", function (event) {
    event.preventDefault();

    var newNote = {
        noteTitle: $("#title").val().trim(),
        userNote: $("#user-note").val().trim(),
    }

    console.log(newNote);
    //Working submit button

    $.post('/api/notes', newNote, function (data) {
        if (data) {
            alert("Note has been updated");
        }
    })

});
