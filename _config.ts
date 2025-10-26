import lume from "lume/mod.ts";
import top from "top/mod.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume({
  location: new URL("https://dag.gal/feed2025/"),
});

site.use(top());
site.use(transformImages());
site.add("isaac");

export default site;
