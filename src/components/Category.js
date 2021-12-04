import React from 'react'
import { Card } from "react-bootstrap";


const Category = ({category}) => {
    return (
        <>
        <Card className = "ml-3 my-3 p-3 rounded h-90">
            <Card.Img  src={`${category.icon}`} />
            <Card.Body>
                <Card.Title>
                    {`${category.title}`}
                </Card.Title>
                <Card.Subtitle className= "mb-2 text-muted">  
                    {`${category.productCount}`} products
                </Card.Subtitle>
                <a href="/Allitems" class="card-link">Shop Now</a>
            </Card.Body> 

        </Card>


        </>
    )
}

export default Category
