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
import { ContractForDifferenceAllOf } from './contractForDifferenceAllOf';
import { LusidInstrument } from './lusidInstrument';

/**
* IL CFD Instrument; Lusid-ibor internal representation of a Contract For Difference instrument.
*/
export class ContractForDifference extends LusidInstrument {
    /**
    * The start date of the CFD.
    */
    'startDate': Date;
    /**
    * The maturity date for the CFD. If CFDType is Futures, this should be set to be the maturity date of the underlying  future. If CFDType is Cash, this should not be set.
    */
    'maturityDate'?: Date;
    /**
    * The code of the underlying.
    */
    'code': string;
    /**
    * The size of the CFD contract, this should represent the total number of stocks that the CFD represents.
    */
    'contractSize': number;
    /**
    * The currency that this CFD pays out, this can be different to the UnderlyingCcy.
    */
    'payCcy': string;
    /**
    * The reference rate of the CFD, this can be set to 0 but not negative values.  This field is optional, if not set it will default to 0.
    */
    'referenceRate'?: number;
    /**
    * The type of CFD.  Supported string (enumeration) values are: [Cash, Futures].
    */
    'type': string;
    /**
    * The currency of the underlying
    */
    'underlyingCcy': string;
    /**
    * external market codes and identifiers for the CFD, e.g. RIC.  Supported string (enumeration) values are: [LusidInstrumentId, Isin, Sedol, Cusip, ClientInternal, Figi, RIC, QuotePermId, REDCode, BBGId, ICECode].
    */
    'underlyingIdentifier': string;
    /**
    * The available values are: QuotedSecurity, InterestRateSwap, FxForward, Future, ExoticInstrument, FxOption, CreditDefaultSwap, InterestRateSwaption, Bond, EquityOption, FixedLeg, FloatingLeg, BespokeCashFlowsLeg, Unknown, TermDeposit, ContractForDifference, EquitySwap, CashPerpetual, CashSettled, CdsIndex, Basket, FundingLeg, CrossCurrencySwap, FxSwap, ForwardRateAgreement, SimpleInstrument, Repo, Equity
    */
    'instrumentType': ContractForDifference.InstrumentTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date"
        },
        {
            "name": "maturityDate",
            "baseName": "maturityDate",
            "type": "Date"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "contractSize",
            "baseName": "contractSize",
            "type": "number"
        },
        {
            "name": "payCcy",
            "baseName": "payCcy",
            "type": "string"
        },
        {
            "name": "referenceRate",
            "baseName": "referenceRate",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "underlyingCcy",
            "baseName": "underlyingCcy",
            "type": "string"
        },
        {
            "name": "underlyingIdentifier",
            "baseName": "underlyingIdentifier",
            "type": "string"
        },
        {
            "name": "instrumentType",
            "baseName": "instrumentType",
            "type": "ContractForDifference.InstrumentTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ContractForDifference.attributeTypeMap);
    }
}

export namespace ContractForDifference {
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
        Repo = <any> 'Repo',
        Equity = <any> 'Equity'
    }
}
