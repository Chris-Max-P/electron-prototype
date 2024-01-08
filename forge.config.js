module.exports = {
  packagerConfig: {
    files: ['./web/dist/**/*'],
    ignore: [
      /^\/.github/,
      /^\/.idea/,
      /^\/web/,
      /^\/files/,
      /^.gitignore/
    ],
    icon: ''
  },
  rebuildConfig: {},
  makers: [
    // {
    //   name: '@electron-forge/maker-squirrel',
    //   platforms: ['win32']
    // },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32', 'darwin']
    }
  ],
};
