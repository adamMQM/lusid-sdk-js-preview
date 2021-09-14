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
import { ResourceId } from './resourceId';

/**
* Specification class consisting of parameters for BucketedCashFlow endpoint.
*/
export class BucketedCashFlowRequest {
    /**
    * When bucketing, there is not a unique way to allocate the bucket points.  RoundingMethod    Supported string (enumeration) values are: [RoundDown, RoundUp].
    */
    'roundingMethod': string;
    /**
    * A list of dates to perform cashflow bucketing upon.  If this is provided, the list of tenors for bucketing should be empty.
    */
    'bucketingDates'?: Array<Date> | null;
    /**
    * A list of tenors to perform cashflow bucketing upon.  If this is provided, the list of dates for bucketing should be empty.
    */
    'bucketTenors'?: Array<string> | null;
    /**
    * The valuation (pricing) effective datetime or cut label (inclusive) at which to evaluate the cashflows.  This determines whether cashflows are evaluated in a historic or forward looking context and will, for certain models, affect where data is looked up.  For example, on a swap if the effectiveAt is in the middle of the window, cashflows before it will be historic and resets assumed to exist where if the effectiveAt  is before the start of the range they are forward looking and will be expectations assuming the model supports that.  There is evidently a presumption here about availability of data and that the effectiveAt is realistically on or before the real-world today.
    */
    'effectiveAt'?: string | null;
    /**
    * The lower bound effective datetime or cut label (inclusive) from which to retrieve the cashflows.  There is no lower bound if this is not specified.
    */
    'windowStart'?: string | null;
    /**
    * The upper bound effective datetime or cut label (inclusive) from which to retrieve the cashflows.  The upper bound defaults to \'today\' if it is not specified
    */
    'windowEnd'?: string | null;
    'recipeId'?: ResourceId;
    /**
    * Three letter ISO currency string indicating what currency to report in for ReportCurrency denominated queries.  If not present, then the currency of the relevant portfolio will be used in its place.
    */
    'reportCurrency'?: string | null;
    /**
    * The asAt date to use
    */
    'asAt'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "roundingMethod",
            "baseName": "roundingMethod",
            "type": "string"
        },
        {
            "name": "bucketingDates",
            "baseName": "bucketingDates",
            "type": "Array<Date>"
        },
        {
            "name": "bucketTenors",
            "baseName": "bucketTenors",
            "type": "Array<string>"
        },
        {
            "name": "effectiveAt",
            "baseName": "effectiveAt",
            "type": "string"
        },
        {
            "name": "windowStart",
            "baseName": "windowStart",
            "type": "string"
        },
        {
            "name": "windowEnd",
            "baseName": "windowEnd",
            "type": "string"
        },
        {
            "name": "recipeId",
            "baseName": "recipeId",
            "type": "ResourceId"
        },
        {
            "name": "reportCurrency",
            "baseName": "reportCurrency",
            "type": "string"
        },
        {
            "name": "asAt",
            "baseName": "asAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return BucketedCashFlowRequest.attributeTypeMap;
    }
}

