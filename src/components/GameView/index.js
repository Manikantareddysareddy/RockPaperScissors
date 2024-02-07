import {ImageEl, Button} from './styledComponents'

const GameView = props => {
  const {Item, getTheResult} = props
  const {id, imageUrl} = Item
  let altAttribute
  if (id === 'ROCK') {
    altAttribute = 'rockButton'
  } else if (id === 'PAPER') {
    altAttribute = 'paperButton'
  } else if (id === 'SCISSORS') {
    altAttribute = 'scissorsButton'
  }
  const getTheOption = () => {
    getTheResult(id)
  }
  return (
    <div>
      <Button onClick={getTheOption} data-testid={altAttribute}>
        <ImageEl src={imageUrl} alt={id} />
      </Button>
    </div>
  )
}

export default GameView
