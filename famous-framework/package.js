Package.describe({
  name: 'nmac:famous-framework',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Famous Framework for Meteor: a frontend framework for 60fps animations',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nickmacia/meteor-famous-framework',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.use('gadicohen:modules@0.1.0', 'client');
  api.addFiles('modules.require', 'client');
  api.export('framework', 'client'); 
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nmac:famous-framework');
  api.addFiles('famous-framework-tests.js');
});
*/
