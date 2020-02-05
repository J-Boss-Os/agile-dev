import { verify } from '../../core/utils'

/**
 * 验证燃油车牌
 */
export const isFuelVehicleNumber = verify(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/);

/**
 * 验证新能源车牌
 */
export const isNewEnergyVehicleNumber = verify(/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}((\d{5}[DF]$)|([DF][A-HJ-NP-Z0-9]\d{4}$))/);

/**
 * 验证所有的车牌
 * @param {*} target 
 * @param {*} cb 
 */
export const isAllVehicleNumber = verify((target, cb) => (isFuelVehicleNumber(target, cb) || isNewEnergyVehicleNumber(target, cb)));