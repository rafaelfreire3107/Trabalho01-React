// Sidebar.jsx
import React from 'react';
import { SidebarContainer, SidebarItem } from './style';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Categorias</h2>
      <SidebarItem>Explorar tudo</SidebarItem>
      <SidebarItem>Notificações</SidebarItem>
      <SidebarItem>Caixa de Entrada</SidebarItem>
      <SidebarItem>Compra</SidebarItem>
      <SidebarItem>Venda</SidebarItem>
      <SidebarItem>Veículos</SidebarItem>
      <SidebarItem>Locação de imóveis</SidebarItem>
      <SidebarItem>Artigos domésticos</SidebarItem>
      <SidebarItem>Artigos esportivos</SidebarItem>
      <SidebarItem>Artigos para animais de estimação</SidebarItem>
      <SidebarItem>Artigos para escritório</SidebarItem>
      <SidebarItem>Brinquedos e jogos</SidebarItem>
      <SidebarItem>Classificados</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
