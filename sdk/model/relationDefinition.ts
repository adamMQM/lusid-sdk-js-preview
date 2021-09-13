/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application | Description | API / Swagger Documentation | | ----- | ----- | ---- | | LUSID | Open, API-first, developer-friendly investment data platform. | [Swagger](https://www.lusid.com/api/swagger/index.html) | | Web app | User-facing front end for LUSID. | [Swagger](https://www.lusid.com/app/swagger/index.html) | | Scheduler | Automated job scheduler. | [Swagger](https://www.lusid.com/scheduler2/swagger/index.html) | | Insights |Monitoring and troubleshooting service. | [Swagger](https://www.lusid.com/insights/swagger/index.html) | | Identity | Identity management for LUSID (in conjuction with Access) | [Swagger](https://www.lusid.com/identity/swagger/index.html) | | Access | Access control for LUSID (in conjunction with Identity) | [Swagger](https://www.lusid.com/access/swagger/index.html) | | Drive | Secure file repository and manager for collaboration. | [Swagger](https://www.lusid.com/drive/swagger/index.html) | | Luminesce | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](https://www.lusid.com/honeycomb/swagger/index.html) | | Notification | Notification service. | [Swagger](https://www.lusid.com/notifications/swagger/index.html) | | Configuration | File store for secrets and other sensitive information. | [Swagger](https://www.lusid.com/configuration/swagger/index.html) | 
 *
 * The version of the OpenAPI document: 0.11.3483
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Link } from './link';
import { ResourceId } from './resourceId';
import { Version } from './version';

export class RelationDefinition {
    'version'?: Version;
    'relationDefinitionId'?: ResourceId;
    /**
    * The entity domain of the source entity object.
    */
    'sourceEntityDomain'?: string | null;
    /**
    * The entity domain of the target entity object.
    */
    'targetEntityDomain'?: string | null;
    /**
    * The display name of the relation.
    */
    'displayName'?: string | null;
    /**
    * The description to relate source entity object and target entity object
    */
    'outwardDescription'?: string | null;
    /**
    * The description to relate target entity object and source entity object
    */
    'inwardDescription'?: string | null;
    /**
    * Describes how the relations can change over time, allowed values are \"Perpetual\" and \"TimeVariant\"
    */
    'lifeTime'?: string | null;
    /**
    * Describes the uniqueness and cardinality for relations with a specific source entity object and relations under this definition. Allowed values are \"Property\" and \"Collection\", defaults to \"Collection\" if not specified.
    */
    'constraintStyle'?: string | null;
    /**
    * Collection of links.
    */
    'links'?: Array<Link> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
        },
        {
            "name": "relationDefinitionId",
            "baseName": "relationDefinitionId",
            "type": "ResourceId"
        },
        {
            "name": "sourceEntityDomain",
            "baseName": "sourceEntityDomain",
            "type": "string"
        },
        {
            "name": "targetEntityDomain",
            "baseName": "targetEntityDomain",
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
            "name": "constraintStyle",
            "baseName": "constraintStyle",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return RelationDefinition.attributeTypeMap;
    }
}

