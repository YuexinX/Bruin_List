class HttpError extends Error{
    constructor(message, errorCode){
        super(message); //Add a message property to Error
        this.code = errorCode;
    }
}

export default HttpError;