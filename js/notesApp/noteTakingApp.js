console.log('this is notes app');
// if user adds a not add it to local storage
// extra feature save voice notes 
// voice to text **** 
// and search from voice 
showNotes();

let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    //console.log(notesObj);

    showNotes();


})
// function to show elemnts from local storage 
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    let html = "";
    notesObj.forEach(function(element, index){
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Notes ${index +1 }</h5>
            <p class="card-text">${element}</p>
            <button id="${index}"onClick="deleteNotes(this.id)" class="btn btn-primary">Delete Notes</button> 
        </div>
        </div>
        
        
        
        
        `

    });
// differece between == === != plz read
    let noteElm = document.getElementById('notes');
    if(notesObj.length != 0){
        noteElm.innerHTML = html;
    }
    else{
        noteElm.innerHTML = `Add some notes buddy`;
    }

}

// funct to delete note

function deleteNotes(index){
    //console.log(`I am deleting`, index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        
    }
notesObj.splice(index, 1);

localStorage.setItem("notes", JSON.stringify(notesObj));
showNotes();

    
}

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputValue = search.value.toLowerCase();
    //console.log("input eevnt fired!",inputValue);

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(elelment){
        let cardTxt = elelment.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputValue)){
            elelment.style.display = "block";
            //console.log(cardTxt);
        }
        else{
            elelment.style.display = "none";
        }
        //console.log(cardTxt);  
    })
})
//nputValue == cardTxt.value why this did not work