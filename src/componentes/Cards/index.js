import "./Cards.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { slides } from "./descHabilidades";


export default function Cards(){

    return(
        <div className="principal">
            <div className="card">
                <h2 style={{fontSize:20}}>HABILIDADES</h2>
                <ReactCarousel
                    infiniteLoop
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={true}
                    autoPlay={true}
                    interval={5000}
                    transitionTime={400}
                    autoFocus={false}
                    swipeable={true}
                    emulateTouch={true}>
                        {
                            slides.map(
                                (slide)=>(
                                    <div className="slideHabilidade" key={slide.title}>
                                        <div className="icon">
                                            <h3 className="titleCard">{slide.title}</h3>
                                            {slide.icon}
                                        </div>
                                        <p>{slide.descrition}</p>
                                    </div>
                                )
                            )
                        }
                </ReactCarousel>
            </div>
        </div>
    )
    
}