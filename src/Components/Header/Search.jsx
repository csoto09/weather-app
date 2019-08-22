import React from 'react'
import "rbx/index.css";
import { Field, Input, Control, Icon } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Search = () => {
    return (
        <div>

            <Field>
                <Control iconLeft>
                    <Input type="text" rounded placeholder="Search is disabled" disabled />
                    <Icon align="left">
                        <FontAwesomeIcon icon={faSearch} />
                    </Icon>
                </Control>

            </Field>
        </div>
    )
}

export default Search
