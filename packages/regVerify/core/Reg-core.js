import { verify, getType } from './utils'
class CRegVerifyLife {
  constructor() {
    this.getType = getType
  }
  /**
   * 对外扩展API
   * @method extend
   * @name { String } 扩展的验证名称
   * @rule { RegExp | Function } 验证规则
   * @return { Boolean } false 或 true
   */
  extend(name, rule) {
    const ruleType = this.getType(rule)
    if (ruleType === "function" || ruleType === "regexp") {
      this[name] = verify(rule)
    } else {
      console.warn(`【${name}】：The data you pass in should be a function or a regular 【${ruleType}】`)
    }
  }
}

const RegVerifyLife = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new CRegVerifyLife();
    }
    return instance;
  }
})();


const instance = new RegVerifyLife()

export default instance