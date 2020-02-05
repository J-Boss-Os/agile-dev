/**
 * 获取目标的类型
 * @param {*} target
 */
export function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
}

/**
 * 扩展正则验证的 方法
 * @param {*} regExp 
 * @param {*} cb
 */
export function verify(rule) {
  const ruleType = getType(rule)
  if (ruleType === "function" || ruleType === "regexp") {
    return (target, cb) => {
      let res = false
      res = ruleType === "function" ? rule(target, cb) : rule.test(target);
      cb && cb(res)
      return res
    }
  } else {
    console.warn('The data you pass in should be a function or a regular')
    return null
  }
}