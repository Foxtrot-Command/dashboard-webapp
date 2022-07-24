
import React, { useState, useReducer, useEffect } from "react"

import {
  Col,
  Container,
  Form,
  Row,
  FloatingLabel,
  Button,
  Stack,
  Card,
  Image,
  InputGroup,
  FormControl
} from "react-bootstrap";
import useImageLoaded from "hooks/useImageLoaded";
import useDebounce from "hooks/useDebounce";

import { onCapture } from "utils";
import FrameSelector from './FrameSelector';

const FoxtrotCardMaker = () => {

  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const [ref, loaded, onLoad] = useImageLoaded()

  const [cardValues, setCardValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }), {
    attack: {
      value: 0,
      isEnabled: true,
      vector: {
        x: -42,
        y: 90
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

  const PartImage = ({ show, partValue }) => {
    return (
      <>

        {(partValue !== undefined && Object.keys(partValue).length !== 0) &&
          <span
            style={{
              ...partValue.position, ...{
                cursor: "move",
                padding: "10px",
                userSelect: "none",
                zIndex: 3,
                display: show ? "none" : 'inline',
                fontFamily: "Inversionz",
                fontSize: "100px",
                color: "#fff",
                letterSpacing: "-45px"
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
          backgroundColor: "rgb(0 0 0 / 44%)",
          width: "254px",
          height: "40px",
          zIndex: 1,
          top: "29px",
          left: "133px",
          position: "absolute",
          fontFamily: "Montserrat",
          fontWeight: "700",
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            height: "100%",
            textAlign: "center",
            top: "14px",
            right: "13px"
          }}>{name}</div>
        </div>
      </>
    )
  }

  const DescriptionLabel = ({ name }) => {
    return (
      <div style={{
        backgroundColor: "rgb(0 0 0 / 44%)",
        width: "254px",
        height: "134px",
        zIndex: 1,
        bottom: "51px",
        left: "133px",
        position: "absolute",
        fontFamily: "Montserrat",
        fontWeight: "500",
        fontSize: "12px",
        letterSpacing: "0.9px",
        lineHeight: "14px",
        overflow: "hidden",
        borderRadius: "0px 0px 30px 30px"
      }}>
        <div style={{
          position: "relative",
          margin: "auto",
          width: "75%",
          height: "60%",
          textAlign: "center",
          top: "8px",
        }}>{name}</div>
      </div>
    )
  }

  const imageHandler = event => {
    let reader = new FileReader();
    reader.onload = function (e) {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  const dropdownSelector = FrameSelector();

  const DefaultCardBackground = () => (
    <div className="w-50 position-absolute" style={{
      backgroundColor: "#2C2C32",
      pointerEvents: "none",
      height: "84.8%",
      top: "28px",
      left: "129px",
      borderRadius: "20px",
      zIndex: 0
    }} />
  )

  const debounceCardDescription = useDebounce(cardDescription, 200);

  return (

    <Container>
      <Row className="g-2">
        <Col>
          <div
            style={{
              backgroundColor: "#f3f3f3",
              width: "520px",
              height: "520px",
              color: "#fff",
              borderRadius: "10px",
              fontFamily: "Montserrat",
              userSelect: "none"
            }}
            className="position-relative"
          >

            <ImageWrapper
              id="wrapper"
              style={{ width: "550px", height: "550px" }}
            >

              <NameLabel name={cardName} />
              <DescriptionLabel name={debounceCardDescription} />

              <div style={{ position: "relative", width: "520px" }}>
                <Image
                  ref={ref}
                  onLoad={onLoad}
                  fluid
                  src={
                    dropdownSelector.selectedFrame != '' ?
                      dropdownSelector.selectedFrame :
                      '/images/parts/frames/common/bushido.png'
                  }
                  className="position-absolute"
                  style={{ pointerEvents: "none", zIndex: 2, top: "-5px", left: "6px" }}
                />
                <Image src="/images/parts/misc/left.png" style={{
                  left: "140px",
                  top: "72px",
                  zIndex: 1,
                  width: "16.5px",
                  position: "absolute",
                  opacity: 0.5
                }}/>
                <Image src="/images/parts/misc/right.png" style={{
                  right: "142px",
                  top: "72px",
                  zIndex: 1,
                  width: "16.5px",
                  position: "absolute",
                  opacity: 0.5
                }}/>

              </div>

              {selectedImage ? (
                <div>
                  <Image fluid className="position-absolute" style={{
                    pointerEvents: "none",
                    top: "30px",
                    left: "135px",
                    height: "439px",
                    borderRadius: "20px",
                    zIndex: 0,
                  }} src={selectedImage} />
                </div>
              ) : <DefaultCardBackground />}
              <PartImage
                partValue={{
                  position: {
                    top: "-40px",
                    right: "142px",
                  }, value: cardValues.mana.value
                }} />
              <PartImage show={dropdownSelector.isSpell}
                partValue={{
                  position: {
                    top: "370px",
                    left: "110px",
                  }, value: cardValues.attack.value
                }} />
              <PartImage
                show={dropdownSelector.isSpell}
                partValue={{
                  position: {
                    top: "371px",
                    right: "142px",
                  }, value: cardValues.health.value
                }} />
            </ImageWrapper>

          </div>

        </Col>
        <Col>
          <Card>
            <Card.Header>Configuración de carta</Card.Header>
            <Card.Body>
              <Stack direction="horizontal" gap={3}>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Mana</InputGroup.Text>
                  <FormControl
                    aria-label="Stat amount"
                    placeholder={cardValues.mana.value}
                    onChange={e =>
                      setCardValues({
                        ...cardValues.mana,
                        ...{ mana: { value: e.target.value } }
                      }
                      )
                    }
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Ataque</InputGroup.Text>
                  <FormControl
                    disabled={dropdownSelector.isSpell}
                    aria-label="Stat amount"
                    placeholder={cardValues.attack.value}
                    onChange={e =>
                      setCardValues({
                        ...cardValues.attack,
                        ...{ attack: { value: e.target.value } }
                      }
                      )
                    }
                  />
                </InputGroup>
                <InputGroup className="mb-3" >
                  <InputGroup.Text>Vida</InputGroup.Text>
                  <FormControl
                    disabled={dropdownSelector.isSpell}
                    aria-label="Stat amount"
                    placeholder={cardValues.health.value}
                    onChange={e =>
                      setCardValues({
                        ...cardValues.health,
                        ...{ health: { value: e.target.value } }
                      }
                      )
                    }
                  />
                </InputGroup>

              </Stack>

              <dropdownSelector.component />

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
                  spellCheck="false"
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
                      onChange={(event) => { imageHandler(event); }}
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
                onClick={() => onCapture("wrapper", cardName)}
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