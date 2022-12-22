import { useForm, ValidationError } from '@formspree/react';
 
const Form = () => {
    const [state, handleSubmit] = useForm("xnqyagnj");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                id="email"
                type="email" 
                name="email"
            />

            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </form>
    )

}

export default Form