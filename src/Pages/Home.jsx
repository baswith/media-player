import React, { use, useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from'../Components/View'
import Category from '../Components/Category'



function Home() {

  const [addVideoResponse , setAddVideoResponse]=useState({})
  const [deleteCategoryResponse,setDeleteCategoryResponse]=useState({})
  const [updateCategoryResponse , setUpdateCategoryResponse]=useState({})


  return (
    <>
    <div className='container d-flex justify-content-between align-items-center my-5'>
      <Add setAddVideoResponse={setAddVideoResponse}  />
      <Link to={'/history'} className='text-info text-decoration-none fw-bold'>Watch History</Link>

    </div>
    <div className='container-fluid row'>
      <div className='col-lg-6'>
        <h1 className='ms-5'>All Videos</h1>
        <View addVideoResponse={addVideoResponse} deleteCategoryResponse={deleteCategoryResponse} setUpdateCategoryResponse={setUpdateCategoryResponse}  />
      </div>
      <div className='col-lg-6 ps-5'>

        <Category setDeleteCategoryResponse={setDeleteCategoryResponse}  updateCategoryResponse={updateCategoryResponse} />
      </div>

    </div>
    
    </>
  )
}

export default Home