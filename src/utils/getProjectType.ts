import inquirer from 'inquirer'

enum projectType {
  TS_BASIC = 'pine-basic-ts',
  TS_EXAMPLE = 'pine-example-ts',
  JS_BASIC = 'pine-basic-js',
  JS_EXAMPLE = 'pine-example-js'
}

export async function getProjectType() {
  const answer: any = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: '选择项目模板？',
      choices: [
        projectType.TS_BASIC,
        projectType.TS_EXAMPLE,
        projectType.JS_BASIC,
        projectType.JS_EXAMPLE
      ]
    }
  ])
  return answer.projectType
}
