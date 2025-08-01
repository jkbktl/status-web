import * as secp from 'ethereum-cryptography/secp256k1'
import { bytesToHex } from 'ethereum-cryptography/utils'
import { expect, test } from 'vitest'

import { decompressPublicKey } from './decompress-public-key'

test('should return decompressed public key', () => {
  const privateKey = secp.utils.randomPrivateKey()

  const publicKey = bytesToHex(secp.getPublicKey(privateKey))
  const compressedPublicKey = bytesToHex(secp.getPublicKey(privateKey, true))

  expect(decompressPublicKey(compressedPublicKey)).toEqual(publicKey)
})

test('should accept public key with a base prefix', () => {
  const privateKey = secp.utils.randomPrivateKey()

  const publicKey = bytesToHex(secp.getPublicKey(privateKey))
  const compressedPublicKey =
    '0x' + bytesToHex(secp.getPublicKey(privateKey, true))

  expect(decompressPublicKey(compressedPublicKey)).toEqual(publicKey)
})

test('should throw error if public key is not a valid hex', () => {
  expect(() => {
    decompressPublicKey('not a valid public key')
  }).toThrowErrorMatchingInlineSnapshot(`[Error: Invalid public key]`)
})
