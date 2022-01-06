import React, {useEffect, useState} from "react";
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


    window.solana.on("connect", () => {showModal("Wallet Connected ");setIsConnected(true);});
    window.solana.on('disconnect', () => {showModal("Wallet Disconnected");setKeyText(null);setIsConnected(false);})



  return (
    <ThemeProvider theme={theme}>
      <Row
            m={{t:"1.5rem"}}>
                <Col size={{xs: 0, lg: 1}}>

                </Col>
                <Col size={{xs: 1, lg: 1}}>
                    <Image
                        src=""
                        h="2rem"
                        w="auto"
                    />
                    
                </Col>

                <Col size={{xs: 3, lg: 6}}>

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
    </ThemeProvider>
    
  );
}

export default App;
