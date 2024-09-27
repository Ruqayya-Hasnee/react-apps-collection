export default function Fruit({name, price, emoji}){
    return (
    <>
        {/* {emoji} {name} {price} */}
        {price>5 ? (
            <li>{emoji} {name} {price}</li>
        )
         : (
            ""
            )}
    </>
    )
}