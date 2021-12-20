interface Settings {
  readonly indentSize: {
    readonly defaultValue: number;
    readonly values: {
      readonly twoSpaces: number;
      readonly fourSpaces: number;
    };
    readonly storage: string;
  };
  readonly fontSize: {
    readonly defaultValue: number;
    readonly values: {
      readonly small: number;
      readonly normal: number;
      readonly large: number;
      readonly huge: number;
    };
    readonly storage: string;
  };
  readonly language: {
    readonly defaultValue: string;
    readonly values: {
      readonly ru: string;
      readonly en: string;
    };
    readonly storage: string;
  };
}

export const settings: Settings = {
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
      small: 10,
      normal: 14,
      large: 18,
      huge: 24,
    },
    storage: 'codeit-fontSize',
  },
  language: {
    defaultValue: 'en-EN',
    values: {
      ru: 'ru-RU',
      en: 'en-EN',
    },
    storage: 'codeit-localization',
  },
};
