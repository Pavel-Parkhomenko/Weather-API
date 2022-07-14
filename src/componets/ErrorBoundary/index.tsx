import React, { Component, ReactNode } from 'react'
import {
  ButtonToBack,
  Container, Message
} from '@/componets/ErrorBoundary/styled'

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

  handleToBack = () => {
    this.setState({
      error: null
    })
    window.location.reload()
  }

  render() {
    const { error } = this.state
    const { children } = this.props
    if (error) {
      return (
        <Container>
          { error.message.split('.').map((message) => (
            <Message key={message}>
              { message }
            </Message>
          )) }
          <ButtonToBack onClick={() => this.handleToBack()}>
            Перезагрузить страницу
          </ButtonToBack>
        </Container>
      )
    }

    return children
  }
}
