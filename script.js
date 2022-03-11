/**
 * Temperature calculator 
 * @author Alanis Mirko
 * @version 1.0.0 March 2022
 */

 'use strict'


document.getElementById('music_forms').addEventListener('submit', function(e){
    e.preventDefault();
    const musicdata = getFormData();
    insertRow(musicdata);
    resetForm();
})

function getFormData(){
    const musicData = {};
    musicData["author"] = document.getElementById("author").value;
    musicData["title"] = document.getElementById("title").value;
    musicData["year"] = document.getElementById("year").value;
    return musicData;
}

function insertRow(musicData) {
    const table = document.getElementById("musicList").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = musicData.author;
    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = musicData.title;
    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = musicData.year;
    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onClick="deleteRow(this)">Delete</button>`;
}


function resetForm(){
    document.getElementById("author").value = "";
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
}

function deleteRow(td){
    const row = td.parentElement.parentElement;
    document.getElementById("musicList").deleteRow(row.rowIndex);
    resetForm();
}