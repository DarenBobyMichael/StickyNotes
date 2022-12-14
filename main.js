const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-notes");

getNotes().forEach(notes=>{
    const noteElement = createNoteElement(note.id,note.content);
    notesContainer.insertBefore(noteElement,addNoteButton);
});

addNoteButton.addEventListener("click",()=>addNote());


function getNotes(){
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");

}

function saveNotes(notes){
    localStorage.getItem("stickynotes-notes",JSON.stringify(notes));
}

function createNoteElement(id,content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.value=content;
    element.placeholder="Empty sticky note";
    
    element.addEventListener("change",()=>{
        updateNote(id,element.value);
    });
    
    element.addEventListener("dblclick",()=>{
        const doDelete = confirm("Do you wish to delete note?");
        if(doDelete)
        {
            deleteNote(id,element);
        }
    });

    return element;
}

function updateNote(id,content){
    console.log("Updating Note");
    console.log(id,newContent);
}
function deleteNote(id,content){
    console.log("Deleting Note");
    console.log(id);
}

function addNote(){
    const notes = getNotes();
    const noteObject={
        id: Math.floor(Math.random()*10000),
        content: ""
    };
    const noteElement = createNoteElement(noteObject.id,noteObject.content);
    notesContainer.insertBefore(noteElement,addNoteButton);

    existingNotes.push(noteObject);
    saveNotes(notes);
}
