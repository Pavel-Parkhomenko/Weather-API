import React, { Component, ReactNode } from 'react'

interface IProps {
  children: ReactNode;
}

interface IState {
  error: null | Error;
}

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props)
    this.state = {
      error: null,

    }
  }

  componentDidCatch(error: Error) {
    this.setState({
      error,
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
