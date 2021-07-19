import chalk from 'chalk'
const download = require('download-git-repo')

const { cyan } = chalk

export async function createApp(root: string, type: string) {
  const url = `zxj963577494/${type}`
  return new Promise((resolve, reject) => {
    download(url, root, (err: any) => {
      console.log(err)
      if (err) return reject(err)
      resolve(true)
      console.log(`Creating a new Pine app in ${chalk.green(root)}.`)
      console.log()
      console.log('Installing packages. This might take a couple of minutes.')
      console.log(`Installing ${cyan('react')}, ${cyan('react-dom')}, and ${cyan('pine')}...`)
      console.log()
    })
  })
}
