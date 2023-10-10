import { useTranslation } from 'react-i18next'
import Title from '../../common/Title'
import { OuterBox } from '../../common/LayoutBox'
import StyledButton1, { ButtonGroup } from '../../common/StyledButton1'
import { TableCols } from '../../common/TableStyle'

const ConfigForm = () => {
  const { t } = useTranslation()
  return (
    <OuterBox className="content_box">
      <Title border={true}>{t('menu_config')}</Title>
      <form>
        <TableCols>
          <tr>
            <th>{t('config_site_title')}</th>
            <td>
              <input type="text" name="siteTitle" />
            </td>
            <td></td>
          </tr>
          <tr>
            <th>{t('config_join_terms')}</th>
            <td>
              <textarea name="joinTerms"></textarea>
            </td>
          </tr>
        </TableCols>
        <ButtonGroup width="500px">
          <StyledButton1
            type="reset"
            color="#fff"
            borderColor="#000"
            fcolor="#000"
          >
            {t('btn_reset')}
          </StyledButton1>
          <StyledButton1 type="submit" color="#000" borderColor="#000">
            {t('btn_save')}
          </StyledButton1>
        </ButtonGroup>
      </form>
    </OuterBox>
  )
}
export default ConfigForm
