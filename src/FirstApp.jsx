import PropTypes from 'prop-types';

export const FristApp = ({title, subTitle}) => {

    // console.log(props);

    return (
        <>
            <h1>{title}</h1>
            {/* Expresion no objeto */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
        </>
    )
}

FristApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}