// 话题
const topicPosts = require('../topic/meta.json');
// 技术栈
const babelPosts = require('../babel/meta.json');
const htmlPosts = require('../html/meta.json');
const cssPosts = require('../css/meta.json');
const javascriptPosts = require('../javascript/meta.json');
const nodejsPosts = require('../nodejs/meta.json');
const npmPosts = require('../npm/meta.json');
const vuePosts = require('../vue/meta.json');
const vue3Posts = require('../vue3/meta.json');
const pythonPosts = require('../python/meta.json');
const reactPosts = require('../react/meta.json');
const rustPosts = require('../rust/meta.json');
const linuxPosts = require('../linux/meta.json');
const tauriPosts = require('../tauri/meta.json');
const typescriptPosts = require('../typescript/meta.json');
// 实战体系
const frontendEngineeringPosts = require('../frontend-engineering/meta.json');
const microFrontendsPosts = require('../micro-frontends/meta.json');
const browserPosts = require('../browser/meta.json');
// 架构
const architecturePosts = require('../architecture/meta.json');
// 工具方法
const readPosts = require('../read/meta.json');
const niceToolsPosts = require('../nice-tools/meta.json');
const uiPosts = require('../ui/meta.json');
const umlPosts = require('../uml/meta.json');
const gitPosts = require('../git/meta.json');
const designPatternsPosts = require('../design-patterns/meta.json');
const studyAssetsPosts = require('../study-assets/meta.json');
// 证券法律法规
const securityLawRegulationPosts = require('../security-law-regulation/meta.json');
const financialMarketBasicsPosts = require('../financial-market-basics/meta.json');
const pmpPosts = require('../pmp/meta.json');
const managePosts = require('../manage/meta.json');
const abstractPosts = require('../abstract/meta.json');
const baseKnowledgePosts = require('../base-knowledge/meta.json');
// 看世界
const worldPosts = require('../world/meta.json');

const getPostInfo = p => [p.path, p.sideTitle || p.title];

const resolveSidebar = (posts) => {
  // 判断是否有类别 category
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
  // 话题
  topicSidebar: resolveSidebar(topicPosts),
  // 技术栈
  babelSidebar: resolveSidebar(babelPosts),
  htmlSidebar: resolveSidebar(htmlPosts),
  cssSidebar: resolveSidebar(cssPosts),
  javascriptSidebar: resolveSidebar(javascriptPosts),
  nodejsSidebar: resolveSidebar(nodejsPosts),
  npmSidebar: resolveSidebar(npmPosts),
  vueSidebar: resolveSidebar(vuePosts),
  vue3Sidebar: resolveSidebar(vue3Posts),
  reactSidebar: resolveSidebar(reactPosts),
  rustSidebar: resolveSidebar(rustPosts),
  linuxSidebar: resolveSidebar(linuxPosts),
  pythonSidebar: resolveSidebar(pythonPosts),
  tauriSidebar: resolveSidebar(tauriPosts),
  typescriptSidebar: resolveSidebar(typescriptPosts),
  // 知识体系
  frontendEngineeringSidebar: resolveSidebar(frontendEngineeringPosts),
  microFrontendsSidebar: resolveSidebar(microFrontendsPosts),
  browserSidebar: resolveSidebar(browserPosts),
  // 架构
  architectureSidebar: resolveSidebar(architecturePosts),
  // 工具方法
  readSidebar: resolveSidebar(readPosts),
  niceToolsSidebar: resolveSidebar(niceToolsPosts),
  uiSidebar: resolveSidebar(uiPosts),
  umlSidebar: resolveSidebar(umlPosts),
  gitSidebar: resolveSidebar(gitPosts),
  designPatternsSidebar: resolveSidebar(designPatternsPosts),
  studyAssetsSidebar: resolveSidebar(studyAssetsPosts),
  securityLawRegulationSidebar: resolveSidebar(securityLawRegulationPosts),
  financialMarketBasicsSidebar: resolveSidebar(financialMarketBasicsPosts),
  pmpSidebar: resolveSidebar(pmpPosts),
  manageSidebar: resolveSidebar(managePosts),
  abstractSidebar: resolveSidebar(abstractPosts),
  baseKnowledgeSidebar: resolveSidebar(baseKnowledgePosts),
  // 看世界
  worldSidebar: resolveSidebar(worldPosts),
}