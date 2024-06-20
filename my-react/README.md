## setting

```
# install node
nvm install --lts --latest-npm
echo "lts/*" > .nvmrc
nvm install
nvm use

# install yarn
# https://yarnpkg.com/getting-started/install
corepack enable

# create react app
yarn create react-app my-react --template typescript
cd my-react

# upgrade yarn
yarn set version stable

# add dependencies
yarn add -D  eslint prettier  eslint-config-prettier @eslint/js @types/eslint

# upgrade libraries
yarn upgrade-interactive
yarn install
```
