# Zlatmax

Sup on basic configuration of Webpack 5 & Gulp 4.

## Start using for a new project

`git clone <this repo>` - clone the repo
Run npm i to install dependencies

Run commands in terminal:

`run dev` - start development build

`run gulp build` - production build

`run gulp cache` - production build without cache

`run gulp backend` - backend build

`run gulp zip` - code paked in zip

## Folder and file structure

```
├── src/                          # Sources
│   ├── js                        # Scripts
│   │   └── main.js               # Main script
│   │   ├── _vendor.js            # File with library connections
│   │   ├── _components.js        # File with component connections
│   │   ├── components            # js components
│   │   ├── vendor                # js library files
│   ├── scss                      # Site styles (sass preprocessor in scss syntax)
│   │   └── main.scss             # File for connecting styles
│   │   └── vendor.scss           # The file for connecting library styles from the vendor folder
│   │   └── _fonts.scss           # File for connecting fonts
│   │   └── _mixins.scss          # File for connecting mixins from the mixins folder
│   │   └── _vars.scss            # File for writing css or scss variables
│   │   └── _global.scss          # File for writing global styles
│   │   ├── components            # Scss components
│   │   ├── mixins                # Folder for storing ready-made sass components
│   │   ├── vendor                # Folder for storing local css styles of libraries
│   ├── partials                  # Folder to store the html parts of the page
│   ├── img                       # Folder for storing pictures
│   │   ├── svg                   # special folder to convert svg to sprite
│   ├── resources                 # Folder for storing other assets - php, video files, favicon, etc.
│   │   ├── fonts                 # Folder for storing fonts in woff2 format
│   └── index.html                # Main html file
└── .ecrc                         # Package settings file editorconfig-checker (excludes unnecessary folders)
└── .editorconfig                 # File with code formatting settings
└── .htmlhintrc                   # TMLHint validator settings file
└── .prettierrc                   # Prettier settings file
└── .stylelintrc                  # Stylelint settings file
└── gulpfile.js                   # Gulp settings file
└── package.json                  # File with build settings and installed packages
└── README.md                     # Assembly documentation
```
