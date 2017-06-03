let Styles = require('./ImageSlider.css')

const images = [
  {
    src: require('assets/Product/husttuodan.jpeg'),
    name: '华科脱单',
    className: 'left',
    id: 1
  }, {
    src: require('assets/Product/hustonline.png'),
    className: 'center',
    name: '华中大在线',
    id: 2
  }, {
    src: require('assets/Product/nini.png'),
    className: 'right',
    name: '匿匿',
    id: 3
  }
]
const itemList = images.map((item) =>
  <section className = {Styles['item'] + ' ' + Styles[item.className]} key = {item.id}>
    <img src = {item.src}/>
    <span>{item.name}</span>
  </section>
)

class ImageSlider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  componentwillMount () {
    console.log('123')
  }
  handleTouch = (e) => {

  }
  render () {
    return (
      <div className = {Styles['container']}>
        {itemList}
      </div>
    )
  }
}

export default ImageSlider
