import Typography from "./ui/Typography"
import Button from "./ui/Button"

export default function Header() {

    return (
        <div className="mx-auto font-medium text-gray-500">
            <Typography variant="h3" textColor="text-purple-500">Fart</Typography>
            <Button variant="secondary"> See Product </Button>
        </div>
    )

}