const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');

process.env.BROWSER = 'none';

module.exports = {
  plugins: [{ plugin: CracoAntDesignPlugin }],
  plugin: CracoLessPlugin,
};
