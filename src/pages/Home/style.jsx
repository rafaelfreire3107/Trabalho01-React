import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: #f0f2f5;
`;

export const Header = styled.header`
width: 100%;
text-align: center;
padding: 20px 0;
background-color: #1877f2;
color: white;
`;

export const Title = styled.h1`
margin: 0;
font-size: 32px;
`;

export const Category = styled.h2`
margin: 10px 0 0;
font-size: 24px;
`;

export const MainContent = styled.div`
display: flex;
width: 100%;
max-width: 1200px; /* Largura máxima do conteúdo principal */
`;

export const Sidebar = styled.div`
width: 200px; /* Largura da sidebar */
background-color: #fff;
border-right: 1px solid #ccc;
padding: 10px;
box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarItem = styled.div`
margin: 10px 0;
padding: 10px;
color: #333;
cursor: pointer;

&:hover {
background-color: #f0f2f5;
}
`;

export const ProductList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 20px;
flex: 1; /* Permite que o ProductList ocupe o espaço restante */
`;

export const ProductCard = styled.div`
background-color: white;
border: 1px solid #ccc;
border-radius: 8px;
width: 150px;
margin: 10px;
padding: 10px;
text-align: center;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

img {
max-width: 100%;
height: auto;
border-radius: 5px;
}

h3 {
font-size: 18px;
margin: 10px 0 5px;
}

p {
color: #1877f2;
font-size: 16px;
margin: 0;
}
`;
