import { useState } from "react";
import { Link } from "react-router-dom";

function ContactList(props) {

    const [state, setState] = useState({ query: '' })
    const { contacts, onDeleteContacts } = props;
    const { query } = state

    const updateQuery = (query) => {
        setState(() => ({
            query: query.trim()
        }))
    }

    const clearQuery = (query) => {
        setState(() => ({
            query: ''
        }))
    }

    let showingContacts = query === '' ? contacts : contacts.filter((c) => (
        c.name.toLowerCase().includes(query.toLowerCase())
    ))




    return (
        <div className="list-contacts">
            <div className="list-contacts-top">
                <input
                    className="search-contacts"
                    type="text"
                    placeholder="Search Contacts"
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                />
                <Link to='/AddContact'
                    className="add-contact">Add</Link>
            </div>

            {showingContacts.length !== contacts.length && (
                <div className="showing-contacts">
                    <span>Now Showing {showingContacts.length} of {contacts.length} </span>
                    <button onClick={clearQuery}>Show All   </button>
                </div>
            )}

            <ol className="Contact-List">
                {
                    showingContacts.map((contact) => (
                        <li
                            key={contact.id}
                            className="contact-list-item">
                            <div
                                className="contact-avatar"
                                style={{
                                    background: `url(${contact.avatarURL})`
                                }}
                            >

                            </div>
                            <div className="contact-details">
                                <p className="">{contact.name}</p>
                                <p className="">{contact.handle}</p>
                            </div>
                            <button
                                className="contact-remove"
                                onClick={() => onDeleteContacts(contact)}>Remove</button>
                        </li>
                    ))
                }
            </ol>
        </div>

    );
}


export default ContactList; 