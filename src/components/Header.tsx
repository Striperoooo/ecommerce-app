import Typography from "./ui/Typography"
import Button from "./ui/Button"
import QuantitySelector from "./ui/QuantitySelector"

export default function Header() {

    return (
        <div className="mx-auto my-10 font-medium text-gray-500">
            <Typography variant="h3" textColor="text-purple-500">Fart</Typography>
            <Button variant="primary">  SEE PRODUCT </Button>
            <form className="my-10" action="#" method="post">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Insert your name" className="text-field" />
                </div>

                <div className="flex flex-col gap-3">

                    <p>Select an option:</p>
                    <label
                        htmlFor="option1"
                        className="radio-label-field group"
                    >
                        <input type="radio" id="option1" name="choice" value="1" className="radio-input-field" />
                        e-Money
                    </label>

                    <label
                        htmlFor="option2"
                        className="radio-label-field group"
                    >
                        <input type="radio" id="option2" name="choice" value="2" className="radio-input-field" />
                        e-Fart
                    </label>
                </div>

                <h3>Quantity</h3>
                <QuantitySelector></QuantitySelector>

                <button type="submit">Submit</button>
            </form>

        </div>
    )

}