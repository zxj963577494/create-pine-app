# Create-Pine-App

Creates a react application using the command line.

[![NPM version](https://img.shields.io/npm/v/create-pine-app.svg?style=flat)](https://npmjs.org/package/create-pine-app) [![NPM downloads](http://img.shields.io/npm/dm/create-pine-app.svg?style=flat)](https://npmjs.org/package/create-pine-app)

## Quick Start

```bash
npx create-pine-app myapp
cd myapp
npm start
```

## Other choices

### npx

```bash
npx create-pine-app myapp
```

## npm

```bash
npm init pine-app myapp
```

## yarn

```bash
yarn create pine-app myapp
```

## globally

```bash
yarn global add create-pine-app
create-pine-app myapp
```

## LICENSE

MIT

## 模板说明

支持 `TypeScript` 的 React 脚手架

### :star: 特性

- 支持 ES6+ 或 TypeScript 编写源码，编译生成生产代码
- 集成代码风格校验 (eslint)
- 集成单元测试环境（jest+enzyme）
- 集成测试覆盖率（istanbul）
- 集成 git commit 校验（lint-staged）
- 集成代码格式化（prettier)
- 集成后台服务（express)
- 集成代码热替换（react-hot-loader）
- 集成 mock（umi-mock)
- 集成 API 代理（http-proxy-middleware)
- 集成 docker

### :pill: 兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://browserl.ist/images/android.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Android | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | IOS >= 8                                                                                                                                                                                                      | Android >= 4.4                                                                                                                                                | last 2 versions                                                                                                                                                                                           |

### :open_file_folder: 目录介绍

    ├── dist 编译产出代码
    ├── docs 项目文档
    ├── internals 内部部件，包括 webpack 等 node 脚本
    ├── mock mock 文件
    ├── public 公共文件
    ├── server 服务端，承载 HMR，mock，proxy
    ├── src 源代码
