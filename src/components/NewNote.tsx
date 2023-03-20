import { Container } from "react-bootstrap";
import NoteForm from "./NoteForm";

const NewNote = () => {
    return (
        <Container >
            <h1 className="mb-4">New Note</h1>
            <NoteForm onSubmit={(data) => console.log(data)} />
        </Container>
    )
}

export default NewNote;