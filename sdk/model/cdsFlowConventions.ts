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

export class CdsFlowConventions {
    /**
    * The frequency at which the reference bonds are updated, this defaults to 6M, but can be 3M, exp for historically issued products
    */
    'rollFrequency'?: string | null;
    /**
    * Currency of the flow convention.
    */
    'currency': string;
    /**
    * When generating a multiperiod flow, or when the maturity of the flow is not given but the start date is,  the tenor is the time-step from the anchor-date to the nominal maturity of the flow prior to any adjustment.
    */
    'paymentFrequency': string;
    /**
    * when calculating the fraction of a year between two dates, what convention is used to represent the number of days in a year  and difference between them.  Supported string (enumeration) values are: [Actual360, Act360, MoneyMarket, Actual365, Act365, Thirty360, ThirtyU360, Bond, ThirtyE360, EuroBond, ActualActual, ActAct, ActActIsda, ActActIsma, ActActIcma, OneOne, Act364, Act365F, Act365L, Act365_25, Act252, Bus252, NL360, NL365, ActActAFB, Act365Cad, ThirtyActIsda, Thirty365Isda, ThirtyEActIsda, ThirtyE360Isda, ThirtyE365Isda, ThirtyU360EOM].
    */
    'dayCountConvention': string;
    /**
    * When generating a set of dates, what convention should be used for adjusting dates that coincide with a non-business day.  Supported string (enumeration) values are: [NoAdjustment, None, Previous, P, Following, F, ModifiedPrevious, MP, ModifiedFollowing, MF, EndOfMonth, EOM, EndOfMonthPrevious, EOMP, EndOfMonthFollowing, EOMF].
    */
    'rollConvention': string;
    /**
    * An array of strings denoting holiday calendars that apply to generation of payment schedules.
    */
    'paymentCalendars': Array<string>;
    /**
    * An array of strings denoting holiday calendars that apply to generation of reset schedules.
    */
    'resetCalendars': Array<string>;
    /**
    * Number of Good Business Days between the trade date and the effective or settlement date of the instrument.
    */
    'settleDays': number;
    /**
    * The number of Good Business Days between determination and payment of reset.
    */
    'resetDays': number;
    /**
    * The scope used when updating or inserting the convention.
    */
    'scope'?: string | null;
    /**
    * The code of the convention.
    */
    'code'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rollFrequency",
            "baseName": "rollFrequency",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "paymentFrequency",
            "baseName": "paymentFrequency",
            "type": "string"
        },
        {
            "name": "dayCountConvention",
            "baseName": "dayCountConvention",
            "type": "string"
        },
        {
            "name": "rollConvention",
            "baseName": "rollConvention",
            "type": "string"
        },
        {
            "name": "paymentCalendars",
            "baseName": "paymentCalendars",
            "type": "Array<string>"
        },
        {
            "name": "resetCalendars",
            "baseName": "resetCalendars",
            "type": "Array<string>"
        },
        {
            "name": "settleDays",
            "baseName": "settleDays",
            "type": "number"
        },
        {
            "name": "resetDays",
            "baseName": "resetDays",
            "type": "number"
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
        }    ];

    static getAttributeTypeMap() {
        return CdsFlowConventions.attributeTypeMap;
    }
}

