import React, {useEffect, useState} from "react";
import logo from './assets/images/god.png';
import nft from './assets/images/nft.png';
import './App.css';
import {
  ThemeProvider,
  Div,
  Row,
  Col,
  DefaultTheme,
  Image,
  Button,
  Icon,
  Text,
  Notification,
} from "react-atomize";

import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const Card = <Div
            h="9rem"
            w="9rem"
            m="1rem"
            p={{ x: "1rem" }}
            shadow="3"
            hoverShadow="4"
            rounded="lg"
            d="inline-block"
            align="center"
            justify="center"
            textColor="medium"
            textAlign="center"
            bgImg={nft}
            bgSize="cover"
            cursor="pointer"
            transition
            ></Div>;

const bigCard = <Div
            h="30rem"
            w="30rem"
            m="1rem"
            p={{ x: "1rem" }}
            shadow="3"
            hoverShadow="4"
            rounded="lg"
            d="inline-block"
            align="center"
            justify="center"
            textColor="medium"
            textAlign="center"
            bgImg={nft}
            bgSize="cover"
            cursor="pointer"
            transition
            >

</Div>;

const theme = {
  ...DefaultTheme,
  grid: {
      ...DefaultTheme.grid,
      colCount: 12,
      gutterWidth: 0
  },
  fontFamily:{
      primary: 'Josefin Sans',
      secondary: 'Josefin Sans'

  },

};

  

