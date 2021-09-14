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
import { IUnitDefinitionDto } from './iUnitDefinitionDto';
import { Link } from './link';
import { ResourceId } from './resourceId';

export class DataType {
    'href'?: string | null;
    /**
    * The available values are: Open, Closed
    */
    'typeValueRange': DataType.TypeValueRangeEnum;
    'id': ResourceId;
    'displayName': string;
    'description': string;
    /**
    * The available values are: String, Int, Decimal, DateTime, Boolean, Map, List, PropertyArray, Percentage, Code, Id, Uri, CurrencyAndAmount, TradePrice, Currency, MetricValue, ResourceId, ResultValue, CutLocalTime, DateOrCutLabel
    */
    'valueType': DataType.ValueTypeEnum;
    'acceptableValues'?: Array<string> | null;
    /**
    * The available values are: NoUnits, Basic, Iso4217Currency
    */
    'unitSchema'?: DataType.UnitSchemaEnum;
    'acceptableUnits'?: Array<IUnitDefinitionDto> | null;
    /**
    * Collection of links.
    */
    'links'?: Array<Link> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "typeValueRange",
            "baseName": "typeValueRange",
            "type": "DataType.TypeValueRangeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "ResourceId"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "DataType.ValueTypeEnum"
        },
        {
            "name": "acceptableValues",
            "baseName": "acceptableValues",
            "type": "Array<string>"
        },
        {
            "name": "unitSchema",
            "baseName": "unitSchema",
            "type": "DataType.UnitSchemaEnum"
        },
        {
            "name": "acceptableUnits",
            "baseName": "acceptableUnits",
            "type": "Array<IUnitDefinitionDto>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return DataType.attributeTypeMap;
    }
}

export namespace DataType {
    export enum TypeValueRangeEnum {
        Open = <any> 'Open',
        Closed = <any> 'Closed'
    }
    export enum ValueTypeEnum {
        String = <any> 'String',
        Int = <any> 'Int',
        Decimal = <any> 'Decimal',
        DateTime = <any> 'DateTime',
        Boolean = <any> 'Boolean',
        Map = <any> 'Map',
        List = <any> 'List',
        PropertyArray = <any> 'PropertyArray',
        Percentage = <any> 'Percentage',
        Code = <any> 'Code',
        Id = <any> 'Id',
        Uri = <any> 'Uri',
        CurrencyAndAmount = <any> 'CurrencyAndAmount',
        TradePrice = <any> 'TradePrice',
        Currency = <any> 'Currency',
        MetricValue = <any> 'MetricValue',
        ResourceId = <any> 'ResourceId',
        ResultValue = <any> 'ResultValue',
        CutLocalTime = <any> 'CutLocalTime',
        DateOrCutLabel = <any> 'DateOrCutLabel'
    }
    export enum UnitSchemaEnum {
        NoUnits = <any> 'NoUnits',
        Basic = <any> 'Basic',
        Iso4217Currency = <any> 'Iso4217Currency'
    }
}
