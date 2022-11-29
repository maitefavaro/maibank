import { Card } from "react-pay-card"

export const Footer = () => {
    return(
        <div>
            <div className="bg-black w-full">
                <Card 
                    cardHolder="Robertinho"
                    cardCvv="000"
                    cardMonth="09"
                    cardNumber="0000 0000 0000 0000"
                    cardYear="2022"
                />
            </div>
        </div>

    )
}