import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addVideoCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';







function Category({setDeleteCategoryResponse , updateCategoryResponse}) {


  const [allCategory, setAllCategory] = useState([])
  console.log(allCategory);

  const [show, setShow] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState("")
  console.log(categoryDetails);
  useEffect(() => {
    getCategory()
  }, [updateCategoryResponse])



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add Category
  const handleCategory = async () => {
    if (categoryDetails) {
      try {
        const result = await addVideoCategoryAPI({ name: categoryDetails, videos: [] })
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          handleClose()
          getCategory()
        }


      }
      catch (err) {
        console.log(err);


      }

    }
    else {
      toast.warning("Please enter data in corresponding field!!")
    }
  }

  // View Categories

  const getCategory = async () => {
    const result = await getCategoryAPI()
    console.log(result);
    setAllCategory(result.data)

  }


  // Delete Category

  const deleteCategory = async (catID) => {
    try {

      const result = await deleteCategoryAPI(catID)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        getCategory()
      }



    } catch (err) {
      console.log(err);

    }

  }


  // Video Drop

  const videoDrop = async (e, categoryDetails) => {
    console.log(`Dropped in category ID ${categoryDetails.id}`)
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);
    categoryDetails.videos.push(videoDetails)

    try {
      const result = await updateCategoryAPI(categoryDetails.id, categoryDetails)
      if (result.status >= 200 && result.status < 300) {
        getCategory()
        const res = await deleteVideoAPI(videoDetails.id)
        if (res.status >= 200 && res.status < 300) {
          console.log(res);
          setDeleteCategoryResponse(res)

        }


      }



    }
    catch (err) {
      console.log(err);


    }






  }


  const onDragStarted=(e,categoryDetails,videoDetails)=>{
    console.log(categoryDetails,videoDetails);

    const data={categoryDetails,videoDetails}
    e.dataTransfer.setData("data",JSON.stringify(data))

    

  }
  return (


    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='mt-3'>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body><input onChange={(e) => { setCategoryDetails(e.target.value) }} className='form-control' placeholder='Enter Category Name' type='text'></input></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>




      <div className='d-flex align-items-center justify-content-between'>
        <h1>CATEGORIES</h1>
        <button onClick={handleShow} className='btn btn-info p-2' style={{ borderRadius: "20px", fontSize: '40px' }}><label className='pb-1'>+</label></button>

      </div>
      {
        allCategory.length > 0 ?
          allCategory.map(cat => (
            <div style={{border:"2px solid black"}} onDrop={(e) => videoDrop(e, cat)} onDragOver={(e) => e.preventDefault()} className='ms-4 mt-4 rounded mb-4'> <hr />
              <div className='d-flex align-items-center justify-content-between mb-4'>
                <h3 className='ps-5'>{cat.name}</h3>
                <button onClick={() => deleteCategory(cat.id)} className='btn btn-danger me-4'><i class="fa-solid fa-trash"></i></button>


              </div>
              <Row className='pe-4'>
                {
                  cat.videos.length > 0 &&
                  cat.videos.map(vid => (
                    <Col draggable={true} onDragStart={(e)=>onDragStarted(e,cat,vid)} lg={6} md={6} sm={12}>
                      <VideoCard insideCategory={true} displayData={vid} />
                    </Col>
                  ))


                }
              </Row>

            </div>
          ))
          :
          <h1 className='text-danger mt-5 ms-5 mb-5 fw-bold'>No Category added yet!!</h1>
      }



    </>
  )
}

export default Category