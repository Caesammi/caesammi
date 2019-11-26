import {post, get, put, del} from '../request/http'

//我们定义了一个apiAddress方法，这个方法有一个参数p，p是我们请求接口时携带的参数对象。
//而后调用了我们封装的post方法，post方法的第一个参数是我们的接口地址，第二个参数是apiAddress的p参数.

export const login = p => get('business/auth/login', p) //登录
export const logout = p => get('business/auth/logout', p) //登出
export const getSiteArea = p => get ('/business/site/getSiteInMap', p)
export const getSitePage = p => get ('business/site/getSitePage', p) //站点列表
export const getBatteryInfo = p => get ('/business/bess/getBessSafeguardInfo', p) //电池信息纵览
export const getSiteDetail = p => get ('/business/site/getSiteDetailNew', p) //站点信息详情
export const fuHeSearch = p => get ('/api/ql/plantsLoad/getWebPlantsLoadDes', p) //查询装置负荷详情
// 1:mid Top 2：mid bottom 3：right
export const creProScan = p => post ('/api/shsh/monitoringConf/addSpmConf', p) //生产监控配置新增
export const proScanList = p => get ('/api/shsh/monitoringConf/getSPMConfList', p) //生产监控配置列表
export const setProScan = p => put ('/api/shsh/monitoringConf/updateSpmConf', p) //生产监控配置修改
export const delProScan = p => del ('/api/shsh/monitoringConf/deleteShshProductionMonitoringConf', p) //生产监控装置配置删除
export const showProScan = p => get ('/api/shsh/monitoringConf/getSPMConfAndValueList', p) //生产列表数值




