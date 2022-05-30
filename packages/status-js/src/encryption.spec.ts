import { createSymKeyFromPassword } from './encryption'

describe('Encryption', () => {
  test('Generate symmetric key from password', async () => {
    const str = 'arbitrary data here'
    const symKey = await createSymKeyFromPassword(str)

    expect(Buffer.from(symKey).toString('hex')).toEqual(
      'c49ad65ebf2a7b7253bf400e3d27719362a91b2c9b9f54d50a69117021666c33'
    )
  })

  test('Generate symmetric key from password for chat', async () => {
    const str =
      '0x02dcec6041fb999d65f1d33363e08c93d3c1f6f0fbbb26add383e2cf46c2b921f41dc14fd8-9a8b-4df5-a358-2c3067be5439'
    const symKey = await createSymKeyFromPassword(str)

    expect(Buffer.from(symKey).toString('hex')).toEqual(
      '76ff5bf0a74a8e724367c7fc003f066d477641f468768a8da2817addf5c2ce76'
    )
  })
})
