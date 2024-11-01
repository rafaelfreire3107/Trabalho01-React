// Header.jsx
import React from 'react';
import { HeaderContainer, Logo, Title } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" />
      <Title>Marketplace</Title>
    </HeaderContainer>
  );
};

export default Header;
