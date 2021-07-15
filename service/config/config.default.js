/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612169638748_4566';

  // add your middleware config here
  config.cluster={
    listen: {
      path: '',
      port: 7002,
      hostname: '0.0.0.0',
    }
  }

  config.middleware = [];
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [ '*' ]
  };
  config.cors = {

    credentials:true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  config.mysql = {
    // 单数据库信息配置
    // client: {
    //   // host
    //   host: '127.0.0.1',
    //   // host: '103.39.215.32',
    //   // 端口号
    //   port: '3306',
    //   // 用户名
    //   user: 'root',
    //   // 密码
    //   password: 'iamlwk*1994',
    //   // 数据库名
    //   database: 'react_blog',
    // },

    client: {
      // host
      host: '127.0.0.1',
      // host: '103.39.215.32',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'Aimer!23',
      // 数据库名
      database: 'react_blog',
    },

    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
