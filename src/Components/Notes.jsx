import React,{useState, useEffect, useContext} from "react";
import { DataContext } from "./DataContext";

const Notes = ({notes, objKey}) => {
    const {allProfiles, setAllProfiles} = useContext(DataContext);
    const [notesList, setNoteList] = useState([]);
    const [noteCons, setNoteCons] = useState({
        commenter: '',
        comment: ''
    })

    const addNote = () => {
        setAllProfiles(prevProfiles => ({
            ...prevProfiles,
            [objKey]: {
              ...prevProfiles[objKey],
              notes: [...notes, noteCons]
            }
          }));
    }
    
    useEffect(() => {
        setNoteList(notes.map((noteObj, idx) => (<li key={objKey + idx}>{noteObj.commenter} says, "{noteObj.comment}"</li>)))
        setNoteCons({
            commenter: '',
            comment: ''
        })
    }, [allProfiles[objKey]])

    return (
        <>
            <div className="notes">
                <h4>1-on-1 Notes</h4>
                <form onSubmit={(e) => {e.preventDefault(); addNote();}}>
                    <label>Commenter Name:</label><input type="text" value = {noteCons.commenter} onChange = {(e) => setNoteCons({...noteCons, commenter: e.target.value})} required/><br />
                    <label>Comment:</label><input type="text" value = {noteCons.comment} onChange = {(e) => setNoteCons({...noteCons, comment: e.target.value})} required/><br />
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