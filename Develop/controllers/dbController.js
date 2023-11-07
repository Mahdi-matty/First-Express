const express = require("express");
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');;

router.get("/",(req,res)=>{
    const notes=JSON.parse(fs.readFileSync("./db/db.json"));
    console.log(`${req.method} request to ${req.url}`)
    res.json(notes);
})

router.post("/",(req,res)=>{
    const newNote = {
        id:crypto.randomUUID(),
        title:req.body.title,
        text:req.body.text,
    }
    const storedNotesData = JSON.parse(fs.readFileSync("./db/db.json"));
    storedNotesData.push(newNote)
    fs.writeFileSync("./db/db.json",JSON.stringify(storedNotesData,null,4));
    console.log(`${req.method} request to ${req.url}`)
    res.json(newNote)
})
router.get("/:noteId",(req,res)=>{
    const notes = JSON.parse(fs.readFileSync("./db/db.json"))
    const id = req.params.noteId;
    for (let i = 0; i < notes.length; i++) {
        if(notes[i].id==id){
            return res.json(notes[i])
        } 
    }
    return res.status(404).send("sorry, no such notes")
})
router.delete("/:noteId",(req,res)=>{
    const notes = JSON.parse(fs.readFileSync("./db/db.json"))
    const id = req.params.noteId;
    const noteIndex = notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
        const deletedNote = notes.splice(noteIndex, 1)[0];
        fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 4));
        res.json(deletedNote);
        } else{
            return res.status(404).send("sorry, no such notes")
        }
    
})
module.exports = router;