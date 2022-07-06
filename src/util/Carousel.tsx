import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export interface CarouselItemProps {
    children: React.ReactNode;
    width?: number;
}

const fadeAnim = keyframes`
    0%, 50% {
        opacity: 0;
        transform: scale(0);
    }
`;

const dotAni = keyframes`
    0% {
        top: -4vw;
    }
    50% {
        top: 4vw;
    }
    100% {
        top: -4vw;
    }
`;

const checkedRadioTroisAni = keyframes`
    0% {
        top: -10vw;
        transform: scale(0);
    }
    100% {
        top: 0;
        transform: scale(1);
    }
`;

const unCheckedRadioTroisAni = keyframes`
    0% {
        bottom: 0;
        transform: scale(1);
    }
    100% {
        bottom: -10vw;
        transform: scale(0);
    }
`;

const checkedRadioDeuxAni = keyframes`
    0% {
        transform: rotate(0) translateY(-4.8vw) scale(.2);
    }
    83% {
        transform: rotate(360deg) translateY(-2.5vw) scale(1);
        transform-origin: 2vw;
    }
    88% {
        transform: translateY(.6vw) scale(1);
    }
    93% {
        transform: translateY(-.9vw) scale(1);
    }
    100% {
        transform: translateY(0) scale(1);
    }
`;


const CarouselItemDiv = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: green;
    color: #fff;
`;

const CarouselDiv = styled.div`
    overflow: hidden;
`;

const InnerContent = styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
`;

const Wrap = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 95vw;
    height: 50vw;
`;

const RadioButtons = styled.div`
    width: 100%;
    height: 100%;
    animation: ${fadeAnim} 1s;
`

const Label = styled.label`
    display: inline-block;
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    transition: all .2s ease-in-out;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 1.6s;
    animation-name: ${dotAni};
`;


export const CarouselItem = ({ children, width }: CarouselItemProps) => {
    return (
        <CarouselItemDiv style={{ width: width }}>
            { children }
            <Wrap>
                <RadioButtons>
                    <input type="radio" name="index-1" id="index-1" className="carousel-radio" />  <Label htmlFor="index-1" className="carousel-radio-label"></Label>
                    <input type="radio" name="index-2" id="index-2" className="carousel-radio" /> <Label htmlFor="index-2" className="carousel-radio-label"></Label>
                    <input type="radio" name="index-3" id="index-3" className="carousel-radio" /> <Label htmlFor="index-3" className="carousel-radio-label"></Label>
                </RadioButtons>
            </Wrap>
            
        </CarouselItemDiv>

    )
}

const Carousel = ({ children }: Pick<CarouselItemProps, "children">) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex > React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        setActiveIndex(newIndex);
    }

    return (
        <CarouselDiv>
            <InnerContent style={{ transform: `translateX(-${activeIndex * 100 }%)` }}>
                {
                    React.Children.map<React.ReactNode, React.ReactNode>(children, (child, index) => {
                        if(React.isValidElement(child)) {
                            return React.cloneElement(child, { width: "100%" })
                        }
                        
                    })
                }
            </InnerContent>
        </CarouselDiv>
    );
}

export default Carousel;