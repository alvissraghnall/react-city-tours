import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core';

type Views =     { header: string }
]

export default function IntroCarousel () {

    const items = [
        {
            header: "Start to enjoy unique places."
        },
        {
            header: "Greay places to discover."
        },
        {
            header: "Finally... it's time to relax."
        }
    ]
  
    return (
        <Carousel>
            {
                items.map((item, index) => )
            }
        </Carousel>
    )
}

function Item (props: typeof items) {

}