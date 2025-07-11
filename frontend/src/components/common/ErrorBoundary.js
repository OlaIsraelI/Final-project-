import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-4">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Something went wrong</h2>
          <p className="text-gray-600">Please refresh the page or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary; 