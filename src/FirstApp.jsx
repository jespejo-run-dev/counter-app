import PropTypes from 'prop-types';

export const FristApp = ({
    name = 'Jespejo',
    subTitle = 'no hay subtítulo',
    title = 'No hay título',
}) => {

    // console.log(props);

    return (
        <>
            <div data-testid="test-title">{title}</div>
            {/* Expresion no objeto */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FristApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}
