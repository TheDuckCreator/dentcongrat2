import React, { Component } from "react"
import firebase from "firebase"
import firebaseConfig from "./FirebaseConfig"
firebase.initializeApp(firebaseConfig)
let database = firebase.database()
class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: this.props.code,
      name: "",
      photo: "",
      congratText: ""
    }
  }

  componentDidMount() {
    let code = this.state.code
    let congrat = database.ref("/dentcongrat/friend/" + code)
    congrat.on("value", snapshot => {
      let fetchName = snapshot.val() && snapshot.val().name
      let fetchPhoto = snapshot.val() && snapshot.val().photo
      let fetchCongratText = snapshot.val() && snapshot.val().congratText
      this.setState({
        name: fetchName,
        photo: fetchPhoto,
        congratText: fetchCongratText
      })
    })
  }

  render() {
    return (
      <div>
        <br />
        <img
          class="img-fluid icon-1 piccenter"
          src="https://firebasestorage.googleapis.com/v0/b/med44congrat.appspot.com/o/toothache.png?alt=media&token=3592cadd-8a8f-47c8-b99a-7d3c11ff31f4"
        />
        <h1 className="acenter kanit text-uppercase">Congratulation</h1>
        <h2 className="acenter kanit  ">{this.state.name}</h2>
        <img className="img-fluid piccenter icon-2" src={this.state.photo} />
        <br />
        <h5 className="kanitlight acenter"> {this.state.congratText}</h5>

        <p className="kanit acenter"> ติน A-Intania 50 / CoE'28</p>

        <p className="kanitlight acenter ">
          PSU Dentistry'34 Gown Ceremony <br /> 26 October 2019{" "}
        </p>
      </div>
    )
  }
}
export default Content
