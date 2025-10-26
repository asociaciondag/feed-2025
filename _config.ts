import lume from "lume/mod.ts";
import top from "top/mod.ts";

const site = lume({
  location: new URL("https://dag.gal/feed2025/"),
});

site.use(top());

export default site;
