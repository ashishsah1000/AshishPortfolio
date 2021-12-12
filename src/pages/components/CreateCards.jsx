import React, { useEffect } from 'react'
import CustomCard from './CustomCard'
import Masonry from "react-masonry-component"

let data = [
    {
        title: "Learn about mongose",
        date: "2 sep 2021",
        content: "Figured out a new problem in mongoose that just Statys."
    },
    {
        title: "Figure out Life",
        date: "10 sep 2021",
        content: "Well read about the challenges and stuff in life"
    },
    {
        title: "Material Ui the Interface",
        date: "2 dec 2021",
        content: "The scope of creating applciations in Material UI."
    },
    {
        title: "Material Ui the Interface",
        date: "2 dec 2021",
        content: "The scope of creating applciations in Material UI."
    },
    {
        title: "Some details",
        date: "2 sep 2021",
        content: "Whre the details goes content"
    },
    {
        title: "Title",
        date: "2 sep 2021",
        content: "Reprehenderit ipsum Lorem adipisicing ex Lorem.Lorem commodo nulla nulla Lorem ad.Eu cupidatat non ex ex."
    },
    {
        title: "Some details",
        date: "2 sep 2021",
        content: "Whre the details goes content"
    },
]

const masonryOptions = {
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }


export default function CreateCards() {
    // useEffect(() => {
    //     var grid = document.querySelector(".grid");
    //     var msnry = new Masonry(grid, {
    //         // options...
    //         itemSelector: '.grid-item',
    //         columnWidth: 200
    //     });
    // }, [])

    const childElements = data.map(function (element) {
        return (
            <li className="image-element-class">
                <CustomCard title={element.title} date={element.date} content={element.content} />
            </li>
        );
    });
    return (
        <Masonry
            className={'my-gallery-class'} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
            style={{ listStyle: "none" }}
        >
            {childElements}
        </Masonry>
    )
}
