

export default function UserInput({onChange,investment}){
   
    return(

        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Initial Investment</label>
                    <input type="number" onChange={(event) => onChange('initialInvestment',event.target.value)} required value={investment.initialInvestment} />
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input type="number" onChange={(event) => onChange('annualInvestment',event.target.value)} required value={investment.annualInvestment}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Return</label>
                    <input type="number" onChange={(event) => onChange('expectedReturn',event.target.value)} required value={investment.expectedReturn}/>
                </p>
                <p>
                    <label >Duration</label>
                    <input type="number" onChange={(event) => onChange('duration',event.target.value)} required value={investment.duration}/>
                </p>
            </div>
        </section>

    )
}