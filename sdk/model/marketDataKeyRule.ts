/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application | Description | API / Swagger Documentation | | ----- | ----- | ---- | | LUSID | Open, API-first, developer-friendly investment data platform. | [Swagger](https://www.lusid.com/api/swagger/index.html) | | Web app | User-facing front end for LUSID. | [Swagger](https://www.lusid.com/app/swagger/index.html) | | Scheduler | Automated job scheduler. | [Swagger](https://www.lusid.com/scheduler2/swagger/index.html) | | Insights |Monitoring and troubleshooting service. | [Swagger](https://www.lusid.com/insights/swagger/index.html) | | Identity | Identity management for LUSID (in conjuction with Access) | [Swagger](https://www.lusid.com/identity/swagger/index.html) | | Access | Access control for LUSID (in conjunction with Identity) | [Swagger](https://www.lusid.com/access/swagger/index.html) | | Drive | Secure file repository and manager for collaboration. | [Swagger](https://www.lusid.com/drive/swagger/index.html) | | Luminesce | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](https://www.lusid.com/honeycomb/swagger/index.html) | | Notification | Notification service. | [Swagger](https://www.lusid.com/notifications/swagger/index.html) | | Configuration | File store for secrets and other sensitive information. | [Swagger](https://www.lusid.com/configuration/swagger/index.html) | 
 *
 * The version of the OpenAPI document: 0.11.3457
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* A market data key rule describes a mapping for satisfying a particular market dependency. The supplier, scope, quote type and price side  information define the quote in the market and which Vendor for market data would be used to perform the lookup.  The market data key defines what dependency this satisfies. The key is a rule that describes the asset class, its identifier and any other  specifics required to uniquely describe a specific economic entity (e.g. an Fx currency pair, equity name or credit curve).
*/
export class MarketDataKeyRule {
    /**
    * The market data key pattern which this is a rule for. A dot separated string (A.B.C.D.*)
    */
    'key': string;
    /**
    * The market data supplier (where the data comes from)
    */
    'supplier': string;
    /**
    * The scope in which the data should be found when using this rule.
    */
    'dataScope': string;
    /**
    * The available values are: Price, Spread, Rate, LogNormalVol, NormalVol, ParSpread, IsdaSpread, Upfront
    */
    'quoteType': MarketDataKeyRule.QuoteTypeEnum;
    /**
    * The conceptual qualification for the field, such as bid, mid, or ask.  The field must be one of a defined set for the given supplier, in the same way as it  is for the Finbourne.WebApi.Interface.Dto.Quotes.QuoteSeriesId
    */
    'field': string;
    /**
    * Shorthand for the time interval used to select market data. This must be a dot-separated string              nominating a start and end date, for example \'5D.0D\' to look back 5 days from today (0 days ago). The syntax              is <i>int</i><i>char</i>.<i>int</i><i>char</i>, where <i>char</i> is one of D(ay), W(eek), M(onth) or Y(ear).
    */
    'quoteInterval'?: string | null;
    /**
    * The AsAt predicate specification.
    */
    'asAt'?: Date | null;
    /**
    * The source of the quote. For a given provider/supplier of market data there may be an additional qualifier, e.g. the exchange or bank that provided the quote
    */
    'priceSource'?: string | null;
    /**
    * Allows for partial or complete override of the market asset resolved for a dependency  Either a named override or a dot separated string (A.B.C.D.*).  e.g. for Rates curve \'EUR.*\' will replace the resolve MarketAsset \'GBP/12M\', \'GBP/3M\' with the EUR equivalent, if there  are no wildcards in the mask, the mask is taken as the MarketAsset for any dependency matching the rule.
    */
    'mask'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "supplier",
            "baseName": "supplier",
            "type": "string"
        },
        {
            "name": "dataScope",
            "baseName": "dataScope",
            "type": "string"
        },
        {
            "name": "quoteType",
            "baseName": "quoteType",
            "type": "MarketDataKeyRule.QuoteTypeEnum"
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "string"
        },
        {
            "name": "quoteInterval",
            "baseName": "quoteInterval",
            "type": "string"
        },
        {
            "name": "asAt",
            "baseName": "asAt",
            "type": "Date"
        },
        {
            "name": "priceSource",
            "baseName": "priceSource",
            "type": "string"
        },
        {
            "name": "mask",
            "baseName": "mask",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MarketDataKeyRule.attributeTypeMap;
    }
}

export namespace MarketDataKeyRule {
    export enum QuoteTypeEnum {
        Price = <any> 'Price',
        Spread = <any> 'Spread',
        Rate = <any> 'Rate',
        LogNormalVol = <any> 'LogNormalVol',
        NormalVol = <any> 'NormalVol',
        ParSpread = <any> 'ParSpread',
        IsdaSpread = <any> 'IsdaSpread',
        Upfront = <any> 'Upfront'
    }
}
