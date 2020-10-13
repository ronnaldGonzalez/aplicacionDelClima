import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state={
            hasError: false
        }
    }

    // metodo propio de react que renderiza errores

    static getDerivedStateFromError(error){
        return {hasError:true}
    }

    componentDidCatch(error,errorInfo){
        console.log("error info", errorInfo);
    }

    render() {
        return (
            this.state.hasError?
            <h1>Hubo un error</h1>
            :
            this.props.children
        )
    }
}
