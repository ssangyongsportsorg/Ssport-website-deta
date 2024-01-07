import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount () {
    Crisp.configure("ae56efc0-058b-4e4f-9d35-1a552b1fcc6d");
  }

  render () {
    return null;
  }
}
export default CrispChat
