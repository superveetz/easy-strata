module.exports = function(grunt) {
  
  grunt.initConfig({
  loopback_sdk_angular: {
      services: {
          options: {
              input: './server/server.js',
              output: './client/src/js/services/lb-services.js'
          }
      }
  },
  docular: {
      baseUrl: 'http://localhost:8000', //base tag used by Angular 
      showDocularDocs: false,
      showAngularDocs: false,
      groups: [
      {
          groupTitle: 'LoopBack',
          groupId: 'loopback',
          sections: [
          {
              id: 'lbServices',
              title: 'LoopBack Services',
              scripts: [ './client/src/js/services/lb-services.js' ]
          }
          ]
      }
      ]
  },
  // config of other tasks
  });
 
  grunt.loadNpmTasks('grunt-loopback-sdk-angular');
  grunt.loadNpmTasks('grunt-docular');
  
  grunt.registerTask('default', [
  'loopback_sdk_angular', 'docular', 'docular-server']);

};