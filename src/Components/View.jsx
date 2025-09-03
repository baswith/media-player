import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getVideoAPI, updateCategoryAPI } from '../services/allAPI'






function View({addVideoResponse, deleteCategoryResponse,setUpdateCategoryResponse}) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoResponse, setDeleteVideoResponse] = useState({})

  console.log(allVideos);

  useEffect(() => {
    getAllVideo()
  }, [addVideoResponse, deleteVideoResponse, deleteCategoryResponse])




  const getAllVideo = async () => {
    try {
      const res = await getVideoAPI()
      console.log(res);
      setAllVideos(res.data)





    }
    catch (err) {
      console.log(err);

    }
  }

  const videoDrop = async (e) => {
    console.log(`Video dropped`);
    const data = JSON.parse(e.dataTransfer.getData("data"))
    // console.log(data);
    const { categoryDetails, videoDetails } = data
    console.log(data);
    

    try {
      const res = await addVideoAPI(videoDetails)
      if (res.status >= 200 && res.status < 300) {
        getAllVideo()
        categoryDetails.videos = categoryDetails.videos.filter(vid=>vid.id!=videoDetails.id)
        const result = await updateCategoryAPI(categoryDetails.id, categoryDetails)
        if(result.status>=200 && result.status<300){
          setUpdateCategoryResponse(result)
          
        }
        

      }

    } catch (err) {
      console.log(err);


    }





  }

  return (
    <>
      <Row onDrop={(e) => videoDrop(e)} onDragOver={(e) => e.preventDefault()}>

        {allVideos.length > 0 ?
          allVideos.map((video) => (
            <Col lg={4} md={6} sm={12}>
              <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
            </Col>
          ))

          :
          <h1 className='p-5 text-danger fw-bold '>No videos added yet</h1>}
      </Row>







    </>
  )
}

export default View