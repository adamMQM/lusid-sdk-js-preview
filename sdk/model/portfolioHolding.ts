/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application | Description | API / Swagger Documentation | | ----- | ----- | ---- | | LUSID | Open, API-first, developer-friendly investment data platform. | [Swagger](https://www.lusid.com/api/swagger/index.html) | | Web app | User-facing front end for LUSID. | [Swagger](https://www.lusid.com/app/swagger/index.html) | | Scheduler | Automated job scheduler. | [Swagger](https://www.lusid.com/scheduler2/swagger/index.html) | | Insights |Monitoring and troubleshooting service. | [Swagger](https://www.lusid.com/insights/swagger/index.html) | | Identity | Identity management for LUSID (in conjuction with Access) | [Swagger](https://www.lusid.com/identity/swagger/index.html) | | Access | Access control for LUSID (in conjunction with Identity) | [Swagger](https://www.lusid.com/access/swagger/index.html) | | Drive | Secure file repository and manager for collaboration. | [Swagger](https://www.lusid.com/drive/swagger/index.html) | | Luminesce | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](https://www.lusid.com/honeycomb/swagger/index.html) | | Notification | Notification service. | [Swagger](https://www.lusid.com/notifications/swagger/index.html) | | Configuration | File store for secrets and other sensitive information. | [Swagger](https://www.lusid.com/configuration/swagger/index.html) | 
 *
 * The version of the OpenAPI document: 0.11.3490
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CurrencyAndAmount } from './currencyAndAmount';
import { PerpetualProperty } from './perpetualProperty';
import { Property } from './property';
import { Transaction } from './transaction';

/**
* A list of holdings.
*/
export class PortfolioHolding {
    /**
    * The unique Lusid Instrument Id (LUID) of the instrument that the holding is in.
    */
    'instrumentUid': string;
    /**
    * The sub-holding properties which identify the holding. Each property will be from the \'Transaction\' domain. These are configured when a transaction portfolio is created.
    */
    'subHoldingKeys'?: { [key: string]: PerpetualProperty; } | null;
    /**
    * The properties which have been requested to be decorated onto the holding. These will be from the \'Instrument\' or \'Holding\' domain.
    */
    'properties'?: { [key: string]: Property; } | null;
    /**
    * The type of the holding e.g. Position, Balance, CashCommitment, Receivable, ForwardFX etc.
    */
    'holdingType': string;
    /**
    * The total number of units of the holding.
    */
    'units': number;
    /**
    * The total number of settled units of the holding.
    */
    'settledUnits': number;
    'cost': CurrencyAndAmount;
    'costPortfolioCcy': CurrencyAndAmount;
    'transaction'?: Transaction;
    /**
    * The holding currency.
    */
    'currency'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instrumentUid",
            "baseName": "instrumentUid",
            "type": "string"
        },
        {
            "name": "subHoldingKeys",
            "baseName": "subHoldingKeys",
            "type": "{ [key: string]: PerpetualProperty; }"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: Property; }"
        },
        {
            "name": "holdingType",
            "baseName": "holdingType",
            "type": "string"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "number"
        },
        {
            "name": "settledUnits",
            "baseName": "settledUnits",
            "type": "number"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "costPortfolioCcy",
            "baseName": "costPortfolioCcy",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PortfolioHolding.attributeTypeMap;
    }
}

