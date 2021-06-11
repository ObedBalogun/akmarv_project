import React, {useEffect, useState} from 'react';
import {Button, ButtonGroup, Card, CardDeck, Modal} from "react-bootstrap";
import { useCart} from "react-use-cart";


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={'beat-item'}
        >
            <Modal.Header closeButton>
                <div style={{marginBottom:6.5 +"em"}}>
                    <img src={props.beatItem.artwork} alt="None"/>
                </div>
                <div className="beat-info">
                    <h2>{props.beatItem.title}</h2>
                    <p className={'beat-labels modal-beat-label'}>Genre - {props.beatItem.genre} </p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="license-types mt-5 main-deck">
                    <CardDeck>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="mp3"  onClick={(e) => props.handleselection(props.beatItem,e) }>
                                    <span  style={{fontSize:1.5+"em"}}>Mp3 license</span> <br/>
                                    <span style={{fontSize:3.5+"em"}}>$80</span><br/>
                                    <small className={'text-uppercase'}>Mp3 tagged.</small>
                                    <label className="container">
                                        <input type="checkbox"/>
                                        <span className={'radio-buttons'}/>
                                    </label>
                                    </div>

                              </Card.Text>
                             </Card.Body>
                         </Card>
                         <Card className={"text-center p-3"}>
                            <Card.Body>
                                 <Card.Text>
                                     <div id="wav"  onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <span style={{fontSize:1.5+"em"}}>WAV license</span> <br/>
                                        <span style={{fontSize:3.5+"em"}}>$120</span><br/>
                                        <small className={'text-uppercase'}>Mp3 and Wav tagged.</small>
                                        <label className="container">
                                        <input type="checkbox"/>
                                        <span className={'radio-buttons'}/>
                                    </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>

                         </Card>
                         <Card className={"text-center p-3"}>
                             <Card.Body>
                                <Card.Text>
                                    <div id="trackouts" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <span style={{fontSize:1.5+"em"}}>WAV + Trackouts </span> <br/>
                                        <span style={{fontSize:3.5+"em"}}>$150</span><br/>
                                        <small className={'text-uppercase'}>Mp3 tagged.</small>
                                        <label className="container">
                                        <input type="checkbox"/>
                                        <span className={'radio-buttons'}/>
                                    </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                         <Card className={"text-center p-3"}>
                             <Card.Body>
                                <Card.Text>
                                    <div id="exclusive" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <span style={{fontSize:1.5+"em"}}>Exclusive license</span> <br/>
                                        <span style={{fontSize:3.5+"em"}}>$300</span><br/>
                                        <small className={'text-uppercase'}>Mp3 tagged.</small>
                                        <label className="container">
                                        <input type="checkbox"/>
                                        <span className={'radio-buttons'}/>
                                    </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
                <div className={"phone-deck"}>
                    <CardDeck>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="mp3" className="d-inline-block" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <div className="float-left">
                                            <span  style={{fontSize:1.5+"em"}}>Mp3 license</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize:3.5+"em"}}>$80</span><br/>
                                        </div>
                                        <label className="container">
                                        <input type="checkbox"/>
                                        <span className={'radio-buttons'}/>
                                    </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="wav" className="d-inline-block" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <div className="float-left">
                                            <span  style={{fontSize:1.5+"em"}}>WAV license</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 & WAV tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize:3.5+"em"}}>$120</span><br/>
                                        </div>
                                        <label className="container">
                                        <input type="checkbox"/>
                                        <span className={'radio-buttons'}/>
                                    </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="trackouts" className="d-inline-block" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <div className="float-left">
                                            <span  style={{fontSize:1.5+"em"}}>WAV + Trackouts</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 & WAV tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize:3.5+"em"}}>$150</span><br/>
                                        </div>
                                        <label className="container">
                                        <input type="checkbox"/>
                                        <span className={'radio-buttons'}/>
                                    </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="exclusive" className="d-inline-block" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <div className="float-left">
                                            <span  style={{fontSize:1.5+"em"}}>Exclusive license</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 & WAV tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize:3.5+"em"}}>$300</span><br/>
                                        </div>
                                        <label className="container">
                                        <input type="checkbox"/>
                                        <span className={'radio-buttons'}/>
                                    </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="modal-footer-details mx-auto text-center">
                    <h4 >you can also</h4>
                    <Button onClick={props.onHide}>
                        Negotiate price
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

const Beat = ({beat}) => {
    const [duration, setDuration] = useState()
    const AudioContext = window.AudioContext;
    const audioCtx = new AudioContext();

    useEffect(()=>{
        fetch(beat.mp3_file)
            .then((data) => {
                return data.arrayBuffer();
            })
            .then((array) => {
                audioCtx.decodeAudioData(array, (buffer) => {
                     // source.buffer = buffer
                    const beatDuration = buffer.duration;
                    console.log(beat.title+buffer.length+buffer.sampleRate)
                    var date = new Date(0);
                    date.setSeconds(beatDuration);  //specify value for SECONDS here
                    var timeString = date.toISOString().substr(14, 5);
                    setDuration(timeString)
                })
            })
    },[])

    const { addItem,inCart } = useCart();

    const [modalShow, setModalShow] = React.useState(false);
    const handleSelection = (beat,e) => {
        if(e.target.id ==="mp3"){
            addItem({id:beat.title,name:beat.title,price:80,license:"mp3"});
            setModalShow(false);

        }
        else if(e.target.id === "wav"){
            addItem({id:beat.title,name:beat.title,price:120,license:"wav"})
            setModalShow(false)

        }
        else if(e.target.id === "trackouts"){
            addItem({id:beat.title,name:beat.title,price:150,license:"WAV + Trackouts"})
            setModalShow(false)

        }
        else if(e.target.id === "exclusive"){
            addItem({id:beat.title,name:beat.title,price:300,license:"exclusive"})
            setModalShow(false)

        }

    }
    const alreadyAdded = inCart(beat.title);

    return (
        <>
            <td>
                <span >
                    <img src={beat.artwork} alt=""/>
                </span>
                <span className={'beat-title-col'}>
                    {beat.title}
                </span>
            </td>
            <td className={'detail-length'}>{duration}</td>
            <td>
                <span className={"beat-labels modal-beat-label detail-length"}>{beat.genre}</span>
            </td>
            <td>
                <div>
                  <span className={'mobile-btn mx-auto'} onClick={() => setModalShow(true)}>
                      <i className={"fa fa-shopping-cart"}/>
                  </span>
                </div>
                <ButtonGroup>
                    <Button className={'mr-3 button-1 cart-btn'} onClick={() => setModalShow(true)}>
                        {alreadyAdded ? "Added to Cart":"Add to Cart"}
                    </Button>
                    <Button className={"button-1 share-btn"}>Share</Button>
                </ButtonGroup>
            </td>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                beatItem = {beat}
                handleselection ={handleSelection}
            />
        </>
    );
}

export default Beat;