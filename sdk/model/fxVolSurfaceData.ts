/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  The LUSID platform is made up of a number of sub-applications. You can find the API / swagger documentation by following the links in the table below.   | Application | Description | API / Swagger Documentation | | ----- | ----- | ---- | | LUSID | Open, API-first, developer-friendly investment data platform. | [Swagger](https://www.lusid.com/api/swagger/index.html) | | Web app | User-facing front end for LUSID. | [Swagger](https://www.lusid.com/app/swagger/index.html) | | Scheduler | Automated job scheduler. | [Swagger](https://www.lusid.com/scheduler2/swagger/index.html) | | Insights |Monitoring and troubleshooting service. | [Swagger](https://www.lusid.com/insights/swagger/index.html) | | Identity | Identity management for LUSID (in conjuction with Access) | [Swagger](https://www.lusid.com/identity/swagger/index.html) | | Access | Access control for LUSID (in conjunction with Identity) | [Swagger](https://www.lusid.com/access/swagger/index.html) | | Drive | Secure file repository and manager for collaboration. | [Swagger](https://www.lusid.com/drive/swagger/index.html) | | Luminesce | Data virtualisation service (query data from multiple providers, including LUSID) | [Swagger](https://www.lusid.com/honeycomb/swagger/index.html) | | Notification | Notification service. | [Swagger](https://www.lusid.com/notifications/swagger/index.html) | | Configuration | File store for secrets and other sensitive information. | [Swagger](https://www.lusid.com/configuration/swagger/index.html) | 
 *
 * The version of the OpenAPI document: 0.11.3457
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ComplexMarketData } from './complexMarketData';
import { EquityVolSurfaceDataAllOf } from './equityVolSurfaceDataAllOf';
import { LusidInstrument } from './lusidInstrument';
import { MarketQuote } from './marketQuote';

/**
* Market Data for an fx vol surface, represented by a list of fx options and corresponding market quotes
*/
export class FxVolSurfaceData extends ComplexMarketData {
    /**
    * Base date of the surface
    */
    'baseDate': Date;
    /**
    * The set of instruments that define the surface.
    */
    'instruments': Array<LusidInstrument>;
    /**
    * The set of market quotes that define the surface, in NormalVol or LogNormalVol terms.
    */
    'quotes': Array<MarketQuote>;
    /**
    * The available values are: DiscountFactorCurveData, EquityVolSurfaceData, FxVolSurfaceData, IrVolCubeData, OpaqueMarketData, YieldCurveData
    */
    'marketDataType': FxVolSurfaceData.MarketDataTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "baseDate",
            "baseName": "baseDate",
            "type": "Date"
        },
        {
            "name": "instruments",
            "baseName": "instruments",
            "type": "Array<LusidInstrument>"
        },
        {
            "name": "quotes",
            "baseName": "quotes",
            "type": "Array<MarketQuote>"
        },
        {
            "name": "marketDataType",
            "baseName": "marketDataType",
            "type": "FxVolSurfaceData.MarketDataTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FxVolSurfaceData.attributeTypeMap);
    }
}

export namespace FxVolSurfaceData {
    export enum MarketDataTypeEnum {
        DiscountFactorCurveData = <any> 'DiscountFactorCurveData',
        EquityVolSurfaceData = <any> 'EquityVolSurfaceData',
        FxVolSurfaceData = <any> 'FxVolSurfaceData',
        IrVolCubeData = <any> 'IrVolCubeData',
        OpaqueMarketData = <any> 'OpaqueMarketData',
        YieldCurveData = <any> 'YieldCurveData'
    }
}
