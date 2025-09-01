import React from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(`Caught by error booundry ${error} ${info}`);
  }

  render() {
    if (this.state.hasError) {
      return <h4>Something went wrong please try after sometime</h4>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
