/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application | Description | API / Swagger Documentation | | ----- | ----- | ---- | | LUSID | Open, API-first, developer-friendly investment data platform. | [Swagger](https://www.lusid.com/api/swagger/index.html) | | Web app | User-facing front end for LUSID. | [Swagger](https://www.lusid.com/app/swagger/index.html) | | Scheduler | Automated job scheduler. | [Swagger](https://www.lusid.com/scheduler2/swagger/index.html) | | Insights |Monitoring and troubleshooting service. | [Swagger](https://www.lusid.com/insights/swagger/index.html) | | Identity | Identity management for LUSID (in conjuction with Access) | [Swagger](https://www.lusid.com/identity/swagger/index.html) | | Access | Access control for LUSID (in conjunction with Identity) | [Swagger](https://www.lusid.com/access/swagger/index.html) | | Drive | Secure file repository and manager for collaboration. | [Swagger](https://www.lusid.com/drive/swagger/index.html) | | Luminesce | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](https://www.lusid.com/honeycomb/swagger/index.html) | | Notification | Notification service. | [Swagger](https://www.lusid.com/notifications/swagger/index.html) | | Configuration | File store for secrets and other sensitive information. | [Swagger](https://www.lusid.com/configuration/swagger/index.html) | 
 *
 * The version of the OpenAPI document: 0.11.3500
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CurrencyAndAmount } from './currencyAndAmount';
import { PerpetualProperty } from './perpetualProperty';
import { RealisedGainLoss } from './realisedGainLoss';
import { TransactionPrice } from './transactionPrice';

/**
* A list of output transactions.
*/
export class OutputTransaction {
    /**
    * The unique identifier for the transaction.
    */
    'transactionId': string;
    /**
    * The type of the transaction e.g. \'Buy\', \'Sell\'. The transaction type should have been pre-configured via the System Configuration API endpoint.
    */
    'type': string;
    /**
    * The description of the transaction. This only exists on transactions generated by LUSID e.g. a holdings adjustment transaction.
    */
    'description'?: string | null;
    /**
    * A set of instrument identifiers that can resolve the transaction to a unique instrument.
    */
    'instrumentIdentifiers'?: { [key: string]: string; } | null;
    /**
    * The unqiue Lusid Instrument Id (LUID) of the instrument that the transaction is in.
    */
    'instrumentUid': string;
    /**
    * The date of the transaction.
    */
    'transactionDate': Date;
    /**
    * The settlement date of the transaction.
    */
    'settlementDate': Date;
    /**
    * The number of units transacted in the associated instrument.
    */
    'units': number;
    /**
    * The total value of the transaction in the transaction currency.
    */
    'transactionAmount'?: number;
    'transactionPrice'?: TransactionPrice;
    'totalConsideration'?: CurrencyAndAmount;
    /**
    * The exchange rate between the transaction and settlement currency (settlement currency being represented by the TotalConsideration.Currency). For example if the transaction currency is in USD and the settlement currency is in GBP this this the USD/GBP rate.
    */
    'exchangeRate'?: number;
    /**
    * The exchange rate between the transaction and portfolio currency. For example if the transaction currency is in USD and the portfolio currency is in GBP this this the USD/GBP rate.
    */
    'transactionToPortfolioRate'?: number | null;
    /**
    * The transaction currency.
    */
    'transactionCurrency'?: string | null;
    /**
    * Set of unique transaction properties and associated values to stored with the transaction. Each property will be from the \'Transaction\' domain.
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
    /**
    * The status of the transaction. The available values are: Active, Amended, Cancelled
    */
    'transactionStatus'?: OutputTransaction.TransactionStatusEnum;
    /**
    * The asAt datetime that the transaction was added to LUSID.
    */
    'entryDateTime'?: Date;
    /**
    * If the transaction has been cancelled, the asAt datetime that the transaction was cancelled.
    */
    'cancelDateTime'?: Date | null;
    /**
    * The collection of realised gains or losses resulting from relevant transactions e.g. a sale transaction. The cost used in calculating the realised gain or loss is determined by the accounting method defined when the transaction portfolio is created.
    */
    'realisedGainLoss'?: Array<RealisedGainLoss> | null;

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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "instrumentIdentifiers",
            "baseName": "instrumentIdentifiers",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "instrumentUid",
            "baseName": "instrumentUid",
            "type": "string"
        },
        {
            "name": "transactionDate",
            "baseName": "transactionDate",
            "type": "Date"
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "Date"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "number"
        },
        {
            "name": "transactionAmount",
            "baseName": "transactionAmount",
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
            "name": "transactionToPortfolioRate",
            "baseName": "transactionToPortfolioRate",
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
        },
        {
            "name": "transactionStatus",
            "baseName": "transactionStatus",
            "type": "OutputTransaction.TransactionStatusEnum"
        },
        {
            "name": "entryDateTime",
            "baseName": "entryDateTime",
            "type": "Date"
        },
        {
            "name": "cancelDateTime",
            "baseName": "cancelDateTime",
            "type": "Date"
        },
        {
            "name": "realisedGainLoss",
            "baseName": "realisedGainLoss",
            "type": "Array<RealisedGainLoss>"
        }    ];

    static getAttributeTypeMap() {
        return OutputTransaction.attributeTypeMap;
    }
}

export namespace OutputTransaction {
    export enum TransactionStatusEnum {
        Active = <any> 'Active',
        Amended = <any> 'Amended',
        Cancelled = <any> 'Cancelled'
    }
}
