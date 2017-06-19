grunt.initConfig({
    docular: {
        useHtml5Mode: false, //Use angular's html5 mode? true/false.
        docular_webapp_target: '/docs', //The place where the docs will be generated
        showAngularDocs: true,
        showDocularDocs: true,
        examples: {}, //instructions for how to run the sandboxed examples
        groups: [] //groups of documentation to parse
    }
})
