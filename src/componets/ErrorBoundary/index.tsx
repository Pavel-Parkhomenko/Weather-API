import React, { Component, ErrorInfo, ReactNode } from 'react'

interface IProps {
  children: ReactNode;
}

interface IState {
  error: null | Error;
  errorInfo: null | ErrorInfo
}

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    const { error } = this.state
    const { children } = this.props
    if (error) {
      return <h1>{ error.message }</h1>
    }

    return children
  }
}
