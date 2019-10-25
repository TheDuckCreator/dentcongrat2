import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "fontawesome"
import Content from "./assets/Content"
import Footer from "./assets/Footer"
import "./assets/main.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: "",
      show: false
    }
  }

  onChange = e => {
    const { name, value } = e.target
    console.log("Name " + name + "Code " + value)
    this.setState({
      code: value,
      show: false
    })
  }

  onCodeSubmit = user => {
    user.preventDefault()
    this.setState({
      show: true
    })
  }

  render() {
    let congratContent
    if (this.state.show == true) {
      congratContent = (
        <div>
          {" "}
          <Content code={this.state.code} />
        </div>
      )
    } else {
      congratContent = ""
    }

    return (
      <div className="container">
        <div>
          <br />
          <h3 className="kanit white acenter">Dent'34 Congratulation</h3>
          <h5 className="kanitlight white acenter">
            Enter Your Code <br />
            <div className="col-sm-6 piccenter">
              <form onSubmit={this.onCodeSubmit}>
                <input
                  className="form-control"
                  type="text"
                  name="redeem-code"
                  onChange={this.onChange}
                ></input>
                <br />
                <button class="btn btn-light kanitlight" type="submit">
                  Activate
                </button>
                <hr />
              </form>
            </div>
          </h5>
        </div>
        {congratContent}
        <Footer />
      </div>
    )
  }
}
export default App
