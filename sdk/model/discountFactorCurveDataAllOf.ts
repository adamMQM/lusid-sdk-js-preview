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

export class DiscountFactorCurveDataAllOf {
    /**
    * BaseDate for the Curve
    */
    'baseDate': Date;
    /**
    * Dates for which the discount factors apply
    */
    'dates': Array<Date>;
    /**
    * Discount factors to be applied to cashflow on the specified dates
    */
    'discountFactors': Array<number>;
    /**
    * The available values are: DiscountFactorCurveData, EquityVolSurfaceData, FxVolSurfaceData, IrVolCubeData, OpaqueMarketData, YieldCurveData, FxForwardCurveData, FxForwardPipsCurveData, FxForwardTenorCurveData, FxForwardTenorPipsCurveData
    */
    'marketDataType': DiscountFactorCurveDataAllOf.MarketDataTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "baseDate",
            "baseName": "baseDate",
            "type": "Date"
        },
        {
            "name": "dates",
            "baseName": "dates",
            "type": "Array<Date>"
        },
        {
            "name": "discountFactors",
            "baseName": "discountFactors",
            "type": "Array<number>"
        },
        {
            "name": "marketDataType",
            "baseName": "marketDataType",
            "type": "DiscountFactorCurveDataAllOf.MarketDataTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DiscountFactorCurveDataAllOf.attributeTypeMap;
    }
}

export namespace DiscountFactorCurveDataAllOf {
    export enum MarketDataTypeEnum {
        DiscountFactorCurveData = <any> 'DiscountFactorCurveData',
        EquityVolSurfaceData = <any> 'EquityVolSurfaceData',
        FxVolSurfaceData = <any> 'FxVolSurfaceData',
        IrVolCubeData = <any> 'IrVolCubeData',
        OpaqueMarketData = <any> 'OpaqueMarketData',
        YieldCurveData = <any> 'YieldCurveData',
        FxForwardCurveData = <any> 'FxForwardCurveData',
        FxForwardPipsCurveData = <any> 'FxForwardPipsCurveData',
        FxForwardTenorCurveData = <any> 'FxForwardTenorCurveData',
        FxForwardTenorPipsCurveData = <any> 'FxForwardTenorPipsCurveData'
    }
}
