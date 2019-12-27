export interface AppFormula {
    parameters: AppParameters[],
    id: number,
    uuid: string,
    createdAt: string,
    updatedAt: string,
    name: string,
    formula: string
}

export interface AppParameters {
    id: number,
    validation: AppValidation,
    default: string,
    name: string,
    label: string
}

export interface AppValidation {
    min: number,
    max: number,
    required: boolean,
    readonly: boolean,
    params: string
}

export interface QueryParams {
    min: string,
    max: string
}