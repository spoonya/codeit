interface Project {
  title: {
    defaultVal: string;
    value: string;
    storage: string;
  };
  html: {
    value: string;
    storage: string;
  };
  css: {
    value: string;
    storage: string;
  };
  js: {
    value: string;
    storage: string;
  };
}

const project: Project = {
  title: {
    defaultVal: 'Untitled',
    value: '',
    storage: 'codeit-title',
  },
  html: {
    value: '',
    storage: 'codeit-html',
  },
  css: {
    value: '',
    storage: 'codeit-css',
  },
  js: {
    value: '',
    storage: 'codeit-js',
  },
};

export default project;
