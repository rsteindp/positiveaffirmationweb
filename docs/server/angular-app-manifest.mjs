
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/legal"
  },
  {
    "renderMode": 2,
    "route": "/terms-and-conditions"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2242, hash: '5bf8d04a5876594e0edabd133535f14b3ce85d8d00ec8844156d4ec926276356', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: 'aab4f5d243c4503e71c072074cc8a2533eb2e4fc30602be3595813ffba45690d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'legal/index.html': {size: 12494, hash: '0b98a79ea3138eb0bb24538aa138cfdb99595017f567a04db5f3eea84565c501', text: () => import('./assets-chunks/legal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22757, hash: 'cf6e44a512ff93c0bd8a397ddde125f86a6f31f97130ac19dc8e3d91a6ad3990', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'terms-and-conditions/index.html': {size: 12513, hash: '4e0ce7f5a61510db8e018f255ec0afa6573d17738a7ab530dfc51642c6a0316a', text: () => import('./assets-chunks/terms-and-conditions_index_html.mjs').then(m => m.default)},
    'styles-T4FL4N3F.css': {size: 14217, hash: 'JXvaqcK2B1s', text: () => import('./assets-chunks/styles-T4FL4N3F_css.mjs').then(m => m.default)}
  },
};
