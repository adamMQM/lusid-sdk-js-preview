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
import { ResourceId } from './resourceId';

export class CreatePropertyDefinitionRequest {
    /**
    * The domain that the property exists in. The available values are: NotDefined, Transaction, Portfolio, Holding, ReferenceHolding, TransactionConfiguration, Instrument, CutLabelDefinition, Analytic, PortfolioGroup, Person, AccessMetadata, Order, UnitResult, MarketData, ConfigurationRecipe, Allocation, Calendar, LegalEntity, Placement, Execution, Block, Participation, Package, OrderInstruction, CustomEntity
    */
    'domain': CreatePropertyDefinitionRequest.DomainEnum;
    /**
    * The scope that the property exists in.
    */
    'scope': string;
    /**
    * The code of the property. Together with the domain and scope this uniquely identifies the property.
    */
    'code': string;
    /**
    * Whether or not a value is always required for this property.
    */
    'valueRequired'?: boolean;
    /**
    * The display name of the property.
    */
    'displayName': string;
    'dataTypeId': ResourceId;
    /**
    * Describes how the property\'s values can change over time. The available values are: Perpetual, TimeVariant
    */
    'lifeTime'?: CreatePropertyDefinitionRequest.LifeTimeEnum;
    /**
    * Describes the uniqueness and cardinality of the property for entity objects under the property domain specified in Key. Defaults to \"Property\" if not specified. Valid values for this field are: Property, Collection or Identifier.
    */
    'constraintStyle'?: string | null;
    /**
    * Describes the property
    */
    'propertyDescription'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "domain",
            "baseName": "domain",
            "type": "CreatePropertyDefinitionRequest.DomainEnum"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "valueRequired",
            "baseName": "valueRequired",
            "type": "boolean"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "dataTypeId",
            "baseName": "dataTypeId",
            "type": "ResourceId"
        },
        {
            "name": "lifeTime",
            "baseName": "lifeTime",
            "type": "CreatePropertyDefinitionRequest.LifeTimeEnum"
        },
        {
            "name": "constraintStyle",
            "baseName": "constraintStyle",
            "type": "string"
        },
        {
            "name": "propertyDescription",
            "baseName": "propertyDescription",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreatePropertyDefinitionRequest.attributeTypeMap;
    }
}

export namespace CreatePropertyDefinitionRequest {
    export enum DomainEnum {
        NotDefined = <any> 'NotDefined',
        Transaction = <any> 'Transaction',
        Portfolio = <any> 'Portfolio',
        Holding = <any> 'Holding',
        ReferenceHolding = <any> 'ReferenceHolding',
        TransactionConfiguration = <any> 'TransactionConfiguration',
        Instrument = <any> 'Instrument',
        CutLabelDefinition = <any> 'CutLabelDefinition',
        Analytic = <any> 'Analytic',
        PortfolioGroup = <any> 'PortfolioGroup',
        Person = <any> 'Person',
        AccessMetadata = <any> 'AccessMetadata',
        Order = <any> 'Order',
        UnitResult = <any> 'UnitResult',
        MarketData = <any> 'MarketData',
        ConfigurationRecipe = <any> 'ConfigurationRecipe',
        Allocation = <any> 'Allocation',
        Calendar = <any> 'Calendar',
        LegalEntity = <any> 'LegalEntity',
        Placement = <any> 'Placement',
        Execution = <any> 'Execution',
        Block = <any> 'Block',
        Participation = <any> 'Participation',
        Package = <any> 'Package',
        OrderInstruction = <any> 'OrderInstruction',
        CustomEntity = <any> 'CustomEntity'
    }
    export enum LifeTimeEnum {
        Perpetual = <any> 'Perpetual',
        TimeVariant = <any> 'TimeVariant'
    }
}
