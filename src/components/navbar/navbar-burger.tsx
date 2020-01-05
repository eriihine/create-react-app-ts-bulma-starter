import React, { FC } from 'react';

interface Props {
  setNavBurgerActive: React.Dispatch<React.SetStateAction<boolean>>;
  isNavBurgerActive: boolean;
}

const NavbarBurger: FC<Props> = ({
  isNavBurgerActive,
  setNavBurgerActive,
}: Props) => {
  return (
    <button
      onClick={(): void => {
        setNavBurgerActive(!isNavBurgerActive);
      }}
      className={`button navbar-burger is-primary ${
        isNavBurgerActive ? 'is-active' : ''
      }`}
      data-target="navMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default NavbarBurger;
