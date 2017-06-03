const Styles = require('./SceneOne.css')
// const BACKGROUND = require('./Images/back.png')
// const ISLAND = require('./Images/island.png')
// const KING = require('./Images/king.png')
// const SEA_BACK = require('./Images/sea_back.png')
// const SEA_FRONT = require('./Images/sea_front.png')
import Perspective from 'utils/Perspective.js'
import UI from 'component/UI/UI.js'

let Ps = new Perspective()

class SceneOne extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      winWidth: 0,
      winHeight: 0
    }
  }
  toggleSceneChange (index) {
    let url
    let self = this
    if (index === 0) {
      url = 'url(' + require('./Images/island1.png') + ')'
    } else if (index === 1) {
      url = 'url(' + require('./Images/island2.png') + ')'
    } else if (index === 2) {
      url = 'url(' + require('./Images/island3.png') + ')'
    }
    this.island.className = Styles['moveDown'] + ' ' + Styles['island']
    this.sea.className = Styles['moveDown'] + ' ' + Styles['sea']
    this.king.className = Styles['KingMoveUp'] + ' ' + Styles['king']
    setTimeout(() => {
      self.island.style.background = url
      self.island.style.backgroundPosition = 'center'
      self.island.style.backgroundSize = '78%'
      self.island.style.backgroundRepeat = 'no-repeat'
      self.island.className = Styles['moveBack'] + ' ' + Styles['island']
      self.king.className = Styles['KingMoveBack'] + ' ' + Styles['king']
    }, 1000)
  }
  componentDidMount () {
    this.toggleSceneChange(2)
    Ps.addListener()
    let bg = {
      ele: this.background,
      influence: 15
    }
    let island = {
      ele: this.island,
      influence: 9
    }
    let king = {
      ele: this.king,
      influence: 4
    }
    let seaF = {
      ele: this.seaFront,
      influence: 12
    }
    let seaB = {
      ele: this.seaBack,
      influence: 13
    }
    let seaF2 = {
      ele: this.seaFront2,
      influence: 12
    }
    let seaB2 = {
      ele: this.seaBack2,
      influence: 13
    }
    Ps.pushElements(bg)
    Ps.pushElements(island)
    Ps.pushElements(king)
    Ps.pushElements(seaF)
    Ps.pushElements(seaB)
    Ps.pushElements(seaB2)
    Ps.pushElements(seaF2)
  }
  componentWillUnmount () {
    Ps.removeListener()
  }
  render () {
    return (
      <div className = {Styles['container']}>
        <UI/>
        <div className = {Styles['background']} ref = {(background) => { this.background = background } }></div>
        <div className = {Styles['island']} ref = {(island) => { this.island = island } }></div>
        <div className = {Styles['king']} ref = {(king) => { this.king = king } }></div>
        <div className = {Styles['sea']} ref = {(sea) => { this.sea = sea } }>
          <div className = {Styles['sea-front'] + ' ' + Styles['moveLeft']} ref = {(seaFront) => { this.seaFront = seaFront } }></div>
          <div className = {Styles['sea-back'] + ' ' + Styles['moveRight']} ref = {(seaBack) => { this.seaBack = seaBack } }></div>
          <div className = {Styles['sea-front--copy'] + ' ' + Styles['moveLeft']} ref = {(seaFront2) => { this.seaFront2 = seaFront2 } }></div>
          <div className = {Styles['sea-back--copy'] + ' ' + Styles['moveRight']} ref = {(seaBack2) => { this.seaBack2 = seaBack2 } }></div>
        </div>
        <div className = {Styles['particle'] + ' ' + Styles['particleMove1']} data-index = '1'></div>
        <div className = {Styles['particle'] + ' ' + Styles['particleMove2']} data-index = '2'></div>
        <div className = {Styles['particle'] + ' ' + Styles['particleMove1']} data-index = '3'></div>
        <div className = {Styles['particle'] + ' ' + Styles['particleMove2']} data-index = '4'></div>
        <div className = {Styles['particle'] + ' ' + Styles['particleMove1']} data-index = '5'></div>
        <div className = {Styles['particle'] + ' ' + Styles['particleMove2']} data-index = '6'></div>
        <div className = {Styles['particle'] + ' ' + Styles['particleMove1']} data-index = '7'></div>
      </div>
    )
  }
}

export default SceneOne
