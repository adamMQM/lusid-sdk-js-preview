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
import { Link } from './link';
import { Property } from './property';
import { ResourceId } from './resourceId';
import { Version } from './version';

export class CompletePortfolio {
    'id': ResourceId;
    /**
    * The specific Uniform Resource Identifier (URI) for this resource at the requested effective and asAt datetime.
    */
    'href'?: string | null;
    /**
    * The long form description of the portfolio.
    */
    'description'?: string | null;
    /**
    * The name of the portfolio.
    */
    'displayName'?: string | null;
    /**
    * The effective datetime at which the portfolio was created. No transactions or constituents can be added to the portfolio before this date.
    */
    'created'?: Date;
    'parentPortfolioId'?: ResourceId;
    /**
    * Whether or not this is a derived portfolio.
    */
    'isDerived'?: boolean;
    /**
    * The type of the portfolio. The available values are: Transaction, Reference, DerivedTransaction
    */
    'type'?: CompletePortfolio.TypeEnum;
    'version': Version;
    /**
    * The requested portfolio properties. These will be from the \'Portfolio\' domain.
    */
    'properties'?: Array<Property> | null;
    /**
    * If the portfolio is a transaction portfolio or derived transaction portfolio, this is the base currency of the portfolio.
    */
    'baseCurrency'?: string | null;
    /**
    * Collection of links.
    */
    'links'?: Array<Link> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "ResourceId"
        },
        {
            "name": "href",
            "baseName": "href",
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
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "parentPortfolioId",
            "baseName": "parentPortfolioId",
            "type": "ResourceId"
        },
        {
            "name": "isDerived",
            "baseName": "isDerived",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CompletePortfolio.TypeEnum"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<Property>"
        },
        {
            "name": "baseCurrency",
            "baseName": "baseCurrency",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return CompletePortfolio.attributeTypeMap;
    }
}

export namespace CompletePortfolio {
    export enum TypeEnum {
        Transaction = <any> 'Transaction',
        Reference = <any> 'Reference',
        DerivedTransaction = <any> 'DerivedTransaction'
    }
}
