/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application | Description | API / Swagger Documentation | | ----- | ----- | ---- | | LUSID | Open, API-first, developer-friendly investment data platform. | [Swagger](https://www.lusid.com/api/swagger/index.html) | | Web app | User-facing front end for LUSID. | [Swagger](https://www.lusid.com/app/swagger/index.html) | | Scheduler | Automated job scheduler. | [Swagger](https://www.lusid.com/scheduler2/swagger/index.html) | | Insights |Monitoring and troubleshooting service. | [Swagger](https://www.lusid.com/insights/swagger/index.html) | | Identity | Identity management for LUSID (in conjuction with Access) | [Swagger](https://www.lusid.com/identity/swagger/index.html) | | Access | Access control for LUSID (in conjunction with Identity) | [Swagger](https://www.lusid.com/access/swagger/index.html) | | Drive | Secure file repository and manager for collaboration. | [Swagger](https://www.lusid.com/drive/swagger/index.html) | | Luminesce | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](https://www.lusid.com/honeycomb/swagger/index.html) | | Notification | Notification service. | [Swagger](https://www.lusid.com/notifications/swagger/index.html) | | Configuration | File store for secrets and other sensitive information. | [Swagger](https://www.lusid.com/configuration/swagger/index.html) | 
 *
 * The version of the OpenAPI document: 0.11.3488
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CurrencyAndAmount } from './currencyAndAmount';

export class TargetTaxLotRequest {
    /**
    * The number of units of the instrument in this tax-lot.
    */
    'units': number;
    'cost'?: CurrencyAndAmount;
    /**
    * The total cost of the tax-lot in the transaction portfolio\'s base currency.
    */
    'portfolioCost'?: number | null;
    /**
    * The purchase price of each unit of the instrument held in this tax-lot. This forms part of the unique key required for multiple tax-lots.
    */
    'price'?: number | null;
    /**
    * The purchase date of this tax-lot. This forms part of the unique key required for multiple tax-lots.
    */
    'purchaseDate'?: Date | null;
    /**
    * The settlement date of the tax-lot\'s opening transaction.
    */
    'settlementDate'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "units",
            "baseName": "units",
            "type": "number"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "portfolioCost",
            "baseName": "portfolioCost",
            "type": "number"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "purchaseDate",
            "baseName": "purchaseDate",
            "type": "Date"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return TargetTaxLotRequest.attributeTypeMap;
    }
}

