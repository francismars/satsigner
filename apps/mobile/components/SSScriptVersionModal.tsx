import { t } from '@/locales'
import SSCollapsible from './SSCollapsible'
import SSSelectModal from './SSSelectModal'
import SSText from './SSText'
import SSLink from './SSLink'
import SSRadioButton from './SSRadioButton'
import { setStateWithLayoutAnimation } from '@/utils/animation'
import { useState } from 'react'
import { Account } from '@/types/models/Account'
import SSIconScriptsP2pkh from './icons/SSIconScriptsP2pkh'

type ScriptVersion = NonNullable<Account['scriptVersion']>

type SSScriptVersionModalProps = {
  visible: boolean
  scriptVersion: ScriptVersion
  onSelect: (scriptVersion: ScriptVersion) => void
  onCancel: () => void
}

const scriptVersions: ScriptVersion[] = [
  'P2PKH',
  'P2SH-P2WPKH',
  'P2WPKH',
  'P2TR'
]

export default function SSScriptVersionModal({
  visible,
  scriptVersion,
  onSelect,
  onCancel
}: SSScriptVersionModalProps) {
  const [localScriptVersion, setLocalScriptVersion] = useState(scriptVersion)

  function handleOnSelectScriptVersion() {
    setLocalScriptVersion(localScriptVersion)
    onSelect(localScriptVersion)
  }

  return (
    <SSSelectModal
      visible={visible}
      title={t('account.script')}
      selectedText={`${localScriptVersion} - ${t(
        `script.${localScriptVersion.toLowerCase()}.name`
      )}`}
      selectedDescription={
        <SSCollapsible>
          <SSText color="muted" size="md">
            {t(`script.${localScriptVersion.toLowerCase()}.description.1`)}
            <SSLink
              size="md"
              text={t(`script.${localScriptVersion.toLowerCase()}.link.name`)}
              url={t(`script.${localScriptVersion.toLowerCase()}.link.url`)}
            />
            {t(`script.${localScriptVersion.toLowerCase()}.description.2`)}
          </SSText>
          <SSIconScriptsP2pkh height={80} width="100%" />
        </SSCollapsible>
      }
      onSelect={() => handleOnSelectScriptVersion()}
      onCancel={onCancel}
    >
      {scriptVersions.map((script) => (
        <SSRadioButton
          key={script}
          label={t(`script.${script.toLowerCase()}.name`) + ` (${script})`}
          selected={localScriptVersion === script}
          onPress={() =>
            setStateWithLayoutAnimation(setLocalScriptVersion, script)
          }
        />
      ))}
    </SSSelectModal>
  )
}
