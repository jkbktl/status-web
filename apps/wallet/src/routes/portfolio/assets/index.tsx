'use client'

import { Suspense } from 'react'

import { Avatar, Skeleton } from '@status-im/components'
import {
  AssetsList,
  Balance,
  PinExtension,
  StickyHeaderContainer,
} from '@status-im/wallet/components'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'

import { ActionButtons } from '@/components/action-buttons'
import { TabLink } from '@/components/tab-link'
import { usePinExtension } from '@/hooks/use-pin-extension'
import { apiClient } from '@/providers/api-client'
import { useWallet } from '@/providers/wallet-context'

import type { CustomisationColorType } from '@status-im/wallet/components'

type Account = {
  name: string
  emoji: string
  color: CustomisationColorType
  address: string
  wallet?: {
    connector: string
    connected: boolean
  }
}

export const Route = createFileRoute('/portfolio/assets/')({
  component: RouteComponent,
  beforeLoad: async () => {
    const wallets = await apiClient.wallet.all.query()
    if (!wallets || wallets.length === 0) {
      throw redirect({ to: '/onboarding' })
    }
  },
  head: () => ({
    meta: [
      {
        title: 'Extension | Wallet | Portfolio',
      },
    ],
  }),
})

function RouteComponent() {
  const { currentWallet, isLoading: isWalletLoading } = useWallet()
  const { isPinExtension, handleClose } = usePinExtension()

  const handleSelect = (url: string, options?: { scroll?: boolean }) => {
    // Handle the selection of an asset
    console.log('Selected asset URL:', url)
    console.log('Scroll option:', options?.scroll)
  }

  const [showHiddenSummary, setShowHiddenSummary] = useState(false)

  const handleShowHiddenSummary = () => {
    setShowHiddenSummary(!showHiddenSummary)
  }

  // todo: export trpc client with api router and used instead
  // todo: cache
  const { data: assets, isLoading } = useQuery({
    queryKey: ['assets', currentWallet?.activeAccounts[0].address],
    queryFn: async () => {
      if (!currentWallet?.activeAccounts[0].address) {
        throw new Error('No wallet address available')
      }

      const url = new URL(
        `${import.meta.env.WXT_STATUS_API_URL}/api/trpc/assets.all`,
      )
      url.searchParams.set(
        'input',
        // encodeURIComponent(
        JSON.stringify({
          json: {
            address: currentWallet.activeAccounts[0].address,
            networks: [
              'ethereum',
              'optimism',
              'arbitrum',
              'base',
              'polygon',
              'bsc',
            ],
          },
        }),
        // ),
      )

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch assets.')
      }

      const body = await response.json()
      return body.result.data.json.assets
    },
    enabled: !!currentWallet?.activeAccounts[0].address && !isWalletLoading,
    staleTime: 60 * 60 * 1000, // 1 hour
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  if (!currentWallet) {
    return <div>No wallet selected</div>
  }

  const summary = {
    hidden: {
      total_balance: 0,
      total_eur: 0,
      total_eur_24h_change: 0.0,
      total_percentage_24h_change: 0.0,
    },
    visible: {
      total_balance: 203.0,
      total_eur: 203.0,
      total_eur_24h_change: 10.0,
      total_percentage_24h_change: 2.4,
    },
  }

  const account: Account = {
    name: 'Peachy Wallet',
    emoji: '🍑',
    color: 'magenta',
    address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
  }

  const actionsButtonsData = {
    address: 'portfolio', // This should be the address of the account coming from the URL. Wrote to have active state
    pathname: '/portfolio/assets',
    searchAndSortValues: {
      inputValue: '',
      updateSearchParam: () => {},
      orderByColumn: 'name',
      ascending: true,
      onOrderByChange: () => {},
      sortOptions: {
        name: 'Name',
        balance: 'Balance',
        '24h': '24H%',
        value: 'Value',
        price: 'Price',
      },
    },
  }

  return (
    <div className="grid flex-1 divide-x divide-neutral-10 overflow-hidden xl:grid-cols-[auto_1fr]">
      {/* Sidebar nav */}
      <div className="hidden px-3 py-2 xl:block">nav</div>

      {/* Main content */}
      <div className="flex divide-x divide-default-neutral-20">
        <div className="flex grow flex-col 2xl:basis-1/2">
          <div className="relative h-[calc(100vh-56px)] overflow-auto">
            {isLoading ? (
              <div className="flex min-h-full items-center justify-center">
                <div className="size-5 animate-spin rounded-full border-b-2 border-neutral-50"></div>
              </div>
            ) : (
              <StickyHeaderContainer
                isLarge
                className="px-6 xl:px-12"
                leftSlot={
                  <Suspense
                    fallback={
                      <div className="flex items-center gap-2">
                        <Skeleton
                          height={20}
                          width={20}
                          className="rounded-10"
                          variant="secondary"
                        />
                        <Skeleton
                          height={20}
                          width={160}
                          className="rounded-10"
                          variant="secondary"
                        />
                      </div>
                    }
                  >
                    <div
                      className="hidden items-center gap-1.5 xl:flex"
                      data-customisation={account.color}
                    >
                      <Avatar
                        type="account"
                        name={account.name}
                        emoji={account.emoji}
                        size="24"
                        bgOpacity="20"
                      />
                      <div className="text-15 font-semibold text-neutral-100">
                        {account.name}
                      </div>
                    </div>
                    <Balance
                      summary={
                        showHiddenSummary ? summary.visible : summary.hidden
                      }
                      onShowHiddenSummary={handleShowHiddenSummary}
                    />
                  </Suspense>
                }
                rightSlot={
                  <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center">
                    <TabLink
                      href="/portfolio/assets"
                      className="w-full justify-center text-center sm:w-fit"
                    >
                      Assets
                    </TabLink>
                    <TabLink href="/portfolio/collectibles">
                      Collectibles
                    </TabLink>
                  </div>
                }
              >
                <div className="relative -mt-8 flex flex-1 flex-col px-3 xl:mt-0 xl:px-12">
                  <div className="mb-5 flex flex-col gap-2 px-3">
                    <div
                      className="hidden items-center gap-1.5 xl:flex"
                      data-customisation={account.color}
                    >
                      <Avatar
                        type="account"
                        name={account.name}
                        emoji={account.emoji}
                        size="24"
                        bgOpacity="20"
                      />
                      <div className="text-15 font-semibold text-neutral-100">
                        {account.name}
                      </div>
                    </div>

                    <div className="mb-4">
                      <Balance
                        summary={
                          showHiddenSummary ? summary.visible : summary.hidden
                        }
                        onShowHiddenSummary={handleShowHiddenSummary}
                      />
                    </div>

                    <ActionButtons {...actionsButtonsData} />
                  </div>

                  {assets ? (
                    <AssetsList
                      assets={assets}
                      onSelect={handleSelect}
                      clearSearch={() => {
                        console.log('Search cleared')
                      }}
                      searchParams={new URLSearchParams()}
                      pathname="/portfolio/"
                    />
                  ) : (
                    <div className="mt-4 flex flex-col gap-3">Empty state</div>
                  )}
                </div>
              </StickyHeaderContainer>
            )}
          </div>
        </div>

        <div className="hidden basis-1/2 flex-col bg-neutral-10 2xl:flex">
          {/* {detail} */}
        </div>
      </div>
      {isPinExtension && (
        <div className="absolute right-5 top-20">
          <PinExtension onClose={handleClose} />
        </div>
      )}
    </div>
  )
}
