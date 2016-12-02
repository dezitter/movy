#!/bin/sh

if test -z $1; then
    echo "Missing component name"
    echo "Usage: create-component.sh movy-name"
    exit 1
fi

NAME=$1
COMPONENT_DIRECTORY="./app/public/js/$NAME"

COMPONENT_JS_FILEPATH="$COMPONENT_DIRECTORY/$NAME.component.js"
MODULE_JS_FILEPATH="$COMPONENT_DIRECTORY/$NAME.module.js"
TEMPLATE_PUG_FILEPATH="$COMPONENT_DIRECTORY/$NAME.template.pug"

COMPONENT_NAME=`echo $NAME | sed -r 's/(-)([a-z])/\U\2/g'`
CONSTRUCTOR_NAME=`echo $NAME | sed -r 's/(^|-)([a-z])/\U\2/g'`

# {{{ gen_component

gen_component () {

cat >$COMPONENT_JS_FILEPATH <<EOL
const template = require('./${NAME}.template.pug');

function ${CONSTRUCTOR_NAME}Controller() {
}

module.exports = {
    controller: [
        ${CONSTRUCTOR_NAME}Controller
    ],
    template: template()
};
EOL

}

# }}}
# {{{ gen_module

gen_module() {
cat >$MODULE_JS_FILEPATH <<EOL
const angular = require('angular');

const ${CONSTRUCTOR_NAME}Component = require('./${NAME}.component');

const ${COMPONENT_NAME}Module = angular.module('${COMPONENT_NAME}', [
]);

${COMPONENT_NAME}Module
    .component('${COMPONENT_NAME}', ${CONSTRUCTOR_NAME}Component);

module.exports = ${COMPONENT_NAME}Module;
EOL
}


# }}}
# {{{ gen_template


gen_template() {
cat >$TEMPLATE_PUG_FILEPATH <<EOL
p= "Hello <${NAME}>"
EOL
}


# }}}

read -p "Create $NAME at $COMPONENT_DIRECTORY ? (Y/n)" answer
case $answer in
    n|N|no|NO )
        echo "Exit...";
        exit 0;;

    * )
        echo "Generating component $NAME...\n";

        mkdir -p "$COMPONENT_DIRECTORY"

        gen_component
        echo "Component file created at '$COMPONENT_JS_FILEPATH'"

        gen_module
        echo "Module file created at '$MODULE_JS_FILEPATH'"

        gen_template
        echo "Template file created at '$TEMPLATE_PUG_FILEPATH'"

        break;;
esac
