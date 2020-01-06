import { IntlShape } from 'react-intl';

/**
 *
 * @description Translates messages bases on locale. Resources are located in translations folder.
 * @param id translation message key
 * @param intl react-intl intl object
 */
export const t = (id: string, intl: IntlShape, values?: {}): string =>
  intl.formatMessage({ id }, values);
