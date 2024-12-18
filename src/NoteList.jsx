import "./note.css"

const NoteList = ({notes}) => {
    return (
        <div style={{border:"4px solid black"}}>
            {
                notes.filter((note) => note.activada).map((note) => (
                    <div key={note.id} style={{border:"5px solid black", margin:"15px", padding:"15px" , backgroundColor: note.color}}>
                        <h2 className="note_title">
                            {note.titulo}
                        </h2>
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