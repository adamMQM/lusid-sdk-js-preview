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

export class EquityOptionAllOf {
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
    * The available values are: Cash, Physical
    */
    'deliveryType': EquityOptionAllOf.DeliveryTypeEnum;
    /**
    * The available values are: None, Call, Put
    */
    'optionType': EquityOptionAllOf.OptionTypeEnum;
    /**
    * The strike of the option.
    */
    'strike': number;
    /**
    * The domestic currency of the instrument.
    */
    'domCcy': string;
    /**
    * The available values are: LusidInstrumentId, Isin, Sedol, Cusip, ClientInternal, Figi, RIC, QuotePermId, REDCode, BBGId, ICECode
    */
    'underlyingIdentifier': EquityOptionAllOf.UnderlyingIdentifierEnum;
    /**
    * The identifying code for the equity underlying, e.g. \'IBM.N\'.
    */
    'code': string;
    /**
    * The available values are: QuotedSecurity, InterestRateSwap, FxForward, Future, ExoticInstrument, FxOption, CreditDefaultSwap, InterestRateSwaption, Bond, EquityOption, FixedLeg, FloatingLeg, BespokeCashFlowsLeg, Unknown, TermDeposit, ContractForDifference, EquitySwap, CashPerpetual, CashSettled, CdsIndex, Basket, FundingLeg, CrossCurrencySwap, FxSwap, ForwardRateAgreement, SimpleInstrument, Repo
    */
    'instrumentType': EquityOptionAllOf.InstrumentTypeEnum;

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
            "name": "deliveryType",
            "baseName": "deliveryType",
            "type": "EquityOptionAllOf.DeliveryTypeEnum"
        },
        {
            "name": "optionType",
            "baseName": "optionType",
            "type": "EquityOptionAllOf.OptionTypeEnum"
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
            "name": "underlyingIdentifier",
            "baseName": "underlyingIdentifier",
            "type": "EquityOptionAllOf.UnderlyingIdentifierEnum"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "instrumentType",
            "baseName": "instrumentType",
            "type": "EquityOptionAllOf.InstrumentTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return EquityOptionAllOf.attributeTypeMap;
    }
}

export namespace EquityOptionAllOf {
    export enum DeliveryTypeEnum {
        Cash = <any> 'Cash',
        Physical = <any> 'Physical'
    }
    export enum OptionTypeEnum {
        None = <any> 'None',
        Call = <any> 'Call',
        Put = <any> 'Put'
    }
    export enum UnderlyingIdentifierEnum {
        LusidInstrumentId = <any> 'LusidInstrumentId',
        Isin = <any> 'Isin',
        Sedol = <any> 'Sedol',
        Cusip = <any> 'Cusip',
        ClientInternal = <any> 'ClientInternal',
        Figi = <any> 'Figi',
        Ric = <any> 'RIC',
        QuotePermId = <any> 'QuotePermId',
        RedCode = <any> 'REDCode',
        Bbgid = <any> 'BBGId',
        IceCode = <any> 'ICECode'
    }
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
