import React,{useState, useEffect, useContext} from "react";
import { DataContext } from "./DataContext";
import { TiDelete } from "react-icons/ti";
import { MdOutlineNoteAdd } from "react-icons/md";

const Notes = ({notes, profileId}) => {
    const {allProfiles, setAllProfiles} = useContext(DataContext);
    const {names:{preferredName}} = allProfiles[profileId];
    const [notesList, setNoteList] = useState([]);
    const [noteCons, setNoteCons] = useState({
        commenter: '',
        comment: ''
    })

    const addNote = () => {
        setAllProfiles(prevProfiles => ({
            ...prevProfiles,
            [profileId]: {
              ...prevProfiles[profileId],
              notes: [...notes, noteCons]
            }
        }));
    }

    const removeNote = idx => {
        const filteredNotes = notes.filter((_, id) => id !== idx);
        setAllProfiles(prevProfiles => ({
            ...prevProfiles,
            [profileId]: {
              ...prevProfiles[profileId],
              notes: filteredNotes
            }
        }));
    }
    
    useEffect(() => {
        setNoteList(notes.map((noteObj, idx) => (<li key={profileId + idx}><TiDelete onClick = {() => removeNote(idx)} className="delete"/> {noteObj.commenter} says, "{noteObj.comment}"</li>)))
        setNoteCons({
            commenter: '',
            comment: ''
        })
    }, [allProfiles[profileId].notes])

    return (
        <>
            <div className="notes">
                <form onSubmit={(e) => {e.preventDefault(); addNote();}}>
                    <h3>1 - on - 1 Notes</h3>
                    <label htmlFor="commenter">Commenter Name:</label>
                    <input id="commenter" type="text" placeholder="Ex: John D." value = {noteCons.commenter} onChange = {(e) => setNoteCons({...noteCons, commenter: e.target.value})} required autoComplete="off"/><br />
                    <label htmlFor="comment">Comment:</label>
                    <input id="comment" type="text" placeholder={`Ex: ${preferredName} is...`} value = {noteCons.comment} onChange = {(e) => setNoteCons({...noteCons, comment: e.target.value})} required autoComplete="off"/><br />
                    <button type="submit">Add Note <MdOutlineNoteAdd /></button>
                </form>
                <ul>
                    {notesList}
                </ul>
            </div>
        </>
    )
}

export default Notes;