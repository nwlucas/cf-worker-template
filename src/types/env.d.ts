// Place custom type definitions here. You can have other type definition files elsehwere as well but this
// is just personal convention.

// define KV and global environment variables in the below interface
export interface AppEnv {
  SOMEKV: KVNamespace;
}

// Custom interface that extends Request and works with itty-router to access the magic that withParams, withContent and so on.
export interface AppRequest extends Request {
  prefix?: string;
  hostname?: string;
  content?: object;
}