import './App.css';

import Burger from './components/burger';
import DarkMode from './components/darkmode'

//style
import './scss/main.scss'

//swiper
import BigSlider from './components/big-slider';


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import CardsSwiper from './components/cardsSwiper';



function App() {

    //swiper
    const slides = [
        { url: "images/aaa1.jpg", title: "1" },
        { url: "images/aaa2.jpg", title: "2" },
        { url: "images/aaa3.jpg", title: "3" },
      ];

    //popup
    let poped = true;//TODO flase
    window.addEventListener('scroll',(event) => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(!poped){
            if(scrollTop>2100){
            disableScroll();

            document.getElementById("popup").style.display = "block";
            document.getElementById("overlay").style.display = "block";

            poped=true;
            }
        }
    });

    function disableScroll() {
        document.body.style.overflow = "hidden";
    }
    function enableScroll() {
        document.body.style.overflow = "visible";
    }

    //slider
/*
    const swiperMain = new Swiper('.mainS', {
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        });
    
        
    
            //swiper for products
        if(window.outerWidth<=540){
            console.log("aa");
            var swiperCards = new Swiper(".cardsS", {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
              });
        }
        else if (window.outerWidth<=1212){
            console.log("aa");
            var swiperCards = new Swiper(".cardsS", {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
              });
        }
        else{
            var swiperCards = new Swiper(".cardsS", {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                },
            });
        }*/

