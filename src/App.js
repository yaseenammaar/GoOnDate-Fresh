import React, {useEffect, useState} from "react";
import logo from './assets/images/god.png';
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
  Modal,
  Notification,
  Dropdown,
  Anchor
} from "react-atomize";

import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';




const theme = {
  ...DefaultTheme,
  grid: {
      ...DefaultTheme.grid,
      colCount: 12,
      gutterWidth: 0
  }
};

var key;

  

function App() {
  
    const [isOpen, setIsOpen] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    const [keyText, setKeyText] = useState("");
    const [textMessage, settextMessage] = useState("");


    function close() {
        setIsOpen(false)
      }

      async function connectWallet(){
        try {
            const resp = await window.solana.connect();
            key = resp.publicKey.toString();
            setKeyText(key);
            
            // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
        } catch (err) {
            // { code: 4001, message: 'User rejected the request.' }
        }
    }

     function disconnect(){
        window.solana.disconnect();
    }

    function showModal(text){
        setIsOpen(true);
        settextMessage(text);
    }
    
    function ButtonComponent(props){
        if(props.connected){
            return (
                <Button
                bg="white"
                textColor="gray900"
                p={{r: "3rem", l: "3rem"}}
                shadow="1"
                hoverShadow="2"
                fontFamily="primary"
                onClick={disconnect}
            >
                Disconnect Wallet
            </Button>
            );
        }else{
            return (
                <Button
                bg="white"
                textColor="gray900"
                p={{r: "3rem", l: "3rem"}}
                shadow="1"
                hoverShadow="2"
                fontFamily="primary"
                onClick={connectWallet}
            >
                Connect Wallet
            </Button>
            );
        }
       
    }


    window.solana.on("connect", () => {
        showModal("Wallet Connected ");
        setIsConnected(true);
        localStorage.setItem('walletKey', key);
    });
    window.solana.on('disconnect', () => {
        showModal("Wallet Disconnected");
        setKeyText(null);
        setIsConnected(false);
        localStorage.removeItem('walletKey');
    })



  return (
    <ThemeProvider theme={theme}>
      <Row
            m={{t:"1.5rem"}}>
                <Col size={{xs: 0, lg: 1}}>

                </Col>
                <Col size={{xs: 1, lg: 1}}>
                    <Image
                        src={logo}
                        h="3rem"
                        w="auto"
                    />
                    
                </Col>

                <Col size={{xs: 3, lg: 4}}>

                </Col>
                <Col size={{xs: 1, lg: 1}}>
                    
                             
                        <Button
                            h="2.5rem"
                            p={{x: "1rem"}}
                            textSize="body"
                            textColor="gray900"
                            bg="white"
                            fontFamily="primary"
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
                        textColor="gray900"
                        bg="white"
                        fontFamily="primary"
                        m={{r: "0.5rem"}}
                    >
                        Contact
                    </Button>
                </Col>
                <Col size={{xs: 1, lg: 1}}>
                    <Button
                        h="2.5rem"
                        p={{x: "1rem"}}
                        textSize="body"
                        textColor="gray900"
                        bg="white"
                        fontFamily="primary"
                        m={{r: "0.5rem"}}
                    >
                        Mint
                    </Button>
                </Col>
                <Col size={{xs: 1, lg: 2}}>
                    <ButtonComponent connected={isConnected}/>
                </Col>
            </Row>
            <Modal
                isOpen={isOpen} 
                onClose={close} 
                align="center" 
                rounded="md" 
                shadow="1"
                 >
                     {textMessage}
                  {keyText != null ? "Key:"+keyText : ""}
            </Modal>





            <section id="hero" className="container mt-5">
                <div className="overlay">
                </div>

                <div className="text-center content">
                    <h1>Go On a Good Date!</h1>
                    <p>Make your travel Worth</p>

                </div>
            </section>










            <footer className="footer container-fluid">
                   
                   <div className="container">
                       <div className="row">
                           <div className="col-md-6">
                               <img className="footer-logo" src={logo}/>
                           </div>
                           <div className="col-md-2 links">
                               <h5>Connect With us</h5>
                               
                               <li><a href="#" >Instagram</a></li>
                               <li><a href="#" >Facebook</a></li>
                               <li><a href="#" >Twitter</a></li>
                           </div>
                           <div className="col-md-2 links">
                               <h5>Get to Know Us</h5>
                               <li><a href="#" >About Us </a></li>
                               {/* <li><a href="#" >Careers</a></li>
                               <li><a href="#" >Press Releases</a></li> */}
                           </div>
                           <div className="col-md-2 links">
                               <h5>Learn</h5>
                               <li><a href="#" >To Sell </a></li>
                               <li><a href="#" >To Bid</a></li>
                           </div>
                       </div>
   
                           <p className="copyright">© 2021 GoOnDate</p>
   
                   </div>
                
   
   
                   </footer>
          


    </ThemeProvider>
    
  );
}

export default App;
