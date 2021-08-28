import styled from 'styled-components'

export const Button  = styled.button`
  background: #ff0099; 
  background: -webkit-linear-gradient(to right, #ff0099, #493240); 
  background: linear-gradient(to right, #ff0099, #493240); 
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100% ;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`

