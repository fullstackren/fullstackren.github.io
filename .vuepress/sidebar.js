// 技术栈
const htmlPosts = require('../html/meta.json');
const cssPosts = require('../css/meta.json');
const javascriptPosts = require('../javascript/meta.json');
const nodejsPosts = require('../nodejs/meta.json');
const vuePosts = require('../vue/meta.json');
const reactPosts = require('../react/meta.json');
// 实战体系
const frontendEngineeringPosts = require('../frontend-engineering/meta.json');
const microFrontendsPosts = require('../micro-frontends/meta.json');
// 架构
const architecturePosts = require('../architecture/meta.json');
// 工具方法
const designPatternsPosts = require('../design-patterns/meta.json');
const gitPosts = require('../git/meta.json');
const studyAssetsPosts = require('../study-assets/meta.json');
const uiPosts = require('../ui/meta.json');
const conceptPosts = require('../concept/meta.json');
// 分享这件事
const sharePosts = require('../share/meta.json');
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
  // 技术栈
  htmlSidebar: resolveSidebar(htmlPosts),
  cssSidebar: resolveSidebar(cssPosts),
  javascriptSidebar: resolveSidebar(javascriptPosts),
  nodejsSidebar: resolveSidebar(nodejsPosts),
  vueSidebar: resolveSidebar(vuePosts),
  reactSidebar: resolveSidebar(reactPosts),
  // 实战体系
  frontendEngineeringSidebar: resolveSidebar(frontendEngineeringPosts),
  microFrontendsSidebar: resolveSidebar(microFrontendsPosts),
  // 架构
  architectureSidebar: resolveSidebar(architecturePosts),
  // 工具方法
  designPatternsSidebar: resolveSidebar(designPatternsPosts),
  gitSidebar: resolveSidebar(gitPosts),
  studyAssetsSidebar: resolveSidebar(studyAssetsPosts),
  uiSidebar: resolveSidebar(uiPosts),
  conceptSidebar: resolveSidebar(conceptPosts),
  // 分享这件事
  shareSidebar: resolveSidebar(sharePosts),
  // 看世界
  worldSidebar: resolveSidebar(worldPosts),
}