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
import { A2BCategory } from './a2BCategory';
import { PerpetualProperty } from './perpetualProperty';
import { Property } from './property';
import { ResourceId } from './resourceId';

/**
* A2B Movement Record - shows A2B category based changes relating to a specific movement
*/
export class A2BMovementRecord {
    'portfolioId'?: ResourceId;
    /**
    * The type of the holding e.g. Position, Balance, CashCommitment, Receivable, ForwardFX etc.
    */
    'holdingType'?: string | null;
    /**
    * The unique Lusid Instrument Id (LUID) of the instrument that the holding is in.
    */
    'instrumentUid'?: string | null;
    /**
    * The sub-holding properties which identify the holding. Each property will be from the \'Transaction\' domain. These are configured when a transaction portfolio is created.
    */
    'subHoldingKeys'?: { [key: string]: PerpetualProperty; } | null;
    /**
    * The holding currency.
    */
    'currency'?: string | null;
    /**
    * The unique identifier for the transaction.
    */
    'transactionId'?: string | null;
    /**
    * The name of the movement.
    */
    'movementName'?: string | null;
    /**
    * The date of the movement.
    */
    'effectiveDate'?: Date;
    /**
    * The number of units of the instrument that are affected by the movement.
    */
    'units'?: number;
    'start'?: A2BCategory;
    'flows'?: A2BCategory;
    'gains'?: A2BCategory;
    'carry'?: A2BCategory;
    'end'?: A2BCategory;
    /**
    * The properties which have been requested to be decorated onto the holding. These will be from the \'Instrument\' domain.
    */
    'properties'?: { [key: string]: Property; } | null;
    /**
    * Arbitrary string that can be used to cross reference an entry in the A2B report with activity in the A2B-Movements. This should be used purely as a token. The content should not be relied upon.
    */
    'groupId'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "portfolioId",
            "baseName": "portfolioId",
            "type": "ResourceId"
        },
        {
            "name": "holdingType",
            "baseName": "holdingType",
            "type": "string"
        },
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
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "movementName",
            "baseName": "movementName",
            "type": "string"
        },
        {
            "name": "effectiveDate",
            "baseName": "effectiveDate",
            "type": "Date"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "number"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "A2BCategory"
        },
        {
            "name": "flows",
            "baseName": "flows",
            "type": "A2BCategory"
        },
        {
            "name": "gains",
            "baseName": "gains",
            "type": "A2BCategory"
        },
        {
            "name": "carry",
            "baseName": "carry",
            "type": "A2BCategory"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "A2BCategory"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: Property; }"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return A2BMovementRecord.attributeTypeMap;
    }
}

