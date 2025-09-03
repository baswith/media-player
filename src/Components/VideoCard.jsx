import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoAPI, videoHistoryAPI } from '../services/allAPI';



function VideoCard({ displayData, setDeleteVideoResponse , insideCategory }) {
    console.log(displayData);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {

        const { caption, videoURL } = displayData
        const localTime = new Date()
        const dateTime = localTime.toLocaleString()
        const history = { caption, videoURL, dateTime }
        console.log(history);


        try {
            const result = await videoHistoryAPI(history)

        }
        catch (err) {
            console.log(err);


        }

        setShow(true);
    }


    const deleteVideo = async () => {
        try {
            const result = await deleteVideoAPI(displayData?.id)
            console.log(result);
            if (result.status >= 200 && result.status < 300)
                setDeleteVideoResponse({ result })




        }
        catch (err) {
            console.log(err);


        }

    }

    const videoDragStarted = (e, videoDetails) => {
        console.log(`Video : ${videoDetails.id}`);
        e.dataTransfer.setData("videoDetails", JSON.stringify(videoDetails))


    }
    return (
        <>
            <div className='container p-1'>
                <Card draggable={true} onDragStart={(e) => videoDragStarted(e, displayData)} className='p-4' style={{ width: '16rem' , height:"100%"}}>
                    <Card.Img style={{width:"80%" , height:"100%"}} className='' onClick={handleShow} variant="top" src={`${displayData.imageURL} `} />
                    <Card.Body>
                        <Card.Title><h4 className='mt-2' style={{textAlign:"start"}}>{displayData.caption}</h4></Card.Title>
                        {
                            !insideCategory&&
                            <Button onClick={deleteVideo} className='mt-3' variant="danger">Delete</Button>
                        }
                    </Card.Body>
                </Card>
            </div>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='pt-4 ps-3'><h3>{displayData.caption}</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body><iframe width="100%" height="315px" src={`${displayData.videoURL}`} title="YouTube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default VideoCard