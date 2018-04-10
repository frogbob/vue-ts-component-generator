Vue-TS-Component-Generator
====================


![Vue-TS-Component-Generator](img/vue-ts-component-generator.png)


**Generate vue typescript components.**


## Installation

### Install package

Install the package globally to use as global command in any folder

```bash
npm i -g vue-ts-component-generator
```

## Generate new component

Just run command in terminal

`vue:component generate {component}`

Just replace {component} with your component name

## Path

Since Version 0.1.6 you can set the path where your components are stored.
For now there is a default Path for the Laravel-Environmen, but you can set it to every path you want.

## Naming convention

Since version 0.1.7 the package following the component-naming-convetion of Vue-CLI.
So you should name your Components in upper-camel-case (e.g. MyHappyComponent). The package creates the component-folder in kebab-case,
the component-files itself created in the upper-camel-case.

`path/to/components/my-happy-component/MyHappyComponent.ts`

For sure you can set the component-naming as before. Only the camel-case-version is beeing affected.
