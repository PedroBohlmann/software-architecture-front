import React, { Component } from 'react'
import { PageWrapper } from '../../components/index'
import { Card, FormTitle, FormLabel, FormInput, Link, } from '../../common-style/index'
import { PageContentContainer, LoginButton, LoginButtonWrapper } from './style'
import { RoutePaths } from '../../constants/routes'
import './login-page.css'

export default class LoginPage extends Component {
    constructor(props: any) {
        super(props)
    }

    renderLoginForm(): JSX.Element {
        return (
            <>
                <FormTitle>Login</FormTitle>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <FormInput id='email' type='text' />
                <FormLabel htmlFor='password'>Password</FormLabel>
                <FormInput id='password' type='password' />
                <Link href={RoutePaths.REGISTER}>Não tem conta? Clique aqui para se cadastrar</Link>
                <LoginButtonWrapper>
                    <LoginButton>
                        Entrar
                    </LoginButton>
                </LoginButtonWrapper>
            </>
        )
    }

    renderLoginFormCard(): JSX.Element {
        return (
            <Card className="login-card-container">
                {this.renderLoginForm()}
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