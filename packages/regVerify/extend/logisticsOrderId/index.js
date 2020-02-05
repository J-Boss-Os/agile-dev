import RegCore from '../../core/Reg-core'
import * as rules from './rules'
export * from './rules'

for (let key in rules) {
  RegCore.extend(`is${key}OrderId`, rules[key])
}
export default RegCore