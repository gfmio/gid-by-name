#!/usr/bin/env node

var getGidByName = require("./index");

process.argv.slice(2).forEach(function (value) {
  var gid = getGidByName(value);
  process.stdout.write((typeof gid === "undefined" ? "" : gid.toString()) + "\n");
});
