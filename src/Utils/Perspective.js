
/**
 * Perspective - Description
 * this class add listener to orientation
 * push a element into it with a influence number
 * this class will change the element's translateXY
 *
 */
class Perspective {
  constructor () {
    this.elements = []
  }
  addListener () {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.handleOrientation, false)
    } else {
      console.error('oops, your agent can not support orientation')
    }
  }
  removeListener () {
    window.DeviceOrientationEvent = null
    delete this
  }
  handleOrientation = (e) => {
    let alpha = e.alpha
    let beta = e.beta
    let gamma = e.gamma
    this.updateElements(alpha, beta, gamma)
  }
  updateElements (a, b, r) {
    this.elements.map((ele) => {
      const influence = ele.influence / 50
      const element = ele.ele
      element.style.transition = 'all 0.1s'
      element.style.transform = 'translateX(' + influence * a + 'px) translateY(' + influence * (90 + r) + 'px)'
    })
  }

  /**
   * pushElements - Description
   *
   * @param {type} ele Description
   *
   * object
   *  influence -number
   *  ele -element
   *
   * @return {type} Description
   */
  pushElements (ele) {
    this.elements.push(ele)
  }
}

export default Perspective
