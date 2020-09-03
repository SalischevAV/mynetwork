import * as Yup from 'yup';

const userCreateSchemaValidation = Yup.object().shape({
    name: Yup.string()
        .min(4, 'must be longer then 4 characters')
        .required('required field'),
    username: Yup.string()
        .min(4, 'must be longer then 4 characters')
        .required('required field'),
    email: Yup.string()
        .required('required field'),
    phone: Yup.string()
        .min(6, 'must be longer then 6 characters'),
    website: Yup.string(),
    password: Yup.string()
        .min(8, 'must be longer then 8 characters')
        .required('required field'),
});

export default userCreateSchemaValidation;