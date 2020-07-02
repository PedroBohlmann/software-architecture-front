import React, { Component } from 'react'
import { PageWrapper, LoginForm } from '../../components/index'
import { Card } from '../../common-style/index'
import { PageContentContainer } from './style'
import { connect } from 'react-redux'
import * as map from './login-page-map'
import { User } from '../../../types/user'
import './login-page.css'

interface LoginPageProps {
    loggedUser?: User,
    setLoggedUser: () => void
}
interface LoginPageState { }

class LoginPage extends Component<LoginPageProps, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props)
    }

    renderLoginFormCard(): JSX.Element {
        return (
            <Card className="login-card-container">
                <LoginForm />
            </Card>
        )
    }

    render(): JSX.Element {
        return (
            <PageWrapper>
                <PageContentContainer>
                    {this.renderLoginFormCard()}
                </PageContentContainer>
            </PageWrapper>
        )
    }
}

const LoginPageConnected = connect(map.mapStateToProps, map.mapActionsToProps)(LoginPage)
export {
    LoginPageConnected,
    LoginPage,
}