import inquirer from 'inquirer'

enum projectType {
  TS_BASIC = 'pine-basic-ts',
  JS_BASIC = 'pine-basic-js',
  JS_MOBILE_EXAMPLE = 'pine-mobile-example-js',
  REACT_VITE_WEBAPCK_BOILERPLATE = 'react-vite-webapck-boilerplate',
}

export async function getProjectType() {
  const answer: any = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: '选择项目模板？',
      choices: [
        projectType.TS_BASIC,
        projectType.JS_BASIC,
        projectType.JS_MOBILE_EXAMPLE,
        projectType.REACT_VITE_WEBAPCK_BOILERPLATE,
      ],
    },
  ])
  return answer.projectType
}
