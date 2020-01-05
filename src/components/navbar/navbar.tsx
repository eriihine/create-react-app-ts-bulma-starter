import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import { t } from '../utils/utils';
import NavbarBurger from './navbar-burger';
import DropdownItem from './dropdown-item';
import NavbarItem from './navbar-item';

interface Props {
  locale: string;
  setLocale: React.Dispatch<string>;
}

const Navbar: FC<Props> = ({ locale, setLocale }: Props) => {
  const intl = useIntl();
  const [isNavBurgerActive, setNavBurgerActive] = useState<boolean>(false);
  const [isDropdownActive, setDropdownActive] = useState<boolean>(false);

  const changeLanguage = (lan: string): (() => void) => {
    return (): void => {
      setLocale(lan);
      setNavBurgerActive(false);
      setDropdownActive(false);
    };
  };

  const getMenuItems = (locale: string): React.ReactNode => {
    const locales = ['en', 'fi'];
    const sortedLocales = isNavBurgerActive
      ? locales
      : [locale, ...locales.filter(item => item !== locale)];

    return sortedLocales.map((locale: string, index: number) => (
      <DropdownItem
        isActive={index === 0 ? isNavBurgerActive : true}
        key={`menu-item-${locale}`}
        intl={intl}
        changeLanguage={changeLanguage}
        labelId={`Text.${locale.toUpperCase()}`}
        locale={locale}
      />
    ));
  };

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label={t('AriaLabel.MainNavigation', intl)}
    >
      <div className="container">
        <div className="navbar-brand">
          <NavbarItem href="/page1" intl={intl} labelId={'Text.Page1'} />
          <NavbarItem href="/page2" intl={intl} labelId={'Text.Page2'} />
          <NavbarBurger
            isNavBurgerActive={isNavBurgerActive}
            setNavBurgerActive={setNavBurgerActive}
          />
        </div>
        <div
          className={`navbar-menu ${isNavBurgerActive ? 'is-active' : ''}`}
          id="navMenu"
        >
          <div className="navbar-end">
            <div
              className={`navbar-item has-dropdown ${
                isDropdownActive ? 'is-active' : ''
              }`}
              role="button"
              aria-label="menu"
              aria-expanded={isDropdownActive}
              onClick={(): void => {
                setDropdownActive(!isDropdownActive);
              }}
            >
              {getMenuItems(locale)}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
