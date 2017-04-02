import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("because of you start");
  }

  render() {
    const { complete, edit, text } = this.props;
    console.log("inside todo");
    console.log(this.props);
    console.log(complete , edit , text);


    if (edit) {
      return (
        <li>  
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        {text}
      </li>
    );
  }
}