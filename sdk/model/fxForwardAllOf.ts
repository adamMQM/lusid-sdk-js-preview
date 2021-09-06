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

export class FxForwardAllOf {
    /**
    * The start date of the instrument. This is normally synonymous with the trade-date.
    */
    'startDate': Date;
    /**
    * The final maturity date of the instrument. This means the last date on which the instruments makes a payment of any amount.              For the avoidance of doubt, that is not necessarily prior to its last sensitivity date for the purposes of risk; e.g. instruments such as              Constant Maturity Swaps (CMS) often have sensitivities to rates beyond their last payment date
    */
    'maturityDate': Date;
    /**
    * The amount that is to be paid in the domestic currency on the maturity date.
    */
    'domAmount': number;
    /**
    * The domestic currency of the instrument.
    */
    'domCcy': string;
    /**
    * The amount that is to be paid in the foreign currency on the maturity date
    */
    'fgnAmount': number;
    /**
    * The foreign (other) currency of the instrument. In the NDF case, only payments are made in the domestic currency.              For the outright forward, currencies are exchanged. By domestic is then that of the portfolio.
    */
    'fgnCcy': string;
    /**
    * The reference Fx Spot rate for currency pair Foreign-Domestic that was seen on the trade start date (time).
    */
    'refSpotRate'?: number;
    /**
    * Is the contract an Fx-Forward of \"Non-Deliverable\" type, meaning a single payment in the domestic currency based on the change in fx-rate vs              a reference rate is used.
    */
    'isNdf'?: boolean;
    /**
    * The fixing date .
    */
    'fixingDate'?: Date;
    /**
    * The available values are: QuotedSecurity, InterestRateSwap, FxForward, Future, ExoticInstrument, FxOption, CreditDefaultSwap, InterestRateSwaption, Bond, EquityOption, FixedLeg, FloatingLeg, BespokeCashFlowsLeg, Unknown, TermDeposit, ContractForDifference, EquitySwap, CashPerpetual, CashSettled, CdsIndex, Basket, FundingLeg, CrossCurrencySwap, FxSwap, ForwardRateAgreement, SimpleInstrument, Repo
    */
    'instrumentType': FxForwardAllOf.InstrumentTypeEnum;

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
            "name": "domAmount",
            "baseName": "domAmount",
            "type": "number"
        },
        {
            "name": "domCcy",
            "baseName": "domCcy",
            "type": "string"
        },
        {
            "name": "fgnAmount",
            "baseName": "fgnAmount",
            "type": "number"
        },
        {
            "name": "fgnCcy",
            "baseName": "fgnCcy",
            "type": "string"
        },
        {
            "name": "refSpotRate",
            "baseName": "refSpotRate",
            "type": "number"
        },
        {
            "name": "isNdf",
            "baseName": "isNdf",
            "type": "boolean"
        },
        {
            "name": "fixingDate",
            "baseName": "fixingDate",
            "type": "Date"
        },
        {
            "name": "instrumentType",
            "baseName": "instrumentType",
            "type": "FxForwardAllOf.InstrumentTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return FxForwardAllOf.attributeTypeMap;
    }
}

export namespace FxForwardAllOf {
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
