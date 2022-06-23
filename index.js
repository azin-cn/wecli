#!/usr/bin/env node

/**
 * require函数在第一次加载模块时会运行一次模块
 */

const program = require('commander')
const package = require('./package.json')
const version = package.version
const argv = process.argv

const commands = require('./lib/core/commands')

/* 名称、版本号 */
program
  .name('wecli')
  .description('description: the tool for promoting efficiency')
  .version(version, '-V --version', 'output the current version')

program.parse(argv)