import "./Carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as ReactCarousel } from "react-responsive-carousel";

export default function Carousel(){
    const slides =[
        {
            image:"../imagens/intercambio_1.jpg",
            key:0
        },
        {
            image:"../imagens/intercambio_2.png",
            key:1
        },
        {
            image:"../imagens/intercambio_3.jpg",
            key:2
        },
        {
            image:"../imagens/intercambio_4.jpg",
            key:3
        },
        {
            image:"../imagens/intercambio_5.png",
            key:4
        },
        {
            image:"../imagens/intercambio_6.jpg",
            key:5
        },
        {
            image:"../imagens/intercambio_7.jpg",
            key:6
        },
        {
            image:"../imagens/intercambio_8.png",
            key:7
        }
    ]

    return(
        <div className="principal">
            <div className="cardCarousel">
                <ReactCarousel
                    infiniteLoop
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={true}
                    autoPlay={true}
                    interval={4000}
                    transitionTime={400}
                    autoFocus={false}
                    swipeable={true}
                    emulateTouch={true}
                    className="carousel">
                        {
                            slides.map(
                                (slide)=>(
                                    <div className="slide" key={slide.key}>
                                        <div className="image-wrapper">
                                        <img src={slide.image} alt="Viagem Intercambio"/>
                                        </div>
                                    </div>
            
                                )
                            )
                        }
                </ReactCarousel>
            </div>
        </div>
    )
    
}
