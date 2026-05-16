import Joi from "joi";


export const createContactSchema = Joi.object({
    userName: Joi.string()
            .trim()
            .required(),

    companyName: Joi.string()
                .trim()
                .required(),

    email: Joi.string()
            .lowercase()
            .email({
                tlds:{allow:["com","net"]}
            }),
    status: Joi.string()
            .valid('Interested','Follow Up','Closed')
            .default('Interested')
})


export const updateContactSchema = Joi.object({
    userName: Joi.string()
        .trim(),

    companyName: Joi.string()
        .trim(),

    email: Joi.string()
        .email(),

    status: Joi.string()
        .valid("Interested", "Follow Up", "Closed")
}).min(1); // at least one field required
