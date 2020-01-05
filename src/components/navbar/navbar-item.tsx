import React, { FC } from 'react';
import { IntlShape } from 'react-intl';
import { useLocation } from 'react-router';
import { t } from '../utils/utils';

interface Props {
  intl: IntlShape;
  labelId: string;
  href: string;
}

const NavbarItem: FC<Props> = ({ intl, href, labelId }: Props) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <a
      href={href}
      className={`navbar-item ${pathname === href && 'is-active'}`}
    >
      {t(labelId, intl)}
    </a>
  );
};

export default NavbarItem;
