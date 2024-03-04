/* 兴趣 */
const interestWeeklyPosts = require('../weekly/meta.json');
const interestSurveyPosts = require('../survey/meta.json');
const interestDonePosts = require('../done/meta.json');
/* 前端 */
const frontendBrowserPosts = require('../frontend/browser/meta.json');
const frontendPackagesPosts = require('../frontend/packages/meta.json');
/* 后端 */
const backendRustPosts = require('../backend/rust/meta.json');
/* 计算机知识 */
const computerKnowledgeConceptPosts = require('../computer-knowledge/concept/meta.json');
const computerKnowledgeGitPosts = require('../computer-knowledge/git/meta.json');
/* 架构 */
const architecturePosts = require('../architecture/meta.json');

const getPostInfo = p => [p.path, p.sideTitle || p.title];

const resolveSidebar = (posts) => {
  if(posts[0].category) {
    let category = [];
    for(const post of posts) {
      if(post.category) {
        category = [...category, {
          title: post.category,
          collapsable: post.collapsable || false,
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
  /* 兴趣 */
  interestWeeklySidebar: resolveSidebar(interestWeeklyPosts),
  interestSurveySidebar: resolveSidebar(interestSurveyPosts),
  interestDoneSidebar: resolveSidebar(interestDonePosts),
  /* 前端 */
  frontendBrowserSidebar: resolveSidebar(frontendBrowserPosts),
  frontendPackagesSidebar: resolveSidebar(frontendPackagesPosts),
  /* 后端 */
  backendRustSidebar: resolveSidebar(backendRustPosts),
  /* 计算机知识 */
  computerKnowledgeConceptSidebar: resolveSidebar(computerKnowledgeConceptPosts),
  computerKnowledgeGitSidebar: resolveSidebar(computerKnowledgeGitPosts),
  /* 架构 */
  architectureSidebar: resolveSidebar(architecturePosts),
}