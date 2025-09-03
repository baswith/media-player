import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addVideoAPI } from '../services/allAPI';



function Add({setAddVideoResponse}) {
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({ caption: "", imageURL: "", videoURL: "" })
  console.log(videoDetails);
  const [isInvalidURL, setIsInvalidURL] = useState(false)



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedURL = (url) => {
    if (url.includes("v=")) {
      const videoId = url.split("v=")[1].slice(0, 11)
      setVideoDetails({ ...videoDetails, videoURL: `https://www.youtube.com/embed/${videoId}` })
      setIsInvalidURL(false)

    }
    else {
      setVideoDetails({ ...videoDetails, videoURL: "" })
      setIsInvalidURL(true)

    }
  }

  const handleUpload = async () => {
    const { caption, imageURL, videoURL } = videoDetails
    if (caption && imageURL && videoURL) {
      // API Call

      try {
        const result = await addVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          setAddVideoResponse(result)
          toast.success(`${result.data.caption} succesfully added`)
          handleClose()
          setVideoDetails({caption:"",imageURL:"",videoURL:""})

        }
        

      }
      catch (err) {
        console.log(err);

      }


    }
    else {
      toast.warning("Please fill the corresponding fields!!")
    }
  }



  return (
    <>
      <div className=''>
        <Button className='rounded' variant="info " onClick={handleShow}>
          Add Video
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className='mt-2 mb-4'>Please fill the following fields!</h3>
          <form action="">
            <input onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} className='form-control' placeholder='Video Caption' type="text" name="" id="" /> <br />
            <input onChange={(e) => setVideoDetails({ ...videoDetails, imageURL: e.target.value })} className='form-control' placeholder='Image URL' type="text" name="" id="" /> <br />
            <input onChange={(e) => getEmbedURL(e.target.value)} className='form-control' placeholder='Youtube URL' type="text" name="" id="" />
          </form>
          {isInvalidURL && <div className='text-danger fw-bolder'>Invalid URL!</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleUpload} >Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Add