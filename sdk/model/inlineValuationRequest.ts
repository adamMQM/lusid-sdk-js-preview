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
import { AggregateSpec } from './aggregateSpec';
import { OrderBySpec } from './orderBySpec';
import { PropertyFilter } from './propertyFilter';
import { ResourceId } from './resourceId';
import { ValuationSchedule } from './valuationSchedule';
import { WeightedInstrument } from './weightedInstrument';

/**
* Specification object for the parameters of an inline valuation
*/
export class InlineValuationRequest {
    'recipeId'?: ResourceId;
    /**
    * The asAt date to use
    */
    'asAt'?: Date | null;
    /**
    * The set of specifications to calculate or retrieve during the valuation and present in the results. For example:  AggregateSpec(\'Holding/default/PV\',\'Sum\') for returning the PV (present value) of holdings  AggregateSpec(\'Holding/default/Units\',\'Sum\') for returning the units of holidays  AggregateSpec(\'Instrument/default/LusidInstrumentId\',\'Value\') for returning the Lusid Instrument identifier
    */
    'metrics': Array<AggregateSpec>;
    /**
    * The set of items by which to perform grouping. This primarily matters when one or more of the metric operators is a mapping  that reduces set size, e.g. sum or proportion. The group-by statement determines the set of keys by which to break the results out.
    */
    'groupBy'?: Array<string> | null;
    /**
    * A set of filters to use to reduce the data found in a request. Equivalent to the \'where ...\' part of a Sql select statement.  For example, filter a set of values within a given range or matching a particular value.
    */
    'filters'?: Array<PropertyFilter> | null;
    /**
    * A (possibly empty/null) set of specifications for how to order the results.
    */
    'sort'?: Array<OrderBySpec> | null;
    /**
    * Three letter ISO currency string indicating what currency to report in for ReportCurrency denominated queries.  If not present, then the currency of the relevant portfolio will be used in its place.
    */
    'reportCurrency'?: string | null;
    /**
    * Flag directing the Valuation call to populate the results with subtotals of aggregates.
    */
    'equipWithSubtotals'?: boolean;
    'valuationSchedule'?: ValuationSchedule;
    /**
    * The set of instruments, weighted by the quantities held that are required.  It is identified by an identifier tag that can be used to identify it externally.  For a single, unique trade or transaction this can be thought of as equivalent to the transaction identifier, or  a composite of the sub-holding keys for a regular sub-holding. When there are multiple transactions sharing the same underlying instrument  such as purchase of shares on multiple dates where tax implications are different this would not be the case.
    */
    'instruments': Array<WeightedInstrument>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "recipeId",
            "baseName": "recipeId",
            "type": "ResourceId"
        },
        {
            "name": "asAt",
            "baseName": "asAt",
            "type": "Date"
        },
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "Array<AggregateSpec>"
        },
        {
            "name": "groupBy",
            "baseName": "groupBy",
            "type": "Array<string>"
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<PropertyFilter>"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "Array<OrderBySpec>"
        },
        {
            "name": "reportCurrency",
            "baseName": "reportCurrency",
            "type": "string"
        },
        {
            "name": "equipWithSubtotals",
            "baseName": "equipWithSubtotals",
            "type": "boolean"
        },
        {
            "name": "valuationSchedule",
            "baseName": "valuationSchedule",
            "type": "ValuationSchedule"
        },
        {
            "name": "instruments",
            "baseName": "instruments",
            "type": "Array<WeightedInstrument>"
        }    ];

    static getAttributeTypeMap() {
        return InlineValuationRequest.attributeTypeMap;
    }
}

