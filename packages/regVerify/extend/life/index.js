import RegCore from '../../core/Reg-core'
import * as rules from './rules'
import * as vehicleNumber from './isVehicleNumber'
export * from './rules'
export * from './isVehicleNumber'

const life = {
  ...vehicleNumber,
  ...rules
}

for (let key in life) {
  RegCore.extend(key, life[key])
}

export default RegCore