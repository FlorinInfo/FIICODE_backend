class ValidationError extends Error {
    constructor(message) {
        super(message ? message : "ValidationError");
        this.type = "ValidationError";
        this.title = "validationError";
        this.details = "Corpul cererii este invalid, consultati documentatia.";
        this.statusCode = 400;
    }
}

class EmailInvalidError extends ValidationError {
    constructor() {
        super("EmailInvalidError");
        this.type = "EmailInvalidError";
        this.title = "email";
        this.details =
            "Email-ul nu are forma corecta, furnizati o adresa de email corecta.";
    }
}

class AddressInvalidError extends ValidationError {
    constructor() {
        super("AddressInvalidError");
        this.type = "AddressInvalidError";
        this.title = "address";
        this.details = "Adresa furnizata nu este corecta sau lipseste.";
    }
}

class LastNameInvalidError extends ValidationError {
    constructor() {
        super("LastNameInvalidError");
        this.type = "LastNameInvalidError";
        this.title = "lastName";
        this.details = "Numele nu exista sau este invalid.";
    }
}

class FirstNameInvalidError extends ValidationError {
    constructor() {
        super("FirstNameInvalidError");
        this.type = "FirstNameInvalidError";
        this.title = "firstName";
        this.details = "Prenumele nu exista sau este invalid.";
    }
}

class PasswordInvalidError extends ValidationError {
    constructor() {
        super("PasswordInvalidError");
        this.type = "PasswordInvalidError";
        this.title = "password";
        this.details =
            "Parola furnizata nu are forma corecta, parola trebuie sa contina minimum 6 caractere.";
    }
}

class PhotoInvalidError extends Error {
    constructor() {
        super("PhotoInvalidError");
        this.type = "PhotoInvalidError";
        this.title = "photo";
        this.details = "Poza furnizata lipseste sau este invalida.";
        this.statusCode = 400;
    }
}

class EmailNotExistsError extends Error {
    constructor() {
        super("EmailNotExistsError");
        this.type = "EmailNotExistsError";
        this.title = "email";
        this.details = "Nu exista un cont cu aceasta adresa de email.";
        this.statusCode = 404;
    }
}

class WrongPasswordError extends Error {
    constructor() {
        super("WrongPassowordError");
        this.type = "WrongPasswordError";
        this.title = "password";
        this.details = "Parola nu corespunde adresei de email.";
        this.statusCode = 400;
    }
}

class EmailAlreadyExistsError extends Error {
    constructor() {
        super("EmailAlreadyExistsError");
        this.type = "EmailAlreadyExistsError";
        this.title = "email";
        this.details =
            "Acesta adresa de email este deja folosita, va rugam sa va logati sau sa adaugati alta adresa.";
        this.statusCode = 409;
    }
}

module.exports = {
    ValidationError,
    EmailInvalidError,
    PasswordInvalidError,
    PhotoInvalidError,
    EmailNotExistsError,
    WrongPasswordError,
    EmailAlreadyExistsError,
    AddressInvalidError,
    LastNameInvalidError,
    FirstNameInvalidError,
};
