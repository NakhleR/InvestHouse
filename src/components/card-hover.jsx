import { HoverEffect } from "./card-hover-effect";

function CardGrid({ items }) {
    return (
        <div className="max-w-5xl">
            <HoverEffect items={items} />
        </div>
    );
}

export default CardGrid;
