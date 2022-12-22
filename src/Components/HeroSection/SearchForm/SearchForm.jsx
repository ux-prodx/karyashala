// ! Completely coded by Ali Hsaino with CSS modules
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Select from "react-select";
import styles from "./searchForm.module.css"
const SearchForm = ({ showErrorModal }) => {

    const searchFieldSubmitHandler = (e) => {
        e.preventDefault()
        if (searchField !== "") {
            setFormSubmissions([searchField, selectedValue.value])
            setSearchField("")
        } else {
            showErrorModal()
        }
    }
    const [searchField, setSearchField] = useState("")
    const searchFieldHandler = (e) => {
        setSearchField(e.target.value)
    }
    const options = [
        { value: 1, label: "Beginner" },
        { value: 2, label: "Intermediate" },
        { value: 3, label: "expertise" },
    ];
    const [selectedValue, setSelectedValue] = useState(options[0])
    const selectHandler = (e) => {
        setSelectedValue(e)
    }
    const [formSubmissions, setFormSubmissions] = useState()
    const iconStyle = {
        fontSize: "22px",
        position: "absolute",
        top: "14px",
        left: "4px",
    }
    return (
        <div className={styles.searchFormContainer}>
            <form className={styles.searchForm} onSubmit={searchFieldSubmitHandler}>
                <div><BiSearch style={iconStyle} />
                    <label style={{ display: "none" }}>Search</label>
                    <input type="text" placeholder="Search for events, communities" value={searchField} onChange={searchFieldHandler} />
                </div>
                <Select options={options} value={selectedValue} onChange={selectHandler} styles={{ border: "none" }} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm
