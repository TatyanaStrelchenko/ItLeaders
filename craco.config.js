const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');

process.env.BROWSER = 'none';

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: 'src/antd.customize.less',
      },
    },
  ],
  plugin: CracoLessPlugin,
};
