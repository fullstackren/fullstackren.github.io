// 适合写小册
const frontendEngineeringPosts = require('../frontend-engineering/meta.json');
const microFrontendsPosts = require('../micro-frontends/meta.json');
const designPatternsPosts = require('../design-patterns/meta.json');
const gitPosts = require('../git/meta.json');
const nodejsPosts = require('../nodejs/meta.json');
const studyAssetsPosts = require('../study-assets/meta.json');
const uiPosts = require('../ui/meta.json');
const conceptPosts = require('../concept/meta.json');
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
  frontendEngineeringSidebar: resolveSidebar(frontendEngineeringPosts),
  microFrontendsSidebar: resolveSidebar(microFrontendsPosts),
  designPatternsSidebar: resolveSidebar(designPatternsPosts),
  gitSidebar: resolveSidebar(gitPosts),
  nodejsSidebar: resolveSidebar(nodejsPosts),
  studyAssetsSidebar: resolveSidebar(studyAssetsPosts),
  uiSidebar: resolveSidebar(uiPosts),
  conceptSidebar: resolveSidebar(conceptPosts),
  worldSidebar: resolveSidebar(worldPosts),
}