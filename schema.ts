import yup from './yup-extended'

const schema = yup.object().shape({
    scheduleMasterList: yup.array().of(
        yup.object().shape({
            day: yup.string().required(),
            isWorking: yup.boolean().required()
        })
    ).required().validateScheduleMasterList()
})

export default schema