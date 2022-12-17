const topicPosts = require('../topic/meta.json');
const aiPosts = require('../ai/meta.json');
const babelPosts = require('../babel/meta.json');
const htmlPosts = require('../html/meta.json');
const cPosts = require('../c/meta.json');
const cssPosts = require('../css/meta.json');
const javascriptPosts = require('../javascript/meta.json');
const jestPosts = require('../jest/meta.json');
const nodejsPosts = require('../nodejs/meta.json');
const npmPosts = require('../npm/meta.json');
const lernaPosts = require('../lerna/meta.json');
const vuePosts = require('../vue/meta.json');
const vue3Posts = require('../vue3/meta.json');
const pythonPosts = require('../python/meta.json');
const reactPosts = require('../react/meta.json');
const rustPosts = require('../rust/meta.json');
const linuxPosts = require('../linux/meta.json');
const tauriPosts = require('../tauri/meta.json');
const typescriptPosts = require('../typescript/meta.json');
const frontendEngineeringPosts = require('../frontend-engineering/meta.json');
const microFrontendsPosts = require('../micro-frontends/meta.json');
const browserPosts = require('../browser/meta.json');
const architecturePosts = require('../architecture/meta.json');
const readPosts = require('../read/meta.json');
const umlPosts = require('../uml/meta.json');
const gitPosts = require('../git/meta.json');
const designPatternsPosts = require('../design-patterns/meta.json');
const assetsPosts = require('../assets/meta.json');
const securityLawRegulationPosts = require('../security-law-regulation/meta.json');
const financialMarketBasicsPosts = require('../financial-market-basics/meta.json');
const pmpPosts = require('../pmp/meta.json');
const managePosts = require('../manage/meta.json');
const articlePosts = require('../article/meta.json');
const baseKnowledgePosts = require('../base-knowledge/meta.json');
const webpackPosts = require('../webpack/meta.json');
const webComponentPosts = require('../web-component/meta.json');
const worldPosts = require('../world/meta.json');

const getPostInfo = p => [p.path, p.sideTitle || p.title];

const resolveSidebar = (posts) => {
  if(posts[0].category) {
    let category = [];
    for(const post of posts) {
      if(post.category) {
        category = [...category, {
          title: post.category,
          collapsable: false,
          children: [
            getPostInfo(post)
          ]
        }]
      } else {
        category[category.length - 1].children.push(getPostInfo(post))
      }
    }
    return category;
  }

  return posts.map(getPostInfo)
}

module.exports = {
  aiSidebar: resolveSidebar(aiPosts),
  architectureSidebar: resolveSidebar(architecturePosts),
  articleSidebar: resolveSidebar(articlePosts),
  topicSidebar: resolveSidebar(topicPosts),
  babelSidebar: resolveSidebar(babelPosts),
  htmlSidebar: resolveSidebar(htmlPosts),
  cSidebar: resolveSidebar(cPosts),
  cssSidebar: resolveSidebar(cssPosts),
  javascriptSidebar: resolveSidebar(javascriptPosts),
  jestSidebar: resolveSidebar(jestPosts),
  nodejsSidebar: resolveSidebar(nodejsPosts),
  npmSidebar: resolveSidebar(npmPosts),
  lernaSidebar: resolveSidebar(lernaPosts),
  vueSidebar: resolveSidebar(vuePosts),
  vue3Sidebar: resolveSidebar(vue3Posts),
  reactSidebar: resolveSidebar(reactPosts),
  rustSidebar: resolveSidebar(rustPosts),
  linuxSidebar: resolveSidebar(linuxPosts),
  pythonSidebar: resolveSidebar(pythonPosts),
  tauriSidebar: resolveSidebar(tauriPosts),
  typescriptSidebar: resolveSidebar(typescriptPosts),
  frontendEngineeringSidebar: resolveSidebar(frontendEngineeringPosts),
  microFrontendsSidebar: resolveSidebar(microFrontendsPosts),
  browserSidebar: resolveSidebar(browserPosts),
  readSidebar: resolveSidebar(readPosts),
  umlSidebar: resolveSidebar(umlPosts),
  gitSidebar: resolveSidebar(gitPosts),
  designPatternsSidebar: resolveSidebar(designPatternsPosts),
  assetsSidebar: resolveSidebar(assetsPosts),
  securityLawRegulationSidebar: resolveSidebar(securityLawRegulationPosts),
  financialMarketBasicsSidebar: resolveSidebar(financialMarketBasicsPosts),
  pmpSidebar: resolveSidebar(pmpPosts),
  manageSidebar: resolveSidebar(managePosts),
  baseKnowledgeSidebar: resolveSidebar(baseKnowledgePosts),
  webpackSidebar: resolveSidebar(webpackPosts),
  webComponentSidebar: resolveSidebar(webComponentPosts),
  worldSidebar: resolveSidebar(worldPosts),
}