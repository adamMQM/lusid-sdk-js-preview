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

export class CreateRelationshipDefinitionRequest {
    /**
    * The scope that the relationship definition exists in.
    */
    'scope': string;
    /**
    * The code of the relationship definition. Together with the scope this uniquely defines the relationship definition.
    */
    'code': string;
    /**
    * The entity type of the source entity object must be, allowed values are \'Portfolio\', \'PortfolioGroup\', \'Person\' and \'LegalEntity\'.
    */
    'sourceEntityType': string;
    /**
    * The entity type of the target entity object must be, allowed values are \'Portfolio\', \'PortfolioGroup\', \'Person\' and \'LegalEntity\'.
    */
    'targetEntityType': string;
    /**
    * The display name of the relationship definition.
    */
    'displayName': string;
    /**
    * The description to relate source entity object and target entity object.
    */
    'outwardDescription': string;
    /**
    * The description to relate target entity object and source entity object.
    */
    'inwardDescription': string;
    /**
    * Describes how the relationships can change over time. Allowed values are \'Perpetual\' and \'TimeVariant\', defaults to \'Perpetual\' if not specified.
    */
    'lifeTime'?: string | null;
    /**
    * Describes the cardinality of the relationship with a specific source entity object and relationships under this definition. Allowed values are \'ManyToMany\' and \'OneToMany\', defaults to \'ManyToMany\' if not specified.
    */
    'relationshipCardinality'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "sourceEntityType",
            "baseName": "sourceEntityType",
            "type": "string"
        },
        {
            "name": "targetEntityType",
            "baseName": "targetEntityType",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "outwardDescription",
            "baseName": "outwardDescription",
            "type": "string"
        },
        {
            "name": "inwardDescription",
            "baseName": "inwardDescription",
            "type": "string"
        },
        {
            "name": "lifeTime",
            "baseName": "lifeTime",
            "type": "string"
        },
        {
            "name": "relationshipCardinality",
            "baseName": "relationshipCardinality",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateRelationshipDefinitionRequest.attributeTypeMap;
    }
}

