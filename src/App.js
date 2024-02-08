import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import GameView from './components/GameView'

import ResultView from './components/ResultView'

import {ScorePara} from './components/GameView/styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    scoreCount: 0,
    viewGame: true,
    choiceList: choicesList,
    myObj: [],
    opponentObj: [],
    status: '',
  }

  getTheResult = id => {
    const {choiceList, viewGame} = this.state
    const myChoice = id.toLowerCase()

    const opponentChoice = choiceList[
      Math.floor(Math.random() * choicesList.length)
    ].id.toLowerCase()

    const myChoiceObj = choiceList.find(
      each => each.id === myChoice.toUpperCase(),
    )
    const opponentChoiceObj = choiceList.find(
      each => each.id === opponentChoice.toUpperCase(),
    )
    console.log(opponentChoiceObj)

    if (myChoice === 'paper' && opponentChoice === 'rock') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount + 1,
        status: 'YOU WON',
      }))
    } else if (myChoice === 'scissors' && opponentChoice === 'paper') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount + 1,
        status: 'YOU WON',
      }))
    } else if (myChoice === 'rock' && opponentChoice === 'scissors') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount + 1,
        status: 'YOU WON',
      }))
    } else if (myChoice === 'scissors' && opponentChoice === 'rock') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount - 1,
        status: 'YOU LOSE',
      }))
    } else if (myChoice === 'rock' && opponentChoice === 'paper') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount - 1,
        status: 'YOU LOSE',
      }))
    } else if (myChoice === 'paper' && opponentChoice === 'scissors') {
      this.setState(prevState => ({
        scoreCount: prevState.scoreCount - 1,
        status: 'YOU LOSE',
      }))
    } else {
      this.setState({status: 'IT IS DRAW'})
    }
    this.setState({
      myObj: myChoiceObj,
      opponentObj: opponentChoiceObj,
      viewGame: !viewGame,
    })
  }

  playAgainGame = () => {
    const {viewGame} = this.state
    this.setState({viewGame: !viewGame})
  }

  render() {
    const {
      scoreCount,
      viewGame,
      choiceList,
      myObj,
      opponentObj,
      status,
    } = this.state

    return (
      <div className="bg-container">
        <div className="top-container">
          <div className="heading-container">
            <h1 className="heading">ROCK PAPER SCISSORS</h1>
          </div>
          <div className="score-container">
            <p className="para">Score </p>
            <ScorePara className="score-para">{scoreCount}</ScorePara>
          </div>
        </div>
        {viewGame === false ? (
          <div className="ul-container">
            <ResultView
              myItem={myObj}
              opponentItem={opponentObj}
              gameStatus={status}
              playAgainGame={this.playAgainGame}
            />
          </div>
        ) : (
          <div className="ul-container">
            {choiceList.map(eachItem => (
              <GameView
                Item={eachItem}
                key={eachItem.id}
                getTheResult={this.getTheResult}
              />
            ))}
          </div>
        )}

        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Rules
              </button>
            }
          >
            {close => (
              <>
                <div className="popups-container">
                  <div className="icon-container">
                    <button onClick={() => close()} type="button">
                      {' '}
                      <RiCloseLine className="icon" />
                    </button>
                  </div>

                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                      className="image"
                    />
                  </div>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
