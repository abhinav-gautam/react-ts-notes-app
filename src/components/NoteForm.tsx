import { FormEvent, useRef } from "react";
import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { NoteData } from "../App";

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
}

const NoteForm = ({ onSubmit }: NoteFormProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();

        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: []
        })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect isMulti />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="markdown">
                    <Form.Label>Body</Form.Label>
                    <Form.Control ref={markdownRef} required as="textarea" rows={15} />
                </Form.Group>
                <Stack direction="horizontal" gap={2} className="justify-content-end">
                    <Button type="submit" variant="primary">Save</Button>
                    <Link to="..">
                        <Button type="button" variant="secondary">Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    )
}

export default NoteForm;