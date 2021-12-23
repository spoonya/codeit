export default interface Localization {
  header: {
    signIn: string;
  };
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
        language: string;
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
  console: {
    title: string;
    clear: string;
  };
}
