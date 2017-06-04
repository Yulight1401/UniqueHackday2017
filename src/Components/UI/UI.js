let Styles = require('./UI.css')

function SeaLevel (props) {
  return (
    <div className = {Styles['sealevel']}>
      <p>当前海平面为{props.sealevel}米</p>
    </div>
  )
}

function DataUI (props) {
  return (
    <div className = {Styles['dataui']}>
      <div className = {Styles['dataui-money']} style = {{width: props.money}}><span>金钱：{props.money}</span></div>
      <div className = {Styles['dataui-technology']} style = {{width: props.technology}}><span>科技：{props.technology}</span></div>
      <div className = {Styles['dataui-people']} style = {{width: props.people}}><span>民意：{props.people}</span></div>
    </div>
  )
}

class ChoosePanel extends React.Component {
  showToast (text) {
    this.toast.innerHTML = text
    this.toast.style.opacity = 0.5
  }
  handleTouchStart = (e) => {
    e.target.addEventListener('touchmove', this.handleTouchMove)
    e.target.addEventListener('touchend', this.handleTouchEnd)
    this.startX = e.touches[0].pageX
  }
  handleTouchMove = (e) => {
    const MAXRAGE = 150
    let element = this.panel
    let nowX = e.touches[0].pageX
    this.offsetX = nowX - this.startX
    this.text.style.overflow = 'hidden'
    element.style.transform = 'translate(' + this.offsetX + 'px,0) rotateZ(' + this.offsetX / 20 + 'deg)'
    if (Math.abs(this.offsetX) > MAXRAGE) {
      if (this.offsetX < 0) {
        this.showToast('不好')
      } else {
        this.showToast('好')
      }
    } else {
      this.toast.style.opacity = 0
    }
  }
  handleTouchEnd = (e) => {
    const MAXRAGE = 150
    if (Math.abs(this.offsetX) > MAXRAGE) {
      if (this.offsetX < 0) {
        this.toggleFalse()
      } else {
        this.toggleTrue()
      }
    } else {
      this.panel.style.transform = 'translate(0,0)'
      this.toast.style.opacity = 0
      this.text.style.overflowY = 'scroll'
    }
    e.target.removeEventListener('touchmove', this.handleTouchMove, false)
    e.target.removeEventListener('touchend', this.handleTouchEnd, false)
  }
  toggleTrue () {
    this.props.handletrue()
    this.panel.style.opacity = 0
    this.toast.style.opacity = 0
    let self = this
    setTimeout(() => {
      self.panel.style.transform = 'translate(0, 0)'
    }, 500)
  }
  toggleFalse () {
    this.props.handlefalse()
    this.panel.style.opacity = 0
    this.toast.style.opacity = 0
    let self = this
    setTimeout(() => {
      self.panel.style.transform = 'translate(0, 0)'
    }, 500)
  }
  render () {
    return (
      <div id='choosepanel' onTouchStart = {this.handleTouchStart} className = {Styles['choosepanel-container']} ref = {(panel) => { this.panel = panel }}>
        <div className = {Styles['choosepanel-text']} ref = {(text) => { this.text = text } }>
          <p>{this.props.poster}</p>
          <p>{this.props.text}</p>
        </div>
        <div className = {Styles['choosepanel-toast']} ref = {(toast) => { this.toast = toast } } ></div>
      </div>
    )
  }
}

class UI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      money: 104,  // 104 will fill the blank
      technology: 50,
      people: 50,
      sealevel: 10,
      choosing: true,
      poster: '环境大呈:',
      text: '我们必须要往海里投放铁，我们必须要往海里投放铁，我们必须要往海里投放铁我们必须要往海里投放铁，我们必须要往海里投放铁，我们必须要往海里投放铁我们必须要往海里投放铁，我们必须要往海里投放铁，我们必须要往海里投放铁'
    }
  }
  handlePanelFalse = () => {
    this.props.handlefalse()
  }
  handlePanelTrue = () => {
    this.props.handletrue()
  }
  render () {
    return (
      <div className = {Styles['container']}>
        {this.props.choosing && <div className = {Styles['mask']}></div>}
        <div className = {Styles['toast']} id = "ui-toast">{this.props.news}</div>
        <ChoosePanel text = {this.props.text} poster = {this.props.poster} handletrue = {this.handlePanelTrue} handlefalse = {this.handlePanelFalse}/>
        <SeaLevel sealevel = {this.props.sealevel}/>
        <DataUI money = {this.props.money} technology = {this.props.technology} people = {this.props.people}/>
      </div>
    )
  }
}
export default UI
