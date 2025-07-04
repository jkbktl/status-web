import { useCallback, useEffect, useState } from 'react'

import { useQueryClient } from '@tanstack/react-query'

export function useSynchronizedRefetch(address: string) {
  const queryClient = useQueryClient()
  const [isWindowActive, setIsWindowActive] = useState(true)

  const refetchQueries = useCallback(() => {
    if (!address) return

    queryClient.refetchQueries({ queryKey: ['assets', address] })
    queryClient.refetchQueries({ queryKey: ['collectibles', address] })
    queryClient.refetchQueries({ queryKey: ['collectible'] })
    queryClient.refetchQueries({ queryKey: ['token'] })
  }, [address, queryClient])

  useEffect(() => {
    const handleVisibilityChange = () => {
      const isNowActive = !document.hidden
      setIsWindowActive(isNowActive)

      if (isNowActive) {
        refetchQueries()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [address, queryClient, refetchQueries])

  useEffect(() => {
    if (!isWindowActive) return

    const interval = setInterval(refetchQueries, 15 * 1000)

    return () => clearInterval(interval)
  }, [isWindowActive, address, queryClient, refetchQueries])
}
