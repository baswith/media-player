import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";


// API for Adding video

export const addVideoAPI = async (videoBody) => {

    return await commonAPI('POST', `${SERVER_URL}/allVideo`, videoBody)

}

// API Call for Getting Video details

export const getVideoAPI = async () => {

    return await commonAPI('GET', `${SERVER_URL}/allVideo`, "")
}

// API call for delete video

export const deleteVideoAPI = async (id) => {
    return await commonAPI('DELETE', `${SERVER_URL}/allVideo/${id}`, "")
}

// API for video history 

export const videoHistoryAPI = async (reqBody) =>{
    return await commonAPI('POST',  `${SERVER_URL}/History`, reqBody)
}

// API for getting video history

export const showVideoHistoryAPI = async ()=>{
    return await commonAPI('GET', `${SERVER_URL}/History`,"")
}

// API for Deleting video history

export const deleteVideoHistoryAPI = async (id)=>{
return await commonAPI('DELETE',`${SERVER_URL}/History/${id}`,"")
}

// API for adding Category

export const addVideoCategoryAPI = async(catName)=>{
    return await commonAPI('POST',`${SERVER_URL}/category`,catName)
}


// API for getting Category
export const getCategoryAPI = async()=>{
    return await commonAPI('GET',`${SERVER_URL}/category`,"")
}


// API for deleting Category

export const deleteCategoryAPI = async (id)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/category/${id}`,"")
}

// API for updating category

export const updateCategoryAPI = async (id,reqbody)=>{
    return await commonAPI('PUT',`${SERVER_URL}/category/${id}`,reqbody)
}