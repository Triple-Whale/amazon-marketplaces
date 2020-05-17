import { AmazonMarketplace, AmazonMarketplaceAdvertising } from './amazon-marketplace'
import { amazonMarketplacesList } from './marketplaces'
import ensure from '@lavadrop/ensure'

type Key = keyof Omit<AmazonMarketplace, 'uri' | 'webServiceUri' | 'advertising'>

/**
 * Finds an Amazon Marketplace based on provided search parameter.
 */
export function findAmazonMarketplace<K extends Key>(key: K, value: AmazonMarketplace[K]) {
  return amazonMarketplacesList.find((marketplace) => marketplace[key] === value)
}

/**
 * Finds an Amazon Marketplace based on provided search parameter.
 *
 * Will throw if marketplace cannot be found.
 */
export function findAmazonMarketplaceOrFail<K extends Key>(key: K, value: AmazonMarketplace[K]) {
  return ensure(
    findAmazonMarketplace(key, value),
    `Cannot find Amazon Marketplace by key "${key}" for value "${value}".`,
  )
}

/**
 * Assert function that guards the marketplace and asserts that it has the advertising capability.
 *
 * See [Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) docs.
 */
export function assertMarketplaceHasAdvertising(
  marketplace: AmazonMarketplace,
): asserts marketplace is AmazonMarketplace & { advertising: AmazonMarketplaceAdvertising } {
  if (!marketplace.advertising) {
    throw new Error(`Marketplace ${marketplace.id} does not have advertising.`)
  }
}
