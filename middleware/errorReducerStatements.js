reducer state changes for errors

-- requires appState property alertMessage

  


      // Show error message
        case actionTypes.SHOW_ALERT_MESSAGE: {
            return {
                ...state,
                alertMessage: {
                    isError: true,
                    message: action.response.error,
                },
            };
        }

        // Reset alert message
        case actionTypes.RESET_ALERT_MESSAGE: {
            return {
                ...state,
                alertMessage: initialState.alertMessage,
            };
        }
