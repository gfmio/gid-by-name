import shell from "shelljs";

/** Returns the GID for this group, if it exists, or else undefined */
export default function getGidByName(group) {
  const lineResult = shell.exec('grep "^' + group + ':" /etc/group', { silent: true });

  if (lineResult.code !== 0) {
    return undefined;
  }

  const result = lineResult.exec("cut -d: -f3", { silent: true });

  if (result.code !== 0) {
    return undefined;
  }

  const gid = parseInt(result, 10);

  if (Number.isNaN(gid)) {
    return undefined;
  }

  return gid;
}
