export const FristApp = ({title, subTitle}) => {

    // console.log(props);

    return (
        <>
            <h1>{title}</h1>
            {/* Expresion no objeto */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle + 1}</p>
        </>
    )
}