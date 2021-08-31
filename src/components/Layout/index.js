import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Subtitle, Title } from './styles'

export const Layout = ({ children, title, subtitle }) => {
    return (
        <>
        <Helmet>
            { title && <title>{title} | Petgram 🐱‍🐉</title>}
            { subtitle && <meta name='descritpion' content={subtitle} /> }
        </Helmet>
        <Div>
            { title && <Title>{title}</Title> }
            { subtitle && <Subtitle>{subtitle}</Subtitle> }
            { children }
        </Div>
        </>
    )
}
