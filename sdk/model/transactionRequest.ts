/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application | Description | API / Swagger Documentation | | ----- | ----- | ---- | | LUSID | Open, API-first, developer-friendly investment data platform. | [Swagger](https://www.lusid.com/api/swagger/index.html) | | Web app | User-facing front end for LUSID. | [Swagger](https://www.lusid.com/app/swagger/index.html) | | Scheduler | Automated job scheduler. | [Swagger](https://www.lusid.com/scheduler2/swagger/index.html) | | Insights |Monitoring and troubleshooting service. | [Swagger](https://www.lusid.com/insights/swagger/index.html) | | Identity | Identity management for LUSID (in conjuction with Access) | [Swagger](https://www.lusid.com/identity/swagger/index.html) | | Access | Access control for LUSID (in conjunction with Identity) | [Swagger](https://www.lusid.com/access/swagger/index.html) | | Drive | Secure file repository and manager for collaboration. | [Swagger](https://www.lusid.com/drive/swagger/index.html) | | Luminesce | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](https://www.lusid.com/honeycomb/swagger/index.html) | | Notification | Notification service. | [Swagger](https://www.lusid.com/notifications/swagger/index.html) | | Configuration | File store for secrets and other sensitive information. | [Swagger](https://www.lusid.com/configuration/swagger/index.html) | 
 *
 * The version of the OpenAPI document: 0.11.3463
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CurrencyAndAmount } from './currencyAndAmount';
import { PerpetualProperty } from './perpetualProperty';
import { TransactionPrice } from './transactionPrice';

export class TransactionRequest {
    /**
    * The unique identifier of the transaction.
    */
    'transactionId': string;
    /**
    * The type of the transaction, for example \'Buy\' or \'Sell\'. The transaction type must have been pre-configured using the System Configuration API. If not, this operation will succeed but you are not able to calculate holdings for the portfolio that include this transaction.
    */
    'type': string;
    /**
    * A set of instrument identifiers that can resolve the transaction to a unique instrument.
    */
    'instrumentIdentifiers': { [key: string]: string; };
    /**
    * The date of the transaction.
    */
    'transactionDate': string;
    /**
    * The settlement date of the transaction.
    */
    'settlementDate': string;
    /**
    * The number of units of the transacted instrument.
    */
    'units': number;
    'transactionPrice'?: TransactionPrice;
    'totalConsideration': CurrencyAndAmount;
    /**
    * The exchange rate between the transaction and settlement currency (settlement currency being represented by TotalConsideration.Currency). For example, if the transaction currency is USD and the settlement currency is GBP, this would be the appropriate USD/GBP rate.
    */
    'exchangeRate'?: number | null;
    /**
    * The transaction currency.
    */
    'transactionCurrency'?: string | null;
    /**
    * A list of unique transaction properties and associated values to store for the transaction. Each property must be from the \'Transaction\' domain.
    */
    'properties'?: { [key: string]: PerpetualProperty; } | null;
    /**
    * The identifier for the counterparty of the transaction.
    */
    'counterpartyId'?: string | null;
    /**
    * The source of the transaction. This is used to look up the appropriate transaction group set in the transaction type configuration.
    */
    'source'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "instrumentIdentifiers",
            "baseName": "instrumentIdentifiers",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "transactionDate",
            "baseName": "transactionDate",
            "type": "string"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "string"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "number"
        },
        {
            "name": "transactionPrice",
            "baseName": "transactionPrice",
            "type": "TransactionPrice"
        },
        {
            "name": "totalConsideration",
            "baseName": "totalConsideration",
            "type": "CurrencyAndAmount"
        },
        {
            "name": "exchangeRate",
            "baseName": "exchangeRate",
            "type": "number"
        },
        {
            "name": "transactionCurrency",
            "baseName": "transactionCurrency",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: PerpetualProperty; }"
        },
        {
            "name": "counterpartyId",
            "baseName": "counterpartyId",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRequest.attributeTypeMap;
    }
}

