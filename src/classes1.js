import React from 'react'

//<App name ="" var =""" />
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0

    }
  }

  render() {
    return(
      <div>
        <h1>Hello React</h1>
        <h2>Count is {this.state.count}</h2>
        <button onClick={() => {
          this.setState({count: this.state.count +1})
        }}>Click to increase</button>
      </div>
    )
  }
}

export default App;