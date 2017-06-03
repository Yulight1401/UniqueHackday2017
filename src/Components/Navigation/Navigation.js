let Styles = require('./Navigation.css')

function Logo (props) {
  return (
    <div className = {Styles['logo']}>
      <section></section>
      <span>Bingyan<br/>Studio</span>
    </div>
  )
}

function MenuButton (props) {
  let className = Styles['menu-button'] + ' ' + (props.state && Styles['menu-button-close'])
  return (
    <div
    className = {className}
    onClick = {(e) => props.onClick(e)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

function Menu (props) {
  return (
    <div className = {Styles['menu'] + ' ' + (props.state ? Styles['slideInLeft'] : Styles['slideOutLeft'])}>
      <ul>
        <li className = {(props.state ? Styles['slideInRight'] : '') + ' ' + Styles['delay-100']} style = {{opacity: props.opacity}}>
          <div className = {Styles['left-line']}>
            <div className = {Styles['red-line']}></div>
            <div className = {Styles['white-line']}></div>
          </div>首页
        </li>
        <li className = {(props.state ? Styles['slideInRight'] : '') + ' ' + Styles['delay-200']} style = {{opacity: props.opacity}}>
          <div className = {Styles['right-line']}>
            <div className = {Styles['white-line']}></div>
            <div className = {Styles['red-line']}></div>
          </div>产品
        </li>
        <li className = {(props.state ? Styles['slideInRight'] : '') + ' ' + Styles['delay-300']} style = {{opacity: props.opacity}}>
          <div className = {Styles['left-line']}>
            <div className = {Styles['red-line']}></div>
            <div className = {Styles['white-line']}></div>
          </div>组别
        </li>
      </ul>
      <section className = {Styles['wechat']}></section>
      <section className = {Styles['sina']}></section>
    </div>
  )
}

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuState: false, //  菜单开启状态
      menuShow: false,  //  菜单显示状态
      opacity: 0        //  控制菜单显示
    }
  }
  handleMenuClick = (e) => {
    let state = this.state.menuState
    this.setState({menuState: !state})
    if (!state && state === this.state.menuShow) {
      this.setState({menuShow: !state})
      setTimeout(() => {
        this.setState({opacity: 1})
      }, 500)
    } else {
      setTimeout(() => {
        this.setState({menuShow: !state, opacity: 0})
      }, 500)
    }
  }
  render () {
    return (
      <div>
        <Logo/>
        <MenuButton onClick = {(e) => this.handleMenuClick(e)} state = {this.state.menuState}/>
        {this.state.menuShow && <Menu opacity = {this.state.opacity} state = {this.state.menuState}/>}
      </div>
    )
  }
}

export default Navigation
