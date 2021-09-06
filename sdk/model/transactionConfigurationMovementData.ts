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
import { PerpetualProperty } from './perpetualProperty';
import { TransactionPropertyMapping } from './transactionPropertyMapping';

export class TransactionConfigurationMovementData {
    /**
    * . The available values are: Settlement, Traded, StockMovement, FutureCash, Commitment, Receivable, CashSettlement, CashForward, CashCommitment, CashReceivable, Accrual, CashAccrual, ForwardFx, CashFxForward, UnsettledCashTypes, Carry, CarryAsPnl
    */
    'movementTypes': TransactionConfigurationMovementData.MovementTypesEnum;
    /**
    * The movement side
    */
    'side': string;
    /**
    * The movement direction
    */
    'direction': number;
    /**
    * The properties associated with the underlying Movement.
    */
    'properties'?: { [key: string]: PerpetualProperty; } | null;
    /**
    * This allows you to map a transaction property to a property on the underlying holding.
    */
    'mappings'?: Array<TransactionPropertyMapping> | null;
    /**
    * The movement name (optional)
    */
    'name'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "movementTypes",
            "baseName": "movementTypes",
            "type": "TransactionConfigurationMovementData.MovementTypesEnum"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "number"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: PerpetualProperty; }"
        },
        {
            "name": "mappings",
            "baseName": "mappings",
            "type": "Array<TransactionPropertyMapping>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionConfigurationMovementData.attributeTypeMap;
    }
}

export namespace TransactionConfigurationMovementData {
    export enum MovementTypesEnum {
        Settlement = <any> 'Settlement',
        Traded = <any> 'Traded',
        StockMovement = <any> 'StockMovement',
        FutureCash = <any> 'FutureCash',
        Commitment = <any> 'Commitment',
        Receivable = <any> 'Receivable',
        CashSettlement = <any> 'CashSettlement',
        CashForward = <any> 'CashForward',
        CashCommitment = <any> 'CashCommitment',
        CashReceivable = <any> 'CashReceivable',
        Accrual = <any> 'Accrual',
        CashAccrual = <any> 'CashAccrual',
        ForwardFx = <any> 'ForwardFx',
        CashFxForward = <any> 'CashFxForward',
        UnsettledCashTypes = <any> 'UnsettledCashTypes',
        Carry = <any> 'Carry',
        CarryAsPnl = <any> 'CarryAsPnl'
    }
}
