import {showMessage} from 'react-native-flash-message';

const message = (message, code) => {
    if(code === 200) {
        return (
            showMessage({
                message: message,
                type: 'success',
                backgroundColor: '#009da6',
                color: '#f7f7f7',
                duration: 2000
            })
        )
    } else {
        return(
            showMessage({
                message: message,
                type: 'warning',
                backgroundColor: '#f0ad4e',
                color: '#f7f7f7',
                duration: 2000
            })
        )
    }
};

export default message;