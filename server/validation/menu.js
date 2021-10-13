import joi from "joi";



export const ValidateRestaurantId = (resId) => {

    const Schema = joi.object({
        _id: joi.string().required(), 
        });

    return Schema.validateAsync(resId);
};

export const ValidateCategory = (category) => {

    const Schema = joi.object({
        
        email: joi.string().email().required(),
        password: joi.string().min(5).required(),
        
    });

    return Schema.validateAsync(category);
};