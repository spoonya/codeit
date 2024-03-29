interface Settings {
  theme: {
    defaultValue: string;
    values: {
      light: string;
      dark: string;
    };
    storage: string;
  };
  autorun: {
    defaultValue: string;
    values: {
      auto: string;
      manually: string;
    };
    storage: string;
  };
  layout: {
    defaultValue: string;
    values: {
      horizontal: string;
      vertical: string;
    };
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
  indentType: {
    defaultValue: boolean;
    values: {
      spaces: boolean;
      tabs: boolean;
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
    defaultValue: 'dark',
    values: {
      light: 'light',
      dark: 'dark',
    },
    storage: 'codeit-theme',
  },
  autorun: {
    defaultValue: 'auto',
    values: {
      auto: 'auto',
      manually: 'manually',
    },
    storage: 'codeit-live',
  },
  layout: {
    defaultValue: 'vertical',
    values: {
      horizontal: 'horizontal',
      vertical: 'vertical',
    },
    storage: 'codeit-layout',
  },
  indentSize: {
    defaultValue: 2,
    values: {
      twoSpaces: 2,
      fourSpaces: 4,
    },
    storage: 'codeit-indentSize',
  },
  indentType: {
    defaultValue: true,
    values: {
      spaces: true,
      tabs: false,
    },
    storage: 'codeit-indentType',
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
