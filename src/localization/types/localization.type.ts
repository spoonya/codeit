export default interface Localization {
  tooltips: {
    sidebar: {
      share: string;
      settings: string;
    };
  };
  sidebar: {
    share: {
      title: string;
      label: string;
      button: string;
    };
    settings: {
      title: string;
      general: {
        title: string;
        lightTheme: string;
        lang: string;
      };
      editor: {
        title: string;
        fontSize: {
          title: string;
          variants: {
            small: string;
            normal: string;
            large: string;
            huge: string;
          };
        };
        indentSize: {
          title: string;
        };
      };
    };
  };
}
