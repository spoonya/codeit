export default interface Localization {
  header: {
    signIn: string;
    run: string;
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
      alert: string;
    };
    settings: {
      title: string;
      general: {
        title: string;
        lightTheme: string;
        language: string;
        layout: {
          title: string;
          values: {
            vertical: string;
            horizontal: string;
          };
        };
      };
      editor: {
        title: string;
        liveMode: string;
        fontSize: {
          title: string;
          values: {
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
