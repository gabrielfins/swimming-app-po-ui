import { PoTheme, PoThemeA11yEnum, PoThemeTypeEnum } from '@po-ui/ng-components';

export const defaultTheme: PoTheme = {
  name: 'default',
  type: [
    {
      light: {
        color: {
          brand: {
            "01": {

            },
            "02": {

            },
            "03": {

            }
          },
        },
        onRoot: {
          '--font-family': `'Plus Jakarta Sans', sans-serif`,
          '--font-family-theme': `'Plus Jakarta Sans', sans-serif`
        }
      },
      a11y: PoThemeA11yEnum.AA
    }
  ],
};
