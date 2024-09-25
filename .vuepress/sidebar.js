/* 兴趣 */
const interestDaylyPosts = require('../dayly/meta.json');
const interestWeeklyPosts = require('../weekly/meta.json');
const interestSurveyPosts = require('../survey/meta.json');
const interestDonePosts = require('../done/meta.json');
const interestFollowPosts = require('../follow/meta.json');

/* 前端 */
const frontendBasicPosts = require('../frontend/basic/meta.json');
const frontendBrowserPosts = require('../frontend/browser/meta.json');
const frontendPackagesPosts = require('../frontend/packages/meta.json');
const frontendJavaScriptPosts = require('../frontend/javascript/meta.json');
const frontendMicroAppPosts = require('../frontend/micro-app/meta.json');
const frontendTypeScriptPosts = require('../frontend/typescript/meta.json');
const frontendHtmlPosts = require('../frontend/html/meta.json');
const frontendWindowPosts = require('../frontend/window/meta.json');
const frontendReactPosts = require('../frontend/react/meta.json');
const frontendVuePosts = require('../frontend/vue/meta.json');

/* 后端 */
const backendBasicPosts = require('../backend/basic/meta.json');
const backendRustPosts = require('../backend/rust/meta.json');
const backendNodejsPosts = require('../backend/nodejs/meta.json');

/* 计算机知识 */
const computerKnowledgeConceptPosts = require('../computer-knowledge/concept/meta.json');
const computerKnowledgeGitPosts = require('../computer-knowledge/git/meta.json');
const computerKnowledgeTreePosts = require('../computer-knowledge/tree/meta.json');
const computerKnowledgeEncryptionDecryptionPosts = require('../computer-knowledge/encryption-decryption/meta.json');
const computerKnowledgeHttpPosts = require('../computer-knowledge/http/meta.json'); // HTTP
const architecturePosts = require('../architecture/meta.json'); // 架构
const securityPosts = require('../security/meta.json'); // 安全


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
  interestDaylySidebar: resolveSidebar(interestDaylyPosts),
  interestWeeklySidebar: resolveSidebar(interestWeeklyPosts),
  interestSurveySidebar: resolveSidebar(interestSurveyPosts),
  interestDoneSidebar: resolveSidebar(interestDonePosts),
  interestFollowSidebar: resolveSidebar(interestFollowPosts),

  /* 前端 */
  frontendBasicSidebar: resolveSidebar(frontendBasicPosts),
  frontendBrowserSidebar: resolveSidebar(frontendBrowserPosts),
  frontendPackagesSidebar: resolveSidebar(frontendPackagesPosts),
  frontendJavaScriptSidebar: resolveSidebar(frontendJavaScriptPosts),
  frontendMicroAppSidebar: resolveSidebar(frontendMicroAppPosts),
  frontendTypeScriptSidebar: resolveSidebar(frontendTypeScriptPosts),
  frontendHtmlSidebar: resolveSidebar(frontendHtmlPosts),
  frontendWindowSidebar: resolveSidebar(frontendWindowPosts),
  frontendReactSidebar: resolveSidebar(frontendReactPosts),
  frontendVueSidebar: resolveSidebar(frontendVuePosts),

  /* 后端 */
  backendBasicSidebar: resolveSidebar(backendBasicPosts),
  backendRustSidebar: resolveSidebar(backendRustPosts),
  backendNodejsSidebar: resolveSidebar(backendNodejsPosts),
  
  /* 计算机知识 */
  computerKnowledgeConceptSidebar: resolveSidebar(computerKnowledgeConceptPosts),
  computerKnowledgeGitSidebar: resolveSidebar(computerKnowledgeGitPosts),
  computerKnowledgeTreeSidebar: resolveSidebar(computerKnowledgeTreePosts),
  computerKnowledgeEncryptionDecryptionSidebar: resolveSidebar(computerKnowledgeEncryptionDecryptionPosts),
  computerKnowledgeHttpSidebar: resolveSidebar(computerKnowledgeHttpPosts),
  architectureSidebar: resolveSidebar(architecturePosts), // 架构
  securitySidebar: resolveSidebar(securityPosts), // 安全
}