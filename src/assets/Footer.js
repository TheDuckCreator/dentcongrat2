import React, { Component } from "react"
class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p className="kanitlight white acenter">
          <div>
            Icons made by -
            <a
              href="https://www.flaticon.com/authors/nikita-golubev"
              title="Nikita Golubev"
              className="text-light"
            >
              Nikita Golubev
            </a>
            - from -
            <a
              href="https://www.flaticon.com/"
              className="text-light"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/freepik"
              className="text-light"
              title="Freepik"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              className="text-light"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </div>{" "}
          <br />
          Made with Love By Tin and{" "}
          <a href="https://www.theduckcreator.in.th" className="text-light">
            TDC
          </a>
          <br />
          ผลงานนี้ ใช้
          <a
            rel="license"
            className="text-light"
            href="http://creativecommons.org/licenses/by/4.0/"
          >
            สัญญาอนุญาตของครีเอทีฟคอมมอนส์แบบ แสดงที่มา 4.0 International
          </a>
          .
        </p>
      </div>
    )
  }
}
export default Footer
