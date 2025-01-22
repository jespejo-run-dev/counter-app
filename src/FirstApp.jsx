import PropTypes from 'prop-types';

export const FirstApp = ({
    name = 'Jespejo',
    subTitle = 'no hay subtítulo',
    title = 'No hay título',
}) => {

    // console.log(props);

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            {/* Expresion no objeto */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}
