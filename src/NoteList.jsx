import "./note.css"

const NoteList = ({notes}) => {
    return (
        <div style={{border:"1px solid black"}}>
            {
                notes.filter((note) => note.activada).map((note) => (
                    <div key={note.id} style={{border:"1px solid orange", margin:"10px", padding:"10px"}}>
                        <div className="note_title">

                        </div>
                        <div className="note_body">
                            {note.contenido}

                        </div>
                    </div>

                ))
            }
        </div>
    );

}
export default NoteList;