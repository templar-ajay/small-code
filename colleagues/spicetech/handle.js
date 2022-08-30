const url = "https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings?autoSkip=true&autoplay=true&resume=false"
// const url = "https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/writing-template-strings/"

function getHandle(url) { return url.split('/').filter(x => x !== "").pop().match(/[a-z0-9-_]{1,}/i)[0] }
const handle = getHandle(url)

console.log(handle);
