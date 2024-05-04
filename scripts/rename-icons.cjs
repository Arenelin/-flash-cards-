const path = require('path');
const fs = require('fs')
const fsp = fs.promises

const dirWithIcons = 'src/assets/icons/svg'
async function main() {
    const files = await fsp.readdir(dirWithIcons)
    files.forEach((file) => {
        const newName = file.replaceAll(' ','-')
            .replaceAll('(','')
            .replaceAll(')','').toLowerCase()
        fsp.rename(path.join(dirWithIcons, file),path.join(dirWithIcons,newName))
    })
}

void main()
