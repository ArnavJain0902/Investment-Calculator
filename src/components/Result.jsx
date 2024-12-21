import { calculateInvestmentResults , formatter} from "../util/investment"

export default function Result({investment}){
    let finalData = calculateInvestmentResults(investment)
    let initialInvestment = investment.initialInvestment
    
    return(
    <table id="result">
        <thead>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (year) </th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </thead>
        <tbody>
            {finalData.map(yearData =>{
                let totalInterest = yearData.valueEndOfYear-((yearData.annualInvestment)*(yearData.year))-initialInvestment
                return(
                    
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}
                        </td><td>{formatter.format(totalInterest)}</td>     
                        <td>{formatter.format(yearData.valueEndOfYear-totalInterest)}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}