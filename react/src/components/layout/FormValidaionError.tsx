
interface ErrorProps {
    errors:any
}

const FormValidaionError:React.FC<ErrorProps> = ({errors}) => {
    const showErrors = () => {
        if (errors !== null && errors.errors !== null) {
            const flightOperationErrors = Object.values(errors.errors).map(
                (item: any) => {
                    return <p className=" p-4 m-2 border-b">{item}</p>
                }
            );
            return flightOperationErrors;
        }
    };
return (
    <div className=" bg-red-700 m-4 rounded-md text-white">
{showErrors()}
    </div>
)
}

export default FormValidaionError
