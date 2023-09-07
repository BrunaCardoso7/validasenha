import styled from 'styled-components';

export const ValPassword = styled.span`
    color:${props => props.valid? 'green': 'red'}
`