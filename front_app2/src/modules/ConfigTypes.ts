export type ConfigActionType = 'config/INFO' | 'config/UPDATE'
export type ConfigType = {
    siteTitle?: string,
    joinTerms?: string
}

export const initialConfigForm: ConfigType = {
    siteTitle: '',
    joinTerms: '',
}
  