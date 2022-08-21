import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Logo = styled.img`
  display: flex;
`;

const SearchBar = styled.div`
  display: flex;
  border: 1px solid black;
`;

const Input = styled.div`
  display: flex;
  border: none;
`;

const Button = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Logo src="" />
      <SearchBar>
        <Input placeholder="Enter your search..." required />
        <Button />
      </SearchBar>
    </Container>
  );
};

export default Navbar;
