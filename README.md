## 结构
#### lib
包括核心库core

## 依赖包
### commander
借助commander快速实现命令的定义，包括自定义命令命名、命令的参数、命令参数的获取、命令参数的检查等等。
```js
const program = require('commander')
```

#### 1. version
版本号使用package.json中的version，可以使用fs模块实现，但是commonjs的require函数已经可以完成加载内容，使用require即可。commander的version为函数，接收version_value。
```js
const package = require('./package.json')
const version = package.version
program.version(version_value)
```

#### 2. on

### download-git-repo
借助download-git-repo，实现克隆git仓库的内容如Vue模板、React模板等等。