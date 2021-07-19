import path from 'path'
import spawn from 'cross-spawn'

export function git(root: string) {
  const command: string = 'git'
  const args: string[] = ['init']

  const child = spawn(command, args, { stdio: 'inherit' })

  return new Promise((resolve, reject) => {
    child.on('close', (code) => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`,
        })
        return
      }

      process.chdir(path.resolve(root, '..'))
      resolve(true)
    })
  })
}
