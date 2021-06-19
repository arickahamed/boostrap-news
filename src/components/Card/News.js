import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';


const News = (props) => {
    const {title, content, urlToImage} = props.news;

    const imgStyle = {
        width: '500px',
        height: '300px'
    }

    const cardStyle = {
        margin: '40px',
        padding: '20px',
        boxShadow: '1px 1px 5px gray'
    }

    return (
        <Jumbotron style={cardStyle}>
            <img style={imgStyle} src={urlToImage} alt="" />
            <h4>{title}</h4>
            <p>{content}</p>
            <Button variant="primary">Learn more</Button>
        </Jumbotron>
    );
};

export default News;