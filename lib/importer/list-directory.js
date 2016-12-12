const fs = require('fs');
const glob = require('glob');
const path = require('path');

function listDirectory(root) {
    const stat = fs.statSync(root);
    const pattern = path.join(root, '**', '*.mkv');

    if (!stat.isDirectory()) {
        throw new Error(`"${root}" is not a directory`);
    }

    return glob.sync(pattern);
}

module.exports = listDirectory;
