import React, { Component } from "react"





export default class stt extends Component {
    

  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!window.SpeechRecognition) {
      console.log('SpeechRecognition is not supported from your browser!');
      return;
    }

    this.recognition = new window.SpeechRecognition();

    this.recognition.continous = true
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US'
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen() {

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      this.recognition.start()
      this.recognition.onend = () => {
        console.log("...continue listening...")
        this.recognition.start()
      }

    } else {
      this.recognition.stop()
      this.recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    this.recognition.onstart = () => {
        console.log("Listening!")
        
    }

    

    let finalTranscript = ''
    this.recognition.onresult = event => {
      let interimTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').innerHTML = finalTranscript

    
    }
    
 
    
    this.recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

   




  }

  render() {
    return (
      <div style={container}>
        <button  onClick={this.toggleListen} >Recording</button>
     
        <div id='interim' style={interim}></div>
        <div id='final' style={final}></div>
      </div>
    )
  }
}




//-------------------------CSS------------------------------------

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },

  interim: {
    color: 'gray',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  },
  final: {
    color: 'black',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  }
}

const { container, button, interim, final } = styles