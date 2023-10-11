import { createAction, handleActions } from 'redux-actions'
import { ConfigType, ConfigActionType, initialConfigForm } from './ConfigTypes'



const INFO: ConfigActionType = "config/INFO"
const UPDATE: ConfigActionType = "config/UPDATE"

export const getConfig = createAction(INFO)
export const updateConfig = createAction(UPDATE)
   
const config = handleActions({  
    [INFO]: (state: ConfigType): ConfigType => state,
    [UPDATE]: (state, { payload : configs } : { payload: ConfigType }) => ({ ...configs }),
}, initialConfigForm)

export default config