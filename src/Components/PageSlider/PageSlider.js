const Styles = require('./PageSlider.css')

function Dots (props) {
  const Dot = (props) => {
    return (
      <li className = {Styles['dots-dot']}></li>
    )
  }
  let dots = []
  for (let i = 0; i < props.nums; i++) {
    dots.push(<Dot key = {i} />)
  }
  return (
    <ul className = {Styles['dots-container']}>
      {dots}
    </ul>
  )
}

function Fragments (props) {
  return (
    <div className = {Styles['fragment-container']}>
      <div className = {Styles['fragment-item']} data-index = "1">123</div>
      <div className = {Styles['fragment-item']} data-index = "2">456</div>
    </div>
  )
}

class PageSlider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0, // The page that on showing,
      left: 0, // The relative left to left
      nums: 0
    }
  }
  autoScroll () {

  }
  toggleDot () {

  }
  handleTouchdown = (e) => {

  }
  handleTouchmove = (e) => {

  }
  handleTouchup = (e) => {

  }
  componentwillMount () {
  }
  render () {
    return (
      <div className = {Styles['slider-container']}>
        <Fragments/>
        <Dots nums = {8}/>
      </div>
    )
  }

}
export default PageSlider
