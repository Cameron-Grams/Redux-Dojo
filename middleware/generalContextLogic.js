code for the generalContextLogic


{this.props.appState.alertMessage &&
                    <div className="error">
                        <Alert
                            isError={this.props.appState.alertMessage.isError}
                            message={this.props.appState.alertMessage.message}
                        />
                    </div>
                }



