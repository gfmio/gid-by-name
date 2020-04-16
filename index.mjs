import { spawnSync } from "child_process";

/** Returns the GID for this group, if it exists, or else undefined */
export default function getGidByName(group) {
  const lineResult = spawnSync("grep", ['"^' + group + ':"', "/etc/group"], { shell: true });

  if (lineResult.status !== 0) {
    return undefined;
  }

  const result = spawnSync("cut", ["-d:", "-f3"], { input: lineResult.stdout, shell: true });

  if (result.status !== 0) {
    return undefined;
  }

  const gid = parseInt(result.stdout, 10);

  if (Number.isNaN(gid)) {
    return undefined;
  }

  return gid;
}
