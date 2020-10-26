
import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media(max-width: 400px){
      width: 340px;
  }

  @media(max-width: 320px){
    width: 270px;
}
 
`;

export const SignInTitle = styled.h2`
     margin: 10px 0;
  
`
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;