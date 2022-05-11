
export enum ACTION_CONSTANT {
    ADD = "ADD",
    UPDATE = "UPDATE"
}

export enum ELEMENT_TYPE {
    SELECT = "select",
    TEXT = "text",
    DATE = "date"
}

export enum STAGE_TYPE {
    NEW = 1,
    OPPORTUNITY = 2,
    UNDERWRITING = 3,
    PROPOSALS = 4
}

export const COLUMN = [
    {
        label: "Make",
        type: "select",
        enumType: "MT",
        name: "make"
    },
    {
        label: "Model",
        type: "select",
        enumType: "TYPE_OF_BODY",
        name: "model"
    },
    {
        label: "Engine Capacity",
        type: "text",
        enumType: "",
        name: "engineCapacity"
    },
    {
        label: "Registration number",
        type: "text",
        enumType: "",
        name: "registrationNumber"
    },
    {
        label: "Type of body",
        type: "select",
        enumType: "TYPE_OF_BODY",
        name: "typeOfBody"
    },
    {
        label: "Sum insured",
        type: "text",
        enumType: "",
        name: "sumInsured"
    },
    {
        label: "HVV for fleets",
        type: "text",
        enumType: "",
        name: "hvvForFleets"
    },
    {
        label: "Third Party Limits",
        type: "text",
        enumType: "",
        name: "thirdPartyLimit"
    },
    {
        label: "Deductible",
        type: "text",
        enumType: "",
        name: "deductible"
    },
    {
        label: "Discount",
        type: "text",
        enumType: "",
        name: "discount"
    },
    {
        label: "Year of make",
        type: "date",
        enumType: "",
        name: "yearOfMake"
    },
    {
        label: "Vehicle colour",
        type: "select",
        enumType: "VEHICLE_COLOR_TYPE",
        name: "vehicleColor"
    },

]

export enum SORT {
    SORT_DESC = "DESC",
    SORT_ASC = "ASC"
}

export enum REGEX_CONSTANT {
    ONLY_NUMBER = "^[0-9]*$",
    ONLY_ALPHABETWITHSPACE = "^[a-zA-Z ]*$",
    ONLY_ALPHABET = "^[a-zA-Z]*$",
    ONLY_ALPHANUMERIC = "^[a-zA-Z0-9]*$",
    EMAIL = "^[\\w!#$%&’*+/=?`{|}~^-]+(?:\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
}


export enum DOCUMENT_TYPE {
    ADDRESS = "ADDRESS",
    IDENTIFICATION = "IDENTIFICATION",
    EMPLOYMENT = "EMPLOYMENT",
    SIGNED_CONTRACT ="SIGNED_CONTRACT"
}