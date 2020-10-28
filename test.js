import "./test-setup.js";

import { test } from "zora";
import * as abbr from "./index.js";
import * as leipzig from "./leipzig.js";

test("index.js", (t) => {
  t.is(
    abbr.leipzig,
    leipzig.abbreviations,
    'exports leipzig abbreviations as "leipzig"'
  );
});

test("leipzig.js", (t) => {
  const keys = [...leipzig.abbreviations.keys()];
  const definitions = [...leipzig.abbreviations.values()];

  t.ok(
    keys.every((k) => typeof k === "string"),
    "every abbreviation key is a string"
  );

  t.ok(
    definitions.every((d) => typeof d === "string"),
    "every abbreviation definition is a string"
  );
});
