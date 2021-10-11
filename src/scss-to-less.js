const fs = require('fs/promises')
const { join } = require('path')

async function readScssFile() {
  try {
    const file = await fs.readFile(join(__dirname, 'antd.customize.scss'))

    const content = file.toString()
    return content.replace(/\$/g, '@')
  } catch (err) {
    console.log('Error', err)
  }
}

async function writeLessFile(data) {
  try {
    await fs.writeFile(join(__dirname, 'antd.customize.less'), data)
  } catch (err) {
    console.log('Error', err)
  }
}

async function execute() {
  try {
    const data = await readScssFile()
    await writeLessFile(data)
  } catch (e) {
    console.log('Error', e)
  }
}

execute()
