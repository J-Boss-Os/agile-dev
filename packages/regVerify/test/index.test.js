import regVerify, { isAllVehicleNumber } from '../index'

describe('regVerify.isChinaPhone 验证中国电话', () => {
  it('输入 "18108162733" 返回 true', () => {
    expect(regVerify.isChinaPhone('18108162733')).toEqual(true)
  })
  it('输入 18108162733 返回 true', () => {
    expect(regVerify.isChinaPhone(18108162733)).toEqual(true)
  })
  it('输入 "asd18123" 返回 false', () => {
    expect(regVerify.isChinaPhone('asd18123')).toEqual(false)
  })
  it('输入 "08108162733" 返回 false', () => {
    expect(regVerify.isChinaPhone('08108162733')).toEqual(false)
  })
  it('输入 null 返回 false', () => {
    expect(regVerify.isChinaPhone(null)).toEqual(false)
  })
  it('输入 undefined 返回 false', () => {
    expect(regVerify.isChinaPhone(undefined)).toEqual(false)
    expect(regVerify.isChinaPhone()).toEqual(false)
  })
})

describe('regVerify.isEmail 验证邮箱', () => {
  it('输入 "xxx@xx.xxxx" 返回 true', () => {
    expect(regVerify.isEmail('xxxx@xxxx.xxxx')).toEqual(true)
  })
  it('输入 "123@163.com" 返回 true', () => {
    expect(regVerify.isEmail('123@163.com')).toEqual(true)
  })
  it('输入 "j-boss-123@163.com" 返回 true', () => {
    expect(regVerify.isEmail('j-boss-123@163.com')).toEqual(true)
  })
  it('输入 "xxx@xx" 返回 false', () => {
    expect(regVerify.isEmail('xxxx@xx')).toEqual(false)
  })
  it('输入 "xxx" 返回 false', () => {
    expect(regVerify.isEmail('xxx')).toEqual(false)
  })
  it('输入 null 返回 false', () => {
    expect(regVerify.isEmail(null)).toEqual(false)
  })
  it('输入 undefined 返回 false', () => {
    expect(regVerify.isEmail(undefined)).toEqual(false)
    expect(regVerify.isEmail()).toEqual(false)
  })
})

describe('regVerify.isNumber 验证数字', () => {
  it('输入 "123" 返回 true', () => {
    expect(regVerify.isEmail('123')).toEqual(false)
  })
  it('输入 "123@163.com" 返回 true', () => {
    expect(regVerify.isEmail('123@163.com')).toEqual(true)
  })
  it('输入 "j-boss-123@163.com" 返回 true', () => {
    expect(regVerify.isEmail('j-boss-123@163.com')).toEqual(true)
  })
  it('输入 "xxx@xx" 返回 false', () => {
    expect(regVerify.isEmail('xxxx@xx')).toEqual(false)
  })
  it('输入 "xxx" 返回 false', () => {
    expect(regVerify.isEmail('xxx')).toEqual(false)
  })
  it('输入 null 返回 false', () => {
    expect(regVerify.isEmail(null)).toEqual(false)
  })
  it('输入 undefined 返回 false', () => {
    expect(regVerify.isEmail(undefined)).toEqual(false)
    expect(regVerify.isEmail()).toEqual(false)
  })
})

describe('regVerify.isNumber 验证数字', () => {
  it('输入 "123" 返回 true', () => {
    expect(regVerify.isNumber('123')).toEqual(true)
  })
  it('输入 "0123" 返回 true', () => {
    expect(regVerify.isNumber("0123")).toEqual(true)
  })
  it('输入 123 返回 true', () => {
    expect(regVerify.isNumber(123)).toEqual(true)
  })
  it('输入 "asd" 返回 false', () => {
    expect(regVerify.isNumber("asd")).toEqual(false)
  })
  it('输入 "asd12$#3" 返回 false', () => {
    expect(regVerify.isNumber("asd12$#3")).toEqual(false)
  })
  it('输入 null 返回 false', () => {
    expect(regVerify.isNumber(null)).toEqual(false)
  })
  it('输入 undefined 返回 false', () => {
    expect(regVerify.isNumber(undefined)).toEqual(false)
    expect(regVerify.isNumber()).toEqual(false)
  })
})

describe('regVerify.isAllVehicleNumber 车牌号', () => {
  it('输入 "川AJE659" 返回 true', () => {
    expect(regVerify.isAllVehicleNumber('川AJE659')).toEqual(true)
  })
  it('cb模式 输入 "川AJE659" 返回 true', () => {
    isAllVehicleNumber('川AJE659', (state) => {
      expect(state).toBe(true)
    })
  })
  it('输入 null 返回 false', () => {
    expect(regVerify.isAllVehicleNumber(null)).toEqual(false)
  })
  it('输入 undefined 返回 false', () => {
    expect(regVerify.isAllVehicleNumber(undefined)).toEqual(false)
    expect(regVerify.isAllVehicleNumber()).toEqual(false)
  })
})