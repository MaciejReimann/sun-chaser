import keys_dev from "./keys_dev";
import keys_prod from "./keys_prod";

interface ApiKeys {
  API_KEY?: string;
  UNSPLASH?: string;
}

let keys: ApiKeys;

if (process.env.NODE_ENV === "production") {
  keys = keys_prod;
} else {
  keys = keys_dev;
}

export default keys;
