import * as React from "react"

class Box extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default function F() {
  return (
    <Box>
      <p>This is the first paragraph.</p>
      <p>This is the second paragraph.</p>
    </Box>
  );
}
