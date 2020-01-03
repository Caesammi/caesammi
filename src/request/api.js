import {post, get, put, del} from '../request/http'

//我们定义了一个apiAddress方法，这个方法有一个参数p，p是我们请求接口时携带的参数对象。
//而后调用了我们封装的post方法，post方法的第一个参数是我们的接口地址，第二个参数是apiAddress的p参数.

export const login = p => get('#', p) //登录