function App() {

   


   



  return (
    <ThemeProvider theme={theme}>
      <Row
            m={{t:"1.5rem"}}>
                <Col size={{xs: 1, lg: 1}}>

                </Col>
                <Col size={{xs: 1, lg: 1}}>
                    <Image
                        src={logo}
                        h="3rem"
                        w="auto"
                    />
                    
                </Col>

                <Col size={{xs: 7, lg: 7}}>

                </Col>
                <Col size={{xs: 2, lg: 1}}>
                    
                             
                        <Button
                            h="2.5rem"
                            p={{x: "1rem"}}
                            textSize="body"
                            textColor="gray900"
                            bg="white"
                            fontFamily="primary"
                            hoverShadow="4"
                            m={{r: "0.5rem"}}
                        >
                            About
                        </Button>
                    
                </Col>

                <Col size={{xs: 1, lg: 1}}>
                    <Button
                        h="2.5rem"
                        p={{x: "1rem"}}
                        textSize="body"
                        hoverShadow="4"
                        textColor="gray900"
                        bg="white"
                        fontFamily="primary"
                        m={{r: "0.5rem"}}
                    >
                        Contact
                    </Button>
                </Col>
              
              
            </Row>
            {/* <Modal
                // isOpen={isOpen} 
                // onClose={close} 
                align="center" 
                rounded="md" 
                shadow="1"
                 >
                     {textMessage}
                  {keyText != null ? "Key:"+keyText : ""}
            </Modal> */}

         





            <section id="hero" className="container mt-5">
                <div className="overlay">
                </div>

                <div className="text-center content">
                    <h1>Go On a Good Date!</h1>
                    <p>Grab hold of the dates close to your heart</p>
                    <br/>
                    <center>
                    <Button
                        h="2.5rem"
                        p={{x: "1rem"}}
                        textSize="body"
                        hoverShadow="4"
                        shadow="3"
                        textColor="gray100"
                        bg="info700"
                        fontFamily="primary"
                        m={{r: "0.5rem"}}
                    >
                        Buy Now
                    </Button>
                    </center>
                </div>
            </section>



            <section className="container mt-7">
                <center>
                <h2 tag="span" textSize="display1" m={{ b: "4rem" }}>
                Our Story
                </h2>
{/*                 
                <Row
                 m={{t:"1.5rem"}}>
                    <Col size={{xs: 0, lg: 3}}>

                    </Col>
                    <Col size={{xs: 0, lg: 2}}>
                    <Button
                        h="2.5rem"
                        w="8rem"
                        bg="info600"
                        hoverBg="info700"
                        rounded="lg"
                        hoverShadow="4"
                        m={{ r: "1rem" }}
                    >
                        Today's Date
                    </Button>
                    </Col>
                    <Col size={{xs: 0, lg: 2}}>
                    <Button
                        h="2.5rem"
                        w="8rem"
                        bg="info600"
                        hoverBg="info700"
                        rounded="lg"
                        hoverShadow="4"
                        m={{ r: "1rem" }}
                    >
                        Special Dates
                    </Button>
                    </Col>
                    <Col size={{xs: 0, lg: 2}}>
                    <Button
                        h="2.5rem"
                        w="8rem"
                        bg="info600"
                        hoverBg="info700"
                        rounded="lg"
                        hoverShadow="4"
                        m={{ r: "1rem" }}
                    >
                        Skinned Dates
                    </Button>
                    </Col>
                    </Row> */}

<section className="container mt-5">
                <Row
                 m={{t:"2rem"}}>
             
                    <Col size={{xs: 0, lg: 4}}>
                    {bigCard}
                    </Col>
                    <Col size={{xs: 0, lg: 2}}>
                    </Col>
                    <Col size={{xs: 0, lg: 5}} >
                        <br/>
                        <br/>

                    <div id="story"> How beautiful is the memory of a loved one! But what remains with us? A picture? A date? Do you remember the date when you last saw them or when you held your baby in your hands for the first time? We feel the same way and it's our desire that you never get loose of the memory that keeps value to you, that is close to your heart. Let's capture those dates together!
                    <br/><br/>There are some dates in our life that are so important that we want to cherish them forever and own it just for ourselves. We don't want to share it with others but keep it just for us. This is the reason why we came up with this NFT project.
                    <center><br/>
                    <Button
                        h="2.5rem"
                        p={{x: "1rem"}}
                        textSize="body"
                        hoverShadow="4"
                        textColor="info700"
                        bg="white"
                        fontFamily="primary"
                        m={{r: "0.5rem"}}
                    >
                        Know More
                    </Button>
                    </center>
                    
                    </div>

                    </Col>
                    </Row>


                </section>

                


                
                <br/>

                <section className="container mt-5">
                <h2 tag="span" textSize="display1" m={{ b: "4rem" }}>
                Some Ultra Premium Dates
                </h2>

{Card}
    {Card}
    {Card}
    {Card}
    {Card}
    {Card}
    {Card}
</section>
               

                                
              
                <section className="container mt-5"></section>
                <h2 tag="span" textSize="display1" m={{ b: "4rem" }}>
                Try Our Skins!
                </h2><br/>
                <Button
                    h="2.5rem"
                    w="8rem"
                    bg="info600"
                    hoverBg="info700"
                    hoverShadow="4"
                    rounded="lg"
                    m={{ r: "1rem" }}
                >
                    Coming Soon
                </Button>
               
                </center>

                <section className="container mt-5">
                    <center>
                    <h2 tag="span" textSize="display1" m={{ b: "4rem" }}>Contact Us</h2>
                    </center>

                    <br/><br/><br/><br/><br/>


                </section>

                

            </section>

          


            <footer className="footer container-fluid">
                   
                   <div className="container">
                       <div className="row">
                           <div className="col-md-6">
                               <img className="footer-logo" h="3rem" src={logo}/>
                           </div>
                           <div className="col-md-2 links">
                               <h5>Connect With us</h5>
                               
                               <li><a href="https://instagram.com/goondate.nft" >Instagram</a></li>
                               <li><a href="https://twitter.com/GoOnDate" >Twitter</a></li>
                               <li><a href="https://www.linkedin.com/in/go-on-date-nft-b8b539229/" >LinkedIn</a></li>
                               <li><a href="https://discord.gg/h95hWP2V" >Discord</a></li>
                               <li><a href="https://in.pinterest.com/GoOnDate/_saved/" >Pinterest</a></li>
                               <li><a href="https://t.me/GoOnDateNFT" >Telegram</a></li>
                               <li><a href="https://www.reddit.com/user/GoOnDate/" >Reddit</a></li>
                               
                           </div>
                           <div className="col-md-2 links">
                               <h5>Get to Know Us</h5>
                               <li><a href="#" >About Us</a></li>
                               {/* <li><a href="#" >Careers</a></li>
                               <li><a href="#" >Press Releases</a></li> */}
                           </div>
                          
                       </div>
   
                           <p className="copyright">© 2021 GoOnDate</p>
   
                   </div>
                   </footer>
          


    </ThemeProvider>
    
  );
}

export default App;
