const { exec } = require('child_process')
const { getChangedFilesForRoots } = require('jest-changed-files')

const roots = [__dirname + '/__test__']

getChangedFilesForRoots(roots, { lastCommit: true })
  .then((result) => {
    const changedTestFiles = [...result.changedFiles]
      .filter((file) => file.endsWith('.test.js') || file.endsWith('.spec.js'))
      .map((file) => file.replace(/\\/g, '/'))

    if (changedTestFiles.length > 0) {
      exec(
        `yarn jest --verbose ${changedTestFiles.join(' ')}`,
        (error, stdout, stderr) => {
          if (error) {
            console.error(stderr)
            return
          }
          console.log(stdout)
          if (stderr) {
            console.error(`test:\n${stderr}`)
          }
        },
      )
    } else {
      console.log('No modified test files found')
    }
  })
  .catch((error) => {
    console.error(`Error getting modified files: ${error.message}`)
  })
