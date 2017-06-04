const Styles = require('./SceneOne.css')
// const BACKGROUND = require('./Images/back.png')
// const ISLAND = require('./Images/island.png')
// const KING = require('./Images/king.png')
// const SEA_BACK = require('./Images/sea_back.png')
// const SEA_FRONT = require('./Images/sea_front.png')
import Perspective from 'utils/Perspective.js'
import UI from 'component/UI/UI.js'
import WorkFlow from 'utils/WorkFlow.js'

let Ps = new Perspective()
let Works = new WorkFlow()

class SceneOne extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      money: 10,  // 104 will fill the blank
      technology: 10,
      people: 70,
      sealevel: 0,
      choosing: true,
      handletrue: function () {},
      handlefalse: function () {},
      index: 0,
      poster: '环境大呈:',
      news: '',
      text: '我们必须要往海里投放铁，我们必须要往海里投放铁，我们必须要往海里投放铁我们必须要往海里投放铁，我们必须要往海里投放铁，我们必须要往海里投放铁我们必须要往海里投放铁，我们必须要往海里投放铁，我们必须要往海里投放铁'
    }
  }
  toggleSceneChange (index) {
    if (index === this.state.index) {
      return Promise.resolve()
    } else {
      this.setState({
        index: index
      })
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
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          self.island.style.background = url
          self.island.style.backgroundPosition = 'center'
          self.island.style.backgroundSize = '78%'
          self.island.style.backgroundRepeat = 'no-repeat'
          self.island.className = Styles['moveBack'] + ' ' + Styles['island']
          self.king.className = Styles['KingMoveBack'] + ' ' + Styles['king']
          resolve()
        }, 1000)
      })
    }
  }
  handlePanelFalse = () => {
    this.setState({
      choosing: false
    })
    this.state.handlefalse()
    this.workLoop()
  }
  handlePanelTrue = () => {
    this.setState({
      choosing: false
    })
    this.state.handletrue()
    this.workLoop()
  }
  workLoop () {
    let work = Works.loadNextWork()
    let self = this
    if (work) {
      this.toggleSceneChange(work.scene).then((res) => {
        this.showToast(work.news).then((res) => {
          this.showPanel()
          self.setState({
            choosing: true,
            poster: work.poster,
            text: work.text,
            handletrue: work.handletrue.bind(self),
            handlefalse: work.handlefalse.bind(self),
            news: work.news
          })
        })
      }, (rej) => {

      })
    }
  }
  showPanel () {
    let panel = document.getElementById('choosepanel')
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        panel.style.opacity = 1
        resolve()
      }, 500)
    })
  }
  showToast (news) {
    let toast = document.getElementById('ui-toast')
    toast.style.opacity = 0.5
    toast.innerHTML = news
    return new Promise(function (resolve, reject) {
      if (news.length > 0) {
        setTimeout(() => {
          toast.style.opacity = 0
          resolve()
        }, 3000)
      } else {
        resolve()
      }
    })
  }
  componentDidMount () {
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
    this.workLoop()
  }
  componentWillUnmount () {
    Ps.removeListener()
  }
  render () {
    return (
      <div className = {Styles['container']}>
        <UI news = {this.state.news} money = {this.state.money} technology = {this.state.technology} people = {this.state.people} text = {this.state.text} poster = {this.state.poster} choosing = {this.state.choosing} sealevel = {this.state.sealevel} handlefalse = {this.handlePanelFalse} handletrue = {this.handlePanelTrue}/>
        <div className = {Styles['background']} ref = {(background) => { this.background = background } }></div>
        <div className = {Styles['island']} ref = {(island) => { this.island = island } }></div>
        <div className = {Styles['king']} ref = {(king) => { this.king = king } }></div>
        <div className = {Styles['sea']} ref = {(sea) => { this.sea = sea } }>
          <div style={{bottom: this.state.sealevel * 8 - 120 + 'px'}} className = {Styles['sea-front'] + ' ' + Styles['moveLeft']} ref = {(seaFront) => { this.seaFront = seaFront } }></div>
          <div className = {Styles['sea-back'] + ' ' + Styles['moveRight']} ref = {(seaBack) => { this.seaBack = seaBack } }></div>
          <div style={{bottom: this.state.sealevel * 8 - 120 + 'px'}} className = {Styles['sea-front--copy'] + ' ' + Styles['moveLeft']} ref = {(seaFront2) => { this.seaFront2 = seaFront2 } }></div>
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
