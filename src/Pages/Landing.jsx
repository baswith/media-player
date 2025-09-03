import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <>
            {/* Main Content */}
            <div className='row container'>
                <div className="col-lg-6 mt-5">
                    <h1 className='mt-3 ps-5'>WELCOME TO <br /> <span className='text-info ps-2'>MEDIA PLAYER</span></h1>
                    <p className='mt-3 ps-5' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione quia, alias rerum repellendus sit esse maiores, harum eos reiciendis quod voluptatum dicta incidunt! Ex quia debitis earum sapiente quibusdam.
                        Natus asperiores iusto et assumenda quasi placeat, est debitis cumque nostrum illo dolore rerum vel, ducimus non ratione ipsa consequuntur, veritatis laboriosam magni. Minus, a quibusdam id amet rem eaque?</p>
                    <Link to={'/home'}><button className='btn btn-info ms-5 mt-2 '>Get Started</button></Link>
                </div>
                <div className="col-lg-6">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.A-f3HlMfKfcpKNncpL1wwgHaFW?w=1988&h=1437&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className=' w-100' />
                </div>
            </div>

            {/* Features */}
            <div className=''>
                <h1 className='p-5' style={{ textAlign: "center" , fontWeight:'1000' , textDecoration:"underline" }}>Features</h1>
                <div className="row ms-5">
                    <div className="col-lg-4">
                        <Card className='' style={{ width: '18rem' , color:"White" }}>
                            <Card.Img className='' variant="top" src="https://img.freepik.com/premium-vector/video-camera-icon-comic-style-movie-play-vector-cartoon-illustration-pictogram-video-streaming-business-concept-splash-effect_157943-5803.jpg?w=2000" />
                            <Card.Body className='bg-info'>
                                <Card.Title>Managing Videos</Card.Title>
                                <Card.Text>
                                    User can upload , view , and remove the video. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className='rounded' style={{ width: '18rem' , color:"white" }}>
                            <Card.Img className='' variant="top" src="https://tse1.mm.bing.net/th/id/OIP.CpJ3NZmcPRxXKa9-inPNNQAAAA?pid=ImgDet&w=199&h=199&c=7&dpr=1.5&o=7&rm=3" />
                            <Card.Body className='bg-info'>
                                <Card.Title>Categorize Videos</Card.Title>
                                <Card.Text>
                                    Users can categorize the video by drag and drop.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 ">
                        <Card style={{ width: '18rem' , color:"white" }}>
                            <Card.Img className='' variant="top" src="https://th.bing.com/th/id/OIP.Lg1cL42tdwZ2tTiSAAzQGQHaHQ?w=220&h=216&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" />
                            <Card.Body className='bg-info'>
                                <Card.Title>Managing History</Card.Title>
                                <Card.Text>
                                    Users can manage the watch history of all video
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            {/*3rd Section  */}
            <div className='m-4' style={{border:"2px solid black"}}>
                <div className="row">
                    <h1 className='mt-5 mb-5' style={{textAlign:'center'}}>Simple , Fast and Powerful</h1>
                    <div className="col-lg-6 ps-5 mb-3">
                        <h3 className='text-info'>Play Everything : </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et deserunt, doloremque ipsam corrupti laborum labore cumque ipsa sapiente consequuntur voluptates possimus neque? Unde tempora asperiores nisi ex repellendus, nulla ea.</p>
                        <h3 className='text-info'>Manage Videos : </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, adipisci consectetur. Quis aut tenetur cum itaque! Vitae ipsam tempora quis eveniet reiciendis amet, vel tempore deserunt, blanditiis suscipit placeat alias?</p>
                        <h3 className='text-info'>Watch History</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam minus quasi ex laborum unde ad natus magni vel facilis. Incidunt adipisci nemo voluptatem! Omnis minima sunt voluptatem quae! Praesentium.</p>


                    </div>
                    <div className="col-lg-6 pe-4 ps-4">
                        <iframe className='mt-5 w-100 p-2 bg-info' width="530" height="315" src="https://www.youtube.com/embed/nb_fFj_0rq8?si=WumgxhI-nZiafY-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Landing