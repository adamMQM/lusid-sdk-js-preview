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
import { ResourceId } from './resourceId';

/**
* A request to create or update a Execution.
*/
export class ExecutionRequest {
    'id': ResourceId;
    'placementId': ResourceId;
    /**
    * Client-defined properties associated with this execution.
    */
    'properties'?: { [key: string]: PerpetualProperty; } | null;
    /**
    * The instrument ordered.
    */
    'instrumentIdentifiers': { [key: string]: string; };
    /**
    * The quantity of given instrument ordered.
    */
    'quantity': number;
    /**
    * The state of this execution (typically a FIX state; Open, Filled, etc).
    */
    'state': string;
    /**
    * The side (Buy, Sell, ...) of this execution.
    */
    'side': string;
    /**
    * The type of this execution (Market, Limit, etc).
    */
    'type': string;
    /**
    * The active date of this execution.
    */
    'createdDate': Date;
    /**
    * The (optional) settlement date for this execution
    */
    'settlementDate'?: Date;
    'price': CurrencyAndAmount;
    /**
    * The execution\'s settlement currency.
    */
    'settlementCurrency': string;
    /**
    * The exectuion\'s settlement currency rate.
    */
    'settlementCurrencyFxRate': number;
    /**
    * The market entity this placement is placed with.
    */
    'counterparty': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "ResourceId"
        },
        {
            "name": "placementId",
            "baseName": "placementId",
            "type": "ResourceId"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: PerpetualProperty; }"
        },
        {
            "name": "instrumentIdentifiers",
            "baseName": "instrumentIdentifiers",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "Date"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "settlementCurrency",
            "baseName": "settlementCurrency",
            "type": "string"
        },
        {
            "name": "settlementCurrencyFxRate",
            "baseName": "settlementCurrencyFxRate",
            "type": "number"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExecutionRequest.attributeTypeMap;
    }
}

