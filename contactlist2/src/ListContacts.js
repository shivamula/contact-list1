import React, { Component } from 'react'

class ListContacts extends Component {
    render() {
        return ( <ol className = "contact-list" > {
                this.props.contacts.map(
                    ({
                        id,
                        first_name,
                        last_name,
                        email,
                        avatar
                    }) => ( <li key = {
                            id
                        }
                        className = "contact-list-item" >
                        <
                        div className = "contact-avatar"
                        style = {
                            {
                                'background-image': `url(${avatar})`
                            }
                        }
                        title = {
                            first_name + last_name
                        }>
                        </div> 
                        <div className = "contact-details" >

                        <p> {
                            first_name + last_name
                        } </p> 
                        <p> {
                            email
                        } </p>


                        </div>
                         < button className = "contact-remove" > Remove </button> </li>
                    )
                )
            } </ol>
        )
    }
}

export default ListContacts;
