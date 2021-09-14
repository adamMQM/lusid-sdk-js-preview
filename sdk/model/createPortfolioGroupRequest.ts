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
import { Property } from './property';
import { ResourceId } from './resourceId';

export class CreatePortfolioGroupRequest {
    /**
    * The code that the portfolio group will be created with. Together with the scope this uniquely identifies the portfolio group.
    */
    'code': string;
    /**
    * The effective datetime at which the portfolio group was created. Defaults to the current LUSID system datetime if not specified.
    */
    'created'?: Date | null;
    /**
    * The resource identifiers of the portfolios to be contained within the portfolio group.
    */
    'values'?: Array<ResourceId> | null;
    /**
    * The resource identifiers of the portfolio groups to be contained within the portfolio group as sub groups.
    */
    'subGroups'?: Array<ResourceId> | null;
    /**
    * A set of unique group properties to add to the portfolio group. Each property must be from the \'PortfolioGroup\' domain and should be identified by its key which has the format {domain}/{scope}/{code}, e.g. \'PortfolioGroup/Manager/Id\'. These properties must be pre-defined.
    */
    'properties'?: { [key: string]: Property; } | null;
    /**
    * The name of the portfolio group.
    */
    'displayName': string;
    /**
    * A long form description of the portfolio group.
    */
    'description'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ResourceId>"
        },
        {
            "name": "subGroups",
            "baseName": "subGroups",
            "type": "Array<ResourceId>"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: Property; }"
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
        }    ];

    static getAttributeTypeMap() {
        return CreatePortfolioGroupRequest.attributeTypeMap;
    }
}

