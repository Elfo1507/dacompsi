import HeaderStyledComponent from "./headerStyles";

const Header = () => {
  return (
    <HeaderStyledComponent>
      <div>
        <img src="" alt="logo dacompsi" />
      </div>
      <div>
        <a href="#oquee">O que é o DACompSI?</a>
        <a href="#quemsomos">Quem somos?</a>
        <a href="#recursos">Recursos</a>
      </div>
    </HeaderStyledComponent>
  );
};

export default Header;
