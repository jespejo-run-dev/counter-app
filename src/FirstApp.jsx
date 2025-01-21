const getResult = (a,b) => {
    return a+b;
 }

const newMessage = {
    message: 'Hola Mundo',
    title: 'Jespejo'
};

export const FristApp = () => {

    return (
        <>
            <h1>{getResult(1,10)}</h1>
            {/* Expresion no objeto */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>Soy un subtitulo </p>
        </>
    )
}