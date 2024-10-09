import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

function Home() {
    const [ data, setData ] = useState([]);
    // console.log(data);

    const [ date, setDate ] = useState('2024-10-08');
    // console.log(date);

    useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API}`)
            .then(res => setData(res.data.articles))
            .catch(err => console.log(err))
    }, [date])

    const [ newData, setNewData ] = useState([]);
    console.log(newData);
    
    useEffect(() => {
        if(data != []){
            const array = data.filter((e, i) => {
                if(e.urlToImage !== null) return e
            })
            setNewData(array);
        }
    }, [data])
    
  return (
    <>
        <Container fluid>
            <Row>
                {/* <Col sm='12'>
                    <div className='table-content table-responsive-xl'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Author</th>
                                <th scope='col'>Content</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Published At</th>
                                <th scope='col'>Source Name</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>URL</th>
                                <th scope='col'>URL To Image</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data && data?.map((item, index) => {
                                    if(index >7 && index < 15){
                                        return(
                                            <tr key={index}>
                                                <td>{item.author}</td>
                                                <td>{item.content}</td>
                                                <td>{item.description}</td>
                                                <td>{item.publishedAt}</td>
                                                <td>{item.source.name}</td>
                                                <td>{item.title}</td>
                                                <td>{item.url}</td>
                                                <td><img src={item.urlToImage} alt={item.urlToImage} /></td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </Col> */}

                {
                    newData && newData?.map((item, index) => {
                        if(index<4) return(
                            <Col sm='6' className='news' key={index}>
                                <div className='news-box'>
                                    <img src={item.urlToImage} alt={item.title}/>

                                    <a>{item.title}</a>
                                </div>

                                <h6>{item.author}</h6>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    </>
  )
}

export default Home
