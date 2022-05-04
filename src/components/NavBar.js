import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBare, Header, Left, Right } from './navstyle'

export default function NavBar() {
    return (
        <NavBare>
            <Header>
                <Left>
                    <h1>DocteurRaf</h1>
                </Left>
                <Right >
                    <ul>
                        <NavLink to='/' className={(nav) => nav.isActive ? 'actived' : 'navlink'} >
                            Home
                        </NavLink>
                        <NavLink to='program' className={(nav) => nav.isActive ? 'actived' : 'navlink'} >
                            Programme
                        </NavLink>
                       
                    </ul>
                </Right>
            </Header>
        </NavBare>
    )
}
