import React, { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [data, setData] = useState("Parteek")

    const [step, setStep] = useState(1);

    const [form1Data, setForm1Data] = useState({});
    const handleChangeForm1 = (e) => {
        setForm1Data({ ...form1Data, [e.target.name]: e.target.value });
    };

    const [form3Data, setForm3Data] = useState({});
    const handleChangeForm3 = (e) => {
        setForm3Data({ ...form3Data, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(form1Data);
    };

    return (
        <AppContext.Provider value={{ data, setData, step, setStep, form1Data, setForm1Data, handleChangeForm1, form3Data, setForm3Data, handleChangeForm3, handleSubmitForm }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;