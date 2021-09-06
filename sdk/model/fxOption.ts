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
import { FxOptionAllOf } from './fxOptionAllOf';
import { LusidInstrument } from './lusidInstrument';
import { Premium } from './premium';

/**
* Lusid-ibor internal representation of a plain vanilla FX Option instrument.
*/
export class FxOption extends LusidInstrument {
    /**
    * The start date of the instrument. This is normally synonymous with the trade-date.
    */
    'startDate': Date;
    /**
    * The maturity date of the option.
    */
    'optionMaturityDate': Date;
    /**
    * The settlement date of the option.
    */
    'optionSettlementDate': Date;
    /**
    * True of the option is settled in cash false if delivery.
    */
    'isDeliveryNotCash': boolean;
    /**
    * True if the option is a call, false if the option is a put.
    */
    'isCallNotPut': boolean;
    /**
    * The strike of the option.
    */
    'strike': number;
    /**
    * The domestic currency of the instrument.
    */
    'domCcy': string;
    /**
    * The foreign currency of the FX.
    */
    'fgnCcy': string;
    'premium'?: Premium;
    /**
    * The available values are: QuotedSecurity, InterestRateSwap, FxForward, Future, ExoticInstrument, FxOption, CreditDefaultSwap, InterestRateSwaption, Bond, EquityOption, FixedLeg, FloatingLeg, BespokeCashFlowsLeg, Unknown, TermDeposit, ContractForDifference, EquitySwap, CashPerpetual, CashSettled, CdsIndex, Basket, FundingLeg, CrossCurrencySwap, FxSwap, ForwardRateAgreement, SimpleInstrument, Repo
    */
    'instrumentType': FxOption.InstrumentTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date"
        },
        {
            "name": "optionMaturityDate",
            "baseName": "optionMaturityDate",
            "type": "Date"
        },
        {
            "name": "optionSettlementDate",
            "baseName": "optionSettlementDate",
            "type": "Date"
        },
        {
            "name": "isDeliveryNotCash",
            "baseName": "isDeliveryNotCash",
            "type": "boolean"
        },
        {
            "name": "isCallNotPut",
            "baseName": "isCallNotPut",
            "type": "boolean"
        },
        {
            "name": "strike",
            "baseName": "strike",
            "type": "number"
        },
        {
            "name": "domCcy",
            "baseName": "domCcy",
            "type": "string"
        },
        {
            "name": "fgnCcy",
            "baseName": "fgnCcy",
            "type": "string"
        },
        {
            "name": "premium",
            "baseName": "premium",
            "type": "Premium"
        },
        {
            "name": "instrumentType",
            "baseName": "instrumentType",
            "type": "FxOption.InstrumentTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FxOption.attributeTypeMap);
    }
}

export namespace FxOption {
    export enum InstrumentTypeEnum {
        QuotedSecurity = <any> 'QuotedSecurity',
        InterestRateSwap = <any> 'InterestRateSwap',
        FxForward = <any> 'FxForward',
        Future = <any> 'Future',
        ExoticInstrument = <any> 'ExoticInstrument',
        FxOption = <any> 'FxOption',
        CreditDefaultSwap = <any> 'CreditDefaultSwap',
        InterestRateSwaption = <any> 'InterestRateSwaption',
        Bond = <any> 'Bond',
        EquityOption = <any> 'EquityOption',
        FixedLeg = <any> 'FixedLeg',
        FloatingLeg = <any> 'FloatingLeg',
        BespokeCashFlowsLeg = <any> 'BespokeCashFlowsLeg',
        Unknown = <any> 'Unknown',
        TermDeposit = <any> 'TermDeposit',
        ContractForDifference = <any> 'ContractForDifference',
        EquitySwap = <any> 'EquitySwap',
        CashPerpetual = <any> 'CashPerpetual',
        CashSettled = <any> 'CashSettled',
        CdsIndex = <any> 'CdsIndex',
        Basket = <any> 'Basket',
        FundingLeg = <any> 'FundingLeg',
        CrossCurrencySwap = <any> 'CrossCurrencySwap',
        FxSwap = <any> 'FxSwap',
        ForwardRateAgreement = <any> 'ForwardRateAgreement',
        SimpleInstrument = <any> 'SimpleInstrument',
        Repo = <any> 'Repo'
    }
}
