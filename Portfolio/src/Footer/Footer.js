import styled from 'styled-components'

export const ContainerFooter = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

@media screen and (max-width: 767px){
    padding: 20px 0px;
    p{
        display: none;
    } 
}

p{
    color: #fff;
}

p a{
    text-decoration: none;
    color: #33ffff;
}
`

export const Logo = styled.h1`
color: #fff;
font-size: 2.3em;
letter-spacing: 2px;
`
export const Logocolor = styled.span`
color: #33ffff;
`