/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../common/Title'
import { OuterBox } from '../../common/LayoutBox'
import StyledButton1, { ButtonGroup } from '../../common/StyledButton1'
import { TableCols } from '../../common/TableStyle'
import { initialConfigForm } from '../../../modules/ConfigTypes'
import { saveConfig } from '../../../api/admin/config'
import ErrorMessage from '../../common/ErrorMessage'

const initialForm = initialConfigForm;

const ConfigForm = ({config}) => {
  const { t } = useTranslation()
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (config) {
      setForm({...config})
    }
  }, [])

  const handleSubmit = useCallback(e => {
    e.preventDefault()
    saveConfig(form)
      .then((result) => {
        setMessage(result?t('saved'):t('fail_save'))      
      })
      .catch((err) => {
        setMessage(t('fail_save'))
        console.error(err)
      })

  }, []);

  const handleChange = useCallback(e => {
    form[e.target.name] = e.target.value
    setForm({...form})
  }, [])

  const handleReset = useCallback(() => {
    console.log("test")
    setForm({...initialForm})
  }, [form]);
  return (
    <OuterBox className="content_box">
      <Title bottomline="true">{t('menu_config')}</Title>
      <form onSubmit={handleSubmit}>
        <TableCols>
          <tbody>
            <tr>
              <th>{t('config_site_title')}</th>
              <td>
                <input type="text" name="siteTitle" onChange={handleChange} value={form.siteTitle} />
              </td>
              <td></td>
            </tr>
            <tr>
              <th>{t('config_join_terms')}</th>
              <td>
                <textarea name="joinTerms" onChange={handleChange} value={form.joinTerms} />
              </td>
            </tr>
          </tbody>
        </TableCols>
        { message && <ErrorMessage>{message}</ErrorMessage>}
        <ButtonGroup width="500px">
          <StyledButton1 
            type="reset"
            color="#fff"
            bordercolor="#000"
            fcolor="#000"
            onClick={handleReset}
          >
            {t('btn_reset')}
          </StyledButton1>
          <StyledButton1 type="submit" color="#000" bordercolor="#000">
            {t('btn_save')}
          </StyledButton1>
        </ButtonGroup>
      </form>
    </OuterBox>
  )
}
export default ConfigForm
