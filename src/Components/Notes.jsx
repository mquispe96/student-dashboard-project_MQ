import React,{useState, useEffect, useContext} from "react";
import { DataContext } from "./DataContext";

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
    
    useEffect(() => {
        setNoteList(notes.map((noteObj, idx) => (<li key={profileId + idx}>{noteObj.commenter} says, "{noteObj.comment}"</li>)))
        setNoteCons({
            commenter: '',
            comment: ''
        })
    }, [allProfiles[profileId]])

    return (
        <>
            <div className="notes">
                <h4>1-on-1 Notes</h4>
                <form onSubmit={(e) => {e.preventDefault(); addNote();}}>
                    <label htmlFor="commenter">Commenter Name:</label>
                    <input id="commenter" type="text" placeholder="Ex: John D." value = {noteCons.commenter} onChange = {(e) => setNoteCons({...noteCons, commenter: e.target.value})} required autocomplete="off"/><br />
                    <label htmlFor="comment">Comment:</label>
                    <input id="comment" type="text" placeholder={`Ex: ${preferredName} is...`} value = {noteCons.comment} onChange = {(e) => setNoteCons({...noteCons, comment: e.target.value})} required autocomplete="off"/><br />
                    <button type="submit">Add Note</button>
                </form>
                <ul>
                    {notesList}
                </ul>
            </div>
        </>
    )
}

export default Notes;