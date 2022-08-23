// 适合写小册
const microFrontendsPosts = require('../micro-frontends/meta.json');
const designPatternsPosts = require('../design-patterns/meta.json');

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
  microFrontends: resolveSidebar(microFrontendsPosts),
  designPatterns: resolveSidebar(designPatternsPosts),
}