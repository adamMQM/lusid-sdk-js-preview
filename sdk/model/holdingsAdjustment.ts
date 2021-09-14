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
import { HoldingAdjustment } from './holdingAdjustment';
import { Link } from './link';
import { Version } from './version';

/**
* Full content of a holdings adjustment for a single portfolio and effective date.
*/
export class HoldingsAdjustment {
    /**
    * The effective datetime from which the adjustment is valid. There can only be one holdings adjustment for a transaction portfolio at a specific effective datetime, so this uniquely identifies the adjustment.
    */
    'effectiveAt': Date;
    'version': Version;
    /**
    * Describes how the holdings were adjusted. If \'PositionToZero\' the entire transaction portfolio\'s holdings were set via a call to \'Set holdings\'. If \'KeepTheSame\' only the specified holdings were adjusted via a call to \'Adjust holdings\'. The available values are: PositionToZero, KeepTheSame
    */
    'unmatchedHoldingMethod': HoldingsAdjustment.UnmatchedHoldingMethodEnum;
    /**
    * The holding adjustments.
    */
    'adjustments': Array<HoldingAdjustment>;
    /**
    * Collection of links.
    */
    'links'?: Array<Link> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "effectiveAt",
            "baseName": "effectiveAt",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
        },
        {
            "name": "unmatchedHoldingMethod",
            "baseName": "unmatchedHoldingMethod",
            "type": "HoldingsAdjustment.UnmatchedHoldingMethodEnum"
        },
        {
            "name": "adjustments",
            "baseName": "adjustments",
            "type": "Array<HoldingAdjustment>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<Link>"
        }    ];

    static getAttributeTypeMap() {
        return HoldingsAdjustment.attributeTypeMap;
    }
}

export namespace HoldingsAdjustment {
    export enum UnmatchedHoldingMethodEnum {
        PositionToZero = <any> 'PositionToZero',
        KeepTheSame = <any> 'KeepTheSame'
    }
}
