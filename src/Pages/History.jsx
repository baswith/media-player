import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryAPI, showVideoHistoryAPI } from '../services/allAPI'





function History() {
  // const [historyUpdate, setHistoryUpdate] = useState()
  const [history, setHistory] = useState([])
  console.log(history);



  useEffect(() => {
    getHistory()

  }, [])


  const getHistory = async () => {
    try {

      const result = await showVideoHistoryAPI()
      console.log(result);
      setHistory(result.data)


    }
    catch (err) {
      console.log(err);


    }
  }

  const deleteHistory = async (id) => {
    try {
      const res = await deleteVideoHistoryAPI(id)
      console.log(res);
      if (res.status >= 200 && res.status < 300) {
        // setHistoryUpdate(res)
        getHistory()
      }



    }
    catch (err) {
      console.log(err);

    }

  }

  return (

    <>

      <div className='container mt-4 '>
        <div className='d-flex justify-content-between align-items-center'>
          <h1 className='text-decoration-underline fw-bold'>Watch History</h1>
          <Link className='text-decoration-underline' to={'/home'}>Back to Home</Link>

        </div>
        {history.length > 0 ?
          <table className='table bg-primary mt-4 mb-5' border={"4"}>
            <thead>
              <tr>
                <th>No</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Date & Time</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody >
              {history.map((history, ind) => (
                <tr>
                  <td>{ind + 1}</td>
                  <td>{history.caption}</td>
                  <td><a href={history.videoURL} className='text-decoration-underline'>{history.videoURL}</a></td>
                  <td>{history.dateTime}</td>
                  <td><button onClick={() => deleteHistory(history.id)} className=' btn btn-danger'>Delete</button></td>
                </tr>

              ))}

            </tbody>
          </table> :
          <h1 className='text-danger p-5'>No Video Watched Yet!</h1>}

      </div>




    </>
  )
}

export default History