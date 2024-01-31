import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollAnimation } from "../../common/scrollAnims";
import { useEffect } from "react";

import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const ProjectsSlider = ( { projects } ) => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

  return (
    <>
        {/* portfolio */}
        <section className="mil-portfolio-slider-frame">
            <div className="mil-animation-frame">
                <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="1" data-value-2="2" style={{"top": "-60px", "right": "-4px"}}>
                    <Pentagon />
                </div>
            </div>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-9">
                        <Swiper
                            {...SliderProps.milPortfolioSlider}
                            className="swiper-container mil-portfolio-slider mil-up"
                        >
                            
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Fortune Murali Park</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Fortune Murali Park</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            
                            
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Murali Resorts VJA</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Murali Resorts VJA</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide><SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">The Metropolitan Hotel</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>The Metropolitan Hotel</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide><SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">DHCS</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>DHCS</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide><SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Treats Bakery</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Treats Bakery</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={`https://drive.google.com/drive/folders/1k39cVdSTAOPdyvxPNbL88wyBHNRgxHjb?usp=sharing`} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Just Bake NRSPT</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Just Bake NRSPT</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Nirmaansathi</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Nirmaansathi</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">APSCHE ( Govt of AP )</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>APSCHE ( Govt of AP )</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>



                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Dubai Properties</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Dubai Properties</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>


                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Icon Public School</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Icon Public School</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Icon Public School</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Icon Public School</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Stuzee</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Stuzee</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Yummaiano</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Yummaiano</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Yummaiano</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Yummaiano</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Apaizer Golisoda</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Apaizer Golisoda</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Hangover Brewery</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Hangover Brewery</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Sri Sai Defence Academy</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Sri Sai Defence Academy</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide" >
                            <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                                <div className="mil-cover-frame mil-drag">
                                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                                        <img src="/img/App/mar.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                                    <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                                        <div className="mil-labels mil-mb-15">
                                            <div className="mil-label mil-upper mil-accent">Lakshya Defence Academy</div>
                                            <div className="mil-label mil-upper">2023</div>
                                        </div>
                                        <h5>Lakshya Defence Academy</h5>
                                    </div>
                                    <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                                        <Link href={``} className="mil-button mil-arrow-place">
                                            <span>View Digital Marketing & Branding</span>
                                            <ArrowIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            
                         
                        </Swiper>
                    </div>
                    <div className="col-lg-3 mil-relative">
                        <div className="mil-portfolio-nav">
                            <div className="mil-portfolio-btns-frame">
                                <div className="swiper-portfolio-pagination" />
                                <div className="mil-slider-nav">
                                    <div className="mil-slider-arrow mil-prev mil-portfolio-prev mil-arrow-place">
                                        <ArrowIcon />
                                    </div>
                                    <div className="mil-slider-arrow mil-portfolio-next mil-arrow-place">
                                        <ArrowIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* portfolio end */}
    </>
  );
};
export default ProjectsSlider;
