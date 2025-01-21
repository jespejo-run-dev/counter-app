import PropTypes from 'prop-types';

export const FristApp = ({
    name = 'Jespejo',
    subTitle = 'no hay subtítulo',
    title = 'No hay título',
}) => {

    // console.log(props);

    return (
        <>
            <h1>{title}</h1>
            {/* Expresion no objeto */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FristApp.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}
