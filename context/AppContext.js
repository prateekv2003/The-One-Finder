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

    // this is the final data to be sent to the backend
    const formData = { ...form1Data, preferences: Object.assign({}, form3Data) };


    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    // for Recs.....
    const [whoFor, setWhoFor] = useState("M")
    const [whatFor, setWhatFor] = useState("R")
    const [isDrinker, setIsDrinker] = useState('N')
    const [isSmooker, setIsSmooker] = useState('N')

    return (
        <AppContext.Provider value={{ data, setData, step, setStep, form1Data, setForm1Data, handleChangeForm1, form3Data, setForm3Data, handleChangeForm3, handleSubmitForm, whoFor, setWhoFor, whatFor, setWhatFor, isDrinker, setIsDrinker, isSmooker, setIsSmooker }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;