# gid-by-name

This package provides a utility function for retrieving a group's GID by its
name. You can also install it globally to make it available as a command.

## Install

```sh
# With yarn (locally)
yarn add gid-by-name;

# With yarn (globally)
yarn global add gid-by-name;

# With npm (locally)
npm install gid-by-name;

# With npm (globally)
npm install -g gid-by-name;
```

## Usage

The module returns a single function that accepts a group name. It returns the
GID if the group exists or undefined otherwise.

With TypeScript / ES modules:

```ts
import getGidbyName from "gid-by-name";

console.log(getGidByName("some-group"));
```

With CommonJS:

```js
var getGidbyName = require("gid-by-name");

console.log(getGidByName("some-group"));
```

## CLI usage

Once installed globally, the CLI tool accepts any number of group names as
parameters and prints out the GID for each one in a new line. If a group does
not exist, an empty line is printed.

```sh
gid-by-name some-group some-other-group;
```

## License

[MIT](LICENSE)
