
import React, { useState, useReducer } from "react"
import * as htmlToImage from 'html-to-image';
import { Col, Container, Form, Row, FloatingLabel, Button, Stack, Card, Image, InputGroup, FormControl } from "react-bootstrap";
import Draggable from "react-draggable";
import { capitalize } from "utils";

const FoxtrotCardMaker = () => {

    const [cardName, setCardName] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const [cardValues, setCardValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }), {
        attack: {
            value: 0,
            isEnabled: true,
            vector: {
                x: -42,
                y: 105
            }
        },
        health: {
            value: 0,
            isEnabled: true,
            vector: {
                x: -43,
                y: 110
            }
        },
        mana: {
            value: 0,
            isEnabled: true,
            vector: {
                x: -43,
                y: 110
            }
        },
    });

    const saveAs = (blob, fileName) => {
        var elem = window.document.createElement('a');
        elem.href = blob
        elem.download = fileName;
        elem.style = 'display:none;';
        (document.body || document.documentElement).appendChild(elem);
        if (typeof elem.click === 'function') {
            elem.click();
        } else {
            elem.target = '_blank';
            elem.dispatchEvent(new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            }));
        }
        URL.revokeObjectURL(elem.href);
        elem.remove()
    }

    const onCapture = (id) => {
        htmlToImage.toPng(document.getElementById(id))
        .then(function (dataUrl) {
            saveAs(dataUrl, `${cardName.toLowerCase()}.png`);
        });
    }

    /* const [position, setPosition] = useState({ x: 0, y: 0 });
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    }; */

    const PartImage = ({ x, y, width = "450px", src, partValue }) => {
        return (
            <>
                <Image
                    style={{
                        top: x,
                        left: y,
                        pointerEvents: "none",
                        zIndex: 2
                    }}
                    width={width}
                    src={src}
                    className="position-absolute"
                />
                {(partValue !== undefined && Object.keys(partValue).length !== 0) &&
                    <span
                        style={{
                            ...partValue.position, ...{
                                cursor: "move",
                                padding: "10px",
                                userSelect: "none",
                                zIndex: 3
                            }
                        }}
                        className="position-absolute"
                    >
                        {partValue.value}
                    </span>
                }
            </>
        );
    }

    const ImageWrapper = (props) => {
        return (
            <div {...props}>
                {props.children}
            </div>
        )
    }

    const NameLabel = ({ name }) => {
        return (
            <>
                <div style={{
                    backgroundColor: "rgb(0 0 0 / 31%)",
                    width: "250px",
                    height: "39px",
                    zIndex: 1,
                    top: "29px",
                    left: "127px",
                    position: "absolute",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                }}>
                    <div style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                        top: "12px"
                    }}>{name}</div>
                </div>
            </>
        )
    }

    const DescriptionLabel = ({ name }) => {
        return (

            <div style={{
                backgroundColor: "rgb(0 0 0 / 31%)",
                width: "250px",
                height: "140px",
                zIndex: 1,
                bottom: "44px",
                left: "127px",
                position: "absolute",
                fontFamily: "Montserrat",
                fontWeight: "300",
                fontSize: "14px",
                letterSpacing: "1px",
                overflow: "hidden"
            }}>
                <div style={{
                    position: "relative",
                    margin: "auto",
                    width: "75%",
                    height: "60%",
                    textAlign: "center",
                    top: "6px",
                }}>{name}</div>
            </div>
        )
    }

    const fileHandler = event => {
        let reader = new FileReader();
        reader.onload = function (e) {
            setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    }


    const parts_object = { 'mana': 'mana', 'attack': 'ataque', 'health': 'vida' };

    return (

        <Container>
            <Row className="g-2">
                <Col>
                    <div
                        style={{
                            backgroundColor: "#f3f3f3",
                            width: "500px",
                            height: "500px",
                            fontFamily: "Inversionz",
                            fontSize: "110px",
                            color: "#fff",
                            letterSpacing: "-45px",
                            borderRadius: "10px"
                        }}
                        className="position-relative"
                    >
                        <Draggable bounds={{ top: -10, left: -100, right: 95, bottom: 10 }}>

                            <ImageWrapper
                                id="wrapper"
                                style={{ width: "500px", height: "500px" }}
                            >

                                <NameLabel name={cardName} />
                                <DescriptionLabel name={cardDescription} />
                                <Image fluid src="/images/frame.png" className="position-absolute" style={{ pointerEvents: "none", zIndex: 1 }} />


                                {selectedImage ? (
                                    <div>
                                        <Image fluid className="w-50 position-absolute" style={{
                                            pointerEvents: "none",
                                            top: "25px",
                                            left: "126px",
                                            zIndex: 0,
                                        }} src={selectedImage} />
                                    </div>
                                ) : <div className="w-50 position-absolute" style={{
                                    backgroundColor: "#2C2C32",
                                    pointerEvents: "none",
                                    height: "86.5%",
                                    top: "25px",
                                    left: "126px",
                                    zIndex: 0
                                }} />}
                                <PartImage x="-181px" y="145px" src="/images/parts/mana.png"
                                    partValue={{
                                        position: {
                                            top: "-48px",
                                            right: "126.5px",
                                        }, value: cardValues.mana.value
                                    }} />
                                <PartImage x="224px" y="-90px" src="/images/parts/attack.png"
                                    partValue={{
                                        position: {
                                            top: "358px",
                                            left: "94px"
                                        }, value: cardValues.attack.value
                                    }} />
                                <PartImage
                                    x="224px"
                                    y="145px"
                                    src="/images/parts/health.png"
                                    partValue={{
                                        position: {
                                            top: "358px",
                                            right: "126.5px"
                                        }, value: cardValues.health.value
                                    }} />
                                {/* <Draggable onDrag={(e, data) => trackPos(data)}> */}

                                {/* </Draggable> */}
                            </ImageWrapper>
                        </Draggable>



                    </div>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Configuración de carta</Card.Header>
                        <Card.Body>
                            <Stack direction="horizontal" gap={3}>

                                {/* <span style={{ fontSize: "11px" }}>
                                        x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}

                                    </span> */}

                                {Object.keys(parts_object).map((key, index) => {
                                    return (
                                        <InputGroup className="mb-3" key={index}>
                                            <InputGroup.Text>{capitalize(parts_object[key])}</InputGroup.Text>
                                            <FormControl 
                                                aria-label="Stat amount" 
                                                placeholder={cardValues[key].value} 
                                                onChange={e => 
                                                    setCardValues({ 
                                                        ...cardValues[key], 
                                                        ...{ [key]: { value: e.target.value } } }
                                                        )
                                                    } 
                                            />
                                            <InputGroup.Checkbox 
                                            defaultChecked={true} 
                                            onClick={e => setCardValues({ [key]: { isEnabled: e.target.value } })} />
                                        </InputGroup>
                                    )
                                })}

                            </Stack>
                            <FloatingLabel className="mt-3" controlId="floatingInputGrid" label="Nombre de carta">
                                <Form.Control
                                    type="text"
                                    placeholder="0"
                                    value={cardName}
                                    onChange={e => setCardName(e.target.value)}
                                />
                            </FloatingLabel>
                            <FloatingLabel className="mt-3" controlId="floatingInputGrid" label="Descripción de la carta">
                                <Form.Control
                                    as="textarea"
                                    value={cardDescription}
                                    placeholder="0"
                                    style={{ height: '100px', whiteSpace: "pre-line" }}
                                    onChange={e => {
                                        setCardDescription(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                        </Card.Body>
                        <Card.Footer>
                            <Container fluid={true} className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Control
                                            type="file"
                                            className="me-auto"
                                            onChange={(event) => { fileHandler(event); }}
                                        />
                                    </Col>
                                    <Col xs={3}>
                                        <Button
                                            disabled={!selectedImage}
                                            className="btn btn-dark btn-block"
                                            onClick={() => setSelectedImage(null)}>Remover
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>


                            <Button
                                onClick={() => onCapture("wrapper")}
                                className="align-items-end btn btn-dark btn-block">
                                Descargar render
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default FoxtrotCardMaker