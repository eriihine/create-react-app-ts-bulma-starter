import React, { FC } from 'react';
import { IntlShape } from 'react-intl';
import { t } from '../utils/utils';

interface Props {
  changeLanguage: (lan: string) => () => void;
  isActive: boolean;
  intl: IntlShape;
  labelId: string;
  locale: string;
}

const DropdownItem: FC<Props> = (props: Props) => {
  return (
    <div
      className={`${
        props.isActive ? 'navbar-dropdown is-boxed i' : 'navbar-item'
      }`}
    >
      <div
        role="button"
        aria-label={t(props.labelId, props.intl)}
        className={`${props.isActive ? 'navbar-item' : 'navbar-link'}`}
        onClick={props.changeLanguage(props.locale)}
      >
        {t(props.labelId, props.intl)}
      </div>
    </div>
  );
};

export default DropdownItem;
