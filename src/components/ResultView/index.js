import {ImageEl, Para, ButtonEl, Heading, Container} from './styledComponents'

const ResultView = props => {
  const {myItem, opponentItem, gameStatus, playAgainGame} = props

  const backToGame = () => {
    playAgainGame()
  }

  return (
    <div>
      <Container>
        <div>
          <Heading>YOU</Heading>
          <ImageEl src={myItem.imageUrl} alt="your choice" />
        </div>
        <div>
          <Heading>OPPONENT</Heading>

          <ImageEl src={opponentItem.imageUrl} alt="opponent choice" />
        </div>
      </Container>

      <Para>{gameStatus}</Para>

      <ButtonEl onClick={backToGame}>PLAY AGAIN</ButtonEl>
    </div>
  )
}

export default ResultView
