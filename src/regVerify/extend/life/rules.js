import { verify } from '../../core/utils';

// 电子邮箱
export const isEmail = verify(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/);
// 是否为空
export const isEmpty = verify(/^\s*$/);
// 中国邮政编码
export const isChinaPostalCode = verify(/\d{6}/);
// 包含空格
export const isSpace = verify(/\s+/);
// 开头空格
export const isBeforeSpace = verify(/^\s+/);
// 末尾空格
export const isAfterSpace = verify(/\s+$/);
// 数字
export const isNumber = verify(/^\d+$/);
// Ip
export const isIp = verify(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/);
// 传真号
export const isFax = verify(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/);
// 中国手机号
export const isChinaPhone = verify(/^1\d{10}/);
// 网址
export const isUrl = verify(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/);
// 金额
export const isMoney = verify(/^(0|[1-9]\d*)(\.\d+)?$/);
// 中文
export const isChinese = verify(/^[\u0391-\uFFE5]+$/);
// 英文
export const isEnglish = verify(/^[A-Za-z]+$/);
// 百分号
export const isPercent = verify(/^-?(100|(([1-9]\d|\d)(\.\d{1,2})?))%$/);
// 身份证号
export const isIDCard = verify(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);
// 整数
export const isInt = verify(/^-?\d+$/);
// 浮点数
export const isFloat = verify(/^(-?\d+)(\.\d+)?$/)