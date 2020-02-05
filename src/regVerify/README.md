[2020_02_05_new_badge]: https://img.shields.io/static/v1?label=2020-02-05&message=new&color=red

# @agile-dev/reg-verify
帮助开发者在开发过程中快速的做一些验证判断使用的工具类库。

## 快速上手

### 安装

``` npm
npm i @agile-dev/reg-verify
```

### 导入项目中

``` js
import verify from '@agile-dev/reg-verify'
or
const verify = require('@agile-dev/reg-verify')
```

### 使用方式

``` js
import verify from '@agile-dev/reg-verify'

if(verify.isChinePhone('xxxxxxx')){
  // 执行逻辑
}

verify.isChinePhone('xxxxxxx',(state)=>{
  // state 返回的结果  true or false
  // 执行逻辑
})
```

### 按需加载
``` js
import verify , {isChinePhone} from '@agile-dev/reg-verify'
if(isChinePhone('xxxxxx')){
  // 逻辑
}

or 

import verify_life from '@agile-dev/reg-verify/life'
if(verify_life.isChinePhone('xxxxx')){
  // 逻辑
}
```


#### Babel 项目
如果你是 Babel 开发的项目的话，那么只需要使用 ``

已经涵盖的有：

## 生活常用

+ [x] isEmail 是否是正确的邮箱 
+ [x] isNumber 是否是数字
+ [x] isIp 是否是正确的IP
+ [x] isFax 是否是正确的传真号
+ [x] isChinaPhone 是否是正确的中国手机号码（11位）![2020_02_05_new_badge]([2020_02_05_new_badge])
+ [x] isUrl 是否是正确的url网址
+ [x] isAllVehicleNumber 是否是正确的车牌号（燃油车牌号 or 新能源车牌号）![2020_02_05_new_badge]([2020_02_05_new_badge])
+ [x] isFuelVehicleNumber 是否是燃油车牌号 ![2020_02_05_new_badge]([2020_02_05_new_badge])
+ [x] isNewEnergyVehicleNumber 是否是新能源车牌号 ![2020_02_05_new_badge]([2020_02_05_new_badge])
+ [x] isInt 是否是整数
+ [x] isFloat 是否是浮点数
+ [x] isEnglish 是否英文
+ [x] isChinese 是否中文
+ [x] isMoney 是否是正确的金额数字
+ [x] isEmpty 是否为空
+ [x] isIDCard 是否是正确的身份证
+ [x] isPercent 是否是正确的百分数
+ [x] isSpace 是否包含空格
+ [x] isBeforeSpace 是否开头空格 ![2020_02_05_new_badge]([2020_02_05_new_badge])
+ [x] isAfterSpace 是否末尾空格 ![2020_02_05_new_badge]([2020_02_05_new_badge])
+ [x] isChinaPostalCode 是否是中国的邮政编码 ![2020_02_05_new_badge]([2020_02_05_new_badge])

---
## 物流快递单号 
![2020_02_05_new_badge]([2020_02_05_new_badge])
+ [x] isZJSOrderId 宅急送
+ [x] isSFOrderId 顺丰速运
+ [x] isSTOOrderId 申通快递
+ [x] isEMSOrderId EMS
+ [x] isYUNDAOrderId 韵达快递
+ [x] isZTOOrderId 中通快递
+ [x] isHTKYOrderId 百世快递
+ [x] isYTOOrderId 圆通速递
+ [x] isQFKDOrderId 全峰快递
+ [x] isTTKDEXOrderId 天天快递
+ [x] isEYBOrderId EMS经济快递
+ [x] isUCOrderId 优速快递
+ [x] isDBKDOrderId 德邦快递
+ [x] isGTOOrderId 国通快递
+ [x] isSUREOrderId 速尔快递
+ [x] isFEDEXOrderId 联邦快递
+ [x] isSHQOrderId 华强物流
+ [x] isUAPEXOrderId 全一快递
+ [x] isHOAUOrderId 天地华宇
+ [x] isBESTOrderId 百世物流
+ [x] isLBOrderId 龙邦速递
+ [x] isXBOrderId 新邦物流
+ [x] isFASTOrderId 快捷快递
+ [x] isPOSTBOrderId 邮政快递包裹
+ [x] isNEDAOrderId 能达速递
+ [x] isRFDPSOrderId 如风达配送
+ [x] isDBLOrderId 德邦物流
+ [x] isYCTOrderId 黑猫宅急便
+ [x] isLTSOrderId 联昊通
+ [x] isCNEXOrderId 佳吉快递
+ [x] isHZABCOrderId 飞远(爱彼西)配送
+ [x] isXFWLOrderId 信丰物流
+ [x] isESBOrderId E速宝
+ [x] isGDEMSOrderId 广东EMS
+ [x] isQRTOrderId 增益速递

更新时间：2020/02/03 21:27

更新时间：2020/02/03 22:00  （优化代码）

更新时间：2020/02/05 22:00  （优化代码架构，新增快递号判断）