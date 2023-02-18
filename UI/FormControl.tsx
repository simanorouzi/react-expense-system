import * as React from 'react';
import styled from 'styled-components';

const FormControl = styled.div`

& input{
border: solid 1px ${(props) => (props.invalid ? 'red' : 'black')};
border-radius: 5px;
padding: 2px;
margin-left: 5px;
  &:hover{
    background-color:rgba(238, 205, 202, 0.842)
  }
  &:focus{
    border-color:red
  }
}

& label{
color: ${(props) => (props.invalid ? 'red' : 'black')};
font-size:14px
}

& .testClass{
  color:#eee;
}

@media(min-width: 768px){
  
  & button{
    width:100%
    background-color:bue
  }
}
`;

export default FormControl;
