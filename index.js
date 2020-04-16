var spawnSync = require("child_process").spawnSync;

/** Returns the GID for this group, if it exists, or else undefined */
function getGidByName(group) {
  var lineResult = spawnSync("grep", ['"^' + group + ':"', "/etc/group"], { shell: true });

  if (lineResult.status !== 0) {
    return undefined;
  }

  var result = spawnSync("cut", ["-d:", "-f3"], { input: lineResult.stdout, shell: true });

  if (result.status !== 0) {
    return undefined;
  }

  var gid = parseInt(result.stdout, 10);

  if (Number.isNaN(gid)) {
    return undefined;
  }

  return gid;
}

module.exports = getGidByName;
