module.exports = {
  name: 'bankiwi',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bankiwi',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
