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

export class AggregationQuery {
    /**
    * The address that is the query to be made into the system. e.g. a Valuation/Pv or Instrument/MaturityDate
    */
    'addressKey': string;
    /**
    * What does the information that is being queried by the address mean. What is the address for.
    */
    'description': string;
    /**
    * The suggested name that the user would wish to put on to the returned information for visualisation in preference to the address.
    */
    'displayName': string;
    /**
    * The available values are: String, Int, Decimal, DateTime, Boolean, ResultValue, Array, Map, Json
    */
    'type': AggregationQuery.TypeEnum;
    /**
    * Is the data scaled when it is for, e.g. a holding in an instrument. A key example would be the difference between price and pv. The present value  of an instrument would scale with the quantity held. The price would be that for a hypothetical unit of that instrument, typically associated with the  contract size.
    */
    'scalesWithHoldingQuantity': boolean;
    /**
    * When performing an aggregation operation, what column type operations can be performed on the data. For example, it makes sense to sum decimals but  not strings. Either can be counted. With more complex types, e.g. ResultValues, operations may be linked to a semantic meaning such as the currency  of the result. In such cases the operations may be supported but context specific. For example, it makes sense to sum PVs in a single currency but not  when the currency is different. In such cases, an error would result (it being assumed that no fx rates for currency conversion were implicit in the context).
    */
    'supportedOperations': string;
    /**
    * Within an API where an item can be accessed through an address or property, there is an associated status that determines  whether the item is stable or likely to change. This status is one of [Experimental, Beta, EAP, Prod,  Deprecated]. If the item is  deprecated it will be removed on or after the associated DateTime RemovalDate field. That field will not otherwise be set.
    */
    'lifeCycleStatus': string;
    /**
    * If the life cycle status is set to deprecated then this will be populated with the date on or after which removal of the address query will happen
    */
    'removalDate': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressKey",
            "baseName": "addressKey",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AggregationQuery.TypeEnum"
        },
        {
            "name": "scalesWithHoldingQuantity",
            "baseName": "scalesWithHoldingQuantity",
            "type": "boolean"
        },
        {
            "name": "supportedOperations",
            "baseName": "supportedOperations",
            "type": "string"
        },
        {
            "name": "lifeCycleStatus",
            "baseName": "lifeCycleStatus",
            "type": "string"
        },
        {
            "name": "removalDate",
            "baseName": "removalDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return AggregationQuery.attributeTypeMap;
    }
}

export namespace AggregationQuery {
    export enum TypeEnum {
        String = <any> 'String',
        Int = <any> 'Int',
        Decimal = <any> 'Decimal',
        DateTime = <any> 'DateTime',
        Boolean = <any> 'Boolean',
        ResultValue = <any> 'ResultValue',
        Array = <any> 'Array',
        Map = <any> 'Map',
        Json = <any> 'Json'
    }
}
