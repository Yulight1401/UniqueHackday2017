let Styles = require('./SwitchBar.css')

function SwitchBar (props) {
  const listitem = [1, 2, 3, 4, 5, 6, 7].map((num, index) => {
    if (props.index === num) {
      return (<span className = {Styles['toggled']} key = {index}></span>)
    } else {
      return <span className = {Styles['untoggled']} key = {index}></span>
    }
  })
  return (
    <div className = {Styles['container']}>
      {listitem}
    </div>
  )
}

export default SwitchBar
