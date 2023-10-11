import apiRequest from "../../../lib/apiRequest"
import { ConfigType } from "../../../modules/ConfigTypes"

export const saveConfig = (form: ConfigType) => new Promise<boolean>((resolve, reject) => {
    apiRequest("/config/save", "POST", form)
    .then((res:any) => {
        resolve(res.data.success)
    })
    .catch((err) => reject(err))
})

export const getConfig = () => new Promise<ConfigType>((resolve, reject) => {
    apiRequest("/config/info")
    .then((res:any) => {
        if (res.data.success)  {
            resolve(res.data.data)
        } else {
            reject(res)
        }
    })
    .catch(err => console.error(err))
});