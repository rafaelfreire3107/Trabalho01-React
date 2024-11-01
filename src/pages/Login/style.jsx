import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px; 
  margin-bottom: 20px; 
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px; 
`;

export const FacebookTitle = styled.h1`
  font-size: 24px;
  color: #1877f2; 
  margin-bottom: 10px;
  text-align: left; 
  width: 100%; 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 18px;
  
  &:hover {
    background-color: #165eab;
  }
`;

export const Link = styled.a`
  margin-top: 10px;
  color: #1877f2;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const NewAccountBox = styled.div`
  margin-top: 10px; 
  padding: 10px;
  background-color: #42b72a; 
  color: white;
  border-radius: 5px;
  text-align: center;
  width: 70%;
  max-width: 300px; 
  cursor: pointer;
  font-size: 18px;
  margin: 25px;

  &:hover {
    background-color: #36a420; 
  }
`;

export const InfoText = styled.p`
  margin-top: 5px; 
  font-size: 14px; 
  text-align: center;
  color: #606770;
  width: 100%;
  max-width: 300px;
  padding: 10px;
  background-color: #f0f2f5; 
  border-radius: 5px;
`;

export const DescriptionBox = styled.div`
  background-color: #white; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px; 
  margin-right: 20px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`;