/*


            <div class="swiper cardsS">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide cardsSlide">
                            <img src="images/folija.jpg" alt=""/>
                            <span>Kese i folije</span>
                            <br/>
                            <hr noshade/>
                        </div>
                        <div class="swiper-slide">
                            <img src="images/spnge.jpeg" alt=""/>
                            <span>za kuhinju</span>
                            <br/>
                            <hr noshade/>
                        </div>
                        <div class="swiper-slide">
                            <img src="images/toalet.webp" alt=""/>
                            <span>Ubrusi i 
                                toalet papiri</span>
                            <br/>
                            <hr noshade/>
                        </div>
                        <div class="swiper-slide">
                            <img src="images/cream.png" alt=""/>
                            <span>KOZMETIKA</span>
                            <br/>
                            <hr noshade/>
                        </div>
                        <div class="swiper-slide">
                            <img src="images/bucket.jpg" alt=""/>
                            <span>PlastiČne Kante</span>
                            <br/>
                            <hr noshade/>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
            

*/
  return (
    <div>
      <body>

        <div className="header" id="header">

        <div className="logo-language" id="logo-lang">
            <img src="images/logo.svg" alt="logo" id="logo"/>
            <ul id="lang-list">
                <li><a href="#" id="selected">Srpksi</a></li>
                <li><a href="#" id="non-selected">English</a></li>
                <li><a href="#" id="non-selected">Magyar</a></li>
            </ul>
            <DarkMode/>
            <Burger/>
        </div>

        <div className="menu" id="menuUp">
            <div className="container" id="menu-container">
                <div className="elm" id="menuElm">
                    <span className="naslov">O NAMA</span>
                    <span className="pod-naslov">vizija za uspeh</span>
                </div>
                <div className="elm" id="menuElm">
                    <span className="naslov">DVG PROIZVODI</span>
                    <span className="pod-naslov">naši proizvodi</span>
                </div>
                <div className="elm" id="menuElm">
                    <span className="naslov">BRENDOVI</span>
                    
                    <span className="pod-naslov">koje zasupamo</span>
                </div>
                <div className="elm" id="menuElm">
                    <span className="naslov">DISTRIBUCIJA</span>
                   
                    <span className="pod-naslov">logistika i operativa</span>
                </div>
                <div className="elm" id="menuElm">
                    <span className="naslov">SARADNJA</span>
                   
                    <span className="pod-naslov">proširenje ponude</span>
                </div>
                <div className="elm" id="menuElm">
                    <span className="naslov">NOVOSTI</span>
                    
                    <span className="pod-naslov">aktuelnosti</span>
                </div>
                <div className="elm" id="menuElm">
                    <span className="naslov">KONTAKT</span>
                    
                    <span className="pod-naslov">kontaktirajte nas</span>
                </div>
            </div>
        </div>

        </div>

        <div className="video">
            <div className="container">
                <BigSlider slides={slides} parentWidth={3040}/>
            </div>
        </div>

        <div className="dvg-company">

            <div className="txt">

                <h1 id="naslov">DVG Company</h1>
                <hr id="crvena-linija" noshade/>
                <br/>
                <p id="podnaslov">Veleprodaja i maloprodaja kozmetike i kućne hemije</p>
                <hr id="siva-linija"/>
                <br/>
                <p id="glavni-paragraf">
                    DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici. Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije. U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.
                </p>
                <button id="btn">Saznajte više o nama</button>

            </div>

            <div className="img">
                <img src="images/Rectangle 124.png" alt="img" id="zgrada"/>
            </div>

        </div>

        <div className="pouzdana-distribucija">
            <span>Pouzdana distribucija</span>
            <hr noshade/>
        </div>

        <div className="info">
            <div className="subdiv" id="partner">
                <img src="images/Rectangle 128.png" alt="img" id="img"/>
                <br/>
                <span id="txt">Postanite naš partner</span>
                <br/>
                <hr id="hr" noshade/>
            </div>
            <div className="subdiv" id="proizvodi">
                <img src="images/Rectangle 129.png" alt="img" id="img"/>
                <br/>
                <span id="txt">naši proizvodi</span>
                <br/>
                <hr id="hr" noshade/>
            </div>
            <div className="subdiv" id="uvoz">
                <img src="images/Rectangle 130.png" alt="img" id="img"/>
                <br/>
                <span id="txt">uvoz iz mađarske</span>
                <br/>
                <hr id="hr" noshade/>
            </div>
        </div>

        <div className="brojke">
            <div className="txt">
                <h1 id="naslov">DVG Company</h1>
                <h2 id="podnaslov">u brojkama</h2>
                <br/>
                <hr id="hr" noshade/>
            </div>
            <div className="numbers">
                <div className="num-container">
                    <div className="elmn" id="prostora">
                        <span id="broj">3.000</span><span id="metar">m²</span>
                        <br/>
                        <span id="naziv">Magacinskog prostora</span>
                    </div>
                    <div className="elmn" id="vozila">
                        <span id="broj">20</span>
                        <br/>
                        <span id="naziv">Vozila</span>
                    </div>
                    <div className="elmn" id="komercijalista">
                        <span id="broj">8</span>
                        <br/>
                        <span id="naziv">Komercijalista</span>
                    </div>
                    <div className="elmn" id="brendova">
                        <span id="broj">170</span>
                        <br/>
                        <span id="naziv">Brendova</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="nasi-proizvodi">
            <div className="txt">
                <h2>Naši proizvodi</h2>
                <br/>
                <hr noshade/>
                <br/>
                <p>Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što su prepoznali i našI kupci.</p>
            </div>

            <div className="proizvodi">
                <div className='container'>
                    <CardsSwiper/>
                </div>
            </div>

            <img src="images/Group 105.svg" alt="img" className="hover-logo"/>
        </div>

        <div className="brendovi">
            <div className="txt">
                <h1>Istaknuti brendovi za koje radimo distribuciju</h1>
                <hr noshade/>
            </div>
            <div className="brand-list">
                <div className="container">
                    <div className="elmn">
                        <img src="images/logoi-01.svg" alt="img"/>
                        <br/>
                        <span>Vanish</span>
                    </div>
                    <div className="elmn">
                        <img src="images/logoi-02.svg" alt="img"/>
                        <br/>
                        <span>Ajax</span>
                    </div>
                    <div className="elmn">
                        <img src="images/logoi-03.svg" alt="img"/>
                        <br/>
                        <span>Nivea</span>
                    </div>
                    <div className="elmn">
                        <img src="images/logoi-04.svg" alt="img"/>
                        <br/>
                        <span>Dove</span>
                    </div>
                    <div className="elmn">
                        <img src="images/logoi-05.svg" alt="img"/>
                        <br/>
                        <span>Palmolive</span>
                    </div>
                    <div className="elmn">
                        <img src="images/logoi-06.svg" alt="img"/>
                        <br/>
                        <span>Cif</span>
                    </div>
                </div>
                <button className="all-brands">Svi brendovi u našem portfoliju</button>
            </div>
        </div>

        <div className="footer">
            <div className="main">
                <img src="images/Frame (1).svg" alt="img" className="footer-logo"/>
                <div className="container">
                    <div className="elm" id="info">

                        <h1>D.V.G. Company</h1>
                        <p id="lokacija">
                            <a href="https://www.google.com/maps/place/%C4%8Cantavirski+put/@46.0332804,19.6663913,14z/data=!4m6!3m5!1s0x47435fd2e32201ad:0x2f5fd4a72e5cb25c!8m2!3d46.0332823!4d19.6870444!16s%2Fg%2F1tf46y73?entry=ttu">
                            Čantavirski put bb
                            24000 Subotica, Srbija  
                            </a>
                        </p>
                        <p id="broj">
                            <a href="tel:024568555">+381 24 568 555</a>
                        </p>
                        <p id="email">
                        <a href="mailto: office@dvgcomapny.com">office@dvgcomapny.com</a>
                        </p>
                    </div>
                    <div className="elm" id="links">
                        <p><a href="#">O NAMA</a></p>
                        <p><a href="#">DVG PROIZVODI</a></p>
                        <p><a href="#">BRENDOVI</a></p>
                        <p><a href="#">DISTRIBUCIJA</a></p>
                        <p><a href="#">SARADNJA</a></p>
                        <p><a href="#">NOVOSTI</a></p>
                        <p><a href="#">KONTAKT</a></p>
                    </div>
                    <div className="elm" id="social">
                        <p>Pratite nas:</p>
                        <a href="#"><img src="images/Frame (2).svg" alt="img"/></a>
                        <a href="#"><img src="images/Frame (3).svg" alt="img"/></a>
                        <a href="#"><img src="images/Frame (4).svg" alt="img"/></a>
                        <a href="#"><img src="images/Frame (5).svg" alt="img"/></a>
                        
                    </div>
                </div>
            </div>
            <div className="sub">
                <span id="cpy">Copyright © 2021 DVG Company, Subotica d.o.o. Sva prava zadržana.</span>
                <span id="priv">Privatnost podatka</span>
                <span id="usl">Uslovi korišćenja</span>

                <span id="sp">StudioPresent</span>
                <span id="pwr">Powered by:</span>
            </div>
        </div>

        <div id="popup">
            <img src="./images/Rectangle 124.png" alt="img" id="left"/>
            <div className="container">
                
                <img src="./images/close.png" alt="X" id="x" onClick={()=> {
                    document.getElementById("popup").style.display = "none";
                    document.getElementById("overlay").style.display = "none";

                    enableScroll();
                }} />
                <h1>dobrodosli!!!</h1>
                <p>Lorem ipsum dolor sit amet, consecteturident Vero ab perferendis libero illo Veroisi soluta dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, veniam enim! Necessitatibus, illo! Nobis maiores optio eum, dolore nisi cupiditate quam rem nesciunt magni quis voluptatum recusandae similique reiciendis libero.</p>

                <div className="btn">
                    <span>Buy now!</span>
                    <img src="./images/shopping-cart.png" alt="img" id="shop"/>
                    <img src="./images/arrow.png" alt="img" id="arrow"/>
                </div>
            </div>
            
        </div>
        <div id="overlay">
        </div>

        

      </body>
    </div>
  );
}

export default App;
