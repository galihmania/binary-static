import React from 'react';

const RiskDisclaimer = () => (
    <div>
        <h2 data-anchor='risk-disclaimer'>{it.L('Risk disclaimer')}</h2>
        <p>{it.L('This notice provides the client with information about the risks associated with the contracts the client may purchase through services provided by [_1] services.', it.website_name)}</p>
        <p>{it.L('Binary Group members are sometimes referred to collectively as "[_1]" or "the Company".', it.website_name)}</p>
        <p>{it.L('This notice does not explain all of the risks involved in investments or similar products or how such risks relate to the client\'s personal circumstances. It is important that the client fully understands the risks involved before making a decision to enter into a trade with the Company[_1]. If the client is in any doubt about the risks involved, the client should seek professional advice[_2].', '<span data-show="eucountry">','</span>')}</p>
        <p>{it.L('If the client chooses to enter into a contract with the Company, it is important that the client remains aware of the risks involved, that the client has adequate investment resources to bear such risks, and that the client monitors the client\'s positions carefully.')}</p>

        <h2 data-anchor='general-risks'>{it.L('General risks')}</h2>
        <p />

        <h4>{it.L('No advice')}</h4>
        <p>{it.L('The Company\'s services are provided on an execution-only basis. The Company does not provide investment advice in relation to the Company\'s products or services. The Company sometimes provides factual information or research recommendations about a market, information about transaction procedures, and information about the potential risks involved and how those risks may be minimised. However, any decision to use the Company\'s products or services is made by the client.')}</p>
        <p>{it.L('The client is responsible for managing the client\'s tax and legal affairs, including making any regulatory filings and payments and complying with applicable laws and regulations. The Company does not provide any regulatory, tax, or legal advice. If the client is in any doubt as to the tax treatment or liabilities[_2] of Products available through [_1][_3], the client may wish to seek independent advice.', it.website_name, '<span data-show="eucountry">','</span>')}</p>

        <h4>{it.L('Appropriateness')}</h4>
        <p data-show='eucountry'>{it.L('Investment Products to EEA residents are provided by Binary Investments (Europe) Ltd ("BIEL"), which is authorised and regulated by the Malta Financial Services Authority under the Malta Investment Services Act to deal on own account in Investment Products.')}</p>
        <p data-show='eucountry'>{it.L('Before the Company opens an account for the client in which the client can trade or invest in Investment Products with BIEL, the Company is required to make an assessment of whether products or services that the client has chosen are appropriate for the client and to warn the client if, on the basis of the information that the client has provided to the Company, any such product or service is deemed not appropriate for the client. Any decision to open an account and to use the Company\'s products or services is the client\'s. It is the client\'s responsibility to understand the risks involved with the Company\'s products or services.')}</p>
        <p>{it.L('During the application process, the Company may ask the client for information about the client\'s background, experience, and investment assets and earnings. The Company does not monitor on the client\'s behalf whether the amount of money that the client has sent to the Company or the client\'s profits or losses are consistent with that information. It is up to the client to assess whether the client\'s investment resources are adequate for the client\'s investment activity with the Company and the client\'s risk appetite in the products and services that the client uses.')}</p>

        <h4>{it.L('Need to monitor positions')}</h4>
        <p>{it.L('It is important that the client monitors all of the client\'s positions closely. It is the client\'s responsibility to monitor the client\'s positions, and during the period that the client has any open contracts, the client should always have the ability to access the client\'s accounts.')}</p>

        <div data-show='eucountry'>
            <h4>{it.L('Default')}</h4>
            <p>{it.L('Since BIEL is a member of the Malta Investor Compensation Scheme, the client is covered for the first €20,000 of any claim that the client may have in the unlikely event of BIEL suffering an investment default and not being able to meet its obligations. This protection is available only to retail clients. Neither professional clients nor eligible counterparties can benefit from this protection.')}</p>
        </div>

        <h2 data-anchor='contract-risks'>{it.L('Contract risks')}</h2>
        <p>{it.L('The client should not trade or invest in binary options unless the client knows and understands the products\' risks involved and that the client may lose all the money invested.')}</p>
        <p>{it.L('"Binary" or "digital" options are options that pay a pre-determined, fixed amount, depending on whether or not an event occurs at the time the Binary Option expires. binary options can have only one of two possible outcomes and allow the client to take a simple "Yes or No" approach. Like traditional options, binary options are based on an underlying asset such as currencies, commodities, or indices; however, one of the most significant differences between binary options and traditional options, among others, is that there can only be two outcomes for the option, either the client is paid the return upon the occurrence of the event, or the client loses the investment amount as determined in each option.')}</p>
        <p>{it.L('Trading in binary options is speculative and involves a high degree of risk that can result in the loss of the client\'s entire investment. Therefore, trading in binary options is appropriate only for persons that understand and are willing to assume the economic, legal, and other risks involved in such transactions. The client should be satisfied that binary options trading is suitable for the client in light of the client\'s investment circumstances and attitude towards risk before trading. The client should not engage in speculative binary options trading unless the client understands the basic aspects of such trading and its risks. If the client is in any doubt as to whether Binary Option trading is appropriate and suitable for the client, the client should seek independent advice from an investment consulting professional. [_1] does not provide such advice. It is the client\'s responsibility, taking into account the client\'s personal circumstances and investment resources, to take particular care and make careful considerations independently, both prior to applying to engage in binary options with [_1] and prior to making any individual order. Where the client does not understand the risks involved in applying for a trading account with [_1] or in making any individual order, the client should seek advice and consultation from an independent investment advisor. If the client continues to not understand the risks involved in trading in binary options, the client should not trade at all.', it.website_name)}</p>
        <p>{it.L('The client is advised that the binary options offered by [_1] are not traded under the rules of any recognised, designated, or regulated exchange. Consequently, engaging in binary options trading may expose the client to substantially greater risks than the investments that are so traded.', it.website_name)}</p>
        <p>{it.L('The client is warned of the following additional risks:')}</p>
        <p>{it.L('Derivative investment instruments such as binary options and related markets can be highly volatile. The prices of the underlying instrument that a Binary Option refers to may fluctuate rapidly and over wide ranges and may reflect unforeseeable events or changes in conditions, none of which can be controlled by the client or [_1].', it.website_name)}</p>
        <p>{it.L('[_1] tries to maintain a reasonable relation between the quoted prices of each underlying asset that a Binary Option refers to and the actual market prices of such an asset. [_1] makes no warranty, expressed or implied, that the quoted prices represent prevailing market prices.', it.website_name)}</p>
        <p>{it.L('[_1] may have access to information that is not available to the client, may have acquired trading positions at prices that are not available to the client, and may have interests different from the client\'s interests. [_1] does not undertake any obligation to provide the client with market or other information that the Company possesses, nor to alter or refrain from the Company\'s own trading.', it.website_name)}</p>
        <p>{it.L('Information of the previous performance of any underlying instrument or asset does not guarantee its current and/or future performance. Past performance is not a reliable indicator of future results.')}</p>

        <h2 data-anchor='risks-of-investment-products'>{it.L('Risks of Investment Products')}</h2>
        <p>{it.L('Investing or trading in contracts exposes the client to the performance of the underlying or reference instrument or asset to which the Binary contract refers, including foreign exchange, indices, and commodities, each of which have their own features and risks.')}</p>
        <p>{it.L('Exchange rate risk: Exchange rates between foreign currencies can change rapidly due to a wide range of economic, political, and other conditions, exposing the client to the risk of exchange rate losses in addition to the inherent risk of loss from trading the underlying Investment Product. If the client deposits funds in a currency to trade contracts denominated in a different currency, the client\'s gains or losses on the underlying investment may be affected by changes in the exchange rate between the currencies.')}</p>
        <p>{it.L('Other risks: There are other risks related to trading Investment Products and foreign currencies that cannot be described in detail in this document. Generally, however, securities, options, and currency transactions involve exposure to a combination of the following risk factors: market risk, credit risk, settlement risk, liquidity risk, operational risk, and legal risk. For example, there can be serious market disruptions if local or overseas economic, political, or other unforeseen events affect the market. In addition to these types of risk, there may be other factors such as accounting and tax treatment issues that the client should consider.')}</p>

        <h2 data-anchor='market-opinions'>{it.L('Market opinions')}</h2>
        <p>{it.L('All opinions, news, research, analysis, prices, or other information contained on this website are provided as general market commentary and do not constitute investment advice. [_1] will not accept liability for any loss or damage, including, but without limitation to, any loss of profit that may arise directly or indirectly from the use of, or reliance on, such information.', it.website_name)}</p>

        <h2 data-anchor='internet-trading-risks'>{it.L('Internet trading risks')}</h2>
        <p>{it.L('There are risks associated with utilising an Internet-based deal execution trading system, including, but not limited to, the failure of hardware, software, and Internet connection. Since [_1] does not control signal power, its reception or routing via Internet, the configuration of the client\'s equipment, or the reliability of its connection, the Company cannot be responsible for communication failures, distortions, or delays during online trading.', it.website_name)}</p>

        <h2 data-anchor='accuracy-of-information'>{it.L('Accuracy of information')}</h2>
        <p>{it.L('The content on this website is subject to change at any time without notice and is provided for the sole purpose of assisting traders in making independent investment decisions. [_1] has taken reasonable measures to ensure the accuracy of the information on the website.', it.website_name)}</p>

        <h2 data-anchor='costs-and-charges'>{it.L('Costs and charges')}</h2>
        <p>{it.L('The Company\'s costs and charges for depositing and withdrawing money are set out [_1]here[_2]. The client should be aware of all costs and charges that apply to the client because they will affect the client\'s profitability.', `<a href="${it.url_for('cashier/payment_methods')}">`, '</a>')}</p>
    </div>
);

export default RiskDisclaimer;
