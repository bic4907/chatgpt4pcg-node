// import parseSourceFolderArgument from '../src/index.ts'
const { parseSourceFolderArgument } = require('../src/index.ts');

test('parseSourceFolderArgument', () => {
    process.argv.push('-s', '/src');

    expect(parseSourceFolderArgument()).toBe('/src');
});
