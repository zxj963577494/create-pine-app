import { Command, flags } from '@oclif/command'
import chalk from 'chalk'
import path from 'path'
import yosay from 'yosay'

import { createAppDir } from './utils/createAppDir'
import { checkAppDir } from './utils/checkAppDir'
import { getProjectType } from './utils/getProjectType'
import { createApp } from './utils/createApp'
import { setAppName } from './utils/setAppName'
import { install } from './utils/install'
import { showTips } from './utils/showTips'
import { git } from './utils/git'

const { green, yellow } = chalk

class CreatePineApp extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'appName' }]

  async run() {
    const { args } = this.parse(CreatePineApp)
    const appName: string = args.appName
    if (!appName) {
      return this.log(yellow('required project name, eg: '), green('create-pine-app myapp'))
    }

    const root = path.resolve(appName)

    try {
      const projectType = await getProjectType()
      createAppDir(root)
      checkAppDir(root, appName)
      console.log(yosay('您正在初始化 pine 项目...'))
      await createApp(root, projectType)
      setAppName(root, appName)
      await git(root)
      await install(root)
      showTips(root, appName)
    } catch (error) {
      this.log(error)
    }
  }
}

export = CreatePineApp
