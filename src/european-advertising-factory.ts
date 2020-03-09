import {
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceAdvertising,
  AmazonMarketplaceAdvertisingRegion,
} from './amazon-marketplace'

export function europeanAdvertisingFactory(
  countryCode: AmazonMarketplaceAdvertisingCountryCode,
): AmazonMarketplaceAdvertising {
  return {
    uri: 'https://advertising-api-eu.amazon.com',
    countryCode,
    region: AmazonMarketplaceAdvertisingRegion.EUROPE,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 3900,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_PARIS,
  }
}
