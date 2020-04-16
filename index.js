var shell = require("shelljs");

/** Returns the GID for this group, if it exists, or else undefined */
function getGidByName(group) {
  var lineResult = shell.exec('grep "^' + group + ':" /etc/group', { silent: true });

  if (lineResult.code !== 0) {
    return undefined;
  }

  var result = lineResult.exec("cut -d: -f3", { silent: true });

  if (result.code !== 0) {
    return undefined;
  }

  var gid = parseInt(result, 10);

  if (Number.isNaN(gid)) {
    return undefined;
  }

  return gid;
}

module.exports = getGidByName;
