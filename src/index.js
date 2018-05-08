import React, { Component } from 'react'
import { propTypes, defaultProps } from './props'
import { shouldUpdate, getBreak, itemStyles } from './utils'
import './index.scss'

export default class Flex extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps
  constructor(props) {
    super(props);
    this.state = {
      breakPoint: -1
    }
  }
  setBreakPoint = () => {
    if(shouldUpdate(this.state, this.props)) {
      this.setState({...this.state, ...getBreak(this.props)})
    }
  }
  componentDidMount() {
    this.setBreakPoint()
    window.addEventListener('resize', () => this.setBreakPoint(this.state, this.props))
  }
  componentWillUpdate(nextProps, nextState) {
    if(this.props !== nextProps) {
      this.setState({...nextState, ...getBreak(nextProps)})
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setBreakPoint)
  }
  render() {
    const styles = itemStyles(this.state, this.props)
    const flexItems = this.props.children.map((item, index) =>
      <div key={index} className="flex__item" style={styles}>
        <div className="flex__content">
          {item}
        </div>
      </div>
    );
    return (
      <div className="flex">
        <div className="flex__container">
          {flexItems}
        </div>
      </div>
    )
  }
}