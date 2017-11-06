import React from "react";
import Reactomate from "../src/Renderer";

Reactomate.run(
  <page url="https://google.com">
    <type selector="#lst-ib" text="Real unicorn sighting" />
    <click selector="input[type='submit']:nth-child(1)" />
  </page>
);
