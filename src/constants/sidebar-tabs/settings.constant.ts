interface Settings {
  theme: {
    light: string;
    dark: string;
    storage: string;
  };
  indentSize: {
    defaultValue: number;
    values: {
      twoSpaces: number;
      fourSpaces: number;
    };
    storage: string;
  };
  fontSize: {
    defaultValue: number;
    values: {
      small: number;
      normal: number;
      large: number;
      huge: number;
    };
    storage: string;
  };
  localization: {
    defaultValue: string;
    values: {
      ru: string;
      en: string;
    };
    storage: string;
  };
}

export const settings: Settings = {
  theme: {
    light: 'light',
    dark: 'dark',
    storage: 'codeit-theme',
  },
  indentSize: {
    defaultValue: 2,
    values: {
      twoSpaces: 2,
      fourSpaces: 4,
    },
    storage: 'codeit-indentSize',
  },
  fontSize: {
    defaultValue: 14,
    values: {
      small: 12,
      normal: 14,
      large: 18,
      huge: 22,
    },
    storage: 'codeit-fontSize',
  },
  localization: {
    defaultValue: 'en-EN',
    values: {
      ru: 'ru-RU',
      en: 'en-EN',
    },
    storage: 'codeit-localization',
  },
};
