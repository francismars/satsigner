import { Image } from 'expo-image'
import { TouchableOpacity } from 'react-native'

import SSHStack from '@/layouts/SSHStack'
import SSVStack from '@/layouts/SSVStack'
import { i18n } from '@/locales'
import { Colors } from '@/styles'
import { type Account } from '@/types/models/Account'
import { formatNumber } from '@/utils/format'

import SSText from './SSText'

type SSAccountCardProps = {
  account: Account
  onPress(): void
}

export default function SSAccountCard({
  account,
  onPress
}: SSAccountCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onPress()}>
      <SSHStack justifyBetween>
        <SSVStack gap="xs">
          <SSText size="xs" style={{ color: Colors.gray[500] }}>
            {account.fingerprint}
          </SSText>
          <SSText size="lg" color="muted">
            {account.name}
          </SSText>
          <SSHStack gap="xs" style={{ alignItems: 'baseline' }}>
            <SSText size="3xl" color="white">
              {formatNumber(account.summary.balance)}
            </SSText>
            <SSText size="xl" color="muted">
              {i18n.t('bitcoin.sats').toLowerCase()}
            </SSText>
          </SSHStack>
          <SSHStack gap="xs" style={{ alignItems: 'baseline' }}>
            <SSText color="muted">2.19</SSText>
            <SSText size="xs" style={{ color: Colors.gray[500] }}>
              USD
            </SSText>
          </SSHStack>
          <SSHStack>
            <SSVStack gap="xxs">
              <SSText color="white">
                {formatNumber(account.summary.numberOfAddresses)}
              </SSText>
              <SSText size="xs" color="muted">
                {i18n.t('accountList.childAccounts.0')}
                {'\n'}
                {i18n.t('accountList.childAccounts.1')}
              </SSText>
            </SSVStack>
            <SSVStack gap="xxs">
              <SSText color="white">
                {formatNumber(account.summary.numberOfTransactions)}
              </SSText>
              <SSText size="xs" color="muted">
                {i18n.t('accountList.totalTransactions.0')}
                {'\n'}
                {i18n.t('accountList.totalTransactions.1')}
              </SSText>
            </SSVStack>
            <SSVStack gap="xxs">
              <SSText color="white">
                {formatNumber(account.summary.numberOfUtxos)}
              </SSText>
              <SSText size="xs" color="muted">
                {i18n.t('accountList.spendableOutputs.0')}
                {'\n'}
                {i18n.t('accountList.spendableOutputs.1')}
              </SSText>
            </SSVStack>
            <SSVStack gap="xxs">
              <SSText color="white">
                {formatNumber(account.summary.satsInMempool)}
              </SSText>
              <SSText size="xs" color="muted">
                {i18n.t('accountList.satsInMempool.0')}
                {'\n'}
                {i18n.t('accountList.satsInMempool.1')}
              </SSText>
            </SSVStack>
          </SSHStack>
        </SSVStack>
        <Image
          style={{ width: 6, height: 11.6 }}
          source={require('@/assets/icons/chevron-right.svg')}
        />
      </SSHStack>
    </TouchableOpacity>
  )
}
