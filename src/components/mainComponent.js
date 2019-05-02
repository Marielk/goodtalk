import React, { Component } from 'react';
import './mainComponentStyle.css'

class mainComponent extends Component {
  constructor() {
    super();
    this.state = {
      tilts: [],
      userWord: this.userword,
      validWords: []
    }
    this.selectedTilts = [];
    this.userword = '';
    this.firsClick = true;
  }
  //bring the characters from json file
  componentWillMount() {
    fetch('./test-board-2.json')
      .then(response => response.json())
      .then(board => {
        //process the answer
        let boardObject = Object.entries(board);
        let boardContent = boardObject[0][1];
        //save all tilts to state
        this.setState({ tilts: boardContent });
      })
      .catch(console.log('fail'))
  }

  //bring the words from dictionary
  componentDidMount() {
    fetch('./dictionary.json')
      .then(response => response.json())
      .then(dictionary => {
        //process the answer
        let dictionaryObject = Object.entries(dictionary);
        let dictionaryContent = dictionaryObject[0][1];
        //save all words to state
        this.setState({ validWords: dictionaryContent });
        //console.log(this.state.validWords);
      })
      .catch(console.log('fail'))
  }

  createBoard = (tilts) => {
    // this are the variables for save the tilts for each row
    let board = [];
    let tileChildrens = [];
    let tileChildrens2 = [];
    let tileChildrens3 = [];
    let tileChildrens4 = [];
    // extracting from 4 to four tilts each time
    for (let tilt = 0; tilt < 4; tilt++) {
      tileChildrens.push(<button onClick={this.handleClick} className="tileSingle" key={tilt + 1} id={tilts[tilt]}>{tilts[tilt]}</button>)
    }
    for (let tilt = 4; tilt < 8; tilt++) {
      tileChildrens2.push(<button onClick={this.handleClick} className="tileSingle" key={tilt + 2} id={tilts[tilt]}>{tilts[tilt]}</button>)
    }
    for (let tilt = 8; tilt < 12; tilt++) {
      tileChildrens3.push(<button onClick={this.handleClick} className="tileSingle" key={tilt + 3} id={tilts[tilt]}>{tilts[tilt]}</button>)
    }
    for (let tilt = 12; tilt < 16; tilt++) {
      tileChildrens4.push(<button onClick={this.handleClick} className="tileSingle" key={tilt + 4} id={tilts[tilt]}>{tilts[tilt]}</button>)
    }
    //creating the parent div to contain and show all tills 
    board.push(
      <div className="tileBoard" key={0}>
        <div className="tileRow" key={1}>{tileChildrens}</div>
        <div className="tileRow" key={2}>{tileChildrens2}</div>
        <div className="tileRow" key={3}>{tileChildrens3}</div>
        <div className="tileRow" key={4}>{tileChildrens4}</div>
      </div>
    )
    return board;
  }

  handleClick = e => this.selecTile(e.target.id);

  selecTile(id) {
    if (this.selectedTilts.indexOf(id) === -1) {
      //change class by deafult invalid
      document.getElementById(id).className = 'tileSingleactive';
      this.selectedTilts.push(id);
      //save the characters
      let word = this.selectedTilts.join('');
      this.userword = word;
      this.setState({ userWord: this.userword });
      this.validateWord(word)
    } else {
      this.deleteTileOnClick(id);
    }
    //console.log(word)
  }

  deleteTileOnClick(id) {
    // delete from selected tilts
    for (let i = 0; i < this.selectedTilts.length; i++) {
      if (this.selectedTilts[i] === id) {
        this.firsClick = false;
        this.selectedTilts.splice(i, 1)
        let word = this.selectedTilts.join('');
        this.userword = word;
        this.setState({ userWord: this.userword });
        document.getElementById(id).className = 'tileSingle';
        //console.log(this.selectedTilts);           
      }
    }
  }

  validateWord(word){
    let isValid = this.state.validWords.includes(word.toLowerCase());
    if(isValid === true){
      this.selectedTilts.map(tilt => {
        document.getElementById(tilt).className = 'tileSingleValid';
      })
      document.getElementById('output').className = 'outPutValid';
      document.getElementById('textValid').className = 'validWordTextOk';
      document.getElementById('textInvalid').className = 'invalidWordTextHide';
    }
    //console.log(word.toLowerCase())
    //console.log(isValid);
    
  }


  resetWord() {
    //reset button looks
    this.selectedTilts.forEach(tilt => {
      document.getElementById(tilt).className = 'tileSingle';
      //console.log(tilt)
    })
    //reset state 
    this.userword = '';
    this.selectedTilts = [];
    this.setState({ userWord: this.userword })
    document.getElementById('output').className = 'outPutInvalid';
    document.getElementById('textValid').className = 'validWordText';
    document.getElementById('textInvalid').className = 'invalidWordText';
    //console.log(this.userword);
    //console.log(this.selectedTilts)
  }



  render() {
    return (
      <div className="mainContainer">
        <div className="resetButtonContainer">
          <button onClick={() => this.resetWord()} className="resetButton">Clear word <span className="x">X</span> </button>
        </div>
        {/* Validate if state is full with tilts */}
        {this.state.tilts.length === 16 ? (
          this.createBoard(this.state.tilts)
        ) : (console.log('no hay nada aun'))}
        <div className="outPut outPutInvalid" id="output">
          {this.state.userWord}
          <span className="validWordText" id="textValid">Valid</span>
          <span className="invalidWordText" id="textInvalid">invalid</span>
        </div>

      </div>
    );
  }
}

export default mainComponent;