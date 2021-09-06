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

/**
* The combination of a library to use and a model in that library that defines which pricing code will evaluate instruments  having a particular type/class. This allows us to control the model type and library for a given instrument.
*/
export class ModelSelection {
    /**
    * The available values are: Lusid, RefinitivQps, RefinitivTracsWeb, VolMaster, IsdaCds
    */
    'library': ModelSelection.LibraryEnum;
    /**
    * The available values are: SimpleStatic, Discounting, VendorDefault, BlackScholes, ConstantTimeValueOfMoney, Bachelier, ForwardWithPoints, ForwardWithPointsUndiscounted, ForwardSpecifiedRate, ForwardSpecifiedRateUndiscounted, IndexNav, IndexPrice, InlinedIndex
    */
    'model': ModelSelection.ModelEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "library",
            "baseName": "library",
            "type": "ModelSelection.LibraryEnum"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "ModelSelection.ModelEnum"
        }    ];

    static getAttributeTypeMap() {
        return ModelSelection.attributeTypeMap;
    }
}

export namespace ModelSelection {
    export enum LibraryEnum {
        Lusid = <any> 'Lusid',
        RefinitivQps = <any> 'RefinitivQps',
        RefinitivTracsWeb = <any> 'RefinitivTracsWeb',
        VolMaster = <any> 'VolMaster',
        IsdaCds = <any> 'IsdaCds'
    }
    export enum ModelEnum {
        SimpleStatic = <any> 'SimpleStatic',
        Discounting = <any> 'Discounting',
        VendorDefault = <any> 'VendorDefault',
        BlackScholes = <any> 'BlackScholes',
        ConstantTimeValueOfMoney = <any> 'ConstantTimeValueOfMoney',
        Bachelier = <any> 'Bachelier',
        ForwardWithPoints = <any> 'ForwardWithPoints',
        ForwardWithPointsUndiscounted = <any> 'ForwardWithPointsUndiscounted',
        ForwardSpecifiedRate = <any> 'ForwardSpecifiedRate',
        ForwardSpecifiedRateUndiscounted = <any> 'ForwardSpecifiedRateUndiscounted',
        IndexNav = <any> 'IndexNav',
        IndexPrice = <any> 'IndexPrice',
        InlinedIndex = <any> 'InlinedIndex'
    }
}
