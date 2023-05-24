import React from "react";

import styled from "styled-components";

export const NavBar = styled.nav`
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #272626;
`;
export const NavList = styled.ul`
  width: 70%;
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.li`
  list-style: none;
  font-size: 1.6rem;
  color: #f2f2f2;
`;

export const InputSearch = styled.input`
  width: 20%;
  height: 3vh;
  border-radius: 5px;
`;

export default function NavComponent() {
  return (
    <NavBar>
      <NavList>
        <NavItem>Comédia</NavItem>
        <NavItem>Drama</NavItem>
        <NavItem>Aventura</NavItem>
        <NavItem>Terror</NavItem>
        <NavItem>Ação</NavItem>
      </NavList>
      <SearchBar />
    </NavBar>
  );
}

const SearchBar = () => {
  return <InputSearch />;
};
