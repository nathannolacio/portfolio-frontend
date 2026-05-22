import Badge from "../../ui/Badge";

type TypeProps = {
    type: "Real Project" | "Study Project";
}

export default function TypeBadge({ type }: TypeProps) {
    return (
        <Badge 
            text={type}
            className="text-lime-600 border-lime-400 bg-lime-100/70"
        />
    );
}