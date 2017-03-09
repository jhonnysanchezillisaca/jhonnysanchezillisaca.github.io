module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        responsive_images: {
          dev: {
            options: {
              engine: 'im',
              sizes: [{
                width: 2240,
                name: 'large',
                suffix: '_2x',
                quality: 40
            },
            {
                width: 1120,
                name: 'large',
                suffix: '_1x',
                quality: 40
             },
            {
                width: 560,
                name: 'small',
                suffix: '_1x',
                quality: 35
            },
            {
                width: 1120,
                name: "small",
                suffix: '_2x',
                quality: 35
            }]
            },

            files: [{
              expand: true,
              src: ['*.{gif,jpg,png}'],
              cwd: 'images_src/',
              dest: 'images/'
            }]
          }
        },

        /* Clear out the images directory if it exists */
        clean: {
          dev: {
            src: ['images'],
          },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
          dev: {
            options: {
              create: ['images']
            },
          },
        },

        browserSync: {
            bsFiles: {
                src : ['css/*.css', '*.html']
            },
            options: {
                    server: {
                        baseDir: "./"
                    }
                }
        }

      });

    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'browserSync']);
    // grunt.registerTask('default', ['browserSync']);


}
